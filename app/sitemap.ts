import type { MetadataRoute } from "next";

const siteUrl = "https://www.pmmtaiwan.org";

const englishRoutes = [
  "",
  "/manifesto",
  "/convictions",
  "/our-story",
  "/philosophy",
  "/experiences",
  "/ideas",
  "/journal",
  "/listen",
  "/people",
  "/archive",
  "/support",
  "/about",
  "/contact",
  "/rent"
];

const chineseRoutes = [
  "/zh",
  "/zh/manifesto",
  "/zh/convictions",
  "/zh/our-story",
  "/zh/experiences",
  "/zh/ideas",
  "/zh/journal",
  "/zh/listen",
  "/zh/people",
  "/zh/archive",
  "/zh/support",
  "/zh/about",
  "/zh/contact",
  "/zh/rent"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...englishRoutes, ...chineseRoutes].map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" || route === "/zh" ? 1 : 0.7
  }));
}
