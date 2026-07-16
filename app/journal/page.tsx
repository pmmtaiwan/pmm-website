import type { Metadata } from "next";
import { LatestNewsFeature } from "@/components/LatestNewsFeature";
import { LatestNewsVideoFloat } from "@/components/LatestNewsVideoFloat";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { latestNewsFeatureByLocale } from "@/content/latestNews";
import { latestNewsVideoByLocale } from "@/content/latestNewsVideo";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Latest News",
  "Current announcements, performance news, and featured PMM updates."
);

export default function JournalPage() {
  return (
    <>
      <PageScene
        eyebrow="Latest News"
        title="A quiet surface for what is current."
        body="Announcements, rehearsal notes, interviews, and archival writing. Each update can bring its own visual world without fighting the page."
        image="/images/page-themes/latest-news-shadow-abstract.jpg"
        imageAlt="Abstract shadows cast across pavement."
        previewImage="/images/page-themes/latest-news-daylight-blue.jpg"
        previewImageAlt="Blue light reflected across a curved stage surface."
        caption="Updates, notices, and current traces"
        tone="quiet"
      />
      <LatestNewsVideoFloat config={latestNewsVideoByLocale.en} locale="en" />
      <Section eyebrow="Latest News" title="Post-Apocalypse Bliss">
        <LatestNewsFeature feature={latestNewsFeatureByLocale.en} />
      </Section>
    </>
  );
}
