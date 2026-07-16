import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "Institutional background for Philharmonia Moments Musicaux."
);

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Institutional background."
        body="Philharmonia Moments Musicaux is a Taipei-based musical platform for concerts, writing, collaboration, and rigorous listening."
      />
      <Section eyebrow="Identity" title="Philharmonia Moments Musicaux / 樂興之時管絃樂團">
        <div className="editorial-prose max-w-3xl">
          <p>
            PMM builds projects for listeners who remain curious: audiences willing to follow a
            program into unfamiliar hours, unusual spaces, and the larger ideas that music can hold.
          </p>
          <p>
            The organization connects performance with editorial thinking. Concerts, essays,
            production notes, interviews, and archives are treated as parts of one artistic life.
          </p>
        </div>
      </Section>
    </>
  );
}
