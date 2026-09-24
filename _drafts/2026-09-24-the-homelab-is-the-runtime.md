---
title: "Building a Homelab for Codex, CI, and Local Inference"
date: 2026-09-24 10:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "How I connected Coder workspaces, Linux and Mac CI runners, and a local Qwen model, using Tailscale for access and 1Password Connect for credentials."
---

I use ChatGPT and Claude for the heavy work. My Codex workspace runs in a Linux VM on a NUC that used to be dedicated to Roon. I connect to it over SSH from the Codex desktop app. When I disconnect, the agent daemon keeps running, with its private state on the VM.

GitHub Actions sends builds to Linux and Mac runners across the fleet. A broker assigns the jobs and cleans up afterward. I also run Qwen 27B on a 3090 Ti for local chat and computer-use decisions. The Codex workspace can use hosted inference without a GPU.

## The Coder workspace

Coder creates the workspace from a template that provisions a Proxmox VM, installs pinned binaries, mounts the source directory, and sets up systemd services. I run stock Codex and my `assembler` fork in separate Unix accounts. Each has its own home, credentials, database, and daemon; both accounts mount the same source directory from the QNAP over NFS. Other Coder templates provision Linux VMs and GPU-capable containers.

The Codex SQLite databases stay on the VM's local disk to avoid network-filesystem locking problems. Rust build output stays local too, with `CARGO_TARGET_DIR` pointing to a directory on that disk. To share compiled results between builds, `sccache` reads and writes a MinIO bucket on the QNAP. Deleting the VM leaves the source directory intact. Its private agent state needs a separate backup.

We disabled Coder's automatic workspace expiry and dormant deletion. A running workspace is set to boot when Proxmox starts, and systemd starts the Codex daemons and restarts them after a crash. An explicit stop in Coder disables that automatic boot.

An early stop/start test replaced the VM because its cloud-init input had changed. The source survived on NFS, but private state on the VM would have been lost. We fixed the template to retain its first-boot cloud-init input. Later starts use the Proxmox guest agent to refresh Coder connection tokens and update the installed helper scripts without replacing the VM.

We checked stop/start, guest reboot, and recovery after killing a daemon. Private state survived. We also made daemon startup fail when the NFS mount is missing, so an agent cannot write into the empty local directory beneath the mount. Through the desktop connection, Codex has read and written a workspace file and made an outbound HTTPS request. Access from a fresh laptop and native phone pairing still need testing.

## Linux and Mac builds

A workflow uses runner labels to request Linux, macOS, or CUDA. CPU-only Linux jobs can run in builder guests on the NUC or 9950X; CUDA jobs use the 9950X, and macOS jobs use the Mac. The broker matches job labels against the capabilities and available capacity reported by host agents, then reserves a slot and asks the selected host's adapter to start a runner.

We wrote the broker and run it on the QNAP. It can poll the GitHub API for queued jobs while staying on the private network. Signed webhooks feed the same controller. Before launching a runner, the controller obtains a repository-scoped registration token. The runner registers as ephemeral, accepts one job, and exits.

When the job completes or is cancelled, the broker tells the provider to clean up and releases the slot. If the machines are busy or draining for maintenance, it keeps the job pending. It uses GitHub job IDs to avoid launching another runner for a repeated event, and saves pending jobs and leases in an atomically replaced JSON file. At startup and on a timer, it checks for expired leases and removes leftover runner allocations. Placement, draining, cancellation, and cleanup have passed live tests on the providers.

