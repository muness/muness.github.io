---
title: "When Your Trace Is Lying to You: A Performance Case Study"
date: 2026-04-16 10:00:00 -0400
author: muness
toc: true
comments: true
excerpt: "A real 2–4s → 100–300ms latency case study in what happens when most of the request time is invisible and the trace points you at the wrong work."
pin: true
---

We ran into a performance issue recently. Requests were taking **2–4 seconds**, multiple attempts had already been made to improve them, and nothing really moved.

More importantly, nobody could explain *why* the requests were slow. The system was not slow because it was doing too much work; it was slow because most of the important work was hidden.

Carlos Bueno's *The Mature Optimization Handbook* has been sitting in the back of my head through all of this. His core warning is simple: optimization is hard to do well, and it is frighteningly easy to turn it into ritualized guesswork. I have done exactly that more times than I would like to admit.

## The Actual Problem

Most performance work starts the same way. You read code, form a mental model, optimize what seems expensive, and repeat until something appears to move. The assumption underneath that loop is that your mental model is a reasonable approximation of how the system behaves under real load, with real data, and real users. It rarely is. Your intuition is useful for generating hypotheses, but it is a terrible way to decide where the time is actually going.

## Phase 1 — The Misleading Trace

We had tracing, and at first glance it looked reasonable. It showed database calls, request flow, and auth. Nothing obviously broken jumped out, which is exactly what made it dangerous. Here is what the trace actually amounted to:

```text
GET /users/me — 4,722ms total

WHAT WE CAN SEE:
  DB query                79ms
  DB query                12ms
  DB query                 6ms
  DB query                34ms
  DB query                25ms
  DB query                 3ms
  DB query                 2ms
  UPDATE                   2ms
  ... (~15 more small spans)

  Visible subtotal: ~180–320ms

WHAT WE CAN'T SEE:
  ???                     the rest

TOTAL: 4,722ms
```

Depending on how you count it, **~90–95% of the request time was unaccounted for**. At that point there are only two possibilities: either the system is doing ~4.7 seconds of invisible work, or the trace is lying to you by omission.

That is strictly worse than having no trace at all. With no data, you know you are guessing. With incomplete data, you think you are reasoning, which is how teams end up spending days on entirely plausible explanations:

* "DB queries look chatty."
* "Auth is a bit slow."
* "Maybe N+1."

All of those are reasonable hypotheses. None of them mattered here. Go optimize that. The only honest answer is: I can't.

## What's Missing

Before you can optimize anything, you need a problem you can prove or disprove. Bueno's formulation is still the right one: if the problem statement is not specific enough to suggest a fix and precise enough to tell you whether the fix worked, then you do not yet have a real optimization problem.

His shortest version of that idea is the one that matters most: **a problem definition must be falsifiable**. Until you have that, you are not solving a performance problem. You are exploring a codebase in the general direction of slowness and calling it progress.

## Phase 2 — A Richer Trace

After instrumenting the missing spans, the picture changed almost immediately. The system itself had not changed, but our ability to see the request had. This is a representative slow request on the same endpoint after the missing spans were added. It is in the same 2–4 second regime, but it is not meant to be the exact same frozen request — and in real life you should not expect the numbers to line up perfectly.

```text
GET /users/me — ~4.7s total

>>> NEWLY VISIBLE SPANS:
auth.verify_aad_token         ~187ms (JWKS fetch)
auth.get_or_create_user        ~29ms
auth.resolve_roles             ~13ms

middleware.call_next        ~4,300ms   ← dominant

DB queries (combined)        ~150–250ms
```

The numbers do not perfectly sum, and they should not. What matters is that the dominant cost is now obvious, which means the optimization problem has become concrete.

Nothing new was added to the request path. The system did not get faster because we instrumented it. We just stopped being blind to where the time was going.

## Phase 3 — Fix One Thing

Once the missing time was visible, the optimization problem got much smaller. The issue was not the database and it was not the route handler. It was middleware: work being done on every request, token verification bypassing caching, and stacked layers compounding latency, so the fix was correspondingly narrow:

* refactor or remove the offending middleware
* respect caching
* eliminate redundant work

