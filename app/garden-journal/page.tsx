import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import SectionFrame from "@/components/SectionFrame";
import { getJournalEntries } from "@/lib/journal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garden Journal",
  description:
    "Some real-life plants and garden snapshots...",
  alternates: {
    canonical: "/garden-journal",
  },
  openGraph: {
    title: "Garden Journal | Garden Sim",
    description:
      "Some real-life plants and garden snapshots...",
    url: "/garden-journal",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Some real-life plants and garden snapshots...",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Journal | Garden Sim",
    description:
      "Some real-life plants and garden snapshots...",
    images: [siteConfig.ogImage],
  },
};

export default function GardenJournalPage() {
  const entries = getJournalEntries();

  return (
    <SectionFrame aria-labelledby="garden-journal-heading" spacing="inner" shell={false}>
      <div className="section-shell">
        <h1 id="garden-journal-heading" className="text-3xl sm:text-4xl">
          Garden Journal
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
          Some real-life plants and garden snapshots...
        </p>
      </div>
      <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6">
        {entries.map((entry) => (
          <JournalCard key={entry.id} entry={entry} />
        ))}
      </div>
    </SectionFrame>
  );
}
