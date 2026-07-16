import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "支持我們｜樂興之時",
  description: "支持樂興之時，讓好音樂持續被聽見。",
  alternates: {
    canonical: "/zh/support",
    languages: {
      en: "/support",
      "zh-Hant": "/zh/support"
    }
  }
};

export default function ChineseSupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="支持我們"
        title="讓好音樂持續有位置。"
        body="樂興之時需要願意一起相信的人：觀眾、贊助者、合作夥伴與每一位珍惜聆聽的人。"
      />
      <Section>
        <CTA
          title="成為下一段旅程的一部分。"
          body="正式支持方案將在資料確認後公布；目前歡迎先透過聯絡頁留下訊息。"
          href="/zh/contact"
          label="聯絡我們"
        />
      </Section>
    </>
  );
}
