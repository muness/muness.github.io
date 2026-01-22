# Open Horizons Novella Build
# Generates EPUB and PDF from markdown chapters

# Directories
SRC_DIR := ..
BUILD_DIR := .
OUT_DIR := ../output

# Source files (in order)
FRONT_MATTER := $(BUILD_DIR)/front-matter.md
CHAPTERS := $(SRC_DIR)/1-the-waiting-room.md \
            $(SRC_DIR)/2-cheat-sheet-vs-system.md \
            $(SRC_DIR)/3-the-manifest.md \
            $(SRC_DIR)/4-guardrails-make-opinions-real.md \
            $(SRC_DIR)/5-distill-team-of-teams.md \
            $(SRC_DIR)/6-the-five-breakdowns.md

ALL_SOURCES := $(FRONT_MATTER) $(CHAPTERS)

# Output files
EPUB := $(OUT_DIR)/open-horizons.epub
PDF := $(OUT_DIR)/open-horizons.pdf

# Metadata and styling
METADATA := $(BUILD_DIR)/metadata.yaml
CSS := $(BUILD_DIR)/epub.css

# Pandoc options
PANDOC_COMMON := --metadata-file=$(METADATA) \
                 --resource-path=$(SRC_DIR):$(SRC_DIR)/viz \
                 --toc \
                 --toc-depth=2 \
                 --standalone

PANDOC_EPUB := $(PANDOC_COMMON) \
               --css=$(CSS) \
               --epub-embed-font=$(BUILD_DIR)/fonts/*.ttf 2>/dev/null || true

PANDOC_PDF := $(PANDOC_COMMON) \
              --pdf-engine=xelatex \
              --template=$(BUILD_DIR)/template.latex 2>/dev/null || \
              $(PANDOC_COMMON) --pdf-engine=xelatex

# Default target
.PHONY: all
all: epub

# Create output directory
$(OUT_DIR):
	mkdir -p $(OUT_DIR)

# Build EPUB
.PHONY: epub
epub: $(OUT_DIR) $(EPUB)

$(EPUB): $(ALL_SOURCES) $(METADATA) $(CSS)
	@echo "Building EPUB..."
	pandoc $(ALL_SOURCES) \
		--metadata-file=$(METADATA) \
		--resource-path=$(SRC_DIR) \
		--css=$(CSS) \
		--toc \
		--toc-depth=2 \
		--split-level=1 \
		-o $(EPUB)
	@echo "Created: $(EPUB)"

# Build PDF
.PHONY: pdf
pdf: $(OUT_DIR) $(PDF)

$(PDF): $(ALL_SOURCES) $(METADATA)
	@echo "Building PDF..."
	pandoc $(ALL_SOURCES) \
		--metadata-file=$(METADATA) \
		--toc \
		--toc-depth=2 \
		--pdf-engine=xelatex \
		-o $(PDF)
	@echo "Created: $(PDF)"

# Build both
.PHONY: book
book: epub pdf

# Quick preview (HTML)
.PHONY: preview
preview: $(OUT_DIR)
	@echo "Building HTML preview..."
	pandoc $(ALL_SOURCES) \
		--metadata-file=$(METADATA) \
		--css=$(CSS) \
		--toc \
		--toc-depth=2 \
		--standalone \
		-o $(OUT_DIR)/preview.html
	@echo "Created: $(OUT_DIR)/preview.html"
	@open $(OUT_DIR)/preview.html 2>/dev/null || xdg-open $(OUT_DIR)/preview.html 2>/dev/null || echo "Open $(OUT_DIR)/preview.html in your browser"

# Word count
.PHONY: wordcount
wordcount:
	@echo "Word count by chapter:"
	@for f in $(CHAPTERS); do \
		wc -w "$$f" | awk '{printf "  %5d  %s\n", $$1, $$2}'; \
	done
	@echo "---"
	@cat $(CHAPTERS) | wc -w | awk '{printf "  %5d  TOTAL\n", $$1}'

# Clean
.PHONY: clean
clean:
	rm -rf $(OUT_DIR)

# Help
.PHONY: help
help:
	@echo "Open Horizons Build System"
	@echo ""
	@echo "Targets:"
	@echo "  epub      - Build EPUB (default)"
	@echo "  pdf       - Build PDF (requires XeLaTeX)"
	@echo "  book      - Build both EPUB and PDF"
	@echo "  preview   - Build HTML and open in browser"
	@echo "  wordcount - Show word count by chapter"
	@echo "  clean     - Remove output directory"
	@echo ""
	@echo "Requirements:"
	@echo "  - pandoc (>= 2.0)"
	@echo "  - xelatex (for PDF)"
