import type { MetadataRoute } from "next";
import { experiences } from "@/content/experiences";
import { ideas } from "@/content/ideas";
import { journalEntries } from "@/content/journal";

const siteUrl = "https://www.pmmtaiwan.org";

const routePairs = [
  ["/", "/zh"],
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
const peopleDetailRoutes = [
  "/people/chun-chieh-yang",
  "/people/paul-chiang",
  "/zh/people/chun-chieh-yang",
  "/zh/people/paul-chiang"
] as const;

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pairedEntries: MetadataRoute.Sitemap = routePairs.flatMap(([englishPath, chinesePath]) => {
    const languages = {
      en: absoluteUrl(englishPath),
      "zh-Hant": absoluteUrl(chinesePath),
      "x-default": absoluteUrl(englishPath)
    };

    return [
      {
        url: absoluteUrl(englishPath),
        changeFrequency: "weekly" as const,
        priority: englishPath === "/" ? 1 : 0.7,
        alternates: { languages }
      },
      {
        url: absoluteUrl(chinesePath),
        changeFrequency: "weekly" as const,
        priority: chinesePath === "/zh" ? 1 : 0.7,
        alternates: { languages }
      }
    ];
  });

  const englishOnlyEntries: MetadataRoute.Sitemap = englishOnlyRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly",
    priority: 0.7,
    alternates: {
      languages: {
        en: absoluteUrl(path),
        "x-default": absoluteUrl(path)
      }
    }
  }));

  const detailEntries: MetadataRoute.Sitemap = [
    ...experiences.map((experience) => `/experiences/${experience.slug}`),
    ...ideas.map((idea) => `/ideas/${idea.slug}`),
    ...journalEntries.map((entry) => `/journal/${entry.slug}`),
    ...peopleDetailRoutes
  ].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...pairedEntries, ...englishOnlyEntries, ...detailEntries];
}
