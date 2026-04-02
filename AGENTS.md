# AGENTS.md - Garden Sim Website

## Project Overview
Garden Sim website built with Next.js (App Router), TypeScript, and Tailwind CSS.

- Domain: https://garden-sim.com
- Deployment: Vercel
- Repo: Public GitHub
- Purpose: Present the game (with current focus on demo)
- Tone: Cozy, playful, personal indie-dev (made by a gardener, solo dev)

---

## Core Principles

- SEO-first implementation
- Production-grade structure (not a prototype)
- Static-first architecture (no database)
- Clean, modular components
- Mobile-first responsive design
- Soft, cozy visual design (avoid harsh whites)
- No dark mode (for now)
- Approved visible site copy is locked unless explicitly re-approved

---

## Copy Authority and Immutability (Required)

Site copy is immutable by default.

- Never modify, rewrite, rephrase, shorten, expand, or "improve" any existing visible site copy unless explicit copy approval is provided
- Metadata and documentation must be derived from current site copy; site copy is the source of truth
- When metadata/docs conflict with site copy, update metadata/docs to match site copy
- Existing alt text is part of locked copy and must not be rewritten
- Do not introduce new marketing claims, tone, or product messaging not already present in site copy

Canonical copy locations:

- `components/Hero.tsx`
- `app/page.tsx` (About the Game copy)
- `components/VisionSection.tsx`
- `components/Features.tsx`
- `components/StoreSection.tsx`
- `components/VideoSection.tsx`
- `components/Footer.tsx`
- `app/garden-journal/page.tsx`
- `content/journal.json`
- `app/how-to-play/page.tsx`
- `app/technicals/page.tsx`
- existing alt text in components and journal entries

If a task requests copy changes without explicit copy approval, do not edit copy and call this constraint out.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel deployment

---

## Project Structure

/app
  /page.tsx                # Home
  /garden-journal/page.tsx
  /how-to-play/page.tsx
  /technicals/page.tsx
/components
  Header.tsx
  Hero.tsx
  Features.tsx
  StoreSection.tsx
  VisionSection.tsx
  VideoSection.tsx
  JournalCard.tsx
  Footer.tsx
/lib
  journal.ts
  site.ts
/content
  journal.json
/public
  images/

/styles
  globals.css

---

## Pages

### Home (/)
- Hero (image + copy)
- About the Game
- The Vision for the Full Game
- Features
- Store
- Demo
- Footer

### Garden Journal (/garden-journal)
- JSON-driven feed
- Newest first
- Cards with:
  - title
  - image
  - description (expandable)
  - timestamp

### How to Play (/how-to-play)
- Placeholder page for now

### Technicals (/technicals)
- SDL3 game (no game engine used)
- C++20 and supporting library notes

---

## Header / Navigation

Desktop:
- Top-left nav:
  - Home
  - Garden Journal
  - Technicals
  - How to Play
- Top-right:
  - Ko-fi button
- Not sticky

Mobile:
- Collapsed nav
- Sticky header
- Ko-fi button always visible (top-right)

---

## Garden Journal Schema

```ts
type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  timestamp: string;
};
```

---

## SEO Requirements

- Metadata per page
- Open Graph tags
- Twitter/X cards
- Canonical URLs
- sitemap.xml
- robots.txt
- Semantic HTML

Use current site copy language in metadata and avoid introducing claims not present in copy.

Current copy-aligned phrases include:
- cozy gardening game
- indie garden simulator
- flowers and crops
- demo is coming soon
- garden morale
- bee keeping

---

## Design Guidelines

- Cozy, whimsical
- Rounded cards
- Soft shadows
- Warm color palette
- Hybrid typography
- Decorative plant elements (vines, leaves, flowers)

---

## Content Tone

- Personal
- Indie dev
- Honest and inviting
- Not overly salesy

---

## External Links (placeholders)

- Ko-fi: https://ko-fi.com/gardensim
- YouTube: REPLACE_ME_LATER
- itch.io: https://garden-sim.itch.io/garden-sim

---

## Notes

- Hero image path is configured in `lib/site.ts`
- Journal content is manually updated via JSON
- Keep everything easy to edit and extend
- Keep approved visible copy exactly as written unless a content pass approves changes

---

## comments (strict rules)

These rules are mandatory

1) never start comments with capital letters unless the comment starts with a class or variable that starts with a capital letter  
2) never put an emoji in a comment  
3) keep comments short and to the point; fragments are fine  
4) do not end comments with a period  
5) comments explain why, constraints, or non-obvious reasoning  
6) never narrate what the code already clearly expresses

---

End of AGENTS.md
