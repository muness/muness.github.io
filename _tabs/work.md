---
title: Work
layout: page
icon: fas fa-briefcase
order: 1
---

A client workflow, a code graph, an agent experiment, and a hardware knob look like different projects. I use them to answer the same questions: What should change? Where does judgment belong? Who owns the result? What evidence lets us move?

## Consulting: put agents into real work

Clients usually arrive with a business problem, not an agent problem. A workflow costs too much, takes too long, produces inconsistent decisions, or depends on somebody reconstructing the same context every time.

I help the team:

- name the outcome and the person who owns it;
- map the people, systems, decisions, and constraints in the current workflow;
- separate deterministic steps from the places where model judgment helps;
- build a thin path through the real work;
- run real cases, inspect failures, and decide what to keep;
- leave behind tests, traces, operating rules, and a way to change the system safely.

A good engagement needs access to the people who know the work and someone who can change it. Without those, we can produce a deck. We cannot change the work.

[Tell me about the problem](https://cal.com/muness/c).

## Give agents the shape of the repository

[Repo-Native Alignment](https://github.com/open-horizon-labs/repo-native-alignment) runs locally beside a codebase and exposes its structure over MCP. An agent can ask what depends on a symbol, how code connects to an outcome, which tests exercise a path, or what crosses a subsystem boundary.

It ships as one binary with no Docker container, external database, or API key. That gives the agent enough repository structure to inspect the likely impact before it edits the code.

[Open Horizons Skills](https://github.com/open-horizon-labs/skills) give agents a sequence for doing the work: state the behavior that should change, frame the problem, compare solutions, execute, review, dissent, and salvage the learning when the code should be thrown away.

## Let reviewed corrections change the governing sketch

I am developing Sketch-CE in a private research repository. A coding agent can fix one failing example without capturing the rule that made it fail. Sketch-CE keeps those two repairs separate.

If the sketch already states the rule, the agent repairs the implementation. If the failure exposes missing or mistaken policy, a person decides whether to approve the counterexample. The agent then revises the sketch and implementation, and a regression gate checks the new result against earlier policy boundaries.

The current CatSynth experiment compares retained code, fresh rebuilds from the evolved sketch, and replay of the raw counterexamples. In one run with one model and one reveal order, the evolved-sketch rebuild passed 19 of 21 withheld cases; replay-all passed 15 of 21. That is evidence from one captured run, not a general performance claim. The useful artifact is the reviewable chain: counterexample, approved correction, revised sketch, generated code, and gate result.

## Put a physical knob on the system

[Unified Hi-Fi Control](https://github.com/open-horizon-labs/unified-hifi-control) connects Roon, LMS, UPnP, and HQPlayer to the controls I actually want: a physical [ESP32 knob](https://github.com/muness/roon-knob), a web UI, phone and watch clients, and an MCP server.

The bridge is a Rust service packaged for Docker, Synology, QNAP, LMS, macOS, Linux, and Windows. Turn the knob, press it, or ask an agent; the same server resolves the zone and sends the command to the active music system.

It is also fun. I want to keep building things I use.
