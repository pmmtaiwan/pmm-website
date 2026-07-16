import { Card } from "@/components/Card";
import type { Experience } from "@/content/experiences";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const meta = [experience.date, experience.venue, experience.status].filter(Boolean).join(" / ");

  return (
    <Card
      href={`/experiences/${experience.slug}`}
      eyebrow="Experience"
      title={experience.title}
      summary={experience.summary}
      meta={meta}
    />
  );
}
