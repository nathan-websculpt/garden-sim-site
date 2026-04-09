import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SectionFrame from "@/components/SectionFrame";
import StoreSection from "@/components/StoreSection";
import VideoSection from "@/components/VideoSection";
import VisionSection from "@/components/VisionSection";
import { buildPageMetadata } from "@/lib/metadata";

const homeMetadataDescription =
  "Garden Sim is an indie garden simulator that I am building solo. Demo is now live - an early look at one map and the overall direction of the game.";

export const metadata = buildPageMetadata({
  title: "A cozy gardening game that was made by a gardener",
  description: homeMetadataDescription,
  canonicalPath: "/",
  ogImageAlt: "Garden Sim hero artwork with a cozy pixel-art garden scene",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionFrame
        aria-labelledby="about-game"
        spacing="home"
        shellClassName="relative overflow-hidden"
      >
        <div className="pointer-events-none absolute -right-12 top-6 h-28 w-28 rounded-full bg-[#cfe3ef]/55 blur-2xl" />
        <div className="pointer-events-none absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-[#91ab89]/40 blur-2xl" />
        <div className="space-y-4 sm:space-y-[1.125rem]">
          <h2 id="about-game" className="text-2xl sm:text-3xl">
            About the Game
          </h2>
          <div className="max-w-3xl space-y-2.5 text-base leading-8 text-[var(--text-muted)] sm:space-y-3 sm:text-lg">
            <p>
              Garden Sim is an indie garden simulator that I am building solo. I
              started this project from my love for growing things, and I want
              each patch of land to feel welcoming and alive with flowers as much
              as food.
            </p>
            <p>
              That&apos;s why growing flowers in Garden Sim gives the garden a real
              boost. Just like in the real world &mdash; where flowers bring
              pollinators and crop-health, flowers are the only way to truly
              progress in Garden Sim.
            </p>
            <p>
              Another realistic aspect to Garden Sim is how fertilizers affect
              the yield you harvest from each plant. Every plant has a preferred
              NPK (just like real plants do), and your various fertilizers can be
              used to fulfill that NPK as well as to supply extra food to the
              plant. Some fertilizers can alter your BASE YIELD, while others
              affect your YIELD MULTIPLIER.
            </p>
          </div>
        </div>
      </SectionFrame>
      <VisionSection />
      <Features />
      <StoreSection />
      <VideoSection />
    </>
  );
}
