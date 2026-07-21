import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { MediaBlock } from "@/components/MediaBlock";
import { Section } from "@/components/Section";
import { experiences, getExperience } from "@/content/experiences";

const siteUrl = "https://www.pmmtaiwan.org";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

type DetailParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: DetailParams): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return {};

  const canonicalPath = `/experiences/${experience.slug}`;

  return {
    title: experience.title,
    description: experience.summary,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: canonicalPath,
        "x-default": canonicalPath
      }
    },
    openGraph: {
      title: experience.title,
      description: experience.summary,
      url: canonicalPath,
      images: [experience.heroImage ?? "/images/philharmonia-hero.png"],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: experience.title,
      description: experience.summary,
      images: [experience.heroImage ?? "/images/philharmonia-hero.png"]
    }
  };
}

export default async function ExperienceDetailPage({ params }: DetailParams) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const pageUrl = `${siteUrl}/experiences/${experience.slug}`;
  const imageUrl = new URL(experience.heroImage ?? "/images/philharmonia-hero.png", siteUrl).toString();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experiences",
        item: `${siteUrl}/experiences`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: experience.title,
        item: pageUrl
      }
    ]
  };

  const eventJsonLd = experience.date
    ? {
        "@context": "https://schema.org",
        "@type": "MusicEvent",
        "@id": `${pageUrl}#event`,
        name: experience.title,
        description: experience.summary,
        startDate: experience.date,
        eventStatus:
          experience.status === "upcoming"
            ? "https://schema.org/EventScheduled"
            : "https://schema.org/EventCompleted",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        image: [imageUrl],
        url: pageUrl,
        organizer: {
          "@id": `${siteUrl}/#organization`
        },
        performer: {
          "@id": `${siteUrl}/#organization`
        },
        ...(experience.venue
          ? {
              location: {
                "@type": "Place",
                name: experience.venue,
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "TW"
                }
              }
            }
          : {})
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {eventJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      ) : null}
      <Hero
        compact
        eyebrow={experience.status}
        title={experience.title}
        subtitle={experience.subtitle}
        image={experience.heroImage}
      />
      <Section eyebrow="Introduction" title={experience.venue ?? "Venue to be announced"}>
        <div className="editorial-prose max-w-3xl">
          <p>{experience.summary}</p>
          <p>
            {experience.body ??
              "More about this experience will be announced as production details are confirmed."}
          </p>
        </div>
      </Section>
      <Section eyebrow="Program" title="Music">
        <ul className="grid gap-3 font-sans text-sm uppercase tracking-[0.12em] text-ink/72">
          {(experience.program ?? ["Program to be announced"]).map((item) => (
            <li key={item} className="border-b border-white/15 pb-3">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="Artists" title="People">
        <ul className="grid gap-3 font-sans text-sm uppercase tracking-[0.12em] text-ink/72">
          {(experience.artists ?? ["Artists to be announced"]).map((item) => (
            <li key={item} className="border-b border-white/15 pb-3">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section eyebrow="Gallery" title="Image field">
        <MediaBlock
          type="Gallery"
          title="Production images"
          description="Images will be added as rehearsal, venue, and performance materials are prepared."
        />
      </Section>
      <Section eyebrow="Media" title="Video and audio">
        <div className="grid gap-5 md:grid-cols-2">
          <MediaBlock
            type="Video"
            title="Video archive"
            description="Video excerpts will appear here when approved for public release."
          />
          <MediaBlock
            type="Audio"
            title="Audio archive"
            description="Audio materials will be added for listeners who want to return to the project."
          />
        </div>
      </Section>
      <Section eyebrow="Registration" title="Attend this experience">
        <CTA
          title="Attend this experience."
          body="Ticketing and registration details will be added here when confirmed. For early inquiries, begin with the contact page."
          href="/contact"
          label="Contact"
        />
      </Section>
    </>
  );
}
