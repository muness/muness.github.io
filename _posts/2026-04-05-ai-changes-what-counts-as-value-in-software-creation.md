---
title: "AI Changes What Counts as Value in Software Creation"
date: 2026-04-05 12:30:00 -0400
author: muness
toc: true
comments: true
excerpt: "AI did not just speed up coding. It changed the software production function, shifting value away from typing and search toward context, architecture, and executable constraints."
---

*AI did not remove the hard parts of software creation. It exposed where they really are.*

Brian Potter draws a useful distinction in *The Origins of Efficiency*: **value-adding** work changes the product in a way the customer pays for; **non-value-adding** work is the scaffolding around that transformation — coordination, inspection, waiting, transport, buffering, and all the machinery a process accumulates because it is not yet capable enough on its own.

Software teams should internalize that distinction. AI is not just a more efficient engineer dropped into an unchanged development process. It changes how software gets made, which means it changes what counts as value in the first place.

Potter makes a deeper point that matters here too: changing the production method often requires changing the design itself. Functional requirements shape design, and design shapes production methods. A lot of teams want the new production method without redesigning the surrounding system. They want AI inside the existing delivery process, not a different process. That is exactly why so much current adoption feels shallow.

> “Because **functional requirements determine design** and design determines production methods, **switching to a new production method might require changing the design of the product, and perhaps even its functionality**.”

That is the part many teams still resist. They want the new production method without redesigning the product, the workflow, or the surrounding control system.

A lot of current AI-for-software discourse still misses that. It treats AI as a way to speed up one station in the old process: write more code, review more code, generate more tests, spin up more agents, run more passes. The surrounding workflow stays mostly intact. Then teams act surprised when they get more motion, more token spend, and not much more leverage.

It also keeps reproducing a particularly dumb idea: modeling AI systems as if they should look like miniature human org charts. A planner agent, an architect agent, a reviewer agent, a QA agent, a product agent — a swarm of anthropomorphized roles standing in for a process nobody bothered to redesign. Most of the time that is not intelligence. It is bureaucracy with extra serialization points.

That is not transformation. It is the old software factory with a faster typist, a larger electricity bill, and a fake management layer made of tokens.

## The Old Factory Was Rational

Before AI-assisted development, human work was already expensive in all the ways that still matter now: judgment, architecture, domain understanding, and reconciliation across people and systems. What changed is not that those costs disappeared. What changed is the composition of the work.

A larger share of effort used to sit directly in first-pass implementation and local discovery. Searching the codebase, translating intent into code, stitching interfaces together, drafting first-pass structure, writing test scaffolding, or exploring multiple implementation paths all consumed meaningful time and attention.

That reality produced a certain kind of factory. Specs, tickets, standups, review queues, QA passes, role specialization, and process checkpoints were not random bureaucratic cruelty. They were adaptations to an environment in which first-pass production was relatively expensive, understanding was fragmented, and mistakes were costly to reverse.

Even some of the rituals people now love to hate made sense in that world. If implementation is slower, knowledge is unevenly distributed, and the easiest way to prevent defects is to inspect output late, then extra coordination and inspection are a rational response.

So this is not an argument that the old process was always foolish. It is an argument that many teams are still behaving as if the old bottleneck still sits in the same place.

## AI Did Not Just Make Coding Faster

What AI made cheap was not “software” in the abstract. It made specific categories of work cheaper: translating intent into first-pass code, rewriting code in a different shape, generating routine tests and documentation, explaining unfamiliar code, synthesizing alternative implementations quickly, and translating across frameworks, abstractions, and languages.

That matters, but the bigger shift is this: before AI, teams mostly wrote **features** directly. Now the highest-leverage work increasingly looks like building **capabilities** that make features cheap, safe, and repeatable to produce.

Context assembly is a capability. Structural code understanding is a capability. Architectural guardrails are a capability. Safe rollout and observability are capabilities. Memory that keeps prior decisions and constraints live is a capability. None of these are features in the user-facing sense, but they change the economics of producing features.

Potter describes a production process in terms of five factors: the transformation method, the production rate, the cost of inputs, the degree and type of variation, and buffer size. Most AI-software discourse fixates almost entirely on rate: more output, more tokens, more passes, more agents. But once first-pass implementation gets cheaper, the bigger leverage is often elsewhere — changing the method, reducing variation, and shrinking the buffers we built around weak systems.

