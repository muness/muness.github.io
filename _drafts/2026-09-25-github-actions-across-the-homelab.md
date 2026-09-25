---
title: "GitHub Actions Across a Homelab Fleet"
date: 2026-09-25 09:05:00 -0400
author: muness
toc: true
comments: true
excerpt: "A small broker assigns GitHub Actions jobs to Linux and Mac builders, and sccache lets the Linux machines reuse compiled results."
permalink: /posts/github-actions-across-the-homelab/
---

My GitHub Actions jobs need Linux, CUDA, and Apple build environments. I run the Linux jobs on two Proxmox hosts and the Apple jobs on an M4 Max MacBook Pro. A broker on the QNAP connects GitHub's queue to the machines, starts one-job runners, and cleans them up afterward.

Each workflow asks for capabilities with labels. The Linux providers are `runner-nuc14-columbus` and `runner-9950x-columbus`; they start disposable Docker runner containers limited to four CPUs and 8 GiB of memory each. The NUC has two slots. The 9950X has four, including the only Linux CUDA slot. Both advertise `linux-general`; only the 9950X advertises `linux-cuda`. I give the NUC priority for general CPU work so those jobs leave the 9950X available for CUDA and inference.

The broker polls GitHub for queued jobs, so I do not need a public webhook endpoint. Signed webhooks can feed the same controller. It matches requested labels against host capabilities and free capacity, reserves a slot, requests a short-lived repository runner token, and tells the host's adapter to launch the runner. The runner registers as ephemeral, takes one job, and exits.

When GitHub reports completion or cancellation, the broker asks the provider to clean up and releases the slot. Busy or drained hosts leave jobs pending. GitHub job IDs prevent duplicate launches; pending jobs and leases are kept in an atomically replaced JSON file. On startup and periodically, the broker reconciles leases and retries cleanup. Placement, draining, cancellation, and cleanup have passed live tests.

The Mac advertises one `macos-arm64` slot. A controller guest on the NUC runs its provider agent, while a persistent Tart macOS guest contains Xcode and keeps build caches between jobs. The GitHub runner registration is ephemeral, but the Mac guest is reused. That difference affects security: untrusted pull requests do not run there, because an ephemeral registration does not wipe the host after a job.

## Sharing compiler results

Both Linux builders use the same `sccache` bucket on the QNAP's MinIO server. The disposable job container receives the endpoint and cache credentials through broker policy. Its runner image includes `sccache`; the entrypoint configures `RUSTC_WRAPPER=sccache` and disables Cargo incremental compilation when a backend is present. Each job's Cargo `target/` directory remains local and disposable. The bucket is the shared layer.

I tested the reuse directly with fresh runner containers: a C compile missed on one host, then hit when repeated on the other; I also tested the reverse direction. Those probes establish cross-host cache reuse for the C compiler. They do not establish a Rust cache hit across hosts.

An earlier version used an NFS directory for the cache. I had reasoned that atomic cache-file writes made sharing safe. That missed the local backend's index: sccache documents that its local disk backend supports only one server, so multiple builders can race. I replaced it with the S3 backend and pointed that at MinIO. Seeing the same cache files from both machines was not sufficient evidence of a safe shared cache; the cross-host compile probes caught whether a second builder could actually use the result.

The Linux CI jobs receive cache credentials in their environment. I run only trusted work on these runners. GitHub's ephemeral runner token controls registration; it does not make the machine or its credentials safe for arbitrary pull-request code. The CI fleet has no 1Password Connect access.

I used to keep an ARM64 Linux guest for another target. Cross-compiling that workload with `cargo-zigbuild` on the 9950X was faster, so I retired that guest. The Mac remains necessary for Apple's toolchain, signing, and native macOS tests.

This is a fleet, but not a highly available CI service. The broker and its state are on one QNAP, and there is no second site for failover. The arrangement buys me capacity and platform coverage from machines I already operate; it also makes broker state, host maintenance, and cache behavior my responsibility.
