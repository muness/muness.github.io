---
title: Work
layout: consultancy
icon: fas fa-briefcase
order: 1
body_class: consultancy-work
---

<header class="consultancy-page-header consultancy-work-header">
  <h1>Get the work unstuck.</h1>
  <div class="consultancy-work-header__context">
    <p>An important workflow may look like a software request while the real constraint sits in a decision, rule, handoff, or team. I work across those layers, build enough to run a real case, and leave the people doing the job able to judge and improve the result.</p>
    <nav aria-label="Work page sections">
      <ul class="consultancy-section-nav">
        <li><a href="#value">What I bring</a></li>
        <li><a href="#client-systems">Client systems</a></li>
        <li><a href="#method">How I work</a></li>
        <li><a href="#public-proof">Open-source projects</a></li>
      </ul>
    </nav>
  </div>
</header>

<section id="value" class="consultancy-section" aria-labelledby="value-title">
  <h2 id="value-title">What I bring to the work</h2>
  <ul class="consultancy-beliefs">
    <li>
      <h3>Find the job beneath the request</h3>
      <p>I trace the cases, decisions, rules, evidence, and exceptions with the people doing the work. That tells us whether the problem needs software, a model, a process change, or a decision we have not made yet.</p>
    </li>
    <li>
      <h3>Make it tangible early</h3>
      <p>I build enough to run a case the team already understands. A real result gives us something better than a requirements argument: the person who knows the job can show us what is wrong.</p>
    </li>
    <li>
      <h3>Leave a way to improve it</h3>
      <p>When a result fails, we locate the failure in the code, data, rule, or our understanding of the work. The case and correction become part of the system instead of another explanation someone has to remember.</p>
    </li>
  </ul>
</section>

<section id="client-systems" class="consultancy-section" aria-labelledby="clients-title">
  <h2 id="clients-title">Selected client systems</h2>
  <p class="consultancy-section__intro">Client names and artifacts are private. The descriptions below stick to the system I built and what someone could do with it.</p>
  <div class="consultancy-case-list">
    <article class="consultancy-case">
      <h3>Search about 200,000 expert profiles from a problem description</h3>
      <div>
        <p>The team had to match a problem description to one of about 200,000 expert profiles. I built the search, ranking, and trace that showed why each result appeared. The search stayed live during a full re-embed, and bounded concurrency cut that rebuild from more than 15 hours to under two.</p>
        <p class="consultancy-case__result"><strong>The team could:</strong> Inspect why a profile appeared, challenge the result, and adjust the ranking instead of treating search as a black box.</p>
        <p><a href="/posts/hybrid-search-case-study-ranking-better-results/">Read the technical case</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Correct a failed pipeline case without writing code</h3>
      <div>
        <p>The pipeline rules were complicated, and the people who understood the work should not have to diagnose the implementation. I built a workflow that let a domain expert supply a failed case and the expected result without writing code.</p>
        <p class="consultancy-case__result"><strong>The domain expert could:</strong> Show what should have happened. The preserved case could then guide an implementation repair or put a proposed rule change in front of people for approval.</p>
        <p><a href="/posts/agents-dont-learn-the-domain-the-system-does/">Read the domain-learning loop</a></p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Draft a performance review and growth plan</h3>
      <div>
        <p>The evidence for a performance review included 360-degree feedback, a skills rubric, and past reviews. I built a system that assembled those inputs into a draft review and career-growth plan.</p>
        <p class="consultancy-case__result"><strong>The manager could:</strong> Start with a draft assembled from the team's rubric and evidence, revise it, and keep responsibility for the review.</p>
      </div>
    </article>
    <article class="consultancy-case">
      <h3>Suggest a project team</h3>
      <div>
        <p>Staffing a project meant comparing its brief with availability, prior assignments, expertise, and performance evidence. I built a system that assembled that evidence and suggested a team.</p>
        <p class="consultancy-case__result"><strong>The project owner could:</strong> Inspect a suggestion assembled from several kinds of evidence, change it, and still make the staffing decision.</p>
      </div>
    </article>
  </div>
</section>

<section id="method" class="consultancy-section" aria-labelledby="method-title">
  <h2 id="method-title">How I work from a concrete case</h2>
  <p class="consultancy-section__intro">A known case gives us something concrete to build, test, and argue about.</p>
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
  <p class="consultancy-section__intro">These projects expose two parts of the method: keeping business rules under human authority and making the consequences of a code change inspectable.</p>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">KEEP BUSINESS RULES UNDER HUMAN AUTHORITY</p>
      <h3><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches">Sketch-CE</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>Sketch-CE demonstrates how I separate an implementation error from a disputed business rule. A domain expert supplies the expected behavior; people approve rule changes; an agent can repair the implementation against the accepted case.</p>
      <p><a href="https://github.com/open-horizon-labs/counterexample-supplemented-sketches/blob/7ee5db12c37f834c6accea85a80f5a50aaff5aa4/paper/main.pdf">Read the paper</a></p>
    </div>
  </article>

  <article class="consultancy-proof">
    <div>
      <p class="consultancy-proof__meta">TRACE WHAT A CHANGE TOUCHES</p>
      <h3><a href="https://github.com/open-horizon-labs/repo-native-alignment">Repo-Native Alignment</a></h3>
    </div>
    <div class="consultancy-proof__body">
      <p>Repo-Native Alignment demonstrates how I make hidden dependencies and business context inspectable before an agent edits code. It connects code structure, repository history, and the reasons recorded for earlier changes so a builder can ask what a proposed change touches.</p>
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
    <h2 id="work-cta-title">Bring me one case the current system cannot handle</h2>
    <p>We can trace what should happen, make enough of it tangible to test, and decide whether the work is worth taking further.</p>
  </div>
  <a class="consultancy-button" href="/contact/">Tell me about the work</a>
</section>
