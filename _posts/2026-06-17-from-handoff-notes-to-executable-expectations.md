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

LLMs change the cost curve. First-pass code, prompt edits, tests, summaries, and requirement drafts get cheaper. That tempts a sloppy conclusion: if experts know what should happen and LLMs can write code, let the expert drive the change directly.

The control problem does not go away. Domain work is variable because the domain is variable: different accounts, positions, customers, workflows, exceptions, and histories legitimately change the answer. The correction should enter the system directly. The production change should not become arbitrary variation. The useful target is a better workpiece: the case itself, the expected behavior, the trace, the proposed change, the regression evidence, and the reason this change should survive.

<img src="https://raw.githubusercontent.com/muness/muness.github.io/de797baebe88b79d3212e4c68ab45e73ab02c5f9/assets/img/handoff-notes-to-executable-expectations.svg" alt="Side-by-side diagram contrasting an old Jira and SDLC translation chain, where domain judgment passes through product management, BA requirements, developer interpretation, UAT, and weeks of delay, with a new in-system expectation loop where expert expected behavior becomes a scenario, audit log, reviewable change, regression evidence, and future behavior within hours." />

## Most of the process is not the product

Brian Potter's [*The Origins of Efficiency*](https://press.stripe.com/origins-of-efficiency) has been useful for thinking about this because it treats efficiency as a property of production methods rather than individual tools. A production process, in his framing, is a chain of transformations. Input moves through steps. Each step changes it. The output of one step becomes the input to the next.

That lens maps uncomfortably well onto software change processes. The input is expert judgment about a messy case. The output is changed system behavior. Everything in between is a production process for turning one into the other.

Once you look at the loop that way, a lot of LLM work looks like optimizing the indirect parts of the process. Better meeting summaries. Better Jira drafts. Better requirements cleanup. Better code generation. Better UAT explanations. Those are not useless. They make the existing path cheaper while leaving the old production method intact.

Potter uses the customer perspective to distinguish value-adding from non-value-adding steps. A step is value-adding if it contributes to the usefulness of the product in the customer's eyes. If it does not, it is non-value-adding. His summary is the useful part here: "From this perspective, there will typically be many more non-value-adding steps than value-adding steps in a process."

That is the part that clicked for me. I do not need the exact percentage to be provocative here. The asymmetry is enough. In many production systems, most of the motion around the product is not directly improving the product. It is moving, waiting, inspecting, translating, buffering, coordinating, and recovering from prior translation loss.

In a domain-learning loop, the product is future behavior. If a correction has to become a meeting, a ticket, a requirement, an implementation guess, and a UAT failure before it becomes executable, most of the process is indirect. LLMs can make those indirect steps cheaper, but that is not the same as changing the production method.

The gain comes from removing the indirect transformations that exist only because expert judgment has nowhere better to go.

## The old loop manufactures handoff artifacts

The old loop is familiar enough that it can feel inevitable because it solved a real constraint. Code changes were expensive. Developers were scarce. Regression was slow. Production systems could not safely absorb every expert correction as an immediate change.

Product and BA layers filtered demand so engineering was not randomized by every local assertion. Review and release gates protected the system from changes whose blast radius nobody understood. UAT gave the expert a chance to say whether the translated change still matched the original case.

The cost is the conversion between steps. The expert starts with a concrete case. The process turns it into a description of a case, then a description of desired behavior, then a description of implementation intent, then an implementation, then a test of whether the implementation matched the remembered intent. By the time UAT finds the mismatch, the organization may have done a lot of competent work and still lost the example that made the rule obvious.

This is where LLM summaries can make things worse if we are not careful. A beautiful summary of a lossy handoff is still a lossy handoff. A generated ticket can be clearer than a human ticket and still be the wrong artifact. A generated prompt tweak can make the demo pass while leaving no regression trail.

LLMs can help at each step. That still leaves the design problem intact: too many steps exist before the correction becomes something the system can run, and removing the wrong steps turns scarce engineering capacity into uncontrolled production variation.

## Executable expectations change the workpiece