> Potter describes **“the five factors that can be used to characterize a production process”** as **“the transformation method, the production rate, the cost of inputs, the degree and type of variation, and the buffer size.”**

Most AI-software discourse fixates almost entirely on one of those five: rate. More output, more tokens, more passes, more agents. But once first-pass implementation gets cheaper, the bigger leverage is often elsewhere — changing the method, reducing variation, and shrinking the buffers we built around weak systems.

He also notes that many process improvements have high fixed costs but low per-unit costs. That is exactly what capability work looks like. Context systems, architectural guardrails, rollout safety, and memory all look expensive when compared to shipping one feature directly. Then the same class of work shows up again, and the cost per change collapses.

Once generation gets cheap, the bottleneck moves. The scarce work is no longer raw code production. It is building the capability layer that makes generated code trustworthy, aligned, maintainable, and safe to ship.

So the important question is no longer: *How do we get the model to write more code?*

It is: *What capabilities let us delete transport, inspection, and rework around code creation?*

## The Hidden Factory in AI Development

Once you look at AI-assisted development this way, a lot of current practice is obviously optimizing the wrong thing.

In leverage-point terms, these are shallow interventions. They improve local throughput without changing the information flows, constraints, and reconciliation mechanisms that determine whether throughput matters. They make the system busier, not more intelligent.

The hidden factory shows up when humans restate the same architecture, constraints, and landmines every session because the system cannot carry context forward. It shows up when the model rediscovers a repository file by file because the tooling has no structural understanding. It shows up when teams shovel huge prompt payloads into the context window because they have no better way to retrieve the right information at the right time.

It also shows up in agent theater: planner to executor to reviewer to fixer, each hop adding latency and losing intent while giving the appearance of rigor. It shows up when code review becomes bulk inspection for failures the architecture should have made hard to express, and when test generation becomes a substitute for confidence because the system has weak boundaries and weak observability.

That is why so much AI engineering advice feels miscalibrated. It is trying to industrialize the scaffolding instead of eliminating it. More agents, more reviewers, more passes, more tokens, more ceremony. A lot of “advanced orchestration” is just project management software for confused robots.

Potter points out that when adjacent steps in a process operate at different rates, the mismatch creates buffers, and buffers add cost. In software those buffers show up as PR queues, giant context windows, long-lived branches, review backlogs, and agent handoffs. We keep treating them as safety mechanisms when they are often just visible evidence that the steps on either side no longer fit together.

> “Whenever two adjacent steps of a production process operate at different rates… there’s a misalignment between demand and production. This misalignment will ultimately require **some sort of buffer**… and **will add cost to the process**.”

In software those buffers show up as PR queues, giant context windows, long-lived branches, review backlogs, and agent handoffs. We keep treating them as safety mechanisms when they are often just visible evidence that the steps on either side no longer fit together.

This is also why the Toyota idea of one-piece flow matters here. Big buffers do not just cost more. They hide problems. Giant prompts, giant batches of generated code, and long review queues often mask the fact that the task was unclear, the boundary was wrong, or the acceptance criteria were weak.

## What Became More Valuable

When one class of work gets cheaper, value moves elsewhere. In AI-assisted software creation, the scarce work is no longer mostly the act of turning intent into syntax. It is deciding what must be true, what must never happen, and what context has to be present before generation begins.

That is why value shifts toward capability-building: choosing the right problem, defining the outcome clearly, understanding the domain deeply enough to avoid building the wrong thing, designing architecture that prevents classes of mistakes, defining interfaces and invariants clearly, assembling the right context before generation starts, deciding which lessons belong in memory and which should become enforcement, and building feedback loops to reality through canaries, rollout checks, and observability.

The leverage move is no longer just “write the feature faster.” It is “build the capability that makes the next hundred feature changes cheaper and safer.”

That shift also clarifies something the agent debates often blur: meaningful software work does not happen in one continuous mode. It alternates between **divergent** and **convergent** phases.

