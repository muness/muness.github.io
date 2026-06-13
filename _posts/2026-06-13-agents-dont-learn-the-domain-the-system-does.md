---
title: "Agents Don’t Learn the Domain. The System Does."
date: 2026-06-13 09:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "Self-improving agent systems are less about models improving themselves and more about domain harnesses where people, code, tests, workflows, and knowledge bases improve each other."
---

The false version of the story is easy to tell.

You give an agent access to tools. It tries a task. It observes the result. It rewrites its prompt, updates its memory, maybe generates a new tool, and gets better. Repeat the loop enough times and the agent learns the domain.

That story is attractive because it has a clean protagonist. The agent gets smarter. The product demo has a before and after. The architecture diagram has a model in the middle and arrows coming back into it labeled feedback.

I do not think that is the useful version.

The useful version is less magical and more interesting: the *system* learns the domain. The model is one participant. So are the domain experts who know what should have happened, the deterministic code that already handles the common cases, the operational routines that move data into shape, the customer or environment configuration that changes the answer, the playbooks that encode judgment, the regression suite that catches drift, the workflow runner that records traces, and the knowledge base that remembers why a decision was made.

That is a very different claim. It moves the unit of improvement from "the agent" to the harness around the work.

A self-improving domain agent is not a model meditating in isolation. It is a closed loop:

> production case → domain explanation → scenario/test → prompt/playbook/code/proc fix → review → deployment → updated knowledge base → better future run

The hard part is not getting an LLM to make an edit. That is getting cheaper. The hard part is arranging the work so the right failure becomes a reusable domain artifact instead of another Slack thread, another ticket, another one-off explanation, or another prompt tweak nobody can audit later.

This is what people miss in the self-improving-agent story. The improvement is not mainly a model becoming dramatically more capable by training itself, rewriting its own architecture, or discovering a new general intelligence loop. The improvement is adaptation to the work at hand. The system starts to behave more like the best people in the domain because it preserves the cases they would remember, the exceptions they would notice, the checks they would run, and the judgment they would carry into the next similar situation.

This is why treating continual learning as primarily a model problem points in the wrong direction. The missing knowledge is not a static corpus waiting to be distilled into one smarter model. Hayek's old point about knowledge is still the constraint: useful knowledge is local, contextual, dispersed, and changing. In domain work it is also fractal. The same kind of judgment lives inside a single case, inside a repeated exception pattern, inside a team's workflow, and inside the business rules that slowly harden around all of it.

You do not make that system smart by fine-tuning one instance into a larger brain. You make it smart by building a learning ecosystem: people close to the work capture local truth, workflows preserve it with provenance, tests and reviews decide what should become durable, and agents help move the learning to the layer where it belongs.

This is also the loop that lets a newcomer become useful quickly in a consulting engagement. Learn just enough of the domain at the right granularity. Compress what you heard into a usable story, diagram, playbook, eval, or question. Act against that artifact. Verify against reality. Then use the correction to update the artifact and the next action. The human is not trying to become a complete copy of the organization. They are acting as a compression engine for local learning. Good agent systems should do the same thing, but with better memory, provenance, and review boundaries.

## A concrete domain: casework systems

Take a domain-specific operational system. Keep it generic. No client names. No proprietary schema. Just the shape of the problem.

Records arrive from different sources. They carry identifiers, quantities, dates, classifications, status fields, and exceptions. A rules engine or expert-system-like pipeline tries to produce the right suggestion: match these records, create that adjustment, ignore this known pattern, flag that anomaly for review.

Some cases are boring. They should stay boring. A deterministic routine normalizes the input. A rule catches a common condition. Customer or environment configuration says this workflow handles a field differently. A regression test proves the easy case stays easy.

Then there are the hard cases. A domain expert sees a bad suggestion. The system recommended the wrong action for a concrete set of records. Or it chose a generic fallback where a specific playbook entry should have applied. Or the deterministic pre-check sent the case down the wrong path before the LLM ever saw it.

This is where the naive agent story starts to break down.

If the answer is "ask the chatbot what happened," you have not built a domain learning system. You have built another place to paste context.

The more useful system gives the domain expert a casework bench. They can find the production case, select the relevant records, describe what went wrong, and write down the expected result in domain language. They do not need to know which prompt, routine, YAML file, or configuration setting caused the problem. They should not have to open an IDE and hunt for the right artifact. Their job is to contribute the part they actually know: *for this case, with these records, this is what should have happened*.

That contribution becomes a scenario. The scenario can run. It can fail against the current system. It can become a golden case once reviewed. Now a developer, an improvement agent, or a domain-tuned workflow can work against something concrete. Not "make the agent better." Not "improve the prompt." Fix this case without breaking the rest of the suite.

The fix might be a prompt change. It might be a playbook update. It might be deterministic code. It might be an operational routine. It might be configuration. It might be the discovery that the expected result is wrong and the domain note needs revision. The harness has to allow for all of those outcomes because the domain does not care which layer you hoped would be responsible.

