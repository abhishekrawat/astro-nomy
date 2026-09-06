# Editing the portfolio

The site is a working portfolio with clearly labeled editorial samples. It is not yet a verified record of every decision or outcome. The original Malaffi overview has been retained.

## Where to edit

| Content | Location |
| --- | --- |
| Hero and positioning | `src/components/sections/hero-landing.astro` |
| Email, navigation and approved testimonials | `src/config/portfolio.ts` |
| Social links, résumé and site description | `src/config/site.ts` |
| Healthcare and AI stories | `src/content/work/malaffi-health-portal.mdx`, `ai-design-delivery.mdx` |
| Independent projects | `src/content/work/altimeter.mdx`, `bus-tracker.mdx` |
| Writing | `src/content/blog/` |
| About and portrait placeholder | `src/pages/about.astro` |
| Case-study layout and contents navigation | `src/pages/work/[...slug].astro` |
| Product illustrations and cover image | `src/components/project-visual.astro` |
| Shared sans-serif typography scale | `src/styles/typography.css` |
| Layout, colors and device illustrations | `src/styles/portfolio.css` |

## Publication states

- `draft: true`: no detail route is generated. Existing draft work can appear as a non-linked experience summary. Blog drafts are omitted entirely.
- `editorial: true`: a reviewable page with a visible sample notice and `noindex, follow`. It is excluded from the sitemap and RSS feed.
- Set `draft: false` and `editorial: false` after replacing or approving the sample narrative. The page then becomes eligible for the sitemap; approved articles also enter RSS.
- `protected: true` prevents work detail generation. It is not password protection. Do not put confidential content in a public repository.

Use the unquoted YAML booleans shown above. The sitemap filter reads editorial flags at build time. Keep source content directly within the collection folder.

## Replace the samples

1. Replace the editorial decision narratives with what actually happened. Add your specific role, collaborators, tradeoffs and artifacts.
2. Use outcomes with an evidence source, timeframe and scope. Population coverage is not active usage, and project scale is not a design impact metric.
3. The AI story needs a real component mapping, workflow demonstration and delivery evidence. Include review and correction time in efficiency comparisons.
4. Replace the altimeter and BusTracker concept illustrations with real photographs or recorded bench demonstrations. State the current validation level. Do not infer flight readiness from a compiled build.
5. Replace the About monogram placeholder with an authentic portrait. Add approved testimonials to the array in `portfolio.ts`; the section is hidden while empty.
6. Review the three sample essays before presenting them as personal writing. Have a native Arabic speaker review the bilingual demo copy before product reuse.
7. Remove evidence prompts and sample-specific paragraphs, then switch off `editorial` and rebuild.

## Images and video

The existing Malaffi cover is imported through Astro’s image pipeline. It produces 480, 800 and 1200 px WebP variants. Keep real source images; let the build generate delivery formats.

The three new project visuals are editable HTML/CSS illustrations, not stock photos. The labels explicitly identify them. Update `project-visual.astro` to use real project media when ready.

The existing silent Malaffi video uses an explicit expandable player with browser controls. It does not autoplay or depend on hover. Use descriptive fallback copy for any replacement video.

Edit `public/og-portfolio.svg`, then run `node scripts/generate-social-card.mjs` to regenerate the social preview JPEG.

## Visibility and measurement

Titles, canonical URLs, social previews, sitemap and robots.txt are implemented. Pages render statically, and core content/navigation work without JavaScript. The language switch and theme control progressively enhance that content.

Analytics is off by default. To use it on Vercel, enable Web Analytics for the project, set `PUBLIC_ENABLE_ANALYTICS=true`, and rebuild. `PUBLIC_ANALYTICS_SCRIPT_SRC` can override the script path with the path provided by the Vercel dashboard. Event hooks record contact clicks, résumé clicks, case-study opens and reaching the end of a case study. Reaching the end is an engagement proxy, not proof of reading. Custom-event availability depends on the Vercel plan. No dashboard reporting or production event delivery has been verified here.

After launch, submit the sitemap to Search Console. Share individual project decisions and demonstrations on LinkedIn, linking to their story. Track qualified enquiries separately from clicks.

## Validate and publish

Run `npm run build`, `npm test` and `git diff --check`. Inspect desktop/mobile layouts, both themes, keyboard navigation, language switching and video controls.

Deploy the `dist/` directory as a static Astro site using `npm run build`. The project no longer requires Astro DB, a server adapter or a Studio token to build. Existing legacy dependencies and unused starter components remain to avoid an unrelated dependency migration.

No deployment was made during this change. The live domain was previously serving a different landing page; verify the Vercel project/domain mapping before publishing this version.
