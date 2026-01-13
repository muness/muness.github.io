---
title: "Taming the Chaos Dragon: Ground Every Execution"
date: 2026-01-11 12:00:00 -0500
author: muness
toc: true
comments: true
excerpt: "Agents multiply execution. Without grounding, they accelerate thrash. Open Horizons + Bottle keeps runs aligned by forcing intent + constraints before generation."
---

TL;DR: Agents accelerate everything — including mistakes. Open Horizons + Bottle forces intent + constraints *before* you generate, catches the chaos dragon early (before it turns into thrash), and makes the learning stick so you ship without burning weeks on reversals.

Who this is for:
- Solo builders shipping with agents
- Teams using agents daily
- Leaders tired of polished-but-wrong output

When I say “agents” (or “agentic execution”), I mean AI-assisted work sessions where the model plans and generates real artifacts (code, tests, docs, rollout steps) fast enough that humans can’t hold the whole decision trail in working memory.

The failure mode is simple: agents accelerate the wrong things. You get thrash at speed.

I ran into this while shipping a scrappy personal project: an ESP32-S3 hardware knob for controlling networked audio playback.
It escaped the lab. Now it has real users — dozens of people across a few serious audiophile communities.

Once I saw traction, I did the adult move: I paused and asked, *do I want to do this — and why?* The answer surprised me. The “why” wasn’t the gadget. It was the feeling: **intentful, low-friction listening** — and it snapped cleanly into a larger priority: **Open Horizons**.

So I used the stack my co-founder Drazen and I are building to ship the thing that proved it works.

In doing that, I ran straight into the problem the stack is built to solve: the chaos dragon — agents accelerating the wrong things.

And yeah: it’s been kind of absurd.

Drazen texted me:

> “I did a quarter’s worth of work in a day.”
>
> “I’m building this at the speed of thought.”

I texted back the only sane question:

> “Skepticism is valid: how do we know this isn’t overly complicated slop that collapses later?”

I also went from “I have never written firmware, and I haven’t written C in over 20 years” to shipping a real device with real users in under two months — while doing billable work — and while simultaneously building the stack itself.

## Receipts (Inspectable Today)

If you’re thinking “is this even impressive in the age of agents?” — fair. The point isn’t “look how many commits.” The point is **shipping fast without getting eaten alive by thrash**, and shipping something real enough that other people show up.

Here’s the signal that matters to me: a dumb little personal `$50` ESP32-S3 knob stopped being “my project” and turned into a small community.

People are building, flashing, troubleshooting, and sharing setups.
Threads are buzzing — 260+ posts in the main Roon forum thread (active as of hours ago), 15+ engaged builders in the Lyrion/LMS cross-post, and community PRs landing to add support.

The repeated ask is not “make it smarter.”
It’s: **make it easier to install and share with friends** (simpler flashing, better deployment, NAS-friendly packaging, non-Docker options).

If you want to inspect artifacts:

