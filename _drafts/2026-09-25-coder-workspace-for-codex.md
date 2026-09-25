---
title: "A Persistent Coder Workspace for Codex"
date: 2026-09-25 09:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "A Coder template provisions a Proxmox VM for Codex, with shared source, private agent state, local build output, and explicit recovery behavior."
permalink: /posts/coder-workspace-for-codex/
---

I wanted Codex to keep working when my laptop closed, without putting its database on a network share or treating a desktop session as the workspace. Coder provisions a Linux VM on Proxmox and connects the Codex desktop app to it over SSH.

The template is restricted to my account. It mounts the QNAP source export at `/workspaces/muness-src` over hard NFS, installs pinned binaries, and configures systemd services. Stock Codex and my `assembler` fork run under separate Unix accounts. They share access to source through a group, but each has its own home directory, credentials, SQLite database, and daemon. Other templates can provision ordinary Linux VMs or GPU-capable containers.

The boundary matters: the source tree is shared, the agent identity and state are not. Codex databases stay on the VM's local disk because SQLite locking over a network filesystem is a poor fit. Rust's `target/` directory is local to each account too. For compiler reuse, a `fleet-sccache` wrapper reads credentials from a restricted file and invokes `sccache` against MinIO on the QNAP. The wrapper sets no shared build directory.

I configured the workspace not to expire or delete itself when dormant. Proxmox boots the VM with the host, and systemd starts the Codex daemons and restarts them after crashes. An explicit stop in Coder changes the boot behavior so the VM stays stopped.

The first version had a dangerous lifecycle mistake. Changing the cloud-init input on a later stop/start caused Coder to replace the VM. If that had happened after real use, the local agent state would have gone with it. The template now keeps first-boot cloud-init unchanged. The Proxmox guest agent refreshes rotating Coder connection tokens and managed helper scripts without reprovisioning the VM.

The template checks the owner restriction, NFS mount scope, and boot policy. On the live VM, `fleet-codex-verify stock` and `fleet-codex-verify assembler` check the mount, state permissions, daemon protocol, and systemd service. I tested stop/start, guest reboot, killing a daemon, a missing NFS mount, and a wrong binary checksum. If the source mount is missing, daemon startup fails instead of writing into the empty local directory underneath the mount point. Agent state survived those tested recovery paths.

I also verified that Codex can read and write a workspace file and make an outbound HTTPS request. I have not yet tested restoring a backup into a fresh VM, a Proxmox host reboot, access from a fresh laptop, or native phone pairing. The workspace is persistent, but that does not make its private state backed up. Source survives VM replacement on the QNAP; agent state needs a separate restore plan.

This is a personal development environment, not a multi-tenant service. Root on the hypervisor can read guest data, and the NFS export trusts its clients. Those are meaningful limits when deciding what credentials and repositories to place in it.
