import type { Metadata } from "next";
import { LatestNewsFeature } from "@/components/LatestNewsFeature";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { latestNewsFeatureByLocale } from "@/content/latestNews";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Latest News",
  "Current announcements, performance news, and featured PMM updates."
);

export default function JournalPage() {
  const feature = latestNewsFeatureByLocale.en;

  return (
    <>
      <PageScene
        eyebrow="Latest News"
        title="Rehearing Beethoven"
        image="/images/page-themes/rehearing-beethoven-pathetique.webp"
        imageAlt="The opening page of Beethoven's Pathétique Sonata reimagined as an aged manuscript for string quartet."
        previewImage="/images/page-themes/rehearing-beethoven-pathetique.webp"
        previewImageAlt="Beethoven's Pathétique Sonata arranged for string quartet on an illuminated aged manuscript."
        tone="quiet"
      />
      <Section eyebrow="Latest News" title={feature.title}>
        <LatestNewsFeature feature={feature} />
      </Section>
    </>
  );
}
