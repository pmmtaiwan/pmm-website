import type { Metadata } from "next";
import Image from "next/image";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { getArchiveRecords } from "@/lib/legacyArchive";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Archive",
  "A growing historical record of Philharmonia Moments Musicaux events from 1998 to the present."
);

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

export default function ArchivePage() {
  const groups = yearGroups();

  return (
    <>
      <PageScene
        eyebrow="Archive"
        title="A memory room for the work."
        image="/images/page-themes/archive-background.jpg"
        imageAlt="A background image selected for the PMM archive page."
        previewImage="/images/page-themes/archive-l.jpg"
        previewImageAlt="The main visual selected for the PMM archive page."
        secondaryImage="/images/page-themes/archive-s.jpg"
        secondaryImageAlt="A supporting visual selected for the PMM archive page."
        caption="Dates, rooms, audiences, traces"
        tone="quiet"
      />
      <Section eyebrow="Archive" title="Events">
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
                        alt={record.titleEn ?? record.titleZh}
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