The result was immediate and boring in the best possible way. **2–4s became 100–300ms**, and the issue collapsed in hours rather than dragging on for days of speculative performance work.

```text
AFTER FIX: representative /users/me trace

>>> END-TO-END TRACE: ~237ms
GET /users/me app span        ~166ms

>>> VISIBLE COSTS:
auth.verify_aad_token        ~0.6ms
auth.get_or_create_user     ~22.3ms
  connect                    ~5.4ms
  SELECT vectordb            ~4.0ms
  SELECT vectordb            ~2.2ms
  SELECT vectordb            ~2.1ms

auth.resolve_roles         ~13.2ms
  connect                    ~2.0ms
  SELECT vectordb            ~3.8ms
  SELECT vectordb            ~2.1ms

users_me.ensure_user       ~12.4ms
users_me.update_last_login  ~6.0ms
users_me.build_response     ~7.2ms

WHAT DISAPPEARED:
  no multi-second hidden wall
  no single mystery span dominating the request
```

## A Quick Sanity Check

When something gets dramatically faster, you should become more skeptical, not less. There are many ways to produce a fake performance win, and senior engineers eventually develop a catalog of them. Some of the common ones are familiar:

* work failing earlier, because crashing is cheap
* less data flowing, because network egress per request quietly dropped
* errors no longer being counted, because they were silenced or miscategorized
* traffic composition shifting, because health checks or other cheap requests started dominating the sample
* infrastructure changing underneath you, because faster nodes replaced slower ones or capacity moved around

In this case, we checked the boring things that keep you honest. Response size was unchanged, request volume was stable, error rates were unchanged, and the improvement showed up in the distribution rather than only in a flattering average.

## What Usually Happens Instead

In a scenario like this, teams usually spend their time on plausible local optimizations. They tune queries, refactor handlers, or adjust infrastructure because those are the things the visible data seems to implicate. I have seen this enough times that I no longer think of it as an individual mistake. It is usually a skills-and-context problem. Engineers who have not internalized an instrument-first habit, or who are working from partial traces, will do the obvious thing: read code, guess at hotspots, and ship performance PRs that feel intelligent and accomplish very little.

Leaders can misread this too. In standups and status updates, speculation sounds a lot like progress: people have “leads,” they are “working through fixes,” and there are several plausible explanations at different layers of the stack. That sounds reassuring when the team is still operating from partial visibility.

The AI analogy is uncomfortable but useful because this is eerily like an LLM hallucinating from partial context. The reasoning is fluent, the confidence is real, and the grounding is missing. If your team keeps doing this, the answer is not another slogan about being data-driven. The answer is to make the hidden time visible, walk people through the before and after traces, and help them feel why the first round of optimizations was doomed from the start.

## The Mental Model Shift

Optimization is not mainly about making systems faster. It is about identifying and removing the dominant constraint, which is a different problem and a much more disciplined one. That requires measurement, but not measurement in the vague dashboard sense. It requires measurement that makes the hidden time visible enough for the real bottleneck to reveal itself.

This is the same loop behind [SLO-driven systems]({% post_url 2023-07-12-implementing-slos-for-data-quality %}) and the broader [operational analytics]({% post_url 2025-06-27-operational-data-primer %}) posture. You define what “good” looks like, measure it, act when it deviates, and then verify that the intervention changed the thing you actually care about.

```text
Measure → Identify → Change → Verify
```

Anything else is guesswork dressed up as optimization.

## A Subtle Failure Mode

Before proper instrumentation, the system looks like a pile of small things that might be slow. After proper instrumentation, it often looks like one thing that is obviously slow. If your system still looks like the first case, you are not done measuring. You are still looking at a partially hidden system and mistaking partial visibility for understanding.

## Closing

Most performance problems are not hard in the way people usually mean hard. They stay hard only while the important part of the system is still hidden, because invisible constraints invite superstition and visible ones usually collapse under straightforward engineering work. Systems do not get faster because we try harder. They get faster because we can finally see what is happening, and once we can see it, the right fix usually gets a lot smaller.

## Appendix A — Exercise: Your Hunch Does Not Matter Yet

