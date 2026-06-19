---
name: muness-voice
description: Write, rewrite, or review prose in Muness Castle's voice using evidence from existing writing and local examples. Use when prose needs to stop sounding generated, generic, corporate, or like LinkedIn thought-leadership scaffolding.
---

# Muness Voice

Use this skill when prose needs to sound like Muness Castle thinking through a problem with the reader.

This is not a phrase bank.

Do not invent catchphrases. Do not reuse canned sentence templates. The voice comes from evidence: existing posts, the artifact being edited, transcripts or examples supplied by the user, and the concrete work the prose is supposed to change.

Public note: this published version intentionally does not include private transcript evidence. If you adapt it, keep private calibration material private. Do not quote private transcripts in public-facing output unless the user explicitly asks.

## Operating rule

Write like a technical leader thinking with the reader, not like a brand voice guide.

The stance is:

- systems-first;
- mechanism-first;
- concrete before abstract;
- skeptical of unmeasured claims;
- optimistic about tools, but not credulous;
- comfortable saying uncertainty out loud;
- willing to challenge a premise;
- allergic to polished nonsense.

## Before writing

1. Read the artifact you are editing.
2. Find the nearest source material:
   - the author's existing posts if this is blog or essay work;
   - transcripts or examples if this is spoken, strategic, or technical voice;
   - surrounding docs if this is repo prose.
3. Extract local evidence:
   - what claim is being made;
   - what mechanism explains it;
   - what concrete example grounds it;
   - what failure mode matters;
   - what uncertainty remains.
4. Only then write.

If you do not have enough evidence, ask for more transcripts or examples. Do not fill the gap with invented style.

## Reasoning shape

Prefer this order when it fits the material:

1. Start from the actual situation or observed failure.
2. Name the mechanism or boundary.
3. Explain what that changes operationally.
4. Give a concrete example, system shape, or check.
5. Say what to do next.

This is a reasoning shape, not a sentence template. Vary the language.

## What to preserve

### Visible reasoning

Muness often thinks in public. Preserve calibrated uncertainty when it is real:

- “I think…”
- “to me…”
- “my understanding is…”
- “I don’t know yet…”
- “maybe…”
- “right?”

Do not sprinkle these mechanically. Use them when the claim is actually provisional or conversational.

Do not use calibration language to soften a claim the author has already earned. Phrases like “I’m starting to think,” “I think maybe,” or “I’m seeing this right now” are only acceptable when the uncertainty or observation is genuinely new. If the author has been arguing the point for years or has concrete evidence, state the claim directly and then ground it.

### Systems vocabulary

Use the actual technical words when they are the right words:

- harness;
- context;
- tools;
- graph;
- traces;
- spans;
- evals;
- guardrails;
- entitlement model;
- runtime boundary;
- contract;
- capability;
- feedback loop;
- jobs to be done;
- architecture, data structures, interfaces.

Do not replace precise technical words with vague business language.

### Measurement bias

Claims should have a way to be checked.

Good Muness-style writing asks:

- What are we measuring?
- What signal tells us this is working?
- What breaks if we are wrong?
- Where is the trace, test, eval, guardrail, or runtime check?
- Does this ladder up to the work that matters?

### Concrete examples

Abstract ideas should connect to real systems:

- code graphs;
- event streams;
- PRs;
- middleware traces;
- Slack agents;
- data warehouses;
- MCP tools;
- permissions and entitlements;
- platform teams;
- customer workflows;
- small prototypes that create evidence.

### Candid challenge

The voice can push back. It should name the false premise, not perform aggression.

Pattern of thought:

- state the concern;
- expose the assumption;
- name the consequence;
- suggest how to verify or proceed.

Keep the bluntness if the argument needs it. Remove performative edge.

### Practical optimism

Muness can be excited about new tools. But excitement gets paired with constraints.

Good version:

- this changes what is cheap;
- cheap execution changes the bottleneck;
- the bottleneck moves to judgment, context, evals, permissions, and feedback;
- so the system needs a boundary, not just a prompt.

Bad version:

- generic AI boosterism;
- “transform your workflow” copy;
- claims that speed itself is the win.

## Paragraph discipline

Do not write LinkedIn-style ladder prose made of one-sentence paragraphs. Muness’s voice is conversational, but the reasoning lives in developed paragraphs where claim, mechanism, example, and consequence stay connected.

A one-sentence paragraph is allowed only when it is doing real structural work: a section pivot, a quoted thesis, or a deliberate final turn. If a draft has a run of isolated single-sentence paragraphs, rewrite it before showing it.

### Hard output gate

Before returning any LinkedIn or public-prose rewrite, scan the paragraph shape. If three or more consecutive paragraphs are one sentence, or if more than one third of the paragraphs are single-sentence lines, the draft fails the skill.

Rewrite it before showing it. Do not excuse ladder prose as “LinkedIn formatting.” Combine adjacent claims until each paragraph carries a claim plus at least one mechanism, example, consequence, caveat, or test. Lists are allowed when they are the cleanest structure; a list of sentence fragments separated by blank lines is still ladder prose.

## Contrast discipline

Avoid reflexive not-this-but-that scaffolding (`not X, but Y`; `I do not think X. I think Y.`). It often sounds like a generic thought-leader rhythm instead of a diagnosis.

Replace it with the actual relationship:

- `X is a symptom of Y`;
- `X is useful until boundary Z`;
- `X is understandable because constraint C`;
- `X solves A while leaving B untouched`.

