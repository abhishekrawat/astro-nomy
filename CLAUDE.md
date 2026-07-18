# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # local dev (no DB remote)
pnpm build        # production build (uses --remote flag for Astro DB)
pnpm build-local  # build without remote DB (local seed data only)
pnpm preview      # preview built site
```

No test suite is configured.

## Architecture

Personal portfolio + blog for Abhishek Rawat. Stack: **Astro 5**, React (islands), Tailwind CSS, shadcn/ui, MDX, Astro DB, deployed to Vercel.

### Rendering model

`output: "server"` with `@astrojs/vercel` adapter. All content pages opt back into static generation:

```astro
export const prerender = true;
```

Dynamic pages that use `getStaticPaths` **must** have `export const prerender = true` — required when `output: "server"`.

### Layout hierarchy

```
base-layout.astro        ← <html>, <head>, Toaster
  └── main-layout.astro  ← Header (desktop nav + mobile sheet + theme toggle) + Footer
        └── blog-post.astro  ← wraps slot with article chrome
```

All pages use `MainLayout`. Blog detail pages use `BlogPost` layout which wraps `MainLayout`.

### Content collections (`src/content/config.ts`)

- **`blog`** — `title`, `description`, `cover`, `category`, `pubDate`, `updatedDate?`
- **`work`** — `title`, `description`, `role`, `company`, `duration`, `team?`, `category`, `cover?`, `video?`, `tags[]`, `featured`, `outcome`, `protected`, `order?`, `pubDate`

Work items with `featured: true` appear as large cards on `/work`; others render as a compact list. `order` field controls sort.

### Astro 5 conventions — strictly required

- Use `post.id` not `post.slug` (deprecated in Astro 5)
- Use `import { render } from 'astro:content'; render(entry)` not `entry.render()`
- RSS `GET` export not `get`
- Vercel adapter: `import vercel from "@astrojs/vercel"` (not `/serverless`)
- MDX files: use `{/* */}` comments, not `<!-- -->` (HTML comments break MDX)
- Cover images: use plain `<img>` tag, not Astro `<Image>`, to avoid build crashes on missing files

### Config files

| File | Purpose |
|------|---------|
| `src/config/site.ts` | `siteConfig` — name, url, ogImage, social links |
| `src/config/nav-menu.ts` | `navMenuConfig` — pagesNav (Work), examplesNav (Blog), links (About) |
| `src/content/config.ts` | Zod schemas for `blog` and `work` collections |
| `db/config.ts` | Astro DB table: `WaitingList { id, email }` |
| `astro.config.mjs` | Integrations: MDX (shiki github-dark-dimmed), icon, sitemap, react, tailwind, db, simpleStackForm |

### UI components

shadcn/ui components live in `src/components/ui/`. Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional classes. Icons via `astro-icon` — icon sets loaded: `lucide`, `mdi`, `ri`.

### React islands

Interactive components (theme toggle, mobile nav sheet, toast) use `client:load` or `client:only="react"`. Keep React usage minimal — prefer `.astro` components for anything non-interactive.

### Path alias

`@/` maps to `src/` throughout.
