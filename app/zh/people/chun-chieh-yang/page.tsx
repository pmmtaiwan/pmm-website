import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "楊竣傑 | 樂興之時",
  description: "樂興之時首席暨助理指揮楊竣傑簡介。",
  alternates: {
    canonical: "/zh/people/chun-chieh-yang",
    languages: {
      en: "/people/chun-chieh-yang",
      "zh-Hant": "/zh/people/chun-chieh-yang"
    }
  }
};

export default function ChineseChunChiehYangPage() {
  return (
    <Section eyebrow="首席 / 助理指揮" title="楊竣傑">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <figure className="overflow-hidden border border-white/15 bg-charcoal">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/chun-chieh-yang-zh.jpg"
              alt="楊竣傑"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </figure>
        <article className="foundational-prose">
          <p>
            楊竣傑為【樂興之時管絃樂團】首席暨助理指揮，並曾擔任樂興之時管絃樂團種子團指揮及指導教師。國立台北藝術大學指揮碩士，大學時主修小提琴，曾多次參與台北藝術大學大師班與室內樂講座，並曾參加玄音國際音樂節（Shuan
            Yin Arts Festival Carnival）深獲肯定。曾接受曾耿元、Dmitri
            Berlinsky、長城弦樂四重奏、American String Quartet、Quatuor Diotima、Szymanowski
            Quartet等國際知名大師指導。
          </p>
          <p>
            畢業後積極參與樂團演出，曾任愚韻室內管弦樂團首席、3E青年愛樂交響樂團首席、夢蓮花交響樂團小提琴演奏員、逢源愛樂室內弦樂團副團長、長榮交響樂團協演人員。
          </p>
          <p>
            積極組織室內樂，2023年7月參加第一屆灣聲國際室內樂大賽獲得第二名殊榮。同年9月參加第二屆國際藝術家比賽（International
            Artists
            Competition）室內樂組，榮獲第三名。曾參與德國歐費斯蘭音樂節，於閉幕音樂會中獲得獨奏以及室內樂演出機會。現任貝森弦樂四重奏（Basin
            String
            Quartet）小提琴家，並擔任東湖國小弦樂團以及永和國小弦樂團指揮、小提琴與中提琴教師。曾任新店康橋學校小學部及三重五華國小弦樂團團體課及個別課教師。時常受邀參與各大交響樂團演出，且致力於全臺灣演出室內樂音樂會。
          </p>
        </article>
      </div>
    </Section>
  );
}
