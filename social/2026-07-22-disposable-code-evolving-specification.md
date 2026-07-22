---
title: "Disposable code / evolving specification"
author: muness
status: published
artifact: social-post
platforms:
  linkedin:
    format: post
    typefully_url: https://typefully.com/?d=10016233&a=321935
    published_url: https://www.linkedin.com/feed/update/urn:li:share:7485740393595211777/
    published_at: 2026-07-22T16:59:51.476Z
paper_url: https://arxiv.org/abs/2607.15854
overview_url: https://gist.science/paper/2607.15854
related_social: social/2026-07-21-agent-speed-human-authority.md
mission_source: _posts/2025-09-16-alignment-is-the-constraint.md
---

## Working brief

- **Reader:** Chad Fowler's audience and people building agentic, policy-heavy software.
- **Job:** Connect Chad's regenerative-software ideas to a governed method for evolving specifications and regressions as production exposes missing rules.
- **Claim:** Code is disposable. The durable specification must change as the team learns, and a human decides what becomes policy.
- **Evidence:** In one bounded production workflow, product and operations SMEs shipped 15 PRs in three weeks; accuracy moved from roughly 25% to roughly 90%; each correction shipped from defect detection to production in under a day.
- **Method:** The roughly 25% v0 was the intended starting point, not a failed implementation. Developers built the thin initial implementation and custom harness so product and operations SMEs could discover and encode the governing rules from real production cases.
- **Control loop:** The product owner approves one counterexample at a time. The agent changes the authoritative sketch first; the active case and prior approved cases run in separate lanes; both must pass before the PR ships.
- **Ownership:** Engineers built v0, the custom harness, and the safety boundaries. Product and operations SMEs supplied every business rule and decided what `correct` meant.
- **Confidentiality:** Do not name the company, product, people, counterparties, or specific financial workflow. Do not add clues that make them identifiable.
- **LinkedIn formatting:** LinkedIn and the Typefully API use plain text for this post. The post body uses no Markdown formatting.

## LinkedIn post

Recently, Chad Fowler and I talked about how specifications evolve when the code generated from them is disposable. If an agent rewrites the implementation, how does the next version inherit what the team learned from users and production failures instead of doing whatever the latest prompt asks?

For one bounded workflow in a larger system, a client team and I developed a loop: each approved production failure changed the authoritative sketch before an agent repaired or rewrote the code. The client's developers and I built a thin v0 and custom web harness; ~25% accuracy was the starting point by design. Product and operations SMEs supplied every governing rule. In three weeks they shipped 15 PRs and reached ~90%; each fix shipped to production within a day of detection. The rules were complicated; every small change began with a real production case.

Chad's Phoenix Architecture identifies what must survive deletion: specification, evaluation, context boundary, and provenance. His later posts add two facts: old code contains forgotten lessons, and production evidence should shape the next generation. Specifications are not finished when the first version ships; users and production expose missing rules.

The harness lets the product owner correct production behavior instead of filing a ticket:

→ She selects the actual production input; the app stages it in dev, runs the current logic, and shows the output.
→ She writes what should have happened in English. Sonnet or Opus turns it into expected JSON; her approval makes the case a counterexample.
→ Custom code plus Opus produce a semantic diff that ignores irrelevant JSON differences and explains the ones that change the result.
→ Clicking “Fix in Cursor” passes the case GUID through the Cursor protocol; a repo skill loads the case and authoritative sketch.
→ The agent changes the sketch first, then repairs or rewrites the implementation.
→ The runner takes one counterexample at a time. Active-case and regression lanes must both pass; the PR gets expected and actual outputs, the semantic diff, implementation results, and named regressions.

Git and tickets preserve how change happened. Regression catches a known mistake when it reappears; it cannot give the agent a general rule for unseen cases. The sketch carries that rule as current policy and input to the next implementation. The archive keeps approved cases and approvers without replaying full history. Delete the code, withhold history, rebuild from the sketch, then let regressions expose what the sketch failed to carry.

She can turn one failed case into production behavior the same day. That speed raises the stakes: is it an exception or a business rule that must change? Product and operations review behavior; developers review code and harness.

Code stays disposable because the decision does not. It remains attached to the sketch, checks, and evidence agents use to change software.

Agents are already fast. Alignment is the constraint.

## First comment

Chad's Phoenix Architecture:
https://aicoding.leaflet.pub/

The paper, *Agentic Synthesis against Counterexample-Supplemented Sketches*:
https://arxiv.org/abs/2607.15854

Short overview:
https://gist.science/paper/2607.15854

## Source trail for comments

1. **The Phoenix Primitives** — specification, evaluation, context boundary, and provenance survive deletion: https://aicoding.leaflet.pub/3mjfruwwuck2d
2. **The Implementation Remembers** — mature implementations contain lessons the organization has forgotten: https://aicoding.leaflet.pub/3mobohx4fq22x
3. **Production Is a Compiler Input** — production evidence should influence what the system generates next: https://aicoding.leaflet.pub/3mjx4erlboc2l
4. **The Regenerative Grain** — regeneration needs a bounded unit that is safe to delete and verify: https://aicoding.leaflet.pub/3mfai4nqg6224
5. **The Deletion Test** — delete the implementation and inspect what survives: https://aicoding.leaflet.pub/3md5ftetaes2e
6. **Evaluations Are the Real Codebase** — durable evaluations preserve behavior across implementations: https://aicoding.leaflet.pub/3mb526js42k26

## Possible comment on Chad's post

For business policy, production supplies evidence, not authority. A domain owner decides whether a failure is noise, an exception, or a missing rule, then approves what becomes generative input. Otherwise, drift detection quietly becomes automated policy-making.

## Typefully handoff

- Draft: https://typefully.com/?d=10016233&a=321935
- Platform: LinkedIn only
- State: Published at 2026-07-22T16:59:51.476Z
- Published post: https://www.linkedin.com/feed/update/urn:li:share:7485740393595211777/
- Local LinkedIn body: 2,997 characters
- Sync state: The published LinkedIn post matches the local copy. Typefully's API supports only one LinkedIn post, so the prepared first comment remains in the draft scratchpad for manual posting.
- Personal mention limitation: Typefully can mention only LinkedIn people whose accounts are connected to the Typefully team. Chad's name is plain text in the API-created draft. Replace it with a native LinkedIn mention if publishing outside Typefully.
