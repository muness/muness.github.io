---
title: "When AI Changes the Work, the Complements Change Too"
date: 2026-07-12 12:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "LLMs can reduce the work required for some tasks while increasing the need for evaluation, exception handling, judgment, and accountability."
---

Over the past three years, Ford assembled about 350 experienced technical specialists, including former employees and engineers from suppliers, after automated quality systems produced disappointing results. Roughly 300 veteran engineers now act as internal auditors, running mandatory weekly design reviews to find failures before designs reach factories.[^ford]

Ford also put vehicle engineering, manufacturing, supply chain, and quality under one leader, brought suppliers into design earlier, gave plant operators AI vision systems, and expanded automated software testing. In 2026, J.D. Power ranked Ford first among mainstream brands.

Ford did not replace automation with people. The veteran engineers contribute decades of failure knowledge. Suppliers find risks earlier. Operators use AI vision to spot anomalies. Automated tests exercise software at a scale people cannot. One leader owns the handoffs, so teams can act on what each part finds.

Ford changed several things at once, so no single intervention explains the quality improvement. The company redesigned a complete way of producing quality. Each part makes the others more useful. Those parts are complements.

## AI changes what the rest of the system needs

Economists use the word *complement* for something that becomes more useful when combined with something else. A model needs data, context, evaluation, permissions, feedback, and someone who owns the result. Those are complements. So are human expertise, trust, judgment, and relationships when the outcome depends on them.

General-purpose technologies require companies to invent new processes, skills, products, and business models around them. The gains arrive after that work, not merely when the technology is purchased.[^jcurve]

LLMs create this pressure by making a broad class of information work fast and cheap. They can find, extract, compare, classify, summarize, translate, and recombine material in seconds. A customer history becomes a suggested response. Meeting notes become a plan. A policy becomes a checklist. Research becomes a first-pass argument.

When the price of that work falls, the rest of the system does not stay fixed. Some work disappears. Some moves. Some becomes more important. Some has to be invented.

The simple replacement story stops at what the model can do. The organization still has to ask what it needs now that the model can do it.

## Jobs hide the complements inside them

A job is a bundle assembled under older constraints. Take a manager. The visible work may include gathering status, condensing updates, routing decisions, and monitoring progress. The same person may notice a conflict before it becomes expensive, remember why a customer promise was made, coach someone through unfamiliar work, negotiate priorities across teams, and accept responsibility when a plan fails.

An LLM can make the first group cheaper. If the company removes the role based on that surface view, it also removes the second group. The status reports may still arrive while priorities drift, exceptions pile up, executives become the new escalation path, and people lose the coaching that helped them improve.

AI can also create more demand for a complement. If everyone can produce a plan in ten minutes, the company gets more plans. It needs less help writing them and more help choosing among them, reconciling the conflicts, and killing the bad ones. Faster production moves the constraint to judgment.

The same thing happens beyond management. A support representative does not merely produce replies. A lawyer does not merely produce clauses. An analyst does not merely produce a deck. A recruiter does not merely match a résumé to a list of requirements.

Removing a job because its visible artifact became cheap can remove work that was never visible in the artifact.

## Complements do not mean “keep everyone”

This is not a defense of every role or layer. Some work really can disappear. Some outcomes are no longer worth producing. Some old coordination existed only because information moved slowly, and software can remove it without creating another job.

Block is making the case that a large cut can work. In February 2026, it reduced its workforce from more than 10,000 people to fewer than 6,000, saying that AI tools allowed a much smaller team to do more. In its first quarterly report after the cut, Block said production code changes per engineer had risen more than 2.5 times since January while incidents after code changes continued to fall.[^block]

Those are early, company-reported signs consistent with Block's bet. They do not prove that the cuts caused the improvement; Block attributed the results to its AI investments and broader reliability work. We do not yet know whether they will last or whether missing work will appear elsewhere. Some firms may become smaller and better.

Nor is widespread AI replacement the current norm. A nationally representative U.S. Census Bureau working paper found that 66 percent of firms using AI used it only to augment tasks; only 2 percent reported an AI-related decrease in employment.[^census]

The work bundle can change in four ways:

- **Some disappear.** Routine gathering, formatting, routing, and translation may no longer be worth paying people to do.
- **Some move.** An expert who handled every case may instead handle exceptions, maintain the knowledge, or coach the people and models handling routine work.
- **Some grow.** Judgment, evaluation, conflict resolution, and accountability can become more valuable as the amount and speed of output increase.
- **Some must be invented.** The new system may need retrieval, provenance, tests, permissions, escalation rules, model feedback, and maintenance that the old one never required.

“Complement” is not another word for a human being. It is a specific contribution the new system needs to produce an outcome. That contribution might come from a person, software, a different process, a new allocation of authority, or a decision to stop producing the outcome at all.

## The expertise still has to go somewhere

Salesforce describes a narrower version in customer support. Its evidence is self-reported, but the organizational change is concrete. The company says its AI support agent handled 2.6 million conversations and resolved 63 percent of customer questions with satisfaction scores similar to human agents. Its support organization shrank through attrition and redeployment, while hundreds of support engineers moved into growing parts of the company.[^salesforce]

