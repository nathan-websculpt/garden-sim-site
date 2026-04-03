import type { Metadata } from "next";
import SectionFrame from "@/components/SectionFrame";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Play",
  description:
    "This page is growing next. I will add the full How-to-Play later on ...",
  alternates: {
    canonical: "/how-to-play",
  },
  openGraph: {
    title: "How to Play | Garden Sim",
    description:
      "This page is growing next. I will add the full How-to-Play later on ...",
    url: "/how-to-play",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "This page is growing next.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Play | Garden Sim",
    description:
      "This page is growing next. I will add the full How-to-Play later on ...",
    images: [siteConfig.ogImage],
  },
};

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
