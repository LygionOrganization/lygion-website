---
name: update-lygion-product-page
description: Create, redesign, or update bilingual LYGION product detail pages under public/product-pages, following the established bus-device page style. Use when asked to make a product page, add Chinese or English product content, standardize product-page buttons or modules, connect product Wiki links, or update the product catalog entry in src/data/products.ts.
---

# Update LYGION Product Page

## Overview

Follow the repository's established bilingual product-page pattern without requiring the user to repeat layout, button, tone, or link requirements.

## Workflow

1. Read [references/page-standard.md](references/page-standard.md) completely.
2. Inspect the target product's source materials, images, Wiki material, existing page, and `src/data/products.ts` entry. Treat repository and supplied materials as the source of truth.
3. Use the five canonical pages in the standard as references. Choose the closest page by product type; do not blindly clone one page.
4. Continue with verified content where possible. Never invent specifications, compatibility, package contents, certifications, or use cases.
5. Create or update the Chinese page, English page, shared CSS, assets, and matching bilingual paths in `src/data/products.ts`.
6. Write natural technical Chinese and English with identical facts and section coverage.
7. Verify required buttons, paths, Wiki domains, responsive behavior, and metadata with the acceptance checklist.
8. Run relevant project checks and visually inspect desktop and mobile layouts when browser tooling is available.

## Implementation Rules

- Preserve unrelated changes and reuse suitable repository assets.
- Keep Chinese at `index.html`, English at `en/index.html`, with shared CSS.
- Use `assets/...` in Chinese and `../assets/...` in English.
- Add `target="_blank" rel="noopener noreferrer"` to external links.
- Use descriptive alt text, visible focus states, semantic HTML, and responsive layouts.
- Report missing source images or facts; never publish placeholders or fake image prompts.

## Completion Report

Summarize files changed, checks run, missing source material, and whether both languages were visually verified.

<!-- Unused initializer guidance retained below:

## Structuring This Skill

[TODO: Choose the structure that best fits this skill's purpose. Common patterns:

**1. Workflow-Based** (best for sequential processes)
- Works well when there are clear step-by-step procedures
- Example: DOCX skill with "Workflow Decision Tree" -> "Reading" -> "Creating" -> "Editing"
- Structure: ## Overview -> ## Workflow Decision Tree -> ## Step 1 -> ## Step 2...

**2. Task-Based** (best for tool collections)
- Works well when the skill offers different operations/capabilities
- Example: PDF skill with "Quick Start" -> "Merge PDFs" -> "Split PDFs" -> "Extract Text"
- Structure: ## Overview -> ## Quick Start -> ## Task Category 1 -> ## Task Category 2...

**3. Reference/Guidelines** (best for standards or specifications)
- Works well for brand guidelines, coding standards, or requirements
- Example: Brand styling with "Brand Guidelines" -> "Colors" -> "Typography" -> "Features"
- Structure: ## Overview -> ## Guidelines -> ## Specifications -> ## Usage...

**4. Capabilities-Based** (best for integrated systems)
- Works well when the skill provides multiple interrelated features
- Example: Product Management with "Core Capabilities" -> numbered capability list
- Structure: ## Overview -> ## Core Capabilities -> ### 1. Feature -> ### 2. Feature...

Patterns can be mixed and matched as needed. Most skills combine patterns (e.g., start with task-based, add workflow for complex operations).

Delete this entire "Structuring This Skill" section when done - it's just guidance.]

## [TODO: Replace with the first main section based on chosen structure]

[TODO: Add content here. See examples in existing skills:
- Code samples for technical skills
- Decision trees for complex workflows
- Concrete examples with realistic user requests
- References to scripts/templates/references as needed]

## Resources (optional)

Create only the resource directories this skill actually needs. Delete this section if no resources are required.

### scripts/
Executable code (Python/Bash/etc.) that can be run directly to perform specific operations.

**Examples from other skills:**
- PDF skill: `fill_fillable_fields.py`, `extract_form_field_info.py` - utilities for PDF manipulation
- DOCX skill: `document.py`, `utilities.py` - Python modules for document processing

**Appropriate for:** Python scripts, shell scripts, or any executable code that performs automation, data processing, or specific operations.

**Note:** Scripts may be executed without loading into context, but can still be read by Codex for patching or environment adjustments.

### references/
Documentation and reference material intended to be loaded into context to inform Codex's process and thinking.

**Examples from other skills:**
- Product management: `communication.md`, `context_building.md` - detailed workflow guides
- BigQuery: API reference documentation and query examples
- Finance: Schema documentation, company policies

**Appropriate for:** In-depth documentation, API references, database schemas, comprehensive guides, or any detailed information that Codex should reference while working.

### assets/
Files not intended to be loaded into context, but rather used within the output Codex produces.

**Examples from other skills:**
- Brand styling: PowerPoint template files (.pptx), logo files
- Frontend builder: HTML/React boilerplate project directories
- Typography: Font files (.ttf, .woff2)

**Appropriate for:** Templates, boilerplate code, document templates, images, icons, fonts, or any files meant to be copied or used in the final output.

---

**Not every skill requires all three types of resources.**
-->
