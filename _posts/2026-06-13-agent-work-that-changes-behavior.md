---
title: "Agent Work That Changes Behavior"
date: 2026-06-13 11:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "The useful agent story is not smarter chatbots or generic runtimes. It is context-bearing workflows that let people, agents, tests, and domain systems change how work happens."
---

A pattern keeps showing up in client work and internal projects.

Drazen’s [The Context Stack](/posts/the-context-stack/) names the underlying bottleneck cleanly:

> Action is cheap. Knowing what to do is scarce.

That still feels like the core shift. LLMs made a lot of action cheaper: drafting, summarizing, coding, searching, editing, generating plans, running commands, calling tools. But the bottleneck moved. The scarce part is not whether something can act. The scarce part is whether the system knows what action is worth taking, under which constraints, with which evidence, and with what mechanism for correcting itself when it is wrong.

I keep seeing two failure modes in the real work.

One is domain work treated as if the agent should learn the business by itself: [Agents Don’t Learn the Domain. The System Does.](/posts/agents-dont-learn-the-domain-the-system-does/)

The other is infrastructure treated as if the runtime should center the agent instead of the workflow: [There Is No Agent Workflow Runtime](/posts/there-is-no-agent-workflow-runtime/)

They look like different problems. One shows up around domain experts, domain harnesses, knowledge bases, and business evals. The other shows up around workflow engines, versioned bundles, replay, entitlements, and why some tasks, some of the time, should be LLM steps.

But they are the same problem at two levels.

Useful agent work is not about putting a model in the middle of everything. It is about building context-bearing workflows that let the system change behavior without losing the thread.

## The wrong center

A lot of agent conversations still put the model in the center.

The diagram has an agent, tools around it, memory behind it, maybe a human approval gate, maybe a vector database, maybe an eval loop. The product story is that the agent gets smarter as it does more work.

Sometimes that is good enough for a demo. It is not enough for serious work.

The problem is not that models are weak. The problem is that the useful work does not live inside the model.

In a real domain, the work lives across systems:

- the production case that failed;
- the person who knows what should have happened;
- the rule that already handles similar cases;
- the domain-specific routine that implements one piece of business logic;
- the customer or environment configuration that changes the answer;
- the playbook entry that explains the exception;
- the test that prevents the old failure from returning;
- the PR that changed the behavior;
- the trace that shows what actually ran;
- the review note that says why this fix was accepted;
- the guardrail that says what must not happen again.

No single model owns that.

A model can participate. It can summarize, propose, classify, search, rewrite, compare, and sometimes plan its way through a bounded step. But the thing that learns is larger than the model.

The system learns when the failure becomes a reusable artifact.

## The domain harness

This is why I keep coming back to the idea of a domain harness.

A generic assistant can answer questions. A generic coding tool can edit files. A generic agent platform can run a tool loop. Those are useful capabilities, but they are not yet a learning system.

A domain harness is different. It gives the work a place to become inspectable and executable.

A production case fails. A domain expert can pull the case into a development loop, preserve the relevant records, describe the expected result, and say what was wrong in domain language. That becomes a scenario. The scenario can run against the current system. It can fail. It can become a regression case. An agent or developer can propose a prompt, playbook, deterministic routine, code, or configuration fix. The harness reruns the case. If it passes, it runs the neighboring cases. If that passes, the change goes through review and deployment. The knowledge base records what rule exists now and where it lives.

That is not a chatbot flow. It is a domain learning loop.

The important part is not that an LLM was involved. The important part is that the loop preserves the shape of the failure and the evidence for the fix.

That is how local knowledge becomes operational.

People know parts of the domain. Operators see failures. Developers know which changes are safe. Product people know which exceptions are material. The system knows which configuration is active. Tests know which behavior must not regress. The knowledge base knows what has been accepted before. The harness lets those partial forms of knowledge meet in a runnable form.

