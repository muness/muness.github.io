---
title: "Variation Needs a Door"
author: muness
toc: true
comments: true
excerpt: "Reliable domain systems do not eliminate judgment. They decide where variation may enter, what process contains it, and how selected corrections become future behavior."
---

An SME can be right about the case in front of them and still be wrong about what the system should do next.

That is not a knock on the expert. It is the condition that makes domain work hard. A reconciliation case can be wrong for reasons that belong in code, configuration, prompt behavior, a playbook rule, account setup, transaction history, source data, operational procedure, or a one-off exception. The person closest to the work may be the only person who can see the correction. The correction still needs a place to land.

Old handoff processes existed because that placement decision used to be expensive and dangerous. Code-writing capacity was scarce. Regression was slow. Production systems could not safely absorb every local assertion as immediate global behavior. Product managers, BAs, tickets, requirements, release gates, engineering review, UAT, and change controls were not accidental bureaucracy. They rationed scarce implementation work and protected production from uncontrolled variation.

They also lost things. A concrete case became a ticket. The ticket became a requirement. The requirement became implementation intent. The implementation became a release. UAT tried to recover whether the translated behavior still matched the original case. A lot of competent work could happen while the example that made the rule obvious was slowly sanded down into prose.

LLMs change one constraint under that process. They make first-pass code, prompt edits, test scaffolds, summaries, and requirement drafts cheaper. That is useful, but it also makes the old safety problem sharper. If a domain expert can describe a correction and an agent can mutate the system in minutes, the bottleneck is no longer only translation. The bottleneck is controlled variation: where is this correction allowed to enter, what evidence travels with it, who reviews its scope, and what future behavior is permitted to change?

## The product is future behavior

Potter's process frame is useful because it keeps the discussion away from tool worship. A process is a chain of transformations. Each step takes an input, changes it, and hands a result to the next step. Value-added work is defined from the customer's side: a step adds value when it changes the product in a way the customer cares about. Many steps do something necessary without changing the product directly. They move, wait, inspect, translate, buffer, coordinate, or recover.

Domain/software work has the same shape. The product is not the ticket, summary, meeting, prompt, or even the patch. The product is future behavior. The input is expert judgment about a messy case. The desired output is a system that behaves differently the next time a similar case arrives, with enough evidence that a reviewer can trust why.

This reframes the old handoff loop. It was a production method for turning domain judgment into future behavior under scarcity. It added buffers because adjacent steps worked at different rates: expert observation, product shaping, engineering capacity, release cadence, UAT availability, production monitoring. It added translation because the person who understood the case usually could not directly change the artifact that governed future behavior. It added inspection because production safety required somebody to ask whether the local correction generalized.

Cheaper LLM work does not automatically remove those functions. It can make the buffers and translations cheaper. It can also skip the inspection that made them safe. The process question is whether the correction can become executable without letting every local variation become policy.

## Some variation is the domain

Potter's variation frame separates knowledge from control. Knowing what affects a process is not the same as controlling it. A reliable process can reduce variability by removing a source of variation, shielding the process from it, or compensating for it. The right move depends on what kind of variation you are looking at.

In domain systems, some variation is noise. A missing field should be normalized. A flaky parser should be fixed. A nondeterministic pre-check should become deterministic. A prompt should not improvise around malformed configuration when configuration can be validated earlier. This is variation the process should remove or shield against.

Some variation is the domain. Different accounts, positions, instruments, customer configurations, transaction histories, data vendors, exception policies, and regulatory boundaries can make similar-looking cases require different treatment. Flattening that into one global rule does not create reliability. It creates a system that is consistently wrong in the cases that matter.

That is why variable judgment and standardized reliability mechanisms are complementary. The expert sees the local condition. The process decides whether that condition is noise, a scoped exception, a missing rule, a configuration boundary, a recurring pattern, or evidence that the current expected behavior is wrong. The more specific the variation, the more standardized the door needs to be.

## Variation needs a door

A controlled door is the difference between SME correction as evidence and SME correction as production mutation.

The door starts with scenario capture. The system should preserve the actual case, not a polished abstraction of the case: account, position, relevant transaction history, source records, current recommendation, deterministic pre-check outputs, prompt or playbook versions where relevant, and the trace of how the system reached the wrong answer. The expert should be able to say, in domain language: for this case, with these records, this is what should have happened.

The correction then needs provenance. Who supplied it? What role or authority do they have? Which production run, case, account, or workflow did it come from? Was it asserted by the SME, observed in a trace, inferred by an LLM, or disputed by another reviewer? Those distinctions matter because a plausible reconstruction is not the same thing as evidence. If the system collapses observed facts, expert assertions, model inferences, and open disagreements into one clean story, it becomes a corporate mythology generator with better tooling.

Expected and actual behavior need to stay paired. The actual behavior shows the current system's state. The expected behavior records the domain claim. The gap between them is the workpiece. Without both sides, a correction becomes either a complaint with no test or a desired rule with no failing case.

The trace makes the layer-placement decision possible. Did the agent recommend the wrong account-level action because the transaction history was incomplete, because a deterministic check routed the case incorrectly, because a playbook rule was missing, because customer configuration was ignored, because the prompt overgeneralized, or because the expected output supplied by the SME needs review? A controlled process does not assume every correction belongs in a prompt. The right fix may be code, config, data repair, playbook text, a deterministic guard, a regression expectation, an operational procedure, or no generalized change at all.

Scope is where production safety lives. A correction may apply to one account, one customer configuration, one instrument class, one source-system pattern, one regulatory boundary, or every future case with the same structural features. The system should force that question before promotion. If scope is unknown, the correction can still be valuable evidence. It should not become a global rule by accident.

