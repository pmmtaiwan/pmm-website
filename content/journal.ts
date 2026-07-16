export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  category?: string;
  summary: string;
  body: string;
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "opening-the-notebook",
    title: "Opening the Notebook",
    date: "2026-07-08",
    category: "Notebook",
    summary:
      "A first note on how the journal will gather rehearsal traces, announcements, interviews, and archival writing.",
    body: "This journal is built for the material that surrounds performance: rehearsal observations, production notes, artist conversations, research fragments, and announcements that deserve more care than a passing post. It will grow as the work itself becomes public."
  }
];

export function getJournalEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}