Without that, the organization keeps paying the same tax: vague tickets, repeated explanations, fragile prompt edits, duplicated procedures, and review cycles where nobody can tell whether the system actually got better.

## The workflow substrate

Once you see the domain harness, the runtime question changes.

The problem is not “how do we run an agent?”

The problem is: how do we run the workflow that makes the domain loop safe enough to trust?

That workflow contains many kinds of steps.

Some steps should be deterministic: queries, entitlement checks, environment configuration lookup, state transitions, invariant checks, test execution, deployment gates, audit logging.

Some steps are good uses of LLMs: summarizing a domain expert's explanation, finding similar scenarios, proposing a playbook change, drafting a PR description, inspecting code and traces, generating a candidate fix.

Some steps need retrieval. Some need memory. Some need human approval. Some need model-directed search inside a sandbox. Some should never be nondeterministic.

This is why I do not trust “agent runtime” as the central abstraction.

A serious system needs workflow state, not just agent memory. It needs versioned bundles, not just prompt versions. It needs replay, not just transcripts. It needs typed contracts, not just tool descriptions. It needs evals that can run the case, not just another model saying the answer looks good.

The model call is one kind of step.

The workflow is the thing that knows why that step is running, what it is allowed to touch, what evidence it must produce, who approves it, how failure is handled, and what version of reality it belongs to.

## Context becomes control

This is the bridge back to the context stack.

Context is not just more text in a prompt. If that is all it is, it drifts, bloats, and eventually becomes another source of confusion.

Useful context becomes control.

An intent note tells the system which outcome is important. A scenario tells it what failed. A test tells it what must now pass. A trace tells it what actually happened. A guardrail tells it what must not happen again. A versioned workflow bundle tells it what ran. A review note tells it which judgment was accepted. A knowledge graph lets the next run retrieve the relevant prior cases without pretending the model remembers everything.

That is the deeper shape:

> context artifact → executable workflow → evidence → review → promoted knowledge → better future context

The loop creates more control than any single artifact.

This is also where a lot of AI memory talk goes sideways. Memory without governance is liability. Memory without action is a scrapbook. Memory without evals becomes vibes with search.

The useful version is smaller and stricter: preserve the facts, decisions, constraints, examples, and failures that change future behavior. Make them inspectable. Make them removable. Make promotion harder than capture. Let the system learn, but do not let it silently turn every signal into policy.

## The evaluation problem moves too

If the system is a domain learning loop, evaluation cannot only be an offline LLM judge.

Sometimes a judge model is useful. I use them. They can triage prose, compare explanations, flag likely contradictions, or assess open-ended outputs against a rubric.

But in serious domains, the better eval is often inside the work.

Run the case. Compare the old and new output. Check the invariant. Inspect the trace. Ask the domain expert whether the expected behavior is correct. See whether the scenario now passes. See whether the regression suite still passes. See whether users accept, edit, reject, or repeatedly override the recommendation.

None of those signals is perfect. User acceptance is not truth. A passing test can encode the wrong expectation. A domain expert can be wrong. A trace can omit the important span.

But those signals are closer to the work than asking a model to decide whether another model’s answer sounds plausible.

The question is not “can we evaluate the model?”

The better question is:

> What is the cheapest faithful signal that the system’s model of the domain got better?

Sometimes that is a deterministic test. Sometimes it is a scenario replay. Sometimes it is human review. Sometimes it is a production signal. Sometimes it is an LLM judge, with a rubric and calibration, because the judgment is genuinely semantic.

Use that ordering.

## Directed work beats agent swarms

There is a repeating pattern in serious agent projects. The first instinct is to throw agents at the backlog: make these tests pass, port this subsystem, fix whatever is failing, keep going until the dashboard is green.

That can produce an impressive amount of motion. It also creates predictable failure modes. Agents learn the test surface instead of the domain. They discover shortcuts the harness forgot to forbid. They make local changes that look good until a more important invariant breaks. Long-running parallel work drifts because nobody encoded the strategy, sequence, resource limits, handoff protocol, or validation boundary.

