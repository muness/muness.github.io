---
comments: true
date: 2023-05-21 17:00:00 +0500
author: muness
title: 'Intent Engineering: From Vibe Coding to Productive Outcomes'
---

## Introduction

Over Memorial Day weekend, I tried achieving flawless DSD-512 audio playback using an advanced setup (a powerful mini PC and an external GPU). I relied heavily on “Vibe Coding”—rapidly iterating with AI tools like ChatGPT. The speed felt amazing, but without guardrails, it quickly led me astray.

You might be skeptical of “Vibe Coding”—and I get it. Without structure, using AI to prototype rapidly can feel chaotic, leading us into countless rabbit holes:

* Following unvetted AI advice, I disabled my graphics card and ended up spending hours recovering basic functionality.
* I impulsively bought a $40 audiophile USB cable hoping for improvements that never materialized.
* Tweaking endless parameters and kernel flags buried me deeper into complexity, costing valuable weekend hours.

But dismissing AI-driven iteration entirely because of these misadventures would be throwing out the baby with the bathwater. The trick isn’t avoiding AI: it’s using it intentionally.

## Why Rapid AI Iteration Often Goes Sideways

Rapid action feels empowering, but without intentional checkpoints, we often end up solving problems that don’t matter—or worse, creating new ones. Here are examples from my vibe coding experience this weekend:

| Common Mistake           | Real-world Example                                 | Impact                      |
|-------------------------|---------------------------------------------------|-----------------------------|
| Blindly following AI    | Disabling the graphics card based on AI advice    | 2 hrs troubleshooting       |
| Getting overwhelmed     | Endless conflicting kernel settings                | 3 hrs lost productivity     |
| Impulse purchasing      | Unnecessary high-end cables                         | Wasted $40, no improvement  |
| Stuck in short-term solutions | Windows hacks masking deeper kernel issues  | Repeated problems over 4+ hrs |

This kind of frantic activity without clear direction is like driving fast without GPS—you’ll only get lost more quickly.

### Taming the Chaos: Intentionality and Structure

To help tame the chaos, I embrace [Design in Practice](https://muness.com/posts/design-in-practice-writeup/), a structured method that breaks problem-solving into clear, manageable phases. I was first exposed to this practical problem-solving approach years ago while working adjacently to the Datomic / Clojure team.

This framework encourages pausing to think strategically—enough to keep focus without slowing momentum:

1. Describe: Clearly state symptoms and context.
2. Diagnose: Generate hypotheses and quick tests.
3. Delimit: Narrow down to a specific problem.
4. Direction: Define clear success criteria and constraints.
5. Design: Outline your solution approach.
6. Develop: Take the smallest practical action and validate immediately.

These phases encourage pausing to think strategically: just enough to avoid getting lost in constant action. I am not as structured about it as the practice suggests: I focus more on it as a way to document my _current_ understanding of the problem and solution. It forces me to write things down, helping me use my peers as sounding boards and to clarify my own thinking.

### Intent Engineering: Adding Intentionality to AI Iteration

As ChatGPT and other LLMs arrived on the scene, I naturally began experimenting with them through chat interfaces and an Obsidian-backed server setup. These tools extended my use of Design in Practice—previously limited to conversations with peers and personal notes—into a powerful, AI-augmented “Second Brain,” helping me document, clarify, and iterate my thinking _and execution_ more intentionally and effectively.

Rather than jumping straight into rapid-fire experimentation (Vibe Coding) without guardrails, I now blend fast iterations with structured reflection and checkpoints. I call this **Intent Engineering**, and it looks like this:

* Clarify Intent: Begin by clearly stating your goal in a single sentence. This keeps your efforts focused and aligned.
* Burst: Use AI to rapidly generate ideas, suggestions, or solutions related to your intent.
* Pause & Reflect: Take a moment to critically evaluate each idea—ask yourself: Is it necessary? Is it sufficient? Does it fit the strategic goal?
* Structured Pass: Apply the six-phase Design in Practice framework to ground and organize your best ideas before moving forward.
* Iterate: Alternate between quick AI-powered bursts and thoughtful pauses, cycling until your intent is fully realized.

Analogy: It’s like skiing downhill—speed can be exhilarating, but control and balance ensure you stay on the right trail.

## Common Skepticism FAQ

* “Isn’t Vibe Coding reckless?”: It can be—but only if it’s unstructured. When guided by intentional reflection, it becomes incredibly powerful.
* “Why trust AI if it can give bad advice?”: Think of AI as a tool, not as a replacement for judgment. **Design sense, nuance, judgment, and comfort with disagreeableness** are now more important than ever. AI amplifies human decisions, so quality input leads to quality outcomes.
* “Won’t structured processes slow me down?”: Brief, deliberate pauses actually speed you up by preventing wasted effort. You’ll solve real problems instead of chasing unproductive rabbit holes.

## From Prompt Engineering to Intent Engineering: An Evolutionary Journey

Early on, we learned Prompt Engineering, carefully crafting questions to get better results from AI models. Prompt Engineering alone, though, wasn’t enough to reliably solve nuanced, real-world problems.

We embraced a series of increasingly advanced—and often messy—approaches:

* RAG (Retrieval-Augmented Generation): Adding context from external documents improved responses but required tedious manual selection to avoid overwhelming the AI.
* Massive Context Windows: Trying to dump entire projects into AI’s memory —quickly became inefficient, costly, and impractical. Just as damning responses would quickly deteriorate in quality as the context grew too large.
* Graph-based approaches: Leveraging knowledge graphs showed promise but were operationally complex and difficult to manage, limiting their practical use.
* Chained Prompts and Automated Prompt Generation: Having AI generate or modify its own prompts streamlined certain tasks but risked losing strategic oversight and clarity.
* Vibe Coding: Rapid-fire, iterative experimentation with AI. It felt fast and freeing initially but quickly spiraled into unstructured chaos, leading to wasted time and misguided efforts.

Each of these steps provided valuable lessons, gradually shaping an understanding of how to integrate AI tools effectively:

* Prompt Engineering taught careful articulation.
* RAG and Context Windows emphasized targeted context.
* Graph-based Approaches highlighted structured relationships.
* Chained Prompts illustrated automation’s promise and peril.
* Vibe Coding stressed the critical need for clear intention and structured reflection.

Intent Engineering combines clear intent, rapid experimentation, structured checkpoints, and reflective evaluation. It acknowledges the limitations and strengths of each preceding method, balancing strategic thought with tactical execution.

## Invitation to Skeptics: Try Intent Engineering for Yourself

You don’t have to dive headfirst into AI-driven iteration overnight. Start small: pick one challenge, clearly state your intent, and use the structured Design in Practice steps to stay grounded.

Give it a try: you might discover, as I did, that AI combined with intentional pauses is an unstoppable combination for effective, efficient problem-solving.
