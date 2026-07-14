---
layout: default
# Index page
title: "Home"
---

<!-- Cal element-click embed code begins -->
<script type="text/javascript">
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", {origin:"https://app.cal.com"});

// Important: Make sure to add `data-cal-link="muness/c"` attribute to the element you want to open Cal on click
Cal("ui", {"styles":{"branding":{"brandColor":"#e1eeba"}},"hideEventTypeDetails":false});
</script>
<!-- Cal element-click embed code ends -->

# I help serious teams change how they work with agents.

A client brings me a workflow that is slow, brittle, expensive, or trapped in a few people's heads. The first question is often, “Where should we use an agent?”

I work from that business problem through the system that has to run. We name the actors, steps, constraints, and owner. We decide which steps need model judgment and which should remain ordinary code. Then we build a thin path through the real work and run it against real cases.

The result should change what someone can do: route a case differently, preserve an expert correction, catch a bad generalization, or stop rebuilding context every time the work starts.

[See selected work](/work/) · <a href="https://cal.com/muness/c" data-cal-link="muness/c">Tell me about the problem</a>

## Current work

- **Client work.** I help teams put agents into real workflows. The deliverable includes the tests, traces, operating rules, and named owners the team needs to run and change the system after I leave.
- **[Repo-Native Alignment](https://github.com/open-horizon-labs/repo-native-alignment).** A local code graph that lets an agent ask what depends on a change, which code relates to an outcome, and which tests exercise it.
- **Sketch-CE.** A method and captured experiment I am developing in a private research repository. When an approved counterexample exposes missing policy, the agent revises the governing sketch as well as the implementation. The repository keeps the generated sketches, implementations, gate results, and limits of the evidence.
- **[Unified Hi-Fi Control](https://github.com/open-horizon-labs/unified-hifi-control).** A Rust bridge connecting Roon, LMS, UPnP, and HQPlayer to a physical knob, web and mobile controls, and an MCP server. Every control path has to work against the system in my house.

## The questions I use

I ask the same questions whether the artifact is a client workflow, a Rust service, or a paper:

- What should someone be able to do differently?
- Which part needs model judgment?
- Who owns the result?
- What evidence makes it safe enough to move?

## Start with these essays

- [Agent Work That Changes Behavior](/posts/agent-work-that-changes-behavior/) — the operating model behind the current work.
- [AI: Token or GPT?](/posts/ai-is-a-general-purpose-token/) — what changes when LLMs become a cheap input to many kinds of work.
- [When AI Changes the Work, the Complements Change Too](/posts/ai-changes-the-complements/) — how cheaper execution changes which people and capabilities matter.
- [When Your Trace Is Lying to You](/posts/when-your-trace-is-lying-to-you/) — a performance case study about instrumenting the path before trusting the explanation.

[Read all writing](/writing/)

## A good fit

I do my best client work when the team has a consequential problem, access to the people and systems around it, and someone with enough authority to act on what we learn.

If that sounds like your situation, <a href="https://cal.com/muness/c" data-cal-link="muness/c">tell me about the problem</a>.
