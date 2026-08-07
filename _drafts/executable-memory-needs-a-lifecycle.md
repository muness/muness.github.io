---
title: "Executable Memory Needs a Lifecycle"
author: muness
toc: true
comments: true
excerpt: "A test, golden case, or guardrail can preserve a hard-won lesson. It can also keep enforcing yesterday's answer after the world changes."
---

A SWE-bench task gives a coding agent a GitHub issue and a repository. The agent writes a patch. Hidden tests decide whether the patch solved the issue without breaking the surrounding code.

That is an attractive form of memory. Somebody fixed a real bug. The issue, patch, and tests preserve enough of the decision to run it again. A future system does not have to rely on a summary of what mattered. It can try the work and get an answer, although the answer can still be wrong.

In 2024, OpenAI and the SWE-bench authors found tasks whose issue descriptions were underspecified or whose tests rejected valid solutions. They had 93 experienced Python developers review 1,699 tasks and produced a 500-task human-validated subset called SWE-bench Verified. The new set superseded the original SWE-bench and SWE-bench Lite sets.[^swe-verified]

That was a sensible repair. The tests had authority: a patch passed or failed because they said so. The review made that authority more credible.

By February 2026, the repaired benchmark needed another repair. OpenAI audited 138 SWE-bench Verified tasks that one model often failed. At least 59.4 percent of that audited subset had material problems in the tests or problem descriptions. OpenAI also found evidence that every frontier model it tested had encountered at least some of the benchmark problems or solutions during training. It stopped reporting SWE-bench Verified scores and recommended a different benchmark for frontier coding models.[^swe-retired]

The tests made disagreement runnable. Treating their expectations as permanently authoritative was the failure.

An executable expectation carries three things at once:

- a remembered decision about what good looked like;
- a mechanism that can enforce that decision;
- a claim about where the decision still applies.

The first may remain useful after the other two have changed. A golden case can preserve the failure it was built from and still stop measuring the capability people think it measures. A security rule can prevent one class of harm while creating another. A repository instruction can begin as local guidance and quietly become policy for every agent that enters the workspace. Durable memory needs a lifecycle because promotion grants authority, not truth.

## Promotion Is the Start of Governance

In [Splitting Learning from Constraint]({% post_url 2025-12-28-splitting-learning-from-constraint-in-an-ai-world %}), I argued for a promotion gate between captured learning and enforced rules. An observation should be cheap to record and carry little authority. A human can later promote a repeated or high-cost failure into a constraint with a boundary, rationale, and revisit condition.

That answers how a rule gets in. It does not answer what happens after the rule starts governing work.

A promoted counterexample now blocks patches. A golden output now decides whether a model improved. A policy check now rejects a deployment. A guardrail now appears in future sessions and changes what an agent will do. The rule is no longer a note about the past. It participates in decisions.

A useful lifecycle looks like this:

| State | What happens | Who decides |
|---|---|---|
| Observation | Preserve the case, surprise, or correction without making it binding. | Anyone may capture it. |
| Candidate | Propose a boundary, the failure it prevents, and evidence that would justify enforcement. | A maintainer or domain expert reviews it. |
| Promoted | Authorize the rule for a named scope and application surface. | Someone with specification or policy authority approves it. |
| Active | Enforce the rule and retain matches, failures, overrides, and outcomes. | The system applies it; people remain accountable for the result. |
| Review | Compare the original rationale with current behavior and evidence. | A named owner renews, revises, narrows, demotes, supersedes, or retires it. |
| Historical | Preserve the old rule and rationale without continuing to enforce it. | The owner records what replaced it and why. |

The transition from promoted to active is where memory becomes control. The rule leaves the document or registry and starts changing what work can proceed.

## When Memory Becomes Control

A suggestion affects one decision if somebody chooses to use it. Session context steers one run. A repository instruction affects future people and agents working in that repository. An organization-level policy can block work across many teams. Tests and evaluators can sit at any of these levels depending on where they run and what their result is allowed to stop.