- **Shipping pace (public):** since `2026-01-01`, we’ve shipped **19 tagged releases** across the firmware + bridge alone (more than one release per day).
- **Portfolio (public):** 51 tagged releases across `roon-knob` (35) + `unified-hifi-control` (16). Releases: [roon-knob](https://github.com/muness/roon-knob/releases), [unified-hifi-control](https://github.com/open-horizon-labs/unified-hifi-control/releases).
- **Safety (real):** we almost shipped an “absolute volume” change that could have pinned volume to max on dB-based zones. We fixed it and added **12 regression tests** to stop that class of failure from recurring.
- **The “this should not work” rewrite worked:** `unified-hifi-control` PR #45 is a full Rust rewrite (pure Rust, no Node.js runtime), and it survived multiple review cycles. https://github.com/open-horizon-labs/unified-hifi-control/pull/45
- **Distribution (public):** Bottle makes the practice repeatable across tools. https://github.com/open-horizon-labs/bottle

## Start Here: Copy/Paste Dive Pack Template

In a recent conversation with Drazen, we described it plainly:

> “When we start a session we put together a dive prep pack… it includes the principles… the learnings and guardrails… we don’t start without that.”

That’s basically it.

No dive is too small for a Dive Pack.

In Open Horizons, we treat the Dive Pack as a first-class artifact: a short, reusable note tied to an endeavor, sitting alongside logs and guardrails so it’s easy to apply (and hard to forget) next time.

The model doesn’t need more tokens. It needs the *right* tokens.

### The Loop (Picture, Not Poetry)

![Grounded execution loop: Dive Pack → Execute → chaos dragon check (“are we thrashing?”) → Salvage + update memory → Restart clean](../../assets/img/taming-chaos-dragon-loop.svg)

*The 30-second ritual that keeps agent runs aligned.*

```text
Dive Pack (aim/constraints/learnings)
        ↓
Agentic execution (build + test + ship)
        ↓
Chaos dragon? → Salvage (extract learning) → Update memory (logs/guardrails) → Restart clean
```

<a id="dive-pack-template"></a>

### A Minimal Dive Pack (Copy/Paste)

<div class="callout callout--note" markdown="1">
```text
┌────────────────────────────────────────────────────┐
│ COPY-PASTE DIVE PACK TEMPLATE — START HERE         │
└────────────────────────────────────────────────────┘
```

```text
Aim (1 sentence):
What “done” looks like (observable):

Constraints / guardrails (3–7 bullets):

Known landmines (what the chaos dragon looks like here):

What we learned last time (what changed):

One question that, if unanswered, makes action premature:
```
</div>

If you do nothing else, do this.

It forces the one move most teams skip: **decide what direction you’re going while you’re accelerating.**

<div class="callout callout--note" markdown="1">
**For teams:** make the Dive Pack a required field. Put it in the ticket + PR description. No Dive Pack, no agentic run.
</div>

## Thrash At Speed

Here’s what the chaos dragon looks like in practice: **thrash at speed**.

**Brownian execution** is what it looks like in practice: you pull one way in the morning, the opposite way in the afternoon, and call it progress because a lot of work happened.

If you prefer a less poetic word: **thrash**. Same idea, just uglier: reversals, rework, and “busy” weeks where you end up farther from done.

Agents pour gasoline on that. They don’t just make you faster — they make you faster at thrash if you don’t start from intent + constraints.

Skepticism is valid. You’ve seen AI build impressive things in hours that fall apart the moment you try to grow them.
The bet here is not “trust the model.” The bet is the system learns from success and failure — not always and not perfectly, but enough that within days the workflow and architecture can be unrecognizable.

Agents don’t need more intelligence. They need better context and constraints applied *before* generation starts.

If you want the longer version of that claim, start here: {% post_url 2025-09-16-alignment-is-the-constraint %}.

### When The Chaos Dragon Shows Up: Salvage, Then Restart

The fastest way to stop this isn’t to fight your way back from the wrong direction.
It’s to **extract the learning and restart clean**.

At this point it’s irresponsible *not* to throw away code.

That pattern is the salvage loop (“protect the learning, drop the code”): {% post_url 2026-01-07-the-salvage-loop-keep-learning-drop-the-code %}.
It’s also the “learning vs constraint” split: {% post_url 2025-12-28-splitting-learning-from-constraint-in-an-ai-world %} (separate “what we learned” from “what we must enforce next time”).

The core rule is simple:

**Protect the learning, not the artifact.**

#### Overrides vs. Violations

If you *intentionally* violate a guardrail, log an override and keep moving.
If you violate one accidentally, log it too — then either salvage and restart, or promote a new guardrail so it’s harder to repeat.
If you’re lost, salvage the learning and restart clean.

### Make It Low Friction (Or It Won’t Spread)

The Dive Pack is the discipline.
But discipline doesn’t scale if setup is painful.

So we’re packaging the stack into something you can just install and start with:

> “We literally bottled them up… You install Bottle… and it sets up the rest for you… and keeps it up to date with the practice.”

**Bottle** is the installer/updater that makes our agentic workflow reproducible: https://github.com/open-horizon-labs/bottle
It includes plugins for **Claude Code** and **Codex**, so you can get started without hand-wiring a whole toolchain.

Because if it’s even mildly annoying, people skip it — and then you’re back to vibes.

<details class="appendix" markdown="1">
<summary><strong>Why this matters (optional): why “smarter models” won’t fix alignment</strong></summary>

Open Horizons is a bet on a constraint most systems pretend doesn’t exist.

No one can centralize reality. There is no god’s-eye view (Hayek: useful knowledge is local).

So “smarter models” won’t fix alignment on their own. Reality is contingent, time-varying, and partially tacit — you need a system that carries forward local context (aims, constraints, guardrails, decision logs) so each run starts closer to truth than the last one.

</details>

## Catch The Chaos Dragon Early: The Missing Superpower

The most important capability in an AI-assisted world is not “write the code.”
It’s “tell me when we’re off the rails.”

Drazen said it best: the system has to be able to tell you when you’re thrashing at high speed.

That’s it.
Not a new UI.
Not a bigger model.

A system that keeps you oriented when the execution engine is spinning faster than your working memory.

It’s basically runtime air-traffic control: surface constraints, catch the chaos dragon early, and stop the line when you’re about to do something dumb at speed.

The goal isn’t that the model becomes wise. It’s that guardrails and recall become *ambient*: the system surfaces what matters and intervenes when you’re about to do something dumb at speed.

## Why This Is Real (Not Conceptual)

I’m not trying to be a futurist here.

Quick reality check: I had never written firmware. I hadn’t written C in 20+ years. I’m mostly doing management work.
And yet I shipped a real device (plus a bridge and apps) to real users in weeks.

That didn’t happen because I “trusted the model.”
It happened because the loop kept me from losing the plot while execution got fast.

## If You Want to Try This

If you want to try this without buying anything:

1. Write one aim for your next week (one sentence, observable change).
2. Write one guardrail (“this must not happen again because…”).
3. Before each work session, write a Dive Pack (5 minutes).
4. If the chaos dragon shows up (you’re thrashing / building the wrong thing), salvage for 10 minutes, then restart clean.

This is the “Aim. Do. Reflect.” loop in practice: {% post_url 2025-09-08-open-horizons %}.

And it’s the missing layer for agentic execution: the thing that keeps runs aligned while speed goes up.

### If You Lead A Team (Start This Week)

If you’re leading a team and watching agents amplify delivery *and* amplify thrash, don’t go buy “more velocity.” Run a 2-week pilot that forces grounding:

1. Pick one **high-visibility** initiative with real stakes (customer impact, security, reliability, or real revenue).
2. Write a Dive Pack (10–30 minutes) and paste it into the ticket + PR description (use the template above).
3. Require that any agentic work session starts by pasting that Dive Pack in *before* generating.
4. Add one guardrail based on a real failure mode you’ve already seen, and require an override note when it’s violated.
5. Keep score: reversals (work you undo), “dead-end weeks,” and safety incidents. Review in 2 weeks and update the guardrails.

## Design Partners

<div class="callout callout--note" markdown="1">
**Design partners wanted:** If you want to implement Open Horizons + Bottle in your team (open-source pilot or enterprise rollout), reach out: [cal.com/muness/c](https://cal.com/muness/c) or [muness@217castle.com](mailto:muness@217castle.com).
</div>

If you’re interested, I’m looking for a small number of design partners who:

- are using agents in real workflows (engineering, research, operations)
- are feeling the pain of thrash (agent-accelerated rework, polished output in the wrong direction, reversals, unsafe changes)
- want a lightweight loop that keeps the work pointed at the right thing, then harden it with real feedback

Two ways to engage:

- **Open-source design partner (fastest):** I’ll help you install Bottle and run the loop (Dive Packs, logs, guardrails) on one real initiative for 2–4 weeks; you share structured feedback on what breaks.
- **Enterprise design partner (exec-led):** same pilot, but the goal is org-level adoption without turning this into an “IT transformation.” I’m not looking to start with SSO/RBAC/IT hoops — I’m looking for an exec who feels the pain of thrash and wants it to stop. If your teams are using AI to accelerate the wrong things, we’ll install the loop on one initiative and optimize for outcomes like fewer reversals, fewer dead-end weeks, and safer changes at speed.

When you reach out, include: your team size, where you use agents, one chaos dragon failure mode you’ve seen (how thrash shows up in your org), what you’re accountable for, and whether you’re thinking “open source” or “enterprise.”

## Close

The chaos dragon has always been here; agents just made it bigger and faster.
The answer isn’t more speed — it’s grounded execution: preserve judgment, then apply it before you act.
That’s what we’re building.

<details class="appendix" markdown="1">
<summary><strong>Appendix — System view (generic + rewrite)</strong></summary>

Generic view (turn intent into shipped change without accelerating the wrong thing):

![Grounded execution system: intent → dive pack → execute → chaos dragon check → salvage/update memory → ship](../../assets/img/grounded-execution-system.svg)

Rewrite view (use the existing system as spec + enforce equivalence/safety as you move fast):

![Rewrite with a safety harness: mandate → existing system as spec → dive pack → rewrite → safety harness → chaos dragon check → ship](../../assets/img/rewrite-with-safety-harness.svg)

</details>

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

The point of showing this is not “look how much shipped.” It’s that the system makes shipping *safer*: it keeps the direction coherent, catches the chaos dragon early, and preserves judgment so you don’t have to rediscover it every session.

</details>
