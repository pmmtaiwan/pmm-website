import { Card } from "@/components/Card";
import type { Idea } from "@/content/ideas";

export function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <Card
      href={`/ideas/${idea.slug}`}
      eyebrow="Idea"
      title={idea.title}
      summary={idea.summary}
      meta={[idea.date, idea.author].filter(Boolean).join(" / ")}
    />
  );
}
