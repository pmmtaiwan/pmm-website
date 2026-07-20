import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
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
        <QuoteBlock quote="只把好音樂做好的，樂興之時。"  />
      </Section>
      <Section eyebrow="關於樂興" title="一個以好音樂為唯一準則的室內樂團。">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {[
            {
              title: "我們的信念",
              body: "從為何存在、如何做音樂，到期待與什麼樣的聽眾相遇。",
              href: "/zh/convictions"
            },
            {
              title: "歷年活動",
              body: "整理自舊站的演出紀錄，持續校對、補足與重建。",
              href: "/zh/archive"
            },
            {
              title: "這裡的人",
              body: "藝術團隊、樂手與行政夥伴，仍待最終版本確認。",
              href: "/zh/people"
            }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="bg-charcoal p-7 transition-colors hover:bg-moss/60"
            >
              <h2 className="text-3xl font-normal text-brass">{item.title}</h2>
              <p className="mt-4 leading-7 text-ink/66">{item.body}</p>
            </a>
          ))}
        </div>
      </Section>
      <Section eyebrow="聯絡" title="讓音樂與新的聽眾相遇。">
        <CTA
          title="邀演、合作、支持與資料更新。"
          body="若你正在整理演出資料、洽詢合作，或希望參與樂興之時的下一段旅程，歡迎與我們聯繫。"
          href="/zh/contact"
          label="聯絡我們"
        />
      </Section>
    </>
  );
}
