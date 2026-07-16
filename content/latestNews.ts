import type { Locale } from "@/lib/foundational";

export type LatestNewsFeature = {
  title: string;
  timeLabel: string;
  time: string;
  placeLabel: string;
  place: string;
  programLabel: string;
  program: string[];
  performersLabel: string;
  performers: string[];
  videoLabel: string;
  youtubeUrl: string;
};

export const latestNewsFeatureByLocale: Record<Locale, LatestNewsFeature> = {
  en: {
    title: "Post-Apocalypse Bliss",
    timeLabel: "Time",
    time: "11 September 2026, 21:11",
    placeLabel: "Place",
    place: "Taipei Bioinnovation Park Multipurpose Hall",
    programLabel: "Program",
    program: [
      "Max Richter, Recomposed: Vivaldi - The Four Seasons (Taiwan Premiere)",
      "Max Richter, On the Nature of Daylight"
    ],
    performersLabel: "Performers",
    performers: [
      "Violin Solo: Simos Papanas, Director and Concertmaster, Thessaloniki State Symphony Orchestra",
      "Paul Chiang, Conductor",
      "Philharmonia Moments Musicaux"
    ],
    videoLabel: "Watch the featured video",
    youtubeUrl: "https://www.youtube.com/watch?v=B7XEOa_TX28"
  },
  zh: {
    title: "末世後 狂喜",
    timeLabel: "時間",
    time: "2026年9月11日 21:11",
    placeLabel: "地點",
    place: "台北生技園區多功能廳",
    programLabel: "演出內容",
    program: ["麥斯・李希特《重構四季》（台灣首演）", "麥斯・李希特《關於光之本質》"],
    performersLabel: "演出者",
    performers: [
      "希臘國立塞薩洛尼基交響樂團首席小提琴家 希莫帕帕納 Simos Papanas",
      "江靖波 指揮",
      "【樂興之時】"
    ],
    videoLabel: "觀看焦點影片",
    youtubeUrl: "https://www.youtube.com/watch?v=B7XEOa_TX28"
  }
};
