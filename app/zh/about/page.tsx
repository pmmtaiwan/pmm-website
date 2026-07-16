import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "關於樂興｜樂興之時",
  description: "樂興之時管絃樂團的組織背景與藝術方向。",
  alternates: {
    canonical: "/zh/about",
    languages: {
      en: "/about",
      "zh-Hant": "/zh/about"
    }
  }
};

export default function ChineseAboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="關於樂興"
        title="樂興之時管絃樂團"
        body="以台灣為根基，為值得被聽見的音樂建立演出、書寫、合作與聆聽的場所。"
      />
      <Section eyebrow="Identity" title="就是要好音樂！">
        <div className="editorial-prose max-w-3xl">
          <p>
            樂興之時為仍然好奇的聽眾製作計畫：願意跟著一場演出進入陌生時刻、不同空間，以及音樂所承載的更大思想。
          </p>
          <p>我們把演出、文字、製作筆記、訪談與檔案視為同一個藝術生命的不同面向。</p>
        </div>
      </Section>
    </>
  );
}
