import type { Locale } from "@/lib/foundational";

export type LatestNewsVideoConfig = {
  enabled: boolean;
  youtubeId: string;
  youtubeUrl: string;
  posterImage: string;
  title: string;
  caption?: string;
};

export const latestNewsVideoByLocale: Record<Locale, LatestNewsVideoConfig> = {
  en: {
    enabled: true,
    youtubeId: "B7XEOa_TX28",
    youtubeUrl: "https://www.youtube.com/watch?v=B7XEOa_TX28",
    posterImage: "/images/page-themes/post-apocalypse-bliss-video-poster.png",
    title: "Post-Apocalypse Bliss",
    caption: "Open the featured video on YouTube."
  },
  zh: {
    enabled: true,
    youtubeId: "B7XEOa_TX28",
    youtubeUrl: "https://www.youtube.com/watch?v=B7XEOa_TX28",
    posterImage: "/images/page-themes/post-apocalypse-bliss-video-poster.png",
    title: "《末世後 狂喜》"
  }
};
