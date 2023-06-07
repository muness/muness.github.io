---
comments: true
date: 2023-06-07 16:40:00 +0500
author: muness
title: 'LLM Prompt Types'
---

You've heard about Prompt Engineering. You know that it's something buzz wordy that people who've bought into the LLM hype go on about. What are they? Why do they work? How should you evaluate them? In this post I explore types of prompts and why they matter when using LLMs.

## Why do prompts matter?

Prompts play a crucial role in guiding the outputs of Large Language Models (LLMs). They are the input that you provide to the model to guide its response. The model uses the prompt as a starting point and generates a continuation that is statistically likely based on the patterns it has learned during its training.

LLMs are trained on a large corpus of text data and learn to predict the next word in a sentence based on the context provided by the preceding words. When you provide a prompt, you're providing the context that the model uses to generate the rest of the text.

A prompt can provide constraints, guidance, and facts that the model uses to shape its output. If you prompt the model with a question, it will generate a response that attempts to answer that question. If you provide a fact in the prompt, the model will use that fact to inform its response. If you provide a constraint, such as asking the model to write a poem in a specific style, it will attempt to generate text that adheres to that constraint.

Imagine you're having a conversation with someone:

- They start by saying something, and you respond based on what they said. That's essentially how prompts work with Large Language Models.
- When you give a prompt to a language model, it's like you're starting a conversation. The model then responds based on what it has learned from reading lots of text data.
- If you ask a question, the model will try to give an answer. If you tell it a fact, it will use that fact when generating its response. If you ask it to write a poem in a certain style, it will do its best to write a poem that fits that style.

## Types of prompts

When I work with LLMs I consider the type of use case scenario I am in, and the type of prompt that might be most suitable, what additional context (or facts) I should provide and how I should evaluate its output.

### Overview

Here's a list of types of prompts I find myself using:

| No. | Prompt Type | Description |
| --- | ----------- | ----------- |
| 1 | Classification Prompts | Categorizes text into specific groups. |
| 2 | Closed-ended Prompts | Seeks specific information or a yes/no answer. |
| 3 | Contextual Prompts | Leverages the conversation or situation context. |
| 4 | Counterfactual Prompts | Explores "what if" scenarios or alternative perspectives. |
| 5 | Exploratory Prompts | Dives deep into a topic or concept. |
| 6 | Generative Prompts | Sparks new ideas or content. |
| 7 | Hypothetical Prompts | Imagines potential scenarios or outcomes. |
| 8 | Interactive Prompts | Engages in a conversation or dialogue. |
| 9 | Open-ended Prompts | Encourages free thinking and creativity. |
| 10 | Reflective Prompts | Promotes introspection and self-reflection. |
| 11 | Retrieval Prompts | Retrieves a specific piece of information or fact. |
| 12 | Rewrite Prompts | Simplifies, paraphrases, or changes the tone of text. |
| 13 | Socratic Prompts | Stimulates critical thinking and deep understanding. |
| 14 | Translation Prompts | Translates text across languages or domains. |

While there is some overlap (for example, a Socratic prompt can also be an open-ended prompt, or a retrieval prompt can also be a closed-ended prompt), each type of prompt has its unique characteristics and uses.

### Prompt types in detail

#### 1. Classification Prompts

- **Type:** Closed-ended
- **When it might be most useful:** When you need to classify a piece of text into a specific category.
- **Examples:**
  - "Is this review positive or negative?"
  - "What emotion is being expressed in this sentence?"
- **Tradeoffs:** Can provide quick and clear answers, but may oversimplify complex texts.
- **Similar prompts:** Retrieval Prompts, Translation Prompts
- **Context or facts that would be useful to include:** The categories or labels that the text could potentially fall into.
- **Recommendation of how one could evaluate responses:** Check if the response correctly identifies the category or label based on the text.
- **Summary:** Classification prompts are like asking someone to put a label on something based on its characteristics. You can evaluate the response by checking if the label matches the characteristics of the thing.

#### 2. Closed-ended Prompts

- **Type:** General
- **When it might be most useful:** When you need a specific piece of information or a yes/no answer.
- **Examples:**
  - "Who is the current President of the United States?"
  - "Is it raining in Seattle right now?"
