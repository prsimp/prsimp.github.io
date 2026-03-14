# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal blog (prsimp.com) built with Jekyll, HAML templates, and Compass/SCSS. Hosted on GitHub Pages.

## Build Commands

```bash
# Development (run in two terminals)
rake compass:watch    # Terminal 1: live SCSS recompilation
rake dev              # Terminal 2: cleans, compiles HAML/SCSS, starts Jekyll server

# Production build
rake jekyll           # Full build: clean → HAML parse → SCSS compile → Jekyll generate

# Individual steps
rake haml             # Compile _haml/*.haml → _layouts/*.html
rake compass          # Compile _scss/*.scss → css/*.css (compact output)
rake haml:clean       # Remove generated layouts
rake compass:clean    # Remove generated CSS
rake jekyll:clean     # Remove _site/
```

## Architecture

**Multi-stage build pipeline:**
1. HAML sources (`_haml/`) compile to HTML layouts (`_layouts/`)
2. SCSS sources (`_scss/`) compile to CSS (`css/`) via Compass
3. Jekyll processes Markdown posts (`_posts/`) + layouts into static site (`_site/`)

**Key directories:**
- `_haml/` — Source templates (edit these, not `_layouts/`)
- `_scss/` — Source stylesheets (edit these, not `css/`)
- `_layouts/` — Generated HTML (do not edit directly)
- `css/` — Generated CSS (do not edit directly)
- `_posts/` — Blog posts in Markdown with YAML front matter
- `_includes/` — Jekyll partials (e.g., Disqus comments)

## Post Format

Posts use filename convention `YYYY-MM-DD-title-slug.md` with front matter:
```yaml
---
layout: post
title: "Post Title"
location: "City, ST"
tags: [tag1, tag2]
---
```

## Dependencies

Requires Ruby with gems: `jekyll`, `haml`, `compass`. No Gemfile — gems are installed globally.

## Documentation

After making changes to the codebase, always update this file and any other relevant documentation (e.g., README.md) to reflect the current state of the project. This includes changes to build commands, architecture, dependencies, or project structure.
