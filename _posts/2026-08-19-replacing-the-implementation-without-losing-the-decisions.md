---
title: "Replacing the Implementation Without Losing the Decisions"
date: 2026-08-19 14:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "Phoenix Architecture tells us what must survive deletion. This is how we turn failures into approved policy, then rebuild the software without losing what we learned."
---

Chad Fowler published [The Specification Is Not a Document](https://aicoding.leaflet.pub/3mtgs36dnq22o) while I was finishing this. He gets to the same problem from the other end: if we can replace the code, where do we keep what we learned from running it? The decisions, incidents, evidence, and tests have to survive because they explain what the next implementation still has to do.

In our case, a failed record gave us evidence. It did not get to rewrite policy. We had to decide whether the implementation broke a rule we already had or an analyst needed to approve a new one. When the analyst approved a new rule, we wrote it into the policy, rebuilt the implementation, and ran the earlier cases again.

---

On my current engagement, we're rebuilding an ETL pipeline. It takes records from hundreds of source layouts and has to produce the same dozen-ish fields every time: a person's name, an organization, an address, a record type, and a few others. Some sources give us one fact per column. Some jam three facts into a field with a misleading name.

We had several plausible ways to attack it: pattern handlers, classifiers, entity extraction, declarative queries. I had barely used some of them. Coding agents made each approach cheap enough to try.

I was treating those attempts as normal spikes: build one, see what it gets wrong, keep the useful part, throw away the rest. Except we could not safely throw them away. Each attempt had changed what we understood about the records. Some of that reasoning was in chat. Some was in a diff three versions back. A little of it survived as an odd branch that nobody wanted to delete because, well, maybe that branch was important.

So the spikes started stacking. The code was supposed to be disposable. The decisions trapped inside it were not.

When one of these systems produces a bad record, what exactly failed? Sometimes the code violated a rule we had already written. Fix the code. Sometimes the record exposed a decision nobody had made yet. Now a person who understands the data has to decide what later records should inherit. Those are different jobs. A red result still needs a person to classify it.

## Keep the learning outside the spike

The normalizer works on a complete record. One phase identifies semantic roles and positions. Declarative policy selects the relevant evidence. A compiler turns the selection into field writes. Verification denies unsafe output or sends it to an analyst.

One failed record contained a source organization and a person's name in the same field. A source-specific branch could have fixed it. Instead, the analyst approved a bounded rule about the relative positions of organization and person spans. A later record reversed their order, so the analyst reviewed that arrangement separately and approved an extension. Relationship markers, registration text, and terminal suffixes remained open.

The implementation could now change without taking those decisions with it. Another model could identify the spans. Another query engine could select them. Another compiler could write the fields.

This is the loop we call [Counterexample-Supplemented Sketches](https://github.com/open-horizon-labs/counterexample-supplemented-sketches), or CESS:

- The **Sketch** records the rules, stable boundaries, and unresolved questions.
- An accepted **counterexample** records a bad result, the correction someone approved, and the policy boundary established by that correction.
- A replaceable **projection** implements the current Sketch.

If the projection violates an existing rule, fix or replace the projection. If the Sketch does not cover the record, somebody who owns the outcome decides what later records may inherit. Then update the Sketch, build again, and run the old cases.

Regression tests protect examples. CESS governs what approved examples are allowed to teach the system.

## Use each implementation to answer one question

We tried pattern-specific handlers, classifier-first routing, span extraction without enough policy, regex scaffolding dressed in semantic vocabulary, a decoder experiment, and finer-grained name labels. I did not know which model, tokenizer, query language, or compiler would win. I did not need to know yet.

Each attempt had a smaller question to answer:

- Can this model find the person and organization spans?
- Can the query express the analyst's rule?
- Can the compiler tie every field write to the exact source text?
- Can I replace one of those parts without changing the policy?

The harness let me work with techniques I did not know well. Build enough to run the case. Look at the trace. Is the implementation wrong, or did we fail to specify the behavior? Fix the right thing. Run the regressions. Try again.

Two handler-based approaches passed all 12 cases in the spike's UI regression set. On a broader synthetic corpus, one reached roughly 57 percent field accuracy and the other roughly 66 percent. Passing the 12 cases established that those examples worked. It did not establish whether we had expressed reusable policy or accumulated 12 successful exceptions.

We could have added more handlers and raised the score. We would also have put more business decisions into branches that the next developer—or the next agent—would be afraid to delete.

In the current design, one phase identifies semantic roles and positions. Another applies the record-level policy. Verification denies unsafe output or sends it to a person for review. We can replace the extraction model without encoding normalization policy inside it. We can change a field-writing rule without retraining the extractor.

The checks gave us permission to move. Is this attempt doing the work? If not, is the problem in the implementation or the Sketch? Can we fix it cheaply? If not, throw it away. The next attempt inherits the policy, not the pile of code that happened to produce it last time.

## Replace the mechanism without changing the expected behavior

Later we found a structural flaw in the perception layer: embeddings do not do negation. We had put phrases such as `exclude registration-like tokens` inside positive embedding labels. The wording happened to work for one checkpoint, but we had no operation that subtracted negative evidence.

We changed the Sketch to separate positive role retrieval from conditional demotion, then rebuilt that part of the projection. We kept the accepted counterexamples and expected outputs unchanged. The old and new implementations matched all 23 cases in the comparison fixture before and after post-processing. When the replacement exposed bugs, we repaired the projection instead of weakening the expected behavior.

That run establishes parity on 23 cases, not scale. Portability across checkpoints, new field shapes, cross-role suppression, and the cost of adding later demotions still need evidence.

The architectural rule also belongs in the Sketch. Output checks alone could allow a future implementation to hide negation in descriptive labels again while keeping those 23 examples green.

## Phoenix defines the deletion boundary

[The Phoenix Primitives](https://aicoding.leaflet.pub/3mjfruwwuck2d) opens with:

> The architecture of a regenerative system is defined entirely by what you can't delete.

Delete the implementation. What remains?

Phoenix names four durable artifacts: specification, evaluation, context boundary, and provenance. We record required behavior in the specification. Evaluations show whether a new implementation still meets it. Context boundaries keep neighboring parts stable. Provenance records what changed and why.

A specification and its evaluations form a regenerative grain: small enough to delete, rebuild, and check. Chad's version in [The Deletion Test](https://aicoding.leaflet.pub/3md5ftetaes2e) is better: “The goal is to build systems where deletion is boring.”

Our pattern-specific handlers failed that test. Delete them and we lost the reasons for their branches. Keep them and every new attempt had to preserve code we no longer wanted.

Mature systems are full of validations, retries, exceptions, and weird branches that nobody will touch because they may encode something the organization once learned. [The implementation remembers](https://aicoding.leaflet.pub/3mobohx4fq22x) when no better artifact carries the decision.

Phoenix gets us to deletion: keep the specification, evaluations, boundaries, and provenance. We use CESS for the next problem. When a reviewer changes policy because of a case, what changes, who approves it, and what does the next implementation have to preserve?

## A reviewer decides whether policy changes

“Spec-driven development” now covers a lot: keep durable requirements in the agent's context, approve a plan before implementation, connect requirements to code and tests, regenerate code from specifications. Those practices share one move: the specification drives the implementation.

[GitHub Spec Kit](https://github.com/github/spec-kit/blob/main/spec-driven.md), for example, says specifications become executable and that between specification and implementation “there is no gap—only transformation.” It includes versioned specifications, test-first implementation, consistency checks, project constitutions, and production incidents as inputs to later specifications. I would take that over asking an agent to recover intent from chat history and generated code.

But production produces a bad result. Now what?

Should the implementation change, the specification change, or both? Who can decide? How much policy can one case justify? Which neighboring decisions stay open? How do we know a fresh implementation retained the rule instead of memorizing the example?

Those questions decide who is allowed to change the system's behavior. They are not implementation details.

Most spec-driven methods concentrate on one arrow: specification → software. In open-world work, we are still discovering requirements through use. The reverse arrow matters too: evidence → specification.

CESS keeps those jobs separate:

- The Sketch holds current policy and leaves unresolved questions visible.
- Stable interfaces and environmental constraints bound what we can generate.
- The projection is replaceable.
- Approved counterexamples record why policy changed.
- Curated regressions reject distinct wrong behaviors without becoming the policy themselves.
- Deterministic comparison and review against the Sketch both have to pass.

The reviewer first classifies the failure. If the Sketch already contains the right rule, fix the projection. If the Sketch is incomplete, someone with authority over the outcome may approve the smallest general rule the case supports. The model does not get to turn one weird input into policy for every later input.

Every so often, delete the projection and rebuild it from the Sketch and stable boundaries. Do not feed the entire counterexample archive back as a hidden replacement for the Sketch. If the new implementation needs the old code or the whole history to recover correct behavior, the Sketch is still missing something.

## Check the outcome, not only the reconstruction

CESS can preserve the wrong thing perfectly. We can regenerate an implementation that follows the Sketch while optimizing for the wrong outcome. Passing the checks proves compliance with the checks. It does not prove that the normalized record helps the person or process downstream.

In [Alignment Is the Constraint](/posts/alignment-is-the-constraint/), I use Aim, Mechanism, Feedback, and Guardrails to keep that chain visible. Here the Aim cannot stop at “produce a normalized record.” What can the analyst or downstream process do when the record is right? What breaks when it is wrong? The pipeline is part of the mechanism. Cases and evaluations provide feedback. Stable boundaries, explicit holes, provenance, and named authority limit what may change.

The model can identify spans, propose a policy change, compile the next projection, and review an output. It still does not own the result. Somebody has to say what a correct record means, approve what this case teaches, and live with the decision when it is wrong.

## Repeat the loop at each specification layer

The normalization pipeline has one Sketch governing one record transformation. A larger system can have several specification surfaces before anything turns into executable code.

In a UI-generation system I am building, the chain looks like this:

```text
job to be done
→ semantic intent
→ screen groups
→ interface requirements
→ channel and input constraints
→ executable UI
```

The output of one step may be another specification. At each arrow I can ask a smaller question: did the downstream representation preserve what the upstream one meant? A schema may check one edge. A simulation, screenshot, accessibility check, model review, or human using the interface may check another.

Each specification layer has its own failures, checks, and owner. We apply a counterexample's lesson at the layer where it belongs. If two layers disagree, provenance and precedence help, but a person still has to decide which intent wins.

I expect more open-world development to work this way. In product, policy, organizational, and agentic systems, deciding what should count as a test is part of the work. We can build a graph of progressively concrete specifications, use local counterexamples to sharpen each one, and check whether every projection preserved the intent above it.

My default now is smaller. I pick one part of a system I expect to rewrite, write down what it must do and what I still do not know, and run a real case. Then I decide whether the code violated the Sketch or the case earned a change to it. I record that decision, rebuild, and run the old cases.

Then delete the implementation. If the behavior survives, I can try the next approach without starting the learning over.
