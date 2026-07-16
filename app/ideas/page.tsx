import type { Metadata } from "next";
import { IdeaCard } from "@/components/IdeaCard";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { ideas } from "@/content/ideas";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Ideas",
  "Essays, program notes, historical reflections, and artistic research."
);

export default function IdeasPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ideas"
        title="The thinking behind the music."
        body="Essays, program notes, historical reflections, literary connections, and artistic research that give each production more ways to be heard."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {ideas.map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </Section>
    </>
  );
}
