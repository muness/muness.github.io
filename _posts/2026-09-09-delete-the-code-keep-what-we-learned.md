---
title: "Delete It! (The Code. Keep the Useful Stuff.)"
date: 2026-09-09 12:20:00 -0400
author: muness
toc: false
comments: true
excerpt: "An analyst spent a year cleaning up messy data with layers of regex. I want to keep what they figured out and make it possible to throw the implementation away."
---

Sam (not their real name) is an analyst with mad Excel skills. He spent roughly a year building a spreadsheet macro to clean up messy labels. Hundreds of regexes, run in order. Layers of regex, including regex to fix what earlier regex broke. I was impressed by how much work had gone into it.

Sam explained how it grew. A weird input arrived, he added a rule. When a rule caused trouble, he added another one below to fix the output. He worked through the issues as he saw them, and the outside sources kept finding new ways to send a mess. A labor of love, he called it. With a question mark.

Over that year, Sam had figured out which abbreviations to use, what to leave alone, how to handle dates, and what to do with the exceptions. Those decisions were spread across the regexes. To understand one business rule, we might have to follow several replacements, including the ones that repaired earlier results.

I had an agent port the macro. It followed the same sequence, so we still had hundreds of regexes to understand. Sam would still have to find the right place in that sequence for the next fix.

I've long said _code is a liability_: Someone has to maintain it, debug it, and check what breaks when it changes. The port left us with that same maintenance problem. I wanted to keep Sam's decisions in a form he could read and correct, then generate code from that.

Alex (also not their real name), a developer, said the ordering made him itchy: Each regex acts on whatever the earlier ones leave behind. Change one and a later repair might stop matching, or start matching something it shouldn't. Even removing an apparently redundant rule means checking what depends on it. Sam had been managing those interactions with every fix.

Alex suggested a compaction cycle. Go through the regexes and figure out which ones are pieces of the same business rule. Several replacements might amount to one naming convention, plus repairs for places where an earlier regex matched too much.

I used CESS[^cess] to do this. It's my Mjolnir. I asked an agent to extract the rules into sketches covering domain concepts: things like dates, capitalization, and abbreviations. Each sketch describes what the code should do.

Suppose, for example, a regex replaces an abbreviation inside a longer word, then another regex repairs that word. The sketch might say the abbreviation only gets replaced when it stands alone. Sam can review that sentence and point out the exceptions. A new implementation could follow that rule without reproducing the original damage and repair.

Now we could ask Sam business questions: when should this abbreviation apply? Which exceptions matter? What should this label look like? The port had preserved the regex sequence. The sketches gave Sam rules he could read, challenge, and correct.

But extracting the rules didn't tell us whether we'd understood them. I had the agent generate fresh code from the sketches. We ran it against the existing data and compared its output with the complete macro's output. Where the outputs differed, we could ask Sam which result was right and check the sketch against his answer.

If the sketch missed a rule, Sam would need to approve the correction. If the code failed to follow an already-correct sketch, we'd fix the code. CESS keeps the corrected case and the decision behind it. We rerun that case and the regressions kept for other known failures, checking both the expected outputs and whether the results follow the sketch.

Once those rules and checks are outside the implementation, we can try replacing it. [Phoenix Architecture's Deletion Test](https://chadfowler.com/regenerative-software/3md5ftetaes2e/) asks how we would judge a replacement if we deleted the existing code. Here, we have the sketches to generate from and the reviewed cases to check against.

Regenerate the code from the sketches and required interfaces. Run the tests and review the outputs against the sketches. If a rule survives only in the old code or a chat, put it in the sketch. If the generated code ignores a rule, fix the code.

Phoenix also calls for [regeneration as a recurring practice](https://chadfowler.com/regenerative-software/3men54inhes2d/). New inputs will keep arriving, and we'll keep making corrections. If those corrections only go into the generated code, we'll end up maintaining another implementation that nobody can replace without first reconstructing what it does.

When someone fixes a bug, ask what they learned. Put that into the sketch and keep a case that tests it. Periodically regenerate the implementation to check whether those lessons survived outside the code.

Keep what we learned. Stop maintaining how we learned it.

*Related: [The Salvage Loop]({% post_url 2026-01-07-the-salvage-loop-keep-learning-drop-the-code %}) on saving learning before discarding code, and [Agents Don't Learn the Domain. The System Does.]({% post_url 2026-06-13-agents-dont-learn-the-domain-the-system-does %}) on turning reviewed corrections into future behavior.*

[^cess]: CESS stands for Counterexample-Supplemented Sketches. A sketch describes the intended behavior, including known rules and unanswered questions. We direct an agent to generate an implementation from it. When a case fails, a reviewer decides whether the code needs fixing or the sketch needs an approved correction. We keep the corrected cases, update the sketch, and check fresh implementations against both the sketch and regression tests.
