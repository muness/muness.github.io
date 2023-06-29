---
title: "Communicating Data Strategy"
date: 2023-06-28 15:00:00 +0500
author: muness
comments: true
pin: true
---

At multiple points in my career, I've noticed that teams are more engaged and successful when their strategy is clear, cohesive and inspiring. This realization motivated me to explore various frameworks for developing and communicating strategy.

The most valuable of these was the [Strategy and Tactics](https://cdn.ymaws.com/www.tocico.org/resource/resmgr/files-members/toc_korea_2008_the_strategy.pdf) (S&T) framework by Dr. Eliyahu M. Goldratt. This framework inspired me to develop my own approach.

I know it can inspire and align Engineering and Data teams and make no further claims than that because I've seen it work! I've also used a variant of this, but applied at the individual career growth level to accelerate my personal growth and to help others do the same, with various levels of success.

A major caveat is that this post is focused on the _structure_ of a strategy document, not about developing the strategy. That is hard and is out of scope here. For now I'll say that my favorite take on strategy development is to understand where you are, where you're going and that the way there is usually not the most obvious one. [Design In Practice](/posts/design-in-practice-writeup/) provides a starting point.

This essay really fits into a series that I've considered writing for a years:

- Using [The First 90 Days](https://hbr.org/books/watkins) to learn about a new challenge or role.
- Use those learnings to collaboratively develop a strategy.
- The [Five Dysfunctions of a team](https://www.tablegroup.com/product/dysfunctions/) and how they prevent buy-in.
- Documenting and revisiting strategy (this article).
- Making strategy relevant from planning on through to daily tasks.
- Adopting the ideas in [Drive](https://www.danpink.com/books/drive/) by developing individual growth plans. They use an adapted version of the process presented here.
- Reflecting on progress and communicating it to stakeholders (marketing our work).

If you're interested in one or more of those, let me know!

## The Importance of Strategy Clarity  

In his book, [Common Sense Leadership Matters](https://www.peteblaber.com/items/common-sense-leadership-matters), Pete Blaber highlights patterns of healthy leadership. Among these are a shared sense of purpose, free-flowing communication, and the presence of the 'why' behind orders or directives. These elements are crucial for strategy communication.

A well-communicated strategy inspires and engages employees, providing clarity on what we're doing, why we're doing it, and their part in it. It fosters a common sense of shared purpose and direction, encourages collaboration across boundaries, and ensures the logic of 'why' is always present and available on request.

Clarity is vital for a team's freedom to make sensible choices on the spot and to speak up when something doesn't make sense.

## A Framework for Communicating Strategy  

In summary, to communicate strategy, I put together 2-3 pages per functional area covering the following:

- **Vision**: This is the inspirational, common purpose that brings us together to serve a greater need.  
- **Stakeholder Needs and Strengths**: Here we identify which stakeholders we need to satisfy to meet our vision and what their needs are. We also state their strengths and how we can leverage them.
- **Context**: This includes our accomplishments and a Strength, Weaknesses, Opportunities and Threats analysis summary.
- **Strategy**: This is what we'll do to address stakeholder needs. It doesn't go into the specifics of how.
- **Tactics**: These are the actions each subgroup will take to address the strategy. They leave room for the next level of leadership to decide on how to execute them.
- **Tactics and Strategy Tree**: These are supplemented / fleshed out by following a strategy and tactics tree down through the issue tracking system we use.

### Vision

The vision is the inspirational, common purpose that brings us together to serve a greater need. It's the guiding star for all strategic decisions and actions.

A clear, compelling vision provides direction and motivation, helping everyone in the organization understand where they're going and why it matters. It should be aspirational and far-reaching, pushing us to strive for something beyond our current capabilities.

### Stakeholder Needs and Strengths

Understanding and addressing stakeholder needs is a crucial part of any strategy. Stakeholders can include anyone who has an interest in the organization's success, such as customers, employees, shareholders, and the wider community.

By identifying which stakeholders we need to satisfy to meet our vision and what their needs are, we ensure that our strategy is focused on delivering value where it's most needed. This helps us build strong relationships with our stakeholders and ensures that our actions and decisions are aligned with their needs and expectations.

Understanding and leveraging the strengths of stakeholders, is crucial for strategy execution. Our strategy should not only address stakeholder needs but also build on their strengths and resources. Think about what they have to offer you and incorporate that.

### Context

The context includes our accomplishments and a SWOT overview of our strengths, weaknesses, opportunities, and threats.

By understanding our current situation, we can make more informed strategic decisions. Our accomplishments show us what we're capable of and where we've had success in the past. A SWOT analysis helps us understand our internal capabilities and external environment, providing a comprehensive picture of our current situation. This allows us to build on our strengths, address our weaknesses, seize our opportunities, and mitigate our threats.

### Strategy

The strategy outlines what we'll do to address stakeholder needs. It doesn't go into the specifics of how. This is where we define our approach to achieving our vision. The strategy should be clear and focused, providing a roadmap for our actions. It should also be flexible, allowing us to adapt to changes in our environment or circumstances.

### Tactics

The tactics are the specific actions each department or team will take to address the strategy. They leave room for the next level of leadership to decide on how to execute them. Tactics should be actionable and measurable, providing a clear path to achieving our strategic objectives. They should also be aligned with our overall strategy, ensuring that all our actions are moving us in the same direction.

I expect each subteam to expand on these tactics, developing their own strategy & tactics tree for them.

### The Strategy and Tactics Tree

The tactics are the specific actions each function or team will take to address the strategy. They leave room for the next level of leadership to decide on how to execute them. Tactics should be actionable and measurable, providing a clear path to achieving our strategic objectives. They should also be aligned with our overall strategy, ensuring that our actions are moving us in the same direction. While I aspire to have most of the day-to-day work line up with a top level tactic, realistically getting to 70% (as measured by throughput) is a good place to be.

In the context of Engineering and Data teams, we can think of these tactics as forming a Strategy/Tactics (S&T) Tree, similar to how we structure our work into Epics, Stories, Issues, and Tasks. Each level of this tree represents a different level of granularity and specificity, but all are connected and contribute to the overall strategy.

- **Epics**: These are high-level objectives that align directly with the strategy. They are broad in scope and long-term in nature. Epics are necessary to achieve the strategy and provide the overarching direction for the work to be done.
- **Stories**: These are specific initiatives that contribute to an Epic. They are more detailed and shorter-term. Stories are viable ways to achieve the objectives outlined in the Epic, and there may be multiple Stories within an Epic.
- **Issues**: These are specific problems or opportunities identified within a Story. They are very specific and short-term. Issues are sufficient actions to complete a Story, and there may be multiple Issues within a Story.
- **Tasks**: These are the smallest units of work, each addressing a specific Issue. They are extremely specific and short-term. Tasks are connected actions that, when completed, resolve an Issue.

Each level of this S&T Tree should satisfy the criteria of necessity, viability, sufficiency, and connectedness. This doesn't need to be explicit, though I expect team members to hold each other accountable to them in ceremonies such as planning, standup and PR review:

- **Necessity**: Each level must be necessary to achieve the level above it. If a Task, Issue, or Story is not necessary to achieve its parent, it may not be a valuable use of resources.
- **Viability**: Each level must be a viable way to achieve the level above it. If there are alternative ways to achieve the parent level, we should consider how the chosen path outperforms them.
- **Sufficiency**: The set of Tasks, Issues, or Stories at each level must be sufficient to meet the higher-level objective. If not, additional measures may be needed.
- **Connectedness**: Each level must fit into the hierarchy, with the top level being the Epic that aligns directly with the strategy.

By structuring our work in this way, we align with our strategy. This approach also allows for flexibility and autonomy at lower levels, while maintaining strategic alignment to higher levels.

## Revisiting a Strategy Document  

Strategy should be reviewed and updated based on past performance and impact. This takes advantage of learnings from past successes and failures. It encourages us to reflect on our achievements and challenges, understand their impact, and use these insights to refine our strategy.

We revise also review the strategy document when our SWOT changes. Here are some reasons that may happen:

1. **Changes in the External Environment:** The external environment includes market trends, customer behavior, technological advancements, regulatory changes, and competitive landscape. Significant changes in these factors can impact the opportunities and threats identified in a SWOT analysis. For example, a new technology (Hello there, Generative AI!) might render a company's product obsolete, turning a previous strength into a weakness.
2. **Changes in the Internal Environment:** The internal environment includes organizational structure, resources, capabilities, and culture. Changes in these areas can impact the strengths and weaknesses identified in a SWOT analysis. For instance, a company might acquire new resources or develop new capabilities that turn a previous weakness into a strength.
3. **Strategic Decisions:** Strategic decisions made by the company can also lead to changes in a SWOT analysis. For example, a decision to enter a new market might open up new opportunities, while a decision to discontinue a product line might eliminate certain weaknesses.
4. **Performance Feedback:** The results of past strategies and actions provide valuable feedback that might lead to changes in a SWOT analysis. If a strategy fails to deliver the expected results, it might reveal previously unidentified weaknesses or threats.
5. **New Information or Insights:** New information or insights can come from various sources, such as market research, customer feedback, employee suggestions, or business analytics. Such information can provide a fresh perspective on the company's strengths, weaknesses, opportunities, and threats.

In light of such changes, it's important for companies to regularly review and our SWOT analysis and strategy document. This helps us keep the strategy relevant and effective as the world changes.

## Making Strategy Relevant

A strategy document fails if it sits in a drawer. Instead, strategy should be relevant to decision making and planning. It should be socialized in 1:1 conversation, referenced in all-hands and become familiar to all.

Acting with intent is a crucial aspect of making strategy relevant. Every decision, every action taken should align with the overall strategy. This principle ensures that we are not just reacting to situations but proactively driving towards our strategic goals. It encourages us to question if our actions are contributing to our vision and strategy, and if not, to rethink and realign.

---

## Example strategy document - Data function strategy  

The following is an example of applying the framework for a data organization. It's a real example, from a company we’ll call Company X. I leave out the Epic/Story/Issue/Task strategy & tactic tree because I couldn't figure out a way to make it valuable for illustrative purposes and it was unwieldy to add to a post.

### Data function - Vision Statement Example

"We aspire to leverage data to enrich our understanding of the needs and behavior of users, customers, and partners at Company X. Through data insights and products, we aim to uncover new strategic opportunities, drive faster user-centric decisions, and make Company X's products smarter."

### Data function - Stakeholder Needs Example

Our stakeholders include users, customers, and partners. They need:

- Proactive data narratives that serve as catalysts for business change.  
- Cross-domain cutting insights that break down knowledge silos at Company X.  
- Data products that nudge users towards optimal experiences.  
- Leading indicators that facilitate reacting before opportunities pass us by or problems grow too large.  

### Data function - Context Example

Our accomplishments include:

- Enhancing infrastructure resilience through data mining and pattern recognition.  
- Establishing valuable thought partnerships that we leverage to Influence product roadmaps, pricing structure and understanding revenue from various customers, features and integrations.  
- Spreading data expertise across Company X.  

Our SWOT analysis reveals:

- Strengths: Ubiquity across Company X, data expertise, ability to influence strategic roadmaps.  
- Weaknesses: Limited local expertise in specific business domains.  
- Opportunities: Proactive recommendations to company, zone, and team strategies/roadmaps, direct influence on user/partner experience.  
- Threats: Sub-optimization as operations grow and become more complex.  

### Data function - Strategy Example

Our strategy is built on three pillars: Influence, Integrate, and Empower.

- **Influence:** We influence strategic roadmaps by proactively offering compelling data narratives that serve as catalysts for business change.  
- **Integrate:** We consume and leverage the local expertise of stakeholders, distill it, standardize it, and serve it back at scale.  
- **Empower:** All employees and products have access to data, analysis, and tools to answer their own questions. We provide education and coaching on how to leverage data in their day-to-day work.

### Data function - Tactics Example

- **Influence:** Steer high-stakes human decisions and strategic roadmaps through proactive, novel analysis and quantitative research. Advocate for global optimization over local optimization when they are in conflict.  
- **Integrate:** Establish valuable thought partnerships that we can leverage to Influence. Make our recommendations and models more actionable. Spread expertise across Company X.  
- **Empower:** Make data easy to use. Offer a mix of training, coaching, and documentation to enable stakeholders to do their own day-to-day analysis and opportunity sizing. Improve data quality and reliability.  

## Critique of the Example Strategy document for a Data function  

And here’s a critique, courtesy of ChatGPT-4 of the example strategy using the criteria to illustrate how it might be improved in future iterations:  

- **Necessity:** The objectives outlined in the strategy are necessary to meet the vision of leveraging data to enrich Company X’s understanding of the needs and behavior of users, customers, and partners.  
- **Viability:** The tactics listed under each pillar are viable and actionable. However, it would be beneficial to explore alternative tactics and assess how the chosen ones outperform them.  
- **Sufficiency:** The set of tactics is sufficient to meet the higher-level objectives. However, it would be useful to periodically review and update them to ensure they continue to meet the evolving needs of the stakeholders.  
- **Connected:** The strategy fits into a hierarchy, with the top level being the vision. However, it could be more explicit about how each pillar and tactic contribute to the overall vision.  

---

## Closing Thoughts

Strategy that works today may not work in a year. So treat it as a journey of discovery, learning, and adaptation. Use the process to make sense of the world, make informed decisions, and take purposeful action.

Once developed and embraced, a strategy document serves as a compass. It guides us in the right direction, keeps us aligned with our vision, and helps us make decisions that are consistent with our goals. But like any compass, it's only useful if we refer to it regularly, understand it, and apply it wisely.

Make strategy a part of everyday conversations. Use it to inspire, to guide, and to drive your teams forward. Help them create their our own future. And hence a journey worth embarking on.
