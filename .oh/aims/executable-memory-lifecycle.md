# Aim: Executable Memory Needs a Lifecycle

**Aim:** Maintainers of counterexample corpora, golden datasets, agent evaluations, regression cases, and executable guardrails will govern both the lifecycle and application authority of promoted constraints instead of treating them as permanently or invisibly authoritative.

**Why it matters:** Promoting an SME correction into an executable gate prevents the organization from forgetting a hard-won rule. If the domain, policy, or operating environment later changes, the same mechanism can turn obsolete learning into enforced scar tissue. If people cannot see who authorized the rule, where it is applied, or whether it changes a session, repository, or organization, memory can also become invisible control.

**Current State:** Teams deliberately add tests, golden outputs, policy checks, and counterexamples after failures, but the resulting artifacts may lack an owner, override path, review trigger, supersession record, or sunset clause. The system may then inject or enforce them without exposing their provenance, application scope, authorizer, or persistence boundary.

**Desired State:** Readers treat promotion as the beginning of specification authority, not the end of governance. Every promoted constraint has a visible source, authorizer, application scope, persistence boundary, owner, override path, and review condition. Maintainers observe how it behaves in operation and deliberately renew, revise, narrow, supersede, demote, or retire it when the evidence changes.

## Mechanism

**Change:** Publish a technical-conceptual essay that extends the learning-to-constraint argument through the full lifecycle of executable memory: observation, candidate learning, reviewed promotion, active enforcement, overrides and outcomes, review, and renewal or retirement. Add a section, **When Memory Becomes Control**, that distinguishes a suggestion, session context, repository instruction, and organization-level policy by who authorized it, where it applies, whether it persists, how its use is made visible, and who can override or remove it.

**Hypothesis:** Connecting familiar lifecycle mechanisms such as ownership, overrides, review triggers, and sunset clauses to explicit application authority will help teams preserve domain learning without confusing durability with permanence or context delivery with consent.

**Assumptions:**

- Stale or contradictory executable expectations are a meaningful problem in real regression, evaluation, or policy systems.
- Established research or documented practice can support claims about policy accumulation, test or golden-data staleness, and sunset clauses.
- At least one concrete example can show a previously valid expectation becoming incomplete, contradictory, or obsolete.
- Application at the session, repository, and organization levels creates meaningfully different authority and persistence boundaries.
- Retirement can remain deliberate and auditable rather than becoming automatic deletion of inconvenient checks.

**Misunderstanding Signal:** Readers interpret the proposal as deleting tests on a schedule, weakening safety boundaries, adding more centralized policy, or allowing agents to rewrite governing rules to justify their own output.

## Feedback

**Signal:** Readers can describe both the authority lifecycle and application path of a promoted case, identify who authorized it and who may override or retire it, and apply a small schema containing provenance, scope, persistence boundary, visibility, owner, review evidence, sunset or supersession conditions, and decision history.

**Timeframe:** Evaluate reader responses, template reuse, and examples of stale executable policy during the first month after publication.

## Guardrails

- Use the established term `sunset clause`; do not rename a familiar mechanism as a new invention.
- Do not make broad prevalence claims without evidence.
- Separate observations, candidate learning, and promoted constraints.
- Make active constraints inspectable at the point where they affect behavior.
- Distinguish session-local context from durable workspace mutation and require appropriate authority for each.
- Safety-critical rules must not expire automatically without an authorized review path.
- Preserve the history and rationale of superseded or retired cases.
- SMEs or maintainers retain specification authority; an agent may propose but must not unilaterally promote, revise, or retire a rule.
