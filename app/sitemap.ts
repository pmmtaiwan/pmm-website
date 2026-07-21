import type { MetadataRoute } from "next";

const siteUrl = "https://www.pmmtaiwan.org";

const routePairs = [
  ["/", "/zh/"],
  ["/manifesto", "/zh/manifesto"],
  ["/convictions", "/zh/convictions"],
  ["/our-story", "/zh/our-story"],
  ["/experiences", "/zh/experiences"],
  ["/ideas", "/zh/ideas"],
  ["/journal", "/zh/journal"],
  ["/listen", "/zh/listen"],
  ["/people", "/zh/people"],
  ["/archive", "/zh/archive"],
  ["/support", "/zh/support"],
  ["/about", "/zh/about"],
  ["/contact", "/zh/contact"],
  ["/rent", "/zh/rent"]
] as const;

const englishOnlyRoutes = ["/philosophy"] as const;

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pairedEntries: MetadataRoute.Sitemap = routePairs.flatMap(([englishPath, chinesePath]) => {
    const languages = {
      en: absoluteUrl(englishPath),
      "zh-Hant": absoluteUrl(chinesePath),
      "x-default": absoluteUrl(englishPath)
    };

    return [
      {
        url: absoluteUrl(englishPath),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: englishPath === "/" ? 1 : 0.7,
        alternates: { languages }
      },
      {
        url: absoluteUrl(chinesePath),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: chinesePath === "/zh/" ? 1 : 0.7,
        alternates: { languages }
      }
    ];
  });

  const englishOnlyEntries: MetadataRoute.Sitemap = englishOnlyRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
    alternates: {
      languages: {
        en: absoluteUrl(path),
        "x-default": absoluteUrl(path)
      }
    }
  }));

  return [...pairedEntries, ...englishOnlyEntries];
}
