import type { Metadata } from "next";
import Link from "next/link";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { getLegacyPeople } from "@/lib/legacyPeople";

export const metadata: Metadata = {
  title: "這裡的人 | 樂興之時",
  description: "樂興之時的音樂家、藝術領導與管理團隊。",
  alternates: {
    canonical: "/zh/people",
    languages: {
      en: "/people",
      "zh-Hant": "/zh/people"
    }
  }
};

export default function ChinesePeoplePage() {
  const people = getLegacyPeople();

  return (
    <>
      <PageScene
        eyebrow="這裡的人"
        title="聲音，是由人托起的"
        body="音樂家、藝術總監與每一個讓製作成形的人，共同構成樂興之時的現場。"
        image="/images/page-themes/members-conductor-rehearsal.jpg"
        imageAlt="指揮與樂團排練的現場。"
        secondaryImage="/images/page-themes/members-bow-circle.jpg"
        secondaryImageAlt="弦樂手在演出後一同舉起琴弓。"
        caption="領導、合奏、共同的姿態"
        tone="quiet"
      />
      <Section eyebrow="藝術領導" title="音樂方向與藝術核心。">
        <div className="grid gap-5 md:grid-cols-2">
          {people.artisticLeadership.map((leader) => (
            <article key={leader.name} className="border border-white/15 bg-charcoal p-7">
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-brass">
                {leader.roleZh}
              </p>
              <h2 className="mt-4 text-4xl font-normal">
                {leader.name === "\u6c5f\u9756\u6ce2" ? (
                  <Link
                    href="/zh/people/paul-chiang"
                    className="transition-colors hover:text-brass"
                  >
                    {leader.name}
                  </Link>
                ) : leader.name === "\u694a\u7ae3\u5091" ? (
                  <Link
                    href="/zh/people/chun-chieh-yang"
                    className="transition-colors hover:text-brass"
                  >
                    {leader.name}
                  </Link>
                ) : (
                  leader.name
                )}
              </h2>
              <p className="mt-3 text-ink/62">{leader.roleEn}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="這裡的人" title="樂團音樂家">
        <div className="grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
          {people.sections.map((section) => (
            <article key={section.name} className="bg-charcoal p-6">
              <h2 className="font-sans text-sm uppercase tracking-[0.16em] text-brass">
                {section.name}
              </h2>
              <p className="mt-5 leading-8 text-ink/76">{section.current.join("、")}</p>
              {section.former.length ? (
                <details className="mt-5 font-sans text-sm text-ink/54">
                  <summary className="cursor-pointer text-brass">歷任成員</summary>
                  <p className="mt-3 leading-7">{section.former.join("、")}</p>
                </details>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="這裡的人" title="管理團隊">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {people.administrativeTeam.map((role) => (
            <article key={role.roleZh} className="bg-charcoal p-6">
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-brass">
                {role.roleZh}
              </p>
              <p className="mt-4 text-2xl">{role.names.join("、")}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