- **Tradeoffs:** Can provide quick and clear answers, but not suitable for open-ended discussions or creative tasks.
- **Similar prompts:** Classification Prompts, Retrieval Prompts, Translation Prompts
- **Context or facts that would be useful to include:** The specific information or fact that is being asked for.
- **Recommendation of how one could evaluate responses:** Check if the response correctly provides the specific information or fact that was asked for.
- **Summary:** Closed-ended prompts are like asking someone a question that has a specific answer. You can evaluate the response by checking if it provides the correct answer.

#### 3. Contextual Prompts

- **Type:** Open-ended
- **When it might be most useful:** When the context of the conversation or the situation is important.
- **Examples:**
  - "Given our discussion on climate change, what are your thoughts on renewable energy?"
  - "Considering the current market trends, should we invest in technology stocks?"
- **Tradeoffs:** Can lead to more relevant and insightful responses, but requires a good understanding of the context.
- **Similar prompts:** Interactive Prompts
- **Context or facts that would be useful to include:** The previous conversation or the current situation that the prompt is referring to.
- **Recommendation of how one could evaluate responses:** Check if the response correctly takes into account the context and provides a relevant and insightful answer.
- **Summary:** Contextual prompts are like asking someone a question that depends on the situation or the previous conversation. You can evaluate the response by checking if it correctly takes into account the context and provides a relevant answer.

#### 4. Counterfactual Prompts

- **Type:** Open-ended
- **When it might be most useful:** When you want to explore alternative scenarios or perspectives.
- **Examples:**
  - "What would have happened if the internet was never invented?"
  - "How would the story of Romeo and Juliet end if they didn't die?"
- **Tradeoffs:** Can stimulate creative thinking, but responses are speculative and not based on reality.
- **Similar prompts:** Hypothetical Prompts
- **Context or facts that would be useful to include:** The actual scenario or event that the counterfactual is based on.
- **Recommendation of how one could evaluate responses:** Check if the response provides a plausible alternative scenario or perspective that is different from what actually happened.
- **Summary:** Counterfactual prompts are like asking someone to imagine a different version of events. You can evaluate the response by checking if it provides a plausible and interesting alternative scenario.

#### 5. Exploratory Prompts

- **Type:** Open-ended
- **When it might be most useful:** When you want to delve deeper into a topic or concept.
- **Examples:**
  - "Discuss the implications of artificial intelligence on society."
  - "Explore the themes in the novel 'To Kill a Mockingbird'."
- **Tradeoffs:** Can lead to in-depth and insightful responses, but may require more time and effort to answer.
- **Similar prompts:** Generative Prompts
- **Context or facts that would be useful to include:** The topic or concept that the prompt is asking to explore. The approach or techniques used to explore the topic.
- **Recommendation of how one could evaluate responses:** Check if the response provides a thorough and insightful exploration of the topic or concept.
- **Summary:** Exploratory prompts are like asking someone to go on a journey of discovery about a certain topic. You can evaluate the response by checking if it provides a thorough and insightful exploration of the topic.

#### 6. Generative Prompts

- **Type:** Open-ended
- **When it might be most useful:** When you want to generate new ideas or content.
- **Examples:**
  - "Write a short story about a robot that falls in love."
  - "Create a list of potential names for a new planet."
- **Tradeoffs:** Can stimulate creativity and originality, but may lead to unpredictable or varied results.
- **Similar prompts:** Exploratory Prompts
- **Context or facts that would be useful to include:** The theme or topic that the new ideas or content should be based on.
- **Recommendation of how one could evaluate responses:** Check if the response provides new and original ideas or content that are relevant to the theme or topic.
- **Summary:** Generative prompts are like asking someone to create something new and original. You can evaluate the response by checking if it provides new and original ideas or content that are relevant to the theme or topic.

Intriguingly, when I asked ChatGPT what type of prompt it considered a summarization prompt to be, it said it was of this generative prompt type.

> A summarization prompt can be considered a subtype of a Generative Prompt.
>
> Generative Prompts are used to generate new content or ideas. In the case of a summarization prompt, the new content is a condensed version of the original text. The goal is to maintain the key points and overall meaning while reducing the length and complexity of the text.
> So, while summarization is a specific task, the type of prompt used to accomplish this task falls under the broader category of Generative Prompts.

#### 7. Hypothetical Prompts

