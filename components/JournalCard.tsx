import { Card } from "@/components/Card";
import type { JournalEntry } from "@/content/journal";

export function JournalCard({ entry }: { entry: JournalEntry }) {
  return (
    <Card
      href={`/journal/${entry.slug}`}
      eyebrow={entry.category ?? "Journal"}
      title={entry.title}
      summary={entry.summary}
      meta={entry.date}
    />
  );
}
