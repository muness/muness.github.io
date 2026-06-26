# AGENTS.md - AI Agent Guidance

This file provides context and protocols for AI agents working in this repository.

## Project Context

This is a Jekyll blog (muness.github.io). Posts live in `_posts/` with YYYY-MM-DD prefixed filenames.

---

## Diagrams (D2)

Diagrams live in `viz/` as `.d2` sources and render to `assets/img/` as **sketch** SVGs.

- Example: `viz/splitting-learning-from-constraint.d2`
- Render (sketch SVG): `d2 --sketch --pad 24 --omit-version viz/<name>.d2 assets/img/<name>.svg`
- Check/format: `d2 validate viz/<name>.d2` and `d2 fmt viz/<name>.d2`
- SVG renders inline on GitHub and modern browsers; if you need maximum compatibility (some RSS/email clients), also export PNG: `d2 --sketch --pad 24 --omit-version viz/<name>.d2 assets/img/<name>.png`
- Embed in posts:
  - Live site: `![](/assets/img/<name>.svg)`
  - GitHub PR preview from `_posts/`: `![](../../assets/img/<name>.svg)`