- **Type:** Open-ended
- **When it might be most useful:** When you want to explore potential scenarios or outcomes.
- **Examples:**
  - "What would you do if you won the lottery?"
  - "How would you react if aliens made contact with Earth?"
- **Tradeoffs:** Can stimulate creative thinking and problem-solving, but responses may be speculative and not based on reality.
- **Similar prompts:** Counterfactual Prompts
- **Context or facts that would be useful to include:** The hypothetical scenario or outcome that the prompt is asking to explore.
- **Recommendation of how one could evaluate responses:** Check if the response provides a plausible reaction or plan of action to the hypothetical scenario or outcome.
- **Summary:** Hypothetical prompts are like asking someone to imagine a possible scenario or outcome. You can evaluate the response by checking if it provides a plausible reaction or plan of action to the hypothetical scenario.

#### 8. Interactive Prompts

- **Type:** Open-ended
- **When it might be most useful:** When you want to engage in a conversation or dialogue.
- **Examples:**
  - "How was your day?"
  - "What are your thoughts on the latest episode of 'Game of Thrones'?"
- **Tradeoffs:** Can encourage interaction and engagement, but requires the ability to understand and respond to a variety of inputs.
- **Similar prompts:** Contextual Prompts
- **Context or facts that would be useful to include:** The topic of conversation or the previous interactions that the prompt is referring to.
- **Recommendation of how one could evaluate responses:** Check if the response is relevant to the prompt and contributes to the conversation or dialogue.
- **Summary:** Interactive prompts are like starting a conversation with someone. You can evaluate the response by checking if it is relevant to the prompt and contributes to the conversation.

#### 9. Open-ended Prompts

- **Type:** General
- **When it might be most useful:** When you want to encourage free thinking and creativity.
- **Examples:**
  - "What is your opinion on climate change?"
  - "Describe a memorable experience from your childhood."
- **Tradeoffs:** Can lead to diverse and creative responses, but may be more difficult to evaluate due to the variety of possible answers.
- **Similar prompts:** Generative Prompts, Exploratory Prompts
- **Context or facts that would be useful to include:** The topic or question that the prompt is asking to explore or answer.
- **Recommendation of how one could evaluate responses:** Check if the response provides a thoughtful and relevant exploration or answer to the topic or question.
- **Summary:** Open-ended prompts are like asking someone a question that doesn't have a specific answer. You can evaluate the response by checking if it provides a thoughtful and relevant exploration or answer to the topic or question.

#### 10. Reflective Prompts

- **Type:** Open-ended
- **When it might be most useful:** When you want to encourage introspection and self-reflection.
- **Examples:**
  - "How do you feel about your performance in the last project?"
  - "What did you learn from your last relationship?"
- **Tradeoffs:** Can lead to personal and insightful responses, but may be difficult for those who are not comfortable with self-reflection.
- **Similar prompts:** Hypothetical Prompts
- **Context or facts that would be useful to include:** The event or situation that the prompt is asking to reflect on.
- **Recommendation of how one could evaluate responses:** Check if the response provides a thoughtful and insightful reflection on the event or situation.
- **Summary:** Reflective prompts are like asking someone to look in a mirror and describe what they see. You can evaluate the response by checking if it provides a thoughtful and insightful reflection on the event or situation.

#### 11. Retrieval Prompts

- **Type:** Closed-ended
- **When it might be most useful:** When you need to retrieve a specific piece of information or fact.
- **Examples:**
  - "What is the capital of France?"
  - "Who wrote 'To Kill a Mockingbird'?"
- **Tradeoffs:** Can provide quick and accurate answers, but not suitable for open-ended discussions or creative tasks.
- **Similar prompts:** Closed-ended Prompts, Classification Prompts
- **Context or facts that would be useful to include:** The specific piece of information or fact that is being asked for.
- **Recommendation of how one could evaluate responses:** Check if the response correctly provides the specific piece of information or fact that was asked for.
- **Summary:** Retrieval prompts are like asking someone to find a specific piece of information. You can evaluate the response by checking if it correctly provides the specific piece of information.

#### 12. Rewrite Prompts

Rewrite prompts can be considered a subtype of generative prompts, but they also have characteristics similar to translation prompts. Let's break it down:

