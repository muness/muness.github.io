# Aim: You Cannot Learn From a Counterexample You Cannot Run

**Aim:** Teams building agent-assisted domain systems will treat access to an executable feedback environment as part of the learning system, instead of waiting for late manual testing or trying to compensate with more prompting.

**Why it matters:** Sketch-CE can preserve an SME correction as executable repository memory only when the repository can run the case. In systems such as SQL Server-backed business workflows, expensive or inaccessible test environments delay the first useful feedback and keep agents dependent on developer-mediated validation. Teams can keep generating candidate changes, but without a faithful way to run counterexamples they cannot converge on evidence.

**Current State:** A product or domain expert describes expected behavior in a ticket and playbook, an agent proposes a stored-procedure change, and the team learns whether it works only after a developer reaches a suitable SQL Server environment and performs another manual test. More generation produces more candidate artifacts, not a tighter learning loop.

**Desired State:** Readers can recognize a missing or expensive test environment as the active constraint, construct an honest partial simulator where appropriate, and preserve reviewed scenarios so future repairs start with executable domain cases rather than a blank prompt.

## Mechanism

**Change:** Publish a technical case study connecting the counterexample-supplemented-sketch method to the SQL simulator: ticket and playbook to scenarios, synthetic records, expected behavior, SQL adaptation, simulated execution, comparison, explicit unsupported cases, and eventual verification against real SQL Server.

**Hypothesis:** Showing the exact feedback path and its fidelity limits will help readers recognize when executable feedback, rather than generation, is the active constraint. It will help them distinguish improving the agent from constructing the environment the agent needs to learn and make the progression from one-off simulator to durable counterexample harness concrete.

**Assumptions:**

- The current prototype and its artifacts provide enough evidence to describe the mechanism without inventing outcomes.
- The relationship to Sketch-CE is accurate: the simulator supplies an earlier gate where the real execution environment is the bottleneck.
- Representative cases can be reviewed by people with domain authority.
- The article can distinguish harness limitations, fixture or translation failures, behavioral mismatches, and incorrect expectations.

**Misunderstanding Signal:** Readers leave thinking that DuckDB replaces SQL Server, that the article is mainly about SQL translation, or that a clever simulator is sufficient without preserving reviewed cases and verifying against the real database.

## Feedback

**Signal:** Readers can restate why a team that keeps generating without executable feedback cannot converge, identify analogous environment constraints in their own systems, and discuss simulator fidelity and case promotion rather than proposing only better prompts or larger context windows.

**Timeframe:** Evaluate reader responses and concrete adaptations during the first month after publication.

## Guardrails

- SQL Server remains the final execution authority; simulation supplies earlier falsification, not production proof.
- Do not claim observed product-team behavior, defects found, or durable regressions unless the evidence exists.
- Keep generated expectations subject to domain review.
- Report unsupported simulator behavior explicitly.
- Distinguish building the simulator from making executable cases durable workflow state.
- Keep the constraint-shift diagnostic tied to this concrete feedback environment rather than expanding the article into a general bottleneck essay.
- Preserve the bounded claims of the Sketch-CE paper.
