---
title: Work
layout: consultancy
icon: fas fa-briefcase
order: 1
body_class: consultancy-work
---

<header class="consultancy-page-header consultancy-work-header">
  <h1>Build for the people doing the work.</h1>
  <div class="consultancy-work-header__context">
    <p>Across health research and financial services, I build systems that let people find the right expert, change a governed pipeline, write a review, or staff a project.</p>
    <nav aria-label="Work page sections">
      <ul class="consultancy-section-nav">
        <li><a href="#method">Method</a></li>
        <li><a href="#client-systems">Client systems</a></li>
        <li><a href="#public-proof">Public work</a></li>
      </ul>
    </nav>
  </div>
</header>

<section id="method" class="consultancy-section" aria-labelledby="method-title">
  <h2 id="method-title">How I work</h2>
  <p class="consultancy-section__intro">Start with the current workflow. Build one path the team can test and change.</p>
  <ol class="consultancy-process">
    <li>
      <h3>Name what has to change.</h3>
      <p>Define the outcome, the behavior that should change, and the person who owns it.</p>
    </li>
    <li>
      <h3>Map the work.</h3>
      <p>Find the people, systems, decisions, incentives, and constraints around the current path.</p>
    </li>
    <li>
      <h3>Build one path.</h3>
      <p>Separate deterministic work from model judgment. Run known cases. Inspect the failures.</p>
    </li>
    <li>
      <h3>Leave a way to change it.</h3>
      <p>I leave the team with tests, traces, operating rules, and a safe way to change the system.</p>
    </li>
  </ol>
  <p class="consultancy-section__intro">This work needs access to the people and systems involved, direct disagreement, and an owner with authority to change the workflow.</p>
</section>

<section id="client-systems" class="consultancy-section" aria-labelledby="clients-title">
  <h2 id="clients-title">Selected client systems</h2>
  <div class="consultancy-case-list">
    <article class="consultancy-case">
      <h3>Find the right expert from the problem.</h3>
      <div>
        <p>An innovator could describe a problem and see experts who might help. I built the ranking system over about 200,000 expert profiles. It combined semantic and exact-term retrieval with domain signals, reranking, and diversification. A diagnostic trace showed why each match ranked, so an operator could challenge and tune the ranking.</p>
        <p><a href="/posts/hybrid-search-case-study-ranking-better-results/">Read the technical case</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Let the people who know the rules change the pipeline.</h3>
      <div>
        <p>People who knew the business rules could change the pipeline without writing code. I built the system. Each correction showed one of two things: the implementation was wrong, or the rule was missing or mistaken. That split led to Sketch-CE.</p>
        <p><a href="/posts/agents-dont-learn-the-domain-the-system-does/">Read the domain-learning loop</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Draft a review from the work people actually did.</h3>
      <div>
        <p>360-degree feedback, the client's skills rubric, and past reviews went in. The system drafted a performance review and career-growth plan.</p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Suggest staffing from the project and the people.</h3>
      <div>
        <p>Project briefs, availability, prior assignments, expertise, and performance evidence went in. The assistant suggested staffing.</p>
      </div>
    </article>
  </div>
</section>

<section id="public-proof" class="consultancy-section" aria-labelledby="proof-title">
  <h2 id="proof-title">Public work</h2>
  <p class="consultancy-section__intro">The code, checks, and decision record are public.</p>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">END-TO-END BUILD</p>
      <h3><a href="https://github.com/open-horizon-labs/northwoods">Northwoods</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>I narrowed a broad interview brief to one path: extract fields from handwritten intake forms, send uncertain fields to a reviewer, preserve corrections, and retrieve related cases. Agents worked issues from branch through implementation and review. I set the scope, caught drift, chose the architecture, and decided whether the result was good enough.</p>
      <p>The aims, guardrails, architecture decisions, tests, and agent session records live beside the code.</p>
    </div>
  </article>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">METHOD EXPERIMENT</p>
      <h3><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches">Sketch-CE</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>A coding agent can fix one example without capturing the rule that made it fail. Sketch-CE separates implementation repair from a policy change. A person approves policy-changing counterexamples before the agent revises the governing sketch.</p>
      <p><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches/blob/7ee5db12c37f834c6accea85a80f5a50aaff5aa4/paper/main.pdf">Read the paper</a></p>
    </div>
  </article>

  <details class="consultancy-more">
    <summary>More public systems</summary>
    <div class="consultancy-more__content">
      <ul class="consultancy-link-list">
        <li>
          <h3><a href="https://github.com/open-horizon-labs/repo-native-alignment">Repo-Native Alignment</a></h3>
          <p>One local binary that lets an agent query dependency paths, subsystem boundaries, tests, and links from code to business outcomes over MCP.</p>
        </li>
        <li>
          <h3><a href="https://github.com/open-horizon-labs/skills">Open Horizons Skills</a></h3>
          <p>A working sequence for aim, problem framing, solution comparison, execution, review, dissent, and salvage.</p>
        </li>
        <li>
          <h3><a href="https://github.com/open-horizon-labs/unified-hifi-control">Unified Hi-Fi Control</a></h3>
          <p>A Rust bridge connecting Roon, LMS, UPnP, and HQPlayer to a physical knob, web UI, Apple clients, and MCP. I use it every day. It is also fun.</p>
        </li>
      </ul>
    </div>
  </details>
</section>

<section class="consultancy-closing" aria-labelledby="work-cta-title">
  <div>
    <h2 id="work-cta-title">What work is stuck?</h2>
    <p>Bring the current path, the known failures, and the people who understand why the obvious fix may be wrong.</p>
  </div>
  <a class="consultancy-button" href="/contact/">Start with the problem</a>
</section>