Review supplies authority. The reviewer may be a domain owner, engineer, compliance owner, product owner, or some combination depending on the artifact being changed. A prompt change, code change, data repair, playbook edit, customer configuration update, and regression case should not all share one invisible approval path. They have different blast radii.

Regression makes the correction executable. The named scenario should fail against the current system and pass against the proposed behavior. Neighboring cases should still pass. The system should be able to replay the old behavior, the candidate behavior, and the promoted behavior so the change is inspectable later. If the expected result cannot be expressed as a runnable check, the process can still record it as evidence, but it has not become an executable expectation.

Promotion is a decision, not an automatic consequence of feedback. The reviewer can accept the correction as a one-off handling note, narrow it to a customer configuration, turn it into a playbook rule, add a deterministic check, open a code change, repair data, add a regression case, reject it, or keep it provisional until more cases appear. A thumbs-down, edited output, or SME note is an input to this lifecycle. It is not policy.

Challenge and override have to be part of the door. A future case may contradict the promoted expectation. A domain owner may decide the prior rule was too broad. An executive or accountable owner may override a blocking expectation because another constraint dominates. The system should allow that. It should also make the override named, reasoned, traceable, and reviewable later. Ignoring prior learning should no longer be silent, frictionless, and indistinguishable from compliance.

## The archaeological record is not a memory warehouse

The reversal problem from the earlier essay is that communication can become abundant enough to erase its own history. More chats, tickets, summaries, meeting notes, decision logs, dashboards, and AI-generated explanations do not necessarily make the organization remember why it changed. They can make it easier to generate a plausible present-tense story while the chain of judgment vanishes.

The archaeological record is a response to that, but it has to stay narrow. It is not a knowledge base. It should not ask people to narrate everything they did. It should harvest the traces created by consequential work and reconstruct the change episodes through which the current system came into being.

For this process, the useful unit is the change episode. What triggered the change? What was the system doing before? What did the participants believe the trigger meant? What behavior was supposed to change? What evidence supported the direction? What alternatives were considered or ignored? Who proposed, approved, objected, or overrode? Which humans, agents, models, workflows, and tools acted? Which prompts, policies, configurations, code paths, datasets, tests, and deployment units changed? What consequence was expected? What actually happened afterward? Which prior cases did the change depend on, refine, contradict, narrow, generalize, or supersede?

That sounds like a lot until you compare it with the cost of rediscovery. The point is not to produce a museum of old decisions. The point is prospective memory: when a new change touches an old commitment, the system should surface the prior history that now matters. This behavior was introduced after these customer failures. It depends on this assumption. The assumption was contested but never resolved. A similar change was attempted and reverted. These regression cases and downstream workflows depend on the current behavior. The production outcome of the override was never measured.

That kind of memory is different from search. It does not ask the next agent or maintainer to browse the archive. It selects context because the present action is about to cross a boundary that prior experience already marked.

## From episode to expectation

A validated change episode can become a precedent. A precedent can become an expectation. An expectation can become an evaluator. An evaluator can have a state-transition consequence.

In a reconciliation system, that might be as concrete as: under this account configuration, these transaction records and this position discrepancy should produce this recommended action. Replay the original case against every proposed workflow version. If a workflow version reproduces the known failure, it cannot follow the normal promotion path without a named override.

The chain matters because each step adds a different kind of authority. A change episode says what happened and how the system changed. A precedent says this prior case should be considered relevant. An expectation says future behavior should conform under a stated scope. An evaluator makes the expectation runnable. A state-transition consequence changes what can happen next: block promotion, narrow an agent's authority, route to an expert, require justification, or trigger an outcome review.

This is where reliability appears. It is not that the organization captured more knowledge. It is that selected learning changed the control surface of future work.

The lifecycle has to be selective. Observation can become interpretation. Interpretation can become precedent. Precedent can become a provisional expectation. A provisional expectation can become a validated expectation. A validated expectation can become a binding control. At each step, the system needs scope, provenance, supporting cases, confidence, an owner, review conditions, expiration or reconsideration triggers, a challenge mechanism, and a traceable override path.

Without that lifecycle, the cure repeats the disease. Bind every correction and the system becomes dead doctrine. Capture every gesture and the record becomes unusable noise. Explain every decision and explanations become mandatory fiction. Maximize auditability and work gets optimized for the archive. The answer to AI-accelerated amnesia is not eternal rigidity. It is temporally explicit constraint.

## Preparing the Recon loop

The concrete Recon Agent story sits exactly at this boundary.

A data pipeline detects a position reconciliation failure. An agent recommends an account-level action using transaction history and the current workflow. The recommendation is wrong or incomplete. An SME can see the correction immediately. The tempting shortcut is to let that correction directly mutate the system: patch the prompt, edit the recommendation rule, change the code path, and move on.

That is too loose for production. The SME correction is evidence and candidate specification. It is not direct production mutation.

The controlled version preserves the case, current output, expected output, trace, provenance, and proposed scope. An LLM can help structure the correction into schema'd input and output plus a real example. An improvement agent can use that scenario to inspect code, prompt, deterministic checks, playbook, configuration, and data boundaries. The specific case can be verified. Neighboring cases can be replayed. A reviewer can decide whether the case becomes named regression coverage, a scoped rule, a config change, a data repair, or a rejected assertion.

This is why the June domain-harness argument matters without needing to repeat it here. The domain does not become reliable because the model learned more words about the business. The system becomes more reliable when expert correction has a governed path into scenarios, tests, traces, reviewed artifacts, and future behavior.

Variable judgment is still necessary. Standardized process is what lets that judgment survive without becoming arbitrary mutation. Variation needs a door: easy enough for the person closest to the work to use, constrained enough that production can trust what enters, and explicit enough that future changes can see what prior learning they are about to disturb.
