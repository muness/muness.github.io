---
title: "From Handoff Notes to Executable Expectations"
date: 2026-06-17 20:15:00 -0400
author: muness
toc: true
comments: true
excerpt: "LLM systems in domain work matter when expert correction stops traveling through handoffs and becomes testable system behavior."
---

For most of software history, changing production behavior was expensive enough that organizations built a process around scarcity.

The domain expert could see the wrong answer, but the ability to change the system lived somewhere else: in a developer's head, an IDE, a release train, and a review path. So the expert's judgment had to travel. It became priority, ticket, requirement, implementation, deployment, and UAT. That was not irrational. It was a way to ration scarce code-writing capacity and protect production from every local correction becoming uncontrolled variation.

LLMs change one constraint underneath that process. First-pass code gets cheaper. So do prompt edits, test scaffolds, summaries, and requirement drafts. A change that once consumed scarce engineering time can now be proposed in minutes.

The old process did more than ration implementation. It forced a question before code changed: should this local correction become general behavior? A domain expert can be right about the case in front of them and still need a place for the change. It might belong in code, a playbook, a configuration rule, a prompt, a data fix, or a one-off exception. Each option carries a different blast radius.

Expert plus LLM can skip that placement work by accident. The demo looks good: the person who knows the answer gets the system to change. Production is less forgiving. One valid correction can reshape behavior for accounts, positions, customers, or workflows it was never meant to touch.

A shorter capture path only works when review survives the shortcut. The expert's correction should reach the system sooner than a handoff chain allows. It should arrive as the case, expected behavior, trace, proposed change, regression evidence, and the reason this change should survive. The production change becomes reviewable before it becomes global.

<img src="https://raw.githubusercontent.com/muness/muness.github.io/de797baebe88b79d3212e4c68ab45e73ab02c5f9/assets/img/handoff-notes-to-executable-expectations.svg" alt="Side-by-side diagram contrasting an old Jira and SDLC translation chain, where domain judgment passes through product management, BA requirements, developer interpretation, UAT, and weeks of delay, with a new in-system expectation loop where expert expected behavior becomes a scenario, audit log, reviewable change, regression evidence, and future behavior within hours." />

## Most of the process is not the product

In Potter's framing, efficiency belongs to the production method, not the individual tool. A process is a chain of transformations: each step takes an input, changes it, and hands the result to the next step.

Potter defines value-added from the customer's side. A step adds value when it makes the product more useful in the customer's eyes. Most steps in a process do something else. They move work, wait, inspect, translate, buffer, coordinate, or recover from earlier loss.

Software change has the same shape. The product is future behavior. The input is expert judgment about a messy case; the output is a system that behaves differently the next time a similar case arrives. Meetings, tickets, requirements, summaries, estimates, and UAT may all be necessary under the old constraint. They are not where the domain knowledge becomes executable.

LLMs can make those indirect steps cheaper: better meeting summaries, better Jira drafts, better requirements cleanup, better code generation, better UAT explanations. Cheaper translation still leaves a translation chain.

In a domain-learning loop, the failure itself becomes the workpiece: preserved records, expected behavior, trace, proposed change, regression evidence, and review. The production method changes when expert judgment has somewhere runnable to go.

## The old loop manufactures handoff artifacts

The old loop is familiar enough that it can feel inevitable because it solved a real constraint. Code changes were expensive. Developers were scarce. Regression was slow. Production systems could not safely absorb every expert correction as an immediate change.

Product and BA layers filtered demand so engineering was not randomized by every local assertion. Review and release gates protected the system from changes whose blast radius nobody understood. UAT gave the expert a chance to say whether the translated change still matched the original case.

The cost is the conversion between steps. The expert starts with a concrete case. The process turns it into a description of a case, then a description of desired behavior, then a description of implementation intent, then an implementation, then a test of whether the implementation matched the remembered intent. By the time UAT finds the mismatch, the organization may have done a lot of competent work and still lost the example that made the rule obvious.

LLM summaries can make this worse when they polish the handoff instead of preserving the case. A beautiful summary of a lossy handoff is still a lossy handoff. A generated ticket can be clearer than a human ticket and still be the wrong artifact. A generated prompt tweak can make the demo pass while leaving no regression trail.

LLMs can help at each step. The design problem remains: too many steps exist before the correction becomes something the system can run, and removing the wrong steps turns scarce engineering capacity into uncontrolled production variation.

## Executable expectations change the workpiece

