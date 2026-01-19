---
comments: true
date: 2026-01-26 09:00:00 -0500
author: muness
title: "Terraforming Is the Job"
toc: true
excerpt: "Your job isn't to use AI tools. Your job is to terraform: reshape the environment so the right work happens by default, and the wrong work gets caught early."
---

<details class="appendix" markdown="1">
<summary><strong>Outline</strong></summary>

- Define terraforming (and contrast with “using tools”).
- Name what changed: generation got cheap; the constraint moved.
- Explain the leader’s new job: steer search, define scoring, install guardrails.
- Show the terraform loop: pre-flight → execute → detect drift → salvage → update memory → repeat.
- Apply it across three layers: self, team, tooling (and distribution).
</details>

## Terraforming Is The Job

“You should be terraforming. That is your job as a leader.”

That sentence sounds dramatic until you notice what AI did to the economics of work:
it collapsed the cost of generating options, drafts, and prototypes.

If you’re still thinking “AI helps me write faster,” you’re looking at the wrong axis.
The shift isn’t speed. It’s reach.

The question is not *what tools do we use?*
It’s: **what environment do we build so good work happens by default—and thrash is caught early?**

That’s terraforming.

## What Changed (And Why It Forces A Workflow Change)

Most systems don’t collapse cleanly under AI. They destabilize.
Because one cost drops and another becomes binding.

- **Generation is cheap.** Options explode.
- **Verification is not.** Reality stays expensive: testing, integration, safety, user impact.
- **Attention is scarce.** The org’s cognitive load becomes a constraint.

This is why “more output” often produces *less progress*.
You can generate in any direction. Direction is the scarce thing.

If you want the deeper version of this, see {% post_url 2025-12-10-beyond-the-nearest-peak %}.

## The Leader’s New Job: Steer Search

In an AI-assisted world, the job is not “produce artifacts.”
The job is:

- **Widen** the space of options early (cheap).
- **Score** options against constraints (not vibes).
- **Prune** hard (attention is scarce).
- **Deepen** only what survives.

In other words: you’re managing a search process.
If you don’t define the scoring function, you don’t control the search—you just get more output.

Here’s a lightweight scoring function you can actually use:

- **Outcome clarity:** does this change something observable?
- **Constraint fit:** does it respect the real constraints (time, safety, politics, runway)?
- **Verification burden:** how expensive is it to prove correct?
- **Reversibility:** if this is wrong, how hard is it to undo?
- **Leverage:** if this works, does it unlock new capability (or just polish)?

## Terraforming Is Not Tool Worship

Tools matter, but they don’t define the work.

If you want a clean mental model:

- A craftsperson says: “I need better tools.”
- A terraformer says: “I’ll use what I have, and I’ll improve the tools as I go.”

Terraforming is an identity shift: your job becomes *environment design*, not artifact production.

## The Terraform Loop

Terraforming is not a vibe. It’s a loop you can run.

1. **Pre-flight (intent + constraints).**
2. **Execute fast.**
3. **Detect drift early** (“are we thrashing?”).
4. **Salvage the learning** (keep what changed your understanding).
5. **Update memory + guardrails** so the next run starts closer to truth.

If you’ve been reading along: this is the operational core behind {% post_url 2026-01-12-taming-the-chaos-dragon %}, and it composes directly with {% post_url 2026-01-07-the-salvage-loop-keep-learning-drop-the-code %}.

## Steer vs. Abort: The Fastest Way To Stop Thrash

One of the weird new freedoms is that “start over” stops being tragic and starts being rational.

Use a simple heuristic:

- **Steer** when the aim is still intact and you’re failing on execution details (tests, edge cases, wiring).
- **Abort** when you can’t explain why the work exists, the plan keeps reversing, or the outputs violate constraints in ways that require constant patching.

Observable “abort” signals:

- You’ve changed the approach three times and can’t articulate what you learned each time.
- The work is getting bigger while “done” gets fuzzier.
- You’re accumulating “we’ll clean it up later” debt *before* you have a working core.

When you abort, don't rage-delete—salvage:

- What did we learn?
- What guardrail should exist next time?
- What context was missing at the start?

## Levels of Response: From Tarp to Terraform

Not all "fixes" are equal. There's a progression:

