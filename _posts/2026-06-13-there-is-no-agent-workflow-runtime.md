---
title: "There Is No Agent Workflow Runtime"
date: 2026-06-13 10:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "Most serious agent systems are workflow engines where some steps, some of the time, use LLMs. The runtime should center the workflow, not the agent."
---

People keep saying “agent runtime” when the thing they need is a workflow runtime.

That sounds like a naming complaint. I do not think it is. Names carry architecture. If we call the runtime an agent runtime, we tend to put the agent at the center of the system and make everything else orbit around it: tools, memory, prompts, approval, logs, tests, state, and deployment. Then deterministic work gets pushed through a stochastic abstraction because the abstraction is what the platform knows how to run.

For toy systems, that may be fine. For serious systems, it is backwards.

The real thing is usually a workflow engine where some tasks, some of the time, are LLM calls, RAG calls, memory reads, tool invocations, or prompt-metaprogramming steps. Other tasks are ordinary code. Or SQL. Or entitlement checks. Or state transitions. Or human approval. Or test execution. Or deterministic business logic that should never be rewritten as “ask the model what to do next.”

The center of gravity is not the agent. The center of gravity is the workflow.

That distinction changes the architecture because the runtime is where we decide what can be versioned, replayed, observed, governed, tested, and promoted. If the runtime only understands agents, everything has to pretend to be an agent. If the runtime understands workflows, an agent becomes one kind of step in a larger executable system.

That is the category correction.

## Some tasks, some of the time

The phrase I keep coming back to is: some tasks, some of the time.

Not “everything should be an agent.” Not “agents are useless.” Not “workflows must be static.” The interesting systems are mixed.

Take a domain casework loop. A production case fails. A domain expert can identify the specific records, suggestion, and expected result. The system needs to pull the relevant payload from a database, preserve the identifiers and provenance, create a scenario, run the current recommendation path, show the actual output, compare it to the expected output, and then decide what kind of fix is plausible.

Some of that work is boring on purpose.

The database query should be deterministic. The entitlement check should be deterministic. The environment configuration should resolve by rule. The state transition from “captured scenario” to “candidate regression test” should not depend on model mood. The comparison between expected and actual output should be code. The regression suite should be code. The audit log should be append-only enough that you can trust it later.

Other parts are good places for model help.

The system might ask an LLM to summarize the domain expert’s explanation. It might ask for a proposed scenario title. It might retrieve similar past failures from a knowledge base. It might inspect prompt files, playbooks, operational routines, and recent changes. It might propose a prompt change. It might propose deterministic code. It might generate a PR description that explains the observed failure, the fix, the tests, and the remaining uncertainty.

But that is still a workflow.

The LLM is participating in the workflow. It is not the workflow.

This is the same pressure Drazen names in [The Context Stack](/posts/the-context-stack/), just one layer lower in the machinery. Action is cheap. Knowing what to do is scarce. Context, provenance, tests, and feedback loops are the scarce part. A runtime that cannot preserve those things will not become reliable just because the LLM call is wrapped in an agent object.

## The vendors are not actually saying “agent everything”

The public language around this space often blurs the distinction, but the better vendor guidance is more precise than the slogans around it.