In [Agents Don't Learn the Domain. The System Does.](/posts/agents-dont-learn-the-domain-the-system-does/), I described a domain harness as the place where a production failure becomes a scenario, a scenario becomes a regression case, and a reviewed fix becomes future behavior. This essay is the same mechanism viewed through the production-process lens.

The old workpiece is a ticket about a failure. The new workpiece is the failure, preserved as an executable expectation.

That sounds like a small wording change. It is not small operationally. A domain expert can pull in the case, preserve the records, and write expected behavior in domain language: for this case, with these records, this is what should have happened. The harness can run the current system against that scenario and show the mismatch. It can attach the trace, retrieved context, prompt version, playbook section, deterministic rule output, configuration, and prior similar cases.

Now the improvement loop has something concrete to work against. A model can summarize the expert explanation, find similar scenarios, inspect traces, draft a candidate playbook change, search the code, or propose a PR description. A developer can decide where the fix belongs: deterministic routine, prompt, playbook, config, rule, operational procedure, or a correction to the expected result. The regression suite can prove the named case passes and neighboring cases still behave.

The important movement is not "the LLM wrote code." The important movement is that expert judgment changed shape without becoming folklore. It moved from local knowledge to executable artifact to reviewed system behavior.

## Cut handoffs, not discipline

The easiest way to misunderstand this argument is to hear "remove indirect process" as "skip the governance." That creates the failure mode the old process was trying to prevent: local variation entering production with no boundary.

Potter quotes a work-simplification text with a rule that applies uncomfortably well to software process: "one must be absolutely positive that the job cannot be eliminated before attempting to work out a better way of doing it." The test is not whether a handoff can be improved by an LLM. The test is whether the handoff is necessary at all.

Some steps are governance. Some are translation loss wearing governance clothes. Engineering review is not unnecessary. Permission checks are not unnecessary. Regression tests are not unnecessary. Provenance, trace capture, eval boundaries, memory policy, deploy gates, and observation are not ceremony when the system can affect real work. Those are the rails that keep local change from becoming local chaos.

The unnecessary part is making the expert's correction survive as a rumor before it becomes testable.

The split I want is simple enough to say, but hard to build well:

- engineers own the rails: scenario format, regression harness, permissions, traces, evals, provenance, review, deploy, observe;
- domain experts own the local judgment: expected behavior, edge cases, playbook fragments, candidate fixes, prompts, rules, and domain assertions.

Those are not two separate systems. The rails are what make it safe for the local judgment to enter quickly. The local judgment is what makes the rails worth having.

## Variation needs a door

Domain work is full of variation. Different customers, instruments, accounts, workflows, regulatory boundaries, data quality issues, and exception histories can make similar-looking cases require different answers.

Trying to eliminate all of that variation is usually the wrong goal. Some variation is noise. Some variation is the domain.

Potter's variability discussion is useful here because it separates knowledge from control. Knowing what affects a process is one side of the coin. Reducing variability requires control: remove the source of variation, shield the process from it, or compensate for it. In practice, that means some parts should become more standardized while other parts need better feedback paths.

A domain harness gives variation a door.

The standardized parts should be boring: who can submit a scenario, what provenance is captured, which data can leave a boundary, what trace fields are retained, what tests must pass, who reviews the change, how deployment happens, how the old behavior can be replayed.

The variable parts should be explicit: this edge condition matters, this customer configuration changes the answer, this playbook entry should apply, this expected output is wrong, this prompt overgeneralized, this rule belongs in code because it keeps recurring.

Raw feedback still cannot become policy automatically. A thumbs-down, edited expectation, comment, or SME assertion is evidence. It needs source, case, scope, review, and sometimes disagreement. The harness should remember whether the assertion was accepted, rejected, narrowed, or superseded.

Judgment stops getting spent on reconstruction and gets a controlled path into future behavior.

## The runtime is where this either works or becomes theater

The companion runtime problem is straightforward: if the system cannot replay, trace, version, and review the correction, the executable expectation becomes another nice story.

A correction may touch a prompt, playbook, deterministic routine, config file, test, graph record, entitlement policy, or customer-specific rule. Those artifacts do not share one lifecycle. They should not be hidden behind a blob called "the agent." A serious runtime needs workflow state, typed contracts, versioned bundles, trace structure, approval policy, eval hooks, and environment-aware configuration.

That is the boundary from [There Is No Agent Workflow Runtime](/posts/there-is-no-agent-workflow-runtime/): the model call is one kind of step. The workflow is what knows why that step is running, what it can touch, what evidence it must produce, who reviews it, how it fails, and what version of reality it belongs to.

The domain harness depends on that boundary. Deterministic work stays deterministic. Model-directed search happens inside a contract. Human review happens where authority belongs. The scenario and trace make the proposed change inspectable. The regression suite prevents a local fix from breaking the surrounding domain.

"Human in the loop" is too vague for this. The useful boundary is whether the person closest to the work can put judgment into the system at the point where it changes behavior, and whether the workflow can preserve enough evidence for everyone else to trust the change.

## The process learns, or nothing durable happened

Potter's B-17 production example gives the essay its best analogy. The reduction in labor hours per plane was "achieved not by increasing worker skill but by learning effects in the process itself." Workers still mattered. Skill still mattered. The improvement came from the process absorbing reality: smaller subassemblies, clearer sequencing, production illustrations, fewer ways for work to interfere with itself.

That is the useful LLM analogy for domain work.

An LLM does not learn a business because the model becomes smarter in the abstract. The system learns when the process changes so local correction survives. A failed case becomes a scenario. The scenario becomes a test. A repeated fix becomes a rule or code path. A playbook becomes executable context. A review becomes recorded provenance. A future run behaves differently.

The expert's judgment does not disappear into a meeting, ticket, chat transcript, or unreviewed prompt tweak. It becomes part of the control system.

The check is brutally practical: when the next similar case arrives, does the system behave differently, and can we show why?

If yes, the domain loop learned something.

If no, we may have produced motion. Better tickets. Faster summaries. Cleaner requirements. More convincing explanations. Maybe even code that shipped. But the process did not keep the correction.

From handoff notes to executable expectations is a different production method for domain judgment. LLMs do not need to make every step smarter for this to matter. Some steps stop being necessary.