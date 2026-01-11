---
title: "Taming the Chaos Dragon: Ground Every Execution"
date: 2026-01-11 12:00:00 -0500
author: muness
toc: true
comments: true
excerpt: "Agents multiply execution. Without grounding, they multiply drift. Open Horizons is the missing yin: a local, intentful memory that keeps each run aligned."
---

Over the last few weeks I built a scrappy personal project.
It escaped the lab.
Now it has real users.

Concretely: it’s an ESP32-S3 hardware knob for controlling networked audio playback.
It has dozens of users across a few serious audiophile communities.

This post isn’t about audio or embedded. It’s about what happened next.

Once I saw traction, I did the adult move: I paused and asked, *do I want to do this — and why?*
The answer surprised me. The “why” wasn’t the gadget. It was the feeling: **intentful, low-friction listening**.
And it snapped cleanly into a larger priority: **Open Horizons**.

So I did something new (for me): I used the Open Horizons stack Drazen (my co-founder) and I are building to build the thing that validated the stack.

In doing that, I ran straight into the problem the stack is built to solve.
The thing agents make worse isn’t effort. It’s drift at speed — the chaos dragon.

<div class="callout callout--note" markdown="1">
**Don’t start a run without a Dive Pack** — a one-page brief: what you’re doing, why it matters, and what you must not do. ([Jump to template](#dive-pack-template))
</div>

If the chaos dragon is drift at speed, the Dive Pack is the leash you grab before you hit enter.
The rest of this post is why it matters, and how we productized it.

The result has been… obscene productivity.
Not because we got “smarter models.”
Because we stopped letting execution free-run.

One concrete anchor: I went from “I have never written firmware, and I haven’t written C in over 20 years” to shipping a real device with real users in under two months — while doing billable work — and while simultaneously building the stack that made that pace survivable.

I’d also never done embedded development, never built an iOS app, and never built an Apple Watch app. I haven’t been paid to write code in ten years; I’ve mostly been doing management. In my pre-agent world, this would have been a multi-quarter effort or it wouldn’t have happened at all.

One vivid example of why grounding matters: at one point I tried to improve volume UX by switching to an “absolute volume” command. A naïve implementation would have treated a dB-based zone (e.g. `-12 dB`) as if it were `0–100%` and clamped it to `0` — i.e., *maximum volume* — risking equipment damage.

Grounding forced a pause: what’s the real constraint here? Safety. So we fixed the handler to respect each zone’s actual min/max volume range, and we backed it with regression tests.

LLMs are the yang: generation, breadth, speed.
Open Horizons is the yin: intent, constraint, memory.
You need both.

## Existence Proof: What This Ships

This isn’t a conceptual framework. It’s a stack we’re shipping with.

- **What “fast, grounded shipping” looks like:** since `2026-01-01`, we’ve shipped **19 tagged releases** across the firmware + bridge alone (more than one release per day).
- **What shipped (to date):** 51 tagged releases across the two core repos — `roon-knob` (35) + `unified-hifi-control` (16). See releases: [roon-knob](https://github.com/muness/roon-knob/releases) and [unified-hifi-control](https://github.com/open-horizon-labs/unified-hifi-control/releases).
- **Why it’s safe:** the absolute-volume bug above became a “stop the line” moment; we added **12 regression tests** specifically to prevent that class of failure from recurring.
- **How it’s reproducible:** the loop is lightweight (a Dive Pack + logs + guardrails). Bottle makes the setup repeatable across tools (so the same workflow works in Claude Code, Codex, and beyond): https://github.com/open-horizon-labs/bottle
- **More surfaces:** iOS + Apple Watch: [hifi-control-ios](https://github.com/open-horizon-labs/hifi-control-ios).

You can start without any of that tooling: a Dive Pack in a plain doc is enough. The stack just makes it harder to skip and easier to reuse.

## The New Problem: The Chaos Dragon

The core failure mode we’re targeting is not new.
It’s just more dangerous now.

Every enterprise, small team, and individual has always struggled with misalignment.
Not just “Team A is wrong” and “Team B is right,” but something worse:

**Brownian execution** — aimless drift: pulling one way in the morning, the opposite way in the afternoon, and calling it progress because lots of work happened.

Agents pour gasoline on that.

In the pre-agent world, misalignment was like dog sleds pulling in different directions.
You still moved, but you didn’t go fast enough for the chaos to kill you quickly.

Now the chaos dragon is awake.

The “chaos dragon” is what drift looks like when execution is fast enough to compound mistakes.

Execution is fast enough that ungrounded drift becomes catastrophic: you can build the wrong thing at 10× speed, and you can also lock into it at 10× speed.

No amount of IQ fixes this.
There is no god’s-eye view to reach, for humans or for models.
Local wisdom is the scarce input, and the whole game is carrying it forward and applying it *before* you act.

This is why the point of Open Horizons isn’t acceleration.
It’s **alignment**.

If you haven’t read it, start with the claim: {% post_url 2025-09-16-alignment-is-the-constraint %}.

Here’s the operating model in one pass:

- Don’t “try hard” in a vacuum.
- Start from aims, constraints, and prior hard-won learnings.
- Detect drift early and restart clean when needed.

## The Concrete Move: Grounding Before You Act

In a recent conversation with Drazen, we described it plainly:

> “When we start a session we put together a dive prep pack… it includes the principles… the learnings and guardrails… we don’t start without that.”

That’s the whole thing.

In Open Horizons, we treat the Dive Pack as a first-class artifact: a short, reusable note tied to an endeavor, sitting alongside logs and guardrails so it’s easy to apply (and hard to forget) next time.

The model doesn’t need more tokens. It needs the *right* tokens.

### The Loop (Picture, Not Poetry)

```text
Dive Pack (aim/constraints/learnings)
        ↓
Agentic execution (build + test + ship)
        ↓
Drift? → Salvage (extract learning) → Update memory (logs/guardrails) → Restart clean
```

<a id="dive-pack-template"></a>

### A Minimal Dive Pack (Copy/Paste)

```text
Aim (1 sentence):
What “done” looks like (observable):

Constraints / guardrails (3–7 bullets):

Known landmines (what drift looks like here):

What we learned last time (metis):

One question that, if unanswered, makes action premature:
```

If you do nothing else, do this.

It forces the one move most teams skip: **decide what direction you’re going while you’re accelerating.**

### When You Drift: Salvage, Then Restart

The fastest way to stop “Brownian execution” isn’t to fight your way back from the wrong direction.
It’s to **extract the learning and restart clean**.

That pattern is the salvage loop: {% post_url 2026-01-07-the-salvage-loop-keep-learning-drop-the-code %}.
It’s also the “learning vs constraint” split: {% post_url 2025-12-28-splitting-learning-from-constraint-in-an-ai-world %}.

The core rule is simple:

**Protect the learning, not the artifact.**

#### Overrides vs. Violations

If you *intentionally* violate a guardrail, log an override and keep moving.
If you violate one accidentally, log it too — then either salvage and restart, or promote a new guardrail so it’s harder to repeat.
If you’re lost, salvage the learning and restart clean.

### Make It Low Friction (Or It Won’t Spread)

The Dive Pack is the discipline.
But discipline alone doesn’t scale if setup is painful.

So we’re packaging the stack into something you can just install and start with:

> “We literally bottled them up… You install Bottle… and it sets up the rest for you… and keeps it up to date with the practice.”

**Bottle** is the installer/updater that makes our agentic workflow reproducible: https://github.com/open-horizon-labs/bottle
It includes plugins for **Claude Code** and **Codex**, so you can get started without hand-wiring a whole toolchain.

That matters because alignment only works when it’s cheap enough to do *every time*.

<details class="appendix" markdown="1">
<summary><strong>Why this matters (optional): why “smarter models” won’t fix alignment</strong></summary>

Open Horizons is a bet on a constraint most systems pretend doesn’t exist.

No one can centralize reality. There is no god’s-eye view.
(Hayek’s core insight applies cleanly here: useful knowledge is local.)

This is why “smarter models” won’t fix alignment on their own. Even a hypothetical “computer that can simulate the whole world” doesn’t solve the core issue: reality is contingent, time-varying, and partially tacit.

Dwarkesh Patel’s [Thoughts on AI progress (Dec 2025)](https://www.dwarkesh.com/p/thoughts-on-ai-progress-dec-2025) circles the right constraint (the long tail of context and micro-judgments), but the escape hatch can’t be “power through with IQ.” There is nothing to power through.

Open Horizons won’t “solve” this completely either. Humans don’t have perfect local knowledge.
The win is asymptotic: carry forward better local context (aims, constraints, guardrails, decision logs) so each execution starts closer to truth than the last one.

</details>

## Drift Detection: The Missing Superpower

The most important capability in an agentic world is not “write the code.”
It’s “tell me when we’re off the rails.”

Another line from that same conversation hit the point:

> “The system has to be able to detect intense drift and tell me, ‘This is nowhere. Something’s happening here.’”

That’s the product.

Not a new UI.
Not a bigger model.

A system that keeps you oriented when the execution engine is spinning faster than your working memory.

You can think of it as building an “upbringing system for AI”:

My co-founder Drazen put it bluntly:

> “AI has some consciousness, some guardrails… it’s reminded me so much of upbringing children…”

The point isn’t that the model becomes wise. It’s that guardrails and recall become *ambient*: the system surfaces what matters and intervenes when you’re about to do something dumb at speed.

## Why This Is Real (Not Conceptual)

I am not writing this as a futurist.

I had never written firmware.
Then I built a device, shipped it, supported users, and started extending it into:

- a knob firmware that keeps improving
- a multi-source bridge (Roon/LMS/OpenHome as peers, not forks)
- seamless HQPlayer DSP control with transport control agnostic of source system

This happened because the system kept the direction coherent while the execution loop got absurdly fast.

## If You Want to Try This

If you want a minimal experiment:

1. Write one aim for your next week (one sentence, observable change).
2. Write one guardrail (“this must not happen again because…”).
3. Before each work session, write a Dive Pack (5 minutes).
4. If you drift, salvage for 10 minutes, then restart clean.

This is the “Aim. Do. Reflect.” loop in practice: {% post_url 2025-09-08-open-horizons %}.

And it’s the missing layer for agentic execution: the thing that keeps the chaos dragon leashed.

### If You Lead A Team (Start This Week)

If you’re leading a team and watching agents amplify delivery *and* amplify drift, don’t buy “more velocity.” Install a loop that keeps work aligned at runtime:

1. Pick one active initiative and write a Dive Pack for it (10–30 minutes; one page max; use the template above).
2. Require that any agentic work session (where an AI agent is generating plans or code) starts by pasting that Dive Pack in before generating.
3. Add one guardrail based on a real failure mode you’ve seen (“we must not do X because it caused Y”—e.g., “don’t ship absolute volume without verifying the zone’s real min/max range”), and require an override note when it’s violated.

## Close

The chaos dragon has always been here; agents just made it bigger and faster.
The response isn’t more acceleration—it’s grounded execution: preserve local judgment, then apply it before you act.
That’s what we’re building.

P.S. We’re taking design partners while the product hardens. If you want help installing this loop, reach out.

<details class="appendix" markdown="1">
<summary><strong>Appendix — Delivery receipts (releases + logs)</strong></summary>

If this still feels like a philosophy post, here’s what “grounded execution” looked like in practice over a short window.

### Releases (public, inspectable)

- `roon-knob`: 35 tagged releases so far — https://github.com/muness/roon-knob/releases
  - Recent examples: `v2.4.0`, `v2.3.0`, `v2.2.3`
  - Representative shipped changes: deep sleep support (battery life), per-PR firmware flash pages (testing), JPEG decode offload to bridge (performance)
- `unified-hifi-control`: 16 tagged releases so far — https://github.com/open-horizon-labs/unified-hifi-control/releases
  - Recent examples: `v2.7.0`, `v2.6.1`, `v2.6.0`, `v2.4.2`
- `hifi-control-ios`: iOS + Apple Watch control surface — https://github.com/open-horizon-labs/hifi-control-ios

### Logs (private, but this is how we steer)

In the Cloud Atlas AI - Hi-Fi context, Open Horizons logs capture “what we shipped” and “why we chose that shape” alongside the work:

- Planned the repo and architecture before coding (medium integration, no premature abstractions).
- Shipped Roon integration (Phase 2) and HQPlayer integration (Phase 3) as explicit milestones.
- Caught and fixed a **volume safety bug** that risked equipment damage, and backed it with regression tests.
- Implemented firmware auto-update opt-out and made configuration ergonomic (minutes-based intervals, safe defaults).

The point of showing this is not “look how much shipped.” It’s that the system makes shipping *safer*: it keeps the direction coherent, surfaces drift early, and preserves judgment so you don’t have to rediscover it every session.

</details>
