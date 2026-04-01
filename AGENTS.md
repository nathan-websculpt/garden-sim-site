# AGENTS.md — Garden Sim Website

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
/components
  Header.tsx
  Hero.tsx
  Features.tsx
  VideoSection.tsx
  JournalCard.tsx
/lib
  journal.ts
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
- About
- The Vision for the Full Game (long-term direction beyond demo)
- Features
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

---

## Header / Navigation

Desktop:
- Top-left nav:
  - Home
  - Garden Journal
  - How to Play
- Top-right:
  - Ko-fi button
- NOT sticky

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

Target phrases:
- garden simulation game
- cozy gardening game
- pixel-art gardening game
- indie gardening game

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

- Ko-fi: REPLACE_ME_LATER
- YouTube: REPLACE_ME_LATER
- itch.io: https://garden-sim.itch.io/garden-sim

---

## Notes

- Hero image is provided externally and must be inserted manually
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
