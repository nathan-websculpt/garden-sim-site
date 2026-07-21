import HowToPlayTabs from "@/components/HowToPlayTabs";
import SectionFrame from "@/components/SectionFrame";
import { buildPageMetadata } from "@/lib/metadata";
import { metadataCopy } from "@/lib/site";

const howToPlayMetadataDescription =
  "Getting Started, Controls, Garden Morale, and Advanced help for Garden Sim.";

export const metadata = buildPageMetadata({
  title: "How to Play",
  description: howToPlayMetadataDescription,
  canonicalPath: "/how-to-play",
  ogImageAlt: metadataCopy.homeOgImageAlt,
});

export default function HowToPlayPage() {
  return (
    <SectionFrame aria-labelledby="how-to-play-heading" spacing="inner">
      <h1 id="how-to-play-heading" className="text-3xl sm:text-4xl">
        How to Play
      </h1>
      <HowToPlayTabs />
    </SectionFrame>
  );
}