In the divergent phase, the goal is not speed. It is judgment. You are exploring the space, figuring out what is actually worth solving, testing the framing, finding the tradeoffs, and deciding what “good” even means. Agents can help here by gathering options, surfacing precedents, challenging assumptions, and compressing research. But this is still where human taste, responsibility, and skin in the game matter most.

In the convergent phase, the goal is different. You are no longer mapping the space. You are pruning it. You commit to a path, bound the task, define what done looks like, and execute with focus. This is where agents shine: tight loops, bounded tasks, explicit acceptance criteria, repeatable execution.

The real leverage is not “multi-agent everything.” It is preserving human control in the divergent phase while building a capability layer that lets the convergent phase run fast and safely. That is why I keep coming back to the idea that the highest-leverage setup is still a **frontier human + frontier model**. That pair can be extraordinary when the surrounding capability layer is strong and the scaffolding is low. Surround it with enough handoffs, prompt plumbing, reviewer layers, and orchestration overhead and the advantage evaporates. You are not compounding intelligence. You are staffing a bureaucracy made of tokens.

## What Should Shrink

This does **not** mean everything pre-AI became worthless. It means many things changed category.

Some work that used to be acceptable overhead is now newly exposed as non-value work.

Re-explaining context is one example. If every session starts with a human restating the same architecture, the same constraints, and the same prior decisions, that is not value creation. That is transport. In an AI-native workflow, more of that should move into context assembly, project memory, and retrieval shaped by actual structure.

File-by-file codebase discovery is another. If the machine still has to hunt around the repository the way a junior engineer would, then the tooling is stuck in the old world. Code understanding should be structural: definitions, references, callers, interfaces, tests, subsystems, and architectural relationships. The value is not in searching. The value is in using structure to make better decisions.

Generic review ceremony is another. Review remains valuable where judgment is genuinely scarce: subtle product tradeoffs, dangerous migrations, security-sensitive paths, one-way doors. But review of routine generated plumbing is increasingly suspicious. If the reviewer’s main job is catching violations that could have been made impossible or trivially detectable, the process is doing inspection work the system should have absorbed.

Blanket test generation often falls into the same bucket. Tests that encode invariants, protect high-cost failures, or lock in important behavior remain deeply valuable. Tests written mostly because “we generated a lot of stuff and now need reassurance” are something else. That is not a testing philosophy. It is a trust deficit with extra steps.

And then there is the human-role regression hidden inside many AI workflows. Humans are told they are “in the loop,” but too often they are only in the loop as the last-minute approver, the soft interface that absorbs ambiguity and blame after the system has already made most of the moves. That is not leverage. It is a reverse centaur arrangement: the human does less steering and more cleanup.

The token bureaucracy problem makes this worse. Chains of agents whose main function is to pass uncertainty from one station to the next can look sophisticated in demos. In practice they often recreate the same old overhead structure: more movement, more handoffs, more context loss, more chances for drift. A lot of “advanced orchestration” is just project management software for confused robots.

Potter makes the manufacturing version of this brutally clear: an operation that doesn’t exist is an operation that can’t fail. That should be obvious in AI-assisted software too. Every extra handoff, reviewer layer, agent hop, context reconstruction step, and approval checkpoint is not just overhead. It is another failure surface.

> Potter’s version is blunt: **“an operation that doesn’t exist is an operation that can’t fail.”**

That should be obvious in AI-assisted software too. Every extra handoff, reviewer layer, agent hop, context reconstruction step, and approval checkpoint is not just overhead. It is another failure surface.

## The New High Bar

The answer is not “skip review,” “stop testing,” or “trust the model.” The answer is to push more of the important thinking into the system so you need less generic inspection later.

The high bar is not more checks.

It is fewer chances to make bad mistakes in the first place.

People talk about AI slop as if the problem starts when bad output appears. That frames the failure too late. By the time you are reviewing slop, the real mistake usually already happened: the wrong problem got framed, the wrong assumptions stayed implicit, the boundaries did not fit the work, or the task was underconstrained. The model just helped execute that mistake faster.

Potter’s framing on variation is useful here too. If you want a process to become more reliable, you can remove the source of variation, shield the process from it, or compensate for it. A lot of current AI workflow design over-indexes on compensation: more review, more retries, more supervision, more humans catching errors at the edge. The higher-leverage move is usually to remove variation at the source with better context, clearer task boundaries, stronger interfaces, tighter constraints, and faster feedback from reality.

