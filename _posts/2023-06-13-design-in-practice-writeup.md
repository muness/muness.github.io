---
comments: true
date: 2023-06-13 16:40:00 +0500
author: muness
title: 'Design in Practice: A Writeup'
---

In his talk, [Design in Practice](https://www.youtube.com/watch?v=c5QF2HjHLSE&list=PLZdCLR02grLpIQQkyGLgIyt0eHE56aJqd&index=1), Rich Hickey explores design. He defines design as the process of making a plan for how we're going to do something. The progress of design is measured by our increased understanding and the decisions we make along the way. 

Hickey outlines six phases of design:

1. **Describe the Current State**: State where you are, the symptoms you're experiencing, and the context in which you're operating.
2. **Diagnose the Problems**: List possible problems and select one to focus on. This is the stage of problem discovery. 
3. **Delimit the Problem Scope**: Define the scope of the problem. At this point, you have a notion of the problem and your task is to state it succinctly.
4. **Decide on a Direction**: Define your strategy and approach. It's where you decide where you're going. 
5. **Design the Solution**: Decide on the specifics of how you're going to implement your plan.
6. **Develop the Solution**: Build what you've designed.

Throughout these phases, there's an ongoing process of decision-making.

## General guidance

### Write Things Down

Hickey emphasizes the importance of writing things down during the design process. He provides four guiding principles for writing:

- **Consistency**: Ensure that the information is consistent throughout the design process. This helps to avoid confusion and misinterpretation.
- **Specificity**: Be specific in your descriptions and explanations. This helps to avoid ambiguity and ensures that everyone has a clear understanding of the design.
- **Explanatory**: Explain your decisions and the reasoning behind them. This helps others to understand your thought process and the rationale behind your design choices.
- **Succinctness**: Be brief, clear and complete. He contrasts this with being concise: "I only have 6 words to explain this, so I'll just leave out a critical detail".

### Decisions: An Ongoing Process

Throughout design there's an ongoing process of decision-making. You need to constantly decide what's in or out of scope, and whether to proceed or pivot based on your findings. This is not a one-time event but a continuous process that shapes your design journey.

Early on in design I suggest a lightweight process for documenting decisions. A doc or spreadsheet with a list of the decision, why it was made, when is sufficient. [Architecture Decision Records](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html)s are a good way to capture decisions once you get to the design and development phases.

## The Phases of Design

Hickey outlines six phases of design: Describe, Diagnose, Delimit, Direction, Design, and Dev. Each phase is crucial in its own way and contributes to the overall success of the design process.

### Phase 1: Describe

The first phase of design is to describe the situation. This involves stating where you are, the symptoms you're experiencing, and the context in which you're operating. It's important to note that this is not the problem statement. The focus here is on stating what you know.

For example, if you're designing a new feature for a software application, you might start by describing the current state of the application, the user feedback you've received, and the market conditions you're facing.

### Phase 2: Diagnose

The second phase is to diagnose, which involves listing possible problems and selecting one to focus on. This is the stage of problem discovery. You can apply logic, use your intuition, or employ a divide-and-conquer strategy. The scientific method can also be useful here to prove or disprove your hypotheses.

For instance, if users are complaining about slow load times on your website, you might hypothesize that the issue could be due to large image files, inefficient code, or server issues. You would then test each of these hypotheses to identify the actual problem.

### Phase 3: Delimit

The third phase is to delimit, or define the scope of the problem. At this point, you have a notion of the problem and your task is to state it succinctly. The technique here is to craft a problem statement that succinctly states unmet user objectives and causes, not symptoms, anecdotes, or desires. Remember, "We don't have feature X" is never the problem.

For example, instead of saying "We don't have a mobile app," your problem statement might be "Our users are unable to access our services on the go, due to the lack of a mobile interface."

### Phase 4: Direction

The fourth phase is to decide on a direction, which involves defining your strategy and approach. This is typically done once, and it's where you decide where you're going. You should capture your intentions, enumerate approaches and principles, and define a strategy decision matrix.

For instance, if your problem is that users can't access your services on the go, your direction might be to develop a mobile app. You would then list your objectives (e.g., increase user engagement, improve accessibility), and create a decision matrix to evaluate different approaches (e.g., native app vs. web app).

#### The Decision Matrix

In this section, Rich does a deep dive into Decision Matrices. The Decision Matrix is a table that allows you to systematically identify, analyze, and rate the performance of relationships between sets of values and information. Here's how it works:

- **Approaches (Columns)**: The different strategies or methods you're considering are listed as columns. The first column should always be the status quo for comparison.
- **Criteria (Rows)**: The factors you're using to judge the approaches are listed as rows. These could include cost, quality, time, or any other relevant factor.
- **Aspects (Cells)**: Each cell in the matrix describes how an approach meets a criterion. This is not a simple yes or no, but a description of how it does it.
- **Coloring the Cells**: This is the only subjective part of the matrix. You color the cells based on your judgement of how well the approach meets the criterion.

The Decision Matrix is a powerful tool that can help you make informed decisions by visually comparing the different approaches and their impacts on various criteria. What I find most useful about these is that they encourage you to be explicit about the criteria, and how each potential solution performs on the criteria. I encourage you to include the status quo as a potential solution to be able to better reflect on and communicate how it fails.

### Phase 5: Design

The fifth phase is the actual design phase, where you decide on the specifics of how you're going to implement your plan. You already know the problem and the approach, and now you decide on the specifics. You reference the intentions stated above and illustrate how they'll be implemented.

For example, you might decide to build a native app for better performance and user experience. You would then design the app's user interface, decide on the features to include, and plan the development process. Diagrams can be a useful tool at this stage to visualize your design and how it will meet the stated objectives.

### Phase 6: Dev

The final phase is development, where you actually build what you've designed. Hickey suggests not doing this on the same day as your design to ensure you have a fresh perspective. This phase involves coding, testing, and refining your design until it's ready for release.

For instance, you would now start coding your mobile app, testing it for bugs and usability issues, and refining it based on feedback until it's ready to be launched.

## Conclusion

Design is a thoughtful and deliberate process. It's not about rushing to solutions or getting caught up in the minutiae of features. It's about understanding the problem, setting a clear direction, and making informed decisions that lead to effective solutions.

Design is measured by our understanding and the subsquent decisions we make based on the understanding. These are key artifacts. These learnings and decisions don't have to be pretty or comprehensive, but they are the best way to capture the work we've done. Don't restrict them to thoughts in your head where others (and future you) can't get to them.

Thank you, Rich for this great talk! It's a reminder that design isn't about "waiting to code" but rather about setting us up for success when it comes time to code.
