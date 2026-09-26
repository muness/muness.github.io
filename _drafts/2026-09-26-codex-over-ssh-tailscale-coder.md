---
title: "Codex on a Remote Host: SSH, Tailscale, and Coder"
date: 2026-09-26 09:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "Codex can run without a desktop on the machine doing the work. SSH gets you there; Tailscale and Coder make the host private, repeatable, and persistent."
permalink: /posts/codex-over-ssh-tailscale-coder/
---

I mentioned to a colleague that I run Codex on a Linux machine and connect from the desktop app over SSH. He had not heard that Codex could work without a desktop on the machine doing the work. That is the part worth explaining: the app on my Mac is the client; the project, shell, tools, Codex state, and App Server run on the remote host.

There are two simple ways to try it. SSH into a machine and run `codex` in the terminal, or add that machine as an SSH connection in the Codex desktop app. In the second setup, the desktop app starts the remote Codex App Server through SSH. The remote host needs the Codex CLI installed, authenticated, and available in the login shell's `PATH`; it does not need a graphical desktop. The remote project chat reads and changes files and runs commands on that machine. The App Server runs the tool loop; inference comes from the model provider configured for that Codex account. In my stock setup, that is ChatGPT. The Linux VM is not running a ChatGPT model.

## Start with SSH

On a Linux or macOS host, install Codex and authenticate the account that will run it. For a headless shell, the CLI supports device-code login:

```sh
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex login --device-auth
```

Then add a concrete host alias to `~/.ssh/config` on the computer running the desktop app:

```sshconfig
Host devbox
  HostName devbox.example.net
  User muness
  IdentityFile ~/.ssh/id_ed25519
```

First check the same route outside the app:

```sh
ssh devbox 'command -v codex && codex --version'
```

In Codex, open **Settings → Connections → SSH**, add `devbox`, and choose a project directory. The desktop app starts the remote App Server using that account's login shell. Codex uses the remote filesystem and shell; I do not need to mount the project onto my Mac or expose an App Server port. OpenAI's [SSH remote guide](https://learn.chatgpt.com/docs/remote-connections#connect-to-an-ssh-host) documents this setup.

If you only need the terminal interface, skip the desktop connection: `ssh devbox`, change into the repository, and run `codex`. The App Server is the protocol layer that lets a UI client such as the desktop app talk to Codex on another machine. It runs without a GUI. The direct App Server commands and transports are documented separately; some of those low-level transports are marked experimental, so I use the desktop's SSH-managed connection instead of opening a WebSocket listener to the network.

SSH gets the process onto another machine. It does not give that machine a lifecycle, preserve its state after deletion, or make it reachable when you leave your home network. Those are the layers I added.

## Tailscale handles reachability and SSH identity

The workspace VM joins my fleet tailnet. My Mac reaches its tailnet hostname over Tailscale, and the tailnet policy limits SSH to my identity and the two Unix accounts that run Codex. Tailscale SSH handles that login without copying a user SSH private key to the VM. The Codex desktop app still connects through an ordinary OpenSSH host alias; in my setup Coder generates the aliases and their Coder-managed SSH authentication. Direct Tailscale SSH is another authorized route to the same accounts.

Those credentials solve different problems. Tailscale decides whether my device can reach a host and Unix account. Codex has its own per-account ChatGPT authentication and private state on that host. Being able to SSH in does not sign Codex in, and signing Codex in does not grant SSH access.

The App Server stays behind the SSH connection. I do not publish an App Server listener or open a router port. Tailscale gives the laptop a private path to the VM; the SSH policy says which identity can use it. Tailscale's [SSH documentation](https://tailscale.com/docs/features/tailscale-ssh) explains the identity and access-policy model.

## Coder gives the workspace a lifecycle

I run Coder on the NUC. Its owner-restricted template provisions a Linux VM on Proxmox, installs pinned Codex binaries, creates two runtime accounts, and wires each account to a Coder SSH agent. One account runs stock Codex; the other runs my `assembler` fork. Their homes, credentials, SQLite databases, App Server daemons, and logs are separate.

Both accounts mount the same QNAP source directory at `/workspaces/muness-src`. The repository files are reusable across workspace rebuilds; the private Codex state stays on the VM's local disk because SQLite databases do not belong on NFS. Build targets stay local too. The source mount is hard-mounted, and the service refuses to start if it is missing, rather than writing into the empty directory underneath it.

Systemd starts each pinned App Server daemon and restarts it if it crashes. A running workspace is configured to start when Proxmox starts, so closing my laptop does not stop a task. Coder stop is explicit: it disables that automatic VM start. The template has no expiry or dormant deletion. Coder gives me a place to create, start, stop, and update the environment; the VM and its daemons do the work.

One detail took a real failure to learn. Coder changes cloud-init inputs across builds. Our early stop/start test replaced the VM when those inputs changed, which would have deleted the local Codex state. We kept first-boot cloud-init fixed and moved rotating Coder token updates to a guest-agent refresh step. A later stop/start preserved a private state sentinel and the shared dirty work. That is why I treat the template as a lifecycle program to test, not just a VM recipe.

Coder does not make the workspace highly available. The VM still depends on the NUC, Proxmox, the QNAP source share, and the tailnet. Source survives VM replacement on the QNAP; private agent state needs a protected backup or export before deleting an authenticated VM. A fresh workspace without that backup needs fresh authentication. The [workspace template](https://github.com/open-horizon-labs/homelab-infra/tree/main/coder/templates/fleet-codex-personal) and [recovery notes](https://github.com/open-horizon-labs/homelab-infra/blob/main/docs/durable-codex-execution.md) show the actual boundaries and checks.

## What changes in practice

The laptop becomes a control surface. The VM owns the checked-out source, shell commands, build tools, Codex account state, and running agent process. I can close the laptop, reconnect later, and continue against the same workspace. A new client needs its own Tailscale access and concrete Codex SSH alias; clean-client onboarding remains one of the checks I have not completed. No remote desktop is involved.

The simple version is useful for one machine you already trust: install Codex, make SSH work, add the host to the desktop app. Tailscale removes the need to expose the host on the public internet and gives SSH policy a user identity. Coder makes the machine repeatable and gives the VM a controlled lifecycle. Systemd keeps the App Server alive across SSH disconnects and process crashes.

There are still acceptance checks open. Guest reboots recover both daemons and Coder agents, but I have not rebooted the Proxmox host itself. Restore of private state into a fresh VM and laptop onboarding from a clean client have not been fully tested. Direct pairing of a phone with the Linux daemon is not proven; the documented phone path goes through a paired desktop host with the SSH workspace connected. I do not describe this as a cloud service or a recovery-tested fleet.

The upstream [App Server daemon](https://github.com/openai/codex/blob/main/codex-rs/app-server-daemon/README.md) is documented as experimental, so its lifecycle contract may change. I use a pinned fork and a systemd supervisor in the Coder VM, so our template deliberately avoids the upstream bootstrap updater that could replace that binary. Start with SSH; add the layers only when you need private reachability, a repeatable machine, or work that has to stay alive after the client disconnects.
