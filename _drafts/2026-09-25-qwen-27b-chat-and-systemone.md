---
title: "One Qwen 27B for Chat and SystemOne"
date: 2026-09-25 09:25:00 -0400
author: muness
toc: true
comments: true
excerpt: "SystemOne turns the Qwen model already serving local chat into a bounded text and screenshot selector, without loading a second decider."
permalink: /posts/qwen-27b-chat-and-systemone/
---

I wanted a local model to make computer-use choices without loading a second model just for selection. The 27B model already serves local chat on the 3090 Ti. SystemOne adds a second way to use that same model: score a small set of allowed actions and return the best candidate.

The deployed SystemOne health endpoint reports `qwen3.8-27b-exl3-mtp`, with vision enabled. The model uses EXL3 weights at 3.5 bits per weight and runs on the 3090 Ti's 24 GB of VRAM. The same loaded model handles ordinary chat and direct selection. I stopped the separate 9B vision decider, which freed its 3060 Ti for other work. This avoids a second set of model weights; it does not make selection free of GPU time.

## The two request paths

Chat uses the OpenAI-compatible chat endpoint. It follows the model's normal reasoning behavior and returns generated text. SystemOne exposes a different request at `/v1/systemone`. A small FastAPI service validates the request, then forwards it to `/v1/choices` on the model server. Chat and selection share the loaded model, its cache, and a generation lock. They take turns on the GPU: a long prompt or screenshot selection delays chat while it runs.

A selection request contains the goal, current observation, candidate IDs and descriptions, and optionally one inline PNG screenshot. The endpoint validates the size and shape of that input; it does not silently shorten an oversized prompt or fetch remote images. It accepts up to four independent questions per request, with 2–26 candidates per question. The Cua controller keeps the actual click arguments locally and binds each ID to the current UI snapshot.

The model does not write an explanation for each selection. The scorer maps the candidate IDs to distinct one-token labels, puts the goal, state, and candidate descriptions in a prompt, then reads the logits for the next output position. It returns the label with the highest score, mapped back to its candidate ID. Thinking and speculative draft generation are disabled for this request. The prompt still has to be processed; if the request includes an image, the vision encoder must process it too. The shortcut removes the reasoning and token-generation loop, not the work of understanding the prompt or screenshot.

The screenshot travels as inline image data to SystemOne and is processed by the same model's vision encoder. It is not passed to the hosted Jev selector. The deployed path accepts one PNG, checks its dimensions, and rejects remote image URLs. This keeps the direct local vision route separate from the text-only Jev→Qwen cascade described in the computer-use post.

## What comes back—and what does not

SystemOne returns the selected ID and scores normalized across the supplied candidates. Those scores are not calibrated confidence estimates. The response sets confidence and probabilities to null, and requires the caller to verify execution. A high score is not proof that the action is safe or that it worked.

This also explains why I do not drop the direct endpoint into the Jev confidence cascade as though it were another provider with equivalent confidence. Jev reports a confidence value used by that selector's threshold; SystemOne's scores rank the candidates but do not have that meaning. Direct SystemOne is a separate mode: the caller decides when to use bounded scoring and then checks what happened on screen.

The separation between selection and action matters. SystemOne chooses an ID from the submitted set. It does not click, type, discover controls, or decide whether the page changed. The caller checks that the ID still belongs to the current snapshot, executes the arguments stored for that snapshot, observes again, and independently verifies the intended result. If the outcome is unclear, it should inspect the UI state before proposing another action.

## The speed and accuracy trade-off

I replayed 35 text-only booking decisions with the model already loaded. Direct scoring got 27 right at a median 615 ms per request. Normal reasoning got 34 right at 2,583 ms. The measurements cover the model requests, not browser actions. Direct scoring was faster and less accurate in this set; I use it selectively rather than treating the speedup as an automatic replacement for reasoning.

The same endpoint passed smoke checks for text and screenshots. Two screenshot selections returned the expected visible IDs in about 1.25 seconds each. Those were smoke checks, not an accuracy benchmark. I have not measured whether screenshot scoring completes whole computer-use tasks faster or more accurately than the text cascade or normal reasoning.

The direct scoring method and paired comparison are documented in the [Qwen choice experiment](https://github.com/open-horizon-labs/homelab-infra/tree/main/inference/benchmarks/qwen-choice-2026-09-23). SystemOne's [usage and deployment notes](https://github.com/open-horizon-labs/homelab-infra/tree/main/inference/systemone) include the input limits and validation behavior.

This setup is useful when a known set of choices can be scored directly and the surrounding controller can verify the result. It is not a general GUI agent and it is not a free parallel decider: the same 27B handles local chat, image encoding, and selection on one GPU. I kept normal reasoning available for cases where the extra deliberation justified the time.
