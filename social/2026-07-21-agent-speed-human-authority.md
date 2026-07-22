---
title: "Agent speed and human authority"
author: muness
status: published
artifact: social-thread
platforms:
  x:
    format: thread
    url: https://x.com/muness/status/2079722717528703345
  threads:
    format: thread
    url: https://www.threads.com/@muness/post/DbEyQ2mj3aL
paper_url: https://arxiv.org/abs/2607.15854
overview_url: https://gist.science/paper/2607.15854
mission_source: _posts/2025-09-16-alignment-is-the-constraint.md
---

## Working brief

- **Reader:** People building or operating agentic software, especially technical leaders, product owners, and researchers.
- **Job:** Show how domain experts improved correctness and shipped production changes in under a day, explain why rewritable code and one active fix at a time mattered, and connect this system to the larger research mission.
- **Center:** Developers built the system and harness. Product and operations SMEs supplied every business rule and decided what `correct` meant.
- **Mission:** Keep human decisions attached to the code, checks, and evidence agents use to change software. Alignment exists when the approved behavior, implementation, and feedback agree.
- **Confidentiality:** Do not name the company, product, people, counterparties, or specific financial workflow. Do not add clues that make them identifiable.
- **Evidence supplied for this draft:** 15 PRs in three weeks; accuracy moved from roughly 25% to roughly 90%; each correction shipped from defect detection to production in under a day.
- **Copying:** The numbered Markdown headings label the sequence; they are not part of the posts.

## Thread

### 1/13

A product owner and ops SMEs shipped 15 PRs in 3 weeks. Each went from defect detection to production in under a day.

Accuracy on one production workflow moved from ~25% to ~90%.

We engineers built the v0 and a harness. SMEs wrote every business rule PR.

### 2/13

With the harness, the product owner corrects production behavior instead of submitting a ticket.

When a case failed, she spelled out what should have happened, reviewed the proposed rule and code change, and owned the result after it shipped.

### 3/13

Git and tickets preserve the path. Regressions preserve selected consequences. The sketch is the current policy a new agent can build from.

Test it: delete the code, withhold the history, rebuild from the sketch, then use regressions to find what the rebuild lost.

### 4/13

The loop starts in a custom web app. The SME points to a production input. The app pulls it into dev, runs the current logic, and shows the result.

She works from the actual failed case. No one has to recreate the input or stage it by hand.

### 5/13

She writes the correction in English. Sonnet turns it into expected JSON. She reviews and approves that output.

Her approval makes the case a counterexample: the current result is wrong, and the expected JSON records her decision.

### 6/13

Next, custom code plus Opus compares the actual and approved JSON for semantic equivalence. It ignores irrelevant differences and explains the ones that change the result.

If they differ, the app renders a `Fix in Cursor` button with the case GUID.

### 7/13

`Fix in Cursor` passes the case GUID through the Cursor protocol. A repo skill loads the case and sketch.

The sketch is authoritative: approved rules live there. The agent changes it first, then repairs or regenerates code. Code can be thrown away; the rules must survive.

### 8/13

The runner works one fix at a time, in two lanes:

1. Sketch + implementation: does the revised rule fix the active case?
2. Regression: do prior approved cases still pass?

The rules can be complicated. The change stays small. Both lanes must pass.

### 9/13

The harness posts evidence to the PR: expected and actual outputs, the semantic diff, results from each implementation path, and named regression results.

Product and operations review the business behavior. Developers review the code and harness.

### 10/13

Rewritable code and a one-fix-at-a-time loop improved correctness and efficiency: accuracy rose from ~25% to ~90%; 15 fixes shipped in 3 weeks, each in under a day.

This covered one part of a larger system. The rules inside it were still complicated.

### 11/13

She can turn her judgment about one failed case into production behavior before the day ends.

That speed raises the stakes: she must decide whether a failure is an exception or evidence that a business rule must change.

### 12/13

Alignment means three things match:

Aim: the behavior the SME approved
Mechanism: the sketch, code, and handoff protocol
Feedback: the semantic diff, regressions, and PR evidence

When they match, the team can ship quickly without guessing.

### 13/13

Mission: keep human judgment attached to the code, checks, and evidence agents use to change software.

Agents are already fast. Alignment is the constraint.

Paper:
https://arxiv.org/abs/2607.15854

Overview:
https://gist.science/paper/2607.15854

## Editorial handoff

- **Structure applied:** production result -> product-owner role change -> recurring agent failure -> production case staged in dev -> English correction -> approved expected JSON -> semantic diff -> case-GUID handoff to Cursor -> dual-lane gate -> PR evidence -> shipping speed -> responsibility -> Aim/Mechanism/Feedback -> research mission.
- **Voice mode:** agent/tool/process; artifact-first, mechanism-first, validation before confidence, human ownership inside the loop.
- **Preserve:** the opening numbers, `under a day` as defect detection through production, developer/SME division of labor, custom web app and harness, production-to-dev staging, SME correction in English, Sonnet/Opus conversion to expected JSON, SME approval, custom-plus-Opus semantic diff, `Fix in Cursor`, case-GUID handoff through the Cursor protocol, repository skill, sketch authority, rewritable code, one active fix at a time, dual-lane runner, PR evidence, the ~25% to ~90% correctness gain, the boundary of one part of a larger system, the `Alignment Is the Constraint` mission, confidentiality boundary, and both paper links.
- **Do not add:** CatSynth, the grant, nonprofit plans, client-identifying details, or a generic claim that product people learned to code.
- **Next pass:** Read aloud and cut any post that feels like documentation rather than an argument. Proofread only after the technical descriptions are accepted.
