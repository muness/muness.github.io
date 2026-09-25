---
title: "Keyless Agent Access with Tailscale and 1Password Connect"
date: 2026-09-25 09:10:00 -0400
author: muness
toc: true
comments: true
excerpt: "How my Codex accounts reach fleet services over Tailscale SSH and resolve credentials without interactive logins or shared SSH keys."
permalink: /posts/tailnet-and-1password-for-agent-fleet/
---

The machines in my homelab need to reach one another, but I do not want to copy an SSH private key into every Codex workspace. I put the services and workload guests on a dedicated Tailscale tailnet and use Tailscale SSH to authorize my identity into the two Codex accounts.

This is keyless for those agent connections; it does not mean every operator path is keyless. Other SSH paths still use keys. The distinction is useful: the agent gets the access path configured by the tailnet policy, without a private key copied into its home directory.

Credential access is separate. Each Codex account has a different read-only 1Password Connect token in a configuration file readable only by that Unix account. An `op` wrapper reads the configuration at invocation time. The agent can resolve a reference such as `op://Fleet/ITEM/FIELD` with `op read`, or use `op run` to expose the secret only in a command's environment. The account's `AGENTS.md` explains the wrapper and which references to use. There is no interactive 1Password login inside the VM.

The Connect tokens can read the whole Fleet vault. That is broad access; the account separation and file permissions keep the two local agents from casually reading one another's token, but do not narrow the vault scope. I use the arrangement for personal agents. The Coder template publishing job has its own narrower token. CI runners receive no Connect token at all, and they do not reach the vault.

On the Mac, the computer-use selector retrieves Jev and Qwen credentials through the authorized SSH connections to the accounts that can use Connect. The selector process keeps the values in memory. When away from the LAN, an SSH tunnel forwards inference ports through a fleet host. Credentials are resolved at runtime; they are not part of source control or runner images.

The boundaries are practical, not magic. Root on the Proxmox host can read guest data. A compromised Codex account can use the Connect access assigned to that account, including its broad Fleet vault scope. The source NFS export also trusts its clients. CI gets less access by having no Connect path, but code run by trusted CI still has whatever environment credentials the workflow explicitly supplies, including compiler-cache access.

I still need to test a fresh-device restore and the workflow for rotating/replacing these access paths. Until then, the setup works for the current machines and identities, but I would not describe it as a tested disaster-recovery design.
