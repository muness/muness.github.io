# Muness Voice Skill

This directory publishes the public version of the `muness-voice` agent skill.

The skill is for writing, rewriting, and reviewing prose so it sounds like Muness Castle thinking through a problem with the reader: mechanism-first, concrete before abstract, skeptical of generic AI boosterism, and allergic to polished nonsense.

## Files

- [`SKILL.md`](SKILL.md) — the skill definition.

## Using it

Copy `SKILL.md` into your agent skill directory as `muness-voice/SKILL.md`, or point your tooling at the raw file after this branch is merged:

```bash
mkdir -p ~/.claude/skills/muness-voice
curl -L https://raw.githubusercontent.com/muness/muness.github.io/main/skills/muness-voice/SKILL.md \
  -o ~/.claude/skills/muness-voice/SKILL.md
```

## Privacy note

The public skill intentionally omits private transcript evidence. It encodes the operating rules, guardrails, and rewrite checks; local users should supply their own source writing or private examples when calibrating voice.
