# liaison.legal_web — Project Context

## What This Is
The public-facing marketing site for Liaison.legal at liaison.legal. Built with Astro.
Separate repo from the Next.js app at app.liaison.legal.

## Stack
- Astro 4+ with static output mode
- Tailwind CSS with custom design tokens
- Formspree for firm waitlist form submissions (replace FORMSPREE_ID in src/pages/firms.astro)
- Deployed to GitHub Pages via Actions

## Key Constraint
This is a marketing site. It has no auth, no database, and no shared state with the app.
Everything is static — there is no server-side code in this repo.

## Design Tokens
src/styles/tokens.css is the single source of truth for the brand. All colors, fonts, spacing,
and radius values are defined there. Tailwind config extends these same values.
Never hardcode color hex values outside of tokens.css.

**Palette:** navy `#013B84` · azure `#0384DA` · sky `#5ABBFC` · slate `#2D3748` · grays
**Fonts:** Playfair Display (headings) · DM Sans (body) · Poppins Medium (wordmark)

## Pages (9 routes)
- / (index.astro) — Parent-facing homepage
- /how-it-works — 4-step walkthrough
- /free — The Free Promise
- /security — Security & Privacy
- /faq — 11 Q&As (FAQPage JSON-LD)
- /firms — Attorney-facing page with Formspree waitlist form
- /resources/free-co-parenting-communication-records — AEO anchor page (Article JSON-LD)
- /privacy — Placeholder, noindex (real content TBD)
- /terms — Placeholder, noindex (real content TBD)

## Cross-Domain Link
All parent signup CTAs point to https://app.liaison.legal/signup — this is an external link.
No shared session, cookie, or auth logic exists in this repo.

## Form
The firm waitlist form on /firms uses Formspree.
Replace FORMSPREE_ID in src/pages/firms.astro with your actual Formspree form ID.

## Claims Rules (BINDING)
The copy deck at docs/Liaison_Website_Copy_Deck.md is the authoritative content contract.
These claims must NEVER appear in any copy, alt text, meta tags, or JSON-LD:
- Bare "court-admissible" — use "built for court" or "ready for your attorney and the court"
- "Immutable" in parent-facing copy — use "tamper-evident"
- "Zero-knowledge" — use accurate encryption + access-control language
- "No one can read your messages" / "not even we can read" — removed entirely
- No fabricated social proof (testimonials, user counts, ratings, press logos)

## Open Items (not blocking)
- og-default.png — needs 1200×630 raster PNG (logo on navy #013B84 background)
- favicon.ico + apple-touch icon — raster derivatives of public/logo.svg
- Formspree form ID for /firms waitlist
- Real Privacy Policy and Terms of Service content
- Social profile URLs for Organization sameAs in BaseLayout.astro

## Branch
Active development on `redesign/soft-launch`. Do not merge to `main` until reviewed.

## Commands
- npm run dev — start dev server
- npm run build — production build
- npm run preview — preview production build locally
