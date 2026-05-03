---
title: "The Collapse of Engineering’s BS Filter in the Age of LLM Triangulation"
date: 2026-05-03 00:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "LLMs can produce the appearance of engineering thought without the human ownership that made formal artifacts trustworthy. The new engineering BS filter has to measure fidelity, not formality."
---

## 1. The Story

A senior software engineer at a major fintech company gives clear design direction to a junior engineer.

The instruction is not vague. The senior explains the intended shape of the system, the constraints that matter, the tradeoffs that need to be preserved, and the reason the proposed design should not drift into a different abstraction.

The junior returns a pull request.

It is polished enough to look real. It has structure. It has tests. It has comments. It has the visual rhythm of competent software work. But the design is wrong. The abstraction is not what the senior asked for. The PR solves a nearby problem, not the actual one. It satisfies the surface shape of the request while missing the underlying model.

The senior spends significant time reviewing it. The feedback is detailed: this boundary should move here, this behavior belongs in this layer, this case violates the intended invariant, this test is checking implementation instead of behavior, this model will break under these production conditions.

The junior comes back with another version.

This one looks completely different. It is not an incremental correction. It is a new plan. It addresses some phrases from the feedback but not the intent. It has new structure, new names, new tests, and a new explanation. The senior reads it and feels the particular exhaustion of explaining the same thing twice in two incompatible ways.

The senior gives more feedback.

The next version is different again.

The cycle repeats. The senior experiences the loop as junior incompetence, poor attention, weak design sense, or lack of ownership. The junior experiences the loop as “I incorporated the feedback, why is this still wrong?” The organization sees activity: PRs, comments, revisions, tests, apparent iteration.

But the real process is stranger.

The senior is not reviewing the junior’s reasoning. The senior is reviewing an LLM’s output, filtered through a junior who does not own the model deeply enough to preserve intent between rounds. The junior is not learning the design. The junior is pasting feedback into Claude, ChatGPT, Cursor, or another model and asking for a better version. The LLM is not absorbing the senior’s judgment as judgment. It is translating feedback into another plausible artifact.

The human loop has become a prompt loop.

The senior is unknowingly prompt-engineering through a human intermediary. The junior is no longer primarily an apprentice receiving judgment. The junior has become a relay. The senior does not realize the conversation has shifted from “teach this engineer the model” to “debug a stochastic artifact generator using another human as the transport layer.”

Nobody names the dynamic.

There is no pause. No stop-the-line moment. No meta-reflection. No one says: “We are not converging. The author cannot explain the design. Each revision is preserving comments but losing mechanism. We are triangulating around the model.”

So the loop continues.

And because every artifact looks formal, the usual engineering BS filter fails.

---

## 2. Derived Problem Statement

The problem is not that junior engineers use LLMs.

The problem is that LLMs have destroyed the old credibility filter while organizations continue to use metrics and review rituals built for the pre-LLM world.

Historically, engineering teams treated formal artifacts as weak but useful evidence of thought. A design document, a clean PR, passing tests, CI, and a coherent written plan did not prove correctness, but they were signals. They suggested that someone had spent time internalizing the problem, wrestling with tradeoffs, and translating judgment into implementation.

That assumption no longer holds.

LLMs are extremely good at producing the visible forms of engineering thought: plans, summaries, tests, PR descriptions, architectural language, risk sections, and confident explanations. They can generate artifacts that look like the residue of human understanding without containing stable human ownership of the underlying model.

So the old filter collapses.

The new problem is this:

> Engineering organizations are increasingly measuring and reviewing the production of plausible artifacts rather than the preservation of human judgment, real-world constraints, and explicit tradeoffs inside those artifacts.

This creates a dangerous substitution.

The thing that matters is not whether a PR exists. It is not whether it has tests. It is not whether a design document is polished. It is not whether the team shipped more work this sprint.

The thing that matters is whether the system now reflects a more accurate model of reality.

That means:

* Does the implementation encode the right domain distinctions?
* Does it respect production constraints?
* Does it preserve the intended abstraction?
* Does the author understand why the design is shaped this way?
* Are the tradeoffs legible to future maintainers?
* Did the team learn something durable?
* Will the next engineer inherit a clearer system or a more confusing one?

