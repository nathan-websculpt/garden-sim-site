# Site Content Notes

## Copy Lock Policy

Current visible website copy is the approved baseline and is intentionally locked.

- keep existing visible copy exactly as written unless a future copy approval explicitly says otherwise
- do not polish, shorten, or rephrase locked text
- preserve the personal, cozy, gardener-made solo-dev voice
- metadata and docs must conform to site copy, not the reverse

## Canonical Copy Sources

- `components/Hero.tsx`
- `app/page.tsx` (About the Game copy)
- `components/VisionSection.tsx`
- `components/Features.tsx`
- `components/StoreSection.tsx`
- `components/VideoSection.tsx`
- `app/garden-journal/page.tsx`
- `content/journal.json`
- `app/how-to-play/page.tsx`
- `app/technicals/page.tsx`
- existing alt text in components and journal entries

## Messaging Snapshot (Current Copy)

- "A cozy gardening game that was made by a gardener"
- "Demo is coming soon - an early look at one map and the overall direction of the game."
- "Garden Sim is an indie garden simulator that I am building solo."
- "The Vision for the Full Game"
- "Here is a video of the gameplay."

## Placeholder Guidance

Placeholder external links remain in `lib/site.ts`:

- `siteConfig.links.kofi`
- `siteConfig.links.youtubeTrailer`
- `siteConfig.links.youtubeEmbed`
- `siteConfig.links.youtubeChannel`
- `siteConfig.links.itch`

Replace only link targets while preserving established copy tone around them.
