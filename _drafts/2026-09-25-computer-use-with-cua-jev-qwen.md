---
title: "Computer Use with Cua Driver, Jev, and Qwen"
date: 2026-09-25 09:20:00 -0400
author: muness
toc: true
comments: true
excerpt: "A bounded selector chooses among actions tied to a fresh browser or native-app observation, with Jev and Qwen as providers."
permalink: /posts/computer-use-cua-jev-qwen/
---

For computer use, a model should choose among actions grounded in what the computer-use driver just observed. It should not invent coordinates from an old screenshot and hope the page has not changed.

Cua Driver runs on the Mac being controlled. For browser work it reads the page through the browser debugger; for native apps it reads accessibility controls. The controller builds candidate actions from that snapshot, assigns each a short ID, and keeps the actual click or typing arguments locally. It sends the selector descriptions and IDs, not executable arguments. For example:

```json
{"goal":"Save the document","observation":"Save button is enabled","candidates":{"save":"Click Save","reobserve":"Read the screen again","abstain":"Stop"}}
```

If the selector returns `save`, the controller checks that `save` still maps to the current snapshot and then calls Driver with the stored arguments. It observes the page again and sends feedback to the same selector process. One selector process lives for the whole task; that lets it retain the cascade state instead of restarting provider selection at each click.

The `select-fleet --fast jev` wrapper asks hosted Jev first. If Jev reports low confidence or returns invalid output, it escalates to local Qwen through its chat endpoint. A `verified_progress` result can allow another Jev attempt after a fresh observation changes the candidate set. `no_progress` or `uncertain` keeps the task on Qwen. `reobserve` and `abstain` are explicit safe choices. The controller must still verify that the UI changed as intended before reporting success.

Jev receives text observations through a hosted service, so I send it only observations I intend to share. Qwen runs on the local 3090 Ti and can receive screenshots through the model's vision encoder. Credentials are fetched at runtime on the Mac using the fleet's authorized access path; they are not embedded in the candidate data.

I also added a direct local selection endpoint. The inference server's `/v1/choices` scores candidate labels at one output position with reasoning and draft generation disabled. A small FastAPI adapter exposes it as `/v1/systemone`. Chat and selection use the same loaded Qwen model and GPU; they take turns. This route accepts screenshots as well as text, because it uses the same vision-enabled model.

In 35 recorded, text-only booking decisions with the model already loaded, direct scoring got 27 right at a median 615 ms per request. Generating reasoning got 34 right at 2,583 ms. Those times cover the model requests, not browser actions. Direct scoring is quicker but gave fewer correct choices in that sample, so I use it selectively and rely on post-action verification.

The Jev-to-Qwen cascade has not been benchmarked end to end on the full booking task. The 35-decision comparison was text-only, not a vision test. A separate standalone Qwen booking result should not be mistaken for a cascade result. The vision route is available for testing; it still needs a task benchmark that measures completion, latency, and recovery when the screen changes.

I had also tried dedicated 2B and 9B deciders. Using the already-loaded 27B for local chat and selection let me stop the 9B service and free the 3060 Ti. That does not make selection free: it competes with local chat for GPU time, and it runs on the 3090 Ti. I would compare it with a dedicated fast decider only on a repeatable task set and include wrong actions and recovery in the measure, not latency alone.
