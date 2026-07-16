import type { Metadata } from "next";
import { ConversationBoard } from "@/components/ConversationBoard";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { StoryChainBoard } from "@/components/StoryChainBoard";
import { pageMetadata } from "@/lib/metadata";

const socialChannels = [
  { label: "Facebook", kind: "facebook" as const, href: "https://www.facebook.com/momentmusical/" },
  {
    label: "Instagram",
    kind: "instagram" as const,
    href: "https://www.instagram.com/philharmonia_moments_musicaux/"
  },
  { label: "LINE", kind: "line" as const, href: "https://line.me/R/ti/p/%40ayj4735a" },
  { label: "YouTube", kind: "youtube" as const, href: "https://www.youtube.com/@PMM1998" }
];

export const metadata: Metadata = pageMetadata(
  "Chat with Us",
  "Begin a conversation with Philharmonia Moments Musicaux."
);

export default function ContactPage() {
  return (
    <>
      <PageScene
        eyebrow="Chat with Us"
        title="Begin a conversation."
        body="For productions, collaborations, support, venue questions, or simply a listening thought you would like to share."
        image="/images/page-themes/communicate-background-l.jpg"
        imageAlt="The main visual selected for the PMM conversation page."
        previewImage="/images/page-themes/communicate-background-l.jpg"
        previewImageAlt="The main visual selected for the PMM conversation page."
        caption="Listening begins as a conversation"
        tone="quiet"
      />
      <Section eyebrow="Story Relay" title="The next phrase is yours.">
        <StoryChainBoard locale="en" />
      </Section>
      <Section eyebrow="Conversation" title="Leave a note for PMM.">
        <ConversationBoard locale="en" />
      </Section>
      <Section eyebrow="Direct Inquiries" title="Production, collaboration, and venue questions.">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border border-white/15 bg-charcoal p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
              Contact details
            </p>
            <div className="mt-6 grid gap-3 text-sm leading-6 text-ink/68">
              <p>B1, No.18, Ln. 112, Ren-ai Rd, Sec.4, Taipei 106, Taiwan, R.O.C</p>
              <p>Tel: +886-2-2708-3700</p>
              <p>Fax: +886-2-2708-3768</p>
            </div>
          </div>
          <div className="placeholder-field p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
              Social channels
            </p>
            <div className="mt-6">
              <SocialIconLinks channels={socialChannels} size="large" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
