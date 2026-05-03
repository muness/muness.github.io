---
theme: default
title: When the PR Looks Real but the Author Doesn’t Own It
info: |
  A Hacker B&B talk draft adapted from the Muness Castle essay on LLM triangulation and engineering judgment fidelity.
class: text-left
transition: fade-out
drawings:
  persist: false
mdc: true
---

# When the PR Looks Real
# but the Author Doesn’t Own It

<div class="mt-10 text-2xl opacity-80">
The new BS filter is fidelity, not formality.
</div>

<!--
Opening question: Have you reviewed a polished PR that kept changing shape but never got closer to the design?
Let the room answer before naming AI.
-->

---
layout: center
class: text-center
---

# The polished PR that won’t converge

<div class="mt-10 text-3xl leading-relaxed">
Senior gives direction.<br>
Junior returns a credible PR.<br>
The design solves a nearby problem.
</div>

<!--
Start with the social scene. No thesis yet.
-->

---
layout: two-cols
---

# The review gets stranger

::left::

## Feedback names mechanism

- boundary
- invariant
- production constraint
- tradeoff
- behavior, not implementation

::right::

## Revision loses mechanism

- new structure
- new names
- new tests
- phrases addressed
- intent missed

<!--
Emphasize the eerie part: each revision can look better in isolation while the sequence fails to converge.
-->

---
layout: center
class: text-center
---

# Everyone sees activity

<div class="grid grid-cols-2 gap-6 mt-12 text-2xl">
<div class="p-6 border rounded-xl">PRs</div>
<div class="p-6 border rounded-xl">comments</div>
<div class="p-6 border rounded-xl">tests</div>
<div class="p-6 border rounded-xl">iteration</div>
</div>

<div class="mt-10 text-3xl opacity-80">
Motion can hide non-learning.
</div>

---
layout: center
class: text-center
---

# What nobody says out loud

<div class="mt-10 text-4xl leading-relaxed">
We are not converging.<br>
The author cannot explain the design.<br>
Comments survive. Mechanism disappears.
</div>

<!--
This is the missing stop-the-line moment.
-->

---
layout: center
class: text-center
---

# The hidden third party

```mermaid
flowchart LR
  S[Senior judgment] --> F[Review feedback]
  F --> J[Junior relay]
  J --> M[LLM]
  M --> A[New artifact]
  A --> S
```

<div class="mt-6 text-2xl opacity-80">
The senior reviews model output through a human transport layer.
</div>

---
layout: center
class: text-center
---

# The human loop has become a prompt loop

<div class="mt-12 text-3xl leading-relaxed">
Senior judgment → prompt context → generated artifact<br>
→ author explanation → code and tests → production behavior
</div>

<!--
Land the memorable line. Then define fidelity as survival across this chain.
-->

---
layout: center
class: text-center
---

# The old BS filter broke

<div class="mt-12 text-4xl leading-tight">
The organization mistakes<br>
<span class="text-blue-500">artifact velocity</span><br>
for<br>
<span class="text-amber-500">judgment transfer</span>.
</div>

---
layout: center
class: text-center
---

# Code got cheap
# Understanding did not

<div class="mt-10 grid grid-cols-2 gap-8 text-2xl">
<div class="p-6 border rounded-xl">
Code<br>tests<br>plans<br>summaries<br>explanations
</div>
<div class="p-6 border rounded-xl">
Memory<br>judgment<br>constraints<br>tradeoffs<br>learning
</div>
</div>

---
layout: center
class: text-center
---

# Triangulation replaces apprenticeship

```mermaid
flowchart TB
  S[Senior] -->|comments on| A[Artifact]
  J[Junior] -->|prompts| M[LLM]
  M -->|regenerates| A
  A -->|sets agenda for| S
  A -->|sets agenda for| J
```

<div class="mt-6 text-2xl opacity-80">
Both humans begin orbiting generated output.
</div>

---
layout: two-cols
---

# Formality used to carry signal

::left::

## Before

- a plan took time
- a PR required a system model
- review exposed reasoning

::right::

## Now

- plans can be generated
- tests can mirror false assumptions
- explanations can rationalize confusion

<!--
Be fair to the old world. It was imperfect, but cost carried signal.
-->

---
layout: center
class: text-center
---

# The dashboard can get greener
# while the system gets less true

| Metric | Failure mode |
| --- | --- |
| PR count | understanding falls |
| Cycle time | drift accelerates |
| Test count | false model gets tests |
| Review speed | shallow review passes slop |

---
layout: center
class: text-center
---

# New question

<div class="mt-12 text-5xl leading-tight">
Did judgment survive translation?
</div>

<div class="mt-10 text-2xl opacity-80">
Fidelity means distinctions survive each handoff.
</div>

---
layout: two-cols
---

# Reality fidelity

::left::

## Before generation

Ask:

- aim
- constraints
- landmines
- domain distinctions
- blocking question

::right::

## Filter

Can each constraint be traced to:

- code
- tests
- config
- observability
- operations
- tradeoff

---
layout: two-cols
---

# Drift detection

::left::

## Signals

- same files churn
- comments satisfied literally
- mechanism violated
- architecture shifts without explanation
- author cannot explain direction

::right::

## Stop-the-line trigger

<div class="text-3xl leading-relaxed mt-8">
The mechanism is no longer owned by the author.
</div>

---
layout: two-cols
---

# Judgment fidelity

::left::

## Start review here

> Walk me through the design from memory.

Then ask:

- why necessary?
- why sufficient?
- why viable?
- what would prove this wrong?

::right::

## Good rationale names

- mechanism
- cost
- acceptance condition
- revisit trigger

---
layout: two-cols
---

# Outcome and learning fidelity

::left::

## After ship

Did the system become more true in production?

- behavior
- reliability
- support burden
- operator decisions

::right::

## When work fails

What did we learn that is still true?

- spec
- guardrail
- decision
- assumption
- warning

---
layout: center
---

# The operating move

<div class="text-2xl leading-relaxed">

1. Aim before generation
2. Generate under constraint
3. Review through necessity, sufficiency, viability
4. Test ownership
5. Stop the line on drift
6. Salvage learning, not code
7. Reflect so learning compounds

</div>

---
layout: center
class: text-center
---

# Formality is cheap
# Fidelity is scarce

<div class="mt-12 text-3xl leading-relaxed">
The next polished PR that fails to converge starts with one question:<br>
<strong>does anyone still own the mechanism?</strong>
</div>

<!--
Closing discussion question: where would this filter fire first in your team — before work, during revisions, at review, after ship, or when a branch goes bad?
-->
