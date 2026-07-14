---
title: Work
layout: consultancy
icon: fas fa-briefcase
order: 1
body_class: consultancy-work
---

<header class="consultancy-page-header consultancy-work-header">
  <h1>The job comes before the model.</h1>
  <div class="consultancy-work-header__context">
    <p>The work below started with someone trying to find an expert, change a business rule, write a review, or staff a project. The model was one part of the system we built around that job.</p>
    <nav aria-label="Work page sections">
      <ul class="consultancy-section-nav">
        <li><a href="#client-systems">Client systems</a></li>
        <li><a href="#method">How I work</a></li>
        <li><a href="#public-proof">Public work</a></li>
      </ul>
    </nav>
  </div>
</header>

<section id="client-systems" class="consultancy-section" aria-labelledby="clients-title">
  <h2 id="clients-title">Selected client systems</h2>
  <div class="consultancy-case-list">
    <article class="consultancy-case">
      <h3>Find experts from a problem description.</h3>
      <div>
        <p>I built the ranking system over about 200,000 expert profiles. It combined semantic and exact-term retrieval with domain signals, reranking, and diversification. A trace showed why each match ranked, so we could see what to change.</p>
        <p><a href="/posts/hybrid-search-case-study-ranking-better-results/">Read the technical case</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Change a pipeline rule without writing code.</h3>
      <div>
        <p>Business experts could change complicated rules and run cases without writing code. When one failed, we had to decide whether the implementation was wrong or the rule was missing or mistaken. That distinction became the basis for Sketch-CE.</p>
        <p><a href="/posts/agents-dont-learn-the-domain-the-system-does/">Read the domain-learning loop</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Draft a performance review and growth plan.</h3>
      <div>
        <p>The system pulled together 360-degree feedback, the client's skills rubric, and past reviews. It drafted a performance review and career-growth plan.</p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Suggest a project team.</h3>
      <div>
        <p>The system compared project briefs with availability, prior assignments, expertise, and performance evidence, then suggested a team.</p>
      </div>
    </article>
  </div>
</section>

<section id="method" class="consultancy-section" aria-labelledby="method-title">
  <h2 id="method-title">How I work</h2>
  <p class="consultancy-section__intro">I start with a case the team knows well. It gives us something concrete to build and a result we can argue about.</p>
  <ol class="consultancy-process">
    <li>
      <h3>Start with one case.</h3>
      <p>Choose one with a known outcome. If there isn't one, ask someone who knows what should have happened.</p>
    </li>
    <li>
      <h3>Follow the job.</h3>
      <p>Who does what? What do they look at? Where do the rules live? What happens when the answer is wrong?</p>
    </li>
    <li>
      <h3>Build enough to try it.</h3>
      <p>Use code when we can state the rule. Use a model when the system has to interpret language or compare messy cases. Put the answer in front of the person who knows the job.</p>
    </li>
    <li>
      <h3>Find out why it missed.</h3>
      <p>A bad result may mean the code is wrong, the rule is missing, or we misunderstood the job. Fix the right thing and run it again.</p>
    </li>
  </ol>
  <p class="consultancy-section__intro">That person needs to try early versions. Otherwise we can build a polished system that misunderstands the work.</p>
</section>

<section id="public-proof" class="consultancy-section" aria-labelledby="proof-title">
  <h2 id="proof-title">Public work</h2>
  <p class="consultancy-section__intro">I publish tools and methods so other people can inspect, use, and change them.</p>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">CODE INTELLIGENCE FOR AGENTS</p>
      <h3><a href="https://github.com/open-horizon-labs/repo-native-alignment">Repo-Native Alignment</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>Coding agents can edit many files without knowing what depends on what. RNA builds a local graph from code, language-server data, git history, and repo artifacts. An agent can ask what depends on a change, find code by meaning, or connect a commit to the business reason for it.</p>
      <p>It runs as one local binary and exposes the graph over MCP.</p>
    </div>
  </article>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">METHOD EXPERIMENT</p>
      <h3><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches">Sketch-CE</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>A coding agent can fix one example without capturing the rule that made it fail. Sketch-CE keeps an implementation repair separate from a business-rule change. People approve examples that change the rule; the agent can repair an implementation error without quietly changing it.</p>
      <p><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches/blob/7ee5db12c37f834c6accea85a80f5a50aaff5aa4/paper/main.pdf">Read the paper</a></p>
    </div>
  </article>

  <details class="consultancy-more">
    <summary>More public systems</summary>
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
    <h2 id="work-cta-title">Have a case in mind?</h2>
    <p>We'll walk through what happened and decide whether I can help.</p>
  </div>
  <a class="consultancy-button" href="/contact/">Tell me about the work</a>
</section>
