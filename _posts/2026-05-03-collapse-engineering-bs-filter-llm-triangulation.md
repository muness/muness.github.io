---
title: "When the PR Looks Real but the Author Doesn’t Own It"
date: 2026-05-03 00:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "Polished artifacts used to imply human judgment. In the LLM era, the new engineering BS filter has to measure fidelity, not formality."
---

## 1. The Story

A senior software engineer at a fintech company gives design direction to a junior engineer.

The instruction is not vague. The senior explains the shape of the system, the constraints, the tradeoffs, and the reason the design should not drift into another abstraction.

The junior returns a pull request.

It is polished enough to look real. It has structure. It has tests. It has comments. It has the rhythm of software work. But the design is wrong. The abstraction is not what the senior asked for. The PR solves a nearby problem. It satisfies the request’s surface while missing the model.

The senior spends time reviewing it. The feedback says: this boundary should move here, this behavior belongs in this layer, this case violates the invariant, this test checks implementation instead of behavior, this model will break under these production conditions.

The junior comes back with another version.

This one looks different: a new plan rather than an incremental correction. It addresses phrases from the feedback but misses the intent. New structure, new names, new tests, new explanation. The senior reads it and feels the exhaustion of explaining the same thing twice in two incompatible ways.

The senior gives more feedback.

The next version is different again.

The cycle repeats. The senior experiences the loop as junior incompetence, poor attention, weak design sense, or lack of ownership. The junior experiences the loop as “I incorporated the feedback, why is this still wrong?” The organization sees activity: PRs, comments, revisions, tests, iteration.

But the process is stranger.

The senior is not reviewing the junior’s reasoning. The senior is reviewing an LLM’s output, filtered through a junior who cannot preserve intent between rounds. The junior is not learning the design. The junior is pasting feedback into Claude, ChatGPT, Cursor, or another model and asking for a better version. The LLM is not absorbing the senior’s judgment as judgment. It is translating feedback into another artifact.

The human loop has become a prompt loop.

The senior is prompt-engineering through a human intermediary. The junior is no longer an apprentice receiving judgment. The junior has become a relay. The senior does not realize the conversation has shifted from “teach this engineer the model” to “debug a stochastic artifact generator using another human as the transport layer.”

Nobody names the dynamic.

There is no pause. No stop-the-line moment. No meta-reflection. No one says: “We are not converging. The author cannot explain the design. Each revision is preserving comments but losing mechanism. We are triangulating around the model.”

So the loop continues.

And because every artifact looks formal, the BS filter fails.

---

## 2. Derived Problem Statement

Junior engineers using LLMs are the surface issue.

The problem is that LLMs have destroyed the old credibility filter while organizations continue to use metrics and review rituals built for the pre-LLM world.

Engineering teams used to treat artifacts as evidence of thought. A design document, PR, passing tests, CI, and a plan did not prove correctness, but they were signals. They suggested that someone had internalized the problem, wrestled with tradeoffs, and translated judgment into implementation.

That assumption no longer holds.

LLMs produce the forms of engineering thought: plans, summaries, tests, PR descriptions, architecture language, risk sections, and explanations. They can generate artifacts that look like the residue of human understanding without containing human ownership of the model.

So the old filter collapses.

The new problem is this:

> Engineering organizations are measuring and reviewing the production of artifacts rather than the preservation of human judgment, real-world constraints, and tradeoffs inside those artifacts.

This creates a substitution.

PRs, tests, design documents, and sprint throughput are signals.

The question is whether the system now reflects a truer model of reality.

That means:

* Does the implementation encode the right domain distinctions?
* Does it respect production constraints?
* Does it preserve the abstraction?
* Does the author understand why the design is shaped this way?
* Are the tradeoffs legible to future maintainers?
* Did the team learn something?
* Will the next engineer inherit a clearer system or a more confusing one?

In the LLM era, engineering value has to be redefined as **judgment fidelity**: the degree to which human judgment survives translation into running systems.

That translation now has more steps than it used to. Senior judgment becomes prompt context. Prompt context becomes a generated artifact. The generated artifact becomes an author’s explanation. The explanation becomes code and tests. Code and tests become production behavior. Fidelity is the degree to which distinctions survive every handoff.

The failure:

> The organization mistakes artifact velocity for judgment transfer.

---

## 3. Problem Cause

### 3.1 LLMs changed the economics of artifacts

Generated artifacts are getting cheap.

Code is cheap. Tests are cheap. Plans are cheap. PR summaries are cheap. Design alternatives are cheap. Explanations are cheap.

Understanding has not become cheap in the same way.