In the LLM era, engineering value has to be redefined as **judgment fidelity**: the degree to which accurate human judgment survives translation into running systems.

The central failure is therefore not “AI makes bad code.”

The central failure is:

> The organization mistakes artifact velocity for judgment transfer.

---

## 3. Problem Cause

### 3.1 LLMs changed the economics of artifacts

The cheapest thing in software is becoming the generated artifact.

Code is cheaper. Tests are cheaper. Plans are cheaper. PR summaries are cheaper. Design alternatives are cheaper. Explanations are cheaper.

But understanding is not cheaper in the same way.

The “Salvage Loop” framing captures this well: code is now the cheap artifact, while learning is the scarce one. LLMs make exploration cheap, but they do not automatically make memory, judgment, or durable learning cheap. When the branch fills with contradictions, the real constraint is not the code; it is whether the learning can be preserved and carried forward. ([Muness Castle][1])

This is the first cause of the collapse: teams still behave as though producing code is expensive and preserving judgment is automatic.

In reality, the inverse is becoming true.

Producing code is cheap. Preserving judgment is expensive.

That inversion breaks many older practices.

A senior review used to inspect an artifact that was expensive enough to imply effort. Now the artifact may be cheap. A PR used to be evidence that the author had crossed some threshold of understanding. Now the PR may simply mean the author has learned to ask the model for something that looks like understanding.

### 3.2 The old BS filter was formality

The old BS filter was never perfect. It was always possible to write a bad design doc or produce a misleading test suite. But formality still carried signal because formality had cost.

A thoughtful plan took time.

A coherent PR required the engineer to hold the system in their head.

A strong test suite usually reflected some internal model of behavior.

A good design review forced the author to expose reasoning.

LLMs weaken that relationship between cost and signal.

A generated plan can be polished without being grounded. A generated test can be syntactically valid while asserting the wrong thing. A generated risk section can sound mature while containing only generic risks. A generated explanation can confidently rationalize a design the author does not understand.

The old filter was:

> Does this look like engineering work?

The new filter has to be:

> Can this artifact survive contact with necessity, sufficiency, viability, real constraints, and author ownership?

This is where Strategy & Tactics Trees are useful. In the S&T framing, every tactic should be tied to a strategic objective, and the tactic should be justified through necessity, sufficiency, and tactic justification: why this action is indispensable, whether the set of actions is enough, and why this tactic is the right choice for the objective. ([Muness Castle][2])

That is exactly the kind of check LLM-generated work needs.

A generated artifact can imitate structure. It has a much harder time surviving a serious S&T interrogation unless a human has supplied the missing judgment.

### 3.3 The human loop becomes triangulated around the model

The senior thinks they are communicating with the junior.

The junior thinks they are using the LLM as a productivity aid.

But functionally, both humans begin orbiting the LLM’s output.

The senior gives feedback to the artifact. The junior feeds that feedback into the model. The model generates a new artifact. The senior reacts again. The junior asks the model again.

At no point does the junior necessarily internalize the design. At no point does the senior necessarily realize the feedback is being converted into prompts rather than judgment. At no point does the model gain responsibility for reality.

This is triangulation.

The senior and junior are no longer in a direct apprenticeship relationship. They are interacting through the model’s generated artifacts. The model becomes the hidden third party in the room.

The result is not collaboration. It is a ritualized loop of plausible re-generation.

### 3.4 The process rewards motion rather than orientation

LLM workflows can create enormous apparent velocity. But speed without orientation becomes thrash.

The “Taming the Chaos Dragon” post names this failure directly: agents accelerate mistakes as well as progress, and without intent and constraints they create “thrash at speed.” Its Dive Pack pattern requires the team to state the aim, observable done condition, constraints, guardrails, landmines, prior learning, and the question that would make action premature before generation begins. ([Muness Castle][3])

That is the missing move in the story.

The senior gave direction, but the workflow did not force the junior to preserve that direction as a first-class artifact. There was no Dive Pack. No durable intent. No explicit constraints. No landmine list. No “what we learned last time.” No question that made further action premature.

