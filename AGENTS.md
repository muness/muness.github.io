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
- SVG renders inline on GitHub and modern browsers; if you need maximum compatibility (some RSS/email clients), also export PNG: `d2 --sketch --pad 24 --omit-version viz/<name>.d2 assets/img/<name>.png`
- Embed in posts:
  - Live site: `![](/assets/img/<name>.svg)`
  - GitHub PR preview from `_posts/`: `![](../../assets/img/<name>.svg)`

---

# Cloud Atlas AI Stack

**No dive is too small for a dive prep.** Start every session with a dive:
```
$bottle dive fix       # Bug fix
$bottle dive plan      # Design work
$bottle dive explore   # Understanding code
```

This creates `.wm/dive_context.md` with your intent, relevant context, and suggested workflow. The 30 seconds of setup prevents 30 minutes of thrash.

---

## Task Tracking (ba)

**When to use:** Track discrete work items, multi-step tasks, or work spanning sessions.

**Commands:**
- `ba status` — see active tasks
- `ba list` — list all tasks
- `ba create "description" -t task` — create new work
- `ba claim <id> --session $SESSION` — take ownership
- `ba finish <id>` — mark complete

**Protocol:** Always track non-trivial work. If it has multiple steps or takes >5 minutes, create a task.

---

## Working Memory (wm)

**When to use:** Starting work, need context, after completing work.

**Commands:**
- `$bottle dive <intent>` — prep context before work
- `wm compile` — get relevant knowledge
- `wm distill` — extract learnings after work
- `wm review` — review current state

**Terminology:**
- **dive-prep** = preparing context before work
- **dive pack** = reusable bundle for a type of work
- **dive context** = session manifest from dive-prep

**Protocol:** Treat wm as external memory. Don't guess at past decisions—check wm first.

---

## Metacognition (superego)

**Mode:** Pull mode—evaluates only when explicitly requested.

**When to use:**
- Before committing to a plan or approach
- When choosing between alternatives
- Before non-trivial implementations
- Before claiming work is "done"

**Commands:**
- `/superego:review` or `sg review` — request review
- `sg prompt show` — see current prompt (currently: `writing`)

**Protocol:** Opt-in. Use for high-stakes decisions, architectural choices, or when you want a second opinion.

**Results:** `has_concerns: true` = STOP and show user; `has_concerns: false` = continue.

---

## Tool Interaction

These tools work together:
- **ba** tracks what you're doing
- **superego** reviews how you're doing it
- **wm** remembers what you learned

Start sessions with context: dive prep, check ba for tasks, then work.