The “Salvage Loop” framing captures this well: code is now cheap, while learning is scarce. LLMs make exploration cheap, but they do not make memory, judgment, or learning cheap. When the branch fills with contradictions, the constraint is not the code; it is whether learning can be preserved and carried forward. ([Muness Castle][1])

This is one cause of the collapse: teams still behave as though producing code is expensive and preserving judgment is automatic.

In reality, the inverse is becoming true.

Producing code is cheap. Preserving judgment is expensive.

That inversion breaks old practices.

A senior review used to inspect an artifact that was expensive enough to imply effort. Now the artifact may be cheap. A PR used to show that the author had crossed a threshold of understanding. Now the PR may show that the author has learned to ask the model for something that looks like understanding.

### 3.2 The old BS filter was formality

The old BS filter was imperfect. It was always possible to write a bad design doc or produce a misleading test suite. But formality carried signal because formality had cost.

A plan took time.

A PR required the engineer to hold the system in their head.

A test suite reflected a model of behavior.

A design review forced the author to expose reasoning.

LLMs weaken that relationship between cost and signal.

A generated plan can be polished without being grounded. A generated test can assert the wrong thing. A generated risk section can name boilerplate risks. A generated explanation can rationalize a design the author does not understand.

The old filter was:

> Does this look like engineering work?

The new filter has to be:

> Can this artifact survive contact with necessity, sufficiency, viability, real constraints, and author ownership?

Strategy & Tactics Trees help here. In the S&T framing, every tactic should be tied to an objective and justified through necessity, sufficiency, and tactic justification: why this action is required, whether the set of actions is enough, and why this tactic is the right choice. ([Muness Castle][2])

That is the check LLM-generated work needs.

A generated artifact can imitate structure. It has a harder time surviving S&T interrogation unless a human supplied the missing judgment.

### 3.3 The human loop becomes triangulated around the model

The senior thinks they are communicating with the junior.

The junior thinks they are using the LLM as a productivity aid.

But both humans begin orbiting the LLM’s output.

The senior gives feedback to the artifact. The junior feeds that feedback into the model. The model generates a new artifact. The senior reacts again. The junior asks the model again.

At no point does the junior internalize the design. At no point does the senior realize the feedback is becoming prompts rather than judgment. At no point does the model gain responsibility for reality.

This is triangulation.

The senior and junior are no longer in an apprenticeship relationship. They are interacting through the model’s generated artifacts. The model becomes the hidden third party in the room.

The result becomes a loop of plausible re-generation.

### 3.4 The process rewards motion rather than orientation

LLM workflows can create velocity. Speed without orientation becomes thrash.

The “Taming the Chaos Dragon” post names this failure: agents accelerate mistakes as well as progress, and without intent and constraints they create “thrash at speed.” Its Dive Pack pattern requires the team to state the aim, done condition, constraints, guardrails, landmines, prior learning, and the question that would block action. ([Muness Castle][3])

That is the missing move in the story.

The senior gave direction, but the workflow did not force the junior to preserve that direction as an artifact. There was no Dive Pack. No intent. No constraints. No landmine list. No “what we learned last time.” No blocking question.

So each regeneration became an opportunity for drift.

The model did not need more words. It needed the right constraints before generation.

### 3.5 Output metrics were already weak; LLMs make them misleading

The outputs-over-outcomes critique gets sharper in the LLM era.

Outputs are deliverables: features, tasks, artifacts. Outcomes are the changes those outputs create: changed user behavior, satisfaction, reduced risk, or progress toward a goal. ([Muness Castle][4])

Software organizations already struggled with this distinction. They measured tickets closed, features shipped, velocity, and roadmap completion because those things were easy to count.

LLMs intensify the trap.

They make outputs cheap. Output metrics become easier to satisfy without creating value.

PR count can rise while understanding falls.

Cycle time can improve while design coherence deteriorates.

Test count can increase while behavioral confidence decreases.

Review turnaround can improve because reviewers become shallow.

Feature throughput can rise while user value stagnates.

This goes beyond a measurement bug. The incentive system pushes teams toward artifact production at the moment artifacts have become least trustworthy.

### 3.6 Teams lack stop-the-line mechanisms for mechanism failure

Stop-the-line moments usually happen after concrete failures: tests fail, CI breaks, an incident occurs, a deployment is rolled back.

LLM triangulation fails earlier.

The mechanism fails before the system fails.

The warning signs are: the author cannot explain the design; revisions do not preserve intent; feedback is satisfied literally but not conceptually; the same files churn without convergence; each version looks plausible but unrelated to the last.