The interesting part is where the expertise went. Salesforce says it doubled the team evaluating the AI agent's answers and conversations. Former support engineers moved into AI operations, customer adoption, renewals, and roles that feed customer problems back into product development. Routine replies became cheaper; product knowledge, evaluation, prevention, and customer context became complements to the new system.

Research on 5,179 customer-support agents points to the same question. A generative-AI assistant increased issues resolved per hour by 14 percent on average and by 34 percent for novice and lower-skilled workers, with little effect on the most experienced workers. The authors found suggestive evidence that the system was making the practices of stronger workers available to newer ones.[^support]

That is a real gain. It also creates a dependency. If experts no longer need to answer every routine question, they can spend more time discovering better practices, handling exceptions, improving the system, and teaching others. If the company concludes that it no longer needs the experts, who creates the knowledge the system will distribute tomorrow?

The study does not answer that. The company has to design and test the answer.

## Use the scorecard to find the missing work

This is where *Who: The A Method for Hiring* becomes useful. Its hiring method starts with a scorecard: define the mission, outcomes, and competencies before interviewing candidates.[^who] Otherwise the impressive candidate starts redefining the job in the interview.

The transfer to AI is straightforward: define the outcome before deciding which combination of people and technology should produce it. But there is an important difference. In hiring, the scorecard describes a job that is assumed to exist. Here, the technology is changing the work, so the scorecard must be a hypothesis that changes as the company learns.

For a company already living with gaps after a cut, I would start here:

1. **Name what got worse.** Which customer outcome, decision, handoff, learning loop, quality measure, or workload changed?
2. **Trace the missing contribution.** What did the eliminated role provide besides the visible artifact? What new work did the faster system create?
3. **Choose how to provide it now.** Restore it, move it, automate it, redesign it, or decide that the outcome no longer matters.
4. **Test the complete configuration.** Run real cases and watch quality, exceptions, review burden, learning, downstream behavior, and who still owns the result.

The same questions belong before a cut. Talk to the people doing the work, observe the exceptions, and remove the task in a bounded trial before removing the role. A diagram of the official process will not reveal all the judgment and repair happening around it.

## The work will come back differently

Where companies do cut too early, I do not expect a simple return to the old organization. The missing function will show up as rework, stale guidance, unresolved exceptions, customer frustration, executive overload, or burned-out survivors. Companies will rebuild it under new titles, move it to experts or operations teams, encode some of it in software, or restore parts of the old role.

Some firms will become genuinely smaller and better. Others will discover that they removed a capability along with a cost. Their results will depend on whether they understood and rebuilt the complements.

I do not know which combination will work for a given company. That is why the explanation matters. When a gap appears, “AI worked” and “AI failed” are both too shallow. Ask which complement changed, where it will come from now, how we will know it works, and who owns the result.

Rebuild the capability, not the old org chart.

[^jcurve]: Erik Brynjolfsson, Daniel Rock, and Chad Syverson, [“The Productivity J-Curve: How Intangibles Complement General Purpose Technologies”](https://www.nber.org/papers/w25148).
[^census]: Kathryn Bonney et al., [“The Microstructure of AI Diffusion: Evidence from Firms, Business Functions, and Worker Tasks”](https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-25.html), U.S. Census Bureau working paper, April 2026.
[^block]: Block's [February 2026 shareholder letter](https://www.sec.gov/Archives/edgar/data/1512673/000119312526076557/d108590dex991.htm) announced the reduction from more than 10,000 employees to fewer than 6,000. Its [May 2026 shareholder letter](https://www.sec.gov/Archives/edgar/data/1512673/000119312526212032/d132441dex991.htm) reported the early engineering measures. Both are company-authored accounts filed with the SEC.
[^ford]: Bloomberg reported Ford's [use of about 350 experienced specialists after disappointing results from automated quality systems](https://news.bloomberglaw.com/tech-and-telecom-law/ford-ai-hiccups-push-carmaker-to-rehire-gray-beard-inspectors). Ford's company-authored [account of its quality overhaul](https://www.fromtheroad.ford.com/us/en/articles/2026/ford-tops-jd-power-initial-quality-study) describes the roughly 300 internal auditors and the organizational, supplier, plant, and testing changes. [J.D. Power's study](https://www.jdpower.com/business/press-releases/2026-us-initial-quality-study-iqs) independently reports the 2026 ranking; it does not establish which change caused it.
[^salesforce]: Salesforce's company-authored accounts of its [AI operations and evaluation changes](https://www.salesforce.com/news/stories/agentic-enterprise-workforce-evolution/) and [support-engineer redeployment](https://www.salesforce.com/news/stories/salesforce-reshaping-workforce-in-age-of-ai/).
[^support]: Erik Brynjolfsson, Danielle Li, and Lindsey Raymond, [“Generative AI at Work”](https://www.nber.org/papers/w31161).
[^who]: Geoff Smart and Randy Street's [official excerpt from *Who: The A Method for Hiring*](https://geoffsmart.com/books/who-the-a-method-for-hiring/who-the-book-excerpt/).