So each regeneration became an opportunity for drift.

The model did not need more words. It needed the right constraints before generation.

### 3.5 Output metrics were already weak; LLMs make them actively misleading

The outputs-over-outcomes critique becomes much sharper in the LLM era.

Outputs are tangible deliverables: features, completed tasks, shipped artifacts. Outcomes are the actual changes or benefits created by those outputs, such as changed user behavior, improved satisfaction, reduced risk, or meaningful progress toward a goal. ([Muness Castle][4])

Traditional software organizations already struggled with this distinction. They measured tickets closed, features shipped, velocity, and roadmap completion because those things were easy to count.

LLMs intensify the trap.

They make outputs cheaper. Therefore, any metric based on output becomes easier to satisfy without creating value.

PR count can rise while understanding falls.

Cycle time can improve while design coherence deteriorates.

Test count can increase while behavioral confidence decreases.

Review turnaround can improve because reviewers become shallow.

Feature throughput can rise while user value stagnates.

This is not merely a measurement bug. It is an incentive system that pushes teams toward artifact production at the exact moment artifacts have become least trustworthy.

### 3.6 Teams lack stop-the-line mechanisms for mechanism failure

Traditional stop-the-line moments are often concrete: tests fail, CI breaks, an incident occurs, a deployment is rolled back.

But LLM triangulation fails earlier than that.

The mechanism fails before the system fails.

The warning signs are: the author cannot explain the design; revisions do not preserve intent; feedback is satisfied literally but not conceptually; the same files churn without convergence; each version looks plausible but unrelated to the last.

The “Dissent Mode” framing is useful here because it treats misalignment as a first-class failure. It argues that organizations often optimize for local throughput instead of shared outcomes, and it proposes stop-the-line triggers when assumptions are falsified, risks exceed guardrails, or outcomes move opposite to intent. ([Muness Castle][5])

AI-assisted engineering needs the same idea, applied earlier.

Not just:

> The deployment broke.

But:

> The author no longer owns the mechanism.

That should be enough to stop the line.

---

## 4. Problem Implications

### 4.1 Juniors do not cross the convexity threshold of understanding

Engineering mastery has a convex shape.

At first, learning is slow. A junior struggles with abstractions, failure modes, naming, tradeoffs, dependency boundaries, production constraints, and the difference between local correctness and system correctness.

This early stage is painful. It has high fixed cost.

But once the engineer crosses a threshold, understanding compounds. They can transfer lessons across domains. They can see why an abstraction is wrong before implementing it. They can predict second-order effects. They can critique designs by mechanism rather than taste.

LLM triangulation lets juniors skip the painful part without actually reaching the compounding part.

They get the feeling of motion without the burden of ownership.

They participate in engineering rituals — prompting, regenerating, submitting PRs, responding to comments — without necessarily internalizing the model. Pride in mastery is replaced by enacted motion.

The junior ships more but learns less.

That is non-ergodic. The team’s aggregate output can look positive while many individual learning paths degrade. The ensemble average says productivity rose. The time average of the junior’s development says capability hollowed out.

### 4.2 Seniors burn out on invisible prompt-debugging

The senior thinks they are mentoring.

But they are actually debugging the output of a model through a human relay.

This is uniquely exhausting because the senior’s feedback does not accumulate in the expected place. In normal mentorship, repeated feedback should reduce future feedback. The junior internalizes patterns. Review gets easier. The same concepts stop recurring.

In triangulation, feedback does not compound. It gets transformed into prompts. The next artifact may address the words but miss the principle. The senior has to restate the same judgment repeatedly because the judgment is not being absorbed.

The senior experiences this as disrespect, incompetence, or carelessness.

But the actual failure is structural: the process has no mechanism for converting feedback into durable human understanding.

### 4.3 Codebases accumulate hallucinated world-models

The most dangerous LLM failure is not obviously broken code.

It is plausible code organized around a false model of the domain.

A hallucinated world-model might appear as:

