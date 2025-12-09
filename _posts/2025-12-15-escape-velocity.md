---
comments: true
date: 2025-12-15 19:24:00 -0400
author: muness
title: "Escape Velocity"
toc: true
excerpt: "Breaking the Gravity of Local Maxima with Low-Cost Exploration"
---

*(Follow-up to: “Design in Practice: A Writeup”)*

Design is still the same work Rich Hickey described: increase understanding and make decisions that move us forward. His six phases—Describe, Diagnose, Delimit, Direction, Design, Develop—remain the backbone of that work because they mirror how humans reason through complexity.

LLMs do not change the purpose of these phases. They change the *cost* of exploring within them. They help us surface blind spots, test alternatives, generate artifacts, and iterate on direction at much lower cost. They do not replace judgment or depth; they let us apply judgment more often and deepen where it matters.

Our responsibilities as designers have not changed. Our leverage has. The gravity of local maxima used to hold us in place; low-cost exploration gives us escape velocity if we choose to use it. Design is still steering. We now have a catalyst that expands what we can sense, attempt, and learn as we steer.

---

## 1. Design as Movement Through a Solution Space

Every design problem creates a solution landscape that is multi-dimensional, full of peaks that feel good enough and valleys that represent failed bets. Historically, exploration on that landscape was expensive:

- Switching approaches cost weeks.
- Prototypes were slow.
- Revisiting earlier decisions was costly.
- Cross-domain synthesis required rare expertise.

Teams rationally stayed on the nearest hill, even if it was not the best one. The goal of design was still steering—but with limited visibility and high switching costs. Exploration historically lost because it was too expensive; cheap exploration reduces that gravity. The work now is to reach escape velocity before inertia reasserts itself.

---

## 2. Skill Stacking: The Old Escape Route

Before LLMs, escaping a local maximum required skill stacking:

- Domain breadth
- Analogies from other fields
- New heuristics
- Prototypes to test unfamiliar directions

These gave teams additional degrees of freedom, but they were expensive to build, slow to acquire, and unevenly distributed. Metis—deep, tacit, situational competence—comes from consequence-laden practice. LLMs can join the distributed cognition around that work, but they do not replace the human integrator.

---

## 3. What LLMs Actually Change

LLMs do not make us better designers. They make the terrain easier to move through.
Formally, they shift the cost structure of exploration:

1. **Cheap sampling of many directions** — shallow footholds across domains reveal promising directions quickly.
2. **Parallel exploration** — you can generate and compare multiple strategies in minutes.
3. **Higher-level abstraction becomes a working medium** — you can iterate on intent, constraints, and structure, not syntax.
4. **Collapsed iteration loops** — propose → implement → critique → revise happens rapidly.
5. **Composable cross-domain reasoning** — models pull heuristics from fields you only partly know.
6. **Visibility of nonlinear options** — architectural alternatives emerge early, not only after deep investment.
7. **Low cost of switching** — you can abandon a ridge and try another without weeks of rework.

LLMs widen the search, but they do not supply metis or meaning. Catalyst, not replacement.

---

## 4. LLMs Are Shallow — And That’s the Point

LLMs do **not** provide deep skill or metis.
What they provide is **shallow breadth**:

- Typical patterns
- First approximations
- Cross-domain hints
- Explainers
- Rewrites
- Critiques

This is not mastery; it is exploratory fuel.

The productive loop is:

**shallow → score → select → deepen → evaluate → continue or stop**

Depth emerges through guided iteration, tests, and taste.
Humans still supply judgment. The model accelerates the work of discovering what is worth deepening.

---

## 5. Not Just *How* We Design — But *What* We Design

When the cost of exploration collapses, the target of design changes. Most teams are using LLMs to run the old maze faster—AI as a typing accelerator inside a linear process. That is a category error. The shift is not about speed; it is about **reach**.

1. **Clinging to early decisions becomes irrational.** We defended architectural choices because reversals were expensive; sunk costs were real. Now code is cheap; rewriting is cheap. Defending a mediocre solution is no longer prudence; it is vanity. If you can test five architectures in an afternoon, settling for the first one is a failure of rigor.
2. **Cycle time becomes the definition of capability.** In a world of cheap exploration, the team that tests five divergent paths before lunch has a qualitative advantage over the team that spends the day perfecting one. Slow exploration is not cautious; it is risky.
3. **The “safety” of the local maximum disappears.** Exploitation used to feel safer than exploration. When the cost of trying new paths is near zero, staying on a local peak “to be safe” is now the dangerous path.

