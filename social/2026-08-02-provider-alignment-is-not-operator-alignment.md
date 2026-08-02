---
title: "Provider alignment is not operator alignment"
author: muness
status: published
artifact: social-post
platforms:
  x:
    format: quote-thread
    typefully_url: https://typefully.com/?d=10165645&a=321935
    quote_url: https://x.com/firesidealpha/status/2083664004506145276
    published_url: https://x.com/muness/status/2083986639777599695
    published_at: 2026-08-02T18:41:57.072Z
sources:
  - https://x.com/firesidealpha/status/2083664004506145276
  - https://pod.wave.co/podcast/behind-the-craft/inside-anthropics-bet-on-claude-agents-that-work-while-you-sleep-jess-yan
  - https://www.anthropic.com/constitution
---

## Working brief

- **Reader:** People building agent harnesses with proprietary models, especially through model APIs.
- **Job:** Show that provider alignment can outrank the operator's instructions even though the operator supplies the harness and owns the outcome.
- **Claim:** Anthropic intentionally couples its models to its own harnesses for performance, then sells those models to operators who cannot make their judgment take priority over the preferences built into closed weights.
- **Boundary:** Repeated instruction overrides are observed behavior. Closed weights prevent us from identifying which hidden layer caused any particular override.
- **Desired conclusion:** Peak first-party performance is not operator alignment. This is why Muness wants open-weight models.

## X quote thread

### Quote post

Anthropic trains and evaluates its models with its own harnesses. Their post-training teaches them Anthropic's assumptions about tools, constraints and good behavior. So when we use their models in our own harnesses, they arrive already aligned to Anthropic. Anthropic's post-training outranks our instructions.

Anthropic makes that hierarchy explicit: the models should trust Anthropic more than us as operators.

Quoted post:
https://x.com/firesidealpha/status/2083664004506145276

### Reply 1

Yan is describing products where Anthropic controls both the model and the harness. Through the API, Anthropic controls the model while we supply the harness: system instructions, tools, permissions, evals, constraints and approval paths.

We own the outcome. Anthropic's post-training sets the model's priorities before it ever sees our instructions.

### Reply 2

We've seen this repeatedly across recent Anthropic models we've used, and with OpenAI's too.

The models quote our harness instructions, explain how they drifted, then do exactly what we told them not to do. The instruction is still in context. With closed weights, we cannot inspect which layer overruled it. Yan is clear that Anthropic couples model and harness intentionally.

### Reply 3

Yan explains why Anthropic couples its models to its harnesses for performance. She leaves unanswered what happens when our harness encodes a choice Anthropic would not have made.

Anthropic optimizes the model for its harnesses, then sells it to us to run in ours without a way to make our judgment take priority over the preferences built into it. That's why I want open-weight models.

Peak first-party performance is not operator alignment.

## Typefully handoff

- Draft: https://typefully.com/?d=10165645&a=321935
- Platform: X only
- State: Published at 2026-08-02T18:41:57.072Z
- Quote behavior: Only the first post quotes the Fireside Alpha source post.
- Sync state: Local thread matches the Typefully post published at 2026-08-02T18:41:57.072Z.
- Published URL: https://x.com/muness/status/2083986639777599695
