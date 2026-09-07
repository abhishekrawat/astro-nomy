# Portfolio evaluation

Evaluated: 6 September 2026  
Saved: 7 September 2026  
Perspective: advanced frontend development, UI design and positioning for healthcare product design leadership roles.

> This report records the evaluation **before the portfolio redesign**. Findings describe the version reviewed at that time, not the current implementation. The subsequent redesign was committed as `432d0dc` on `portfolio/healthcare-ai-redesign`; it also incorporates the later preference for simpler, sans-serif typography inspired by Medium. See `CONTENT_GUIDE.md` for content replacement and publication instructions.

## Objective and overall assessment

The portfolio should establish Abhishek Rawat as a healthcare product design leader who uses AI to improve delivery, increase professional visibility, generate relevant job enquiries, and showcase selected work.

Your experience is more distinctive than the website currently communicates. The newer portfolio has a credible visual foundation, but it does not yet provide enough evidence to position you as a leading healthcare product designer who improves delivery through AI.

The evaluation included source inspection, a successful local production build, and browser inspection of desktop, mobile, navigation and both themes. No source files were changed during the evaluation. Production Core Web Vitals and a formal accessibility audit were not completed.

At the time of review, `https://rawat.dev` displayed the older “I design delightful Apps” landing page. The fuller healthcare portfolio existed locally. Visitors to the domain were therefore seeing a weaker presentation than the project reviewed here. This was a point-in-time observation, not a statement about the domain’s current deployment.

## Assessment of the newer local version

These scores are subjective design judgments, not measured performance results.

| Area | Assessment |
| --- | --- |
| Visual polish | **7/10:** restrained, coherent and professional |
| Creativity and memorability | **5/10:** tasteful, but visually familiar |
| Healthcare positioning | **7/10:** clear specialism and relevant context |
| Leadership evidence | **3/10:** asserted more than demonstrated |
| AI differentiation | **3/10:** promising examples buried on About |
| Readiness for job enquiries | **4/10:** incomplete case study and a weak journey to contact |

## 1. Strengthen the proof behind the positioning

The Malaffi case study was the only published case-study route, but its problem, research, decisions, final designs and outcomes still contained TODOs. This was the highest-priority issue before publishing the newer site.

For a lead role, the portfolio should establish:

- What difficult problem you chose to solve and why.
- What you personally owned, delegated and influenced.
- A consequential design decision, the alternatives and your reasoning.
- How you aligned clinical, product and engineering stakeholders.
- What changed after delivery, and what evidence supports that conclusion.

Build the story around two or three consequential decisions, with annotated screens. A sequence of “Research → Process → Final Design” needs those specifics to become persuasive.

