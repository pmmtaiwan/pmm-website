import type { Metadata } from "next";
import Image from "next/image";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { getArchiveRecords } from "@/lib/legacyArchive";

export const metadata: Metadata = {
  title: "歷年活動 | 樂興之時",
  description: "樂興之時自 1998 年至今，與聽眾一同走過的現場足跡。",
  alternates: {
    canonical: "/zh/archive",
    languages: {
      en: "/archive",
      "zh-Hant": "/zh/archive"
    }
  }
};

function yearGroups() {
  const records = getArchiveRecords();
  const groups = new Map<number, typeof records>();

  records.forEach((record) => {
    const group = groups.get(record.year) ?? [];
    group.push(record);
    groups.set(record.year, group);
  });

  return [...groups.entries()].sort(([a], [b]) => b - a);
}

const archiveImages = [
  "/images/page-themes/archive-l.jpg",
  "/images/page-themes/archive-s.jpg",
  "/images/page-themes/archive-background.jpg"
];

export default function ChineseArchivePage() {
  const groups = yearGroups();

  return (
    <>
      <PageScene
        eyebrow="歷年活動"
        title="為聲音留下秩序。"
        image="/images/page-themes/archive-background.jpg"
        imageAlt="歷年活動頁背景影像。"
        previewImage="/images/page-themes/archive-l.jpg"
        previewImageAlt="歷年活動頁主視覺。"
        secondaryImage="/images/page-themes/archive-s.jpg"
        secondaryImageAlt="歷年活動頁輔助視覺。"
        caption="日期、場地、觀眾與記憶"
        tone="quiet"
      />
      <Section eyebrow="歷年活動" title="一些你可能和我們一起走過的足跡">
        <div className="grid gap-12">
          {groups.map(([year, records]) => (
            <section key={year} className="grid gap-5 md:grid-cols-[140px_1fr]">
              <h2 className="text-5xl font-normal text-brass md:text-6xl">{year}</h2>
              <div className="grid gap-px bg-white/15">
                {records.map((record, index) => (
                  <article
                    key={`${record.date}-${record.titleZh}`}
                    className="grid gap-5 bg-charcoal p-5 md:grid-cols-[180px_1fr]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border border-white/12">
                      <Image
                        src={record.image ?? archiveImages[index % archiveImages.length]}
                        alt={record.titleZh}
                        fill
                        className="object-cover"
                        sizes="180px"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/50">
                        {[record.date, record.time, record.venue].filter(Boolean).join(" / ")}
                      </p>
                      <h3 className="mt-3 text-2xl font-normal leading-tight md:text-3xl">
                        {record.titleZh}
                      </h3>
                      {record.titleEn ? (
                        <p className="mt-2 font-sans text-sm text-ink/58">{record.titleEn}</p>
                      ) : null}
                      {record.notes ? (
                        <p className="mt-4 text-sm leading-6 text-ink/60">{record.notes}</p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
