---
title: "Computer Use with Cua Driver, Jev, and Qwen"
date: 2026-09-25 09:20:00 -0400
author: muness
toc: true
comments: true
excerpt: "A bounded selector chooses among actions tied to a fresh browser or native-app observation, with Jev and Qwen as providers."
permalink: /posts/computer-use-cua-jev-qwen/
---

I split computer use into observation and choice. Cua Driver reads and acts on the actual Mac; a selector chooses from actions tied to that observation. Jev is the fast first choice on text descriptions. The Jev→Qwen cascade sends text to both: Qwen takes over when Jev is unsure or cannot return a valid choice, and stays in control when progress is uncertain. Separately, the direct `/v1/systemone` route can send screenshots to the vision-capable Qwen model. That division gives me a quick hosted first attempt, a local fallback, and a way to test visual selection without conflating it with the text cascade. The complete cascade still needs a benchmark.

I chose Cua Driver because I need one controller for browser pages and native Mac apps, and I want the selector to choose from current UI state instead of guess at stale coordinates.

Cua Driver runs on the Mac being controlled. For browser work it reads the page through the browser debugger; for native apps it reads accessibility controls. The controller builds candidate actions from that snapshot, assigns each a short ID, and keeps the actual click or typing arguments locally. It sends the selector descriptions and IDs, not executable arguments. For example:

```json
{"goal":"Save the document","observation":"Save button is enabled","candidates":{"save":"Click Save","reobserve":"Read the screen again","abstain":"Stop"}}
```

If the selector returns `save`, the controller checks that `save` still maps to the current snapshot and then calls Driver with the stored arguments. It observes the page again and sends feedback to the same selector process. One selector process lives for the whole task; that lets it retain the cascade state instead of restarting provider selection at each click.

The `select-fleet --fast jev` wrapper asks hosted Jev first because it is the fast text-only attempt: it gets descriptions of the screen and candidate actions, not the screenshot or executable click arguments. With the default one-attempt budget, it escalates immediately when Jev is below the confidence threshold, abstains or asks to reobserve, returns malformed output, or errors. A confident allowed choice can proceed to execution, but the controller still verifies the result. On later decisions, `no_progress`, `failed`, `uncertain`, or missing feedback keeps the selector on Qwen. `verified_progress` permits the fast budget to reset only when the semantic observation or candidates changed; `safe_retry` permits a bounded retry only after checking the failure had no effect and supplying changed evidence. An unchanged page does not earn another Jev attempt. These rules avoid repeating a click just because the first result was inconclusive. The [selector guide](https://github.com/open-horizon-labs/homelab-infra/blob/main/inference/cua-decider/README.md) documents the routing contract.

There is a reason to pay the Qwen latency when the fast choice is weak: on the small booking fixture, standalone Jev got 13/20 and standalone Qwen got 20/20. Those were single-run results from separate providers, not a Jev→Qwen cascade score or a general reliability guarantee. The cascade's full booking benchmark is still outstanding. Qwen is already running locally for chat, and its separate `/v1/systemone` route can use the model's vision encoder for screenshots. The costs are slower escalation and competition with chat for the 3090 Ti; using the already-loaded model also let me stop the separate 9B decider on the 3060 Ti.

`reobserve` and `abstain` are control choices, never clicks. After any action, the controller must independently verify that the UI changed as intended before reporting success.

Jev receives text observations through a hosted service, so I send it only observations I intend to share. Qwen runs on the local 3090 Ti and can receive screenshots through the model's vision encoder. Credentials are fetched at runtime on the Mac using the fleet's authorized access path; they are not embedded in the candidate data.

I also added a direct local selection endpoint for cases where I want to avoid the cascade and measure Qwen itself as a decider. The inference server's `/v1/choices` scores candidate labels at one output position with reasoning and draft generation disabled. A small FastAPI adapter exposes it as `/v1/systemone`. Chat and selection use the same loaded Qwen model and GPU; they take turns. This route accepts screenshots as well as text, because it uses the same vision-enabled model.

In 35 recorded, text-only booking decisions with the model already loaded, direct scoring got 27 right at a median 615 ms per request. Generating reasoning got 34 right at 2,583 ms. Those times cover the model requests, not browser actions. Direct scoring is quicker but gave fewer correct choices in that sample, so I use it selectively and rely on post-action verification.

The Jev-to-Qwen cascade has not been benchmarked end to end on the full booking task. The 35-decision comparison was text-only, not a vision test. The `/v1/systemone` vision route is available for testing; it still needs a task benchmark that measures completion, latency, and recovery when the screen changes.

I had also tried dedicated 2B and 9B deciders. Using the already-loaded 27B for local chat and selection let me stop the 9B service and free the 3060 Ti. That does not make selection free: it competes with local chat for GPU time, and it runs on the 3090 Ti. I would compare it with a dedicated fast decider only on a repeatable task set and include wrong actions and recovery in the measure, not latency alone.
