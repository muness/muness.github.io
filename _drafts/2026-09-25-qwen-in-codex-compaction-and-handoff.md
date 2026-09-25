---
title: "Qwen in Codex: Compaction and Model Handoff"
date: 2026-09-25 09:15:00 -0400
author: muness
toc: true
comments: true
excerpt: "Routing a local Qwen 27B into Codex exposed a compaction and history-handoff gap. Here is how the router handles it."
permalink: /posts/qwen-in-codex-compaction-and-handoff/
---

I run Qwen 27B locally on the 3090 Ti in my Ryzen 9950X system. The model uses EXL3 weights at 3.5 bits per weight and fits in the GPU's 24 GB of VRAM. I disabled Codex app integrations because their tool descriptions consumed too much of the prompt. This gives me local chat for useful work; ChatGPT and Claude still handle the heavy tasks.

To make Qwen selectable in Codex, I use a loopback model router on port 8082 and a saved catalog that combines Qwen with the OpenAI models available when I generated it. Requests for Qwen go to an authenticated LiteLLM Responses gateway on port 8081. Hosted-model requests go to OpenAI. The router does not send ChatGPT credentials to Qwen. Since the catalog is a snapshot, it needs refreshing as hosted model availability changes.

Ordinary turns worked. The first real failure came when Codex compacted a long Qwen conversation. Codex expected a `compaction` item; normal Qwen inference returned a text response instead. Switching that task to OpenAI failed too: Qwen history contained reasoning-item IDs that OpenAI had never stored.

[PR #58](https://github.com/open-horizon-labs/homelab-infra/pull/58) changes the local router in both directions. For a Qwen compaction request, it asks Qwen for a tool-free summary and returns the compaction item Codex expects. The summary is stored in an authenticated, encrypted checkpoint so later requests can replay it. When the router sends history to OpenAI, it strips Qwen's unpersisted reasoning IDs while keeping the messages and tool-call IDs. When OpenAI has compacted natively and the task switches back to Qwen, the router makes an OpenAI request to expand that opaque checkpoint into text before sending the conversation to Qwen.

The live test exercised the full sequence: Qwen, compaction, OpenAI, native OpenAI compaction, then Qwen again. The task retained a sentinel, a changed file, and test status. That is evidence for the exercised path; I have not resumed the original task that first failed.

There are limits. A summary can omit detail, so compaction remains lossy. The router supports full-history HTTP replay; it does not implement arbitrary history requests by stored conversation ID. Checkpoint protection also depends on keeping the encryption key stable or migrating existing checkpoints when rotating it.

The work is a reminder that adding a model to a client is not only a matter of matching the chat endpoint. The client may rely on stateful behaviors, opaque IDs, and model-specific history semantics. A request can work for many turns and still fail when the conversation crosses a compaction or provider boundary.