- **Tarp over the problem.** Action without premise. You don't understand why it's broken, but you cover it up. This is what almost everyone does by default.
- **Nearest peak.** Local optimization within the current framing. Better, but you're still trapped by assumptions you haven't examined.
- **Beyond the nearest peak.** You step back, explore the solution space, and find a fundamentally better approach before committing. (See {% post_url 2025-12-10-beyond-the-nearest-peak %}.)
- **Terraforming.** You reshape the environment so the problem doesn't recur—and similar problems become easier to solve.

Here's a micro example that drives me up the wall. A user reported CPU spikes on a Raspberry Pi 3B running my audio bridge. The request: "make polling configurable." That's a tarp. It doesn't fix the problem; it lets you tune how badly the problem manifests.

The nearest peak would be optimizing the polling interval. Still polling. Still O(n) CPU per interval.

The actual fix was switching to an event subscriber model ([PR #107](https://github.com/open-horizon-labs/unified-hifi-control/pull/107)). Adapters publish state changes; consumers subscribe. O(1) per actual change instead of O(n) per interval. The mechanism of action is obvious. The rollback is trivial.

Did I load-test it with 100+ simulated clients? No. I shipped it. The result: ["now using negligible CPU with the new mechanism."](https://forums.lyrion.org/forum/user-forums/3rd-party-hardware/1804977-roon-knob-includes-lms-support?p=1807360#post1807360)

This is the opposite of "just do something" action bias—the tarp mentality that dominates most corporate environments. Tarps are action *without* premise: you don't understand why it's broken, but you do something anyway. What I'm describing is action *with* premise: the mechanism of action is clear, the change is reversible, and the verification burden of "proving it first" exceeds the cost of being wrong.

You can simulate processes, reason through mechanism-of-action chains, and act on defensible premises. That's not recklessness; that's basic science: understand, hypothesize, test. Once you've done that, the burden of proof shifts to the naysayers.

## Terraform Yourself: Make Direction Cheap

The first layer is personal practice. The point is to make “start right” low friction.

Use a minimal pre-flight before any agentic session:

<div class="callout callout--note" markdown="1">
```text
Aim (1 sentence):
What "done" looks like (observable):

Constraints / guardrails (3–7 bullets):

Known landmines (what drift looks like here):

One question that, if unanswered, makes action premature:
```
</div>

The point is not more planning.
The point is **orientation**.

## Terraform Teams: Make Guardrails Ambient

The second layer is team practice. This is where most “AI adoption” fails—not because the tools are weak, but because the organization is unconstrained.

Three concrete moves:

1. **Require pre-flight.** No dive pack, no run.
2. **Standardize overrides.** If you break a guardrail intentionally, log it and keep moving.
3. **Measure reversals.** Track work you undo, not work you produce.

Terraforming is what makes speed safe.

## Terraform Tooling: Make The Practice Stick

The third layer is tooling. Rituals don’t spread when they’re annoying.

Terraforming tooling means:

- Defaults are opinionated.
- Context is easy to inject at the start of a run.
- Guardrails are easy to create when you learn something the hard way.
- Logs are lightweight, so learning compounds.

Two traps to avoid:

- **Silent injection.** If the system changes behavior without visibility and consent, you’ll lose trust and drift into policy-by-accident.
- **Menus instead of rails.** If users have to assemble the workflow from plugins and knobs, most will never get to the loop at all.

This is also where "distribution" sneaks in:
the ability to install, share, and reuse your environment matters as much as the environment itself.
For a concrete case of what happens when distribution becomes the binding constraint, see {% post_url 2026-01-20-code-rush-to-deploy-drag %}.

## Terraforming Is A 7-Day Experiment

If you want to make this real without turning it into a transformation program:

1. Pick one workstream with real stakes.
2. Require a 5-minute pre-flight (aim + constraints) before any agentic run.
3. Keep a single list of guardrails for the week.
4. If you thrash, abort fast: salvage learning and restart clean.
5. At the end of the week, review: what constraints were real, what guardrails stuck, what should become default tooling?

## The Point

AI didn’t remove the need for leadership.
It removed the scarcity of drafts.

When drafts are cheap, the binding constraint becomes direction, judgment, verification, and the environment that carries those forward.

Terraform that environment and the ceiling moves.
Ignore it and you’ll ship faster in the wrong direction.
