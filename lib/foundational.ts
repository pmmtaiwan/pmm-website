import fs from "node:fs";
import path from "node:path";

export type Locale = "en" | "zh";
export type PublicationSlug = "manifesto" | "convictions" | "our-story";

export type FoundationalPublicationMeta = {
  id: PublicationSlug;
  slug: PublicationSlug;
  order: number;
  publicationVersion: string;
  title: Record<Locale, string>;
  navigationTitle: Record<Locale, string>;
  description: Record<Locale, string>;
  seoTitle: Record<Locale, string>;
  openGraph: {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
  };
  routes: Record<Locale, string>;
};

export type FoundationalPublication = {
  locale: Locale;
  meta: FoundationalPublicationMeta;
  body: string;
};

export const locales: Locale[] = ["en", "zh"];
export const publicationSlugs: PublicationSlug[] = ["manifesto", "convictions", "our-story"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "繁體中文"
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-Hant"
};

export const foundationalPublications: Record<PublicationSlug, FoundationalPublicationMeta> = {
  manifesto: {
    id: "manifesto",
    slug: "manifesto",
    order: 1,
    publicationVersion: "1.0",
    title: {
      en: "Our Manifesto",
      zh: "我們的宣言"
    },
    navigationTitle: {
      en: "Manifesto",
      zh: "宣言"
    },
    description: {
      en: "",
      zh: ""
    },
    seoTitle: {
      en: "Our Manifesto | Philharmonia Moments Musicaux",
      zh: "我們的宣言 | 樂興之時"
    },
    openGraph: {
      title: {
        en: "Our Manifesto | Philharmonia Moments Musicaux",
        zh: "我們的宣言 | 樂興之時"
      },
      description: {
        en: "Good Music. Period. A home for music that deserves to be heard.",
        zh: "就是要好音樂。讓值得被聽見的音樂有一個家。"
      }
    },
    routes: {
      en: "/manifesto",
      zh: "/zh/manifesto"
    }
  },
  convictions: {
    id: "convictions",
    slug: "convictions",
    order: 2,
    publicationVersion: "1.0",
    title: {
      en: "Our Convictions",
      zh: "我們的信念"
    },
    navigationTitle: {
      en: "Our Convictions",
      zh: "我們的信念"
    },
    description: {
      en: "Five questions that define why Philharmonia Moments Musicaux exists, how we make music, whom we hope to meet, and what we refuse to become.",
      zh: "五個問題，說明樂興之時為何存在、如何做音樂、想遇見什麼樣的聽眾，以及我們不願成為什麼。"
    },
    seoTitle: {
      en: "Our Convictions | Philharmonia Moments Musicaux",
      zh: "我們的信念 | 樂興之時"
    },
    openGraph: {
      title: {
        en: "Our Convictions | Philharmonia Moments Musicaux",
        zh: "我們的信念 | 樂興之時"
      },
      description: {
        en: "Why we exist. What makes us different. The music-making we believe in. The audience we hope to meet. What we refuse to become.",
        zh: "我們為何存在、相信什麼樣的音樂、期待遇見什麼樣的聽眾，以及我們不願成為什麼。"
      }
    },
    routes: {
      en: "/convictions",
      zh: "/zh/convictions"
    }
  },
  "our-story": {
    id: "our-story",
    slug: "our-story",
    order: 3,
    publicationVersion: "1.0",
    title: {
      en: "Our Story",
      zh: "我們的故事"
    },
    navigationTitle: {
      en: "Our Story",
      zh: "我們的故事"
    },
    description: {
      en: "",
      zh: ""
    },
    seoTitle: {
      en: "Our Story | Philharmonia Moments Musicaux",
      zh: "我們的故事 | 樂興之時"
    },
    openGraph: {
      title: {
        en: "Our Story | Philharmonia Moments Musicaux",
        zh: "我們的故事 | 樂興之時"
      },
      description: {
        en: "From 1998 to today, the story of an orchestra guided by one conviction: Good Music. Period.",
        zh: "從 1998 年至今，一個始終以好音樂為信念的樂團故事。"
      }
    },
    routes: {
      en: "/our-story",
      zh: "/zh/our-story"
    }
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isPublicationSlug(value: string): value is PublicationSlug {
  return publicationSlugs.includes(value as PublicationSlug);
}

export function getFoundationalPublication(
  locale: Locale,
  slug: PublicationSlug
): FoundationalPublication {
  const meta = foundationalPublications[slug];
  const sourcePath = path.join(process.cwd(), "content", "foundational", slug, `${locale}.mdx`);
  const source = fs.readFileSync(sourcePath, "utf8");
  const body = source.replace(/^---[\s\S]*?---\s*/, "").trim();

  return { locale, meta, body };
}

export function getPublicationNeighbors(slug: PublicationSlug) {
  const ordered = publicationSlugs
    .map((publicationSlug) => foundationalPublications[publicationSlug])
    .sort((a, b) => a.order - b.order);
  const index = ordered.findIndex((publication) => publication.slug === slug);

  return {
    previous: ordered[index - 1],
    next: ordered[index + 1]
  };
}