NN/g’s recruiter interview emphasizes addressing the hiring team’s problems and making your relevance understandable to reviewers who may not be designers: [UX Hiring: Insights from a Design Recruiter](https://www.nngroup.com/articles/ux-hiring-insights/).

### Clarify the 3M+ claim

The case-study description referred to residents served by the health ecosystem, while the headline said “used by 3M+ people.” The headline implies actual product usage. Those are different claims.

Use the wording your evidence supports. Distinguish population reach, actual usage and an outcome attributable to your design.

## 2. Keep the restraint, but add your fingerprint

The warm background, ink typography, italic emphasis, restrained orange accent and quiet motion worked well together. The site felt appropriate for healthcare leadership.

However, large typography, pill buttons, muted cards and an availability dot are familiar portfolio conventions. Your originality should come through your work and its presentation.

Recommended changes:

- Bring a meaningful product visual into the first desktop viewport. At 1440 × 1000, the introduction and organisation strip consumed almost the whole screen.
- Show larger interface details with short annotations explaining decisions. Three phone mockups communicate that a product exists, but their details were too small to evaluate on mobile.
- Introduce one distinctive interactive demonstration: an English/Arabic interface comparison, a clinical information hierarchy, or a design-system component connected to its implementation.
- Add authentic photography of you and your prototypes on About.
- Increase the contrast of organisation names and small labels. Their faintness weakened readability and credibility.

A thoughtful bilingual interaction would communicate more about your expertise than additional decorative animation.

**Subsequent direction:** The later instruction to simplify typography takes precedence over the original appreciation of italic accents. Use a restrained sans-serif system; serif is optional only for long case studies and articles.

## 3. Demonstrate AI as a leadership capability

The About page already named useful material: Code Connect, a RAG knowledge repository and content pipelines. One of these deserves a featured case study.

Suggested positioning:

> I help healthcare teams turn complex problems into clear products—and use AI to shorten the path from design decisions to working software.

Then demonstrate the mechanism:

| Show | What it establishes |
| --- | --- |
| The original delivery bottleneck | You understood the operational problem |
| The workflow you introduced | You can improve how teams work |
| A working artifact or short demonstration | The claim has substance |
| Your review and validation steps | You retain judgment and accountability |
| Observed time, rework or adoption changes | The improvement has evidence |

Measure comparable tasks, including review and correction time. Where measurements do not exist, describe the observed improvement without inventing percentages.

Explain your contribution precisely: what you designed, what AI helped produce, what you rejected and how you verified the result. That presents you as someone who directs delivery effectively.

## 4. Include the altimeter and BusTracker

These projects can make you unusually memorable because they demonstrate initiative, physical interaction design, implementation and persistence beyond screen mockups.

Place them in a secondary **Independent builds** section, following the healthcare and AI work.

| Project | Strongest portfolio story | Recommended prominence |
| --- | --- | --- |
| Altimeter | Information under pressure, restrained interaction, hardware/software integration and validation | A substantial independent case study |
| BusTracker | Glanceable information, everyday usefulness, unreliable connectivity and physical interface craft | A compact story with a short device video |

The earlier project notes informed this recommendation; the evaluation did not include a fresh hardware review. Their implementation and validation status may have changed.

The altimeter’s “Altitude, not instructions” principle is especially strong material. Explain how that principle shaped what the product communicates. Clearly label the current prototype and validation status.

For BusTracker, lead with the everyday problem and show the actual device in use. Architecture and implementation details can follow.

Your contribution remains valuable when AI helped with implementation. Explain the collaboration candidly and show the decisions, constraints, testing and iteration you owned.

## 5. Restructure the homepage around a persuasive sequence

1. Clear healthcare leadership proposition, with **View selected work** and **Contact me**.
2. Flagship healthcare case study with a concise outcome and your scope.
3. AI delivery case study showing a working improvement.
4. Leadership evidence: team scope, cross-functional influence and attributable testimonials.
5. Independent builds: altimeter and BusTracker.
6. A clear invitation to discuss lead roles, with email, résumé and LinkedIn.

The primary button sent visitors straight to LinkedIn before they inspected your work. Keep LinkedIn available, but make the portfolio itself do the persuasion.

## 6. Frontend priorities

The following findings describe the pre-redesign implementation.

| Finding | Recommended action |
| --- | --- |
| Visible `by3M+` spacing in the hero | Fix the text boundary and review responsive wrapping |
| Roughly 1.3 MB Malaffi cover | Optimize the image and provide responsive sizes |
| Scroll-reveal elements depended on JavaScript to become visible | Make content visible by default and progressively enhance motion |
| Video previews hid the poster before playback succeeded | Retain a reliable poster until playback is ready |
| Video preview interaction used mouse hover only and did not check reduced-motion preferences | Provide accessible controls and respect motion preferences |
| Mobile navigation omitted the Work index | Include the index in the mobile navigation |
| Missing mobile dialog label and skip link | Improve navigation semantics and keyboard access |
| Google-hosted Inter import alongside an unused local Inter preload | Consolidate font loading |
| Server rendering and database infrastructure exceeded visible portfolio needs | Consider static rendering for the content pages |

The local build passed. That did not establish production performance, complete accessibility conformance or field usage behavior.

## 7. Visibility and enquiry measurement

Fix the duplicated homepage title and make it specific. Suggested title:

> Abhishek Rawat | Healthcare Product Design Lead

Descriptive, concise titles follow [Google’s guidance on title links](https://developers.google.com/search/docs/appearance/title-link).

Publish a small number of substantive articles drawn from actual work:

- Bilingual healthcare interfaces.
- Connecting design systems to code.
- Lessons from building the altimeter.

Share individual decisions and demonstrations on LinkedIn, linking to the relevant case study. Track case-study engagement, résumé/contact clicks and qualified enquiries. Clicks and reading proxies should not be treated as job offers or proven hiring impact.

## Recommended implementation order

1. Finish Malaffi with real decisions, artifacts and evidence.
2. Publish an AI delivery case study.
3. Improve the homepage journey.
4. Add the altimeter, followed by the compact BusTracker story.
5. Expand writing and distribution.

The central recommendation is to give the visual presentation the evidence it needs. A more memorable portfolio comes from specific judgment, credible outcomes and tangible work—not additional decoration alone.
