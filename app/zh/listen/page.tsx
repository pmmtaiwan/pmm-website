import type { Metadata } from "next";
import { MediaBlock } from "@/components/MediaBlock";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "聆聽｜樂興之時",
  description: "樂興之時的影音、錄音、片段與演出紀錄。",
  alternates: {
    canonical: "/zh/listen",
    languages: {
      en: "/listen",
      "zh-Hant": "/zh/listen"
    }
  }
};

export default function ChineseListenPage() {
  return (
    <>
      <PageIntro
        eyebrow="聆聽"
        title="可被再次聽見的片刻。"
        body="影音、錄音、排練片段與歷史資料，將依照每個計畫的整理進度逐步收錄。"
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <MediaBlock type="Video" title="影像紀錄" description="演出影片、排練影像與短篇紀錄。" />
          <MediaBlock
            type="Recording"
            title="錄音紀錄"
            description="音樂會與錄音計畫的聲音資料。"
          />
          <MediaBlock
            type="Excerpt"
            title="精選片段"
            description="讓聽眾在演出前後再次進入作品。"
          />
        </div>
      </Section>
    </>
  );
}