* An abstraction that sounds clean but does not match production behavior.
* A permission model that ignores an edge case.
* A test suite that mirrors implementation rather than user behavior.
* A migration plan that assumes data is cleaner than it is.
* A retry strategy that ignores downstream side effects.
* A domain object that conflates two concepts users or regulators treat differently.

These errors are expensive because they are not always caught by CI. They live in the conceptual layer.

The system becomes increasingly formal and increasingly false.

### 4.4 Review systems get overloaded

The review bottleneck shifts.

Previously, review caught errors in human work. Now review must also distinguish human-owned reasoning from plausible generated reasoning.

That is a harder task.

A reviewer can no longer infer from polish that the author understands. The reviewer has to test for ownership. They have to inspect constraint fidelity. They have to ask whether the revision preserved intent. They have to detect when they are reviewing prompt residue.

This makes review more cognitively expensive, not less.

If organizations respond by measuring review speed, they make the problem worse. Fast review becomes shallow review. Shallow review lets plausible nonsense through.

### 4.5 Organizations chase phantom productivity

At the organizational level, LLMs can make dashboards look better while engineering capability decays.

More PRs. Faster cycle time. More tickets closed. Higher apparent throughput. More generated tests. More design documents. More release notes.

But these are output metrics.

They do not prove that user value increased. They do not prove that the system became more maintainable. They do not prove that engineers learned. They do not prove that tradeoffs are clear. They do not prove that real-world constraints were preserved.

The “User Value Comes First” argument applies here: teams can chase rapid feature releases, task completion, revenue-centric KPIs, or other outputs while masking the fact that the product is not actually addressing user needs. ([Muness Castle][6])

In the LLM era, that masking gets easier.

The artifacts become prettier.

The dashboards become greener.

The system gets less true.

---

## 5. Alternative Proxy Metrics

The replacement for old proxy metrics is not one perfect metric.

It is a new metric stack.

The old stack measured motion:

> How much work moved through the system?

The new stack should measure fidelity:

> How much reality, judgment, tradeoff clarity, and learning survived the trip from intent to implementation?

The central categories are:

1. Judgment Fidelity
2. Reality Fidelity
3. S&T Coherence
4. Tradeoff Fidelity
5. Learning Fidelity
6. Triangulation / Drift Detection
7. Outcome Fidelity

These are still proxies. They can still be gamed. But they point at the right object.

They measure whether the system is becoming more true, not merely more active.

---

## 5.1 Judgment Fidelity

**Question:** How much expert human judgment is reflected in the artifact?

A PR has high judgment fidelity when the author can explain not just what changed, but why this shape is right.

Possible metrics:

| Metric                               | What it checks                                                                                     |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Author ownership check               | Can the author explain the design without reading the LLM output, PR summary, or notes?            |
| Decision rationale coverage          | Are the important design decisions explained?                                                      |
| Rejected alternatives quality        | Are rejected options named with specific reasons?                                                  |
| Reviewer re-explanation load         | How often does the senior need to restate the same principle?                                      |
| Conceptual correction rate           | How much review feedback concerns core design misunderstanding rather than ordinary bugs?          |
| Intent preservation across revisions | Does the next revision preserve the senior’s intent, or does it regenerate into a different shape? |

The ownership check is especially important.

A simple version:

> “Walk me through the design from memory. What problem are we solving, why this abstraction, what did we reject, and what would make this wrong?”

This should not be punitive. It is a measurement of whether judgment transferred.

If the author cannot explain the design, the PR is not ready, even if it passes CI.

---

## 5.2 Reality Fidelity

**Question:** How true is the deliverable to real-world constraints?

This is the antidote to plausible hallucination.

Possible metrics:

| Metric                            | What it checks                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Constraint inventory completeness | Does the work name the relevant constraints before implementation?                                                       |
| Constraint-to-code traceability   | Can each critical constraint be traced to code, tests, configuration, observability, or operations?                      |
| Assumption register               | What must be true for this design to work?                                                                               |
| Assumption validation rate        | Which assumptions were checked against logs, users, production data, support cases, compliance rules, or domain experts? |
| Invalidation criteria             | What evidence would prove this design wrong?                                                                             |
| Production surprise rate          | How often do shipped changes fail because the team misunderstood the domain, data, user workflow, or system interaction? |

