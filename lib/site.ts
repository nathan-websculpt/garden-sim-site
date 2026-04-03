export const siteConfig = {
  name: "Garden Sim",
  domain: "garden-sim.com",
  url: "https://garden-sim.com",
  description:
    "A cozy gardening game that was made by a gardener. Demo is coming soon - an early look at one map and the overall direction of the game.",
  keywords: [
    "cozy gardening game",
    "indie garden simulator",
    "flowers and crops",
    "garden morale",
    "beekeeping",
    "demo is coming soon",
  ],
  heroImage: "/images/home-hero.png",
  ogImage: "/images/og-cover.svg",
  links: {
    kofi: "https://ko-fi.com/gardensim",
    youtubeTrailer: "https://www.youtube.com/watch?v=NMSl7ALI3FU",
    youtubeEmbed: "https://www.youtube.com/embed/NMSl7ALI3FU?si=-SpbU-qk5fk22CHl",
    youtubeChannel: "https://www.youtube.com/@garden-sim",
    itch: "https://garden-sim.itch.io/garden-sim",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/garden-journal", label: "Garden Journal" },
  { href: "/technicals", label: "Technicals" },
  { href: "/how-to-play", label: "How to Play" },
] as const;