- **Generative Prompts:** Rewrite prompts fall under this category because they require the generation of new content. However, instead of creating entirely new content, the task is to reformulate existing content.
- **Translation Prompts:** Rewrite prompts also share similarities with translation prompts. In translation, the task is to convey the same meaning in a different language. In rewriting, the task is to convey the same meaning using different words or structure in the same language.

So, while rewrite prompts don't fit neatly into one category, they can be considered a unique blend of generative and translation prompts. They could also be considered their own type, given their specific task of reformulating text while preserving the original meaning.

Here's how we might describe them:

- **Type:** Generative / Translation
- **When it might be most useful:** When you want to express the same idea or information differently, such as simplifying complex text, paraphrasing, or changing the tone.
- **Examples:**
  - "Rewrite this sentence in simpler terms: 'The photosynthesis process is primarily responsible for converting light energy into chemical energy.'"
  - "Paraphrase this statement: 'It's raining cats and dogs.'"
- **Tradeoffs:** Can provide different perspectives or versions of the same content, but maintaining the original meaning can be challenging.
- **Similar prompts:** Generative Prompts, Translation Prompts
- **Context or facts that would be useful to include:** The text that needs to be rewritten and the specific way it should be changed (simplified, paraphrased, tone change, etc.).
- **Recommendation of how one could evaluate responses:** Check if the response correctly rewrites the text while preserving the original meaning.
- **Summary:** Rewrite prompts are like asking someone to say the same thing in a different way. You can evaluate the response by checking if it correctly rewrites the text while preserving the original meaning.

#### 13. Socratic Prompts

- **Type:** Open-ended
- **When it might be most useful:** When you want to stimulate critical thinking and deep understanding.
- **Examples:**
  - "Why do you think the character acted that way in the story?"
  - "What evidence can you find to support your argument?"
- **Tradeoffs:** Can lead to deep understanding and critical thinking, but may be challenging for those who are not used to this type of questioning.
- **Similar prompts:** Exploratory Prompts
- **Context or facts that would be useful to include:** The topic or question that the prompt is asking to explore or answer.
- **Recommendation of how one could evaluate responses:** Check if the response provides a thoughtful and well-reasoned exploration or answer to the topic or question.
- **Summary:** Socratic prompts are like asking someone to dig deeper into their thoughts and beliefs. You can evaluate the response by checking if it provides a thoughtful and well-reasoned exploration or answer to the topic or question.

#### 14. Translation Prompts

- **Type:** Closed-ended
- **When it might be most useful:** When you need to translate text from one language or domain to another.
- **Examples:**
  - "Translate the following English text to Spanish: 'Good morning, how are you?'"
  - "Translate the following French text to English: 'Bonjour, comment ça va?'"
  - "Translate the following medical text into simple language: 'The patient was diagnosed with myocardial infarction, which was treated with percutaneous coronary intervention.'"
  - Translate the following physics concept into language a software engineer would understand: 'Quantum entanglement is a physical phenomenon that occurs when a pair or group of particles is generated, interact, or share spatial proximity in a way such that the quantum state of each particle of the pair or group cannot be described independently of the state of the others, even when the particles are separated by a large distance.
    - The response for this is worth repeating: "Quantum entanglement is like a complex system in software engineering where objects are deeply linked, similar to how objects in a program might be linked through pointers. Even if these objects are located in different parts of the memory (analogous to particles being separated by a large distance), changing one immediately affects the other because of the way they're linked. It's as if they're part of the same overarching system or class, and you can't fully describe the state of one without considering the others."
- **Tradeoffs:** Can provide quick and accurate translations, but requires a good understanding of both languages.
- **Similar prompts:** Closed-ended Prompts, Classification Prompts
- **Context or facts that would be useful to include:** The text that needs to be translated and the languages involved.
- **Recommendation of how one could evaluate responses:** Check if the response correctly translates the text from the source language to the target language.
- **Summary:** Translation prompts are like asking someone to convert a message from one language to another. You can evaluate the response by checking if it correctly translates the text from the source language to the target language.

## Evaluating prompt responses

