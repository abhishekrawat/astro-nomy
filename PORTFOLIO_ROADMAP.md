# rawat.dev — Portfolio Roadmap

**Goal:** Get hired as a Lead / Head of UX in healthcare technology or a senior leadership IC role.  
**Approach:** Daily 30–45 min sessions. Content before polish. Every item here is ranked by recruiter impact.

---

## Current state (as of 2026-07-19)

**Live and working:**
- Site design (refined monochrome, editorial typography, warm accent)
- Hero: leadership positioning, AI story, availability signal
- /work: Malaffi as the one live case study (body still ~38 TODOs)
- /about: Bio written (3 real paragraphs), Skills complete, AI story in, maker/skydiving para
- /404, footer clock, availability dot, grain texture

**Hidden until content is ready:**
- 3 case studies: appointment-booking, ar-furniture, adafsa (draft: true)
- Blog: all 5 posts (outline only), nav/RSS hidden
- About sections: Impact stats, Design philosophy, Testimonials

---

## Tier 1 — Do this first (unlocks everything)

### 1. Finish the Malaffi case study
**Why:** It's the only live proof-of-work. Every recruiter who visits will click it.  
**File:** `src/content/work/malaffi-health-portal.mdx`

The body has ~38 TODO markers. Work through them in this order:

**Session 1 — Outcomes & TL;DR (30 min)**
- Fill the 3-line TL;DR: Problem / Approach / Result — one sentence each, punchy
- Fill the Outcomes & Impact table with real numbers. Even rough ones: "reduced X from Y to Z" or "activation rate increased". If you don't have exact figures, use directional truth: "support escalations dropped significantly in Q1 2024"

**Session 2 — The Problem & Research (45 min)**
- What were patients struggling with? (Specific: login friction? confusing record layout? language switching?)
- Research methods you actually used (contextual inquiry, clinician interviews, usability sessions?)
- 2–3 key findings in plain language

**Session 3 — Design Process (45 min)**
- Exploration & ideation: what did you try that didn't work?
- Key iterations: one or two pivots with a reason
- The RTL/bilingual challenge deserves its own callout here — it's unique

**Session 4 — Key Design Decisions (30 min)**
- Pick 2 decisions you're most proud of. Format: Problem → Options considered → What you chose → Why
- These are what interviewers ask about. Write them as you'd say them in a room.

**Session 5 — Screenshots & Final Design (60 min)**
- Add 2–3 screenshots or wireframes inline. Even lo-fi mockup exports work.
- If you can't share real screens: annotated wireframes, or a "key flows" diagram
- The MDX slot is: `![Description](/images/work/malaffi-screenshot-1.jpg)`

**Session 6 — Reflection (20 min)**
- What would you do differently?
- One honest limitation of the final product

**Once done:** Fix the outcome frontmatter to include the real metric.

---

### 2. Add real About stats
**Why:** "8+ years · 3M+ users" in a stat card reads instantly to a recruiter.  
**File:** `src/pages/about.astro` — the leadership stats section is commented out, ready to restore.

Fill these 4 numbers then ping Claude to restore the section:
- Years in healthcare/product UX
- Approximate number of products shipped (include internal tools, apps, portals, systems)
- Approximate users impacted (Malaffi alone = 3M+)
- Designers/team members mentored or managed

---

### 3. Write one testimonial
**Why:** Social proof is the one thing a recruiter can't get from self-written copy.  
**Who to ask:** Your direct manager at Malaffi, a PM you worked closely with, or a designer you mentored. LinkedIn recommendations count — copy them here.  

A good testimonial is specific: names a project, names an outcome, names a behaviour.  
*"Abhishek rebuilt our documentation flow and cut time-per-case from 14 minutes to 6."* → strong  
*"Abhishek is a great designer and team player."* → useless  

**Once you have even one:** ping Claude to restore the Testimonials section.

---

## Tier 2 — Write the first two blog posts

Blog posts do two things case studies don't: they prove you think at the discipline level, and they get you found via search. Write these two first because they're directly on your domain and you have the raw material.

### Post 1 — Arabic RTL Design in Healthcare: Lessons from Malaffi
**File:** `src/content/blog/arabic-rtl-healthcare-design.md`  
**Why first:** You are one of a tiny number of designers globally who has done bilingual RTL design at health-system scale. This is a top-of-funnel SEO differentiator. Almost nobody has written about this specifically.

