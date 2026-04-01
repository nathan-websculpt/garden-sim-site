import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technicals",
  description: "Technical details for Garden Sim's game build and stack.",
  alternates: {
    canonical: "/technicals",
  },
  openGraph: {
    title: "Technicals | Garden Sim",
    description: "Technical details for Garden Sim's game build and stack.",
    url: "/technicals",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Garden Sim technical details page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technicals | Garden Sim",
    description: "Technical details for Garden Sim's game build and stack.",
    images: [siteConfig.ogImage],
  },
};

export default function TechnicalsPage() {
  return (
    <section aria-labelledby="technicals-heading" className="pb-14 pt-8 sm:pb-16 sm:pt-12">
      <div className="garden-container">
        <div className="section-shell">
          <h1 id="technicals-heading" className="text-3xl sm:text-4xl">
            Technicals
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#60705f] sm:text-lg">
            SDL3 game (no game engine used)
          </p>
          <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-6 text-base leading-8 text-[#60705f] sm:text-lg">
            <li>
              Ultra Lightweight
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-7 sm:text-base">
                <li>C++20</li>
                <li>SDL3</li>
                <li>tmxlite</li>
                <li>nlohmann</li>
                <li><a target="_blank" href="https://plflib.org/colony.htm">plf</a></li>
                <li>Built with memory-safety and modern C++ conventions in mind</li>
              </ul>
            </li>
            <li>
              plf
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-7 sm:text-base">
                <li><i>plf::colony</i> is a high-performance container optimized for frequent 
                  insertion and erasure without iterator invalidation</li>
                <li>manages memory in grouped blocks to minimize fragmentation and supports 
                  efficient “pruning” of inactive or removed elements without costly reallocations</li>
              </ul>
            </li>
            <li>
              NPC Tasks
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-7 sm:text-base">
                <li>NPCs pull from one task-list</li>
                <li>If multiple gardens are clearly separated, NPCs will 
                  each work a different garden
                </li>
              </ul>
            </li>
            <li>
              Particles
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-7 sm:text-base">
                <li>various particles deploy on player/plant-actions</li>
                <li>bees are simply particles</li>
                <li>particles intelligently diminish in quantity when large amounts of tiles are deploying particles at the same time</li>
              </ul>
            </li>
            <li>
              Rendering
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-7 sm:text-base">
                <li>Only data that is on-screen and adjacent to on-screen tiles is processed for render</li>
                <li>Render is dynamically snapped so that walking is smooth across multiple zooms</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
