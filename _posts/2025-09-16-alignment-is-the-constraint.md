---
title: "Alignment Is the Constraint"
date: "2025-09-16 13:00:00 +0500"
author: muness
toc: true
comments: true
pin: true
excerpt: "Acceleration is a siren call. Alignment is the constraint. A Critical Chain lens for strategy, mechanisms of action, and feedback loops. Lessons from the Arsenal of Democracy episode on EconTalk."
---

**tl;dr** - Acceleration is seductive. Alignment is scarce. The first multiplies motion. The second creates progress.

## Overview

I listened to the EconTalk episode **[How Did America Build the Arsenal of Democracy? (with Brian Potter)](https://www.econtalk.org/how-did-america-build-the-arsenal-of-democracy-with-brian-potter)** and it sharpened something I keep seeing: most orgs try to accelerate delivery when the real bottleneck is alignment.

**Thesis:** Unless you have reason to believe otherwise, assume that **alignment** is the system constraint. Until shared aims, a clear mechanism of action, and fast feedback are in place, more speed produces more rework. The first step is to demystify strategy itself. If alignment is the constraint, then we need a shared, minimal definition of what strategy really is.

## Strategy, made small

Strategy does not need mystique. At its core, strategy is three things:

- **Aim:** the outcome you want to create
- **Mechanism of action:** the causal lever you believe will move that outcome
- **Feedback:** the signal that will validate or disprove the mechanism

Feedback acts as a real-world sufficiency test: are our tactics actually enough to move the Aim?

An Aim is not just an internal target like “ship features” or “increase revenue.” It should anchor to real user outcomes. As I argue in [User Value Comes First](https://muness.com/posts/user-value-comes-first/) growth comes from delivering genuine value, not from chasing profit-first outputs. As such, an Aim should be phrased as the *change in user behavior we seek*, not as internal outputs. As I argued in [Outcomes Over Output](https://muness.com/posts/outcomes-over-output-book-summary/), outputs are deliverables; outcomes are the user behaviors and benefits that prove value.

Example:

- Aim: increase retention
- Mechanism: personalized onboarding builds early confidence, which reduces early churn
- Feedback: 30-day activation rate, plus time to first value

### Quick Reference

| Element   | Question to Ask                        | First Artifact                         |
|-----------|----------------------------------------|----------------------------------------|
| Aim       | What outcome are we trying to create?  | One sentence with a definition of done  |
| Mechanism | Why do we think this will work?        | A causal “because” statement            |
| Feedback  | How will we know fast if we are wrong? | A proxy metric + stage gate             |

If they cannot name the Aim, teams end up staring at the next ticket instead of knowing where they are headed. If the team cannot name the Mechanism, the team cannot steer; they might pull levers that conflict or do not connect to the outcome. If the team cannot name the Feedback, the team cannot learn; they will repeat work without getting closer to the Aim. And if teams only watch metrics without a mechanism, it is just scoreboard watching with no playbook behind it. See the [one‑page alignment worksheet](#worksheets-and-playbook) at the end of this post for teams to fill out together.

Naming the aim, mechanism, and feedback gives a team strategy in miniature. But to make it real, teams need mechanisms that institutionalize those choices.

## Mechanisms that connect strategy to action

A brilliant strategy on paper means little without a concrete path to implement it. Pragmatic leaders define **mechanisms** that link goals to daily execution. As Amazon [puts](https://aws.amazon.com/blogs/enterprise-strategy/strategy-is-a-winding-road-mechanisms-keep-you-on-track/) it, "Good intentions don't work, mechanisms do". In practice, a mechanism is a **repeatable process or tool** that is adopted by the team and **regularly inspected for effectiveness** ([AWS Operational Readiness Review](https://docs.aws.amazon.com/wellarchitected/latest/operational-readiness-reviews/the-orr-mechanism.html)).

Two processes teams can borrow:

- **Working Backwards (PR/FAQ):** write the press release and FAQ before building to force clarity on customer value and assumptions ([Working Backwards](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/)).
- **Weekly Business Review:** review controllable input metrics weekly to course-correct early ([Commoncog on Amazon's WBR](https://commoncog.com/the-amazon-weekly-business-review/)).

Clear, structured strategy documents are also mechanisms. As I described in [Documenting Strategy](https://muness.com/posts/documenting-strategy-lessons-from-leading-data-and-eng/), tools like [S&T Trees](https://muness.com/posts/on-s-and-t-trees/) help ensure every tactic is necessary, viable, sufficient, and connected, the hallmarks of alignment.

Without such mechanisms, even well-intentioned teams drift. Studies and reviews estimate **about two thirds of strategic efforts fail in execution**, not because the strategy is bad but because the "how" breaks down ([HBR](https://hbr.org/2017/11/executives-fail-to-execute-strategy-because-theyre-too-internally-focused); [Fortune summary](https://www.forbes.com/sites/kenmakovsky/2012/03/22/the-reason-ceos-fail-an-update/#:~:text=poor%20communications%20skills,to%20deal%20with)). Good strategy names the **how**, and great organizations deliberately build mechanisms (frameworks, processes, incentives) to carry that how into effect.

A compact [alignment template and playbook](#worksheets-and-playbook) are included at the end of this essay to help teams translate these mechanisms into practice. Treat each mechanism slice as an MVP in Seiden’s sense: the *smallest thing you can do to learn if the hypothesis is correct* ([Outcomes Over Output](https://muness.com/posts/outcomes-over-output-book-summary/)).

But even the best mechanisms will not help if they are aimed at the wrong bottleneck. Goldratt’s Critical Chain lens gives us a way to ask: what is the real constraint?

## A Critical Chain Lens

Eli Goldratt’s [view](https://en.wikipedia.org/wiki/The_Goal_(novel)) is that every system has a constraint. Optimizing anywhere but the constraint is waste. Leaders often assume the constraint is **delivery**. More engineers, tighter sprints, more automation, more AI. In my experience, the constraint is usually **alignment**:

- Without shared aims, teams push in different directions
- Without mechanisms, work cannot be validated
- Without feedback, confidence drifts away from reality

In [Real-World Application of Strategic Clarity](https://muness.com/posts/real-world-application-of-strategic-clarity-in-platform-leadership/), I showed how platform teams demonstrated this in practice: their real constraint is usually alignment with the orgs they serve. When alignment is the constraint, adding speed multiplies misaligned work. Faster drift, more rework, more burnout.

Indeed, misalignment is very expensive. One global survey estimated around **$1 million wasted every 20 seconds**, roughly **$2 trillion a year**, due to ineffective implementation of strategy ([PMI 2018 Pulse](https://www.pmi.org/-/media/pmi/documents/public/pdf/about/press-media/press-release/pulse-of-the-profession-2018-media-release.pdf)).

History gives us a vivid example of what happens when alignment, not delivery, is treated as the real constraint.

## Alignment as the Path to Speed: Lessons from the Arsenal of Democracy

> By the end of the war, an American assembly line was producing a B-24 bomber in less than an hour. But that success was far from inevitable. (See the [EconTalk episode](https://www.econtalk.org/how-did-america-build-the-arsenal-of-democracy-with-brian-potter).)

At first, misalignment made success nearly impossible. Factories built aircraft to outdated specifications, suppliers produced parts that didn’t fit, and workers optimized locally with no connection to the larger mission. Incentives and urgency weren’t enough. Without alignment on *what the aim was* and *how to get there*, early output was wasted motion.

### Alignment enabled adaptation to design change

Aircraft designs changed constantly. The P-47 had five major redesigns; the B-29 saw 900 design changes before production stabilized; Chrysler’s tank engine required more than 6,000 modifications. Without alignment, those changes would have fractured the system: one plant building variant A, another stuck on variant B. But because the aim was clear (“combat-ready aircraft that win the war”), the entire production ecosystem adapted in lockstep. Alignment turned design churn into coordinated improvement instead of chaos.

### Alignment enabled operational optimization

Factories didn’t just build faster with existing tools; they redesigned the production system itself. Jigs and fixtures were rebuilt so an untrained workforce (half a million women, many new to industry) could assemble precision aircraft. Rivet guns were counterweighted so smaller operators could use them. Tasks were simplified and redistributed so unskilled workers could contribute without breaking tolerances. Alignment on the aim made it obvious: the constraint wasn’t just labor supply, it was how to make *this workforce* effective. That clarity drove the retooling.

### Alignment enabled quality at scale

High-speed production would have been worthless if engines failed in the field. At Ford’s Willow Run plant, 3,000 of 15,500 workers were inspectors (20% of the workforce). That allocation only makes sense if everyone is aligned on the mechanism: output without quality is not success. By aligning quality control with the overall aim, the system could scale without collapsing under its own defects.

### Alignment enabled persistence through ramp-up failure

Even with all of this, Willow Run “for the first two years … produced virtually nothing.” A misaligned system would have abandoned the effort or doubled down on brute force. Instead, alignment allowed persistence: redesign the equipment, retrain the workforce, re-sequence the flow until the mechanism worked. Once alignment was locked in, speed finally compounded and eventually produced bombers every hour by war’s end.

### Alignment enabled massive productivity

Alignment didn’t just enable success—it overshot it. By the later years of the war, U.S. factories were producing aircraft, tanks, and munitions in numbers that dwarfed what was actually needed at the front. Alignment at scale created a system so effective that output exceeded demand. That surplus capacity meant supply was never the limiting factor again. Once the loop of aim, mechanism, and feedback was firmly in place, productivity became not just adequate but overwhelming.

When alignment is in place, speed compounds. But when it is missing, speed seduces, and wrecks.

## The Siren Call of Acceleration

Acceleration is seductive. It tempts us with speed, but without alignment it wrecks us on the rocks.

The instinct to “do more, faster” is powerful because output is visible and measurable. A new feature shipped or a backlog cleared feels like momentum. But this is the siren call: speed creates the illusion of progress even when direction is missing. Misfires like feature factories and high‑profile flameouts often share the same root cause: teams listened to the siren song of acceleration and lost sight of alignment.

This is the same trap I described in [User Value Comes First](https://muness.com/posts/user-value-comes-first/): teams can chase financial proxies or feature output, but when those are not aligned to user value, churn and wasted effort compound.

## Common misfires

Speed that outruns alignment creates expensive noise, not outcomes. The patterns below show up everywhere.

- **More, faster:** assumes delivery is the constraint. Result: more of the wrong work.
- **Metrics without a mechanism:** numbers move, outcome does not.
- **Snapshots without flow:** counts entries in each phase of a funnel, but ignores cycle time or path distribution.
- **Business as usual:** new aims, old routines. As Roosevelt [warned](https://www.presidency.ucsb.edu/documents/fireside-chat-9#:~:text=And%20this%20can%20be%20accomplished%20onely%20if%20we%20discard%20the%20notion%20of%20%22business%20as%20usual.%22%20This%20job%20cannot%20be%20done%20merely%20by%20superimposing%20on%20the%20existing%20productive%20facilities%20the%20added%20requirements%20of%20the%20nation%20for%20defense.), "This can only be accomplished if we discard the notion of ‘business as usual.’"

More output is not progress if it fails to change user behavior. [Outcomes](https://muness.com/posts/outcomes-over-output-book-summary/)—not feature counts—tell you whether the mechanism is working.

### When speed outruns alignment

On a smaller scale, many product teams have experienced the **feature factory** syndrome: rapidly releasing a flurry of features that seem impressive, only to find they do not make a dent in business outcomes. This often happens when teams operate with implicit goals or conflicting interpretations of strategy. Without a unifying north star, velocity turns into **Brownian motion, lots of busyness and no progress.**

I've seen teams working on things that don’t even matter, all their efforts wasted because the right hand and left hand were not coordinated. Another common pitfall is when leadership declares an urgent deadline (“We must ship by Q4!”) and teams crunch to hit it, but in the rush they skip the due diligence of cross-functional alignment. The product might ship on time, yet sales, marketing, or support were not prepared and the launch flops. These failures reinforce that speed is not a virtue in isolation—it must be channeled toward a clear, shared aim. See also: [John Cutler on Feature Factories](https://www.mindtheproduct.com/break-free-feature-factory-john-cutler/) and [Amplitude’s follow-up](https://www.amplitude.com/blog/12-signs-youre-working-in-a-feature-factory-3-years-later).

Many failures in tech can be traced to teams focusing on delivery velocity while losing sight of strategic coherence. One stark example was the short-form video platform **Quibi**. Flush with roughly **$1.75 to $2.0 billion** in funding, Quibi raced to deliver a splashy product launch in under two years. In the rush, the offering was misaligned with actual user behavior and needs—expensive, 10-minute exclusive shows built for mobile at a time when short-form, user-generated video dominated. Founders later wrote that Quibi failed “either because the idea itself wasn’t strong enough … or because of our timing” ([open letter coverage](https://africa.businessinsider.com/tech/quibi-reveals-why-it-failed-in-a-somber-letter-offering-a-profound-apology-to/x9eh866)). Post-mortems highlighted the demand mismatch and format rigidity ([WSJ](https://www.wsj.com/business/media/quibi-was-supposed-to-revolutionize-hollywood-heres-why-it-failed-11604343850); [The Guardian](https://www.theguardian.com/tv-and-radio/2020/oct/23/why-quibi-is-a-cautionary-tale-shortform-netflix)). In other words, Quibi moved fast on building **something**, but it was not aligned to a real market demand. The result was a highly optimized delivery of the wrong strategy.

### Limits and tells


This post assumes alignment is the constraint. Alignment is healthy when the result is an organization where **everyone, from execs to individual contributors, can answer how their work links to the strategy**, where decisions happen in a clear strategic context, and where course-corrections are made in weeks, not after the quarter is lost. In short, **strategy isn't a slide deck and is alive in the day-to-day rhythm of the team**.

If a team is already there, delivery may be the real constraint. In that case, fix flow: smaller batch size, visible WIP limits, fewer handoffs, and automation where it truly trims cycle time. The WWII story we opened with makes the same point: massive output only came once the true alignment constraints were solved.

## A short note on the podcast

The EconTalk [conversation](https://www.econtalk.org/how-did-america-build-the-arsenal-of-democracy-with-brian-potter) includes vivid examples of how massive output depended on solving the real constraints first: production control, inspection at scale, and redesigning processes and tools for the workforce that actually existed. Speed came after alignment of aim, method, and feedback. That pattern still holds.

The same lesson applies today: tools amplify alignment when used well, and amplify noise when used blindly. LLMs are a case in point.

## LLMs as alignment amplifiers

If you are excited about LLMs, do not read this as anti speed. LLMs can be excellent tools for alignment, feedback, and communication when pointed at the right problems.

Codifying the mechanism:

- Teams can use an LLM to draft the One page Alignment Sheet from meeting notes and docs. Have it normalize team jargon and map terms to the metric tree and definitions.
- Connect to shared data sources through a semantic layer so queries reference the same facts and names. As I noted in [Operational Data Primer](https://muness.com/posts/operational-data-primer/), consistent vocab and event models are what keep mechanisms and metrics in sync across teams.

Close the loop faster:

- Let an agent fetch the latest proxy signals each week and propose a short review note: what moved, what did not, and why. Treat it as a first draft, then decide as a team.
- Replace dashboard sprawl with task-specific agents that answer the on-the-spot questions people actually have. Use them to check whether the mechanism is working in the flow of work.
- Be careful with junk signals. Tickets and ad hoc tags rarely form an objective rubric on their own. You still need clear definitions of done and trusted data.

Communicate context:

- Generate decision logs, briefs, and user-ready explanations that anchor to Aim, Mechanism, Feedback, and Guardrail.
- For complex orgs, consider role-specific agents that arrive with the organization’s vocabulary and patterns. They carry context so people can focus on the judgment calls.

LLMs multiply value once the alignment loop exists. Aim and mechanism first, feedback second, then add speed.

---

## Closing

Aim more, plan less, communicate better, learn faster. When the mechanism is explicit and the feedback is fast, speed becomes a multiplier, not a mirage.

This piece sits inside a larger, growing field guide: start by defining an Aim as a change in user behavior, not a list of features or near term revenue targets, as in [User Value Comes First](https://muness.com/posts/user-value-comes-first/) and [Outcomes Over Output](https://muness.com/posts/outcomes-over-output-book-summary/). [Write down](https://muness.com/posts/documenting-strategy-lessons-from-leading-data-and-eng/) the Mechanism and connect tactics so teams share the same why, what, and how; use [Strategy and Tactics Trees](https://muness.com/posts/on-s-and-t-trees/) to keep tactics necessary, viable, sufficient, and connected. Instrument Feedback with flow signals and shared definitions so teams learn fast and adjust together, as in [Operational Data Primer](https://muness.com/posts/operational-data-primer/). To see the loop running in practice, see [Real-World Application of Strategic Clarity](https://muness.com/posts/real-world-application-of-strategic-clarity-in-platform-leadership/).

<details class="worksheet" markdown="1" id="worksheets-and-playbook">
<summary><strong>Worksheets and Playbook</strong> (click to expand)</summary>

## Alignment, on one page

- One crisp **Aim** with a definition of done
- One plausible **Mechanism** that names the causal lever
- Two or three **Feedback** signals, including at least one proxy metric you expect to move first
- A small stage gate: what we will learn in the next two weeks, and a decision rule for continuing or changing course

**Guardrails**

- Protect the user with a simple SLI or SLO while you experiment
- Favor short cycles over big pushes. Planning matters, the plan changes

### One-page Alignment Sheet

| Field               | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Aim**             | A clear statement of the outcome you want to create.                        |
| **Mechanism**       | “We believe ___ will move ___ because ___.”                                 |
| **Feedback signals**| Two to three metrics: one proxy, one outcome, and one leading indicator.   |
| **Stage gate (2 wks)** | “We will continue if ___.”                                               |
| **Guardrail**       | One SLI or SLO to protect users while testing.                              |
| **Owner & cadence** | Person responsible • Weekly 15-minute review on ___.                        |

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

</details>

<script>
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash === "#worksheets-and-playbook") {
    const details = document.querySelector(window.location.hash);
    if (details && details.tagName.toLowerCase() === "details") {
      details.setAttribute("open", "open");
    }
  }
});
window.addEventListener("hashchange", function() {
  if (window.location.hash === "#worksheets-and-playbook") {
    const details = document.querySelector(window.location.hash);
    if (details && details.tagName.toLowerCase() === "details") {
      details.setAttribute("open", "open");
    }
  }
});
</script>