**Suggested sessions (2 × 45 min):**
- Session 1: Write the first 3 sections from the scaffold (Why RTL is hard / What bilingual really means / The Figma setup)
- Session 2: Write sections 4–5 (content terminology problem / three things I'd do differently)

**Target length:** 800–1200 words. Don't over-polish.

---

### Post 2 — Designing for Clinical Workflows Under Pressure
**File:** `src/content/blog/designing-for-clinical-workflows.md`  
**Why second:** Directly demonstrates clinical-domain depth. Healthcare JDs use "clinical workflows" constantly — this post ranks for it.

**Scaffold structure is already there — just write to it.**

---

### Remaining 3 posts (write later, in this order)
3. **design-system-for-hie** — AI Code Connect story fits perfectly here
4. **human-cost-of-bad-ux** — broadest appeal, use it as a LinkedIn share piece
5. **skydiving-and-ux** — most memorable, lowest priority for hiring but highest for personality signal

**When to re-enable the blog:** After 2 posts are written. One post = not enough. Two = a voice.

---

## Tier 3 — Restore/publish the 3 draft case studies

Order them by how much new content you need to write:

### ADAFSA Portal
- Fix the role (remove TODO placeholder)
- Fix the duration
- Write a 3-paragraph narrative: context → what you designed → what changed
- This doesn't need to be a deep case study — a summary project page is fine

### Appointment Booking
- Company is already correct (Malaffi)
- Add duration, team, outcome metric
- Write the problem + key design decision — the "frictionless booking" angle has a clear user story

### AR Furniture (Homecenter)
- Add your actual role title
- Add duration  
- The AR angle is visually interesting — one or two screenshots + a brief narrative makes it publishable

**To publish any of these:** Remove `draft: true` from its frontmatter. The page goes live immediately.

---

## Tier 4 — Design enhancements (do after content)

These are polish items. Don't do them before Tier 1–2 — a beautiful empty portfolio is worse than a slightly rough full one.

### High value
- **Custom OG image** — `public/og.jpg`. A single dark card with your name, title, and a photo or abstract mark. Every LinkedIn share uses this. Canva or Figma, 1200×630px.
- **Logo bar SVGs** — Replace the text names with actual brand SVGs for Malaffi, DoH, ADAFSA, Landmark. Visual credibility signal.
- **Case study inline screenshots** — Even 2 images per case study transforms the page. Dark-mode Figma export with a subtle phone/browser frame works.
- **A photo of yourself** — About page, small (48px circle) next to the contact CTA. Design is a human discipline; a face closes the loop.

### Medium value
- **"Lab" section** — Once you photograph a 3D print or gadget build. One image per project, minimal caption. `/lab` page or a section at the bottom of About.
- **Design philosophy** — 3 real principles, 1–2 sentences each. Not generic ("I'm user-centred") but specific to healthcare. Restore the hidden section.
- **Work index numbers** — Add order numbers (01, 02…) to the work cards for editorial polish. 

### Lower priority (nice to have)
- Case study password protection for sensitive work (the `protected` field is already in the schema, just needs implementation)
- Sitemap/SEO meta for individual case study pages
- Analytics (Vercel Analytics is one line — useful to know if recruiters are visiting)

---

## Suggested daily rhythm

**15–20 min days:**
- Write one section of a case study body or blog post
- Fill one TODO placeholder in about.astro

**30–45 min days:**
- Complete a full case study session (see Malaffi plan above)
- Write a full blog section (500–700 words)

**Weekend sessions (60–90 min):**
- Full blog post draft
- Screenshot pass on one case study
- Request a LinkedIn recommendation from a colleague

**With Claude:**
- Once you've drafted content, paste it here and ask to update the MDX
- Ask to restore hidden sections once stats/testimonials are ready
- Ask for copy review on any case study section before it goes live

---

## The honest unlock order

```
Malaffi case study (complete)
  → adds credibility to everything
    → About stats + 1 testimonial
      → Blog post 1 (RTL)
        → Blog post 2 (clinical workflows) → re-enable blog
          → ADAFSA / Appointment Booking → removed from "in progress" list
            → Lab section (with photos)
              → Password-protected AR Furniture
```

If you only do one thing: **finish the Malaffi case study body.** Everything else is packaging.

---

## What you'll have when this is done

A portfolio that demonstrates:
- **Domain depth** — HIE, clinical workflows, Arabic RTL, HIPAA, 3M+ users
- **Leadership** — team, mentoring, exec communication
- **AI** — Code Connect automation, RAG tooling, AI guild, prototyping
- **Thought leadership** — 2–5 published posts on healthcare UX topics nobody else has written
- **Personality** — maker, skydiver, systems thinker

That combination exists in approximately zero other candidates for any given role.
