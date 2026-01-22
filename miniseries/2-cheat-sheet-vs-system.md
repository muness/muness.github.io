# Episode 2 — Cheat Sheet vs. System

KiteRail Logistics had the opposite problem from Harborview.

Harborview was slow and resigned. KiteRail was fast and scattered.

They had pilots everywhere: agents drafting specs, agents summarizing meetings, agents writing ETL scripts, agents “helping” with incidents. Each team had its own workspace, its own plugin list, its own way of asking. Every demo looked great. Nothing compounded. The pattern was polite chaos — impressive outputs, no shared yardstick, no reuse. In logistics, small errors compound into real money: missed delivery SLAs triggered rebates, and a pricing mistake could erase a quarter’s margin on a lane.

One team claimed it saved 40% of its time. Another said it had slowed them down. No one could explain the difference. Success depended on the person in the room, not the system around them. Incidents still escalated to the same on-call thread, and the path from merged code to working install was just as brittle as last quarter.

Dax loved their energy. “This is what adoption looks like,” he said.

Myles hated it. “This is what thrash looks like.”

The weekly “AI Council” met in a glass room on the third floor. The VP of Engineering, ops leads, and a rotating cast of power users joined on video. Rina had the agenda. Myles had the template. Jonah brought a laptop full of little scripts nobody in the room had ever seen.

Talia, a senior engineer from Pricing, shared her screen. An agent was generating a shipping-pricing service. It was clean, polished, and wrong.

It optimized a discount metric that no longer existed. It normalized for a demand signal KiteRail didn’t measure. It violated a customer contract clause that lived in a Confluence page nobody updated.

Talia stopped it, corrected it, and restarted. The agent drifted again, now optimizing for margin at the expense of on-time delivery — a KPI the COO had personally tied to renewal. Last week a pilot team had shipped without a /review pass and violated a carrier clause; the rebates hit before anyone noticed the dashboard.

A product manager shrugged. “It’s almost there,” she said.

Kieran watched with mild boredom. “Just tell it what you want,” he said. “Install it and ask it things.”

Someone laughed. Someone else nodded. The room was halfway to a tool debate.

An ops lead chimed in. “If we standardize on one vendor, we can at least train everyone.”

A security manager shook his head. “We can’t just pick a vendor. The data flows are different for each line of business.”

A product director cut in. “We don’t have time to turn this into a six-month platform project. We need leverage now.”

Kieran opened his mouth to answer, but Rina got there first.

Rina cut in. “Let’s start with the problem space. What are we optimizing for?”

Myles pulled up the Northstar template and put it on the screen.

## /problem-space

**Optimization target:** pricing changes that increase margin without breaking trust.  
**Constraints treated as real:** regulatory audit, data latency, customer contracts, incident risk, on-time delivery commitments.  
**Constraints that are not real:** “we can’t document because we’re agile,” “we can’t review because it slows us down.”

A security lead pointed at the list. “Data residency is a constraint too.”

Talia added, “So is the contract clause that lives in three systems.”

The list got longer. The VP of Engineering exhaled. “You just wrote the reasons we can’t move fast.”

Rina kept her voice steady. “No. We just wrote the reasons we keep moving fast in the wrong direction.”

The VP of Engineering squinted. “What does this have to do with agents?”

Myles had learned not to answer that question directly. If he did, the room would collapse into a plugin fight. Instead, he changed the frame.

He wrote a second header.

## /problem-statement

Old statement: “How do we make agents code faster?”  
New statement: “How do we become collectively right, fast enough to harness agents safely?”

He let it hang there. The room shifted. Not agreement. Attention.

Myles tapped the phrase “collectively right.” “If it only works when Kieran is at the keyboard, it’s not a system,” he said. “It’s a dependency. We need a loop that survives a new hire and a Friday deploy.”

Dax nodded once, slowly. The line landed with him, even if it didn’t yet land with the room.

Kieran raised a hand. “I don’t want to be a jerk,” he said, “but isn’t the cheat sheet literally ‘install it and ask it things’?”

“For you,” Myles said. “Because you already have the model in your head. You can keep correcting it. You are the guardrail.”

He pointed back at Talia’s screen. “But if the team is the guardrail, the team becomes the bottleneck.”

