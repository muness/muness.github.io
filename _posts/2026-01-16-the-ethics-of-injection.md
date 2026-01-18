---
comments: true
date: 2026-01-16 09:15:00 -0500
author: muness
endeavor_id: 84b86f89-9479-4ba1-a539-b5f32c33ee6c
title: "The Ethics of Injection: Helpful Defaults vs. Workspace Autonomy"
toc: true
hidden: true
excerpt: "If your system can inject context into a session, it can also violate user intent. The line isn’t “never inject”; it’s “inject with consent, visibility, and reversibility.”"
---

## Hook (2–3 sentences)

AI workflows live and die by the quality of context. The temptation is obvious: inject the “right” defaults automatically. But silent injection is also a form of control. If the user can’t see what changed, consent is imaginary.

## Outline

### 1) What We Mean by “Injection”

- Session-start hooks
- Auto-generated instructions
- Writing into project files (AGENTS, configs, prompts)

### 2) The Failure Modes

- Invisible behavior changes (“why is it doing this?”)
- Contaminated repo state
- Undeclared policy shifts (safety, privacy, tone)

### 3) The Consent Protocol (Minimum Viable Ethics)

- Visible: show what will be injected and why
- Optional: allow opt-out per repo and per session
- Reversible: easy rollback of injected artifacts
- Scoped: only touch files under explicit control

### 4) A Practical Design Pattern

- Prefer “suggest, then install” over silent writes.
- Prefer “session artifacts” over “repo mutation,” unless requested.

### 5) Why This Matters

Terraforming is not just capability—it’s trust.
