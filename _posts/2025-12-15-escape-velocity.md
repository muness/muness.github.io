# Escape Velocity

**Breaking the Gravity of Local Maxima**

The hardest part of design isn't having ideas. It is abandoning the "good enough" ideas to keep finding better ones.

Historically, we didn't do this. We stayed on local maxima—hills that were high enough to survive but too low to excel—because the cost of climbing down was simply too high. Scrapping code, rewriting specs, and rethinking architecture cost weeks of political and temporal capital. We were trapped by the gravity of sunk costs.

Rich Hickey’s six phases of design (Describe, Diagnose, Delimit, Direction, Design, Develop) remain the correct map of the territory. But LLMs have changed the vehicle we use to cross it. They lower the cost of exploration so drastically that "sunk cost" loses its grip.

Design is still the work of steering, but we finally have the escape velocity to leave the first hill we find.

### The Landscape of Expensive Mistakes

Every design problem creates a landscape. It is multi-dimensional, full of peaks that represent working solutions and valleys that represent broken builds or failed bets.

In the pre-LLM era, moving across this landscape was punishingly expensive. Switching approaches meant throwing away days of work. Prototypes were slow to build and painful to discard. Because we couldn't afford to explore the valleys, we rationally optimized for safety. We picked the nearest promising hill and defended it, even if a Mount Everest of a solution was just across the ridge.

To escape a local maximum in that world, you needed "skill stacking." You needed a rare individual who possessed deep domain breadth, knew obscure analogies from other fields, and had the metis—the tacit, situational competence—to guess which dark valley was worth crossing. This was the "hero model" of design: reliance on the intuition of the few because the empirical testing of the many was too slow.

### The Shift: From Climbing to Tunneling

LLMs do not replace that intuition, nor do they replace the need for deep skill. What they change is the physics of movement.

Formally, they collapse the cost structure of exploration. In the past, testing a radically different architecture required building it. Now, you can sample five divergent strategies in an afternoon. This allows for a kind of "tunneling" effect: you can visualize a solution on a distant peak without having to painstakingly hike through the budget and org-debt valley in between.

This changes the texture of the work. Higher-level abstraction becomes a working medium; you iterate on intent and constraints rather than syntax. The loop of *propose → implement → critique → revise*—which used to take days—now happens in minutes. Architectural alternatives emerge early, while the cost of change is low, rather than late, when the concrete has set.

Crucially, none of this uncovers a single "right" answer. There is no final, perfect plan hiding in the landscape—only better and worse bets, discovered through faster, cheaper learning.

But this speed comes with a caveat that many teams miss.

### The Virtue of Shallow Breadth

The mistake most teams make is assuming the AI provides depth. It does not. LLMs provide **shallow breadth**. They offer typical patterns, first approximations, cross-domain hints, and quick critiques. They are not masters; they are infinite interns.

But this shallowness is actually the point. It is exploratory fuel.

The new productive loop is to use that shallow breadth to generate options, and then apply human judgment to select which one deserves depth. You prompt for ten approaches, scan them for viability, and discard nine. This is the **"Shallow → Score → Select → Deepen"** protocol.

Depth still emerges, but it emerges through guided iteration and human taste. The model accelerates the work of discovering *what* is worth deepening.

### When the Cost Collapses, the Target Changes

When you accept that exploration is cheap, you must accept that your old behaviors are now irrational.

Most executives are currently using LLMs to run the old maze faster—treating AI as a typing accelerator for their teams inside a linear "waterfall" process. This is a category error. The shift isn't about speed; it's about **reach**.

First, **clinging to early decisions becomes professional negligence.** We used to defend our first strategic draft because changing direction was a nightmare. Now that artifacts are cheap, rewriting is cheap. Defending a mediocre solution is no longer prudence; it is vanity. If your organization can test five architectures or approaches in an afternoon, settling for the first one is a failure of rigor—especially when the goal is not to find *the* answer, but to learn which bets survive contact with reality.

