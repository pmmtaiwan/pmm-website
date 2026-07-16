"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Locale = "en" | "zh";

type StoryEntry = {
  id: string;
  name: string;
  text: string;
  anonymous: boolean;
  createdAt: string;
};

type StoryChainBoardProps = {
  locale: Locale;
};

const copy = {
  en: {
    eyebrow: "Story Relay",
    title: "The next phrase is yours.",
    intro: [
      "Welcome to this playful game.",
      "Whether you are only passing by or staying awhile, leave a few lines and continue the imagination of the friend before you.",
      "You may write one sentence, a short prose fragment, a line of dialogue, a turn, a dream, or simply an image, then hand it to the next stranger.",
      "Perhaps, in the end, it will become a story. Perhaps a poem. Perhaps one day it will be set to music, read on stage, performed, or grow into theatre.",
      "No one knows where it will go. That is the fun of it.",
      "May everyone who arrives here become one of the co-creators of this work."
    ],
    guidelinesTitle: "Submission Notes",
    guidelines: [
      "Please continue from the previous entry so the story or text can grow naturally.",
      "Please keep the content friendly, respectful, and original.",
      "By submitting, you agree that this website may later organize, excerpt, adapt, publish, read aloud, set to music, perform, or otherwise publicly present your text. Editing may be applied when necessary. We will preserve your name whenever possible, or keep it anonymous if you choose that setting."
    ],
    thanks: "Thank you for helping this story grow naturally. The next sentence begins with you.",
    latest: "Previous entry",
    empty: "No one has started yet. You can open the first phrase.",
    name: "Name",
    anonymous: "Post anonymously",
    contribution: "Your continuation",
    consent: "I have read and agree to the submission notes.",
    submit: "Add to the story",
    by: "by",
    anonymousName: "Anonymous friend",
    time: "Time",
    archive: "Growing text",
    placeholder: "Continue from the previous entry..."
  },
  zh: {
    eyebrow: "故事接龍",
    title: "下一個樂句，交給你！",
    intro: [
      "歡迎來到這個好玩的遊戲！",
      "路過與否，請你留下幾行文字，接續上一位朋友的想像。",
      "你可以寫一句話、一小段散文、一段對話、一個轉折、一個夢境，甚至只是一個畫面，把它交給下一位陌生人。",
      "也許最後，它會成為一篇小說；也許，是一首詩；也許，有一天，它會配上一段音樂，在舞台上被朗讀、演奏，甚至長成一齣戲。",
      "沒有人知道它會走向哪裡，多麼有趣！",
      "願每一位來到這裡的人，都成為這部作品的一位共同創作者！"
    ],
    guidelinesTitle: "投稿須知",
    guidelines: [
      "每次請接續前一則內容，讓故事或文字自然延伸。",
      "內容請保持友善、尊重與原創。",
      "投稿即表示您同意本網站得於未來整理、節錄、改編、出版、朗讀、配樂、演出或以其他形式公開發表您的文字；必要時將進行編輯整理。我們將盡可能保留您的署名，或依您的設定匿名。"
    ],
    thanks: "謝謝你，讓這個故事自然生長！下一句，就從你開始！",
    latest: "上一則內容",
    empty: "目前還沒有人開始。你可以寫下第一個樂句。",
    name: "署名",
    anonymous: "匿名投稿",
    contribution: "你的接續",
    consent: "我已閱讀並同意投稿須知。",
    submit: "加入故事",
    by: "來自",
    anonymousName: "匿名朋友",
    time: "時間",
    archive: "正在生長的文字",
    placeholder: "請接續上一則內容..."
  }
} as const;