The wider and more persistent the application, the more the system needs to answer:

- Who authorized this?
- Where does it apply?
- Can the person or agent affected see that it acted?
- Does it disappear with the session, or did it mutate the workspace?
- Who can override it, and what evidence does an override create?
- Who can narrow, supersede, or remove it?

Kubernetes' PodSecurityPolicy shows why those questions matter. PodSecurityPolicy was a built-in admission controller that let cluster administrators constrain security-sensitive pod settings. It could reject a pod that failed the policy or mutate some pod fields to create defaults. RBAC rules determined which policies a pod could use.[^psp]

The mechanism protected a real boundary: permission to create a pod should not automatically mean permission to run as root on a cluster node. But Kubernetes maintainers found that it was easy to grant broader permissions than intended, difficult to inspect which policy applied, and unclear when mutation would change a pod. The system also lacked a dry-run or audit mode that would make adoption safer. Kubernetes deprecated PodSecurityPolicy in version 1.21 and removed it in 1.25 after a migration period and the introduction of replacements.[^psp]

PodSecurityPolicy makes the authority problem easier to see because it was an executable policy system rather than an AI memory system. A rule can have a good reason, enforce a real safety boundary, and still have an application mechanism that people cannot inspect or govern well enough.

Context systems have the same problem when they silently inject instructions. If a guardrail appears in one session, the user should be able to see where it came from and remove it from that run. If the system writes the guardrail into a repository, that is a different act. It changes future work and requires authority over that workspace. Calling both actions "memory" hides the difference.

## A Sunset Clause Creates a Decision

The established name for a time-based revisit condition is a sunset clause. The test is what happens when the sun sets.

Automatic deletion is often the wrong answer. A stale preference and a safety-critical deployment check should not fail the same way. For a safety boundary, the sunset can require an authorized review while leaving the rule active until someone makes the decision. For lower-risk guidance, expiration may demote the rule back to advisory status unless an owner renews it.

Dates are only one kind of trigger. A rule should also come back for review when:

- people repeatedly override it for the same reason;
- the product, policy, threat model, or data contract changes;
- the rule's owner leaves and nobody accepts ownership;
- a supposedly golden case contradicts other accepted cases;
- the evaluator saturates or stops separating good performance from bad;
- the cost of enforcement becomes larger than the failure it prevents.

An override is especially useful evidence. It may show that somebody is evading a good rule. It may also show that the scope is wrong, the rule is stale, or the current case exposes a distinction the original policy missed. Logging the explanation gives the owner something to inspect. Counting overrides without reading them only creates another dashboard.

Chrome's removal of HTTP Public Key Pinning is a useful safety example. HPKP was designed to protect sites from certificate mis-issuance. Chrome removed it after finding low adoption and risks including denial of service and hostile pinning.[^hpkp] Retiring the guardrail did not mean certificate security stopped mattering. The guardrail's own failure modes changed the security decision.

Safety rules should have a higher bar for retirement. They do not earn permanence merely by being labeled safety.

## Automate the Review, Not the Authority

Uber's Piranha system provides a practical pattern, even though its subject is feature flags rather than counterexamples. A feature flag changes which code path runs. After an experiment ends or a feature reaches full rollout, the flag and the abandoned path can become stale. Uber found that those flags, their unreachable code, and their tests accumulated because cleanup rarely won the next prioritization decision. The company built Piranha to identify candidates and generate cleanup diffs.[^piranha]

The useful part is the handoff. Piranha records the flag, its expected surviving behavior, and its owner. A recurring pipeline generates a proposed diff and routes it to the original author. The author can accept the change, modify it, or reject it and mark the flag as not stale. Uber reported removing around 2,000 stale flags and their related code with this system.[^piranha] The automation initiates review without seizing specification authority.