This is where the Dive Pack becomes a metric, not just a ritual.

A meaningful AI-assisted work session should begin with:

* Aim in one sentence.
* Observable definition of done.
* Constraints and guardrails.
* Known landmines.
* What was learned last time.
* One unanswered question that makes action premature.

That template comes directly from the Dive Pack pattern, which treats intent, constraints, learnings, and guardrails as first-class inputs before agentic execution begins. ([Muness Castle][3])

So one alternative proxy metric is:

> **Dive Pack Completeness:** percentage of nontrivial AI-assisted changes that begin with a concrete aim, observable done condition, constraints, landmines, prior learning, and premature-action question.

This is not bureaucracy. It is grounding.

The model does not need more motion. It needs better orientation.

---

## 5.3 S&T Coherence

**Question:** Is the work necessary, sufficient, and viable for the intended outcome?

This is the strongest replacement for the old BS filter.

For every meaningful PR or design, require an S&T block:

| S&T Check                        | Review Question                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------- |
| Strategy / Outcome               | What higher-level outcome is this change meant to advance?                        |
| Tactic                           | What concrete action are we taking?                                               |
| Necessity                        | Why is this tactic required for that outcome?                                     |
| Sufficiency                      | If this succeeds, plus the surrounding work, is it enough? What is still missing? |
| Viability / Tactic justification | Why is this tactic the right one under current constraints?                       |

The S&T post describes strategy as the “what/why” and tactics as the “how,” with every tactic aligned to a strategic objective. It also describes necessity, sufficiency, and tactic justification as the thinking tools that validate the step. ([Muness Castle][2])

This gives you a practical cheat application:

### The S&T PR Gate

Before reviewing code, ask:

1. **What outcome does this PR serve?**
   If the author cannot state it, the work is output without strategy.

2. **Why is this PR necessary?**
   If the answer is “because the ticket says so,” the tactic is not justified.

3. **Why is this PR sufficient?**
   If the PR solves only a fragment but hides the missing pieces, it is locally plausible but strategically incomplete.

4. **Why is this tactic viable?**
   If the answer ignores production constraints, team capacity, migration risk, compliance, user behavior, or operational realities, the tactic is fantasy.

5. **What would invalidate this choice?**
   If nothing could invalidate it, the team is not reasoning; it is rationalizing.

Possible metrics:

| Metric                        | What it checks                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------- |
| Necessity coverage            | Percentage of material changes with a clear “why this is required” statement.    |
| Sufficiency gap count         | Number of missing surrounding actions required for the outcome.                  |
| Orphan tactic rate            | Work items that cannot be tied to a higher-level outcome.                        |
| Viability evidence score      | Degree to which the chosen tactic is justified by real constraints and evidence. |
| Strategy-to-code traceability | Can you trace from outcome to tactic to implementation?                          |

This directly attacks LLM slop.

LLMs are good at making tactics sound reasonable. They are weaker at proving that the tactic is necessary, sufficient, and viable in this specific system under these specific constraints.

---

## 5.4 Tradeoff Fidelity

**Question:** Are the tradeoffs clear, accurate, and available to future maintainers?

A system is maintainable when future engineers can understand why it is shaped the way it is.

Possible metrics:

| Metric                    | What it checks                                                        |
| ------------------------- | --------------------------------------------------------------------- |
| Tradeoff explicitness     | Does the PR state what was optimized for and what was sacrificed?     |
| Decision boundary clarity | Does the team know where this solution works and where it does not?   |
| Risk specificity          | Are risks causal and concrete rather than generic boilerplate?        |
| Future maintainer replay  | Can an engineer three months later reconstruct the decision?          |
| Change-locality clarity   | If a requirement changes, is it clear where the system should change? |

Bad risk statement:

> “There may be performance issues.”

Good risk statement:

> “This adds one permission-service call per search request. At current p95, this could add 80–120ms unless cached. We are accepting that for the beta because usage is low, but this must be revisited before general availability.”

The second statement contains judgment. It names the mechanism, the cost, the condition under which the tradeoff is acceptable, and the moment when it must be revisited.

That is what should be measured.