When evaluating any LLM response, there are several factors to consider:

 1. **Accuracy:** The information provided by the LLM should be accurate and factual. As you mentioned, LLMs can sometimes generate "hallucinations" or plausible-sounding facts that are not true. Always cross-check important information for accuracy.
 2. **Relevance:** The response should be relevant to the prompt. If the LLM goes off on a tangent or doesn't address the prompt directly, it's not providing a useful response.
 3. **Completeness:** The LLM should fully address the prompt. If the prompt asks for several pieces of information or a multi-step process, the response should include all requested elements.
 4. **Clarity:** The response should be clear and easy to understand. If the LLM uses overly complex language or jargon (unless specifically asked for), it can make the response less useful.
 5. **Coherence:** The response should be logically coherent and well-structured. It should flow smoothly from one point to the next and present a cohesive argument or explanation.
 6. **Tone:** The tone of the response should be appropriate for the context. For example, a professional prompt should receive a professional response, while a more casual or creative prompt might allow for a more informal tone.
 7. **Originality:** For generative prompts, the response should be original and creative. If the LLM is simply regurgitating common phrases or clichés, it's not fully utilizing its generative capabilities.
 8. **Specificity:** The response should be as specific as possible. Vague or generic responses are less useful and may not fully address the prompt.
 9. **Consistency:** The response should be consistent with any context or constraints provided in the prompt. If the LLM contradicts itself or the given context, it's not providing a reliable response.
 10. **Length:** The response should be an appropriate length for the prompt. If the prompt asks for a brief answer, a long-winded response may not be ideal, and vice versa.

LLMs are *tools*. Their responses should be used as a starting point. Apply your own judgment and expertise when using their outputs. Each prompt type's responses may require further scrutiny, I included that above, under each type.

## An example of prompt engineering improving output

Here's an example of prompt engineering and how it can be very useful in improving LLM output. I was reading a recent paper from Microsoft and using ChatGPT-4 as my assistant as one does in 2023. Here's the  prompt I tried first:

> Read https://arxiv.org/pdf/2305.03495.pdf and summarize it

And the response:

> The document is a research paper titled "Automatic Prompt Optimization with Gradient Descent and Beam Search" by Reid Pryzant, Dan Iter, Jerry Li, Yin Tat Lee, Chenguang Zhu, and Michael Zeng from Microsoft.
>
> **Summary:**
>
> The paper introduces a new method called Automatic Prompt Optimization (APO) for improving the performance of Large Language Models (LLMs). The authors argue that the performance of LLMs is highly dependent on the quality of prompts, which are often manually written and require significant trial-and-error effort.
>
> The APO method is inspired by numerical gradient descent and uses minibatches of data to form natural language "gradients" that criticize the current prompt. These gradients are then "propagated" into the prompt by editing it in the opposite semantic direction of the gradient. This process is guided by a beam search and bandit selection procedure, which improves algorithmic efficiency.
>
> The authors tested the APO method across four benchmark NLP tasks and found that it outperformed prior prompt editing techniques, improving an initial prompt's performance by up to 31%. The APO method was able to rewrite vague task descriptions into more precise annotation instructions.

I'd wanted an *Exploratory Prompt* to explore the contents of the paper. Let's review the evaluation guidelines for an exploratory prompt:

> Check if the response provides a thorough and insightful exploration.

I thought we could do better. Here are the suggestion for how to improve an exploratory prompt for easier reference:

> - **Context or facts that would be useful to include:** The topic or concept that the prompt is asking to explore. The approach or techniques used to explore the topic.

Let's apply the guidance:

- The topic or concept to explore:
  - Zoom in on the optimization techniques in the paper.
  - Focus on how the techniques were applied to prompts.
  - The approach used to avoid local maxima.
- The approach or technique to use:
  - Feynman technique.
  - Interleaved learning.

> Regarding the APO paper you read earlier: there were two techniques described for optimizing prompts, Gradient Descent and Beam Search.
>
> - Define each.
> - Compare and contrast them.
> - Explain how they avoid getting stuck in local maxima.
> - Use the Feynman technique and interleaved learning in your explanation.
> - Explain how each is used to optimize prompts.
> - Summarize how well they're used to optimize prompts according to the paper.

And *voila*:

