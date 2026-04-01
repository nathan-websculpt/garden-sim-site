import type { Metadata } from "next";
import JournalCard from "@/components/JournalCard";
import { getJournalEntries } from "@/lib/journal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garden Journal",
  description:
    "Some real-life plants and garden snapshots from the solo gardener-developer building Garden Sim.",
  alternates: {
    canonical: "/garden-journal",
  },
  openGraph: {
    title: "Garden Journal | Garden Sim",
    description:
      "Real-life plants and cozy snapshots from the gardener behind Garden Sim, shared newest first.",
    url: "/garden-journal",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Garden Sim journal preview with cozy garden visuals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Journal | Garden Sim",
    description:
      "Newest-first real-life plant snapshots and notes from the solo gardener-developer behind Garden Sim.",
    images: [siteConfig.ogImage],
  },
};

export default function GardenJournalPage() {
  const entries = getJournalEntries();

  return (
    <section aria-labelledby="garden-journal-heading" className="pb-14 pt-8 sm:pb-16 sm:pt-12">
      <div className="garden-container">
        <div className="section-shell">
          <h1 id="garden-journal-heading" className="text-3xl sm:text-4xl">
            Garden Journal
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#60705f] sm:text-lg">
            Some real-life plants and garden snapshots...
          </p>
        </div>
        <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6">
          {entries.map((entry) => (
            <JournalCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
