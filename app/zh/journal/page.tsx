import type { Metadata } from "next";
import { LatestNewsFeature } from "@/components/LatestNewsFeature";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { latestNewsFeatureByLocale } from "@/content/latestNews";

export const metadata: Metadata = {
  title: "最新消息 | 樂興之時",
  description: "樂興之時的演出公告、焦點影片與最新活動資訊。",
  alternates: {
    canonical: "/zh/journal",
    languages: {
      en: "/journal",
      "zh-Hant": "/zh/journal"
    }
  }
};

export default function ChineseJournalPage() {
  const feature = latestNewsFeatureByLocale.zh;

  return (
    <>
      <PageScene
        eyebrow="最新消息"
        title="重聽貝多芬"
        image="/images/page-themes/rehearing-beethoven-pathetique.webp"
        imageAlt="以古老手稿質感重新呈現的貝多芬《悲愴》奏鳴曲弦樂四重奏首頁。"
        previewImage="/images/page-themes/rehearing-beethoven-pathetique.webp"
        previewImageAlt="聚光燈下、以羊皮紙質感呈現的貝多芬《悲愴》奏鳴曲弦樂四重奏樂譜。"
        tone="quiet"
      />
      <Section eyebrow="最新消息" title={feature.title}>
        <LatestNewsFeature feature={feature} />
      </Section>
    </>
  );
}
