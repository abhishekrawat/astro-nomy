# Storytelling assets and handoff

## Direction

Inspired by the pacing and artifact-led stories at https://www.abhaysingh.in/, particularly its Appsmith and March cases. No source code, photographs, video or written case-study passages were copied from that website.

The existing Astro architecture, self-hosted Inter typography, editorial publication controls and static hosting configuration are preserved. No animation library, hosted video service or new dependency was added. The Sites hosting flow was inspected but is not used: this is an existing static Astro/Vercel portfolio without Sites metadata or Worker output. Migrating its hosting would be a separate change.

## Existing project media

- `public/videos/work/malaffi-preview.mp4`: existing silent walkthrough, approximately 788KB. Reused in previews and as a directly accessible full film.
- `public/images/work/malaffi-cover.jpg`: existing three-screen image. Delivered through Astro as responsive WebP images and the film poster.
- `src/components/project-visual.astro`: existing editable illustrative AI and device compositions.

## Generated workbench concept

Final saved source: `src/assets/workbench-concept.png`.

Generated with the built-in image-generation tool on 2026-09-07, using the imagegen skill. This is a photographic-style concept, not a photograph of Abhishek’s desk, the current hardware, a verified circuit, or a real enclosure iteration. All placements carry a visible AI-generated/concept caption and descriptive alt text. Inspect the real replacement photographs for confidential information before publishing.

Full generation prompt:

> Use case: photorealistic-natural. Asset type: editorial workbench concept image for a product designer's independent hardware build journal; will be visibly labeled AI-generated concept, not actual project documentation. Primary request: a quietly engaging overhead photograph-style view of an electronics prototyping desk. Warm off-white wooden surface, a small open graphite rectangular device enclosure with an unlit rectangular display module, a separate round black display module with screen off, two small generic circuit boards, restrained jumper wires, a tiny screwdriver, a notebook with simple unlabeled pencil enclosure sketches. Natural afternoon side light, honest imperfect desk textures, muted sage and warm grey, photographic detail, no dramatic neon, no sci-fi. Wide landscape composition about 3:2, objects comfortably spaced and fully visible, editorial still life. No people, no hands, no logos, no readable text, no numbers, no interface graphics, no watermarks. This is a conceptual placeholder, do not imply any real specific hardware architecture.

The original generated source is retained outside the project in the image-generation output folder; the site depends only on the project-local copy. Astro emits responsive WebP derivatives. See `workbench-photo.astro` for delivery sizes.

## Story replacement checklist

- Malaffi: approved comparison screens, a real research observation, bilingual decision evidence, leadership contribution and outcome source. Original project overview retained.
- AI delivery: actual component mapping, reviewed implementation recording, a team-enablement example, and a baseline that includes review/correction effort.
- Altimeter: real bench photos and recording, companion screen, enclosure iteration and explicit validation limits. Preserve the numeric information positioning; do not imply flight readiness.
- BusTracker: real desk photograph, next/following departure demonstration, actual freshness/error states and a reflection from use.

## Verification for this update

Production build, 14 automated tests and whitespace checks passed. Tests cover route/asset integrity, chapter anchors, sample indexing exclusions, media fallback markup, image payload budgets and playback-controller policy in a simulated DOM.

The local homepage was opened successfully. A full visual/interaction browser audit, real iOS/Safari playback, assistive-technology checks and field performance measurements are still needed before publication. Nothing was deployed or pushed as part of this update.
