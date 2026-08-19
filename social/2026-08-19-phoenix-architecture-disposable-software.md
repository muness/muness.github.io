---
title: "Phoenix Architecture and disposable software"
author: muness
status: published
artifact: social-post
platforms:
  linkedin:
    format: repost-commentary
    url: https://www.linkedin.com/feed/update/urn:li:share:7495941947459588096/
    published_at: 2026-08-19
related_post: _posts/2026-08-19-replacing-the-implementation-without-losing-the-decisions.md
---

## Post

Phoenix Architecture is right about disposable software. If code is cheap to regenerate, we should be able to tear it out without losing everything we learned while building and running it.

We have been doing this with Counterexample-Supplemented Sketches. When the software fails, a person decides what needs to change. We keep that decision and a check for the next implementation outside the code, then regenerate.

We delete the implementation all the time. Here, I describe what we keep:
https://muness.com/posts/replacing-the-implementation-without-losing-the-decisions/
