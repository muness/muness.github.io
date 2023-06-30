---
title: "Documenting Strategy: Lessons from Leading Data and Engineering Teams"
date: 2023-06-28 15:00:00 +0500
updated: 2023-06-30 16:50:00 +0500
author: muness
comments: true
pin: true
---

At multiple points in my career, I've noticed that teams are more engaged and successful when their strategy is clear, cohesive and inspiring. This realization motivated me to explore various frameworks for developing and communicating strategy. The most valuable of these was the [Strategy and Tactics](https://cdn.ymaws.com/www.tocico.org/resource/resmgr/files-members/toc_korea_2008_the_strategy.pdf) (S&T) framework by Dr. Eliyahu M. Goldratt. This framework inspired me to develop my own approach.

I know this framework can inspire and align teams because I've seen it work! I've also used a variant of this, but applied at the individual career growth level to accelerate my personal growth and to help others do the same, with various levels of success.

A major caveat is that this post is focused on the _structure_ of a strategy document, not about developing the strategy. That is hard and is out of scope here. For now I'll say that my favorite take on strategy development is to understand where you are, where you're going and that the way there is usually not the most obvious one. [Design In Practice](/posts/design-in-practice-writeup/) provides a starting point.

This essay really fits into a series that I've considered writing for a years:

- Using [The First 90 Days](https://hbr.org/books/watkins) to learn about a new challenge or role.
- Use early learnings to collaboratively develop strategy.
- The [Five Dysfunctions of a team](https://www.tablegroup.com/product/dysfunctions/) and how they prevent buy-in.
- Documenting and revisiting strategy (this article).
- Making strategy relevant from planning on through to daily tasks.
- Adopting the ideas in [Drive](https://www.danpink.com/books/drive/) by developing individual growth plans. They use an adapted version of the process presented here.
- Reflecting on progress and communicating it to stakeholders.

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

## Example strategy document - Data Governance strategy  

The following is a small scale example of documenting strategy using the framework presented. It's a real world one from a consulting engagement I've been working on. I was brought in to "Implement a Data Governance function" for a newly created Data team within an established, 300M+/yr business.

1. **Vision**: Accelerate value delivery through Data Governance
2. **Stakeholder Needs and Strengths**:
    - Internal SMEs and external analysts
    - Stakeholder Strengths: Highly technical with deep domain expertise.
    - Needs: Greater collaboration with the rest of the business, faster value delivery to stakeholders.
3. **Context**:
    - Accomplishments: Quick setup of a pipeline that processes data from dozens of upstream sources into a data warehouse.
    - Strengths: Competent, fast moving cross-functional team.
    - Weaknesses: Need for faster delivery of value to stakeholders.
    - Opportunities: Greater collaboration with the rest of the business.
    - Threats: Losing trust due to mis-represented data or questionable data.
4. **Strategy**:
    - Establish shared understanding for internal stakeholders.
    - Develop trust in the data.
    - Understand Fabric's governance capabilities and integrations.
    - Enable data distribution.
    - Enable meta-programming of transformation.
5. **Tactics**:
    - Tier 1: Port the Excel Glossary to an off the shelf data catalog.
    - Tier 1: Prototype a test harness suitable within a Spark (Synapse) environment.
    - Tier 1.5: Explore and understand Microsoft Fabric's governance capabilities and integrations.
    - Tier 2: Set up a catalog that allows PowerBI and Serverless SQL Server to distribute data.
    - Tier 2: Develop a mapping system to enable meta-programming of transformation.

## Critique of the Example Strategy document for a Data function  

And here’s a critique, courtesy of ChatGPT-4 of the example strategy using the criteria presented above:

The example strategy follows the framework well and provides clear and actionable steps. Let's critique it:

1. **Vision**: "Accelerate value delivery through Data Governance"
   - This is clear, concise, and aspirational. It offers a common purpose that stakeholders can rally behind and serves as the guiding star for strategic decisions.
2. **Stakeholder Needs and Strengths**:
   - Stakeholders are well-identified and their strengths and needs are clearly stated. The identified needs align with the vision, which is crucial for strategic alignment.
3. **Context**:
   - The accomplishments, strengths, and weaknesses are clearly stated. The opportunity identified aligns with the overall vision and strategy, which is beneficial for strategic planning.
   - However, the threat is somewhat vague. It could be improved by providing a more specific example or detailing potential consequences.
4. **Strategy**:
   - The strategies are clear and directly address the stakeholders' needs, which are key for effectiveness. They are broad enough to be flexible in the face of changing circumstances.
5. **Tactics**:
   - The tactics are well-defined and directly support the strategy. They are actionable, measurable, and leave room for the leadership to decide on execution.
   - However, for the tactic "Tier 1: Port the Excel Glossary to an off the shelf data catalog," it might be helpful to specify which data catalog will be used or how the best one will be selected.

Overall, the example strategy is solid and aligns well with the given framework. It provides a clear roadmap of what needs to be done to meet the vision, which is crucial for effective strategy communication. Now let's evaluate the example strategy against the criteria of necessity, viability, sufficiency, and connectedness:

1. **Necessity**: The strategy and tactics provided are necessary for achieving the vision. The strategy addresses the needs of stakeholders, and the tactics are essential for implementing the strategy. For instance, porting the Excel Glossary to a data catalog is a necessary step in establishing a shared understanding among stakeholders.
2. **Viability**: The strategy is viable as it focuses on improving collaboration and accelerating value delivery, which are realistic and achievable goals. The tactics are also viable; they propose practical actions like prototyping a test harness and exploring Microsoft Fabric's governance capabilities. However, as mentioned earlier, for the tactic "Port the Excel Glossary to an off the shelf data catalog," it would be more viable if a specific data catalog tool was identified or a process for selecting one was outlined.
3. **Sufficiency**: The set of tactics seems sufficient to meet the higher-level objectives outlined in the strategy. They cover a range of areas from establishing shared understanding to enabling data distribution and meta-programming of transformation. However, the sufficiency of the tactics may also depend on the specific context of the organization, and whether there are other, unmentioned needs or challenges that need to be addressed.
4. **Connectedness**: The vision, strategy, and tactics are well connected. The tactics directly support the strategy, and the strategy aligns with the vision. Each level of the strategy is aimed at achieving the level above it, ensuring that all actions are moving in the same direction.

---

## Closing Thoughts

Strategy that works today may not work in a year. So treat it as a journey of discovery, learning, and adaptation. Use the process to make sense of the world, make informed decisions, and take purposeful action.

Once developed and embraced, a strategy document serves as a compass. It guides us in the right direction, keeps us aligned with our vision, and helps us make decisions that are consistent with our goals. But like any compass, it's only useful if we refer to it regularly, understand it, and apply it wisely.

Make strategy a part of everyday conversations. Use it to inspire, to guide, and to drive your teams forward. Help them create their our own future. And hence a journey worth embarking on.

Many thanks to Ale Cabrera and Drazen Urch for providing feedback that made this post better.