Microsoft’s [Agent Framework overview](https://learn.microsoft.com/en-us/agent-framework/overview/) explicitly separates agents from workflows. Agents are described as individual LLM-driven units that process inputs, call tools, and generate responses. Workflows are described as graph-based processes that connect agents and functions for multi-step tasks with type-safe routing, checkpointing, and human-in-the-loop support. Their “when to use agents vs workflows” table is the important part: use an agent for open-ended or conversational tasks; use a workflow when the process has well-defined steps, explicit execution order, and multiple agents or functions that must coordinate. They even say, plainly, that if you can write a function to handle the task, do that instead of using an AI agent.

That is not anti-agent. That is category precision.

OpenAI’s [orchestration and handoffs documentation](https://developers.openai.com/api/docs/guides/agents/orchestration) makes a similar move from inside an agent-centered SDK. It supports handoffs when a specialist should take over the conversation, and agents-as-tools when a manager should keep control and call specialists as bounded capabilities. The part I care about is the contract boundary: split specialists only when the next branch truly needs different instructions, tools, policy, capability isolation, prompt clarity, or trace legibility. Splitting too early creates more prompts, more traces, and more approval surfaces without making the workflow better.

Again: useful agent primitives, but the design question is orchestration and ownership. Who owns the next step? What contract changed? What state crosses the boundary? What can be replayed?

Anthropic’s [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) is even more direct. It distinguishes workflows from agents: workflows orchestrate LLMs and tools through predefined code paths; agents let LLMs dynamically direct their own process and tool use. It recommends the simplest sufficient pattern, adding complexity only when it demonstrably improves outcomes. Workflows give predictability and consistency for well-defined tasks. Agents are better when flexibility and model-directed decision-making are needed at scale, with the usual costs: latency, expense, and compounding errors.

I read those three narratives as converging on the same engineering boundary. The agent SDKs are useful. The runtime primitive for serious systems is broader than the agent.

## Where LLM-first runtimes go wrong

The failure mode is not that an LLM-first runtime cannot run a demo. It can. The failure mode is that it teaches the rest of the system to speak the wrong interface.

### Deterministic work goes through a stochastic abstraction

If the runtime’s main executable unit is an agent, deterministic work starts getting wrapped as agent work.

A permission check becomes “ask the agent whether this user can do X.” A query plan becomes “let the agent decide what data to fetch.” A state transition becomes “let the agent mark the case ready.” That may work in the happy path. It is also an unnecessary loss of control.

Some work has a right answer because the business rule says so. Some work has a right answer because the database says so. Some work has a right answer because compliance says so. When those tasks are deterministic, the runtime should represent them as deterministic steps with typed inputs, typed outputs, and explicit failure modes.

Use the model where judgment, language, synthesis, search, or flexible planning is actually the job.

### Version boundaries get hidden

A serious workflow has many independently changing parts:

- deterministic code;
- operational routines;
- prompts;
- playbooks;
- tool definitions;
- model configuration;
- retrieval indexes;
- memory policies;
- customer and environment configuration;
- entitlement rules;
- guardrails;
- tests;
- scenarios;
- knowledge-base content.

If the runtime treats “the agent” as the versioned thing, those boundaries get blurred. A run from last week might have used prompt version 7, toolset version 3, environment config version 12, playbook version 5, retrieval index snapshot 19, and deterministic business logic at commit `abc123`. If you cannot name those versions, you cannot really replay the run. You can only approximate it and hope the difference is irrelevant.

Hope is not a replay strategy.

### Replay becomes theater

Replay is not “run the current agent again on similar input.” Replay is: run the same workflow against the same scenario using the relevant old bundle, then compare the old behavior, current behavior, and expected behavior.

That level of replay is what you need when someone asks why a recommendation changed, why a case failed in production, or whether a proposed fix breaks another scenario. A workflow-native runtime can say: here is the scenario; here is the bundle that ran; here are the traces; here are the deterministic outputs; here are the LLM calls; here are the retrieved documents; here are the approvals; here is the diff.

An agent-first runtime often gives you a transcript and some tool logs. That is not nothing. It is not enough.

### Compliance and observability become bolt-ons

The workflow runtime is the natural place for observability. Every step should produce spans, inputs, outputs, decisions, approvals, retries, and failure reasons at the right level of detail. Some fields should be redacted. Some data should never leave a boundary. Some calls require human approval. Some tools require scoped permissions. Some steps need retention rules.

If those concerns are outside the runtime, every agent implementation has to remember them. That is how controls become folklore.

A platform should give teams shared logging, entitlement, approval, trace, replay, and evaluation primitives. It should not require every team to re-implement the same governance boundary inside a prompt or tool wrapper.

### Agent identity gets confused with workflow state

An agent can have identity: instructions, tools, memory policy, model choice, and maybe a role in the system. A workflow has state: where the case is, what step is next, what has been approved, what artifacts were produced, what failed, what is waiting on a human, what version is being tested.

Those are different things.

When they collapse, you get strange designs. The agent “remembers” what is really workflow state. The transcript becomes the source of truth. The next step is inferred from conversation history instead of explicit state. Human approval is buried in chat. A failed tool call is retried because the agent loop decides to retry it, not because the workflow policy says this step is retryable under these conditions.

The fix is not to make the agent smarter. The fix is to make the state explicit.

## Workflow bundles, not agent blobs

The practical architecture I want is closer to a manifest than a magic box.

A workflow bundle should declare the parts that make a run meaningful:

- workflow definition and step graph;
- deterministic code package or commit;
- agents and their versions;
- skills and toolsets;
- prompt files and prompt-generation rules;
- playbooks;
- retrieval sources and knowledge-base snapshot;
- memory policy;
- model configuration;
- customer and environment configuration;
- entitlement requirements;
- guardrails;
- scenarios and tests;
- evaluation thresholds;
- approval policy;
- observability and retention policy.

Not all of those need to be in one repository. Not all of them need the same release cadence. In fact, they probably should not.

The useful pattern is independently versioned components composed by a workflow manifest. Some references are exact locks. Some are semver ranges. Some are environment-specific bindings. A production run might lock the casework workflow to version `2.4.1`, the scenario builder to `1.8.x`, the toolset to `3.2.0`, the prompt pack to `5.7.3`, the playbook bundle to `2026.06.10`, and the knowledge base to a snapshot ID.

That sounds heavier than “just deploy the agent.” It is heavier. It is also the difference between a system you can govern and a system you can only narrate.

The bundle boundary answers the questions you need after something goes wrong:

- What exactly ran?
- Under whose permissions?
- Against which customer or environment configuration?
- With which prompt and tool contracts?
- With which retrieval corpus?
- With which human approvals?
- Against which tests?
- What changed between the failing run and the proposed fix?

If the runtime cannot answer those questions, the agent abstraction is elegant but untrustworthy.

## Workflows are not always static

There is a weak version of this argument that says “workflows good, agents bad.” I do not believe that.

Some steps should be model-directed. A coding agent fixing a regression may need to inspect files, run targeted tests, choose the next search path, and recover from failed attempts. A research step may need to decide which documents belong in the answer. A case investigation may need to search prior examples, compare explanations, and propose multiple hypotheses.

That is legitimate.

But model-directed does not mean runtime-unbounded. The workflow can still define the sandbox, tool permissions, stopping conditions, approval gates, evals, trace requirements, and artifact contract. The agent can own a bounded step without owning the whole system.

Think of it as a workflow step that says: “Within this boundary, use model-directed search and tool use to produce one of these artifacts, then stop.” That is very different from “the agent is the application.”

The first design gives you flexibility inside a contract. The second design gives you a demo that slowly becomes infrastructure by accident.

## Domain learning loops need this runtime boundary

This runtime question connects directly to the domain-learning argument in [Agents Don’t Learn the Domain. The System Does.](/posts/agents-dont-learn-the-domain-the-system-does/).

A domain system improves when production cases become scenarios, scenarios become tests, tests drive prompt/playbook/code/procedure fixes, fixes go through review, and the resulting knowledge gets promoted into the knowledge base and future workflows. The loop is not “the model learned.” The loop is the system learning through artifacts and review.

That loop needs replayable, governable execution.

If a domain expert captures a failed case and explains what should have happened, the system needs to preserve that as a scenario. If an agent proposes a prompt fix, deterministic code change, or playbook update, the system needs to run the specific case and the broader regression suite. If the change passes, a human still needs enough trace and explanation to review it. If it fails later, we need to know which bundle introduced the behavior.

That is workflow engine territory.

It includes agents. It includes memory. It includes RAG. It includes tool use. It includes prompt generation. But the durable learning happens through versioned artifacts, tests, traces, approvals, and feedback loops. The runtime has to make those first-class.

## What to build

Build workflow engines that can use agents.

That means the platform team should care about the boring substrate:

- step execution;
- typed contracts;
- durable state;
- retries and idempotency;
- entitlement checks;
- human approval;
- trace and span structure;
- artifact storage;
- versioned bundles;
- scenario replay;
- eval and regression hooks;
- environment promotion;
- customer- and environment-aware configuration;
- policy and retention boundaries.

Then add agent SDKs where they fit. Use Microsoft Agent Framework agents or workflows where those are the right primitives. Use OpenAI handoffs or agents-as-tools when ownership boundaries or specialist contracts justify them. Use Anthropic-style simple workflows when a predefined path is enough, and agent loops when the problem actually needs flexible model-directed action.

The point is not to reject the agent layer. The point is to put it at the right layer.

An agent is a powerful execution component. A workflow is the thing that knows why the component is running, what it is allowed to touch, how its output will be checked, what state changes if it succeeds, who approves it, how it is replayed, and what version of reality it belongs to.

That is the runtime boundary I trust.

Build workflow engines that can use agents, not agent platforms that force everything to look like an agent.