Linux jobs have CPU and memory limits. On the M4 Max MacBook Pro, a Tart macOS guest keeps Xcode and build caches between jobs and accepts one runner at a time. Only the runner registration is ephemeral; the guest is reused. I keep untrusted pull requests off these runners because [ephemeral registration](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#ephemeral-runners-for-autoscaling) does not wipe the machine afterward.

The two Linux builders use one `sccache` bucket on the QNAP's MinIO server. A compile cached on the NUC can be reused on the 9950X, and vice versa. I checked both directions with fresh runner containers: each first compile missed, and the same compile on the other host hit.

We had documented a shared NFS directory as safe because `sccache` writes cache files atomically. That missed its index: [the local disk backend supports only one server](https://github.com/mozilla/sccache/blob/main/docs/Local.md), and two builders writing it can race. We changed the runners to use [sccache's S3 backend](https://github.com/mozilla/sccache/blob/main/docs/S3.md) against MinIO, then tested the cross-host hits. Seeing the same files on both machines was not enough to make the cache safe.

I originally kept an ARM64 Linux guest for another build target. Cross-compiling that workload with `cargo-zigbuild` on the 9950X was faster, so I retired the guest. I kept the Mac for Xcode, signing, and native macOS tests.

## SSH and credentials

The services and workload guests join a dedicated Tailscale tailnet. Tailscale SSH authorizes my identity to connect to the two Codex accounts, so I do not need to distribute SSH private keys for those connections. Other operator SSH paths still use keys.

For credentials, each Codex account has a separate, read-only 1Password Connect token in a configuration file readable only by that account. Our `op` wrapper reads this configuration when invoked. An agent can resolve `op://Fleet/ITEM/FIELD` with `op read`, or use `op run` to put the value in a command's environment. Each account's `AGENTS.md` documents the wrapper and the references to use. This works without an interactive 1Password login.

The tokens can read the whole Fleet vault. I use that access for my personal agents; CI runners receive no Connect access. The Coder template publishing job gets its own narrower token. The accounts and file permissions protect against ordinary cross-account reads, but root on the hypervisor can still read the guests' data. The NFS source share also assumes trusted clients.

## Qwen, Jev, and computer use

The local Qwen 27B uses EXL3 weights quantized to 3.5 bits per weight and runs on the 3090 Ti's 24 GB of VRAM. I had to disable app integrations because their tool descriptions took up too much of the prompt.

The stock Codex workspace now shows Qwen alongside the hosted models. A loopback router sends Qwen requests to its local gateway and leaves hosted requests with OpenAI; it keeps the credentials separate. Ordinary turns worked, but a Qwen task failed at compaction: Codex expected a `compaction` item, and ordinary Qwen inference did not produce one. Switching the task to OpenAI failed too, because Qwen's history contained reasoning-item IDs OpenAI had never stored.

[PR #58](https://github.com/open-horizon-labs/homelab-infra/pull/58) makes the router produce the required compaction item, carry a protected summary across model switches, and omit Qwen-only reasoning IDs when replaying history to OpenAI. Switching back to Qwen after OpenAI compaction requires one more OpenAI call to turn its opaque checkpoint into text. A live Codex test went Qwen → compaction → OpenAI → compaction → Qwen while retaining a sentinel, a changed file, and test status. The original failed task has not been resumed.

Cua Driver runs on the computer being controlled. It reads browser state through the debugger or native controls through accessibility. The agent assigns IDs to candidate actions and keeps their click or typing arguments tied to that observation. For example, a Save button gets an ID whose stored arguments refer to that button in the current page. The selector returns the ID; Driver uses the stored arguments to act.

Our `select-fleet --fast jev` wrapper keeps one selector process running for the task and exchanges JSON lines with the agent. Hosted Jev tries the choice first. If its reported confidence is too low or it returns invalid output, the selector asks local Qwen through its chat endpoint. After Driver acts, the agent reads the UI again and sends feedback with the next request. Verified progress allows another Jev attempt; uncertainty or no progress keeps the task on Qwen. We have tested the handoff, but not the combined cascade through the full booking benchmark.

For direct local selection, we added `/v1/choices` to the inference server. It scores candidate labels at one output position, with reasoning and draft generation disabled. A FastAPI adapter exposes this as `/v1/systemone`. Both routes use the model already loaded for chat, and screenshots go through that model's vision encoder. Chat and selection take turns using the GPU.

The direct route returns scores that have not been calibrated as confidence estimates, so we call it separately from the Jev cascade. We compared the two Qwen paths on 35 recorded, text-only booking decisions, with the model already loaded. Direct scoring got 27 right at a median 615 ms per request; generating reasoning got 34 right at 2,583 ms. These measurements cover model requests, excluding browser actions. I use direct scoring selectively because of the accuracy loss, and the agent still has to verify the action's result.

On the Mac, the selector retrieves the Jev and Qwen credentials over authorized SSH connections to the accounts with Connect access. It keeps the values in process memory. Away from the LAN, an SSH tunnel also forwards the inference ports through a fleet host.

We had tried dedicated 2B and 9B deciders. Reusing the 27B let us stop the 9B service and free the 3060 Ti. Text and screenshot selection now use the 3090 Ti, sharing its memory and processing time with chat.

## Hardware and cost

I bought the Ryzen 9950X system with a 3090 Ti and 64 GB of RAM. After waiting for a used deal on eBay, I added another 64 GB for about $700. The resulting 128 GB holds guests and build processes; the GPU has its own 24 GB for inference. The RAM upgrade did not give Qwen more VRAM.

I already had the QNAP, the NUC running Ubuntu solely for Roon, and an idle M4 Max MacBook Pro. The NUC now hosts Proxmox, Coder, my personal workspace VM, and a Linux builder guest. The QNAP runs the broker and Grafana/Prometheus as well as storing source and compiler cache entries. The Mac runs the Tart guest for Apple builds.

The 3060 Ti was also an earlier purchase, for HQPlayer DSP. I had ended up not using it because the UM790 Pro was enough for DSD512 upsampling. A Linux workspace using hosted inference can run without either GPU. I use the Mac for builds that require Apple's tools.

## Still to try

I still need to restore a backup into a fresh guest and test access from a fresh client. The broker and its state live on one QNAP, and there is no second site for failover.

On a [Mac Studio with M5 Ultra](https://www.apple.com/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/) or [DGX Spark](https://docs.nvidia.com/dgx/dgx-spark/hardware.html), I would start with the computer-use decisions this 27B got wrong and try a model that exceeds the 3090 Ti's 24 GB. I'd also test longer prompts and concurrent requests, comparing answers and elapsed time with this setup.

## Appendix: wiring and checks

### The personal workspace template

The template restricts creation to my Coder owner ID. It sets the workspace TTL to zero and disables dormant deletion. It mounts the QNAP source export at `/workspaces/muness-src` with a hard NFS mount and a shared group ID for the two accounts. Neither credentials nor live Codex databases go on that share. Each account keeps its database and authentication state on the VM disk; `CARGO_TARGET_DIR` puts Rust build output there too. The `sccache` wrapper uses the QNAP's MinIO bucket for reusable compiler results.

Stock Codex is pinned to a version and tarball checksum. The `assembler` binary is pinned to a commit and checksum. Each account's systemd service enables Codex remote control and starts its native app-server daemon. On a later Coder start, a Proxmox guest-agent step refreshes Coder's rotating connection tokens and updates the managed helper scripts. We leave first-boot cloud-init unchanged, because changing it once caused Coder to replace the VM on stop/start.

The template tests check owner restrictions, mount scope, and boot policy. On the live VM, `fleet-codex-verify stock` and `fleet-codex-verify assembler` check the mount, state permissions, daemon protocol, and systemd service. We also checked a private file after stop/start, rebooted the guest, killed a daemon, removed the NFS mount, and supplied a wrong binary checksum. A real hypervisor reboot and restoration into a new VM remain untested.

### One Actions job

The two Linux builders are Proxmox LXCs: `runner-9950x-columbus` and `runner-nuc14-columbus`. Their providers start one-job Docker runners inside the guests, each limited to four CPUs and 8 GiB. The 9950X builder advertises `linux-general` and `linux-cuda`; the NUC builder advertises `linux-general` and has no GPU. I give the NUC a slightly higher broker priority for ordinary Linux jobs, leaving the 9950X available for CUDA work. The NUC's old Podman runner was removed during its Proxmox rebuild; this builder is a new guest.

The broker's Docker placement policy passes the MinIO bucket, endpoint, and cache credentials to each Linux job container. The runner image includes `sccache`; its entrypoint sets `RUSTC_WRAPPER=sccache` when the backend is configured and disables Cargo incremental compilation. Rust `target/` output stays local to the job. The reusable compiler results go to MinIO and survive disposal of the runner. In the personal Coder workspace, `RUSTC_WRAPPER` instead points to `fleet-sccache`, a wrapper that reads a restricted credential file before running `sccache`; its Cargo target directory stays on the VM disk. CI jobs receive cache credentials in their environment, so I only put trusted work on these runners. The cross-host check used C compiles in fresh containers of the same runner image, in both directions; it did not test a Rust workflow moving between hosts.

The Mac advertises one `macos-arm64` slot. Labels for iOS, watchOS, and the other Apple targets map to that same slot; they do not create more Macs. A controller guest on the NUC runs the provider agent, while the persistent Tart guest on the Mac runs the actual job. The guest keeps Xcode and caches between registrations.

The QNAP broker polls GitHub for queued jobs because it has no public webhook endpoint. It records pending jobs and host leases in a JSON state file. For each job it gets a short-lived repository registration token, asks the selected provider to start a runner, and waits for that runner to appear online. Completion and cancellation release the lease and remove the allocation. After a broker restart, reconciliation checks existing leases before taking more work; a periodic reaper retries cleanup. A drained host receives no new job, and pending jobs wait for capacity.

### Switching Codex models

On the stock Codex workspace, `openai_base_url` points to a router on `127.0.0.1:8082`. A saved model catalog lists the hosted models and local Qwen together. The router sends Qwen requests to the authenticated LiteLLM Responses gateway on port 8081 and hosted requests to OpenAI, without passing ChatGPT credentials to Qwen. The catalog is a snapshot; it needs refreshing when the hosted model list changes.

Codex requests remote compaction by adding `compaction_trigger` to a Responses request. The router asks Qwen for a summary, rejects an empty or incomplete answer, and returns the single `compaction` item Codex expects. It encrypts and authenticates that summary for later replay. A handoff to OpenAI keeps messages and tool-call IDs but removes Qwen reasoning-item IDs that were never stored there. A handoff back to Qwen after native OpenAI compaction asks OpenAI to expand its opaque checkpoint into text first. This works for Codex's full-history HTTP replay; summaries can still lose detail, and rotating the checkpoint key needs migration.

### A computer-use decision

The controller runs Cua Driver on the desktop it is controlling, reads a fresh browser or accessibility snapshot, and builds candidate IDs. It keeps the snapshot's actual click and typing arguments locally. The JSON sent to the long-running selector contains descriptions, not executable tool calls:

```json
{"goal":"Save the document","observation":"Save button is enabled","candidates":{"save":"Click Save","reobserve":"Read the screen again","abstain":"Stop"}}
```

With `select-fleet --fast jev`, one JSON line goes in and one choice comes back. The controller checks that the returned ID still belongs to the current snapshot, executes its stored arguments through Driver, observes the result, and sends feedback to the **same** selector process. `verified_progress` permits a new Jev attempt after the observation changes. `no_progress` or `uncertain` escalates to Qwen. `reobserve` and `abstain` are control choices, never clicks. Jev receives the text observation through a hosted service, so I use it only for observations I intend to send there.

The direct local path uses `/v1/systemone` for text or one screenshot. That adapter forwards to `/v1/choices` on the already-loaded 27B. Its scores are uncalibrated; the controller must still check the UI after acting. The Jev cascade currently uses text observations, while the direct Qwen path can use the vision encoder. The Mac retrieves the Jev and Qwen credentials through the Connect-enabled accounts over SSH; an authorized tunnel supplies network access to Qwen when the Mac is away from the LAN.
