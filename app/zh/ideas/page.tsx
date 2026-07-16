import type { Metadata } from "next";
import { IdeaCard } from "@/components/IdeaCard";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { ideas } from "@/content/ideas";

export const metadata: Metadata = {
  title: "樂念｜樂興之時",
  description: "樂興之時的文字、觀點與節目思考。",
  alternates: {
    canonical: "/zh/ideas",
    languages: {
      en: "/ideas",
      "zh-Hant": "/zh/ideas"
    }
  }
};

export default function ChineseIdeasPage() {
  return (
    <>
      <PageIntro
        eyebrow="樂念"
        title="音樂背後的思考。"
        body="中文文章架構將依照內容包逐步整理；目前先保留既有文章入口。"
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {ideas.map((idea) => (
            <IdeaCard key={idea.slug} idea={idea} />
          ))}
        </div>
      </Section>
    </>
  );
}