The “Dissent Mode” framing is useful here because it treats misalignment as a failure. It argues that organizations often optimize for throughput instead of outcomes, and it proposes stop-the-line triggers when assumptions are falsified, risks exceed guardrails, or outcomes move opposite to intent. ([Muness Castle][5])

AI-assisted engineering needs the same idea upstream.

The stop-the-line trigger moves upstream:

> The author no longer owns the mechanism.

That should be enough to stop the line.

---

## 4. Problem Implications

### 4.1 Juniors do not cross the convexity threshold of understanding

Engineering mastery has a convex shape.

At first, learning is slow. A junior struggles with abstractions, failure modes, naming, tradeoffs, dependency boundaries, production constraints, and the difference between local correctness and system correctness.

This stage hurts. It has fixed cost.

But once the engineer crosses a threshold, understanding compounds. They can transfer lessons across domains. They can see why an abstraction is wrong before implementing it. They can predict second-order effects. They can critique designs by mechanism rather than taste.

LLM triangulation lets juniors skip the painful part without reaching the compounding part.

They get motion without ownership.

They participate in engineering rituals — prompting, regenerating, submitting PRs, responding to comments — without internalizing the model. Pride in mastery is replaced by enacted motion.

The junior ships more but learns less.

The team’s output can look positive while the junior’s capability declines. The dashboard improves; the learning path hollows out.

### 4.2 Seniors burn out on invisible prompt-debugging

The senior thinks they are mentoring.

But they are debugging model output through a human relay.

This exhausts because the senior’s feedback does not accumulate in the expected place. In mentorship, repeated feedback should reduce future feedback. The junior internalizes patterns. Review gets easier. The same concepts stop recurring.

In triangulation, feedback does not compound. It gets transformed into prompts. The next artifact may address the words but miss the principle. The senior has to restate the same judgment repeatedly because the judgment is not being absorbed.

The senior experiences this as disrespect, incompetence, or carelessness.

But the failure is structural: the process has no mechanism for converting feedback into understanding.

### 4.3 Codebases accumulate hallucinated world-models

The most dangerous LLM failure is code organized around a false model of the domain.

A hallucinated world-model might appear as:

* An abstraction that sounds clean but does not match production behavior.
* A permission model that ignores an edge case.
* A test suite that mirrors implementation rather than user behavior.
* A migration plan that assumes clean data.
* A retry strategy that ignores downstream side effects.
* A domain object that conflates two concepts users or regulators treat differently.

These errors are expensive because CI often misses them. They live in the conceptual layer.

The system becomes more formal and more false.

### 4.4 Review systems get overloaded

The review bottleneck shifts.

Previously, review caught errors in human work. Now review must also distinguish human-owned reasoning from generated reasoning.

That is harder.

A reviewer can no longer infer from polish that the author understands. The reviewer has to test for ownership. They have to inspect constraint fidelity. They have to ask whether the revision preserved intent. They have to detect prompt residue.

Review gets more expensive, not less.

Measuring review speed makes the problem worse. Fast review becomes shallow review. Shallow review lets nonsense through.

### 4.5 Organizations chase productivity mirages

At the organizational level, LLMs can make dashboards look better while engineering capability decays.

More PRs. Faster cycle time. More tickets closed. More throughput. More tests. More design documents. More release notes.

But these are output metrics.

They do not prove that user value increased. They do not prove that the system became more maintainable. They do not prove that engineers learned. They do not prove that tradeoffs are clear. They do not prove that real-world constraints were preserved.

The “User Value Comes First” argument applies here: teams can chase feature releases, task completion, revenue KPIs, or other outputs while masking the fact that the product is not addressing user needs. ([Muness Castle][6])

In the LLM era, that masking gets easier.

The artifacts become prettier.

The dashboards become greener.

The system gets less true.

---

## 5. The New BS Filter: Fidelity Across the Work Loop

Old proxy metrics need a different question at every stage of the work:

> Did judgment survive this translation?

The old stack measured motion: PR count, cycle time, throughput, story points, test count, CI pass rate, review turnaround, lines of code, token volume.

Those metrics still measure something. LLMs make them easier to satisfy without creating value. A team can produce more PRs, more tests, more summaries, and more plans while transferring less judgment into the system.

So the new stack should measure fidelity:

> How much reality, judgment, tradeoff clarity, and learning survived the trip from intent to implementation?

When formality is cheap, fidelity becomes the BS filter.

One version:

