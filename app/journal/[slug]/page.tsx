import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { getJournalEntry, journalEntries } from "@/content/journal";

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

type DetailParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: DetailParams): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.summary,
    openGraph: {
      title: entry.title,
      description: entry.summary,
      images: ["/images/philharmonia-hero.png"]
    }
  };
}

export default async function JournalDetailPage({ params }: DetailParams) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();

  return (
    <>
      <PageIntro eyebrow={entry.category ?? "Journal"} title={entry.title} body={entry.summary} />
      <Section eyebrow={entry.date} title="Entry">
        <article className="editorial-prose max-w-3xl">
          <p>{entry.body}</p>
        </article>
      </Section>
    </>
  );
}
