# What is this?

Muness's personal website. It's built using Jekyll and hosted on Github pages

## Diagrams (D2)

Diagrams live in `viz/` as `.d2` sources and render to `assets/img/` as **sketch** SVGs.

- Example source: `viz/splitting-learning-from-constraint.d2`
- Render (sketch SVG): `d2 --sketch --pad 24 --omit-version viz/<name>.d2 assets/img/<name>.svg`
- Check/format: `d2 validate viz/<name>.d2` and `d2 fmt viz/<name>.d2`
- SVG renders inline on GitHub and modern browsers; if you need maximum compatibility (some RSS/email clients), also export PNG: `d2 --sketch --pad 24 --omit-version viz/<name>.d2 assets/img/<name>.png`

Embed in posts:
- For the live site: `![](/assets/img/<name>.svg)`
- For GitHub PR preview from `_posts/`: `![](../../assets/img/<name>.svg)`