That is the first important boundary: the LLM is not the domain. The production system, its tests, its historical cases, its expert review, and its operational constraints are the domain surface the LLM is allowed to touch.

## Four loops, not one chatbot

When I think about this kind of system, I do not see one agent. I see several loops that feed each other.

[![Domain learning ecosystem: runtime expert loop, in-app assistant loop, improvement loop, and knowledge graph loop exchanging local cases, reviewed scenarios, and promoted artifacts over different time scales.](/assets/img/domain-learning-ecosystem.svg)](/assets/img/domain-learning-ecosystem.svg)

*Click the diagram to view it full size.*

The important movement is not one agent getting smarter. Local knowledge moves across time scales. A domain expert's correction can become a scenario. Repeated scenarios can become a test, playbook rule, or configuration change. Repeated deterministic successes in the runtime loop can trigger the improvement loop to turn that pattern into a data pipeline step. Each promoted artifact changes what future runtime work even needs an LLM for.

The pattern is fractal: the same capture, review, promotion, and reuse loop shows up inside one case, across a batch of similar cases, and across the whole domain system. The system evolves because the local parts keep teaching one another at the right cadence.


### 1. The runtime expert loop

The runtime expert loop is the path that handles live work.

A case comes in. Deterministic steps normalize the data, apply known rules, call operational routines, fetch environment configuration, and route the case. If the case is ordinary, the system should not ask an LLM to improvise. If a function can do the work, let the function do it. That is not anti-AI. That is how you keep the system legible.

For harder cases, an LLM can use the current playbook, relevant examples, retrieved knowledge, and tool outputs to propose a recommendation. The important part is that the recommendation is not just a blob of text. It is attached to inputs, intermediate decisions, tool calls, traces, and whatever invariant checks the domain requires.

The runtime loop produces the thing users care about: the suggestion, classification, explanation, or next action. It also produces the evidence future improvement depends on. If you cannot inspect why the system did what it did, you do not have a learning loop. You have vibes with logging.

### 2. The in-app assistant loop

The in-app assistant loop is for the people closest to the work.

This is the operator, product person, or domain expert who knows a case is wrong. They may not know whether the right fix lives in a prompt, an operational routine, a configuration flag, or a playbook entry. But they can often say: this output is wrong; these records should have been treated together; this adjustment should have been created; this explanation is misleading; this case looks like an existing pattern.

The assistant's job is not to become a generic domain oracle. It should help capture the correction in a structured way. Name the scenario. Preserve the original payload. Record expected output. Link the case to a ticket, run, workflow, playbook section, and prior examples where appropriate. Ask for missing information if the expectation is ambiguous.

This loop is necessary because domain knowledge is distributed. The person who can identify the failure may not be the person who can safely change the system. The harness should let them contribute without pretending every domain expert is now a software engineer.

There is a real risk here: user signals are not automatically truth. A thumbs-down, a comment, or a manually edited expected result is evidence. It is not a fact yet. It needs provenance, review, and sometimes disagreement. The system should remember who supplied the signal, what case it came from, what changed later, and whether the correction was accepted, rejected, or superseded.

### 3. The improvement loop

The improvement loop turns a failed scenario into a candidate change.

A coding agent can read the scenario, run the failing case, inspect traces, locate the relevant prompt/playbook/code/procedure/config, make a focused change, and rerun the case. If the case passes, it runs the surrounding regression suite. If that passes, it opens a PR with the scenario, the fix, and the evidence.

This is where agent tools become genuinely useful. The boring iteration can be delegated: run the case, inspect the failure, change one thing, rerun, stop after a bounded number of attempts, summarize what changed. That changes the scale of the work. It is not "the agent wrote code fast and now I have to review a mystery diff." It is "the agent worked inside a harness with a named case, a testable expectation, a strategy for where to look first, and a review boundary."

The improvement loop should be allowed to change the layer where the bug lives. If the deterministic pre-check is wrong, do not bury the problem in a prompt. If the playbook is missing a rule, do not hard-code a customer exception because it is nearby. If the configuration is wrong, do not teach the model to guess around bad configuration.

That sounds obvious, but a lot of LLM systems quietly violate it. They put the model at the center, so every improvement becomes a prompt improvement. In a real domain system, the correct fix may be outside the model entirely.

### 4. The knowledge graph loop

The knowledge graph loop is how the system remembers what it learned.

I do not mean "store every chat transcript forever." That is not memory; that is liability with search. I mean a graph of inspectable artifacts: cases, scenarios, expected outputs, prompt versions, playbook sections, operational routines, configuration, test runs, PRs, deployments, reviewer decisions, and domain concepts.

When a scenario graduates from raw operator report to accepted regression test, the graph should know that. When a playbook entry is changed because three production cases exposed the same pattern, the graph should know that. When customer-specific behavior explains why a generic rule does not apply, the graph should know that too.

This is where learning becomes cumulative. The next hard case is not solved by a model remembering everything. It is solved by retrieval over a domain graph with provenance: here are similar cases, here is the playbook section they changed, here is the test that locked the behavior, here is the reviewer who accepted it, here is the boundary where it applies.

