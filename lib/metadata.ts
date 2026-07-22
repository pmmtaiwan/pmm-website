import type { Metadata } from "next";

const siteName = "Philharmonia Moments Musicaux";
const baseTitle = "Philharmonia Moments Musicaux / 樂興之時管絃樂團";
const defaultImage = "/images/philharmonia-hero-pmm-generated-natural-wall-bright.png";

function routeFromTitle(title: string) {
  return `/${title.toLowerCase().replaceAll(" ", "-")}`;
}

export function pageMetadata(
  title: string,
  description = "Philharmonia Moments Musicaux / 樂興之時管絃樂團.",
  path = routeFromTitle(title)
): Metadata {
  const hasChineseEquivalent = path !== "/philosophy";
  const languages = hasChineseEquivalent
    ? {
        en: path,
        "zh-Hant": `/zh${path}`,
        "x-default": path
      }
    : {
        en: path,
        "x-default": path
      };

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      images: [defaultImage],
      locale: "en_US",
      ...(hasChineseEquivalent ? { alternateLocale: ["zh_TW"] } : {}),
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [defaultImage]
    }
  };
}

export { baseTitle, siteName };
