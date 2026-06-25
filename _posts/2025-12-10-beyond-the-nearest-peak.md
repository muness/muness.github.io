---
comments: true
date: 2025-12-10 19:24:00 -0400
author: muness
title: "Beyond the Nearest Peak"
toc: true
excerpt: "LLMs make it cheaper to compare curves before committing. They do not replace the compounding work of climbing one. The leadership job is choosing where depth should accumulate, pruning shallow options early, and looking up again when the current curve runs out of headroom."
---

## Breaking the Gravity of Local Maxima

LLMs collapse the cost of exploring alternatives. That changes the leadership problem. The scarce work is no longer producing one plausible plan. It is searching the space well enough to avoid overcommitting to the nearest workable answer.

The hardest part of design has never been coming up with ideas. It is letting go of the first workable idea to look for better ones. Historically, we stayed on local maxima—peaks that were fine for survival but too low for excellence—because moving off them was expensive. Rewrites, refactors, and architectural shifts burned real political and temporal capital.

LLMs change that cost structure. We can now explore multiple paths in minutes. The leadership task becomes steering the search, testing the alternatives, and refusing to defend early choices just because they arrived first.

### The Landscape of Expensive Mistakes

Every design problem creates a landscape. It is multi-dimensional, full of peaks that represent working solutions and valleys that represent broken builds or failed bets.

In the pre-LLM era, moving across this landscape was punishingly expensive. Switching approaches meant throwing away days or weeks of work. Prototypes were slow to build and painful to discard. Because we couldn't afford to explore the valleys, we rationally optimized for safety. We picked the nearest promising hill and defended it, even if a Mount Everest of a solution was within sight.

To escape a local maximum in that world, you needed _skill stacking_. You needed a rare individual who possessed deep domain breadth, knew obscure analogies from other fields, and had the metis — the tacit, situational competence — to guess which dark valley was worth crossing. This was the _hero model_ of design: reliance on the intuition of the few because the empirical testing of the many was too slow.

### The Shift: From Climbing to Tunneling

LLMs do not replace that intuition, nor do they replace the need for deep skill. What they change is the physics of movement.

They collapse the cost structure of exploration. In the past, testing a radically different architecture required building enough of it to feel the pain. Now, you can sample five divergent strategies in an afternoon. You can visualize a solution on a distant peak without painstakingly hiking through the budget and org-debt valley in between.

The work starts to happen one level up. Higher-level abstraction becomes a working medium; you iterate on intent and constraints rather than syntax. The loop of _propose → implement → critique → revise_ — which used to take days or weeks — now can happen in minutes or hours. Architectural alternatives emerge early, while the cost of change is low, rather than late, when the concrete has set.

None of this uncovers a single "right" answer. There is no final, perfect plan hiding in the landscape — only better and worse bets, discovered through faster, cheaper learning.

Speed creates a second problem that many teams miss.

### The Virtue of Shallow Breadth

The mistake most teams make is assuming LLMs provide depth. **They do not**. LLMs provide **shallow breadth**. They offer typical patterns, first approximations, cross-domain hints, and quick critiques. They are not masters; they are infinite interns.

That shallowness is useful because it gives you more surfaces to inspect before you commit. You can prompt for ten approaches, scan them for viability, and discard nine. This is the **"Shallow → Score → Select → Deepen"** protocol.

Depth still emerges, but it emerges after selection. The model accelerates the work of discovering _what_ is worth deepening.

### The Curve Is Not the Landscape

Shallow breadth only matters if it changes where depth lands. When you choose an option, you are choosing the curve your team will climb: the toolchain, operating habits, edge-case knowledge, customer promises, deployment muscle, and scars that repeated effort will accumulate around.

A learning curve is what happens after that choice. Costs fall, quality rises, and hidden constraints become legible because people keep correcting errors in the same direction. An S-curve shows the return on that effort: slow while the system is being understood, steep while improvements reinforce one another, and flat when the architecture runs out of headroom. The landscape question is which curve deserves that accumulation.

