---
title: "A Reconciliation Failure Should Become a Test"
date: 2026-06-17 20:15:00 -0400
author: muness
toc: true
comments: true
excerpt: "A position reconciliation failure becomes useful when the correction moves through a harness: expected behavior, schema'd examples, traces, deterministic checks, regression coverage, and review."
---

A data pipeline detects a position reconciliation failure.

That is where the useful story starts. Not with a generic agent workflow, and not with a better handoff note. An account has a position that does not reconcile. The transaction history shows a sequence the system has seen before: a corporate action, a later correcting transaction, and an account-level treatment that should change the recommended action. The agent runs when the failure is detected and recommends a fix inside the account.

The recommendation is wrong. It is not nonsense. It is worse than nonsense in the way production systems usually fail: it is plausible, incomplete, and attached to enough supporting evidence that a non-expert might accept it. The SME looking at the case can see the missing treatment immediately. The question is whether that judgment dies as a comment, ticket, meeting note, or prompt tweak, or whether it becomes future behavior the system can run and verify.

Executable expectations are credible only when the expert correction enters a harness with trace, scope, review, and tests before it changes production behavior. An LLM may help write the patch, but the patch is not the mechanism.

## The live failure has a shape

The runtime path is intentionally mixed. Deterministic steps pull the reconciliation failure from the pipeline, preserve the account and position identifiers, fetch the relevant transaction history, apply known checks, and decide that the case needs a recommendation. The agent step is bounded by that workflow. It receives the case, the current playbook context, the retrieved history, prior similar cases if any exist, and the typed contract for a recommendation.

In this case, the current system says something like: create a corrective adjustment for the position because the ending quantity does not match the expected quantity. That might be a reasonable default for a simple break. It is wrong for this account because the transaction history already contains the correcting event. The expected recommendation is to recognize the prior correction, avoid creating a duplicate adjustment, and route the case for the account-level treatment that matches the history.

A bad recommendation is not just bad text. If accepted, it changes operational work. It may create a duplicate correction, misstate the position, or send the case through a workflow that creates more cleanup. The SME is not giving editorial feedback. They are identifying a domain failure at the boundary where system behavior becomes work.

That is why the correction surface cannot be a thumbs-down button with a comment box and a vague promise that the model will improve. User feedback is evidence. It is not policy yet.

## The SME corrects the recommendation, not the code

The SME should not have to know whether the bug lives in a prompt, deterministic check, playbook rule, configuration file, data repair, schema expectation, or code path. They know the case. The interface should let them contribute that part cleanly.

For the failed recommendation, the correction surface shows the current recommendation, the records used to produce it, the trace of the recommendation flow, and the fields the SME can safely change. The SME edits the recommended action and explains the treatment in domain language: this account already has the correcting transaction; do not recommend a duplicate adjustment; route the case to the existing account-level reconciliation treatment; cite the correcting transaction as the reason.

The system preserves the original run. It does not overwrite history with the corrected answer. It records the failing output, the SME's expected output, the transaction records that justify the correction, who supplied the correction, which workflow bundle produced the failure, and what scope the SME believes the correction should have. That scope can be narrow: this account, this position type, this transaction pattern, this date range, this playbook section. It can also be disputed later.

This is the first governance boundary. The person closest to the work can state the expectation. They are not bypassing review into production.

## The correction becomes a schema'd expectation

An LLM is useful in the next step because the SME explanation is partly natural language and partly structured judgment. The model can translate that explanation into a candidate expectation that the harness can run. It should not decide that the expectation is true. It should produce a reviewable artifact.

A human-readable version might look like this:

| Field | Captured value |
|---|---|
| Scenario name | `account_prior_correction_prevents_duplicate_adjustment` |
| Trigger | Position reconciliation failure for an account-position pair |
| Input records | Account `A-1842`, position `P-771`, transactions `T-1007` original event, `T-1031` correcting event, current recommendation run `R-5529` |
| Current output | Recommend a new corrective adjustment for `P-771` |
| Expected output | Do not create a duplicate adjustment; route to the account-level prior-correction treatment; cite transaction `T-1031` |
| Scope | Same account-level treatment when a correcting transaction already resolves the position break before recommendation time |
| Evidence | Pipeline failure ID, recommendation trace, transaction history snapshot, SME correction, workflow bundle version |
| Review state | Candidate expectation, not promoted coverage |

The same artifact can exist as typed input and output inside the harness. The table format is incidental. The operational change is that the correction is no longer just prose: it has preserved records, an actual output, an expected output, provenance, and candidate scope. The current system can be run against it. The old behavior can fail. A proposed fix can be tested against it.