---

## 5.5 Learning Fidelity

**Question:** Is capability compounding, or is the team just producing artifacts?

This matters most for juniors, but it applies to the whole organization.

Possible metrics:

| Metric                   | What it checks                                                                          |
| ------------------------ | --------------------------------------------------------------------------------------- |
| Salvaged learning ratio  | When a path is abandoned, did the team extract a short spec, guardrail, or decision log? |
| Concept retention        | Can the author apply the same design lesson a week later?                               |
| Cross-context transfer   | Can the engineer use the principle in a new problem?                                    |
| Repeated feedback decay  | Does the same senior feedback become less necessary over time?                          |
| Guardrail promotion rate | Do repeated failures become durable guardrails?                                         |
| Clean restart quality    | When work drifts, does the restart begin from preserved learning rather than amnesia?   |

The Salvage Loop provides the operating model: detect drift, extract what was learned, encode it as working memory, restart clean, and verify quickly. It also names concrete drift signals: context-window collapse, same-file churn, fixes creating new breakages, and inability to explain the current direction in one sentence. ([Muness Castle][1])

This should become a review norm.

When a branch goes bad, do not ask:

> “How do we save the branch?”

Ask:

> “What did we learn that is still true?”

Then preserve that learning as:

* A short spec.
* A guardrail.
* A decision log entry.
* An updated constraint.
* A testable assumption.
* A warning for the next attempt.

The point is not to protect code.

The point is to protect learning.

---

## 5.6 Triangulation / Drift Detection

**Question:** Are humans using the LLM as a tool, or are they orbiting its output?

Triangulation has signatures.

Possible metrics:

| Signal                                                     | Meaning                                                                             |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Same files churn without convergence                       | The work is moving but not learning.                                                |
| Revisions do not preserve design intent                    | Feedback is being regenerated, not absorbed.                                        |
| Author cannot explain the direction in one sentence        | Ownership has been lost.                                                            |
| Fixes satisfy comments literally while violating mechanism | The model is optimizing for text, not judgment.                                     |
| Sudden unexplained style or architecture shifts            | The artifact is being re-authored by the model rather than refined by the engineer. |
| Reviewer repeatedly asks “why did this change?”            | The design trail is broken.                                                         |
| Tests mirror implementation rather than behavior           | The generated test suite is validating the hallucinated model.                      |

These should trigger a stop-the-line event.

Not a punishment. A reset.

The Dissent Mode protocol suggests stop-the-line triggers when assumptions are falsified or risks exceed guardrails, followed by a time-boxed evidence review and a decision to continue, alter, or retire the work. ([Muness Castle][5])

For LLM-assisted engineering, the stop-the-line trigger should be:

> The mechanism is no longer owned by the author.

At that point, more review is waste.

The right move is:

1. Freeze the current path.
2. Ask the author to explain the intended mechanism.
3. Extract what was learned.
4. Update the Dive Pack.
5. Restart clean if needed.
6. Preserve the decision in working memory.

---

## 5.7 Outcome Fidelity

**Question:** Did the work create real user, business, operational, or system value?

This keeps the whole framework from becoming internal process theater.

Possible metrics:

| Metric                  | What it checks                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| User behavior delta     | Did user behavior change in the intended direction?                                       |
| Support burden change   | Did the work reduce confusion, support tickets, manual intervention, or operational load? |
| Reliability impact      | Did incidents, error rates, or rollback frequency improve?                                |
| Decision quality impact | Did the system help users or operators make better decisions?                             |
| Time-to-correct-outcome | Did the user reach the desired outcome faster, safer, or with less friction?              |
| Outcome-linked PR ratio | What percentage of shipped work ties to a real outcome rather than an internal output?    |

This is where the “Outcomes Over Outputs” and “User Value Comes First” ideas matter. The purpose of software is not artifact completion. It is change in the world: user value, safer operations, better decisions, lower risk, higher trust, or some other real outcome. Outputs are only useful insofar as they create those outcomes. ([Muness Castle][4])

A team can ship ten LLM-assisted PRs and produce no meaningful outcome.

A team can delete a generated branch, preserve the learning, and create more value than if it had merged the code.

