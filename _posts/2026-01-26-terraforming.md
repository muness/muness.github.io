---
comments: true
date: 2026-01-26 09:00:00 -0500
author: muness
title: "Terraforming Is the Job"
toc: true
excerpt: "Your job isn't to use AI tools. Your job is to terraform: reshape the environment so the right work happens by default, and the wrong work gets caught early."
---

<details class="appendix" markdown="1">
<summary><strong>Outline</strong></summary>

- Define terraforming (and contrast with "using tools").
- Show the terraform loop: pre-flight → execute → detect drift → salvage → update memory → repeat.
- Explain steer vs. abort: when to course-correct, when to start over.
- Name what changed: generation got cheap; the constraint moved.
- Explain the leader's new job: steer search, define scoring, install guardrails.
- Apply it across three layers: self, team, tooling (and distribution).
</details>

## Terraforming Is The Job

"You should be terraforming. That is your job as a leader."

That sentence sounds dramatic until you notice what AI did to the economics of work:
it collapsed the cost of generating options, drafts, and prototypes.

If you're still thinking "AI helps me write faster," you're optimizing the wrong thing.
Raising the floor isn't where the gains come from. The shift is reach—blowing up the ceiling on what becomes possible. This applies whether you're a leader, a product manager, a CxO, or a staff/principal IC.

The question is not *what tools do we use?*
It's: **what environment do we build so good work happens by default—and thrash is caught early?**

That's terraforming. In practice: checklists, defaults, guardrails, and feedback loops that steer work without heroics.

The idea isn't new. Research on expert problem-solving shows that experts organize knowledge around deep principles, while novices fixate on surface features. Terraforming applies this to workflow design: organize your environment around constraints and mechanisms, not tools. (See [Appendix: How Experts Think](#appendix-experts) for the research.)

## The Terraform Loop

Terraforming is not a vibe. It's a loop you can run.

1. **Pre-flight (intent + constraints).**
2. **Execute fast.**
3. **Detect drift early** ("are we thrashing?").
4. **Salvage the learning** (keep what changed your understanding).
5. **Update memory + guardrails** so the next run starts closer to truth.

If you've been reading along: this is the operational core behind {% post_url 2026-01-12-taming-the-chaos-dragon %}, and it composes directly with {% post_url 2026-01-07-the-salvage-loop-keep-learning-drop-the-code %}.

## Steer vs. Abort: The Fastest Way To Stop Thrash

One of the weird new freedoms is that "start over" stops being tragic and starts being rational.

Use a simple heuristic:

- **Steer** when the aim is still intact and you're failing on execution details (tests, edge cases, wiring).
- **Abort** when you can't explain why the work exists, the plan keeps reversing, or the outputs violate constraints in ways that require constant patching.

Observable "abort" signals:

- You've changed the approach three times and can't articulate what you learned each time.
- The work is getting bigger while "done" gets fuzzier.
- You're accumulating "we'll clean it up later" debt *before* you have a working core.

When you abort, don't rage-delete—salvage:

- What did we learn?
- What guardrail should exist next time?
- What context was missing at the start?

