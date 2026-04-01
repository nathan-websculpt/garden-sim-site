import type { Metadata } from "next";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import VisionSection from "@/components/VisionSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cozy Gardening Demo",
  description:
    "Garden Sim is an indie gardening game I am building solo. The public demo is an early look at flowers, crops, and a peaceful tending loop.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Garden Sim | Cozy Pixel-Art Gardening Demo",
    description:
      "A cozy pixel-art gardening game made by a gardener. Explore the early demo and follow the long-term vision for a fuller world of flowers and crops.",
    url: "/",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Garden Sim garden scene with flowers and crops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Sim | Cozy Pixel-Art Gardening Demo",
    description:
      "A gardener-made, solo-dev cozy pixel-art gardening game. Try the early demo and follow development.",
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section aria-labelledby="about-game" className="pb-10 sm:pb-14">
        <div className="garden-container">
          <div className="section-shell relative overflow-hidden">
            <div className="pointer-events-none absolute -right-12 top-6 h-28 w-28 rounded-full bg-[#cfe3ef]/55 blur-2xl" />
            <div className="pointer-events-none absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-[#91ab89]/40 blur-2xl" />
            <div className="home-copy-stack">
              <h2 id="about-game" className="text-2xl sm:text-3xl">
                About the Game
              </h2>
              <div className="home-paragraph-stack max-w-3xl text-base leading-8 text-[#60705f] sm:text-lg">
                <p>
                  Garden Sim is an indie gardening game that I am building solo.
                  I started this project from my love for growing things, and I
                  want each patch of land to feel welcoming and alive with
                  flowers as much as food. 
                </p>
                <p>
                  That's why growing flowers in Garden Sim gives the garden a real boost. 
                  Just like in the real world &mdash; where flowers bring pollinators and crop-health, 
                  flowers are the only way to truly progress in Garden Sim.
                </p>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisionSection />
      <Features />
      <VideoSection />
    </>
  );
}
