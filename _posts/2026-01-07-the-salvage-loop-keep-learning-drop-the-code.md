---
title: "Ditch the Draft: How to Salvage AI Dev Wins from Context Collapse Hell"
date: 2026-01-07 11:00:00 -0500
author: muness
toc: true
comments: true
excerpt: "Code is now the cheapest artifact. The salvage loop keeps learning durable when AI refactors go off the rails."
---

## The Moment You Should Delete

Code is now the cheapest artifact in software. Learning is the scarce one. LLMs make exploration cheap, but they do not make remembering cheap. The context window is a ticking clock: it shrinks, the model forgets, and your branch fills with contradictions.

An experienced engineer described a refactor that started strong and then collapsed. He started skeptical. By the end he admitted he was behind because I had already built guardrails around the memory failure.

Then he told me about his refactor: he was turning a "scan" concept into a general task engine. The context window fell into single digits, the model drifted, and twenty files were modified. He knew he was off the rails.

He said the part out loud that many experts do not:

> "I recognize I should throw this away and start over, but there is stuff in there I want to keep. I do not know how to keep it. So I do not throw it away."

He wanted a timeout, the human move: pencils down, align, reset. But the model could not remember the last hour, and the context meter kept dropping. Six percent. Five. That is the gap.

He was not a novice. He had built large systems. The fact that he froze is the point: traditional expertise does not help when the tool forgets.

That is the trap. Experts are trained to protect the craft. The instinct is to salvage the code, not the learning. In an AI-accelerated world, that instinct is backwards.

The core shift is simple:

**Code is a draft. Learning is the asset.**

Two connected moves make this workable:

- **Working memory** is the system that preserves learning.
- **Throw away the code** is the behavior that becomes safe once learning is preserved.

Working memory is not the same as discarding code. It is the precondition that makes discarding rational. If the learning is captured, restarting is cheap. If it is not, restarting feels like loss.

## Why Experts Get Stuck Here

If you came up through the old world, you earned your competence by building things carefully. Rewrites were expensive and politically dangerous. You optimized for momentum, not exploration.

LLMs change the economics of exploration. The problem is that our instincts did not change with them.

Three legacy instincts now work against you:

1. **Craft pride.** You nursed a clever solution into existence. Deleting it feels like erasing competence.
2. **Sunk cost.** Every file touched becomes a reason to push forward, even when the direction is wrong.
3. **Fear of forgetting.** The one good idea is buried in a mess. Without a way to save it, restart feels like amnesia.

That last one is the true constraint. It is a memory problem, not a code problem.

## The Salvage Loop

The salvage loop is a workflow pattern that makes it safe to discard bad paths without losing the learning that created them. It assumes you treat **working memory as the primary artifact**.

### Drift Signals

If you see these, you are probably past the point of diminishing returns:

- The context window hits the red zone (7 percent, 6 percent) and the model contradicts itself.
- The same files churn without convergence.
- Fixes create new breakages faster than they resolve old ones.
- You cannot explain the current direction in one sentence.

### The Loop

1. **Detect drift.** Name the moment when the path feels wrong. Do not debug forever.
2. **Extract the learning.** Ask: what did we discover that is still true?
3. **Encode it in working memory.** Save the learning as a short spec, a guardrail candidate, or a decision log.
4. **Restart clean.** New branch, new prompt, new plan. Use only the saved learning.
5. **Verify fast.** Run a quick test to validate the new direction before deepening.

The key is that you do not throw away the path without writing down what you learned from it. That is what makes the discard safe.

### A Concrete Example (Task Refactor)

In the task refactor, the salvage output might look like this:

- **Short spec:** "We need a Task interface with schedule semantics that can replace Scan without breaking the queue. It must support X, Y, Z and avoid coupling to scan-specific fields."
- **Guardrail candidate:** "Do not retrofit the scan table into the task scheduler. It made scheduling ambiguous and tangled the queue."
- **Decision log:** "We tried adapting the scan model in place. It created hidden coupling and made scheduling ambiguous. We are moving to a new task abstraction instead."

Then you throw away the branch. The next attempt starts with only those artifacts. You did not lose the good idea. You extracted it.

### A Concrete Win (Unified Hi-Fi Control)

I built the bus architecture for Unified Hi-Fi Control by telling the model what I wanted, then coaching it to write the design doc first. It started as a Roon bridge. I refactored the bus so other backends could slot in. Lyrion and OpenHome were working in an afternoon. That is not luck. That is a workflow that captures learning, then lets you throw away the failed paths without fear.

### A Prompt That Helps

If you are using an LLM, make it do the salvage work explicitly:

```text
Summarize what we learned from this path. Output:
1) a short spec for the next attempt,
2) a guardrail candidate,
3) a decision log entry.
Keep it under 15 lines.
```

### A Tactic I Use When I Cannot Let Go

If there is one good pattern buried in a failed path, I spawn a subagent or a clean branch and ask it to extract only that pattern. Everything else gets deleted. This is the smallest possible salvage, and it keeps the restart fast.

## Working Memory Needs a Home

"Working memory" is just a name for durable local knowledge. It is the context you want the AI to carry forward even when its token window collapses.

It should include:

- **Aims** (what mattered)
- **Constraints** (what must not happen)
- **Wisdom** (what you learned the hard way)
- **Pain points** (what broke and why it hurt)
- **Decision logs** (what changed, and what was true at the time)

The tool matters less than the habit. What matters is that these artifacts live together, tied to the context of what was happening when you wrote them. That is what makes a restart feel safe instead of expensive.

## The Promotion Gate (Learning vs Constraint)

Not all learning should become a rule. This matters because experts often freeze everything they learn into policy. That is how you end up with scar tissue.

A useful gate:

- **Learning stays fluid** until it repeats or becomes irreversible.
- **Constraints become explicit** only when you can name the boundary, the reason, and the revisit trigger.

Example from the task refactor:

- **Learning (keep fluid):** "Reusing scan fields for tasks blurred scheduling semantics and made retries hard to reason about."
- **Constraint (promote later):** "Task execution must not depend on scan-only metadata." Reason: it caused ambiguous scheduling. Revisit after the new task model covers the needed fields and has run clean for a few iterations.

If you want a deeper version of this split, see [Splitting Learning from Constraint]({% post_url 2025-12-28-splitting-learning-from-constraint-in-an-ai-world %}).

## Objections and Limits

- **Is this overhead?** Yes. Use it when the path is non-trivial: multi-day work, many files touched, or architecture changes. Skip it for small fixes.
- **What if we are a small team?** A shared Markdown doc or a repo-local notes file is enough. Centralization matters more than tooling.

## A Minimal Starter Template

If you want to try this without any tooling, keep a small salvage note after every dead end. Store it somewhere centralized: a working memory doc, a decision log, a PR description, or a plain text file in the repo. The key is that it stays tied to the aim and context at the time.

<details class="appendix" markdown="1">
<summary><strong>Minimal Salvage Note (Copy/Paste)</strong></summary>

```text
Aim / context:
What we tried:
What broke or drifted:
What we learned that is still true:
What to keep next time (spec or constraint):
What to throw away:
```

</details>

That is enough to start. Even a two-paragraph salvage note is a working memory system in miniature.

## Close

Next time your refactor derails, salvage for 15 minutes, then delete. Protect the learning, not the code.