The better pattern is closer to how the best people work. They do not merely try random changes faster. They understand the shape of the task, work bottom-up when dependencies require it, preserve the constraints, validate against the real suite, notice when the harness is lying, and change approach when the evidence changes.

That is the useful version of “self-improving.” Not a model recursively 10xing itself by rewriting its own architecture. A system adapts to the task at hand because the task has been made legible: goals, constraints, cases, tests, traces, review criteria, and domain knowledge are available in forms the workflow can use.


## What this implies for teams

If this framing is right, then a lot of teams are asking the wrong implementation question.

They ask:

- Which agent SDK should we use?
- What memory system should we buy?
- How autonomous should the agent be?
- How do we make a platform for all agents?

Those are not bad questions. They are just downstream.

The earlier questions are:

- What work needs to change?
- What failure should become a reusable case?
- Who can supply the expected behavior?
- What parts of the workflow should be deterministic?
- Where is model judgment actually useful?
- What artifact should survive this run?
- How will the next run know what we learned?
- What signal tells us the domain loop improved?

Those questions force the system back into reality.

They also make the human role clearer. The point is not to remove people from the loop. The point is to put people where their judgment changes the outcome and stop wasting them on transcription, context reconstruction, and n-click UI paths that exist only because the system cannot receive the correction directly.

A good domain harness lets humans contribute judgment without making every expert become a developer. A good workflow runtime lets agents contribute action without making every step stochastic. A good context substrate lets the next run start from what was learned without turning memory into an ungoverned landfill.

## The billion-apps version needs harnesses

If software keeps getting cheaper to create, the interesting consequence is not one universal app with one universal agent behind it. It is closer to a billion apps: many small, situated, domain-shaped tools that fit the work in front of them.

But a billion apps world only works if the apps are not disposable piles of prompt glue. Each little app needs its own harness: the local context, workflow, permissions, evals, traces, review loop, and memory boundary that make it safe to adapt to its task. Otherwise cheaper app generation just gives us more surfaces where nobody knows what changed, why it changed, or whether it got better.

That is why domain-specific harnesses are the center of the argument. The value is not that every app has a chatbot. The value is that each task-shaped system can preserve what the best people would preserve: the example, the exception, the constraint, the judgment, the test, and the reason the next run should behave differently.


## The larger operating model

The pattern is not “AI agents will replace work.”

Not “everyone needs a personal agent.”

Not “the model will recursively improve itself until the organization becomes optional.”

The practical version is smaller and more useful:

> Agent work changes behavior when context-bearing workflows let people, models, tools, tests, and domain systems improve each other over time.

If an outcome is a change in behavior, the corollary is simple: agent work has not produced an outcome until some behavior changes. A task was routed differently. A domain expert captured a correction they used to keep in their head. A repeated case became a deterministic rule. A review rejected a bad generalization before it shipped. A future run avoided work the previous run had to improvise through.

That gives me a cleaner operating model:

Drazen’s Context Stack names the bottleneck: knowing what to do.

The domain harness shows how situated knowledge becomes runnable.

The workflow runtime shows how the loop becomes governable.

Open Horizons names the human discipline around the loop: aim, problem-space, problem-statement, solution-space, execute, review, dissent, salvage.

Skills, subagents, playbooks, tests, guardrails, and knowledge graphs are not the point by themselves. They are preservation mechanisms. They are how the system keeps the parts of learning that should survive and rejects the parts that should not.

That is the operating model I want to keep testing against real projects.

Useful agent systems will not be defined by whether the agent sounds smart in a chat window.

It will be defined by whether the work gets better after each run.

Not just faster.

Better: more grounded, more inspectable, more governable, more correctable, and more faithful to the domain.

That is agent work that changes behavior.
