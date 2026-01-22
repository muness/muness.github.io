# Open Horizons Build System

Generate EPUB and PDF from the novella chapters.

## Requirements

- **pandoc** (>= 2.0) - [Install instructions](https://pandoc.org/installing.html)
- **xelatex** (optional, for PDF) - Part of TeX Live or MacTeX

```bash
# macOS
brew install pandoc
brew install --cask mactex  # optional, for PDF

# Ubuntu/Debian
sudo apt install pandoc texlive-xetex
```

## Quick Start

```bash
cd miniseries/build
make epub       # Build EPUB → ../output/open-horizons.epub
```

## All Commands

| Command | Description |
|---------|-------------|
| `make epub` | Build EPUB (default) |
| `make pdf` | Build PDF (requires XeLaTeX) |
| `make book` | Build both EPUB and PDF |
| `make preview` | Build HTML and open in browser |
| `make wordcount` | Show word count by chapter |
| `make clean` | Remove output directory |

## File Structure

```
miniseries/
├── build/
│   ├── Makefile          # Build commands
│   ├── metadata.yaml     # Title, author, TOC settings
│   ├── epub.css          # EPUB styling
│   ├── front-matter.md   # Preface, characters, vocabulary
│   └── README.md         # This file
├── output/
│   └── open-horizons.epub
├── 1-the-waiting-room.md
├── 2-cheat-sheet-vs-system.md
├── 3-the-manifest.md
├── 4-guardrails-make-opinions-real.md
├── 5-distill-team-of-teams.md
├── 6-the-five-breakdowns.md
└── common.md             # World-building reference (not in book)
```

## Customization

### Metadata (`metadata.yaml`)

Edit title, author, description, and PDF settings.

### Styling (`epub.css`)

The CSS styles:
- **Command blocks** (`/problem-space`, etc.) - left border, monospace
- **Scene breaks** (`---`) - rendered as `* * *`
- **End-of-Episode Memos** - smaller italic text
- **Vocabulary** - definition list format

### Front Matter (`front-matter.md`)

Contains:
- Preface
- Dramatis Personae (characters)
- The Commands (9 commands reference)
- Vocabulary (key terms)

## Adding a Chapter

1. Create `7-new-chapter.md` in `miniseries/`
2. Add to `CHAPTERS` list in `Makefile` (maintains order)
3. Run `make epub`
