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

Coder creates the workspace from a template restricted to my account. It provisions a Proxmox VM, installs pinned binaries, mounts the QNAP source export at `/workspaces/muness-src` over hard NFS, and sets up systemd services. I run stock Codex and my `assembler` fork in separate Unix accounts with a shared source group. Each has its own home, credentials, database, and daemon. Other Coder templates provision Linux VMs and GPU-capable containers.

The Codex SQLite databases stay on the VM's local disk to avoid network-filesystem locking problems. Rust build output stays local too, with `CARGO_TARGET_DIR` under each account's home. The `fleet-sccache` wrapper reads its credentials from a restricted file, then invokes `sccache` against the QNAP's MinIO bucket. Deleting the VM leaves source intact, but not private agent state; that needs a separate backup.

The template sets workspace expiry to zero and disables dormant deletion. A running VM is set to boot when Proxmox starts; systemd starts the Codex daemons and restarts them after a crash. An explicit stop in Coder disables that automatic boot. First-boot cloud-init stays fixed across later starts. An early stop/start test replaced the VM when that input changed, which would have erased private state. The template now keeps it unchanged; the Proxmox guest agent refreshes rotating Coder connection tokens and managed helper scripts instead.

The template checks owner restrictions, mount scope, and boot policy. On the live VM, `fleet-codex-verify stock` and `fleet-codex-verify assembler` check the mount, state permissions, daemon protocol, and systemd service. I tested stop/start, guest reboot, killing a daemon, a missing NFS mount, and a wrong binary checksum. Daemon startup fails if the mount is missing, so it cannot write into the empty local directory beneath it. Private state survived the tested recovery paths. Codex has read and written a workspace file and made an outbound HTTPS request. Restore into a new VM, hypervisor reboot, fresh-laptop access, and native phone pairing still need testing.

## Linux and Mac builds

A workflow uses labels to request Linux, macOS, or CUDA. The two Linux builders are Proxmox LXCs: `runner-nuc14-columbus` and `runner-9950x-columbus`. They start ephemeral Docker runners limited to four CPUs and 8 GiB each. The NUC has two slots; the 9950X has four. Both advertise `linux-general`; only the 9950X has a GPU and advertises `linux-cuda`. I give the NUC higher priority for CPU builds so they leave the 9950X free for CUDA and inference. The Mac advertises one `macos-arm64` slot. Labels for iOS, watchOS, and other Apple targets use that same slot.

We wrote the broker and run it on the QNAP. It polls GitHub for queued jobs without a public webhook endpoint; signed webhooks can feed the same controller. The broker matches job labels against host capability and free capacity, reserves a slot, gets a short-lived repository registration token, and asks that host's adapter to launch a runner. The runner registers as ephemeral, accepts one job, and exits.

When the job completes or is cancelled, the broker tells the provider to clean up and releases the slot. If hosts are busy or drained for maintenance, it keeps jobs pending. GitHub job IDs prevent duplicate launches; pending jobs and leases live in an atomically replaced JSON file. On startup and periodically, the broker reconciles leases and retries cleanup. Placement, draining, cancellation, and cleanup have passed live tests.