This is harder than it sounds. Decades of research on the "sunk cost fallacy" show that prior investment—time, money, reputation—creates an emotional weight that distorts judgment. In one classic experiment, participants were 5× more likely to fund a failing project when they had already invested heavily in it. NBA teams keep underperforming draft picks longer than their stats justify, because letting go feels like admitting the original decision was wrong. The antidote is simple but difficult: set kill criteria *before* you start, and evaluate future costs and benefits, not past investments. (See [Appendix: The Psychology of Quitting](#appendix-psychology-quitting) for the research.)

## What Changed (And Why It Forces A Workflow Change)

Most systems don't collapse cleanly under AI. They destabilize.
Because one cost drops and another becomes binding.

- **Generation is cheap.** Options explode.
- **Verification is not.** Reality stays expensive: testing, integration, safety, user impact.
- **Attention is scarce.** The org's cognitive load becomes a constraint.

The practical implication: workflows should optimize for direction and fast falsification, not throughput.

This is why "more output" often produces *less progress*—it's floor-raising dressed up as productivity.
You can generate in any direction. Direction is the scarce thing. The ceiling moves when you control direction.

If you want the deeper version of this, see {% post_url 2025-12-10-beyond-the-nearest-peak %}.

## The Leader's New Job: Steer Search

In an AI-assisted world, the job is not "produce artifacts."
The job is:

- **Widen** the space of options early (cheap).
- **Score** options against constraints (not vibes).
- **Prune** hard (attention is scarce).
- **Deepen** only what survives.

In other words: you're managing a search process.
If you don't define the scoring function, you don't control the search—you just raise the floor while the ceiling stays fixed.

Here's a lightweight scoring function you can actually use:

- **Outcome clarity:** does this change something observable?
- **Constraint fit:** does it respect the real constraints (time, safety, politics, runway)?
- **Verification burden:** how expensive is it to prove correct?
- **Reversibility:** if this is wrong, how hard is it to undo?
- **Leverage:** if this works, does it unlock new capability (or just polish)?

The reversibility question deserves special attention. Jeff Bezos famously distinguishes "one-way door" decisions (irreversible, require thorough validation) from "two-way door" decisions (easily reversed, can use a lightweight process). The insight: "many decisions are reversible, two-way doors... so what if you're wrong?" When the mechanism of action is clear and the change is reversible, swift action beats analysis paralysis. When it's irreversible, slow down. (See [Appendix: When to Act on Theory](#appendix-act-on-theory) for the research.)

## Levels of Response: From Tarp to Terraform

Not all "fixes" are equal. There's a progression:

- **Tarp over the problem.** Action without premise. You don't understand why it's broken, but you cover it up. This is what almost everyone does by default.
- **Nearest peak.** Local optimization within the current framing. Better, but you're still trapped by assumptions you haven't examined.
- **Beyond the nearest peak.** You step back, explore the solution space, and find a fundamentally better approach before committing. (See {% post_url 2025-12-10-beyond-the-nearest-peak %}.)
- **Terraforming.** You reshape the environment so the problem doesn't recur—and similar problems become easier to solve.

Here's a micro example that drives me up the wall. A user reported CPU spikes on a Raspberry Pi 3B running my audio bridge. The request: "make polling configurable." That's a tarp. It doesn't fix the problem; it lets you tune how badly the problem manifests.

The nearest peak would be optimizing the polling interval. Still polling. Still O(n) CPU per interval.

The actual fix was switching to an event subscriber model ([PR #107](https://github.com/open-horizon-labs/unified-hifi-control/pull/107)). Adapters publish state changes; consumers subscribe. O(1) per actual change instead of O(n) per interval. The mechanism of action is obvious. The rollback is trivial.

Did I load-test it with 100+ simulated clients? No. I shipped it. The result: ["now using negligible CPU with the new mechanism."](https://forums.lyrion.org/forum/user-forums/3rd-party-hardware/1804977-roon-knob-includes-lms-support?p=1807360#post1807360)

This is the opposite of "just do something" action bias—the tarp mentality. It's a common failure mode. Tarps are action *without* premise: you don't understand why it's broken, but you do something anyway.

The action bias is remarkably strong. Bar-Eli et al. (2007) studied penalty kicks in professional soccer and found that goalkeepers dove left or right 94% of the time—even though staying in the center is statistically optimal (kicks are roughly uniformly distributed). Goalkeepers reported feeling worse about conceding a goal when they "did nothing" than when they dove and still missed. The need to feel like you're "trying something" overrides the rational strategy, even for experts in high-stakes situations. This same bias shows up in business: people prefer visible action over optimal "wait and observe," because inaction *feels* like failure even when it's the right call.

What I'm describing is action *with* premise: the mechanism of action is clear, the change is reversible, and the verification burden of "proving it first" exceeds the cost of being wrong.

You can simulate processes, reason through mechanism-of-action chains, and act on defensible premises. That's not recklessness; that's basic science: understand, hypothesize, test. Once you've done that, the burden of proof shifts to the naysayers.

The research backs this up. When Apollo 13's oxygen tank exploded, engineers on the ground jury-rigged a CO₂ scrubber adapter from plastic bags, tape, and cardboard—using first principles of chemistry and airflow to improvise a life-saving solution in hours. But the Challenger disaster shows the other edge: engineers warned that O-ring seals would fail in cold temperatures, a straightforward material science prediction, but management overrode them under schedule pressure. First-principles reasoning works when it's *heard* and *acted upon*. The environment has to make that happen by default. (See [Appendix: High-Stakes Lessons](#appendix-high-stakes) for the cases.)

## Terraforming Is Not Tool Worship

Tools matter, but they don't define the work.

If you want a clean mental model:

- A craftsperson says: "I need better tools."
- A terraformer says: "I'll use what I have, and I'll improve the tools as I go."

Terraforming is an identity shift: your job becomes *environment design*, not artifact production.

## Terraform Yourself: Make Direction Cheap

The first layer is personal practice. The point is to make "start right" low friction.

Use a minimal pre-flight before any agentic session:

<div class="callout callout--note" markdown="1">
```text
Aim (1 sentence):
What "done" looks like (observable):

Constraints / guardrails (3–7 bullets):

Known landmines (what drift looks like here):

One question that, if unanswered, makes action premature:
```
</div>

The point is not more planning.
The point is **orientation**.

## Terraform Teams: Make Guardrails Ambient

The second layer is team practice. This is where most "AI adoption" fails—not because the tools are weak, but because the organization is unconstrained.

Three concrete moves:

1. **Require pre-flight.** No dive pack, no run.
2. **Standardize overrides.** If you break a guardrail intentionally, log it and keep moving.
3. **Measure reversals.** Track work you undo, not work you produce.

Terraforming is what makes speed safe.

## Terraform Tooling: Make The Practice Stick

The third layer is tooling. Rituals don't spread when they're annoying.

Terraforming tooling means:

- Defaults are opinionated.
- Context is easy to inject at the start of a run.
- Guardrails are easy to create when you learn something the hard way.
- Logs are lightweight, so learning compounds.

Two traps to avoid:

- **Silent injection.** If the system changes behavior without visibility and consent, you'll lose trust and drift into policy-by-accident.
- **Menus instead of rails.** If users have to assemble the workflow from plugins and knobs, most will never get to the loop at all.

There's also a subtler trap: **over-structuring**. Too many guardrails, approval layers, and rigid protocols can suppress the very learning and adaptation you're trying to enable. Donald Sull calls this "active inertia"—organizations respond to change by doing more of what used to work, accelerating their decline. Research on organizational design shows that mechanistic structures (high formalization, strict hierarchies) perform well in stable environments but fail in dynamic ones. The terraforming mindset requires continuous pruning: guardrails that no longer serve the work should be removed, not accumulated. (See [Appendix: The Risks of Over-Structure](#appendix-over-structure) for the research.)

This is also where "distribution" sneaks in:
the ability to install, share, and reuse your environment matters as much as the environment itself.
For a concrete case of what happens when distribution becomes the binding constraint, see {% post_url 2026-01-20-code-rush-to-deploy-drag %}.

## Terraforming Is A 7-Day Experiment

If you want to make this real without turning it into a transformation program:

1. Pick one workstream with real stakes.
2. Require a 5-minute pre-flight (aim + constraints) before any agentic run.
3. Keep a single list of guardrails for the week.
4. If you thrash, abort fast: salvage learning and restart clean.
5. At the end of the week, review: what constraints were real, what guardrails stuck, what should become default tooling?

## The Point

AI didn't remove the need for leadership.
It removed the scarcity of drafts.

When drafts are cheap, the binding constraint becomes direction, judgment, verification, and the environment that carries those forward.

Terraform that environment and the ceiling moves.
Ignore it and you'll ship faster in the wrong direction.

---

<details id="appendix-experts" class="appendix" markdown="1">
<summary><strong>Appendix: How Experts Think</strong></summary>

Research on expert problem-solving reveals a consistent pattern: what separates experts from novices isn't raw knowledge—it's how that knowledge is organized.

**The Chi Study**

Chi, Feltovich, and Glaser (1981) conducted a now-classic study asking physics experts and novices to categorize problems. Novices grouped problems by surface features—pulleys, inclined planes, springs. Experts grouped them by underlying principles—energy conservation, Newton's second law, work-energy theorems.

The experts "mentally represented and directed their problem solving by the 'deep' principles" of the problem. This organization allowed them to transfer knowledge to novel situations, while novices were stuck pattern-matching to problems they'd seen before.

**Why This Matters for Terraforming**

The same principle applies to workflow design. Surface-level organization—by tool, by artifact type, by team—produces fragile systems that break when context shifts. Principle-level organization—by constraint, by mechanism, by feedback loop—produces systems that adapt.

When you terraform, you're organizing your environment the way experts organize knowledge: around the deep structure, not the surface features.

**Intuition as Compiled First Principles**

This also reframes what "intuition" means. Expert intuition isn't the opposite of first-principles reasoning—it's first-principles reasoning that has been internalized through years of feedback. An experienced doctor's "gut feeling" about a case stems from unconscious pattern recognition of fundamental symptom combinations. A senior engineer's instinct that "this architecture won't scale" reflects compiled knowledge about bottlenecks and failure modes.

The implication: trusting expert intuition and demanding first-principles reasoning aren't opposed. Intuition *is* first-principles reasoning, just running faster because it's been practiced into automatic recognition.

**References**

- Chi, M. T. H., Feltovich, P. J., & Glaser, R. (1981). Categorization and representation of physics problems by experts and novices. *Cognitive Science, 5*(2), 121–152.
- Klein, G. (1998). *Sources of power: How people make decisions*. MIT Press.

</details>

<details id="appendix-act-on-theory" class="appendix" markdown="1">
<summary><strong>Appendix: When to Act on Theory</strong></summary>

A core tension in decision-making is when to act immediately based on theoretical understanding versus when to demand exhaustive validation. The research suggests the key variables are **reversibility**, **stakes**, and **mechanism certainty**.

**The Two-Way Door Framework**

Jeff Bezos, in his 2016 Amazon shareholder letter, distinguishes between Type 1 decisions (one-way doors, hard to reverse) and Type 2 decisions (two-way doors, easily reversible). He argues that many decisions are Type 2, and "can use a light-weight process." If a decision is based on sound reasoning and is reversible, act swiftly—mistakes can be undone.

This perspective has empirical support. Studies in rapid prototyping (Anghel & Belu, 2010) found that quickly testing ideas based on fundamental design assumptions—with willingness to reverse—significantly reduced development time and iteration cycles without sacrificing quality.

**When "Ship on Theory" Goes Wrong**

Medicine provides the cautionary tales. In the 1980s, anti-arrhythmic drugs were widely prescribed to post-heart-attack patients based on solid mechanistic reasoning: suppress abnormal heartbeats, prevent sudden death. The large-scale Cardiac Arrhythmia Suppression Trial (CAST) revealed the opposite—patients on the drugs had 3.3% higher absolute mortality than those on placebo. The drugs could provoke lethal arrhythmias in some patients, an effect invisible to the initial theory.

Similarly, the COX-2 inhibitor Vioxx was designed to reduce pain without stomach ulcers—and it worked as intended. But blocking COX-2 had unintended cardiovascular effects, leading to heart attacks and strokes. The lesson: even well-grounded mechanism-of-action reasoning can miss critical complexity.

**The Heuristic**

- **Reversible + clear mechanism = act fast, iterate.**
- **Irreversible + high stakes = validate thoroughly.**
- **Mechanism uncertain = build in verification loops.**

The successful organizations (like Amazon) are those that correctly classify which category a decision falls into—and don't treat all decisions as one-way doors.

**References**

- Anghel, D.-C., & Belu, N. I. (2010). Study of the impact of the rapid prototyping method on design process performance. *Proceedings of the International Congress on Automotive and Transport Engineering (CONAT 2010)*.
- Bezos, J. (2016). 2016 letter to shareholders. Amazon.com.
- CAST Investigators. (1989). Preliminary report: Effect of encainide and flecainide on mortality in a randomized trial of arrhythmia suppression after myocardial infarction. *New England Journal of Medicine, 321*(6), 406–412.
- Howick, J., Glasziou, P., & Aronson, J. K. (2010). Evidence-based mechanistic reasoning. *Journal of the Royal Society of Medicine, 103*(11), 433–441.

</details>

<details id="appendix-psychology-quitting" class="appendix" markdown="1">
<summary><strong>Appendix: The Psychology of Quitting (and Salvage)</strong></summary>

One of the toughest decisions is whether to continue investing in a course of action or cut losses. Research shows humans are systematically bad at this—we persevere when we should quit, and the bias has a name: **escalation of commitment**.

But there's a complication: sometimes persistence *does* pay off. The research on "grit" shows that perseverance correlates with higher achievement in education, training, and long-term goals. So when does persistence pay, and when is it throwing good resources after bad?

**The Key Distinction: Salvage**

The research suggests a clean heuristic: **persistence pays off when setbacks are learning opportunities on the way to a still-feasible goal**. This is what distinguishes grit from escalation:

- **Grit**: Persist while learning from feedback. Each setback changes your understanding. You can articulate what you learned.
- **Escalation**: Persist while ignoring feedback. You continue mainly to justify past investments or protect ego. You can't articulate what changed.

The salvage loop operationalizes this: when you abort, you extract the learning. If you can't name what you learned, you weren't doing grit—you were escalating.

**The Sunk Cost Fallacy**

Arkes and Blumer (1985) demonstrated that prior investments create emotional attachment that distorts judgment. When told an R&D project was 90% complete, 85% of participants chose to pour in more funds. When told it was just starting (no prior investment), only 17% would fund it—for an identical project.

Staw and Hoang (1995) found the same in the NBA: players drafted early received significantly more playing time and longer tenure than lower-drafted players *with equivalent performance*. Teams "stuck" with high draft picks, consistent with sunk cost bias.

**The Grit Research (and Its Limits)**

Duckworth et al. (2007) showed that grit—defined as perseverance and passion for long-term goals—predicts achievement beyond IQ or talent alone. West Point cadets with higher grit were more likely to complete summer training; National Spelling Bee finalists with higher grit practiced more and ranked higher.

However, a meta-analysis by Credé et al. (2017) found that grit has "only moderate" predictive power and overlaps heavily with conscientiousness. Beyond a certain point, dogged persistence alone isn't a guarantee of success—and can blind you to negative feedback.

Annie Duke (2022) argues that knowing *when* to quit is as important as knowing when to persevere. Her recommendation: establish "kill criteria" based on first principles before you start. If milestone X isn't reached by time Y with input Z, then pivot or close.

**Observable Escalation Signals**

- Continued investment despite negative feedback
- Inability to articulate what was learned from setbacks
- Scope expansion as a response to failure ("if we just add this...")
- "Saving face" as a driver of decisions

**Antidotes**

1. **Set kill criteria before starting.** Define in advance what signals would trigger a stop.
2. **Separate decision-maker from original advocate.** Bring in outside views.
3. **Evaluate future costs/benefits only.** Past investments are sunk—ignore them.
4. **Require articulated learning.** If you can't name what you learned from the setback, you're escalating, not persisting wisely.

**References**

- Arkes, H. R., & Blumer, C. (1985). The psychology of sunk cost. *Organizational Behavior and Human Decision Processes, 35*(1), 124–140.
- Brockner, J. (1992). The escalation of commitment to a failing course of action. *Academy of Management Review, 17*(1), 39–61.
- Credé, M., Tynan, M. C., & Harms, P. D. (2017). Much ado about grit: A meta-analytic synthesis of the grit literature. *Journal of Personality and Social Psychology, 113*(3), 492–511.
- Duckworth, A. L., Peterson, C., Matthews, M. D., & Kelly, D. R. (2007). Grit: Perseverance and passion for long-term goals. *Journal of Personality and Social Psychology, 92*(6), 1087–1101.
- Duke, A. (2022). *Quit: The power of knowing when to walk away*. Portfolio/Penguin.
- Staw, B. M., & Hoang, H. (1995). Sunk costs in the NBA: Why draft order affects playing time and survival in professional basketball. *Administrative Science Quarterly, 40*(3), 474–494.

</details>

<details id="appendix-over-structure" class="appendix" markdown="1">
<summary><strong>Appendix: The Risks of Over-Structure</strong></summary>

While some structure reduces error, **excessive structuring—too many rules, guardrails, and approval layers—often hinders learning, innovation, and adaptability**.

**Active Inertia**

Donald Sull's analysis of corporate failures (HBR, 1999) found that the issue wasn't inaction—it was that companies responded to change by doing "more of the same." He calls this "active inertia": an organization's tendency to follow established patterns of behavior even when the environment shifts dramatically.

Firestone Tire in the 1970s met the radial tire innovation with its old bias-ply processes, accelerating its decline. The structures and routines that made them successful became the very rigidities that prevented adaptation.

**Mechanistic vs. Organic Structures**

Burns and Stalker's foundational research (1961) found that companies in rapidly changing markets performed better with organic structures (low formalization, decentralized decisions, fluid roles) than mechanistic ones (strict hierarchies, many rules). A 2023 Deloitte survey found that 84% of executives believe organizational agility is critical for success in today's environment.

The implication: structure should fit the context. In dynamic environments, excessive guardrails become liabilities.

**The Learning Paradox**

Amy Edmondson's research in hospitals revealed a counterintuitive finding: units with *more* reported errors were often safer. The reason was psychological safety—staff felt free to discuss mistakes, enabling learning. Units with strict, blame-oriented bureaucracies under-reported errors, creating an illusion of safety while missing opportunities to improve.

**Guardrail Hygiene**

The literature agrees that excessive bureaucracy is detrimental when it prevents truthful information flow and timely action. Organizations must periodically review and prune unnecessary rules. The optimal amount of structure is the minimum needed to coordinate work and manage genuine risks—not the maximum that feels "safe."

**References**

- Burns, T., & Stalker, G. M. (1961). *The management of innovation*. Tavistock.
- Edmondson, A. C. (2004). Learning from failure in health care: Frequent opportunities, pervasive barriers. *Quality and Safety in Health Care, 13*(Suppl II), ii3–ii9.
- Sull, D. N. (1999). Why good companies go bad. *Harvard Business Review, 77*(4), 42–52.

</details>

<details id="appendix-high-stakes" class="appendix" markdown="1">
<summary><strong>Appendix: High-Stakes Lessons</strong></summary>

High-stakes environments illuminate both the power and the limits of first-principles reasoning.

**Apollo 13: First Principles Saves Lives**

When an oxygen tank explosion crippled Apollo 13, engineers faced a life-threatening constraint: the Lunar Module's CO₂ scrubbers were round, but the only spares (from the Command Module) were square. Using first principles of chemistry and engineering, the ground team designed an improvised adapter from materials on hand—plastic bags, tape, cardboard. They tested the jury-rigged device on Earth, then instructed the crew remotely.

The solution worked. The case is often cited as NASA's finest hour of problem-solving: rather than being paralyzed by lack of pre-made solutions, the team returned to fundamentals and innovated under extreme time pressure.

**Challenger: First Principles Ignored**

The Challenger explosion shows the failure mode. Engineers at Morton Thiokol knew that O-ring seals became brittle in cold temperatures—basic material science. The night before the launch, which was unusually cold, they recommended against launching below 53°F.

NASA management, under schedule pressure, overrode the warning. The Rogers Commission found "a conflict between engineering data and management judgments" and noted that the decision-making process had bypassed key safety personnel.

The lesson isn't that first-principles reasoning failed—it's that the organizational environment failed to elevate critical mechanistic knowledge to decision-makers. Terraforming means building systems where warnings like this can't be brushed aside.

**Vioxx: Mechanism Myopia**

Vioxx (rofecoxib) was designed using mechanism-based reasoning: selectively inhibit COX-2 to reduce pain without inhibiting COX-1 (which causes stomach ulcers). It worked as designed—Vioxx did spare the stomach.

But blocking COX-2 had unintended cardiovascular effects. After release, heart attacks and strokes increased among users. The mechanism-of-action reasoning was *partial*; the body's web of mechanisms was more complex than the initial theory.

**The Synthesis**

First-principles reasoning is indispensable for novel problems, but:

1. It must be *heard*—organizational structures must elevate expert warnings.
2. It must be *tested*—even solid theories need validation when stakes are high.
3. It must be *humble*—mechanisms are often more interconnected than initial models suggest.

**References**

- Patel, N. V. (2014, November 10). The greatest space hack ever. *Popular Science*.
- Presidential Commission on the Space Shuttle Challenger Accident. (1986). *Report of the Presidential Commission on the Space Shuttle Challenger Accident*. U.S. Government Printing Office.
- Staton, T. (2012, June 4). Study eyes mechanisms to blame for Vioxx risks. *FiercePharma*.

</details>
