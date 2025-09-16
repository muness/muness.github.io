---
title: "Alignment Is the Constraint"
date: "2025-09-16 13:00:00 +0500"
author: muness
toc: true
comments: true
pin: true
excerpt: "Acceleration is a siren call. Alignment is the constraint. A Critical Chain lens for strategy, mechanisms of action, and feedback loops. Lessons from the Arsenal of Democracy episode on EconTalk."
---

> Acceleration is seductive. Alignment is scarce. The first multiplies motion. The second creates progress.

## Overview

I listened to the EconTalk episode **[How Did America Build the Arsenal of Democracy? (with Brian Potter)](https://www.econtalk.org/how-did-america-build-the-arsenal-of-democracy-with-brian-potter)** and it sharpened something I keep seeing: most orgs try to fix delivery speed when the real bottleneck is alignment.

**Thesis:** treat **alignment** as the system constraint. Until shared aims, a clear mechanism of action, and fast feedback are in place, more speed produces more rework.

**What this post gives you**

- Definitions you can reuse
- A Critical Chain lens
- A simple alignment playbook
- Short historical anchors

> Pocket phrases
>
> - Alignment is the constraint.
> - If you cannot name the mechanism, you cannot steer.
> - Add speed after you have signal.

---

## Strategy, made small

Strategy does not need mystique. Use a minimal loop:

- **Aim:** the outcome you want to create
- **Mechanism of action:** the causal lever you believe will move that outcome
- **Feedback:** the signal that will validate or disprove the mechanism

Example:

- Aim: increase retention
- Mechanism: personalized onboarding builds early confidence, which reduces early churn
- Feedback: 30-day activation rate, plus time to first value

If you cannot name the mechanism, you cannot steer. Metrics without a mechanism become scoreboard watching.

## Mechanisms that connect strategy to action

A brilliant strategy on paper means little without a concrete path to implement it. Pragmatic leaders define **mechanisms** that link goals to daily execution. As Jeff Bezos puts it, "Good intentions don't work, mechanisms do" ([AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/essential-eight-maturity/theme-8.html)). In practice, a mechanism is a **repeatable process or tool** that is adopted by the team and **regularly inspected for effectiveness** ([AWS ORR mechanism](https://docs.aws.amazon.com/wellarchitected/latest/operational-readiness-reviews/building-mechanisms.html)).

Two useful examples to borrow:

- **Working Backwards (PR/FAQ):** write the press release and FAQ before building to force clarity on customer value and assumptions ([Working Backwards](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/)).
- **Weekly Business Review:** review controllable input metrics weekly to course-correct early ([Commoncog on Amazon's WBR](https://commoncog.com/the-amazon-weekly-business-review/)).

Without such mechanisms, even well-intentioned teams drift. Studies and reviews estimate **about two thirds of strategic efforts fail in execution**, not because the strategy is bad but because the "how" breaks down ([HBR](https://hbr.org/2017/11/executives-fail-to-execute-strategy-because-theyre-too-internally-focused); [Fortune summary](https://www.forbes.com/sites/kenmakovsky/2012/03/22/the-reason-ceos-fail-an-update/)). Good strategy names the **how**, and great organizations deliberately build mechanisms (frameworks, processes, incentives) to carry that how into effect.

---

## A Critical Chain lens

Eli Goldratt’s [view](https://en.wikipedia.org/wiki/The_Goal_(novel)) is simple. Every system has a constraint. Optimizing anywhere but the constraint is waste.

Leaders often assume the constraint is **delivery**. More engineers, tighter sprints, more automation, more AI. In practice, the constraint is usually **alignment**:

- Without shared aims, teams push in different directions
- Without mechanisms, work cannot be validated
- Without feedback, confidence drifts away from reality

When alignment is the constraint, adding speed multiplies misaligned work. Faster drift, more rework, more burnout.

> “We must be the great arsenal of democracy. For us this is an emergency as serious as war itself. We must apply ourselves to our task with the same resolution, the same sense of urgency, the same spirit of patriotism and sacrifice as we would show were we at war.”
>
> “This can only be accomplished if we discard the notion of ‘business as usual.’”

The cost of misalignment is not theoretical; it shows up in real dollars and morale. One global survey estimated around **$1 million wasted every 20 seconds**, roughly **$2 trillion a year**, due to ineffective implementation of strategy ([PMI 2018 Pulse](https://www.pmi.org/-/media/pmi/documents/public/pdf/about/press-media/press-release/pulse-of-the-profession-2018-media-release.pdf)).

---

## What good looks like

**Alignment, on one page**

- One crisp **Aim** with a definition of done
- One plausible **Mechanism** that names the causal lever
- Two or three **Feedback** signals, including at least one proxy metric you expect to move first
- A small stage gate: what we will learn in the next two weeks, and a decision rule for continuing or changing course

**Guardrails**

- Protect the user with a simple SLI or SLO while you experiment
- Favor short cycles over big pushes. Planning matters, the plan changes

### One-page Alignment Sheet

- **Aim:** …
- **Mechanism:** We believe ___ will move ___ because ___.
- **Feedback signals:** Proxy 1, Proxy 2, Outcome metric.
- **Stage gate (2 weeks):** We will continue if ___.
- **Guardrail:** One SLI/SLO to protect users while we test.
- **Owner and cadence:** Name • Weekly 15-min review on ___.

---

## Common misfires

Speed that outruns alignment creates expensive noise, not outcomes. The patterns below show up everywhere.

- **More, faster:** assumes delivery is the constraint. Result: more of the wrong work
- **Metrics without a mechanism:** numbers move, story does not
- **Snapshots without flow:** counts today but no cycle time or path distribution
- **Business as usual:** new aims, old routines. As Roosevelt put it, we must discard the notion of business as usual

### When speed outruns alignment

On a smaller scale, many product teams have experienced the **feature factory** syndrome: rapidly releasing a flurry of features that seem impressive, only to find they do not make a dent in business outcomes. This often happens when teams operate with implicit goals or conflicting interpretations of strategy. Without a unifying north star, velocity turns into **Brownian motion** — lots of busyness, no progress. One engineering leader described seeing teams “working on things that don’t even matter… all this ends up being wasted” because the right hand and left hand were not coordinated. Another common pitfall is when leadership declares an urgent deadline (“We must ship by Q4!”) and teams crunch to hit it, but in the rush they skip the due diligence of cross-functional alignment. The product might ship on time, yet sales, marketing, or support were not prepared and the launch flops. These failures reinforce that speed is not a virtue in isolation — it must be channelled toward a clear, shared aim. See also: [John Cutler on Feature Factories](https://www.mindtheproduct.com/break-free-feature-factory-john-cutler/) and [Amplitude’s follow-up](https://www.amplitude.com/blog/12-signs-youre-working-in-a-feature-factory-3-years-later).

Many failures in tech can be traced to teams focusing on delivery velocity while losing sight of strategic coherence. One stark example was the short-form video platform **Quibi**. Flush with roughly **$1.75–$2.0 billion** in funding, Quibi raced to deliver a splashy product launch in under a year. In the rush, the offering was misaligned with actual user behavior and needs — expensive, 10-minute exclusive shows built for mobile at a time when short-form, user-generated video dominated. Founders later wrote that Quibi failed “either because the idea itself wasn’t strong enough … or because of our timing” ([open letter coverage](https://africa.businessinsider.com/tech/quibi-reveals-why-it-failed-in-a-somber-letter-offering-a-profound-apology-to/x9eh866)). Post-mortems highlighted the demand mismatch and format rigidity ([WSJ](https://www.wsj.com/business/media/quibi-was-supposed-to-revolutionize-hollywood-heres-why-it-failed-11604343850); [The Guardian](https://www.theguardian.com/tv-and-radio/2020/oct/23/why-quibi-is-a-cautionary-tale-shortform-netflix)). In other words, Quibi moved fast on building **something**, but it was not aligned to a real market demand. The result was a highly optimized delivery of the wrong strategy.

### Limits and tells

This post assumes alignment is the constraint. You can tell alignment is healthy when the result is an organization where **everyone, from execs to individual contributors, can answer how their work links to the strategy**, where decisions happen in a clear strategic context, and where course-corrections are made in weeks, not after the quarter is lost. In short, **strategy isn't a slidedeck and is alive in the day-to-day rhythm of the team**.

If you are already there, delivery may be the real constraint. In that case, fix flow: smaller batch size, visible WIP limits, fewer handoffs, and automation where it truly trims cycle time.

---

## Mini playbook

Use this to upgrade alignment before you add speed.

### 1. Coauthor a metric tree for the Aim

- Name the outcome and its leading indicators
- Write one sentence that links mechanism to those indicators

### 2. Ship a mechanism slice

- Build the smallest change that would move the leading indicator
- Decide in advance what you will learn and what would make you stop

### 3. Close the loop, fast

- Review the signals weekly. Ask what changed, what did not, and why
- Capture the decision and the rationale in a short log

### 4. Add guardrails

- Choose one reliability or quality signal to watch while you experiment

### 5. Only then add speed

- When the loop is working, scale with automation, staffing, or AI

### Run this in 30 minutes

**Prep (10 min):** Write one Aim and one Mechanism sentence.

- Aim: the outcome in plain words.
- Mechanism: “We believe X will move Y because Z.”

**Working session (15 min):**

- Sketch a 3-node metric tree: Aim → 2 leading indicators → 1 proxy you expect to move first.
- Define a **two-week stage gate**: “We will continue if proxy ≥ X by week 2.”

**Commit (5 min):**

- Create a 3-line decision log entry: Date • Aim • Mechanism • Gate.
- Schedule a 15-minute weekly check to review the proxy and decide: continue, change, or stop.

---

## A short note on the podcast

The EconTalk conversation includes vivid examples of how massive output depended on solving the real constraints first: production control, inspection at scale, and redesigning processes and tools for the workforce that actually existed. Speed came after alignment of aim, method, and feedback. That pattern still holds.

---

## LLMs as alignment amplifiers

If you are excited about LLMs, do not read this as anti speed. LLMs can be excellent tools for alignment, feedback, and communication when pointed at the right problems.

Codify the mechanism:

- Use an LLM to draft your One page Alignment Sheet from meeting notes and docs. Ask it to normalize team jargon and map terms to your metric tree and definitions.
- Connect to your data sources through a semantic layer so queries reference the same facts and names. This keeps the mechanism and the metrics in sync.

Close the loop faster:

- Let an agent fetch the latest proxy signals each week and propose a short review note: what moved, what did not, and why. Treat it as a first draft, then decide.
- Replace dashboard sprawl with task specific agents that answer the on the spot questions people actually have. Use them to check whether the mechanism is working in the flow of work.
- Be careful with junk signals. Tickets and ad hoc tags rarely form an objective rubric on their own. You still need clear definitions of done and trusted data.

Communicate context:

- Generate decision logs, briefs, and user ready explanations that anchor to Aim, Mechanism, Feedback, and Guardrail.
- For complex teams, consider role specific agents that arrive with the organization’s vocabulary and patterns. They carry context so humans can focus on the judgment calls.

LLMs multiply value once the alignment loop exists. Aim and mechanism first, feedback second, then add speed.

---

## Closing

Speed is not the point. Alignment is the constraint. Aim more, plan less, communicate better, learn faster. When the mechanism is explicit and the feedback is fast, speed becomes a multiplier, not a mirage.
