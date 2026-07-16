import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { getIdea, ideas } from "@/content/ideas";

export function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

type DetailParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: DetailParams): Promise<Metadata> {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) return {};

  return {
    title: idea.title,
    description: idea.summary,
    openGraph: {
      title: idea.title,
      description: idea.summary,
      images: ["/images/philharmonia-hero.png"]
    }
  };
}

export default async function IdeaDetailPage({ params }: DetailParams) {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) notFound();

  return (
    <>
      <PageIntro eyebrow="Idea" title={idea.title} body={idea.subtitle ?? idea.summary} />
      <Section eyebrow={idea.author ?? "Author"} title={idea.date ?? "Date to be announced"}>
        <article className="editorial-prose max-w-3xl">
          <p>{idea.body}</p>
        </article>
      </Section>
    </>
  );
}
