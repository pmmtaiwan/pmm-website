import type { Metadata } from "next";
import { ConversationBoard } from "@/components/ConversationBoard";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { StoryChainBoard } from "@/components/StoryChainBoard";

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

export const metadata: Metadata = {
  title: "和我們對話 | 樂興之時",
  description: "留言、故事接龍，以及與樂興之時保持聯繫。",
  alternates: {
    canonical: "/zh/contact",
    languages: {
      en: "/contact",
      "zh-Hant": "/zh/contact"
    }
  }
};

export default function ChineseContactPage() {
  return (
    <>
      <PageScene
        eyebrow="和我們對話"
        title="讓我們開啟一段有溫度、有滋味的對話"
        body="在這裡留言、接續故事，也把你想和樂興之時說的話留給我們。"
        image="/images/page-themes/communicate-background-l.jpg"
        imageAlt="指揮與樂團排練現場"
        previewImage="/images/page-themes/communicate-background-l.jpg"
        previewImageAlt="指揮與樂團排練現場"
        caption="每一次回應，都是作品繼續生長的方式。"
        tone="quiet"
      />

      <Section eyebrow="故事接龍" title="下一個樂句，交給你">
        <StoryChainBoard locale="zh" />
      </Section>

      <Section eyebrow="留言" title="和我們說說話">
        <ConversationBoard locale="zh" />
      </Section>

      <Section eyebrow="聯絡資訊" title="找到我們，也追蹤我們">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border border-white/15 bg-charcoal p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">Address</p>
            <div className="mt-6 grid gap-3 text-sm leading-6 text-ink/68">
              <p>106 台北市大安區仁愛路四段112巷18號B1</p>
              <p>B1, No.18, Ln. 112, Ren-ai Rd, Sec.4, Taipei 106, Taiwan, R.O.C</p>
              <p>Tel: +886-2-2708-3700</p>
              <p>Fax: +886-2-2708-3768</p>
              <p>E-Mail: muse@mmmu.org</p>
            </div>
          </div>

          <div className="placeholder-field p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">Social</p>
            <div className="mt-6 flex justify-center">
              <SocialIconLinks channels={socialChannels} size="large" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
