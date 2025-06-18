---
comments: true
date: 2025-06-18 16:00:00 +0500
author: muness
title: 'Reducing Transaction Costs with AI-Native Workflows'
pin: true
---

> *“Firms exist because the market is expensive.”* — Ronald Coase, 1937
>
> *“Adding manpower to a late software project makes it later.”* — Fred Brooks, 1975
>
> *“Institutions are the humanly devised constraints that structure political, economic, and social interactions. They include both formal rules like laws and constitutions, and informal constraints like customs and social norms"* — Douglass North, 1992

---

## Overview

This narrative integrates three classic economic lenses, Brook’s Law, Coase’s Transaction-Cost Theory, and North’s Institutional Framework with practical R\&D efforts (Cloud Atlas, Asgard, Intent Engineering) we’ve been exploring since ChatGPT hit the scene.
Our thesis: *AI-native workflow tools can help teams spend less time on overhead and more time doing meaningful, high-impact work. By reshaping how organizations coordinate, these tools shift the focus from bureaucratic friction to flow, empowering people to do more important, rewarding work.*

---

## Delivering more quickly

Fred Brooks famously observed: "Adding manpower to a late software project makes it later."

This assertion encapsulates two distinct constraints that emerge as teams grow:

| Constraint Type                 | What It Is                                                                                                                           | Optimizable?                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| **Physical / Cognitive Limits** | Humans can manage only limited concurrent conversations; meetings are serial; attention and comprehension are finite.                | **Partially** — some fundamental limits remain, though the impact can be reduced. |
| **Transaction Costs**           | Time and effort spent in searching, negotiating, aligning, and policing work. This grows approximately with the square of team size. | **Yes** — firms and tools continuously optimize these.                            |

The opportunity today lies precisely in optimizing these transaction costs, where AI-native tools can radically flatten Brook’s curve.

*Transition →* Optimizing these costs is central to why firms exist, as Ronald Coase explained next.

## Why Firms Even Exist

Coase argued that firms exist to internalize market transactions because doing so is less costly than using external markets. Three main internal transaction costs:

| Cost Category              | Classical Example                    | Engineering Pain                                        |
| -------------------------- | ------------------------------------ | ------------------------------------------------------- |
| **Search / Information**   | "Who can do X effectively?"          | Searching documentation, scattered expertise            |
| **Bargain / Negotiation**  | Drafting contracts, clarifying scope | Sprint planning, frequent spec clarifications           |
| **Policing / Enforcement** | Audits, enforcement of standards     | Extensive code reviews, QA processes, compliance audits |

As organizations scale, these costs balloon, exacerbating the challenges Brooks observed.

*Transition →* Lowering these costs isn't purely structural; it requires effective rules and processes—North’s territory.

---

## Institutions as Cost-Compressors

Douglass North extended Coase’s insights, highlighting that both formal and informal institutional rules significantly reduce transaction costs by:

1. **Improving Information Flow** — Reducing information asymmetry.
2. **Monitoring and Verification** — Ensuring behavior aligns with organizational intent.
3. **Aligning Incentives** — Encouraging desirable behaviors naturally.
4. **Adaptability** — Allowing rules to evolve with changing environments.

Our hypothesis: AI-native tooling can target each lever directly revolutionizing the impact of *the firm.*

---

## Dynamic Context at Prompt-Time

Cloud Atlas was a concrete step (our 3rd after attempts using cron-based local cooredinators, and pipedream) into this exploration. It aimed to embed rich, dynamic context directly into AI interactions, thus dramatically reducing transaction costs associated with information search and clarification.

In practice, Cloud Atlas enabled:

* **Markdown-Driven Prompts**: Embedding  prompts within Obsidian notes, ensuring that each interaction with AI had immediate and  context.

* **Canvas Single-Shot Prompts**: Explicitly constructing system, user, and context blocks visually, facilitating iterative prompt design and validation. Canvas further allowed a unique technique we’ve yet to see in other tools: chaining the output of one prompt as one of the inputs to another. All allowed optional, user-enabled expansion of backlinks or forward links.

* **Interactive Mode**: Allowing users to dynamically select backlinks, forward-links, or external references to augment prompts, minimizing the friction of context gathering and refinement.

Put together, these features transformed local wiki into dynamic interaction, dramatically reducing informational overhead and negotiation time traditionally required for prompt crafting.

## AI-Assisted Workflow Composition

Asgard (no open repo) evolved from our learnings with Cloud Atlas into a comprehensive, AI-enhanced workflow orchestration tool. The core idea was simple yet powerful: systematically reduce transaction costs across entire workflows, not just individual interactions.

**Evolution of Asgard:**

* **Prototype Stage**: YAML-defined workflow steps combining AI and API interactions, rapidly prototyping validation and data transformations.
* **Designer UI**: A React-based interface with AI-assisted autocomplete and validation, simplifying the creation of robust workflows.
* **Composable Workflows**: Workflows could now be nested and reused as steps within other workflows, allowing rapid scaling and adaptation without coordination overhead.
* **Future Directions**: Enhanced with telemetry, role-based credential management, and replayable prompt sessions for detailed workflow debugging and optimization.

In retrospect, Asgard directly targeted North’s four institutional levers:

| North Lever                   | Asgard Mechanism                                                    | Impact on Transaction Costs                                       |
| ----------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Information Flow**          | Context-rich steps, automatic documentation, clear lineage tracking | Reduced search and miscommunication                               |
| **Monitoring / Verification** | Validators, embedded tests, strict workflow boundaries              | Lower enforcement and oversight costs                             |
| **Incentive Alignment**       | Intent Engineering ensuring explicit goal-setting and criteria      | Minimizes negotiation and ensures alignment                       |
| **Adaptation**                | Workflow composition and iteration; AI-assisted optimizations       | Faster adaptation and significantly reduced coordination overhead |

By compressing these costs, Asgard provides the potential to significantly optimize organizational coordination overhead.

---

## Bridging Institutional Clarity and AI Capability

Intent Engineering formalizes how humans specify purpose, constraints, and success criteria when interacting with AI. It ensures transactions between human and AI systems are clearly defined, measurable, and optimized:

* **Explicit Contextual Front-Loading**: Clearly articulated goals and assumptions reduce bargaining overhead.
* **Structured Prompts**: Consistent interactions act as standardized contracts.
* **Defined Success Metrics**: Automated verification reduces enforcement costs.

## Implications for the economy

With reduced transaction costs, organizational boundaries and structures become fluid:

* **Dynamic Teams**: Easy to form and dissolve, adapting to specific tasks.
* **Governance as Code**: Institutions represented as version-controlled, explicit rules.
* **Knowledge Amplification**: Expertise captured once, reused indefinitely.

Brook’s Law is fundamentally altered. With the correct tooling, adding people or complexity does not necessarily equate to exponential overhead.

---

## Future Directions

By integrating Brooks' insights, Coase’s theory, North’s institutional framing, and our practical experimentation, we demonstrate a tangible pathway to drastically reduce transaction costs within firms. The future we envision - and are actively building - is one where organizational effectiveness scales exponentially, without the traditional overhead associated with human coordination.

We have no idea, yet, of how to make this a full-time endeavor or to get into other people’s hands. For now we’re treating it as a practical research lab not to build AGI or ASI but rather as a way to explore ways teams can to do more of the right things, better, and with fewer (wasteful and boring!) transaction costs.