function formatTime(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-TW" : "en", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export function StoryChainBoard({ locale }: StoryChainBoardProps) {
  const t = copy[locale];
  const storageKey = `pmm-story-chain-${locale}`;
  const [entries, setEntries] = useState<StoryEntry[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setEntries(JSON.parse(saved));
  }, [storageKey]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(entries));
  }, [entries, storageKey]);

  const latest = useMemo(() => entries[entries.length - 1], [entries]);

  function submitEntry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || !accepted) return;

    setEntries((current) => [
      ...current,
      {
        id: `story-${Date.now()}`,
        name: name.trim(),
        text: trimmed,
        anonymous,
        createdAt: new Date().toISOString()
      }
    ]);
    setText("");
    setName("");
    setAnonymous(false);
    setAccepted(false);
  }

  function displayName(entry: StoryEntry) {
    if (entry.anonymous || !entry.name.trim()) return t.anonymousName;
    return entry.name;
  }

  return (
    <div className="grid gap-5">
      <section className="border border-white/15 bg-charcoal p-6 md:p-8">
        <div className="grid gap-4 text-lg leading-8 text-ink/74">
          {t.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[0.82fr_1fr]">
        <aside className="placeholder-field p-6 md:p-8">
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
            {t.guidelinesTitle}
          </p>
          <ul className="mt-6 grid gap-4 text-sm leading-6 text-ink/68">
            {t.guidelines.map((item) => (
              <li key={item} className="border-b border-white/12 pb-4 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-7 text-brass">{t.thanks}</p>
        </aside>

        <section className="border border-white/15 bg-charcoal p-6 md:p-8">
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{t.latest}</p>
          <blockquote className="mt-5 min-h-28 border-l border-brass pl-5 text-2xl leading-snug text-ink/82 md:text-3xl">
            {latest ? latest.text : t.empty}
          </blockquote>
          {latest ? (
            <p className="mt-4 font-sans text-xs uppercase tracking-[0.12em] text-ink/48">
              {t.by} {displayName(latest)} / {formatTime(latest.createdAt, locale)}
            </p>
          ) : null}

          <form onSubmit={submitEntry} className="mt-8 grid gap-4">
            <label className="grid gap-2 font-sans text-xs uppercase tracking-[0.12em] text-ink/58">
              {t.name}
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                disabled={anonymous}
                className="border border-white/15 bg-black/20 px-4 py-3 font-serif text-base normal-case tracking-normal text-ink outline-none transition-colors disabled:opacity-45 focus:border-brass"
              />
            </label>
            <label className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.12em] text-ink/64">
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(event) => setAnonymous(event.target.checked)}
                className="h-4 w-4 accent-brass"
              />
              {t.anonymous}
            </label>
            <label className="grid gap-2 font-sans text-xs uppercase tracking-[0.12em] text-ink/58">
              {t.contribution}
              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                rows={7}
                placeholder={t.placeholder}
                className="resize-none border border-white/15 bg-black/20 px-4 py-3 font-serif text-base normal-case leading-7 tracking-normal text-ink outline-none transition-colors placeholder:text-ink/36 focus:border-brass"
              />
            </label>
            <label className="flex items-start gap-3 text-sm leading-6 text-ink/64">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-brass"
              />
              {t.consent}
            </label>
            <button
              type="submit"
              disabled={!text.trim() || !accepted}
              className="w-fit border border-brass px-5 py-3 font-sans text-xs uppercase tracking-[0.14em] text-brass transition-colors hover:bg-brass hover:text-charcoal disabled:cursor-not-allowed disabled:border-white/20 disabled:text-ink/36 disabled:hover:bg-transparent"
            >
              {t.submit}
            </button>
          </form>
        </section>
      </div>

      <section>
        <p className="mb-5 font-sans text-xs uppercase tracking-[0.16em] text-brass">{t.archive}</p>
        <div className="grid gap-px bg-white/15">
          {entries.length ? (
            entries.map((entry, index) => (
              <article key={entry.id} className="bg-charcoal p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-sans text-xs uppercase tracking-[0.14em] text-brass">
                    #{index + 1} / {t.by} {displayName(entry)}
                  </p>
                  <p className="font-sans text-[0.68rem] uppercase tracking-[0.12em] text-ink/45">
                    {t.time}: {formatTime(entry.createdAt, locale)}
                  </p>
                </div>
                <p className="mt-4 whitespace-pre-line text-xl leading-8 text-ink/76">
                  {entry.text}
                </p>
              </article>
            ))
          ) : (
            <p className="bg-charcoal p-5 text-ink/56">{t.empty}</p>
          )}
        </div>
      </section>
    </div>
  );
}
