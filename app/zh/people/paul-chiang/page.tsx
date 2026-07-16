import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "江靖波 | 樂興之時",
  description: "樂興之時創辦人與藝術總監江靖波介紹。",
  alternates: {
    canonical: "/zh/people/paul-chiang",
    languages: {
      en: "/people/paul-chiang",
      "zh-Hant": "/zh/people/paul-chiang"
    }
  }
};

export default function ChinesePaulChiangPage() {
  return (
    <>
      <Section eyebrow="創辦人 / 藝術總監" title="江靖波">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <figure className="overflow-hidden border border-white/15 bg-charcoal">
            <div className="relative aspect-square">
              <Image
                src="/images/paul-chiang-zh.jpg"
                alt="江靖波"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </figure>
          <article className="foundational-prose">
            <p>
              兩度獲得全國音樂比賽小提琴獨奏及室內樂第一名，美國南加州大學管絃樂指揮碩士。1995年獲選檀格塢
              Tanglewood 指揮榮譽生。1996年決心深耕臺灣，返臺創辦【樂興之時管絃樂團】迄今。
            </p>
            <p>
              丹麥國家廣播公司曾以專題報導介紹江靖波，並於北歐五國轉播【樂興之時】之全場音樂會。2002年，奪得德國
              Sir Georg Solti
              指揮大賽第三名，為入圍準決賽12人中唯一的亞洲人。江靖波指揮足跡橫跨歐亞美非，近年與義大利維洛納歌劇院樂團、以色列交響樂團、墨西哥國立交響樂團、德國哈勒國立歌劇院樂團、哥倫比亞波哥大愛樂的合作，均獲熱烈迴響。
            </p>
            <p>
              2014年4月，江靖波遭逢嚴重瀕死車禍，但透過堅毅復健，同年9月即重新登臺，並於2015-2017年獲聘希臘頂尖的塞薩羅尼加國立交響樂團首席客座指揮。
            </p>
            <p>
              其人文底蘊深厚，具過人的跨文化領悟力及美學統整能力，2018年起擔任NCO臺灣國樂團年度特約指揮，2020年至2024年，榮任臺灣國樂團音樂總監。
            </p>
            <p>
              江靖波翻譯的《平均律如何毀了和聲-又干你甚麼事》是近年古樂研究的重要文獻；負責審定之《神童之父提琴教學之根本探索》更是晚近進入中文知識庫之探討古典音樂演奏法最重要的書目之一。
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
