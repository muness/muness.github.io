---
title: "Score the Work Before You Redesign the Job"
date: 2026-07-12 12:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "A model can produce an artifact without replacing the capability behind it. Adapt the scorecard from Who to define the outcome, locate judgment, and test the people, models, and complements needed to produce it."
---

*Who: The A Method for Hiring* tells managers to write a scorecard before they interview anybody. Define the mission, the outcomes, and the skills the work requires. Then assess candidates against that scorecard.[^who]

Without it, the candidate starts defining the job. Someone charming walks into the room, tells a great story, and the interviewers quietly revise what they thought they needed. The process feels rigorous. Mostly they are reacting to the person in front of them.

We are making the same mistake with LLMs across entire organizations. A model produces a good summary, a plausible analysis, a clean contract clause, or a working piece of code. The artifact is impressive, so we start asking how many people it can replace. We are interviewing the candidate before we have defined the job.

## The model changed the price of part of the job

LLMs are good at transforming information. Give one a pile of text and it can find, extract, compare, classify, summarize, translate, and recombine the material in seconds. A customer history becomes a suggested response. Meeting notes become a plan. A policy becomes a checklist. Research becomes a first-pass argument.

People do much of this work too. We search memory, match a new case to old ones, decide what seems relevant, and assemble an answer. We are not especially good at doing it exhaustively, consistently, or at high volume. A model can inspect more material and produce more possible answers before a person has finished opening the files.

That changes the price of a broad class of knowledge work. When an important input becomes cheaper, companies do not keep the rest of the system fixed and merely spend less. They reorganize around the new price. Some tasks shrink. Old jobs come apart. The things needed to use the cheap input well become more valuable. The pressure is real even if an LLM never replaces a whole job.

## A job is a bundle, not an output

Take a manager. The visible work may include gathering status, condensing updates, routing decisions, and monitoring progress. The same person may also notice a conflict before it becomes expensive, remember why a customer promise was made, coach someone through work they have never done, negotiate priorities across teams, and accept responsibility when a plan fails.

The first group of tasks is now cheaper. That creates pressure to change the role. It tells us almost nothing about what should happen to the second group.

The same problem appears throughout knowledge work. A customer-support representative does not merely produce replies. A lawyer does not merely produce clauses. An analyst does not merely produce a deck. A recruiter does not merely match a résumé to a list of requirements.

Jobs bundle information processing with judgment, relationships, authority, memory, and accountability. LLMs change the cost of those ingredients unevenly. Looking at a generated artifact and declaring the job reproduced is like hiring the candidate because the interview went well.

The opposite story is just as shallow. Human judgment matters, therefore the old job must remain intact. That also skips the work of explaining what changed.

## Score the outcome and the work around it

The useful transfer from *Who* is the order of operations: define what must be accomplished before selecting who or what will do it.

The scorecard now has to describe the outcome and all the work needed to produce it, not an inherited role. Start with the outcome and the ways it can fail. Then separate four parts of the work:

1. **Transformation:** What information must be found, compared, classified, summarized, translated, or recombined?
2. **Judgment:** Where must someone frame the question, decide what matters, resolve ambiguity, make a trade-off, or accept responsibility?
3. **Complements:** What context, data, expertise, relationships, authority, feedback, evaluation, and controls make the result reliable?
4. **Evidence:** What would we have to observe before changing the workflow, role, or organization?

Once the scorecard exists, the candidate changes. It is no longer the model by itself. The candidates are complete ways of doing the work: a person in the existing job, a person using an LLM, a smaller team with better data and different authority, or a centralized group that operates the model for everyone else.

Compare those configurations against the scorecard. A model can produce an artifact after someone supplies the prompt and context. The business outcome still requires the rest of the system.

## What happens to expertise?

One early study shows why this matters. Researchers studied 5,179 customer-support agents using a generative-AI assistant. Access to the tool increased issues resolved per hour by 14 percent on average and by 34 percent for novice and lower-skilled workers, with little effect on the most experienced workers.[^support]

