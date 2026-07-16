import type { Metadata } from "next";

const siteName = "Philharmonia Moments Musicaux";
const baseTitle = "Philharmonia Moments Musicaux / 樂興之時管絃樂團";

export function pageMetadata(
  title: string,
  description = "Philharmonia Moments Musicaux / 樂興之時管絃樂團."
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${title.toLowerCase().replaceAll(" ", "-")}`
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      siteName,
      images: ["/images/philharmonia-hero.png"]
    }
  };
}

export { baseTitle, siteName };
