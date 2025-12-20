---
title: "Knowledge Work Gets a Reboot"
date: "2025-12-20 14:19:00 -0400"
author: muness
toc: true
comments: true
excerpt: "LLMs make exploration cheap, not verification. The reboot is using them to widen options early—without locking into irreversible paths."
---

*Using LLMs without locking into irreversible paths*

The reboot is a workflow change: use LLMs to widen the search space, and use phase gates and verification loops to avoid locking into irreversible paths.

A useful description of frontier LLMs came from [Steve Hsu](https://www.manifold1.com/episodes/theoretical-physics-with-generative-ai-101): they feel like a “brilliant but unreliable” colleague. You can ask a question and get a long, confident response that mixes real insight with subtle errors. In research, that can mean a wild goose chase. In a lot of real work, it can mean something worse than wasted time.

The danger is thinking the cost is merely “hours.” In a non‑ergodic world (in plain terms: in an ergodic world mistakes average out over many tries; in a non‑ergodic one, a single bad mistake can permanently alter your trajectory), the cost of being confidently wrong can compound into reputation loss, missed windows, regulatory blowback, financial loss, or an irreversible technical or organizational lock‑in. You do not get infinite retries. You get one path through time.

That is the frame this essay uses. Non‑ergodic threat is not a reason to avoid LLMs. It is a reason to use them differently.

## Non‑Ergodic, in Plain Language

In an ergodic world, it is reasonable to lean on averages. Mistakes wash out. If you keep playing, results converge.

A lot of human work is not like that. Many systems have absorbing states and one‑way doors. A bad decision can end the game or force you onto a path that stays costly for years. The average outcome across lots of hypothetical parallel lives is not the same as the outcome of your one life.

This is why the “1 in 1,000” Russian roulette example is so clarifying. The odds look tiny in a single round. Over enough rounds, the question stops being “what is the probability” and becomes “am I willing to put a non‑zero chance of ruin into my loop.”

Non‑ergodicity means path matters. Sequence matters. Timing matters. Reversibility matters.

## What LLMs Change, and What They Do Not

LLMs collapse the cost of generating options. That is real. They can draft approaches, argue both sides, enumerate risks, sketch architectures, and propose experiments quickly. They make exploration cheap.

They do not collapse the cost of verification. They do not remove irreversibility. They do not protect you from locking into a wrong direction.

That mismatch is why so many teams feel a new kind of risk. Output becomes abundant, but judgment is still scarce. In a non‑ergodic system, scarce judgment is not a minor inconvenience. It is the controlling factor for survival.

## The “Just Do Something” Trap

When uncertainty rises, people feel pressure to act. Politicians get punished for “doing nothing,” even when doing nothing would outperform intervention. Organizations do the same thing. Movement signals competence. Waiting reads as weakness.

LLMs slot neatly into this failure mode because they are optimized to produce something. They do not naturally offer restraint. They default to the posture of helpful action.

So you get a tight loop:

1. A problem appears.
2. The model produces a plausible plan quickly.
3. The team feels relief and momentum.
4. Execution starts.
5. The cost of backing out rises each day.

In a non‑ergodic environment, this is not just inefficiency. It is how small errors become permanent ones.

## Two Biases That LLMs Amplify

In an ergodic world, these are annoying but survivable. In a non‑ergodic world, they become dangerous because they convert early uncertainty into premature commitment, and then make that commitment hard to unwind.

### Halo effect: polish becomes credibility

LLMs are excellent at form. Confident tone, clean structure, familiar patterns, persuasive phrasing. Humans then transfer credibility from form to substance. “This looks smart” becomes “this is right.”

In high‑stakes settings, that is dangerous. A polished wrong direction can be more harmful than a messy one because it gets funded, socialized, and defended.

In a non‑ergodic setting, the mistake isn’t cosmetic. You don’t get partial credit for an elegant failure. A wrong but impressive plan can still walk you through one‑way doors. This is why judgment must happen before polish, not after.

### Sunk cost fallacy: commitment becomes identity

Once artifacts exist, people protect them. Decks, code, roadmaps, drafts, internal alignment, executive buy‑in. LLMs make it easy to generate a lot of convincing artifact quickly, which means you can accumulate sunk cost faster than you realize.

That accelerates lock‑in. It makes course correction feel like failure. It turns “we learned” into “we must justify.”

Non‑ergodicity turns sunk cost from a cognitive quirk into a systemic hazard. When paths are irreversible, every additional unit of commitment raises the price of admitting error. LLMs accelerate this dynamic by making it easy to generate artifacts that feel substantial long before they’ve been tested. This is why “search before commitment” isn’t just about better ideas — it is designed to keep mistakes cheap enough to abandon.

Put together, action bias pushes us to do something, halo effect convinces us the thing is good, sunk costs trap us once we’ve started, and path dependence ensures the damage compounds.

Do less. Judge more. Earlier. With intention.

## The Right Use of LLMs: Exploration First, Optimization Later

This is the reboot.

LLMs are most valuable as exploration engines, not as optimization engines. Use them to widen the search space early, while decisions are still reversible. Then apply human judgment to decide what deserves depth.

That sounds obvious, but many teams—often without realizing—are still using LLMs as execution accelerators inside old workflows. Many of those workflows hard‑code the path and use the model to fill in fields. That is execution with a faster pen. It produces more motion, not better commitment.

The question is not “can the model do this faster.” The question is “does this increase the chance we commit to the right thing.”

## The Missing Layer: Earning the Right to Move Phases

### Readiness Is a Judgment, Not a Feeling

The real question is not “what should we do next?” It is:

> Why do we believe we’re ready to move to the next phase?

That’s a maturity test, not a speed test.

In a non‑ergodic world, moving phases is a commitment decision, not a task transition. The burden of proof should be explicit.

Before moving from exploration → execution, the team should be able to answer, in plain language:

1. Do we understand the problem well enough?

   - What are the failure modes?
   - What would make this problem irrelevant or misframed?
   - What assumptions would break the whole effort if wrong?

   If you can’t name how this goes wrong, you’re not ready to act.

2. Have we explored the problem space?

   This is where LLMs shine when used correctly. It is boundary discovery, not solution ideation yet.

   - What adjacent problems look similar but aren’t?
   - What constraints dominate outcomes here?
   - How do different stakeholders experience this problem differently?

3. Have we explored existing solutions and substitutes?

   This is the most skipped step, and when it’s skipped it’s usually pure action bias.

   - What already exists that partially solves this?
   - What could we reuse, adapt, or live with?
   - What would “good enough for now” look like?

4. Have we explored the solution space broadly?

   Only now does ideation matter. The goal is not finding the best solution. It is mapping plausible approaches, understanding the trade‑offs, and identifying irreversible vs reversible paths.

   - What are 3 to 5 meaningfully different approaches (not variants of the same one)?
   - What trade‑offs dominate between them?
   - Which paths are reversible, and which are one‑way doors?

5. What have we learned that makes action less dangerous now than before?

   This is the key non‑ergodic test. If the answer is “none,” then action is just motion.

   - What risks have we retired?
   - What uncertainties have we narrowed?
   - What mistakes are now cheap instead of catastrophic?
   - What would cause us to stop, pivot, or de‑scope?

This is not about perfection. It is about building a working model of the system as you solve the problem. Real learning changes the next decision. Blind action just accumulates artifacts to defend.

This is the antidote to action bias, halo effect, and sunk costs: it forces learning to show up before commitment.

## A Workflow That Matches the Environment: Tree Search With Phase Gates

You can translate the above into a simple operating rhythm. The shape is a tree search, but the key is that each deepening step is earned. This is the practical “reboot”: exploration is cheap, commitment is gated.

### 1) Fan out

Ask for options, not a finished plan. Use the model to generate a set of distinct approaches. Force variance.

Good prompts ask for:

- different strategies
- assumptions
- failure modes
- constraints that would kill the approach

Bad prompts ask for:

- one polished answer
- a complete plan
- a single “best” recommendation

### 2) Score and prune

Apply the same scoring criteria across options. This is where leadership shows up. The scoring function should reflect the real constraints: runway, brand, safety, regulatory exposure, reversibility, time‑to‑impact.

Prune aggressively. You are not trying to keep everyone’s favorite idea alive. You are trying to prevent the team from sinking costs into weak paths.

This phase only works if your system makes it safe to surface disconfirming evidence and cheap to stop. In practice that means guardrails + short checkpoints (managed disequilibrium) and institutionalized dissent (so minority views can contradict the plan in daylight). See [Managed disequilibrium]({% post_url 2025-10-01-playing-to-win-through-managed-disequilibrium %}) and [Dissent Mode]({% post_url 2025-10-19-dissent-mode %}).

### 3) Scaffold

Now deepen lightly. Ask for rough roadmaps, minimal architectures, test plans, or prototypes. This stage exists to surface hidden costs before commitment.

Use the readiness gate here. If you cannot answer the questions above in plain language, stay in exploration.

### 4) Commit and execute

Only after pruning and scaffolding do you invest real depth. This is where you build, test, and ship.

The goal is not speed for its own sake. The goal is intentional action that was made safer by exploration.

## What Leadership Optimizes for Now

In a path‑dependent environment, leaders do not create advantage by being faster at execution. They create advantage by reducing the chance of irreversible mistakes.

That shifts what “good leadership” looks like:

- You insist on exploration before commitment.
- You make “do nothing for now” a legitimate option, not a political failure.
- You define the scoring function so the organization can prune quickly.
- You build the safety net and dissent norms that make pruning socially and operationally possible.
- You measure cycle time as the time from question to tested learning, not the time from idea to artifact.
- You reward early kills that prevent late disasters.

This is editorial leadership. The machines generate. Humans choose. Sometimes the best choice is to wait, to run a smaller probe, or to keep the decision reversible for longer.

## Start Here: One Week Reboot

1. Pick one live decision and write the decision surface (intent, constraints, scoring function, ruin check, and a real null option).
2. Run a fan‑out prompt: 5 distinct approaches, each with assumptions, failure modes, the fastest disconfirming test, and the biggest one‑way door.
3. Score and prune in a short review; make stopping and de‑scoping an explicit option, not a political failure.
4. Scaffold one survivor with a smallest reversible probe + verifier pass; then decide to deepen or return to exploration with updated constraints.

## Close

LLMs make it easy to do something. That is exactly why we need stronger discipline around when to act.

Non‑ergodicity is the backdrop that makes this real. If the downside were always recoverable, sloppy exploration would be fine. But many of the costs we care about do not average out. They compound. They stick. They end games.

So the point is not to reject LLMs. It is to use them in a way that respects the shape of the world.

Explore broadly. Score early. Commit late. Act intentionally. And when doing nothing is better, let the system make that choice easy too.

That is what it means to reboot knowledge work: cheaper exploration, stricter gates, and fewer irreversible mistakes.

## Tools to Try

### Superego

An open-source Claude Code + OpenCode plugin for metacognitive feedback, encouraging exploration, dissent, and constraint alignment. Check it out: [cloud-atlas-ai/superego](https://github.com/cloud-atlas-ai/superego)

### Coming in 2026: Open Horizons

A collaborative journal for teams and AI agents to curate aims, patterns, and constraints, identifying incongruences. Automated reviewers detect misalignments, flag emerging problems, encourage dissent, and propose strategy evolutions for continuous alignment.

If you want to be an alpha adopter for Open Horizons, message me on [LinkedIn](https://linkedin.com/in/muness).

## Appendices

- [Appendix A — Non‑Ergodicity in 90 Seconds](#appendix-a)
- [Appendix B — Exploration‑to‑Commitment Protocol](#appendix-b)
- [Appendix C — The Inequality of Verification and the Generator–Verifier Loop](#appendix-c)
- [Appendix D — Biases This Workflow Is Designed to Counteract](#appendix-d)

<details id="appendix-a" class="appendix" markdown="1">
<summary><strong>Appendix A: Non‑Ergodicity in 90 Seconds</strong></summary>

Most people reason about risk using averages. That works in some domains. It fails badly in domains where you only get one path through time.

**Ergodic (roughly):** What happens to one person over time looks like the average outcome across many parallel tries.

**Non‑ergodic (what most real work feels like):** Your outcome depends on the sequence of events. Some outcomes are one‑way doors. A single bad step can change what is possible next.

A practical way to see the difference:

- Ensemble thinking: “On average, this bet is good.”
- Time‑path thinking: “If this goes wrong once, do I still get to keep playing?”

Russian roulette is the simplest intuition. A “tiny chance” of ruin is still a real chance of ruin. If you take that bet repeatedly, the question becomes whether you are comfortable putting a non‑zero “end of game” risk inside your loop.

In work, absorbing barriers show up as things you cannot easily reverse:

- Reputation damage you cannot fully undo
- A product mistake that burns trust or triggers regulation
- A technical architecture that becomes too expensive to unwind
- A career move that closes doors for years

This is why “on average” is a weak comfort in strategy, leadership, and high‑leverage execution. Many of the costs do not average out. They compound or they end the run.

The implication for LLMs: models make it cheap to generate plausible action. Non‑ergodicity is the reason we should use that capability for exploration first, not premature commitment.
</details>

<details id="appendix-b" class="appendix" markdown="1">
<summary><strong>Appendix B: Exploration‑to‑Commitment Protocol</strong></summary>

This is the workflow that matches a non‑ergodic environment. The goal is not perfect answers. The goal is to keep mistakes cheap long enough to learn, then commit with intention.

### Step 0: Define the decision surface

Before you ask for solutions, write down:

- Intent: What are we trying to accomplish?
- Constraints: What cannot be violated?
- Scoring function: What makes an option “better” here?
- Ruin check: What outcome would be unrecoverable (or politically/operationally irreversible)?
- Null option: What if we do nothing for a short window and simply observe or gather data?

Including the null option is important. It gives you a baseline. It also defuses the “just do something” reflex.

### Step 1: Fan out (shallow exploration)

Ask for multiple distinct paths, not one polished plan.

What “distinct” means:

- Different mechanism, not different wording
- Different assumptions
- Different failure modes

Ask the model to include for each option:

- Key assumptions
- The fastest disconfirming test
- The biggest one‑way door
- The likely second‑order effects

### Step 2: Score before deepening

Apply the scoring function across options while they are still cheap.

Useful scoring dimensions for exec work:

- Time to learning (not time to shipping)
- Reversibility
- Downside surface area (ruin proximity)
- Differentiation or strategic advantage
- Runway and resource fit
- Coordination overhead introduced

Prune aggressively. Killing a weak path early is a success event in this model.

### Step 3: Scaffold the survivors

For the top one or two options, deepen lightly. Build just enough structure to expose hidden costs.

Typical scaffolds:

- A one‑page thesis with explicit assumptions
- A “first test” plan with concrete success signals
- A rough architecture diagram and risk list
- A small prototype that can be thrown away

### Step 4: The phase gate — “Why are we ready to deepen?”

Before moving from scaffolding into full execution, answer these questions in plain language:

**Problem understanding**

- What do we believe is true that, if wrong, would invalidate the work?
- What failures are most likely, and which are most damaging?

**Problem space exploration**

- What similar problems did we rule out, and why?
- What stakeholder constraints matter most?

**Existing solutions and substitutes**

- What already works “well enough,” and what is the cost of living with it?
- What can we reuse or adapt rather than rebuild?

**Solution space exploration**

- What alternatives did we seriously consider?
- Why is this one the best fit for our scoring function?

**Why act now**

- What did we learn that makes action safer now than earlier?
- What is the smallest reversible step that increases confidence?

If you cannot answer these, stay in exploration. If you can, you have earned deeper commitment.

### Step 5: Deepen and execute

Now invest depth. Keep two safeguards:

- Verification loop: treat model output as proposals that must be tested.
- Stop conditions: define what would cause you to pause, pivot, or kill the effort.

### Step 6: Loop with new constraints

If the path fails, return to fan‑out with updated constraints and what you learned. Avoid debugging the same branch forever. That is how sunk cost turns into lock‑in.

### Keep cycle time visible

Track time from:

- Question → options
- Options → pruned shortlist
- Shortlist → first test
- First test → decision to deepen or stop

This is “speed” that matters: speed to learning, not speed to motion.
</details>

<details id="appendix-c" class="appendix" markdown="1">
<summary><strong>Appendix C: The Inequality of Verification and the Generator–Verifier Loop</strong></summary>

LLMs collapse the cost of generation. They do not collapse the cost of verification.

That gap is the central operational constraint of AI‑assisted knowledge work:

- Generation is cheap and fast.
- Verification still consumes scarce human time.
- In non‑ergodic settings, verification is not paperwork. It is how you avoid irreversible error.

### A simple pattern: generator → verifier

Use one model instance to generate, and another to verify.

1. Generator prompt: produce options, assumptions, and a proposed path.
2. Verifier prompt: try to break it.

A useful verifier instruction:

- “List the most likely failure modes.”
- “Identify missing constraints and implicit assumptions.”
- “Point out where confidence is unjustified.”
- “Propose the smallest test that would falsify the claim.”

### A stronger pattern: diverse verifiers and convergence

[Steve Hsu](https://www.manifold1.com/episodes/theoretical-physics-with-generative-ai-101) shared a practical signal: if you run a proposal through multiple verifiers and they do not converge, treat it as a warning light. Lack of convergence does not prove the idea is wrong, but it does lower confidence.

Use convergence as a credibility signal:

- Convergence across diverse verifiers increases confidence enough to run a small test.
- Oscillation across verifiers suggests you should slow down, narrow the claim, or consult a domain expert before deepening.

### Verification should match the risk

Not everything needs the same rigor.

A helpful rule:

- If the downside is reversible, use lighter verification and run small experiments.
- If the downside is non‑ergodic (reputation, compliance, money at risk, safety), tighten the loop. Require evidence and independent checks.

### What verification looks like in practice

Examples:

- For code: tests, linters, threat modeling, staged rollouts
- For strategy: explicit assumptions, falsifiable milestones, pre‑mortems
- For research: citations you can locate, derivations you can reproduce, independent replication

The point is not mistrust for its own sake. The point is that a fluent model can be confidently wrong, and the environment may not forgive a confident wrong turn.
</details>

<details id="appendix-d" class="appendix" markdown="1">
<summary><strong>Appendix D: Biases This Workflow Is Designed to Counteract</strong></summary>

These are not “human flaws” to shame. They are predictable cognitive patterns that become more dangerous when output is cheap and the world is non‑ergodic.

### Action bias (“just do something”)

**Pattern:** Under uncertainty, action feels safer than waiting. Movement signals competence.

**LLM amplifier:** Models default to producing steps, plans, and conclusions. “Do nothing” rarely appears unless you ask for it.

**Countermeasures**

- Always include a null option in the option set.
- Require the “why act now” phase gate.
- Prefer reversible probes before irreversible commitments.

### Halo effect

**Pattern:** If something looks polished, we infer it is correct.

**LLM amplifier:** Fluent structure and confident tone transfer credibility from form to substance.

**Countermeasures**

- Score options before polishing them.
- Force explicit assumptions and failure modes in every proposal.
- Separate “exploration artifacts” from “execution artifacts” so the team does not confuse a nice draft with a good decision.

### Sunk cost fallacy

**Pattern:** The more we invest, the harder it becomes to stop, even when stopping is rational.

**LLM amplifier:** It is easy to generate impressive artifacts quickly, which creates early momentum and attachment.

**Countermeasures**

- Keep early work shallow and disposable.
- Define kill criteria up front.
- Celebrate early pruning as a success event.
- Avoid socializing a path as “the plan” before it clears the phase gate.

### A simple operating stance

Treat the first plausible output as a hypothesis, not an answer. Use LLMs to widen the search space. Use humans to set constraints, score tradeoffs, and decide when commitment is earned.

This is how you get the upside of speed without importing the downside of premature action.
</details>

<style>
.appendix {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin: 0.75rem 0;
  padding: 0.25rem 0.75rem 0.5rem;
  background: #f9fafb;
  transition: box-shadow 0.2s ease, background 0.2s ease;
}
.appendix summary {
  font-weight: 600;
  cursor: pointer;
  list-style: none;
}
.appendix summary::-webkit-details-marker {
  display: none;
}
.appendix[open] {
  background: #fff;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
}
@media (prefers-color-scheme: dark){
  .appendix { background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.14); }
  .appendix[open] { background: rgba(255,255,255,.06); }
}
</style>

<script>
function openDetailsFromHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.querySelector(hash);
  if (!target) return;
  const details = target.tagName && target.tagName.toLowerCase() === "details"
    ? target
    : target.closest("details");
  if (details) {
    details.setAttribute("open", "open");
  }
}
document.addEventListener("DOMContentLoaded", openDetailsFromHash);
window.addEventListener("hashchange", openDetailsFromHash);
</script>
