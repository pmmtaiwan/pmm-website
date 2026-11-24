import type { Locale } from "@/lib/foundational";

export type LatestNewsEvent = {
  date: string;
  time: string;
  place: string;
};

export type LatestNewsFeature = {
  title: string;
  scheduleLabel: string;
  events: LatestNewsEvent[];
  body: string[];
};

export const latestNewsFeatureByLocale: Record<Locale, LatestNewsFeature> = {
  en: {
    title: "Rehearing Beethoven – from piano sonatas to string quartet S.1",
    scheduleLabel: "Concerts",
    events: [
      {
        date: "Saturday, 13 March 2027",
        time: "19:30",
        place: "National Recital Hall"
      },
      {
        date: "Saturday, 10 April 2027",
        time: "16:00",
        place: "Hsinchu County Performance Hall"
      },
      {
        date: "Saturday, 4 December 2027",
        time: "16:00",
        place: "Hsinchu County Performance Hall"
      }
    ],
    body: [
      "Beethoven’s thirty-two piano sonatas have long stood at the heart of the piano repertoire. But must they belong to the piano alone?",
      "Then there are the sixteen string quartets—works revered by generations of quartet players as their musical scripture. And yet, we sometimes find ourselves wishing: if only Beethoven had written more.",
      "These two questions inspired Paul Chiang, Artistic Director of Philharmonia Moments Musicaux, to embark on an ambitious undertaking: to reimagine all thirty-two piano sonatas for string quartet.",
      "The aim is not simply to transfer the music from one medium to another. Rather, it is to illuminate the polyphonic thinking concealed within the piano texture, allowing these works to acquire a different form of life through the voices of the string quartet.",
      "The Chinese title, 重聽貝多芬, turns on a deliberate ambiguity. When 重 is pronounced in the fourth tone, it evokes Beethoven’s hearing loss and the adversities that marked his life. In the second tone, it means “to hear again”—expressing both the purpose and the aspiration of this project: to listen to Beethoven anew.",
      "This is conceived as a long-term undertaking. The works that gradually emerge from it will not be regarded merely as “arrangements.” The process of their creation, performance, and continued exploration is itself an experiment—an inquiry into Beethoven’s musical thought, and into what may be revealed when familiar music is heard again through another body of sound."
    ]
  },
  zh: {
    title: "序章—重聽貝多芬 S.1",
    scheduleLabel: "演出場次",
    events: [
      {
        date: "2027年3月13日（六）",
        time: "19:30",
        place: "國家演奏廳"
      },
      {
        date: "2027年4月10日（六）",
        time: "16:00",
        place: "新竹縣演藝廳"
      },
      {
        date: "2027年12月4日（六）",
        time: "16:00",
        place: "新竹縣演藝廳"
      }
    ],
    body: [
      "貝多芬三十二首鋼琴奏鳴曲，向來被視為鋼琴文獻的核心。然而，它們是否只能屬於鋼琴？",
      "而那所有的弦樂四重奏團都視為聖經般的十六首弦樂四重奏，我們有時候卻又不免思忖：要是他再多寫一些，多好？",
      "受到上述命題啟發，樂興藝術總監江靖波決意著手進行這個宏大的計畫，將貝多芬的三十二首鋼琴奏鳴曲重新為弦樂四重奏改編。其目的並非單純移植，而是試圖以弦樂四重奏這個載體點亮隱藏於鋼琴織體中的多聲部思維，使作品以另一種聲音媒介獲得不同的生命樣態。",
      "標題《重聽貝多芬》之「重」既唸四聲，更唸二聲，具有雙重意義。「四聲」追想貝多芬的逆境人生，「二聲」彰顯本計畫的企圖與願景。",
      "這個長期的計畫並不將這些即將陸續降生的成品視為「改編版」，而是將過程與後續發表視作一項音樂思維的剖析與實驗。"
    ]
  }
};