Solar PV makes this concrete. In the [module-price series compiled by Our World in Data from IRENA, Nemet, and Farmer/Lafond](https://ourworldindata.org/grapher/solar-pv-prices), photovoltaic modules fall from roughly $128 per watt in 1975 to about $0.26 per watt in 2024. That collapse was not one decisive invention. It was better silicon, better cells, better inverters, better manufacturing, better installation, better financing, and better coordination. None of those improvements alone looked like the revolution. The revolution emerged because many small improvements compounded along a curve with room left to climb.

The incumbent path feels safe because it has years of accumulated learning behind it. A new path may have a higher ceiling and still look worse at first because it has not earned the tools, habits, supply chain, political agreements, and scar tissue that make the incumbent feel obvious. That initial inferiority is the valley.

Before LLMs, even inspecting the valley was expensive. An organization had to build enough of an alternative to discover whether it had headroom. Staying on the current curve was not cowardice. It was often the rational response to exploration costs that were too high to pay casually.

LLMs lower the cost of asking whether another curve is worth climbing. We can sketch several competing architectures, expose assumptions, compare trade-offs, and attack weaknesses before making the full commitment. They do not supply the compounding. Production data, customer contact, failure analysis, process discipline, and thousands of small corrections still come from contact with reality. The model can sketch a new operating model; it cannot pre-install the judgment that comes from operating it under stress. It can identify a hill. It cannot climb it for you.

That creates two symmetric failure modes. Depth without renewed search becomes lock-in: the organization keeps improving a curve whose ceiling is already visible, treating every incremental gain as validation while the opportunity cost of staying grows. Search without sustained depth becomes churn: the organization keeps changing branches before any learning has time to compound, producing a portfolio of promising beginnings and no accumulated advantage.

The leadership task is to alternate deliberately between the two: search broadly enough to choose a curve with real headroom, commit long enough for cumulative improvements to reinforce one another, and reopen the search when marginal gains flatten, constraints change, or a new branch becomes credible.

The Shallow → Score → Select → Deepen protocol is the front end of a learning curve. Shallow breadth expands the candidate set. Scoring chooses where to place the bet. Deepening begins the accumulation. Verification supplies the feedback that bends the curve. The landscape tells us where progress might be possible. The learning curve tells us how progress becomes durable.

### When the Cost Collapses, the Target Changes

When curve selection gets cheaper, the old behaviors get harder to defend.

Most executives are using LLMs, if at all, to run the old maze faster—treating AI as a typing accelerator inside a linear waterfall process. That misses the change in the work. The shift is about reach: the ability to inspect more possible curves before committing scarce depth to one of them.

First, **clinging to early decisions is now a failure of rigor.** We used to defend our first strategic draft because changing direction was expensive. Now that artifacts are cheap, rewriting is cheap. Defending a mediocre solution is no longer prudence; it is vanity. If your organization can test five architectures or approaches in a couple of days, settling for the first one means you did not search hard enough.

Second, **cycle time is search capability.** In a world of cheap exploration, the leadership team that tests five divergent paths by lunch has a qualitative advantage over the team that spends the day overfitting to one. Slow exploration is not cautious. It delays the moment when better curves become visible.

The **"safety" of the local maximum is disappearing.** Exploitation—improving what you already have—used to be safer than exploration. Once the cost of inspecting new paths falls, staying on a local peak "to be safe" becomes dangerous in a different way. Trying and failing can still be expensive. Refusing to look up after the current curve has flattened is worse.

### Acting as Editors, Not Crafters

This changes the work of leadership. We need less identity wrapped around crafting the perfect plan and more discipline around choosing which walls are worth building at all.

The _crafter_ mindset honors the labor of placing every brick. The _editor_ mindset honors the judgment of choosing which walls are worth building. At the executive level, the work becomes search management:

- **Shift from hero to orchestrator.** Your job is not to champion a single solution. Your job is to insist on multiple variations, score them against constraints, and ruthlessly prune the failures. You are not the genius at the whiteboard; **you are the filter for the organization’s attention**.
- **Define the scoring function.** Breadth without judgment is noise. To explore cheaply, you must evaluate quickly. Is the constraint runway? Regulatory risk? Strategic positioning? **Exploration without a clear scoring function is drift** you can't afford.
- **Prune aggressively.** Cheap output creates a new form of debt: the cognitive load of options and initiatives. The primary skill of the AI-augmented leader is not adding more documents, decks, or projects, but **shutting down dead ends** before they consume headcount and political capital.

## What Good Looks Like

How do you do this as an executive? You replace the Slot Machine Workflow with the Tree Search Workflow.

### The Anti-Pattern: The Slot Machine (Bad)

Too many treat the LLM like a slot machine. They toss in a prompt ("Write a strategy for entering the SMB market"), pull the lever, and accept whatever comes out. If it feels off, they tweak language around the edges instead of questioning the direction. This is high-friction and low-return. You are still walking the landscape linearly, just slightly faster.

### The Pattern: The Tree Search (Good)

The editorial workflow for leaders looks like this:

- **The Fan-Out (Minutes 0–10).** Do not ask for a plan. Ask for options. "Propose five distinct strategies for entering the SMB market: partnerships, self-serve product-led, inside sales, ecosystem integrations, and a hybrid. For each, outline benefits, risks, time-to-impact, and required org changes."
- **The Audit (Minutes 10–20).** Read the critique. Apply your constraints. Kill the options that don’t fit your runway, risk appetite, or brand.
- **The Scaffold (Minutes 20–30).** Now, deepen only the survivors. Ask the model to draft just the scaffolds—high-level roadmaps, org charts, and investment theses—for the one or two options that remain.
- **The Deepen (Hours 1–4).** This is where you take over. You have skipped the "valley" of weak strategies without burning cycles on them. Now you use human leadership—your metis—to pressure-test with your team, model the P&L, surface execution risks, and negotiate trade-offs the model cannot see.

### The Difference

The Slot Machine leader spends weeks selling and polishing **the wrong strategy**. The Tree Search leader spends that time exploring viable paths, choosing where learning should accumulate, and iterating through cheap experiments before depth becomes expensive.

## Do Less, Judge More

Licklider foresaw this partnership decades ago: humans supplying the judgment, machines supplying the options. We have finally arrived at that moment, but it changes how leadership work should be valued.

The era of the solitary genius crafting the perfect strategy in one go is over. The useful seat is the editor's seat: scanning a dozen possible futures, choosing the next experiment, and rejecting paths before they become expensive.

The practical adaptation is to invert the ratio of our effort: Do less. Judge more. Stop measuring your value by the volume of activity. Measure it by the learning you create and the paths you reject.

### What “Judge More” Looks Like in Practice

Good judgment is not heroic intuition. It is a steady discipline built on three commitments that fit the new economics of exploration:

- **Do not settle on the first workable option** A workable idea only shows that one path exists, not that it is the best one. Generate contrasting alternatives before choosing. Treat the earliest idea as a reference point, not a winner.
- **Score options before deepening them.** Depth is costly. Before investing, compare options against the same constraints: runway, risk, time-to-impact, differentiation, and feasibility. Let the scoring filter the field so depth lands where it matters.
- **Keep cycle time visible and short.** Exploration speed is now a competitive advantage. Track how long it takes to move from question to options, from options to selection, and from selection to a testable draft. Short cycles prevent overcommitment to weak paths and create continual learning.

These practices give "judge more" a concrete shape. They keep attention on what leadership now optimizes for: quality of search, strength of pruning, and clarity of decision.

### A Portfolio Lens on Search

Another way to see this discipline is through portfolio theory. Options are candidate investments. Scoring is diligence. Deepening is capital allocation. Pruning is cutting losses early before they compound. The aim is not to back the first workable idea, but to maintain a healthy pipeline of alternatives and invest only in the ones that survive the filter. Leadership becomes the management of search quality and portfolio health, not the defense of early drafts.

Search chooses the curve. Compounding climbs it. Judgment decides when to look up again.

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

The Shallow-to-Deep protocol is the cognitive version of tree search. It widens the branch factor early, applies a simple evaluation function, and prunes most of the space before committing depth to the remaining branches.

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
