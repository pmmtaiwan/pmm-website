import type { Metadata } from "next";
import Link from "next/link";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { getLegacyPeople } from "@/lib/legacyPeople";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "People",
  "Musicians, artistic leadership, and administrative team from the migrated PMM roster."
);

export default function PeoplePage() {
  const people = getLegacyPeople();

  return (
    <>
      <PageScene
        eyebrow="People"
        title="Sound is carried by people."
        body="Musicians, artistic directors, and everyone whose work brings each PMM production into being."
        image="/images/page-themes/members-conductor-rehearsal.jpg"
        imageAlt="A conductor works with the orchestra in rehearsal."
        secondaryImage="/images/page-themes/members-bow-circle.jpg"
        secondaryImageAlt="String players raise their bows together after a performance."
        tone="quiet"
      />
      <Section eyebrow="Artistic Leadership" title="Direction and musical leadership.">
        <div className="grid gap-5 md:grid-cols-2">
          {people.artisticLeadership.map((leader) => (
            <article key={leader.name} className="border border-white/15 bg-charcoal p-7">
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-brass">
                {leader.roleEn}
              </p>
              <h2 className="mt-4 text-4xl font-normal">
                {leader.name === "\u6c5f\u9756\u6ce2" ? (
                  <Link href="/people/paul-chiang" className="transition-colors hover:text-brass">
                    {leader.name}
                  </Link>
                ) : leader.name === "\u694a\u7ae3\u5091" ? (
                  <Link
                    href="/people/chun-chieh-yang"
                    className="transition-colors hover:text-brass"
                  >
                    {leader.name}
                  </Link>
                ) : (
                  leader.name
                )}
              </h2>
              <p className="mt-3 text-ink/62">{leader.roleZh}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Orchestra Roster" title="Musicians">
        <div className="grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
          {people.sections.map((section) => (
            <article key={section.name} className="bg-charcoal p-6">
              <h2 className="font-sans text-sm uppercase tracking-[0.16em] text-brass">
                {section.name}
              </h2>
              <p className="mt-5 leading-8 text-ink/76">{section.current.join("、")}</p>
              {section.former.length ? (
                <details className="mt-5 font-sans text-sm text-ink/54">
                  <summary className="cursor-pointer text-brass">Former members</summary>
                  <p className="mt-3 leading-7">{section.former.join("、")}</p>
                </details>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Administration" title="Operation Staff">
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