Rina softened it. “Different personalities need different ladders. Some people will explore without prompting. Some people need a starting rail, or they won’t get out of the station.”

The VP leaned back. “So what are you saying? We mandate a setup?”

The word *mandate* hit the room like a siren.

Dax kept his eyes on Myles, curious, not yet committed.

Myles shook his head. “Not a setup. A method. A loop.”

He paused, then added the line he’d learned to say carefully. “Driving fast without guardrails just gets you lost sooner. It feels great right up until it ruins your weekend.”

The room laughed, but the line stuck.

Myles drew four boxes on the whiteboard and titled the next section.

## /solution-space

**Tarp:** write a cheat sheet; tell teams “try harder.”  
**Nearest Peak:** standardize a toolchain; hope uniformity creates quality.  
**Beyond the Nearest Peak:** standardize a learning loop (pre-flight, review, salvage), not the exact tools.  
**Terraform:** build defaults + guardrails so “drift” becomes loud, and “wrong” becomes difficult.

Myles circled the first box. “A tarp is what you throw over a leak when you need to ship. It works for a storm. If you leave it there, you’re living under tarps.”

He underlined “Terraform.” “Terraforming is when the environment stops producing the same failure. It’s harder work, but it sticks.”

Talia glanced at the demo. “I just want the thing to stop drifting,” she said.

“That’s why we need the loop,” Jonah said. “It’s not the tool. It’s the move.”

Rina answered. “A shared way to ground work, execute, and learn.”

The VP tapped his pen. “So we’re going to search for the right loop instead of polishing the first demo.”

“That’s the job now,” Myles said. “Search, prune, test. Don’t settle on the first idea just because it shipped a shiny output.”

Kieran leaned back. “That sounds like process.”

“It’s not process,” Myles said. “It’s a safety system. The loop is the guardrail, not the meeting.”

Dax glanced at the room. “So what does this mean for the pilots we already have?”

Rina took the marker. “It means we stop grading pilots by how slick the demo is. We grade them by whether the team can be collectively right without a hero in the room.”

The meeting ended with a familiar compromise. “Let’s pilot it.”

The VP pointed at Myles as he stood. “Pilot doesn’t mean mandate,” he said. “If we call it that, half the org will dig in.”

Myles nodded. “We’ll call it a method. We’ll make it falsifiable.”

Dax added, “And reusable. If it works, we should be able to hand it to a team we don’t trust yet.”

In the hallway, Kieran smirked. “Pilot purgatory.”

Myles nodded. “Unless we define graduation criteria.”

Rina, who had been burned by bad pilots before, was already opening a doc.

They reconvened in a smaller room with a whiteboard and a printer that always jammed. Jonah pulled up a template. Talia brought the spec draft that had just drifted. Dax hovered, quiet, watching for whether the method could stand on its own.

“Name it,” Rina said. “If we can’t name it, we can’t reuse it.”

Jonah typed as she talked, turning the cursor so the group could read.

### Artifact: Pilot Graduation Criteria — KiteRail Logistics

**Purpose:** Define what “success in two weeks” means for the pilot, so the outcome is falsifiable and portable.

## /aim (for the pilot)

Within 2 weeks, one team can:
- run a pre-flight that aligns humans and agents
- detect drift early
- salvage learning and restart clean
- ship a change without re-litigating the same failures
- show that a new hire can follow the loop without a power user in the room

Dax leaned in. “What proves it?”

Rina added a line below the bullets. “Two consecutive /review passes where the drift checklist finds no aim or constraint misses,” she said. “If we can do that on a real change, we graduate.”

Kieran scratched his chin. “So the criteria isn’t a demo. It’s a repeatable move.”

Myles nodded. “Exactly.”

Dax didn’t look up. “And if it doesn’t hit the criteria, we shut the pilot down,” he said. “No zombie pilots. We either fix the loop or we stop calling it a pilot.”

Kieran frowned, then nodded. “Okay. That’s at least falsifiable.”

Rina turned the monitor back to the room. “We need the drift check too. Otherwise the pilot will just be a nicer demo.”

Myles looked at Talia. “Want to build it together?”

Talia exhaled and nodded.

### Artifact: Drift Checklist — /review

