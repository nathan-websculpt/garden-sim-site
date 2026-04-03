import journalEntries from "@/content/journal.json";

export type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  image: string;
  imagePosition?: string;
  alt: string;
  description: string;
  publishedAt: string;
  timestamp: string;
};

function publishedAtValue(entry: JournalEntry) {
  const value = Date.parse(entry.publishedAt);
  return Number.isNaN(value) ? 0 : value;
}

export function getJournalEntries() {
  return [...(journalEntries as JournalEntry[])].sort((a, b) => {
    const byPublishedAt = publishedAtValue(b) - publishedAtValue(a);
    return byPublishedAt !== 0 ? byPublishedAt : b.id.localeCompare(a.id);
  });
}
