# AGENTS.md - AI Agent Guidance

This file provides context and protocols for AI agents working in this repository.

## Project Context

This is a Jekyll blog (muness.github.io). Posts live in `_posts/` with YYYY-MM-DD prefixed filenames.

---

## Diagrams (D2)

Diagrams live in `viz/` as `.d2` sources and render to `assets/img/` as **sketch** SVGs.

- Example: `viz/splitting-learning-from-constraint.d2`
- Render (sketch SVG): `d2 --sketch --pad 24 --omit-version viz/<name>.d2 assets/img/<name>.svg`
- Check/format: `d2 validate viz/<name>.d2` and `d2 fmt viz/<name>.d2`
- Embed in posts:
  - Live site: `![](/assets/img/<name>.svg)`
  - GitHub PR preview from `_posts/`: `![](../../assets/img/<name>.svg)`

---

## ba - Task Tracking

**When to use:** Track discrete work items, especially for multi-step tasks or work that spans sessions.

**Protocol:**
- Check for existing tasks: `ba list`
- Claim a task before starting: `ba claim <id>`
- Create tasks for new work: `ba create "description" -t task`
- Complete when done: `ba complete <id>`

---

## superego - Metacognitive Advisor

**When to use:** Before commits, PRs, or when you want a second opinion on approach.

**Protocol:**
- Currently in **pull mode** (reviews on request, not automatically)
- Request review: `/superego:review` or `sg review`
- Switch modes: `sg mode push` (auto) or `sg mode pull` (manual)
- Base prompt: `writing` (configured for blog/content work)

---

## wm - Working Memory

**When to use:** Captures learnings, decisions, and context automatically. Query when starting sessions or when you need project history.

**Protocol:**
- Review state: `wm review`
- Extract learnings: `wm extract`
- Prepare dive context: `wm dive-prep`
- Working memory accumulates automatically during work

---

## Tool Interaction

These tools work together:
- **ba** tracks what you're doing
- **superego** reviews how you're doing it
- **wm** remembers what you learned

Start sessions with context: check ba for tasks, wm for recent learnings, then work.

---

# Cloud Atlas AI Stack

## Quick Start: Dive First

**No dive is too small for a dive prep.** The metaphor comes from scuba diving: you prep before you dive, you don't just splash in. Even a quick bug fix benefits from explicit intent.

Start every session with a dive:
```
$bottle dive fix       # Bug fix
$bottle dive plan      # Design work
$bottle dive explore   # Understanding code
```

This creates `.wm/dive_context.md` with your intent, relevant context, and suggested workflow. The 30 seconds of setup prevents 30 minutes of drift.

---

## Task Tracking ($ba)

**When to use:**
- At session start: `$ba status` to see active tasks
- Before starting work: Check what's ready to claim
- When creating tasks: `ba create` for each distinct piece of work
- During work: `ba claim` to take ownership, `ba finish` when done

**Protocol:** Always track non-trivial work. If a task has multiple steps or will take >5 minutes, create a task.

## Working Memory ($wm)

**When to use:**
- Starting work: `$bottle dive <intent>` to prep context
- Need context: `wm compile` for relevant knowledge
- After completing work: `wm distill` to extract learnings
- Questions about past work: Check `wm compile` first

**Dive terminology:**
- **dive-prep** = preparing context before work
- **dive pack** = reusable bundle for a type of work
- **dive context** = session manifest from dive-prep

**Protocol:** Treat wm as your external memory. Don't guess at past decisions - check wm first.

## Metacognition ($superego)

**Mode:** Pull mode - evaluates only when explicitly requested.

**When to use $superego:**
- Before committing to a plan or approach
- When choosing between alternatives
- Before non-trivial implementations
- When the task feels complex or uncertain
- Before claiming work is "done"

**Protocol:** Superego is opt-in. Use it for high-stakes decisions, architectural choices, or when you want a second opinion. It catches premature commitment, scope creep, and misalignment.

**Results:** `has_concerns: true` = STOP and show user; `has_concerns: false` = continue.