**Purpose:** Run a fast, shared review on agent outputs to catch misalignment before work hardens.

Checks:
- **Aim match:** Does the output align to the /aim, or is it optimizing a proxy?
- **Constraint check:** Are the named constraints honored (audit, contracts, latency, incident risk)?
- **Mechanism clarity:** Is the causal lever explicit, or is it vibe-driven?
- **Data freshness:** Are inputs current, source-known, and trustworthy?
- **Feedback loop:** What signal will tell us we’re wrong, and how fast will we see it?

Rina held the checklist up. “Let’s use it right now. We don’t need a ceremony; we need the move.”

She waved to the doorway and pulled in Mara from Customer Success, who had been waiting for a ride. “You don’t write code, right?” Rina asked.

Mara shook her head. “I read contracts and renewal notes.”

“Perfect,” Rina said, handing her the checklist and the draft aim. “Tell us if this would keep your customers.”

Mara scanned the aim line and the constraints list. “It never says on-time delivery,” she said. “If that isn’t explicit, the agent will optimize margin and we’ll break trust.” She tapped the missing contract clause. “And this clause is invisible. That’s a fail before the code starts.”

The room shifted. No one had to explain a data pipeline. The system had already done its job.

She drew a new header and spoke the command aloud.

## /review

They walked the draft spec line by line. The aim called for “protect on-time delivery while raising margin.” The spec’s core metric optimized margin alone. The contract clause was missing. The data source for demand was a nightly export from a system that often missed peak surges.

Rina read the first checklist item out loud. “Aim match. Do we see on-time delivery anywhere in the mechanisms?”

Talia scanned the section. “Only in the background. The code path optimizes discount bands.”

Jonah tapped the table. “So the mechanism is wrong, not the syntax.”

Rina moved to the next item. “Constraint check. Contracts?”

A silence. Then Talia shook her head. “It’s in Confluence, not in the spec.”

Kieran grimaced. “If we ship this, we’ll violate our own clause.”

“Data freshness,” Rina said. “Is that demand feed real-time?”

“No,” Talia said. “Nightly, and it lags during peak.”

“Feedback loop?” Jonah asked. “How do we know we’re wrong?”

Talia pointed at a dashboard. “We don’t see the failure for a week.”

On the third check, Talia stopped. “So even if the code runs, it’s wrong.”

“Wrong in a specific way,” Jonah said. “Which means we can salvage it.”

Myles wrote the final header and underlined it.

## /salvage

They captured the learning: the demand signal needed to be real-time; the contract clause had to be encoded as a constraint, not a comment; the aim had to be pinned to on-time delivery before margin.

Jonah typed the three bullets directly under the /salvage heading, then added one more: “If a constraint lives only in a page, it doesn’t exist.”

Rina circled it. “That becomes a guardrail if the pilot proves it.”

Myles nodded. “And if it doesn’t, we drop it. That’s the point of the loop.”

Rina typed as they spoke, turning it into a short checklist to reuse. “We salvage before we restart,” she said. “Otherwise we just repeat the same failure with a new prompt.”

The room was quiet. Not because they were convinced, but because the loop had done something the demo hadn’t. It had named the drift and given them a way to move without blame.

Kieran broke the silence. “If this is the pilot, I’ll try it.”

Talia looked at him, surprised. “For real?”

“For real,” he said. “I can keep my plugins. I just have to keep the moves.”

Myles let the moment land. Skepticism hadn’t vanished. But curiosity had ignited.

---

## End-of-Episode Memo (Northstar)

**What shifted**
- The room stopped debating tools and started debating the constraint: collective correctness.
- “Mandate” stayed on the table, but the loop gave people a third option: shared moves without forced tools.

**Commands used**
- `/problem-space` to name the real constraints
- `/problem-statement` to reframe away from “faster agents”
- `/solution-space` to make “mandate vs method” visible
- `/aim` to define a pilot with graduation criteria
- `/review` to run the drift checklist in the room
- `/salvage` to capture learning before restarting

**Artifacts produced**
- Pilot Graduation Criteria — KiteRail Logistics
- Drift Checklist — /review (with explicit trigger to /salvage)

**Constraint discovered**
- Skepticism: power users can self-correct; teams can’t scale heroics without shared moves.
