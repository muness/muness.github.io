---
title: "Building a Homelab for Codex, CI, and Local Inference"
date: 2026-09-24 10:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "A working Codex workspace, a brokered Linux and Mac build fleet, and local Qwen inference on machines I already owned."
---

I use ChatGPT and Claude for heavy work. This homelab gives Codex a persistent Linux workspace, GitHub Actions a fleet of Linux and Mac builders, and me a local Qwen model for chat and computer-use decisions.

The pieces run across hardware I already had: a Ryzen 9950X with a 3090 Ti, a NUC that had been running Ubuntu for Roon, a QNAP, and an idle M4 Max MacBook Pro. The 3090 Ti runs Qwen 27B. The NUC runs Proxmox, Coder, and one of the Linux builders. The QNAP stores source and compiler cache, and runs the runner broker. The Mac handles Apple builds. The setup is useful because the machines behave like services in one system, rather than separate desktops I have to log into and manage by hand.

A Linux VM gives Codex a long-lived workspace, while separate ephemeral runners take GitHub Actions jobs. The broker assigns work by platform and capacity, then tears down the runner. A persistent macOS guest handles jobs that need Xcode. The agents reach approved services over Tailscale SSH, and personal agent accounts resolve credentials through 1Password Connect. CI runners do not get that access.

This works for my own trusted workloads. It is not a highly available service, and I have not finished testing a fresh-device recovery. The 3090 Ti serves a useful local model, but I still use hosted models for the heavy work. These machines make my tools available where I want them; they do not replace hosted frontier models.

I’m writing one companion post on computer use: [**Computer use with Cua Driver, Jev, and Qwen**](/posts/computer-use-cua-jev-qwen/). It covers how I bind model choices to fresh UI observations and what the speed and accuracy measurements do—and do not—show.

I bought the 9950X system with a 3090 Ti and 64 GB of RAM. Later I added 64 GB of used RAM for about $700. The QNAP, Roon NUC, 3060 Ti, and M4 Max MacBook Pro were already mine. The additional RAM helps guests and build processes; it does not add GPU memory. A Linux workspace can use hosted inference without a local GPU.

There are rough edges. I once documented an NFS-backed `sccache` directory as safe because individual files were written atomically. The shared index made that wrong; MinIO's S3 API is the working backend. Qwen also exposed a model-handoff bug: Codex needed a compaction item, and OpenAI could not replay Qwen reasoning IDs it had never seen. Both are fixed and tested, but the latter still has known limits around lossy summaries and stored-history replay.

The next useful tests are operational: restore the workspace into a fresh VM, connect from a fresh client, and see what breaks. Then I’d compare the same computer-use tasks on a larger-memory machine such as a Mac Studio with M5 Ultra or a DGX Spark. I would measure task completion and elapsed time, not just whether a larger model fits.
