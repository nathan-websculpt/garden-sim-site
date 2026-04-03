import JournalCard from "@/components/JournalCard";
import SectionFrame, { SectionShell } from "@/components/SectionFrame";
import { getJournalEntries } from "@/lib/journal";
import { buildPageMetadata } from "@/lib/metadata";

const journalIntro = "Some real-life plants and garden snapshots...";

export const metadata = buildPageMetadata({
  title: "Garden Journal",
  description: journalIntro,
  canonicalPath: "/garden-journal",
  ogImageAlt: "Some real-life plants and garden snapshots...",
});

export default function GardenJournalPage() {
  const entries = getJournalEntries();

  return (
    <SectionFrame aria-labelledby="garden-journal-heading" spacing="inner" shell={false}>
      <SectionShell>
        <h1 id="garden-journal-heading" className="text-3xl sm:text-4xl">
          Garden Journal
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
          {journalIntro}
        </p>
      </SectionShell>
      <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6">
        {entries.map((entry) => (
          <JournalCard key={entry.id} entry={entry} />
        ))}
      </div>
    </SectionFrame>
  );
}
