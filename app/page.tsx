import type { Metadata } from "next";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Garden Sim, a cozy pixel-art gardening game and solo-dev project focused on flowers, crops, and a peaceful tending loop in the public demo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Garden Sim | Cozy Gardening Demo",
    description:
      "A cozy pixel-art gardening game made by a gardener, with flowers, crops, and a calm tending loop. Follow development and try the early demo.",
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
    title: "Garden Sim | Cozy Gardening Demo",
    description:
      "A cozy pixel-art gardening game made by a gardener. Follow the demo and support solo development.",
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
            <h2 id="about-game" className="text-2xl sm:text-3xl">
              About the Game
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#60705f] sm:text-lg">
              Garden Sim is an indie gardening game I am building solo.
              I started this project from my love of growing things, and I
              want each patch of land to feel welcoming, calm, and alive with
              flowers as much as food.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#60705f] sm:text-lg">
              The current public demo is an early look at one map and the overall direction. 
              If you enjoy what is here, your support helps me continue the development.
            </p>
          </div>
        </div>
      </section>
      <Features />
      <VideoSection />
    </>
  );
}