On the M4 Max MacBook Pro, a persistent Tart macOS guest keeps Xcode and build caches between jobs. A controller guest on the NUC runs the provider agent; the Tart guest accepts one job at a time. The GitHub runner registration is ephemeral, but the Mac guest is reused. I keep untrusted pull requests off these runners because [ephemeral registration](https://docs.github.com/en/actions/reference/runners/self-hosted-runners#ephemeral-runners-for-autoscaling) does not wipe the machine afterward.

The broker's Docker placement policy passes the MinIO bucket, endpoint, and cache credentials to each Linux job container. The runner image includes `sccache`; its entrypoint sets `RUSTC_WRAPPER=sccache` when the backend is configured and disables Cargo incremental compilation. `target/` stays local to the disposable job, while compiled results go to the shared bucket. CI jobs receive cache credentials in their environment, so I only put trusted work on these runners.

The two Linux builders use one `sccache` bucket on the QNAP's MinIO server. A compile cached on the NUC can be reused on the 9950X, and vice versa. I checked both directions with fresh runner containers: each first compile missed, and the same compile on the other host hit. Those probes compiled C, not Rust.

We had documented a shared NFS directory as safe because `sccache` writes cache files atomically. That missed its index: [the local disk backend supports only one server](https://github.com/mozilla/sccache/blob/main/docs/Local.md), and two builders writing it can race. We changed the runners to use [sccache's S3 backend](https://github.com/mozilla/sccache/blob/main/docs/S3.md) against MinIO, then tested the cross-host hits. Seeing the same files on both machines was not enough to make the cache safe.

I originally kept an ARM64 Linux guest for another build target. Cross-compiling that workload with `cargo-zigbuild` on the 9950X was faster, so I retired the guest. I kept the Mac for Xcode, signing, and native macOS tests.

## SSH and credentials

The services and workload guests join a dedicated Tailscale tailnet. Tailscale SSH authorizes my identity to connect to the two Codex accounts, so I do not need to distribute SSH private keys for those connections. Other operator SSH paths still use keys.

For credentials, each Codex account has a separate, read-only 1Password Connect token in a configuration file readable only by that account. Our `op` wrapper reads this configuration when invoked. An agent can resolve `op://Fleet/ITEM/FIELD` with `op read`, or use `op run` to put the value in a command's environment. Each account's `AGENTS.md` documents the wrapper and the references to use. This works without an interactive 1Password login.

The tokens can read the whole Fleet vault. I use that access for my personal agents; CI runners receive no Connect access. The Coder template publishing job gets its own narrower token. The accounts and file permissions protect against ordinary cross-account reads, but root on the hypervisor can still read the guests' data. The NFS source share also assumes trusted clients.

## Qwen, Jev, and computer use

The local Qwen 27B uses EXL3 weights quantized to 3.5 bits per weight and runs on the 3090 Ti's 24 GB of VRAM. I had to disable app integrations because their tool descriptions took up too much of the prompt.

### Qwen in Codex

The stock Codex workspace now shows Qwen alongside the hosted models. Its `openai_base_url` points to a loopback router on port 8082, and a saved catalog combines Qwen with the OpenAI models available when it was generated. The router sends Qwen requests to the authenticated LiteLLM Responses gateway on port 8081; hosted requests go to OpenAI. It does not send ChatGPT credentials to Qwen. The catalog is a snapshot and must be refreshed when the hosted model list changes.

Ordinary turns worked, but a Qwen task failed at compaction: Codex expected a `compaction` item, and ordinary Qwen inference did not produce one. Switching the task to OpenAI failed too, because Qwen's history contained reasoning-item IDs OpenAI had never stored.

[PR #58](https://github.com/open-horizon-labs/homelab-infra/pull/58) makes the router produce the required compaction item and encrypts/authenticates its summary for later replay. When sending history to OpenAI, it removes Qwen reasoning IDs that OpenAI cannot resolve but keeps messages and tool-call IDs. When switching back to Qwen after native OpenAI compaction, it asks OpenAI to expand the opaque checkpoint into text first. A live Codex test went Qwen → compaction → OpenAI → compaction → Qwen, retaining a sentinel, a changed file, and test status. The original failed task has not been resumed. Summaries can still lose detail; the router supports full-history HTTP replay, not arbitrary stored-ID history.

### Computer use

Cua Driver runs on the computer being controlled. It reads browser state through the debugger or native controls through accessibility. The agent assigns IDs to candidate actions and keeps their click or typing arguments tied to that observation. The JSON sent to the selector contains descriptions rather than executable actions:

```json
{"goal":"Save the document","observation":"Save button is enabled","candidates":{"save":"Click Save","reobserve":"Read the screen again","abstain":"Stop"}}
```

If the selector returns `save`, the controller checks that this ID still belongs to the current snapshot, then invokes Driver with the stored click arguments. It rereads the UI and sends feedback to the same selector process.

Our `select-fleet --fast jev` wrapper keeps one selector process running for the task and exchanges JSON lines with the agent. Hosted Jev tries the choice first. If it reports low confidence or returns invalid output, the selector asks local Qwen through its chat endpoint. `verified_progress` permits another Jev attempt after the next observation changes; `no_progress` or `uncertain` keeps the task on Qwen. `reobserve` and `abstain` are control choices, not clicks. This handoff works in testing, but the combined cascade has not passed the full booking benchmark. Jev receives text observations through a hosted service, so I send it only observations I intend to share.

For direct local selection, we added `/v1/choices` to the inference server. It scores candidate labels at one output position, with reasoning and draft generation disabled. A FastAPI adapter exposes this as `/v1/systemone`. Both routes use the model already loaded for chat, and screenshots go through that model's vision encoder. Chat and selection take turns using the GPU.

The direct route returns scores that have not been calibrated as confidence estimates, so we call it separately from the Jev cascade. We compared the two Qwen paths on 35 recorded, text-only booking decisions, with the model already loaded. Direct scoring got 27 right at a median 615 ms per request; generating reasoning got 34 right at 2,583 ms. These measurements cover model requests, excluding browser actions. I use direct scoring selectively because of the accuracy loss, and the agent still has to verify the action's result.

On the Mac, the selector retrieves the Jev and Qwen credentials over authorized SSH connections to the accounts with Connect access. It keeps the values in process memory. Away from the LAN, an SSH tunnel forwards the inference ports through a fleet host.

We had tried dedicated 2B and 9B deciders. Reusing the 27B let us stop the 9B service and free the 3060 Ti. Text and screenshot selection now use the 3090 Ti, sharing its memory and processing time with chat.

## Hardware and cost

I bought the Ryzen 9950X system with a 3090 Ti and 64 GB of RAM. After waiting for a used deal on eBay, I added another 64 GB for about $700. The resulting 128 GB holds guests and build processes; the GPU has its own 24 GB for inference. The RAM upgrade did not give Qwen more VRAM.

I already had the QNAP, the NUC running Ubuntu solely for Roon, and an idle M4 Max MacBook Pro. The NUC now hosts Proxmox, Coder, my personal workspace VM, and a Linux builder guest. The QNAP runs the broker and Grafana/Prometheus as well as storing source and compiler cache entries. The Mac runs the Tart guest for Apple builds.

The 3060 Ti was also an earlier purchase, for HQPlayer DSP. I had ended up not using it because the UM790 Pro was enough for DSD512 upsampling. A Linux workspace using hosted inference can run without either GPU. I use the Mac for builds that require Apple's tools.

## Still to try

I still need to restore a backup into a fresh guest and test access from a fresh client. The broker and its state live on one QNAP, and there is no second site for failover.

On a [Mac Studio with M5 Ultra](https://www.apple.com/newsroom/2026/09/the-new-mac-mini-and-mac-studio-are-available-today/) or [DGX Spark](https://docs.nvidia.com/dgx/dgx-spark/hardware.html), I would start with the computer-use decisions this 27B got wrong and try a model that exceeds the 3090 Ti's 24 GB. I'd also test longer prompts and concurrent requests, comparing answers and elapsed time with this setup.