> On variation, Potter’s framing is crisp: **“reducing variability ultimately requires the ability to control those factors.”** Broadly, you can do that by **“removing the source of the variation, shielding the process from the variation, or trying to compensate for the variation.”**

A lot of current AI workflow design over-indexes on compensation: more review, more retries, more supervision, more humans catching errors at the edge. The higher-leverage move is usually to remove variation at the source with better context, clearer task boundaries, stronger interfaces, tighter constraints, and faster feedback from reality.


That means turning important judgment into properties of the system itself.

Architectural boundaries should be enforced in CI instead of merely discussed in review. Dangerous paths should be routed through proxies, policies, or explicit checks. Interfaces and types should make invalid states harder to express. Tests should concentrate on invariants, migrations, and expensive failures rather than acting as a blanket confidence ritual. Rollouts should have canaries, metrics, and rollback triggers that make risk observable. Context should be assembled deliberately instead of rediscovered by brute force every session. And the link between intent and execution should be continuously reconciled instead of reconstructed after the fact through project management theater.

This is the shift from **inspection** to **process capability**.

Manufacturing learned long ago that quality does not primarily come from inspecting bad output at the end. It comes from building a process capable of producing good output reliably. Software teams keep saying they want AI leverage while organizing around late inspection. Those two desires are in conflict.

## A Simpler Test

If you want to know whether a step in your workflow still deserves to exist, ask three questions:

1. Does this step directly improve the shipped outcome?
2. If not, does it encode durable knowledge or a durable constraint into the system?
3. If not, does it reduce uncertainty before an irreversible or expensive step?

If the answer is no to all three, the step is a candidate for deletion, consolidation, or automation.

And if the answer is “yes, because the model is noisy,” do not stop there. Ask the better question: why is the model noisy here?

Is the context wrong?
Is the architecture unclear?
Is the task underconstrained?
Is the interface badly designed?
Is the workflow encouraging rework instead of preventing it?

Solve those causes and a surprising amount of supposed process necessity starts to disappear.

## Reclassify the Work

The biggest opportunity in AI-assisted software creation is not automated coding by itself. It is a clearer distinction between outputs, capabilities, and outcomes.

Outputs are the immediate artifacts of the work: code, tests, docs, pull requests, tickets closed, and now model-generated drafts. Capabilities are the durable means by which a team can repeatedly produce and change software under real constraints: context systems, architectural guardrails, memory, reconciliation, observability, rollout safety. Outcomes are the changes those outputs are supposed to create in the world: user behavior, reliability, adoption, revenue, risk reduction, or whatever the work is actually meant to move.

That distinction matters because AI lowers the cost of outputs first. If teams keep organizing and measuring themselves around outputs, they will mostly get more of them. More code. More artifacts. More motion. That does not tell us much about whether the work was important, whether the design was sound, or whether the team is now better able to produce valuable change again in the future.

The more useful question is which capabilities improve our ability to produce the right features, under the right constraints, in service of the right outcomes. That is why context systems matter. It is why architectural constraints matter. It is why memory, reconciliation, observability, and rollout safety matter. These are not secondary concerns sitting beside delivery. They increasingly determine whether delivery produces anything coherent or useful.

This also changes what good human-AI collaboration should look like. Humans need to remain deeply involved where the work is still exploratory, judgment-heavy, and outcome-defining. Systems should make execution, validation, and adaptation cheaper once that judgment has been exercised. When those responsibilities blur, teams get speed without direction and output without much confidence that it was worth producing.

So I do not think the real story is that AI lets us write software faster. It is that AI makes output cheap enough that the older confusion between output and value becomes much harder to defend. If first-pass implementation becomes cheaper, then the discipline that matters moves upward: clearer intent, better problem framing, stronger capabilities, and tighter connection between the work and the outcomes it is supposed to create.

That is the shift I think teams need to internalize. The work that matters is the work that changes the odds of producing something coherent, useful, and outcome-moving. The rest is scaffolding, compensation, transport, or inspection around a process that is still weaker than it should be. AI makes that distinction harder to ignore. The advantage will increasingly go to teams that know the difference, build capabilities around it, and use that lens to redesign how they work.