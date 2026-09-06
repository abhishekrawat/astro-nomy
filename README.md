# Abhishek Rawat — Portfolio

Healthcare product design, AI-assisted delivery and independent builds. Built with Astro, MDX and Tailwind, with native browser interactions and a single self-hosted sans-serif family.

## Development

Requires Node 22.12 or newer. Install with `pnpm install --frozen-lockfile`, then run `npm run dev`.

- `npm run build` generates the static site in `dist/`.
- `npm test` checks the built routes, links, fragment targets, assets, metadata and editorial publication boundaries.
- `npm run preview` serves the production build locally.
- `node scripts/generate-social-card.mjs` regenerates the social JPEG from its editable SVG source.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for replacing sample narratives, illustrations and the portrait, promoting content for indexing, and enabling optional analytics.

## Current scope

Home, Work, Builds, Writing and About; four reviewable case studies; three sample essays; a bilingual interface demonstration; responsive project images; accessible navigation and light/dark themes.

Sample case studies and essays are labeled and excluded from search indexing, sitemap and RSS until approved. No measured product outcomes or testimonials have been invented. Real project photos, final evidence, a portrait and reviewed content are still needed before promotion.

The site builds without Astro Studio or a database connection. Legacy starter dependencies and unused components remain available; they are not required by the portfolio routes. CI now builds and checks the static site instead of synchronizing an Astro Studio database.

## Credits

Originally based on the Astronomy starter by Mickaël, itself inspired by shadcn’s Taxonomy. The original MIT license is retained in [LICENCE.md](LICENCE.md).