When trying becomes cheap, the only expensive mistake is refusing to try.

---

## 6. Hickey’s Phases With a Catalyst

LLMs do not replace any design phase.
They give each one more room to work.

- **Describe (increase visibility).**
  LLMs make it cheaper to generate more representations and compare them.

- **Diagnose (find causes).**
  Faster iterations make that conversation richer.

- **Delimit (set boundaries).**
  More iterations expose misfits sooner.

- **Direction (choose a path).**
  Exploration becomes more practical when it is cheap; parallel strategies can be tested early.

- **Design (shape the form).**
  Humans still supply conceptual integrity; the model drafts alternatives quickly.

- **Develop (make it real).**
  Cheap rewrites make it easier to honor quality and repay debt.

The shape of the work stays the same.
The *cost* of moving between phases drops, so you can loop more often and retire bad bets earlier.

---

## 7. What This Demands

This shift does not demand believing LLMs are geniuses. It demands we stop acting like crafters and start acting like editors. The common failure mode is using AI to accelerate the “Describe → Develop” straight line. Real leverage requires redesigning the workflow around **search management**:

- **Shift from builder to orchestrator.** Your job is not just to grind out the artifact. Your job is to generate multiple variations, score them against constraints, and ruthlessly prune the failures. You are not the typist; you are the filter.
- **Define the scoring function.** Breadth without judgment is noise. To explore cheaply, you must evaluate quickly. Is the constraint cycle time? Correctness? User value? Exploration without a scoring function is just drift.
- **Aggressive pruning.** Cheap code creates a new debt: the cognitive load of options. The primary skill of the AI-augmented designer is not adding lines, but deleting dead ends before they consume attention.
- **Deepen only where necessary.** Use the model for shallow breadth. Use your judgment to select the one path worth the expensive investment of human depth.

We stay the driver. But we are driving a different vehicle now, and driving it like a wagon is a waste.

---

## Closing

Licklider foresaw this partnership: humans supplying the judgment, machines supplying the options. When the cost of curiosity approaches zero, the remaining constraint is our own willingness to abandon the paths that aren't working. We do not need to code faster. We need the courage to throw away code faster.

This shifts the seat of our competence. The era of the solitary genius crafting the perfect solution in one go is over. The era of the curator—scanning a dozen possible futures to select the one that works—has begun.

The machines build. We choose.

---
## Appendices

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
</style>

<details class="appendix" markdown="1">
<summary><strong>Appendix A: The Topology of "Tunneling" (Complexity)</strong></summary>

In Stuart Kauffman’s **NK Model**, a "rugged" fitness landscape traps agents on local maxima. To find a higher peak, an agent usually has to step "downhill" (worse performance) to cross a valley.

* **Pre-LLM:** Crossing the valley required expensive refactoring. The cost of the "downhill" move often exceeded the team's political or temporal capital, trapping them on mediocre hills.
* **Post-LLM:** LLMs allow for **"tunneling."** Because we can generate a fully formed alternative architecture in parallel, we can assess the potential of a distant peak without painstakingly traversing the valley of broken code in between.

**The Shift:** We no longer walk the landscape linearly; we sample it discontinuously.
</details>

<details class="appendix" markdown="1">
<summary><strong>Appendix B: The "Shallow-to-Deep" Protocol (Cognition)</strong></summary>

How to integrate "form-manipulating" machines (Bender) with "meaning-making" humans (Polanyi):

1. **Explosion (shallow):** Prompt for N divergent approaches; maximize variance, ignore syntax errors.
2. **Selection (the filter):** Apply the scoring function (cycle time, modularity, correctness); reject N−1 options immediately.
3. **Deepening (the investment):** Inject metis—tacit knowledge, constraints, edge cases—into the surviving option.
4. **Verification:** Run it. If it fails, do not debug linearly; loop back to step 1 with new constraints.

**Key Insight:** Do not spend "Deepening" effort until "Selection" has occurred.
</details>

<details class="appendix" markdown="1">
<summary><strong>Appendix C: The Inequality of Verification (Economics)</strong></summary>

The economic shift is simple: the cost of **generation collapses**, the cost of **verification persists**. Writing variants is cheap; reading, testing, and rejecting them still takes human time. The bottleneck moves from producing to judging.

- Old rationality: productivity was lines written because writing was scarce.
- New rationality: productivity is **bad paths rejected** because judgment is scarce.

David Deutsch’s lens applies: progress is the rate at which we correct errors. Faster generation only helps if we raise our rejection and correction rate to match.
</details>