The authors found suggestive evidence that the system was making the practices of stronger workers available to newer ones. That is more useful than a claim that “AI improves support productivity.” It tells us something about the mechanism: knowledge that used to travel through experience and informal learning could now reach a novice during the work.

It also raises the next question. If fewer experts handle routine cases, who keeps discovering the better practices that the system will distribute tomorrow? Who notices the new exception, updates the guidance, checks whether the suggested reply is actually helping the customer, and owns the result when it is wrong?

The answer may be that expert work moves away from producing every reply and toward handling exceptions, improving the system, coaching people, and defining the quality bar. It may also be that a company cuts too deeply, stops producing the knowledge its tool depends on, and discovers the loss months later. The study does not answer that. A real operating test has to.

## Look for what the cheaper work now requires

Economists use the word *complement* for something whose value rises when it is combined with something else. General-purpose technologies have historically required companies to invest in new processes, skills, products, and business models before the gains showed up.[^jcurve] Earlier research found that information technology worked together with organizational changes such as broader responsibilities, decentralized decisions, and self-managing teams.[^workplace]

LLMs will require their own complements, but “people, process, and technology” does not tell us what they are. Look at the information the model made cheaper to transform, then ask what the new way of working requires.

If first-pass analysis becomes cheap, trustworthy context, evaluation, correction, and judgment take a larger share of the work. If a manager can follow more activity, coaching, exception handling, and attention become the limit. If a support agent can answer faster, recognizing the unusual case and fixing the source of recurring questions may matter more than composing the next reply.

Some complements will be software: retrieval, permissions, tests, logs, and feedback loops. Some will be organizational: different decision rights, escalation paths, incentives, and team boundaries. Some will be human: expertise, taste, trust, care, negotiation, and the willingness to own a decision.

We cannot know which ones matter by staring at the org chart. We have to follow the outcome and see what the new system needs.

## Run the interview on real work

A demo asks whether the model can produce something impressive. A useful test asks whether a complete configuration can produce a reliable outcome repeatedly.

Give competing configurations the same bounded work. Measure the intended outcome, not just output volume. Watch the review burden, the exceptions, the downstream failures, and what people do with the answer. Name the person who still owns the result. Then ask the question a scorecard makes possible: is this configuration good enough?

If it is not, change it and run the work again. The trial should be allowed to change the scorecard too. Real work will expose outcomes we forgot, expensive failures we understated, and judgment that was invisible until we tried to remove it.

I do not know which combinations will work. LLMs are changing too quickly, and the work they enter is too varied, for one org chart or human-to-agent ratio to be the answer. That uncertainty is a reason to run better experiments, explain the decisions, and keep the people doing the work involved in redesigning it.

The scorecard will not give us the future of work. It can keep us from hiring the future after one impressive interview.

[^who]: Geoff Smart and Randy Street describe the A Method as Scorecard, Source, Select, and Sell. Their [official excerpt](https://geoffsmart.com/books/who-the-a-method-for-hiring/who-the-book-excerpt/) defines a scorecard through the mission, outcomes, and competencies required for a role.
[^jcurve]: Erik Brynjolfsson, Daniel Rock, and Chad Syverson, [“The Productivity J-Curve: How Intangibles Complement General Purpose Technologies”](https://www.nber.org/papers/w25148), describe the complementary investments required to absorb general-purpose technologies.
[^workplace]: Timothy Bresnahan, Erik Brynjolfsson, and Lorin Hitt, [“Information Technology, Workplace Organization, and the Demand for Skilled Labor”](https://siepr.stanford.edu/publications/working-paper/information-technology-workplace-organization-and-demand-skilled-labor).
[^support]: Erik Brynjolfsson, Danielle Li, and Lindsey Raymond, [“Generative AI at Work”](https://www.nber.org/papers/w31161).