This is the mechanism I was trying to name in [Agents Don't Learn the Domain. The System Does.](/posts/agents-dont-learn-the-domain-the-system-does/). Domain knowledge did not magically enter the model. A failed case became a scenario. The scenario can become a regression case after review. The system learns if the accepted artifact changes future behavior.

## The agent fixes the layer where the bug lives

Once the expectation exists, an improvement agent can work against a bounded target: make this case pass without breaking neighboring cases. That is very different from asking it to make the agent better.

The agent starts with the failing scenario and the trace. It can inspect which deterministic checks fired, which prompt version ran, which playbook passages were retrieved, which configuration applied to the account, what transaction features were extracted, and how the recommendation contract was filled. The correct fix may land in several places:

- code, if the transaction-pattern detector fails to recognize the correcting event;
- a deterministic check, if the workflow should have stopped duplicate-adjustment recommendations before the LLM step;
- the prompt, if the prompt ignores an already-available signal;
- the playbook, if the account-level treatment is missing or ambiguous;
- configuration, if this account or position class should bind to a different treatment;
- data, if the transaction record is malformed or stale;
- the expectation itself, if the SME correction turns out to be too broad or wrong after review.

A harness earns trust by allowing all of those outcomes. If every failure becomes a prompt edit, the system is lying about its architecture. If every local correction becomes code, it will harden exceptions that should have stayed scoped. The improvement loop has to find the layer where the bug lives because each layer has a different blast radius.

In the Recon Agent case, a good fix might be small and boring: a deterministic pre-check recognizes that a correcting transaction already resolves the break and passes that fact into the recommendation contract. The prompt then has less to infer. The recommendation can cite the correcting transaction instead of inventing a duplicate adjustment. Or the right fix might be a playbook update if the logic exists but the account-level treatment was never described clearly enough for the recommendation step to use.

Whichever layer changes, the reviewable chain has to survive: failure, expected behavior, proposed fix, verification evidence, and promotion decision.

## Verification is part of the loop, not a ceremony after it

After the candidate fix, the harness reruns the exact scenario. The deterministic check should show the condition that changed: the correcting transaction was recognized, the duplicate-adjustment path was blocked or deprioritized, and the recommendation output now routes to the expected account-level treatment with the right evidence.

Then the harness runs the neighboring regression suite. The nearby cases matter because the SME's correction was local. Maybe another account has a similar-looking transaction sequence where the correcting event does not resolve the break. Maybe the same position type behaves differently under a different account configuration. Maybe a later transaction reverses the correction. A fix that passes the named case and breaks those neighbors is not learning. It is uncontrolled variation with a nicer interface.

This is the part Potter's process frame helps name without turning the article into process theory. Domain work contains variation. Reliability comes from deciding where variation is allowed to enter and which standardized process contains it. In this loop, the variable input is the SME's case judgment. The standardized container is the scenario format, provenance, typed expectation, trace, deterministic check, regression suite, review state, and promotion decision.

The review step remains explicit. A developer or authorized reviewer can see the failing run, the SME correction, the proposed layer change, the specific scenario result, the neighboring regression result, and the remaining uncertainty. If the expected behavior was too broad, the reviewer can narrow the scope. If the data was wrong, the fix may be data repair rather than behavior change. If the deterministic check is now carrying the rule, the prompt should not also carry a duplicate hidden version of the same rule.

## Promotion turns a correction into memory

When the specific case passes and the surrounding suite stays green, the agent can recommend adding the case to regression coverage. That recommendation should be concrete: add `account_prior_correction_prevents_duplicate_adjustment` because this production failure exposed an accepted account-level treatment that was not covered; keep the case scoped to correcting transactions that resolve the position break before recommendation time; link it to the trace, SME correction, review note, and fix.

The user still accepts, rejects, renames, or narrows that recommendation. Naming the case is not cosmetic. A named case is how future maintainers understand what the system promised to remember. If the name is vague, the regression becomes a fossil. If the name captures the domain condition, the next person can tell whether a later change is preserving the rule or accidentally expanding it.

Once accepted, the case enters the regression suite. The knowledge graph or equivalent record links the scenario, prompt or code version, playbook section, transaction pattern, review decision, and deployment. A future recommendation run can retrieve the accepted case as precedent. A future improvement agent can rerun it before touching the same layer. A reviewer can ask why the system no longer recommends duplicate adjustments for this pattern and get an answer grounded in a trace rather than a story.

That is the difference between memory and narration. Communication reversal turns reports, dashboards, reviews, and summaries into substitutes for contact with the work. A harness pushes in the other direction: the communication is valuable because it changes what the system can verify and do. The note survives only if it becomes an expectation, a test, a rule, a playbook entry, a configuration decision, or a reviewed rejection.

## The runtime boundary keeps the shortcut honest

This loop depends on the runtime boundary from [There Is No Agent Workflow Runtime](/posts/there-is-no-agent-workflow-runtime/). The LLM is one participant in a workflow that also has deterministic steps, typed contracts, state transitions, approvals, traces, artifact storage, replay, and environment-aware configuration. If those boundaries collapse into a blob called "the agent," nobody can tell what changed or why it should be trusted.

The companion synthesis, [Agent Work That Changes Behavior](/posts/agent-work-that-changes-behavior/), says the outcome plainly: agent work has not produced an outcome until behavior changes. In this case, the behavior change is observable. The next time a similar reconciliation failure arrives, the system should recognize the prior correcting transaction, avoid the duplicate adjustment recommendation, route the case to the account-level treatment, and show the evidence that justifies the recommendation.

That is also the test at the end of the loop: when the next similar case arrives, does the system behave differently, and can we show why?

If yes, the SME correction did not become a better ticket. It became executable memory. If no, the organization may still have produced a good explanation, a clean summary, a plausible patch, and a convincing review thread. It just did not keep the lesson where the work happens.