In [Agents Don't Learn the Domain. The System Does.](/posts/agents-dont-learn-the-domain-the-system-does/), I described a domain harness as the place where a production failure becomes a scenario, a scenario becomes a regression case, and a reviewed fix becomes future behavior. This essay is the same mechanism viewed through the production-process lens.

A ticket describes a failure. An executable expectation preserves the failure in a form the system can run.

A domain expert can pull in the case, preserve the records, and write expected behavior in domain language: for this case, with these records, this is what should have happened. The harness can run the current system against that scenario and show the mismatch. It can attach the trace, retrieved context, prompt version, playbook section, deterministic rule output, configuration, and prior similar cases.

Now the improvement loop has something concrete to work against. A model can summarize the expert explanation, find similar scenarios, inspect traces, draft a candidate playbook change, search the code, or propose a PR description. A developer can decide where the fix belongs: deterministic routine, prompt, playbook, config, rule, operational procedure, or a correction to the expected result. The regression suite can prove the named case passes and neighboring cases still behave.

The LLM may write part of the patch. The durable shift is that expert judgment changed shape without becoming folklore: local knowledge became an executable artifact, then reviewed system behavior.

## Cut handoffs, not discipline

Removing indirect process can look like skipping governance. That failure mode is exactly what the old process was trying to prevent: local variation entering production with no boundary.

Potter quotes a work-simplification text with a rule that applies uncomfortably well to software process: "one must be absolutely positive that the job cannot be eliminated before attempting to work out a better way of doing it." The test is not whether a handoff can be improved by an LLM. The test is whether the handoff is necessary at all.

Governance is the part that constrains blast radius: engineering review, permission checks, regression tests, provenance, trace capture, eval boundaries, memory policy, deploy gates, and observation. Translation loss is the part that forces an expert correction to survive as a rumor before it becomes testable.

The division is operational. Engineers own the control surface: scenario format, regression harness, permissions, traces, evals, provenance, review, deploy, observe. Domain experts own the local judgment: expected behavior, edge cases, playbook fragments, candidate fixes, prompts, rules, and domain assertions. The scenario is where those responsibilities meet. It lets the expert move quickly without letting a local assertion bypass the control system.

## Variation needs a door

Domain work is full of variation. Different customers, instruments, accounts, workflows, regulatory boundaries, data quality issues, and exception histories can make similar-looking cases require different answers.

Trying to eliminate all of that variation is usually the wrong goal. Some variation is noise. Some variation is the domain.

Potter's variability discussion separates knowledge from control. Knowing what affects a process is one side of the coin. Reducing variability requires control: remove the source of variation, shield the process from it, or compensate for it. In practice, that means some parts should become more standardized while other parts need better feedback paths.

A domain harness should let variation enter at named points. The standardized parts should be boring: who can submit a scenario, what provenance is captured, which data can leave a boundary, what trace fields are retained, what tests must pass, who reviews the change, how deployment happens, how the old behavior can be replayed. The variable parts should be explicit: this edge condition matters, this customer configuration changes the answer, this playbook entry should apply, this expected output is wrong, this prompt overgeneralized, this rule belongs in code because it keeps recurring.

Raw feedback still cannot become policy automatically. A thumbs-down, edited expectation, comment, or SME assertion is evidence. It needs source, case, scope, review, and sometimes disagreement. The harness should remember whether the assertion was accepted, rejected, narrowed, or superseded.

Judgment stops getting spent on reconstruction and gets a controlled path into future behavior.

## The runtime is where this either works or becomes theater

The companion runtime problem is straightforward: if the system cannot replay, trace, version, and review the correction, the executable expectation becomes another nice story.

A correction may touch a prompt, playbook, deterministic routine, config file, test, graph record, entitlement policy, or customer-specific rule. Those artifacts do not share one lifecycle. They should not be hidden behind a blob called "the agent." The runtime needs workflow state, typed contracts, versioned bundles, trace structure, approval policy, eval hooks, and environment-aware configuration.

The related runtime essay, [There Is No Agent Workflow Runtime](/posts/there-is-no-agent-workflow-runtime/), makes the same boundary explicit: the model call is one kind of step. The workflow is what knows why that step is running, what it can touch, what evidence it must produce, who reviews it, how it fails, and what version of reality it belongs to.

The domain harness depends on that boundary. Deterministic work stays deterministic. Model-directed search happens inside a contract. Human review happens where authority belongs. The scenario and trace make the proposed change inspectable. The regression suite prevents a local fix from breaking the surrounding domain.

"Human in the loop" is too vague for this. The workflow has to answer two questions: can the person closest to the work put judgment into the system where it changes behavior, and can the system preserve enough evidence for everyone else to trust the change?

## The process learns, or nothing durable happened

Potter's B-17 production example works because the improvement did not come from workers suddenly becoming smarter in isolation. The process absorbed reality: smaller subassemblies, clearer sequencing, production illustrations, fewer ways for work to interfere with itself. Workers still mattered. Skill still mattered. The learning lived in the production system.

The domain process learns only when local correction survives the run that produced it. A failed case becomes a scenario. The scenario becomes a test. A repeated fix becomes a rule or code path. A playbook becomes executable context. A review becomes recorded provenance. A future run behaves differently.

The expert's judgment does not disappear into a meeting, ticket, chat transcript, or unreviewed prompt tweak. It becomes part of the control system.

The check is brutally practical: when the next similar case arrives, does the system behave differently, and can we show why? If yes, the domain loop learned something. If no, we may have produced motion: better tickets, faster summaries, cleaner requirements, more convincing explanations, maybe even code that shipped. The process did not keep the correction.

From handoff notes to executable expectations is a different production method for domain judgment. LLMs do not need to make every step smarter for this to matter. Some steps stop being necessary.