That is the metric inversion.

---

## 6. Why the Old Proxy Metrics Fail

The old metrics are not useless. They still measure something. The problem is that in the LLM era, they increasingly measure the wrong thing with increasing precision.

### PR Count

**What it used to approximate:** productivity, progress, implementation capacity.

**Why it fails now:** LLMs make PR creation cheap. More PRs may mean more fragmentation, more shallow artifacts, and more review burden. PR count measures how many artifacts entered the system, not whether the system became more true.

**Replacement:** outcome-linked PR ratio, judgment fidelity, constraint traceability.

---

### Cycle Time

**What it used to approximate:** flow efficiency and organizational responsiveness.

**Why it fails now:** faster cycles can mean faster hallucination. If work moves quickly without preserving intent, cycle time measures the speed of drift.

**Replacement:** time-to-validated-learning, reversal rate, production surprise rate, stop-the-line recovery time.

---

### Throughput

**What it used to approximate:** delivery capacity.

**Why it fails now:** throughput becomes dangerous when the marginal artifact is cheap and plausibility is high. The system can produce more changes while degrading architecture, understanding, and user value.

**Replacement:** outcome fidelity, sufficiency coverage, learning fidelity.

---

### Story Points Completed

**What it used to approximate:** planned work completed.

**Why it fails now:** story points measure completion of scoped tasks, not correctness of the underlying model. LLMs can help teams close tickets while missing the domain reality the tickets were supposed to serve.

**Replacement:** strategy-to-code traceability, user outcome delta, assumption validation rate.

---

### Test Count / Coverage

**What it used to approximate:** confidence.

**Why it fails now:** LLMs can generate tests that assert the implementation’s assumptions rather than real behavior. A hallucinated model can come with a matching hallucinated test suite.

**Replacement:** behavioral test quality, constraint-to-test traceability, edge-case grounding in production or domain evidence.

---

### CI Pass Rate

**What it used to approximate:** readiness.

**Why it fails now:** CI proves internal consistency against known checks. It does not prove that the abstraction is right, the domain model is true, or the tradeoffs are acceptable.

**Replacement:** S&T coherence, reality fidelity, author ownership check.

---

### Review Turnaround Time

**What it used to approximate:** team responsiveness.

**Why it fails now:** when artifacts are plausible but ungrounded, shallow review is dangerous. Faster review may simply mean less judgment was applied.

**Replacement:** reviewer confidence delta, conceptual correction rate, repeated-feedback decay.

---

### Lines of Code / Commit Count

**What it used to approximate:** effort.

**Why it fails now:** generated code makes volume almost meaningless. More code may mean more surface area for false assumptions.

**Replacement:** change-locality clarity, abstraction correction rate, maintainability replay.

---

### AI Usage / Token Volume

**What it claims to approximate:** AI adoption or productivity.

**Why it fails now:** this is the most dangerous metric. It measures participation in the medium, not value created through it. More prompting can mean more triangulation, more drift, and more enacted motion.

**Replacement:** salvage quality, Dive Pack completeness, guardrail promotion rate, learning retained per AI-assisted session.

---

## 7. The New Proxy Metric Stack

A practical version could look like this.

### Before Work Begins

Measure:

* Dive Pack completeness.
* Outcome clarity.
* Constraint inventory.
* Premature-question quality.
* S&T necessity statement.

Review question:

> Do we know what we are trying to change, what constraints matter, and what would make action premature?

---

### During Work

Measure:

* Drift signals.
* Same-file churn.
* Reversal rate.
* Author explanation quality.
* Constraint-to-code traceability.
* Assumption validation.

Review question:

> Are we converging toward the intended mechanism, or merely generating plausible motion?

---

### At PR Review

Measure:

* Judgment fidelity.
* S&T sufficiency.
* Viability evidence.
* Tradeoff explicitness.
* Rejected alternatives quality.
* Behavioral test quality.

Review question:

> Does this artifact preserve human judgment, real constraints, and clear tradeoffs?

---

### After Ship

Measure:

* User outcome delta.
* Production surprise rate.
* Abstraction correction rate.
* Support burden change.
* Repeated feedback decay.
* Concept retention.

