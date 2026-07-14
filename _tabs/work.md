---
title: Work
layout: page
icon: fas fa-briefcase
order: 1
---

## Consulting: change the workflow

Clients usually arrive with a business problem. A workflow costs too much, takes too long, produces inconsistent decisions, or depends on somebody reconstructing the same context every time.

I help the team:

- name the outcome and the person who owns it;
- map the people, systems, decisions, and constraints in the current workflow;
- separate deterministic steps from the places where model judgment helps;
- build one path from input to outcome;
- run known cases, inspect failures, and decide what to keep;
- leave behind tests, traces, operating rules, and a way to change the system safely.

The team needs access to the people and systems around the workflow, trust for direct disagreement, authority to act, and an owner who will carry the system forward. Without those, we can produce a deck. We cannot change the work.

[Start with the problem](/contact/).

## Selected client systems

I do not name the clients here. The systems include:

- **An innovation connector.** I built a search system over about 200,000 expert profiles. It let an innovator start with the problem rather than the name of an expert. The ranking pipeline combined semantic and exact-term retrieval with domain signals, reranking, and diversification. A diagnostic trace showed why each match ranked, so an operator could challenge the result and tune the system. [Read the technical case.](/posts/hybrid-search-case-study-ranking-better-results/)
- **Data pipelines.** I built a system so people who knew the business rules could shape pipelines without writing code. Each correction raised one of two questions: was the generated implementation wrong, or was the rule that should govern later implementations missing or mistaken? That distinction led to [Sketch-CE](https://github.com/open-horizon-labs/counterexample-supplemented-sketches). [Read how the domain-learning loop works.](/posts/agents-dont-learn-the-domain-the-system-does/)
- **Performance synthesis.** A system combined 360-degree feedback from several projects, the client's skills rubric, and past reviews into a performance review and career-growth plan.
- **Project staffing.** An assistant used project briefs, availability, prior assignments, expertise, and the same performance evidence to suggest assignments.

## Give agents context and a way to work

- **[Repo-Native Alignment](https://github.com/open-horizon-labs/repo-native-alignment).** It indexes a codebase locally and exposes its structure over MCP. An agent can ask what depends on a symbol, how code connects to an outcome, which tests exercise a path, or what crosses a subsystem boundary. It ships as one binary, with no Docker container, external database, or API key.
- **[Open Horizons Skills](https://github.com/open-horizon-labs/skills).** They give agents a sequence for doing the work: state the behavior that should change, frame the problem, compare solutions, execute, review, dissent, and salvage the learning when the code should be thrown away.

## Let reviewed corrections change the governing sketch

A coding agent can fix one failing example without capturing the rule that made it fail. [Sketch-CE](https://github.com/open-horizon-labs/counterexample-supplemented-sketches) separates a code repair from a policy change.

If the sketch already states the rule, the agent repairs the code. If the failure exposes missing or mistaken policy, a person approves the counterexample before the agent revises the sketch and code. A regression gate checks the result against earlier policy boundaries.

The public CatSynth experiment compares retained code, fresh rebuilds from the evolved sketch, and replay of the raw counterexamples. In one run with one model and one reveal order, the evolved-sketch rebuild passed 19 of 21 withheld cases; replay-all passed 15 of 21. You can inspect the [paper](https://github.com/open-horizon-labs/counterexample-supplemented-sketches/blob/7ee5db12c37f834c6accea85a80f5a50aaff5aa4/paper/main.pdf) and the [captured run artifacts](https://github.com/open-horizon-labs/counterexample-supplemented-sketches/tree/7ee5db12c37f834c6accea85a80f5a50aaff5aa4/examples/catsynth/experiment/results/gpt-5.4-mini-adaptive-open-world-v2-20260712/).

## Control the stereo from one place

[Unified Hi-Fi Control](https://github.com/open-horizon-labs/unified-hifi-control) connects Roon, LMS, UPnP, and HQPlayer to a physical [ESP32 knob](https://github.com/muness/roon-knob), a web UI, an iOS and Apple Watch client in alpha, and an MCP server. The Rust bridge is packaged for Docker, Synology, QNAP, LMS, macOS, Linux, and Windows. Whether a command comes from the knob, web UI, or an agent, the server resolves the zone and sends it to the active music system.

I use it every day. It is also fun.
