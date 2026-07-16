import type { Metadata } from "next";
import { LatestNewsFeature } from "@/components/LatestNewsFeature";
import { LatestNewsVideoFloat } from "@/components/LatestNewsVideoFloat";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { latestNewsFeatureByLocale } from "@/content/latestNews";
import { latestNewsVideoByLocale } from "@/content/latestNewsVideo";

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
  return (
    <>
      <PageScene
        eyebrow="最新消息"
        title="Max Richter在台灣!!!?"
        body="演出公告、排練札記、訪談與活動紀錄。頁面本身保持低調，讓每一次新的主題素材自然進場。"
        image="/images/page-themes/latest-news-shadow-abstract.jpg"
        imageAlt="地面上抽象的光影。"
        previewImage="/images/page-themes/latest-news-daylight-blue.jpg"
        previewImageAlt="藍色光影映照在弧形舞台表面。"
        caption="公告、近況、正在形成的痕跡"
        tone="quiet"
      />
      <LatestNewsVideoFloat config={latestNewsVideoByLocale.zh} locale="zh" />
      <Section eyebrow="最新消息" title="末世後 狂喜">
        <LatestNewsFeature feature={latestNewsFeatureByLocale.zh} />
      </Section>
    </>
  );
}