| Stage | Fidelity check | Review question | Old metric trap |
| --- | --- | --- | --- |
| Before work begins | Reality | Do we know the aim, constraints, landmines, and blocking question? | Ticket readiness, story points |
| During work | Drift | Are we converging on the mechanism, or regenerating motion? | Cycle time, same-day PRs |
| At review | Judgment and tradeoff | Can the author explain why this shape is necessary, sufficient, and viable? | CI pass rate, test count, review speed |
| After ship | Outcome | Did the system become more true in production? | Release count, roadmap completion |
| When work goes wrong | Learning | Did we preserve what we learned, or merely lose time? | Branch survival, sunk-cost completion |

The table points at the shift in attention.

Polish no longer proves understanding. Test whether the mechanism is owned.

### 5.1 Before Work Begins: Reality Fidelity

The first failure happens before generation.

A team asks the model for motion before it has preserved orientation. It has a ticket, a prompt, or a senior instruction, but not a statement of what must remain true.

Reality fidelity asks:

* What outcome is this change supposed to advance?
* What production constraints matter?
* What domain distinctions must not collapse?
* What landmines are known from previous attempts?
* What question would block action?
* What evidence would prove this approach wrong?

The Dive Pack idea matters here because it grounds the work. An AI-assisted work session should begin with a brief: aim, done condition, constraints, landmines, prior learning, and the question that would block action. ([Muness Castle][3])

A generated plan without that brief can still look mature. It can include risks, alternatives, milestones, and tests. But without constraints, the artifact is organized motion.

The replacement metric asks:

> Can each constraint be traced to code, tests, configuration, observability, operations, or a tradeoff?

That is reality fidelity.

### 5.2 During Work: Drift Detection

The second failure happens during revision.

This is where triangulation becomes visible. The senior gives feedback. The junior feeds it into the model. The model produces a different artifact. The new artifact addresses some words from the feedback while losing the mechanism that made the feedback necessary.

Drift has signatures:

| Signal | Meaning |
| --- | --- |
| Same files churn without convergence | The work is moving but not learning. |
| Revisions do not preserve design intent | Feedback is being regenerated, not absorbed. |
| Author cannot explain the direction in one sentence | Ownership has been lost. |
| Fixes satisfy comments literally while violating mechanism | The model is optimizing for text, not judgment. |
| Architecture shifts without explanation | The artifact is being re-authored rather than refined. |
| Tests mirror implementation rather than behavior | The generated test suite is validating the hallucinated model. |

These are mechanism alarms.

Stop-the-line moments happen when tests fail, CI breaks, or production burns. AI-assisted engineering needs an upstream trigger:

> The mechanism is no longer owned by the author.

At that point, more review is waste.

The right move is a reset: freeze the path, ask the author to explain the mechanism, extract what remains true, update the brief, and restart clean if needed. Dissent Mode is useful here because it treats misalignment as a failure, not a social inconvenience. ([Muness Castle][5])

The replacement metric asks:

> How quickly did we detect that motion had stopped preserving intent?

That is drift detection.

### 5.3 At Review: Judgment and Tradeoff Fidelity

The third failure happens at review.

Review used to inspect an artifact that was expensive enough to imply effort. Now review has to distinguish human-owned reasoning from generated reasoning.

The review question changes.

Start review with:

> Can the author explain the mechanism from memory?

An ownership check reveals the gap:

> “Walk me through the design. What problem are we solving, why this abstraction, what did we reject, what tradeoff did we accept, and what would make this wrong?”

This measures whether judgment transferred. No hazing required.

Then apply the Strategy & Tactics check: is this tactic necessary, sufficient, and viable for the outcome? ([Muness Castle][2])

| Check | Review question |
| --- | --- |
| Outcome | What change does this serve? |
| Necessity | Why is this tactic required? |
| Sufficiency | If this succeeds, what is still missing? |
| Viability | Why is this tactic right under current constraints? |
| Invalidation | What evidence would prove this choice wrong? |
| Tradeoff | What did we optimize for, and what did we sacrifice? |

This attacks LLM slop.

LLMs can make tactics sound reasonable. They are weaker at proving that the tactic is necessary, sufficient, and viable in this system under these constraints.

Tradeoffs matter because they are how judgment survives for future maintainers.

Bad risk statement:

> “There may be performance issues.”

Good risk statement:

> “This adds one permission-service call per search request. At current p95, this could add 80–120ms unless cached. We are accepting that for the beta because usage is low, but this must be revisited before general availability.”

The second statement contains judgment. It names the mechanism, the cost, the condition under which the tradeoff is acceptable, and the moment when it must be revisited.

The replacement metric asks:

> Do the tests and rationale protect the behavior, constraints, and tradeoffs that actually matter?

That is judgment fidelity.

### 5.4 After Ship: Outcome Fidelity

The fourth failure happens after the artifact leaves the review system.

