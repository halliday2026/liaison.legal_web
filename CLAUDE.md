# liaison.legal_web — Project Context

## What This Is
The public-facing marketing site for Liaison.legal at liaison.legal. Built with Astro.
Separate repo from the Next.js app at app.liaison.legal.

## Stack
- Astro 4+ with static output mode
- Tailwind CSS with custom design tokens
- Formspree for demo request form submissions
- Deployed to GitHub Pages via Actions

## Key Constraint
This is a marketing site. It has no auth, no database, and no shared state with the app.
Everything is static — there is no server-side code in this repo.

## Design Tokens
src/styles/tokens.css is the single source of truth for the brand. All colors, fonts, spacing,
and radius values are defined there. Tailwind config extends these same values.
Never hardcode color hex values outside of tokens.css.

## Pages
- / (index.astro) — Parent-facing homepage
- /firms (firms.astro) — Attorney-facing page

## Cross-Domain Link
All signup CTAs point to https://app.liaison.legal/signup — this is an external link.
No shared session, cookie, or auth logic exists in this repo.

## Form
The demo request form on /firms is a standard HTML form POSTing to Formspree.
Replace FORMSPREE_ID in src/components/firms/DemoForm.astro with your actual Formspree form ID.

## Commands
- npm run dev — start dev server
- npm run build — production build
- npm run preview — preview production build locally
