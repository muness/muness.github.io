# AGENTS.md - AI Agent Guidance

This file provides context and protocols for AI agents working in this repository.

## Sources of Truth

- `PRODUCT.md` is the canonical source for the site's product strategy, audience, brand, and design principles.
- This file summarizes the operational context agents need while working.
- Muness's explicit direction overrides inferred priorities. When strategy is unclear or changing, ask rather than manufacturing certainty.

## Project Context

This is Muness Castle's Jekyll site. It connects consulting, public tools and experiments, and writing into one coherent body of work. Posts live in `_posts/` with YYYY-MM-DD prefixed filenames.

The site exists to further Muness's current aims:

- Invest deeply where there is trust, action, reciprocity, and a chance the work will be carried forward.
- Build agent work that changes how serious people and teams behave, with more human judgment rather than less.
- Preserve and use margin rather than turning every capability or opportunity into another obligation.

The desired site outcome is a context-rich inquiry from a good-fit team. Visitors should understand the proposition, inspect credible evidence, judge fit without a sales call, and know how to begin.

### Strategic Constraints

- Editorial judgment belongs to Muness. Analytics and visitor feedback may inform it but do not override it.
- Aim alignment is the primary decision test.
- Human judgment and responsibility must remain visible in descriptions of agent work.
- Never invent client outcomes, compromise confidentiality, or use unsupported claims.
- Public artifacts should provide evidence; adjectives should not carry the argument.
- Each page, project, and piece of writing needs a clear role in the larger story.
- Selectivity is a feature. Do not optimize for universal appeal, audience size, or persuading unreceptive people.
- Respect margin. Avoid expanding scope merely because more work could be done.

### Patterns to Prefer

- Start with the consequential workflow and the person responsible for it.
- Explain mechanisms, constraints, checks, and observable behavior change.
- Favor concrete examples and inspectable public work.
- Route public prose through the writing workflow, preserving Muness's direct, calm, technical, and opinionated voice.
- Help receptive people act, adapt, teach, or build on the work.
- Use plans to orient action; let evidence update the plan.

### Patterns to Avoid

- Generic AI-consultancy language, mythology, hype, or interchangeable claims.
- Presenting automation as a replacement for judgment.
- Treating every repository or experiment as equally important.
- Adding work that does not strengthen the coherent agent-work story.
- Repeatedly explaining harder to poor-fit or chronically unreceptive audiences.
- Polishing output when the underlying work does not change behavior.

### Decision and Sensemaking Norms

"Done" means the work is technically sound, fits the site's voice and structure, and advances the relevant aim without violating the constraints above.

Pause and reframe when:

- the work no longer has a clear relationship to an aim;
- tactics are multiplying while the intended behavior change remains vague;
- repeated patches are not improving the outcome;
- evidence shows the audience, framing, or mechanism is wrong;
- the work increases obligation without increasing agency, learning, income, reputation, joy, or useful service.

Keep implementer, reviewer, dissenter, domain expert, and final decision-maker roles distinct when the decision warrants it. Muness is the final decision-maker.

## Open Horizons Working Framework

Use the smallest useful Open Horizons loop for the work:

1. **Aim** — identify the behavior or outcome the work should change.
2. **Frame** — understand the problem space and state the problem before committing to a solution.
3. **Explore** — compare viable solutions and their trade-offs.
4. **Execute** — implement against the chosen aim and constraints.
5. **Review** — check the result for drift before calling it done.
6. **Reorient when needed**:
   - use dissent before consequential or high-confidence decisions;
   - use salvage when repeated attempts are producing learning but not a viable result;
   - return to the problem statement when the solution keeps feeling wrong.
7. **Record durable learning** when it should guide future sessions.

Relevant skills include `aim`, `problem-space`, `problem-statement`, `solution-space`, `execute`, `review`, `dissent`, `salvage`, and `record`. Do not invoke the full sequence mechanically; use the stages that reduce uncertainty or protect aim alignment.

## Writing Workflow

Use `writing-workflow` for broad requests such as "improve," "tighten," "polish," or "review," when multiple writing risks may be active or the correct editing skill is unclear.

Before editing, identify:

- the artifact and its stage;
- the reader and what they should understand, feel, decide, or do;
- the highest active risk: structure, facts, voice, clarity, tone, style, engagement, production quality, or executive decision fit.

Choose the earliest skill that resolves that risk. The default pass order is:

1. `developmental-edit` — purpose, audience, argument, structure, evidence, and pacing.
2. `fact-checker` — claims, sources, dates, numbers, quotations, and technical accuracy.
3. `muness-voice` — authored site copy and writing that should sound like Muness.
4. `writing-without-bullshit` — padding, jargon, evasion, unsupported authority, and corporate fog.
5. `tone` — the reader's felt experience.
6. `style` — diction, sentences, paragraphs, transitions, and consistency.
7. `writing-polish` — energy, rhythm, specificity, tension, and memorability.
8. `proofread` — final mechanics and production cleanup.

Use `exec-speak` instead when the artifact exists to help an executive make a decision.

Skip passes that do not address a live risk. Do not:

- polish around unresolved structural, factual, or voice problems;
- proofread before wording is stable;
- run every skill mechanically;
- make prose generically smoother at the expense of Muness's voice;
- turn real uncertainty into false confidence;
- add claims, evidence, or authority that the sources do not support.

For public site prose authored by Muness, `muness-voice` is normally implied. Preserve useful roughness, directness, claim boundaries, uncertainty, evidence, and source context.

When chaining passes, carry a short editorial handoff containing:

- reader, purpose, and desired change;
- facts, claims, evidence, and uncertainty boundaries;
- voice, tone, structure, examples, and terminology to preserve;
- edits already made and risks remaining;
- the next skill, why it is next, and what it must not change.

A later pass may tighten wording but must not silently alter preserved meaning, claims, evidence, uncertainty, voice, or reader promise.

## Interface Design Workflow

Use the `impeccable` skill family for frontend design, redesign, critique, audit, polish, layout, typography, color, motion, responsive adaptation, accessibility, and other interface work. It is not required for backend-only or prose-only changes.

Before editing an interface:

1. Run the skill's context setup from the project root.
2. Read the reference for the selected `impeccable` command.
3. Inspect the existing CSS, layouts, components, tokens, and conventions.
4. Read the `brand` register guidance; this site's design is part of the product.

`PRODUCT.md` is the brief and the shipped interface is the existing design system. Preserve established identity before applying new defaults from the skill. Use the smallest command that matches the live risk; useful routes include `critique`, `audit`, `polish`, `typeset`, `layout`, `clarify`, `adapt`, `optimize`, and `live`.

Frontend work is not done until it is:

- production-ready rather than a prototype;
- visually verified in the browser at relevant viewport sizes;
- legible with enlarged text and at narrow widths;
- keyboard accessible, focus-visible, and WCAG 2.2 AA compliant;
- robust to content overflow and interaction edge cases;
- respectful of reduced-motion preferences;
- recognizably part of this site rather than a generic AI-designed surface.

Do not replace working identity with fashionable defaults, generic card grids, decorative effects, or category clichés. Prefer concrete hierarchy, inspectable evidence, deliberate typography, and restrained interaction that serves the page's role.

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