This is the exercise I would run with a team. The goal is not to reward the smartest guess. The goal is to make people feel how little their first guess matters when most of the request is still invisible.

### Step 1 — Show only the misleading trace

Give people only the Phase 1 trace and say: **Go optimize that.** The only honest answer is: **I can't.** If most of the request is still invisible, there is nothing to optimize yet.

Then, if you want, ask what they think is slow or what they would change first. Write the answers down. Most of them will evaporate as soon as the richer trace shows up.

### Step 2 — Name the actual lesson

Before you show the richer trace, say it directly: your hunch does not matter yet. If the trace accounts for only a small fraction of the request, you do not know enough to optimize anything. You are projecting a story onto missing data.

### Step 3 — Show the richer trace

Now show Phase 2 and ask a different set of questions:

* Which of your earlier ideas still matter?
* What became obviously dominant?
* What work would have been wasted if you had shipped the first fix?

The first hunch was not morally wrong. It was operationally irrelevant. Once the hidden time becomes visible, the optimization problem changes shape.

### Step 4 — Show the after state

Now show the Phase 3 chart and ask:

* What disappeared?
* What stayed roughly the same?
* What does that tell you about where the time was really going?

### Discussion Prompt

If most of the request is still invisible, what is the right next step?

```text
Not "optimize."
Instrument until the dominant cost is visible.
```

## Appendix B — Guardrails

These are the minimum rules I would want around any serious performance work. They are simple on purpose, because teams are very good at becoming sophisticated before they become disciplined.

* No performance work without a trace.
* No optimization without a baseline.
* No fix without before/after measurement.
* If the bottleneck is not obvious, instrument more.

## Appendix C — What to Measure (Minimum)

Each item below rules out a different kind of self-deception. The goal is not a bigger dashboard. The goal is to make fake wins harder to mistake for real ones.

* latency distribution (p50, p95, p99) — tells you whether the pain is universal or hiding in the tail; averages will lie to you, which is why [*Averages Masking Tails*]({% post_url 2025-06-27-operational-data-primer %}) matters
* error rates — because a fast failure is still a failure
* request volume — because traffic mix shifts can make a system look faster than it is
* DB vs. application time — because “the app is slow” and “the database is slow” are different problems
* external calls (auth, APIs) — because many “application” problems are really dependency problems
* network bytes in and out per request — because lower latency with half the payload is not the same result
* cache hit/miss rates — because caching is often assumed, praised, and discussed long before it is actually working
* server utilization (CPU, memory, I/O) — because you need to know whether you are compute-bound, memory-bound, or mostly waiting somewhere else

If something is not measured, it is implicitly not being optimized. More dangerously, it is also a likely place for a false explanation to hide, because the unmeasured part of the system is where people project whatever story feels plausible.

## Appendix D — What Actually Fixed It

What helped **here**, once the trace exposed the bottlenecks, was much less glamorous than the earlier speculation.

First, the biggest gain came from the middleware path the new spans exposed. Reworking that layer so the request stopped going through the problematic base middleware machinery took out the largest chunk of hidden time. On ordinary requests, that was roughly a second by itself, and it was worse in some of the uglier cases.

Second, the Azure AD path turned out to be paying an avoidable tax on every request. The module already had built-in caching, but we were defeating it by creating a fresh client each time. Reusing a module-level instance brought that cache back into play and gave back roughly another 300ms per request.

That is what actually moved the numbers here, based on measurement. Other cleanup may still be worth doing for robustness or higher-throughput scenarios, but those were not the changes that took this endpoint from multi-second latency down into the low hundreds of milliseconds.

## Further Reading

* Carlos Bueno, [*The Mature Optimization Handbook*](https://carlos.bueno.org/optimization/) — still the best short book I know on why measurement has to come before optimization and why most of what people call optimization is usually ritualized guessing

## Related

* [Why Most Operational Analytics Fall Short And What You Can Do About It]({% post_url 2025-06-27-operational-data-primer %}) — the same diagnostic posture applied to business operations rather than request latency
* [Implementing SLOs for Data Quality]({% post_url 2023-07-12-implementing-slos-for-data-quality %}) — how the *Measure → Identify → Change → Verify* loop becomes a reliability practice once you formalize what “good” means
