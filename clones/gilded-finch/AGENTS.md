<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# The Gilded Finch — Wix "Bar (Friendly)" template (wh-1463)

Standalone Next.js 16 app (App Router, React 19, TypeScript strict, Tailwind CSS v4) that recreates this Wix template. It is independent of the template app at the repository root: install, run, and check it from this folder.

## Commands
- `npm run dev` — start the dev server
- `npm run check` — lint + typecheck + production build

## Layout
- `src/app/` — one route per source page, matching the source pathnames
- `src/components/site/` — this site's components
- `public/assets/` — images, video, and open-licensed fonts downloaded from the source
- `docs/research/` — page brief and source URL → local asset map
- `docs/design-references/` — labeled source and comparison screenshots
- `scripts/` — asset download scripts

## Rules
- Match the source 1:1 before making design changes.
- TypeScript strict, no `any`; named exports; 2-space indentation; mobile-first Tailwind.
