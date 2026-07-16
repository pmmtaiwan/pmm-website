import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Philosophy",
  "Why Philharmonia Moments Musicaux exists: Good Music. Period."
);

export default function PhilosophyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Philosophy"
        title="Music before labels."
        body="PMM begins from a direct question: what happens when repertoire, format, venue, and language are all asked to serve the music rather than explain it away?"
      />
      <Section>
        <QuoteBlock quote="Is this good music? Have we done it full justice?" />
      </Section>
      <Section eyebrow="Framework" title="For music that still asks to be heard.">
        <div className="editorial-prose max-w-3xl">
          <p>
            Philharmonia Moments Musicaux exists for a discipline of listening beyond repertoire,
            nationality, period, genre, fashion, or institutional habit.
          </p>
          <p>
            The work is not to make classical music easier by making it smaller. The work is to
            build the conditions in which depth feels alive: clear programming, exacting rehearsal,
            strong writing, intimate audience journeys, and a refusal to let music become mere
            cultural decoration.
          </p>
          <p>
            Good Music. Period. is not a slogan of simplicity. It is a standard, and a reminder that
            every project must answer to the sound before it answers to category.
          </p>
        </div>
      </Section>
    </>
  );
}
