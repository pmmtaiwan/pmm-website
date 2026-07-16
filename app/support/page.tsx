import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Support",
  "Support Philharmonia Moments Musicaux as part of an artistic journey."
);

export default function SupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="Support"
        title="Become part of the journey."
        body="Support for PMM helps make rehearsal time, venue imagination, artist collaboration, and audience care possible."
      />
      <Section>
        <CTA
          title="Help make room for music that asks more of us."
          body="We welcome conversations with patrons, cultural partners, and listeners who want to help ambitious music reach the people who are ready for it."
          href="/contact"
          label="Begin a conversation"
        />
      </Section>
    </>
  );
}
