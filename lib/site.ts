export const siteConfig = {
  name: "Garden Sim",
  domain: "garden-sim.com",
  url: "https://garden-sim.com",
  description:
    "Garden Sim is a cozy pixel-art gardening game made by a gardener and built solo. Grow flowers and crops in the public demo, then follow development as the game grows toward a fuller garden life.",
  keywords: [
    "garden simulation game",
    "cozy gardening game",
    "pixel-art gardening game",
    "indie gardening game",
    "solo-dev gardening game",
    "flowers and crops game",
    "gardening demo game",
  ],
  heroImage: "/images/home-hero.png",
  ogImage: "/images/og-cover.svg",
  links: {
    kofi: "https://ko-fi.com/REPLACE_ME_LATER",
    youtubeTrailer: "https://www.youtube.com/watch?v=REPLACE_ME_LATER",
    youtubeEmbed: "https://www.youtube.com/embed/REPLACE_ME_LATER",
    youtubeChannel: "https://www.youtube.com/@REPLACE_ME_LATER",
    itch: "https://REPLACE_ME_LATER.itch.io/garden-sim",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/garden-journal", label: "Garden Journal" },
  { href: "/technicals", label: "Technicals" },
  { href: "/how-to-play", label: "How to Play" },
] as const;
