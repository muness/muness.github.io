---
title: "Score the Work Before You Redesign the Job"
date: 2026-07-12 12:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "LLMs make many information transformations fast and cheap. Before deciding which jobs survive, define the outcome, find the judgment, and test the complete work system needed to produce it reliably."
---

*Who: The A Method for Hiring* begins with a simple discipline: write the scorecard before you choose the person.

The scorecard is not a generic job description. It names the mission, the outcomes a person must produce, and the competencies the work requires. Only then do you find and assess candidates.[^who]

That order matters even more now, but the object being scored has changed. Before asking whether an LLM should assist a person, replace a task, or eliminate a role, we need to redefine the work for a world in which transforming information is suddenly cheap.

## What became cheap

LLMs can find, extract, compare, classify, summarize, translate, and recombine information in seconds. They can turn notes into a plan, a policy into a checklist, a customer history into a suggested response, or a pile of research into a first-pass argument.

Human beings do much of this work too. We search memory, recognize patterns, match a new case to old ones, and assemble an answer from what seems relevant. We are not always good at doing it exhaustively, consistently, or at high volume. An LLM can inspect more material, entertain more combinations, and produce a plausible answer before a person has finished opening the files.

That is real pressure on knowledge work. It is also an opportunity.

When an important input gets cheaper, a production system does not stay the same and merely spend less on that input. Work gets reorganized around the new price. Some tasks shrink. Some old roles come apart. The complements needed to use the cheaper input well become more valuable. That pressure exists even if an LLM never replaces a whole job.

But a plausible answer is not the same as a reliable result. Someone still has to decide whether the question was right, whether the source material can be trusted, which facts matter here, what trade-off to make, and who will answer for the consequence. The model makes a broad class of information transformations cheaper. It does not make the rest of the work disappear.

The mistake is to look at the generated artifact and conclude that the job has been reproduced.

## Jobs hide the unit we need to redesign

A job is a bundle assembled under older constraints. Take a manager. The role may include gathering status, routing decisions, explaining strategy, noticing conflict, coaching people, carrying local history, negotiating priorities, and accepting responsibility when a plan fails.

An LLM can help gather status and condense updates. It may even suggest how to route a routine decision. That does not tell us what happens to the coaching, trust, context, negotiation, or accountability that happened alongside the visible administrative work.

The same problem appears elsewhere. A customer-support representative does not merely produce replies. A lawyer does not merely produce clauses. An analyst does not merely produce a deck. A recruiter does not merely match a résumé to a list of requirements. The artifact is evidence that work happened. It is not the whole capability.

This is why both common stories about AI and jobs are too easy. “AI can produce the artifact, so we need fewer people” ignores the work surrounding the artifact. “AI cannot exercise human judgment, so the job remains intact” ignores how much of the old bundle can now be done differently. Neither story explains much.

## Apply the scorecard to the work system

This is the useful transfer from *Who*: define what must be accomplished before selecting who or what will do it.

For AI-era work, the candidate is no longer just a person. It is a complete configuration of people, models, data, workflow, authority, and controls. The scorecard should answer five questions:

1. **What outcome must this work produce?** Name the quality bar and the failures that would be expensive, dangerous, or hard to reverse.
2. **Which information transformations does it require?** Identify what must be found, compared, classified, summarized, translated, or recombined.
3. **Where is judgment required?** Find the points where someone must frame the question, decide what matters, resolve ambiguity, make a trade-off, or accept responsibility.
4. **What makes the result reliable?** Name the context, data, expertise, relationships, authority, feedback, evaluation, and controls the work needs.
5. **What evidence would change the design?** Test more than one configuration on bounded real work and observe quality, speed, review burden, exceptions, and downstream behavior.

Only then should we redesign the role or the organization.

That sounds slower than buying a tool and setting an adoption target. It is faster than removing a capability you did not know a person was carrying and rebuilding it after quality falls, customers leave, or the remaining staff burn out.

## The complements become the work

Economists have long argued that general-purpose technologies do not create their full value by being dropped into an unchanged organization. They require complementary investments in processes, skills, products, and business models.[^jcurve] Research on earlier information technology likewise found that the payoff was tied to changes in workplace organization, including broader responsibilities and more decentralized decision-making.[^workplace]

LLMs make this concrete. If first-pass analysis becomes cheap, then trustworthy context, evaluation, correction, and judgment become a larger share of the cost. If a manager can follow more work, then coaching, exception handling, and attention become the limit. If a support agent can answer faster, then escalation design, product knowledge, and the ability to recognize the unusual case matter more.

The complements are not generic additions around the model. They depend on the outcome and on what the model made cheap.

This also means the answer will differ across people and settings. In a study of 5,179 customer-support agents, access to a generative-AI assistant increased issues resolved per hour by 14 percent on average and by 34 percent for novice and lower-skilled workers, with little effect on the most experienced workers.[^support] The same tool changed the value of experience differently inside the same job.

That result does not give us a universal staffing ratio. It gives us a better question: what knowledge was the system able to make available to novices, what remained scarce among experts, and how should the workflow and role change as a result?

## Test configurations, not demos

A demo asks whether the model can produce something impressive. A work-system test asks whether the organization can produce a reliable outcome repeatedly.

Suppose a company wants account managers to identify renewal risk earlier. One design gives every account manager an LLM and leaves the job unchanged. Another has the model continuously assemble signals from support, product usage, contracts, and meeting history, then asks account managers to judge the risk and choose an intervention. A third centralizes that analysis in an operations team. A fourth changes which decisions account managers can make without approval.

Those are not four adoption levels. They are four different operating models. Each needs different data, expertise, review, authority, and feedback. The right test is not which one produces the best-looking risk summary. It is which one changes customer conversations early enough to improve renewals without creating false alarms, missed accounts, or a review burden that consumes the gain.

The trial should be allowed to change the scorecard too. Real work will reveal outcomes we forgot, failure modes we understated, and judgment that was invisible until we tried to remove it.

## We have to learn our way through this

I do not know which combinations will work. Nobody does yet. LLMs are changing too quickly, and the work they enter is too varied, for one org chart or human-to-agent ratio to be the answer.

But we can be more disciplined about learning.

Start with the outcome. Separate cheap information transformation from scarce judgment. Name the complements that make the result reliable. Test a complete configuration in real work. Explain what changed and what the evidence showed. Then revise the roles, the technology, and the scorecard together.

We will get some of this wrong. Calling workers obsolete or leaders narcissists will not help us get it right. We need to explain our decisions plainly, expose what we are assuming, and pull together to repair what the experiments teach us.

[^who]: Geoff Smart and Randy Street describe the A Method as Scorecard, Source, Select, and Sell. Their [official excerpt](https://geoffsmart.com/books/who-the-a-method-for-hiring/who-the-book-excerpt/) defines a scorecard through the mission, outcomes, and competencies required for a role.
[^jcurve]: Erik Brynjolfsson, Daniel Rock, and Chad Syverson, [“The Productivity J-Curve: How Intangibles Complement General Purpose Technologies”](https://www.nber.org/papers/w25148), describe the complementary investments required to absorb general-purpose technologies.
[^workplace]: Timothy Bresnahan, Erik Brynjolfsson, and Lorin Hitt, [“Information Technology, Workplace Organization, and the Demand for Skilled Labor”](https://siepr.stanford.edu/publications/working-paper/information-technology-workplace-organization-and-demand-skilled-labor).
[^support]: Erik Brynjolfsson, Danielle Li, and Lindsey Raymond, [“Generative AI at Work”](https://www.nber.org/papers/w31161).