That makes the system less dependent on heroic memory. It also makes disagreement possible. If a new case contradicts an old rule, you can inspect the lineage instead of arguing with a summary.

## The business domain is often the eval

A lot of agent evaluation talk defaults to LLM-as-judge. Sometimes that is useful. If you are grading prose, summarization, tone, or open-ended explanation, a judge model can be a reasonable fallback or triage mechanism.

But in many business domains, the stronger eval is the domain itself.

Run the case. Compare old and new output. Check invariants. Inspect traces. Ask whether the deterministic stages changed. Verify scope. Run the regression suite. Have a domain expert review the expected result and the proposed behavior. Look at whether the PR changed the right layer. Look at whether the explanation matches the actual path through the system.

This is one reason software has been such a productive domain for agents: tests provide environmental feedback. Anthropic's [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) makes this point in its own terms: successful systems need feedback from the environment, clear success criteria, testing, and human judgment where broader requirements are involved. The same shape applies outside software when the domain can be made runnable.

A domain case is not just text to be judged. It is an executable scenario. The output can be compared. The invariants can be checked. The trace can show whether the rule fired. The reviewer can say whether the expected result is actually right.

That does not eliminate judgment. It focuses judgment where it belongs.

LLM-as-judge can still help. It can compare explanations, identify likely duplicate scenarios, check whether a proposed playbook entry contradicts existing guidance, or triage a batch of failures. But it should not be the default source of truth when the business process can produce stronger evidence.

The sharper question is: what is the cheapest faithful eval for this domain?

Sometimes it is a unit test. Sometimes it is an end-to-end scenario. Sometimes it is an operational replay. Sometimes it is a human review queue. Sometimes it is a model judge because no better signal exists. Use that hierarchy. Do not ask a language model to hallucinate certainty when the domain can answer.

## The context stack becomes operational

This connects directly to [The Context Stack](/posts/the-context-stack/): action is cheap and knowing what to do is scarce.

A domain harness is what happens when that claim becomes operational.

The system does not merely inject more context into a prompt. It turns context into artifacts that can run: scenarios, expected outputs, tests, playbooks, traces, guardrails, decision logs, and graph links. The point is not to make the prompt bigger. The point is to make the relevant context available at the moment of action in a form the system can check.

That is a subtle but important difference.

If a domain expert explains a failure in chat, the context may help one person for one afternoon. If that explanation becomes a reviewed scenario with provenance, it can help every future run. If the fix becomes a playbook entry linked to tests and traces, the learning has a place to live. If a future agent can retrieve the scenario and rerun it before changing related logic, the context has become part of the control system.

This is also why context that changes behavior needs governance. Raw signals should be easy to capture. Enforced constraints should be harder to create. The AI can propose candidates. Humans decide what becomes binding. Otherwise the system will learn whatever is easiest to collect, not whatever is true.

## The runtime supports the loop

Under the hood, this needs infrastructure. You need something that can execute workflows, preserve state, record traces, route human approvals, call tools, run deterministic checks, and replay old cases against old versions.

The vendor docs are already pointing in this direction, even when the marketing language centers agents. Microsoft Agent Framework explicitly distinguishes LLM-driven agents from graph-based workflows that connect agents and functions with routing, checkpointing, and human-in-the-loop support ([overview](https://learn.microsoft.com/en-us/agent-framework/overview/)). OpenAI's Agents SDK orchestration docs distinguish handoffs from agents-as-tools and emphasize narrow specialist contracts, legible routing, and stable outer workflows ([orchestration](https://developers.openai.com/api/docs/guides/agents/orchestration)). Anthropic draws a useful line between predefined workflows and agents that dynamically direct their own process, and recommends adding complexity only when it improves outcomes ([Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)).

Those infrastructure concerns are real. The right technical abstraction is often closer to a hybrid workflow runtime than an agent runtime. I unpack that runtime boundary in [There Is No Agent Workflow Runtime](/posts/there-is-no-agent-workflow-runtime/).

The domain learning loop still comes first. The runtime exists to make that loop safe, inspectable, replayable, and governable. It is not valuable because it runs agents. It is valuable because it lets the whole domain system improve without losing the thread.

## Build domain learning loops

The practical claim is simple: build domain learning loops, not generic chatbots.

A chatbot can answer questions about the system. That is useful, but it is not enough. A domain learning loop changes the system through reviewed evidence.

It gives domain experts a way to capture failures without becoming developers. It gives developers executable cases instead of vague bug reports. It gives agents bounded work with tests and traces. It gives reviewers provenance. It gives the knowledge base a reason to exist beyond search. It gives the business a way to measure whether the system is improving.

The model may get better over time. The prompts may get sharper. The playbooks may become more complete. The deterministic rules may cover more common cases. The tests may catch more regressions. The knowledge graph may retrieve better examples. The workflow may route more cleanly.

No single part is "learning the domain" by itself.

The system is.
