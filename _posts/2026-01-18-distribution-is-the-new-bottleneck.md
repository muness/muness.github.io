---
title: "Distribution Is the New Bottleneck"
date: 2026-01-18 09:00:00 -0500
author: muness
toc: true
comments: true
excerpt: "OSS adoption speeds up, and the first request is not features. It is easy installs. Fixing release parallelism and caching dropped our build from ~40 minutes to ~7."
---

*How open source growth turns release pipelines into the real product surface*

When unified-hifi-control and roon-knob started taking off, the first wave of requests was not new features. It was "make it easy to install." That is the moment distribution becomes the product.

In practice, it meant wrestling with a release pipeline that had to build across multiple platforms, ship web assets, publish Docker images, and generate platform-specific packages. The build was about 40 minutes. Users were impatient (and fair). The longer the wait, the more "one click install" became the missing feature.

After a focused pass on caching, parallelism, and artifact reuse, the build dropped to about 7 minutes. The remaining long pole is Synology packaging, which I have not optimized yet. That single change shifted the project from "cool demo" to "credible tool people can actually adopt."

This is the OSS distribution trap: as usage grows, the bottleneck moves out of the codebase and into the release surface. The work is not glamorous, but it is what users feel.

## The Constraint Shift I Did Not Expect

In a fast-moving project, code is the cheap artifact. Release mechanics are not. Each platform has its own packaging rules, toolchains, and failure modes. The "real" work becomes a logistics problem: making the same bits available everywhere, reliably, without burning the maintainer.

That is why Docker frustration is not just whining. It is a signal. When the install path feels brittle or slow, users are telling you where the constraint lives.

## What Actually Moved the Needle

I wrote the detailed workflow and caching choices here:  
[GitHub Release Workflow Caching Strategy](https://github.com/open-horizon-labs/unified-hifi-control/blob/main/docs/gh-release.md)

The short version is a set of distribution tactics that compound:

- **Parallelize aggressively.** Build Linux matrix targets, macOS universal, Windows, and web assets at the same time.
- **Reuse artifacts.** Build web assets once and fan them out to all platform jobs.
- **Cache the right layers.** sccache for object files, rust-cache for proc macros and workspace deps, with shared keys across PR and release workflows.
- **Use zigbuild for Linux cross targets.** It avoids Docker, so Cargo fingerprints and caches actually work.
- **Treat toolchains as first-class cache targets.** Dioxus CLI and cargo-zigbuild cost minutes to compile; cache the binaries.
- **Smoke test the painful corners.** QEMU for armv7 catches real breakage early without real hardware.

None of this is clever. It is distribution hygiene. But it is the difference between "works on my machine" and "this is a real product."

## The Real Lesson: Distribution Is Product

Once your OSS project has real users, distribution is no longer a footnote. It is the front door. If the front door sticks, people bounce.

The real constraint is no longer "can we build it," it is "can users get it." That is a governance, tooling, and release problem, not a coding problem. That is where effort should move.

If your build takes 40 minutes, you are not just slow. You are signaling to every user that adoption will be painful. Fixing distribution is not a side quest. It is the work.

If you are in the same spot, use the linked workflow doc as a reference and adapt it to your release surface. The details will differ, but the constraint shift is universal.
