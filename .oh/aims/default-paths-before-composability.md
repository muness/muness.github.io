# Aim: Default Paths Before Composability

**Aim:** Teams designing AI-assisted products and workflows will give users a coherent path to a real outcome before asking them to assemble the system from models, agents, skills, prompts, plugins, and configuration choices.

**Why it matters:** Early composability transfers design decisions to users before they have enough experience to make those decisions well. In a probabilistic system, each additional choice also adds another possible source of failure, making it harder to tell whether the task, the workflow, the configuration, or the model was wrong.

**Current State:** Users encounter menus of components and settings before they have completed the workflow once. They copy somebody else's configuration, make choices without useful feedback, and cannot tell which choice caused a poor result. Maintainers respond by adding documentation or more options instead of establishing a trustworthy reference path.

**Desired State:** Users can begin with one visible, end-to-end default path, reach an outcome, and override specific decisions when their situation requires it. Maintainers observe where and why overrides recur, extract stable variants from that evidence, and expose composition as users develop a real need for it.

## Mechanism

**Change:** Publish a product and workflow design essay grounded in a concrete case. Trace the progression from a coherent default path, through visible escape hatches and recorded override reasons, to evidence-backed variants and eventual composition.

**Hypothesis:** A working reference path gives users something concrete to evaluate and gives maintainers a baseline against which friction and variation become legible. Delaying composition until recurring overrides reveal real variation will reduce premature configuration without preventing expert use.

**Assumptions:**

- At least one concrete case can show a menu-first design blocking or confusing users and a coherent default path improving their ability to act.
- A meaningful default can be provided without concealing consequential choices or forcing every user into the same workflow.
- Override reasons can be observed without collecting sensitive content or turning telemetry into surveillance.
- Recurring variation is a better basis for exposing composition than the set of components the system happens to make technically configurable.

**Misunderstanding Signal:** Readers reduce the argument to hiding advanced controls, treating users as incapable, enforcing one true workflow, or calling any packaged configuration a bundle without changing when and why users must make design decisions.

## Feedback

**Signal:** Readers can identify the reference path, its explicit escape hatches, and the evidence that would justify a new variant; product teams move consequential configuration later in the first-use journey and instrument why users leave the default.

**Timeframe:** Evaluate reader examples and concrete product adaptations during the first month after publication.

## Guardrails

- Ground the essay in a real case; do not publish generic advice about simplicity or novice users.
- Keep consequential defaults visible and explain what the system selected on the user's behalf.
- Preserve expert escape hatches and make overrides explicit rather than mysterious.
- Do not use defaults as dark patterns that privilege vendor goals over the user's intended outcome.
- Distinguish a user-facing default path from a versioned workflow bundle used for runtime governance.
- Treat composition as an evidence-backed graduation path, not as a capability that must disappear.
