# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal blog (prsimp.com) built with Astro. Hosted on GitHub Pages.

## Build Commands

```bash
npm run dev       # Start development server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Architecture

Astro static site with content collections:

- `src/content/posts/` — Blog posts in Markdown with YAML front matter
- `src/content/drafts/` — Draft posts (gitignored, dev-only)
- `src/content/scratch/` — Rough ideas/notes (gitignored, dev-only)
- `src/layouts/Default.astro` — Main HTML shell (head, header/nav, footer, TypeKit)
- `src/components/PostList.astro` — Reusable post list component
- `src/pages/` — Page routes (index, about, archives, 404, posts/[...slug], drafts/, scratch/)
- `public/` — Static assets (images, CNAME, favicon, styles)

## Post Format

Posts use filename convention `YYYY-MM-DD-title-slug.md` with front matter:
```yaml
---
title: "Post Title"
location: "City, ST"
tags: [tag1, tag2]
---
```

URL structure: `/posts/:title-slug.html`

## Drafts & Scratch Ideas

Both are local-only (gitignored) and only visible during `npm run dev`. Nav links appear in dev mode only.

**Drafts** — near-complete posts, same format as published posts:
```yaml
# src/content/drafts/YYYY-MM-DD-title-slug.md
---
title: "Draft Title"
location: "City, ST"
tags: [tag1, tag2]
---
```
URL: `/drafts/:title-slug.html`

**Scratch** — rough ideas/notes, minimal front matter:
```yaml
# src/content/scratch/any-name.md
---
title: "Idea Title"
tags: [optional]
---
```
URL: `/scratch/:filename.html`

## Writing Guidelines

When drafting or editing blog content, follow these guidelines:

- **Conversational but not rambling** — reads like telling a friend over coffee, not performing
- **Honest about uncertainty** — don't pretend to have all the answers
- **Light touch on sentiment** — reflective without being nostalgic or saccharine
- **Specifics over generalities** — concrete details about work, tech, the city, interests. Family shows up naturally but isn't the subject.
- **Family privacy** — Kara by name when relevant, kids only in passing (not by name, no anecdotes that center on them)

## Dependencies

Node.js (managed via mise), Astro. See `package.json`.

## Documentation

After making changes to the codebase, always update this file and any other relevant documentation (e.g., README.md) to reflect the current state of the project. This includes changes to build commands, architecture, dependencies, or project structure.
