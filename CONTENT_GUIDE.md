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
| Visual-story layouts, media stages and motion | `src/styles/storytelling.css` |
| Reusable case-study media blocks | `src/components/story/` |
| Preview playback policy | `src/scripts/story-motion.ts` |
| Generated workbench source and provenance | `src/assets/workbench-concept.png`, `STORYTELLING_ASSETS.md` |

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

The Malaffi preview uses the existing optimized interface artwork. Visual inspection on 2026-09-08 found that `malaffi-preview.mp4` is a cartoon demo; it is retained on disk but excluded from preview playback and the case-study film link. Supply an approved product recording and remove the explicit placeholder guard in `video-preview.astro` and the case-study page to enable it. Other videos retain `preload="none"`, a single visible playing preview, explicit play/pause controls, offscreen pausing, and reduced-motion/save-data support. Without JavaScript, videos retain native controls.

The homepage hero uses a 1.2-second coordinated text, path and card entrance, followed by event-driven pointer depth on desktop. Reduced motion disables the entrance and depth. Native page transitions keep the header stable and connect visible matching project previews where supported; other browsers use normal navigation. No additional animation dependency is required.

`workflow-preview.astro` is an editable HTML/CSS demonstration, not a real internal-tool recording. Its three stages stay readable without animation. Reduced-motion visitors see it statically, without a nonfunctional animation button.

The new workbench image is AI-generated and labeled wherever it appears. Its source stays in `src/assets/`; Astro generates 480, 800 and 1200 px WebP variants (approximately 18, 53 and 122KB). It is not evidence of actual project hardware. Replace it through `workbench-photo.astro`, update the alt text and visible captions, and retain the original provenance record.

### Compose a visual case study

Each `##` MDX heading becomes a numbered chapter in the sticky navigation. Keep headings short, human and specific to the project. Paragraphs use a narrow reading measure, while media blocks can use the full page width.

```mdx
import StoryMedia from "@/components/story/story-media.astro";
import ProjectVisual from "@/components/project-visual.astro";

## The decision that changed the direction

A short explanation of the problem, the choice and the tradeoff.

<StoryMedia tone="sage" caption="Describe the artifact, its source and whether it is illustrative.">
  <ProjectVisual variant="health" />
</StoryMedia>
```

Available tones are `paper`, `sage`, `lavender` and `ink`. Use `DecisionComparison` for the current healthcare alternatives or bus-data states; these are explicitly fictional studies, not shipped comparisons. `BilingualDemo` provides the interactive English/Arabic example. For photographs, import through `astro:assets` and include meaningful alt text. For a new film, use `VideoPreview` with `src`, `label`, and an explicit `poster`; its default poster belongs to Malaffi.

Use a caption to distinguish actual evidence, illustrative content, and an artifact awaiting replacement. Keep publication reminders in the closing disclosure. Never turn a proposed decision or a generated visual into an apparent historical result by removing only its label.

Edit `public/og-portfolio.svg`, then run `node scripts/generate-social-card.mjs` to regenerate the social preview JPEG.

## Visibility and measurement

Titles, canonical URLs, social previews, sitemap and robots.txt are implemented. Pages render statically, and core content/navigation work without JavaScript. The language switch and theme control progressively enhance that content.

Analytics is off by default. To use it on Vercel, enable Web Analytics for the project, set `PUBLIC_ENABLE_ANALYTICS=true`, and rebuild. `PUBLIC_ANALYTICS_SCRIPT_SRC` can override the script path with the path provided by the Vercel dashboard. Event hooks record contact clicks, résumé clicks, case-study opens and reaching the end of a case study. Reaching the end is an engagement proxy, not proof of reading. Custom-event availability depends on the Vercel plan. No dashboard reporting or production event delivery has been verified here.

After launch, submit the sitemap to Search Console. Share individual project decisions and demonstrations on LinkedIn, linking to their story. Track qualified enquiries separately from clicks.

## Validate and publish

Run `npm run build`, `npm test` and `git diff --check` with Node 22.13 or later (CI uses Node 22). The tests check static routes, assets, anchors, editorial flags, media fallbacks and the preview controller, including offscreen/background pausing, reduced motion, save-data and blocked autoplay. These simulated controller tests do not replace real-browser playback and accessibility checks.

Before publishing, inspect desktop/mobile layouts, both themes, keyboard navigation, language switching and video controls. Include iOS/Safari autoplay restrictions, reduced motion and a slow connection. Confirm the chapter navigation does not obscure headings and all replacement films have an accessible description or captions as appropriate.

Deploy the `dist/` directory as a static Astro site using `npm run build`. The project no longer requires Astro DB, a server adapter or a Studio token to build. Existing legacy dependencies and unused starter components remain to avoid an unrelated dependency migration.

No deployment was made during this change. The live domain was previously serving a different landing page; verify the Vercel project/domain mapping before publishing this version.
