import SectionFrame from "@/components/SectionFrame";
import { buildPageMetadata } from "@/lib/metadata";

const howToPlayMetadataDescription =
  "This page is growing next. I will add the full How-to-Play later on ...";

export const metadata = buildPageMetadata({
  title: "How to Play",
  description: howToPlayMetadataDescription,
  canonicalPath: "/how-to-play",
  ogImageAlt: "This page is growing next.",
});

export default function HowToPlayPage() {
  return (
    <SectionFrame aria-labelledby="how-to-play-heading" spacing="inner">
      <h1 id="how-to-play-heading" className="text-3xl sm:text-4xl">
        How to Play
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
        This page is growing next.
      </p>
      <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
        I will add the full How-to-Play later on ...
      </p>
    </SectionFrame>
  );
}
