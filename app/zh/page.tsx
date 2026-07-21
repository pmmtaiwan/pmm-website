import type { Metadata } from "next";
import Image from "next/image";
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
      />
      <Section>
        <QuoteBlock quote="只把好音樂做好的，樂興之時。" />
      </Section>
      <Section eyebrow="關於樂興">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {[
            {
              title: "我們的信念",
              href: "/zh/convictions",
              image: "/images/zh-convictions.jpg"
            },
            {
              title: "我們的故事",
              href: "/zh/our-story",
              image: "/images/zh-our-story.jpg"
            },
            {
              title: "這裡的人",
              href: "/zh/people",
              image: "/images/zh-people.jpg"
            }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative isolate min-h-72 overflow-hidden bg-charcoal"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-colors group-hover:from-black/75" />
              <h2 className="absolute inset-x-0 bottom-0 p-7 text-3xl font-normal text-brass">
                {item.title}
              </h2>
            </a>
          ))}
        </div>
      </Section>
      <Section eyebrow="聆聽" title="聽見樂興之時的聲音印記。">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          <MediaBlock
            type="影片"
            title="排練片段"
            href="https://youtu.be/rsg49m1GYLA?si=LPSlFVVPfWhiaGb3"
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
            href="https://youtu.be/lmy2MGcTc6c?si=aeaGHJtXVGWenJ9P"
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