Second, **cycle time becomes the definition of capability.** In a world of cheap exploration, the leadership team that tests five divergent paths before lunch has a qualitative advantage over the team that spends the day overfitting to one. Slow exploration is not cautious; it is risky.

Finally, the **"safety" of the local maximum disappears.** Exploitation—improving what you already have—used to be safer than exploration. But when the cost of trying new paths is near zero, staying on a local peak "to be safe" is actually the dangerous path. The only expensive mistake left is refusing to try.

### Acting as Editors, Not Crafters

This shift demands a fundamental change in identity. We must stop acting like crafters and start acting like editors.

The "crafter" mindset honors the labor of placing every brick. The "editor" mindset honors the judgment of choosing which walls are worth building at all. Real leverage at the executive level requires redesigning your leadership workflow around **search management**:

* **Shift from hero to orchestrator.** Your job is not to champion a single solution. Your job is to insist on multiple variations, score them against constraints, and ruthlessly prune the failures. You are not the genius at the whiteboard; you are the filter for the organization’s attention.
* **Define the scoring function.** Breadth without judgment is noise. To explore cheaply, you must evaluate quickly. Is the constraint runway? Regulatory risk? Strategic positioning? Exploration without a clear scoring function is just drift.
* **Prune aggressively.** Cheap output creates a new form of debt: the cognitive load of options and initiatives. The primary skill of the AI-augmented leader is not adding more documents, decks, or projects, but shutting down dead ends before they consume headcount and political capital.

## What Good Looks Like

How do you actually do this as an executive? You replace the Slot Machine Workflow with the Tree Search Workflow.

**The Anti-Pattern: The Slot Machine (Bad)**
Most executives treat the LLM like a slot machine. They toss in a prompt ("Write a strategy for entering the SMB market"), pull the lever, and accept whatever comes out. If it feels off, they tweak language around the edges instead of questioning the direction. This is high-friction and low-leverage. You are still walking the landscape linearly, just slightly faster.

**The Pattern: The Tree Search (Good)**
The editorial workflow for leaders looks like this:

**The Fan-Out (Minutes 0–10).** Do not ask for a finished plan. Ask for options.
"Propose five distinct strategies for entering the SMB market: partnerships, self-serve product-led, inside sales, ecosystem integrations, and a hybrid. For each, outline benefits, risks, time-to-impact, and required org changes."

**The Audit (Minutes 10–20).** Read the critique. Apply your constraints.
Kill the options that don’t fit your runway, risk appetite, or brand.

**The Scaffold (Minutes 20–30).** Now, deepen only the survivors.
Ask the model to draft just the scaffolds—high-level roadmaps, org charts, and investment theses—for the one or two options that remain.

**The Deepen (Hours 1–4).** This is where you take over.
You have skipped the "valley" of weak strategies without burning cycles on them. Now you use human leadership—your metis—to pressure-test with your team, model the P&L, surface execution risks, and negotiate trade-offs the model cannot see.

**The Difference.**
The Slot Machine leader spends weeks selling and polishing **the wrong strategy**. The Tree Search leader spends that time exploring viable paths, learning and iterating through cheap experiments and simulations.

### Do Less, Judge More

J.C.R. Licklider foresaw this partnership decades ago: humans supplying the judgment, machines supplying the options. We have finally arrived at that moment, but arriving there requires a violent adaptation in how we value leadership work.

This shifts the seat of our competence. The era of the solitary genius crafting the perfect strategy in one go is over. The era of the curator—scanning a dozen possible futures to choose the next experiment—has begun.

To survive this, we must adapt. We must invert the ratio of our effort: Do less. Judge more.

Stop measuring your value by the volume of activity. Measure it by the learning you unlock and the paths you reject. The machines build. We choose.

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

- **Pre-LLM:** Crossing the valley required expensive refactoring. The cost of the "downhill" move often exceeded the team's political or temporal capital, trapping them on mediocre hills.
- **Post-LLM:** LLMs allow for **"tunneling."** Because we can generate a fully formed alternative architecture in parallel, we can assess the potential of a distant peak without painstakingly traversing the valley of broken code in between.

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