Review question:

> Did the system become more true, and did the team become more capable?

---

### When Work Goes Wrong

Measure:

* Salvaged learning ratio.
* Guardrail promotion rate.
* Clean restart quality.
* Stop-the-line latency.
* Decision log completeness.

Review question:

> Did we preserve the learning, or did we merely lose time?

---

## 8. The Operating Practice

The replacement for the old BS filter is not a bigger checklist. It is a different operating practice.

A good AI-assisted engineering workflow should look like this:

### 1. Aim before generation

State the outcome, observable done condition, constraints, landmines, prior learning, and premature-action question.

This is the Dive Pack move.

No Dive Pack, no serious agentic run.

### 2. Generate under constraint

Use the LLM to explore, draft, and accelerate, but keep the intent and constraints visible.

The model is not the source of judgment. It is the execution engine.

### 3. Review through S&T

Every meaningful artifact must answer:

* Why is this necessary?
* Why is this sufficient?
* Why is this tactic viable?
* What tradeoff did we choose?
* What would invalidate this approach?

This is the new BS filter.

### 4. Test for ownership

Ask the author to explain the design from memory.

Not as hazing. As a check for whether human judgment made it into the system.

### 5. Stop the line on drift

If revisions churn, intent is not preserved, fixes create conceptual breakage, or the author cannot explain the direction, stop.

Do not keep reviewing indefinitely.

### 6. Salvage learning, not code

When the path is wrong, extract what remains true.

Save it as a short spec, guardrail, decision log, or assumption. Then restart clean.

### 7. Reflect so learning compounds

Open Horizons’ “Aim. Do. Reflect.” frame is useful here because it treats rituals as ways to practice principles, not empty motions, and emphasizes nested feedback loops that preserve signals at the right scale. ([Muness Castle][7])

The goal is not to slow down AI-assisted engineering.

The goal is to keep speed attached to reality.

---

## 9. Conclusion

The old engineering BS filter was built for a world where polished artifacts were costly enough to carry signal.

That world is gone.

LLMs can produce the appearance of engineering thought without the human ownership that made those artifacts trustworthy. They can generate plans, tests, PRs, and explanations faster than teams can review the underlying assumptions. They can make juniors look productive while preventing them from crossing the threshold into mastery. They can make seniors burn out on invisible prompt-debugging. They can make organizations believe throughput has increased while durable capability hollows out.

The answer is not AI abstinence.

The answer is a new credibility model.

Do not ask only:

> Did we ship?

Ask:

> Did judgment survive?

Do not ask only:

> Did the PR pass CI?

Ask:

> Is the tactic necessary, sufficient, and viable?

Do not ask only:

> Did the junior incorporate feedback?

Ask:

> Did the junior internalize the mechanism?

Do not ask only:

> Did cycle time improve?

Ask:

> Did reality fidelity improve?

The old proxy was throughput: how much work moved through the system.

The new proxy has to be fidelity: how much human judgment, real constraint, tradeoff clarity, and durable learning survived the trip from intent to implementation.

That is the new BS filter.

Not formality.

Fidelity.

[1]: https://muness.com/posts/the-salvage-loop-keep-learning-drop-the-code/ "Ditch the Draft: How to Salvage AI Dev Wins from Context Collapse Hell | Muness Castle"
[2]: https://muness.com/posts/on-s-and-t-trees/ "A summary of Strategy & Tactics Trees | Muness Castle"
[3]: https://muness.com/posts/taming-the-chaos-dragon/ "Grounded Execution: Taming the Chaos Dragon | Muness Castle"
[4]: https://muness.com/posts/outcomes-over-output-book-summary/ "Outcomes Over Outputs: A book summary | Muness Castle"
[5]: https://muness.com/posts/dissent-mode/ "Dissent Mode: Eliminate Mid-Bar Work | Muness Castle"
[6]: https://muness.com/posts/user-value-comes-first/ "User Value Comes First | Muness Castle"
[7]: https://muness.com/posts/open-horizons/ "Open Horizons: Aim. Do. Reflect. | Muness Castle"