> Sure, let's break down these two techniques:
>
> ### Gradient Descent
>
> Gradient Descent is a first-order iterative optimization algorithm for finding a local minimum of a differentiable function. The idea is to take repeated steps in the opposite direction of the gradient (or approximate gradient) of the function at the current point, because this is the direction of steepest descent.
>
> In the context of the APO paper, Gradient Descent is used to optimize prompts by iteratively adjusting the prompt to improve the quality of the LLM's response. The quality of the response is measured using a reward model, and the gradient of the reward with respect to the prompt is computed to guide the optimization.
>
> However, Gradient Descent can sometimes get stuck in local minima. To avoid this, the paper uses a technique called entropy regularization, which encourages exploration of different prompts by adding a term to the reward that favors more diverse prompts.
>
> ### Beam Search
>
> Beam Search is a heuristic search algorithm that explores a graph by expanding the most promising node in a limited set. It's often used in machine learning and natural language processing to find the most likely sequence of states (e.g., the most likely sequence of words in a sentence).
>
> In the APO paper, Beam Search is used to optimize prompts by exploring a set of candidate prompts and selecting the one that maximizes the reward. The candidates are generated by making small modifications to the current prompt.
>
> Beam Search can also get stuck in local maxima, because it greedily selects the best candidate at each step. To mitigate this, the paper uses a technique called random restarts, which involves periodically starting the search from a new random prompt.
>
> ### Comparison and Feynman Explanation
>
> To put it simply, imagine you're trying to find the lowest point in a hilly landscape (which represents the best prompt). Gradient Descent is like taking a step downhill from your current position, then repeating this process until you can't go any lower. Beam Search, on the other hand, is like looking around from your current position, taking a step towards several promising lower points, and then choosing the lowest one.
>
> Both methods are trying to find the lowest point, but they do it in different ways. Gradient Descent changes the current position gradually, while Beam Search explores several possible next positions at once. However, both methods can sometimes get stuck in a valley (a local minimum) and miss a deeper valley elsewhere (the global minimum). To avoid this, they use techniques (entropy regularization for Gradient Descent, random restarts for Beam Search) to occasionally explore new, random parts of the landscape.
>
> In terms of optimizing prompts, both methods have their strengths and weaknesses. Gradient Descent can efficiently handle large prompt spaces, but it requires a differentiable reward model. Beam Search can work with non-differentiable reward models, but it can be computationally expensive for large prompt spaces.
>
> According to the APO paper, both methods were effective in optimizing prompts and improving the quality of the LLM's responses. However, the best results were achieved by combining the two methods: using Gradient Descent to initialize the prompt, then refining it with Beam Search. This combination leverages the strengths of both methods and mitigates their weaknesses.

Sure enough, the guide helped me evaluate the response and tweak it for better results. Naturally this is a single example. With this guide handy, I am more likely to pause a before asking an LLM for assistance, better define the use case and add useful guidance and appropriate evaluation criteria.

## Recap

Language models are trained on a vast amount of text. They learn to predict the next word in a sentence based on the words that came before it. This is done by analyzing the statistical patterns in the training data. For example, if the model often saw the word "rain" following the phrase "The sky is dark and cloudy, I think it will", it learns that "rain" is a likely next word in this context.

When we give a prompt to the language model, we're providing the starting words of a sentence and asking the model to continue it. The model uses the patterns it learned during training to generate a response that it thinks is statistically likely to follow the given prompt.

This is why the type, wording, tone, and style of the prompt can significantly influence the model's response. The model doesn't *understand* the prompt in the way we do: It doesn't know the meaning of the words or the intent behind the prompt. It simply uses the prompt as a starting point and generates the next word based on what it has statistically seen to follow such prompts in its training data.

For example, if you ask the model a closed-ended question (a question that can be answered with "yes" or "no"), it's likely to give a short response because that's what it has seen in its training data. But if you ask an open-ended question or use a generative prompt, the model is more likely to give a longer, more detailed response.

Additional context also matters. If you provide information in the prompt, the model has more to work with and can generate a more relevant and accurate response. For example, if you're asking the model to write a story about a knight, providing details like the knight's name, background, and current situation in the prompt can help the model generate a more coherent and engaging story.

Tone and style specification can also influence the model's response. If you specify in the prompt that you want a formal response, the model will try to use more formal language in its response. If you specify a casual tone, the model will use more informal language. I often specify the format as a markdown bullet list with specific properties spelled out, for example.

 If you're not getting value from your use of LLMs consider that they're a tool that you have to learn to use. Prompt engineering is crucial when using an LLM because the model bases its response entirely on the prompt and the patterns it learned during training. The type of prompt, additional context, and tone and style specification all play a significant role in shaping the model's response.
