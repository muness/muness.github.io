---
title: Work
layout: consultancy
icon: fas fa-briefcase
order: 1
body_class: consultancy-work
---

<header class="consultancy-page-header consultancy-work-header">
  <h1>Client systems and open-source projects</h1>
  <div class="consultancy-work-header__context">
    <nav aria-label="Work page sections">
      <ul class="consultancy-section-nav">
        <li><a href="#client-systems">Client systems</a></li>
        <li><a href="#method">When a concrete case helps</a></li>
        <li><a href="#public-proof">Open-source projects</a></li>
      </ul>
    </nav>
  </div>
</header>

<section id="client-systems" class="consultancy-section" aria-labelledby="clients-title">
  <h2 id="clients-title">Selected client systems</h2>
  <div class="consultancy-case-list">
    <article class="consultancy-case">
      <h3>Search 200,000 expert profiles from a problem description</h3>
      <div>
        <p>I built a ranking system over about 200,000 expert profiles. It combined semantic and exact-term search with domain signals, reranking, and diversification. A trace showed why each result ranked, so the team could challenge the ranking and change it.</p>
        <p><a href="/posts/hybrid-search-case-study-ranking-better-results/">Read the technical case</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Let domain experts change pipeline rules</h3>
      <div>
        <p>Domain experts could change complicated business rules and run real cases without writing code. When one failed, we separated a code bug from a missing or mistaken rule. That distinction became part of Sketch-CE.</p>
        <p><a href="/posts/agents-dont-learn-the-domain-the-system-does/">Read the domain-learning loop</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Draft a performance review and growth plan</h3>
      <div>
        <p>The system combined 360-degree feedback, a skills rubric, and past reviews. It drafted a performance review and career-growth plan for someone to review and revise.</p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Suggest a project team</h3>
      <div>
        <p>The system compared project briefs with available people, prior assignments, expertise, and performance evidence. It suggested a team for someone to accept, change, or reject.</p>
      </div>
    </article>
  </div>
</section>

<section id="method" class="consultancy-section" aria-labelledby="method-title">
  <h2 id="method-title">When a concrete case helps</h2>
  <p class="consultancy-section__intro">For some work, a known case gives us something concrete to build and argue about.</p>
  <ol class="consultancy-process">
    <li>
      <h3>Pick a case we understand</h3>
      <p>Choose one with a known outcome. If no one can say what should have happened, we have more discovery to do.</p>
    </li>
    <li>
      <h3>Trace what happens</h3>
      <p>Who does what? What do they look at? Where do the rules live? What happens when the answer is wrong?</p>
    </li>
    <li>
      <h3>Build enough to try</h3>
      <p>Use code when we can state the rule. Use a model when the system has to interpret language or compare messy cases. Put the answer in front of the person who knows the job.</p>
    </li>
    <li>
      <h3>Fix the layer that failed</h3>
      <p>A bad result can come from code, a rule, the data, or our understanding of the job. Fix the layer that failed and run the case again.</p>
    </li>
  </ol>
  <p class="consultancy-section__intro">The person who knows the work needs to try early versions. Otherwise we can make a polished system that misses the job.</p>
</section>

<section id="public-proof" class="consultancy-section" aria-labelledby="proof-title">
  <h2 id="proof-title">Open-source projects</h2>
  <p class="consultancy-section__intro">Some projects are open source because I wanted to make them and can share them.</p>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">CODE INTELLIGENCE FOR AGENTS</p>
      <h3><a href="https://github.com/open-horizon-labs/repo-native-alignment">Repo-Native Alignment</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>Coding agents can edit many files without knowing what depends on what. RNA builds a local graph from code, language-server data, git history, and repo artifacts. It lets an agent ask what a change touches, find code by meaning, or connect a commit to the business reason behind it.</p>
      <p>It runs as one local binary and exposes the graph over MCP.</p>
    </div>
  </article>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">PAPER AND CODE</p>
      <h3><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches">Sketch-CE</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>A coding agent can fix one example without capturing the rule that made it fail. Sketch-CE keeps an implementation repair separate from a business-rule change: people approve rule changes, while the agent can repair an implementation error.</p>
      <p><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches/blob/7ee5db12c37f834c6accea85a80f5a50aaff5aa4/paper/main.pdf">Read the paper</a></p>
    </div>
  </article>

  <details class="consultancy-more">
    <summary>More open-source projects</summary>
    <div class="consultancy-more__content">
      <ul class="consultancy-link-list">
        <li>
          <h3><a href="https://github.com/open-horizon-labs/skills">Open Horizons Skills</a></h3>
          <p>The skills I use to decide what should change, compare approaches, do the work, check it, and keep what we learned when a plan fails.</p>
        </li>
        <li>
          <h3><a href="https://github.com/open-horizon-labs/unified-hifi-control">Unified Hi-Fi Control</a></h3>
          <p>A Rust bridge connecting Roon, LMS, UPnP, and HQPlayer to a physical knob, web UI, Apple clients, and MCP. I use it every day. It is also fun.</p>
        </li>
        <li>
          <h3><a href="https://github.com/open-horizon-labs/northwoods">Northwoods</a></h3>
          <p>A weekend interview exercise that extracted fields from handwritten intake forms, sent uncertain fields to a reviewer, preserved corrections, and retrieved related cases.</p>
        </li>
      </ul>
    </div>
  </details>
</section>

<section class="consultancy-closing" aria-labelledby="work-cta-title">
  <div>
    <h2 id="work-cta-title">Tell me what you want to change</h2>
    <p>We can work out whether I can help.</p>
  </div>
  <a class="consultancy-button" href="/contact/">Tell me about the work</a>
</section>
