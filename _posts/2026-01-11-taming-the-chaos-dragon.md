---
title: "Taming the Chaos Dragon: Ground Every Execution"
date: 2026-01-11 12:00:00 -0500
author: muness
toc: true
comments: true
excerpt: "Agents multiply execution. Without grounding, they multiply drift. Open Horizons is the missing yin: a local, intentful memory that keeps each run aligned."
---

Over the last few weeks I built a scrappy personal project: an ESP32S3-based controller for Roon.
Then it escaped the lab.
Now it has dozens of users across the LMS, Roon, and HQPlayer communities.

If none of those proper nouns mean anything to you, translate it as: a little hardware controller for networked audio playback.

This post isn’t about audio or embedded. It’s about what happened next.

Once I saw traction, I did the adult move: I paused and asked, *do I want to do this — and why?*
The answer surprised me. The “why” wasn’t the gadget. It was the feeling: **intentful, low-friction listening**.
And it snapped cleanly into a larger priority: **Open Horizons**.

So I did something new (for me): I used the Open Horizons stack Drazen and I are building to build the thing that validated the stack.

The result has been… obscene productivity.
Not because we got “smarter models.”
Because we stopped letting execution free-run.

One concrete anchor: I went from “haven’t written firmware in a decade” to shipping a real device with real users in under two months, while simultaneously building the stack that made that pace survivable.

LLMs are the yang: generation, breadth, speed.
Open Horizons is the yin: intent, constraint, memory.
You need both.

## The New Problem: The Chaos Dragon

The core failure mode we’re targeting is not new.
It’s just more dangerous now.

Every enterprise, small team, and individual has always struggled with misalignment.
Not just “Team A is wrong” and “Team B is right,” but something worse:

**Brownian execution** (random-walk drift) — pulling one way in the morning, the opposite way in the afternoon, and calling it progress because lots of work happened.

Agents pour gasoline on that.

In the pre-agent world, misalignment was like dog sleds pulling in different directions.
You still moved, but you didn’t go fast enough for the chaos to kill you quickly.

Now we have dragons.

Execution is fast enough that ungrounded drift becomes catastrophic: you can build the wrong thing at 10× speed, and you can also lock into it at 10× speed.

This is why the point of Open Horizons isn’t acceleration.
It’s **alignment**.

If you haven’t read it, start with the claim: {% post_url 2025-09-16-alignment-is-the-constraint %}.

## What We’re Not Doing

We are not trying to build smarter models.

We’re doing something more practical and (I think) more inevitable:

**We make each execution grounded in local context.**

That means:

- the agent shouldn’t “try hard” in a vacuum
- it should start with *your aims, constraints, and prior hard-won learnings*
- and it should be able to tell you when it’s drifting

In other words: the work needs a *memory* that isn’t a model’s context window.

## Embracing the Hayek Problem

Open Horizons is a bet on a constraint most systems pretend doesn’t exist.

Hayek’s core insight applies cleanly here: useful knowledge is local. You don’t get a god’s-eye view.

There is no global view.
You never cross the same river twice.
Some mistakes are one-way doors: one bad commitment can close doors permanently.

The key is not that agents can’t infer your context. It’s that **no one can**. You can’t centralize reality. If you want work to stay aligned, you have to keep re-grounding each execution in the local aims, constraints, and learnings that are true *right now*.

### A Useful Contrast: Dwarkesh (Correct and Exactly Wrong)

Dwarkesh Patel has a great essay, [Thoughts on AI progress (Dec 2025)](https://www.dwarkesh.com/p/thoughts-on-ai-progress-dec-2025), that circles a real constraint: the long tail of context and micro-judgments that make human labor valuable.

He’s right that “just bake in more skills” doesn’t scale, and he’s right to be suspicious of training pipelines that look like a reboot of expert systems: an industrial supply chain trying to pre-load the world into a model.

But here’s the inversion: he’s **completely correct and exactly wrong**.

Correct about the problem.
Wrong about the escape hatch.

The temptation is to believe that “higher IQ” (smarter LLMs, better continual learning) will eventually power through.
But the Hayekian lesson is that there is nothing to power through. There is no omniscient vantage point to reach.

Even a hypothetical “computer that can simulate the whole world” (Laplace’s Demon with GPUs) doesn’t solve the core issue: *reality is local, contingent, time-varying, and partially tacit*. The missing ingredient isn’t more intelligence. It’s **better grounding**.

So the job isn’t to write the One True Plan.
The job is to **preserve and apply judgment** as reality changes.

Open Horizons won’t “solve” this completely either. Humans don’t have perfect local knowledge. The win is asymptotic: make the system better at carrying forward the best available local context (aims, constraints, guardrails, decision logs) so each execution starts closer to truth than the last one.

This is why “working memory” matters.
And it’s why the *salvage loop* matters: {% post_url 2026-01-07-the-salvage-loop-keep-learning-drop-the-code %}.
If you want the companion concept, see: {% post_url 2025-12-28-splitting-learning-from-constraint-in-an-ai-world %}.

For the same challenge, we might run the attempt three times.
We pluck out:

- “I hate this”
- “I like this”
- “this broke an expectation”

Then we restart clean—fast—because the learning survived even when the code didn’t.

That is how you tame the chaos dragon: **protect the learning, not the artifact.**

## The Concrete Move: Grounding Before You Act

Here’s the simplest operational shift I’ve found:

<div class="callout callout--note" markdown="1">
**Don’t start a run without a Dive Pack.**
</div>

In a recent conversation with Drazen, we described it plainly:

> “When we start a session we put together a dive prep pack… it includes the principles… the learnings and guardrails… we don’t start without that.”

That’s the whole thing.

The model doesn’t need more tokens. It needs the *right* tokens.

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

### Make It Low Friction (Or It Won’t Spread)

The Dive Pack is the discipline.
But discipline alone doesn’t scale if setup is painful.

So we’re packaging the stack into something you can just install and start with:

> “We literally bottled them up… You install Bottle… and it sets up the rest for you… and keeps it up to date with the practice.”

**Bottle** is the installer/updater that makes our agentic workflow reproducible: https://github.com/open-horizon-labs/bottle
It includes plugins for **Claude Code** and **Codex**, so you can get started without hand-wiring a whole toolchain.

That matters because alignment only works when it’s cheap enough to do *every time*.

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

> “AI has some consciousness, some guardrails… it’s reminded me so much of upbringing children…”

## Why This Is Real (Not Conceptual)

I am not writing this as a futurist.

I hadn’t written firmware in a decade.
Then I built a device, shipped it, supported users, and started extending it into:

- a knob firmware that keeps improving
- a multi-source bridge (Roon/LMS/OpenHome as peers, not forks)
- seamless HQPlayer DSP control with transport control agnostic of source system

This happened because the system kept my direction coherent while my execution loop got absurdly fast.

## If You Want to Try This

If you want a minimal experiment:

1. Write one aim for your next week (one sentence, observable change).
2. Write one guardrail (“this must not happen again because…”).
3. Before each work session, write a Dive Pack (5 minutes).
4. If you drift, salvage for 10 minutes, then restart clean.

This is the “Aim. Do. Reflect.” loop in practice: {% post_url 2025-09-08-open-horizons %}.

And it’s the missing layer for agentic execution: the thing that keeps the dragons pulling the same direction.

## Close

The chaos dragon has always been here; agents just made it bigger and faster.
The response isn’t more acceleration—it’s grounded execution: preserve local judgment, then apply it before you act.
That’s what we’re building.
