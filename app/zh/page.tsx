import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { MediaBlock } from "@/components/MediaBlock";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "樂興之時",
  description: "【樂興之時】繁體中文網站。就是要好音樂！",
  alternates: {
    canonical: "/zh/",
    languages: {
      en: "/",
      "zh-Hant": "/zh/"
    }
  }
};

export default function ChineseHomePage() {
  return (
    <>
      <Hero
        eyebrow="樂興之時管絃樂團"
        title="就是要好音樂！"
        subtitle="【樂興之時】"
        image="/images/philharmonia-hero-pmm-generated-natural-wall-bright.png"
        luminous
        cta={{ href: "/zh/convictions", label: "閱讀我們的信念" }}
      />
      <Section>
        <QuoteBlock quote="只把好音樂做好的，樂興之時。" />
      </Section>
      <Section eyebrow="關於樂興">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {[
            {
              title: "我們的信念",
              href: "/zh/convictions"
            },
            {
              title: "歷年活動",
              href: "/zh/archive"
            },
            {
              title: "這裡的人",
              href: "/zh/people"
            }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="bg-charcoal p-7 transition-colors hover:bg-moss/60"
            >
              <h2 className="text-3xl font-normal text-brass">{item.title}</h2>
            </a>
          ))}
        </div>
      </Section>
      <Section eyebrow="聆聽" title="聽見樂興之時的聲音印記。">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          <MediaBlock
            type="影片"
            title="排練片段"
            href="https://youtu.be/lmy2MGcTc6c?si=aeaGHJtXVGWenJ9P"
            description="在 YouTube 觀看 ↗"
          />
          <MediaBlock
            type="錄音"
            title="典藏精選"
            href="https://youtu.be/kLaRlJkIXxM?si=SqsB9MMR9SDpL0gW"
            description="在 YouTube 觀看 ↗"
          />
          <MediaBlock
            type="片段"
            title="聆聽室"
            href="https://youtu.be/rsg49m1GYLA?si=LPSlFVVPfWhiaGb3"
            description="在 YouTube 觀看 ↗"
          />
        </div>
      </Section>
      <Section eyebrow="聯絡" title="讓好音樂與你相遇。">
        <CTA
          title="邀演、合作、與支持。"
          body="若你想要洽詢合作，或希望參與樂興之時的下一段旅程，歡迎與我們聯繫。"
          href="/zh/contact"
          label="聯絡我們"
        />
      </Section>
    </>
  );
}