The same pattern fits executable memory. An agent can find a golden case that has not run against recent versions, a guardrail with repeated overrides, a test owned by a team that no longer exists, or two promoted expectations that contradict each other. It can assemble the evidence and propose a change. A maintainer or domain expert still decides which behavior is correct now.

That boundary matters most when the agent can change both the implementation and the expectation. A failing case may mean the code is wrong. It may mean the fixture is wrong, the harness is lying, the expectation is incomplete, or the domain has changed. If the agent can rewrite the governing rule merely to make its patch pass, the feedback loop has stopped providing evidence.

Double-loop learning allows the governing specification to change. It does not give the implementer unilateral authority to change it.

## Give Each Constraint a Small Record

A small record is enough for the next reviewer to reconstruct the authority of the rule. The record should connect what created the constraint to where it acts and what will bring it back for review.

```yaml
source: the case, incident, decision, or evidence that created the rule
authorized_by: the person or role that approved promotion
failure_prevented: the behavior or risk the rule is meant to catch
scope: where the rule is valid and where it is not
applies_at: session, repository, workflow, environment, or organization
persistence: how long and where the rule survives
visible_when_applied: how the affected person sees that the rule acted
owner: who reviews new evidence and conflicting cases
override: who may override it and what explanation is retained
sunset_or_review: date, signal, version change, override pattern, or owner change
supersedes: earlier rules or cases this one replaces
history: renewals, revisions, overrides, demotions, and retirement decisions
```

The fields only help if the workflow uses them. A CI failure should link to the rule and its rationale. An injected instruction should identify its source. An override should reach the owner. A review trigger should produce a decision, not a notification that everyone learns to ignore.

Start smaller if necessary. For every promoted test, golden case, or guardrail, record five things: why it exists, where it applies, who owns it, how it can be overridden, and what will bring it back for review.

Then watch what happens while it is active. Does it still catch the failure it was created to prevent? Are people overriding it? Did the domain change? Is the owner still present? Does the rule still discriminate between good work and bad work, or has everyone learned to satisfy the check without improving the outcome?

The next time a failure becomes an executable rule, do not stop when the test passes. Promotion is the point where the rule begins exercising authority. Give that authority an owner, a visible application path, and a way to encounter new evidence.

Memory should survive a session. It should not outlive the reason that gave it authority without somebody noticing.

[^swe-verified]: OpenAI, ["Introducing SWE-bench Verified"](https://openai.com/index/introducing-swe-bench-verified/), August 13, 2024. OpenAI and the SWE-bench authors screened tasks for appropriately scoped tests and sufficiently specified issue descriptions; the article reports 93 experienced Python developers, 1,699 reviewed tasks, and a 500-task verified subset.
[^swe-retired]: OpenAI, ["Why SWE-bench Verified no longer measures frontier coding capabilities"](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/), February 23, 2026. The 59.4 percent finding applies to the 138 frequently failed tasks OpenAI audited, not to the full 500-task benchmark.
[^psp]: Kubernetes SIG Security, ["PodSecurityPolicy Deprecation: Past, Present, and Future"](https://kubernetes.io/blog/2021/04/06/podsecuritypolicy-deprecation-past-present-and-future/), April 6, 2021; Mahé Tardy, ["PodSecurityPolicy: The Historical Context"](https://kubernetes.io/blog/2022/08/23/podsecuritypolicy-the-historical-context/), August 23, 2022.
[^hpkp]: Chromium Blog, ["Chrome 72 Beta: Public class fields, user activation and more"](https://blog.chromium.org/2018/12/chrome-72-beta-public-class-fields-user.html), December 10, 2018. The HPKP removal ultimately shipped in Chrome 74.
[^piranha]: Lazaro Clapp, Manu Sridharan, Murali Krishna Ramanathan, and Rajkishore Barik, ["Introducing Piranha: An Open Source Tool to Automatically Delete Stale Code"](https://www.uber.com/us/en/blog/piranha/), Uber Engineering, March 17, 2020.