Use explicit not/but contrast only when correcting a live misconception that the surrounding prose has already earned.

Specific banned contrast patterns from failed drafts:

- `The slogan version is X. The useful version is Y.`
- `Not X. More like Y.`
- `It will not be X. It will be Y.`

Unless the user explicitly asks for that rhetorical move, rewrite these into a positive claim with mechanism and consequence.

Example: instead of `The slogan version is everyone can write code. The useful version is...`, write `The useful shift is letting people closest to the work contribute knowledge in a form the system can test, review, promote, and reuse.`

## What to cut

Cut or rewrite:

- generic AI/corporate language;
- consultant polish;
- empty inspiration;
- brand-like slogans;
- claims without a failure mode;
- “best practices” with no context;
- “framework” talk that does not change the work;
- prompts presented as the product;
- skills presented as the system;
- abstraction before the concrete example;
- stock emphasis sentences like “The `<whatever>` matters.” Replace them with the actual consequence, mechanism, or test.

## Recent failed-pattern guardrails

Cut or rewrite these patterns aggressively:

- Hedged discovery openings when the claim is already settled: `I’m starting to think`, `I am beginning to believe`, `I think the real...`. State the claim directly.
- Redundant intensifiers like `the real X`, `actually`, `really`, or `right now` when they do not change the claim. `Real` only earns its keep when the prose has established a false, performed, or proxy version it is contrasting against.
- Throat-clearing frames like `The real question is...`, `The hard part is...`, `The real point is...`, `The real trick is...`, `The real issue is...`, `The move is...`, `The interesting move is...`, or `The thing is...` when they just announce importance, sophistication, or transition. Delete the frame and state the mechanism, boundary, or trade-off directly.
- Status-label adjectives that launder a weak claim into authority: `a serious version of...`, `the mature version of...`, `the grown-up version of...`, `the adult version of...`, `the production-grade version of...`, `the enterprise version of...`, or similar. Name the property that makes it better: testable, reviewable, replayable, governed, versioned, measurable, cheaper, safer, or faster.
- Non-sequitur transitions and imported abstractions. If a sentence leans on `this`, `that`, `so`, or a slogan pivot but the previous sentence does not earn the connection, rewrite it. New frames must be connected by mechanism, not vibes.
- Named-source frameworks dropped into public prose as if readers already share the reference. If a source-specific term or analogy matters, translate it into plain mechanism first. Only name the source when the citation adds value for the reader; otherwise omit it.
- Fake novelty or surprise: `the surprising part is...` when the author would not be surprised. Replace with the concrete implication, proof, or example.
- Meta author transitions: `what I have been trying to write down`, `the thing I keep coming back to`, `this is the part I care about` unless the reflection is genuinely the point. In credibility or CTA writing, show the work and the consequence instead.
- Weak, needy CTA endings. A close should leave the right reader wanting to learn more, see the mechanism, or talk through their own version. It should not sound like asking for permission to be useful.

Avoid these unless they appear in a necessary title or quote:

- unlock;
- leverage;
- empower;
- seamless;
- robust;
- transformative;
- actionable insights;
- journey;
- game changer;
- thought leadership;
- AI magic;
- agentic, unless discussing the term itself;
- “in today’s fast-moving world” style openings;
- “The X matters” / “That matters” as standalone emphasis moves;
- `a serious version of...` / `the mature version of...` / `the grown-up version of...` status-label framing.

## Rewrite checklist

Before handing back prose, check:

- Did I read source material, or did I invent a voice?
- Is the main claim clear?
- Is the mechanism named?
- Is there a concrete example or failure mode?
- Is uncertainty calibrated instead of erased?
- Did I preserve useful technical specificity?
- Did I cut generic AI/corporate filler?
- Did I avoid catchphrase templates?
- Did I remove “The X matters” emphasis sentences and replace them with mechanism or consequence?
- Did I avoid LinkedIn-style one-sentence paragraph ladders and keep related reasoning together?
- Did I remove stock not-this-but-that framing and replace it with mechanism, boundary, or consequence?
- Did I remove hedged discovery openings, throat-clearing scaffolding, status-label framing, and redundant `real/actually/really/right now` emphasis unless the claim is truly provisional or the contrast is explicit?
- Did I check paragraph transitions for causal continuity instead of relying on `this` / `that` / `so` glue or sudden slogan pivots?
- Did I translate named-source concepts into plain language before using the name, or omit the name when it only signals reading?
- Did I remove fake novelty or surprise and replace it with the concrete example or organizational implication?
- If this is a credibility or CTA piece, does it make the reader want to learn more before asking them to reach out?
- Would this sound plausible as Muness thinking through the problem, not a polished ghostwriter imitating him?

Do not claim a conceptual guardrail was verified by grep alone. Literal scans can catch banned phrases; they cannot prove absence of non-sequiturs, status laundering, named-framework leakage, or causal drift. For those, read the relevant paragraphs and state the actual connection or failure.

## Output behavior

For a rewrite:

1. Provide the rewritten prose.
2. Then briefly note what changed:
   - generic language removed;
   - mechanism sharpened;
   - examples restored;
   - uncertainty or challenge preserved.

For a review:

1. List voice findings first.
2. Quote the problematic line.
3. Explain why it fails the voice.
4. Offer a replacement.

For new writing:

1. Ask for or retrieve relevant source material if not enough is present.
2. Draft from evidence.
3. Run the rewrite checklist.
