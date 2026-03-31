import journalEntries from "@/content/journal.json";

export type JournalEntry = {
  id: string;
  slug: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  timestamp: string;
};

function timestampValue(entry: JournalEntry) {
  const value = Date.parse(entry.timestamp);
  return Number.isNaN(value) ? 0 : value;
}

export function getJournalEntries() {
  return [...(journalEntries as JournalEntry[])].sort((a, b) => {
    const byTimestamp = timestampValue(b) - timestampValue(a);
    return byTimestamp !== 0 ? byTimestamp : b.id.localeCompare(a.id);
  });
}