A team can ship ten LLM-assisted PRs and produce no outcome. It can improve PR count, cycle time, test count, and release volume while user value, reliability, support burden, and system clarity do not improve.

This is the outputs-over-outcomes trap sharpened by cheaper artifacts. Outputs are deliverables: features, tickets, PRs, documents, tests. Outcomes are the change in the world: safer operations, clearer decisions, lower support burden, trust, better user behavior, lower risk. ([Muness Castle][4])

Outcome fidelity asks:

* Did user behavior change?
* Did support burden decrease?
* Did incidents, rollbacks, or error rates improve?
* Did operators or users make better decisions?
* Did the system become easier to reason about?
* Did production surprise us because our model was wrong?

CI proves internal consistency against known checks. It does not prove that the domain model is true, the abstraction is right, or the tradeoff was worth it.

The replacement metric asks:

> Did the system become more true in production?

That is outcome fidelity.

### 5.5 When Work Goes Wrong: Learning Fidelity

The fifth failure happens when a bad path keeps going because the branch has become expensive emotionally, even though the code is cheap.

A broken branch poses one question:

> “What did we learn that is still true?”

Then preserve that learning as:

* A short spec.
* A guardrail.
* A decision log entry.
* An updated constraint.
* A testable assumption.
* A warning for the next attempt.

The Salvage Loop names the operating model: detect drift, extract what was learned, encode it as working memory, restart clean, and verify quickly. ([Muness Castle][1])

This compounds capability.

If the team abandons a generated branch but preserves a sharper constraint, it may have created more value than if it had merged the code. If the team keeps the code but loses the lesson, the dashboard may show progress while capability decays.

The replacement metric asks:

> Did the learning survive the failed path?

That is learning fidelity.

## 6. The Operating Practice

AI-assisted engineering workflow:

1. **Aim before generation.** State the outcome, done condition, constraints, landmines, prior learning, and blocking question.
2. **Generate under constraint.** Use the LLM to explore, draft, and accelerate, but keep the intent and constraints visible.
3. **Review through necessity, sufficiency, and viability.** Humans supply judgment. The model accelerates execution.
4. **Test for ownership.** Ask the author to explain the design from memory.
5. **Stop the line on drift.** If revisions churn, intent is not preserved, or the author cannot explain the direction, stop.
6. **Salvage learning, not code.** When the path is wrong, extract what remains true and restart clean.
7. **Reflect so learning compounds.** Open Horizons’ “Aim. Do. Reflect.” frame treats rituals as feedback loops, not empty motions. ([Muness Castle][7])

The goal: keep AI-assisted engineering speed attached to reality.

---

## 7. Conclusion

The old engineering BS filter was built for a world where polished artifacts were costly enough to carry signal.

That world is gone.

LLMs can produce the appearance of engineering thought without the human ownership that made those artifacts trustworthy. They can generate plans, tests, PRs, and explanations faster than teams can review the assumptions. They can make juniors look productive while preventing them from crossing into mastery. They can make seniors burn out on prompt-debugging. They can make organizations believe throughput has increased while capability hollows out.

AI abstinence misses the point.

Teams need a new credibility model.

Replace the old review questions:

| Old question | Fidelity question |
| --- | --- |
| Did we ship? | Did judgment survive? |
| Did the PR pass CI? | Is the tactic necessary, sufficient, and viable? |
| Did the junior incorporate feedback? | Did the junior internalize the mechanism? |
| Did cycle time improve? | Did reality fidelity improve? |

The old proxy was throughput: how much work moved through the system.

The new proxy has to be fidelity: how much human judgment, constraint, tradeoff clarity, and learning survived the trip from intent to implementation.

That is the new BS filter.

The next time a polished PR fails to converge, the first question concerns ownership: does anyone still own the mechanism?

Formality is cheap.

Fidelity is scarce.

[1]: https://muness.com/posts/the-salvage-loop-keep-learning-drop-the-code/ "Ditch the Draft: How to Salvage AI Dev Wins from Context Collapse Hell | Muness Castle"
[2]: https://muness.com/posts/on-s-and-t-trees/ "A summary of Strategy & Tactics Trees | Muness Castle"
[3]: https://muness.com/posts/taming-the-chaos-dragon/ "Grounded Execution: Taming the Chaos Dragon | Muness Castle"
[4]: https://muness.com/posts/outcomes-over-output-book-summary/ "Outcomes Over Outputs: A book summary | Muness Castle"
[5]: https://muness.com/posts/dissent-mode/ "Dissent Mode: Eliminate Mid-Bar Work | Muness Castle"
[7]: https://muness.com/posts/open-horizons/ "Open Horizons: Aim. Do. Reflect. | Muness Castle"
