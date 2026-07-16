"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Locale = "en" | "zh";

type ConversationMessage = {
  id: string;
  author: "visitor" | "admin";
  name: string;
  message: string;
  createdAt: string;
};

type ConversationBoardProps = {
  locale: Locale;
};

const labels = {
  en: {
    title: "Leave a message",
    subtitle:
      "Visitors can begin a public-facing conversation here. The permanent version should connect to a database before launch.",
    name: "Name",
    message: "Message",
    send: "Post message",
    admin: "PMM reply",
    adminName: "PMM",
    reply: "Reply as site manager",
    empty: "No messages yet.",
    timestamp: "Time",
    adminMode: "Manager reply area"
  },
  zh: {
    title: "留下訊息",
    subtitle: "來訪者可以先在這裡開啟對話。正式上線前，這個區塊應接上資料庫或後台服務。",
    name: "姓名",
    message: "留言內容",
    send: "送出留言",
    admin: "樂興之時回覆",
    adminName: "樂興之時",
    reply: "以網站管理者身分回覆",
    empty: "目前尚無留言。",
    timestamp: "時間",
    adminMode: "管理者回覆區"
  }
} as const;

function formatTime(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-TW" : "en", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export function ConversationBoard({ locale }: ConversationBoardProps) {
  const t = labels[locale];
  const storageKey = `pmm-conversation-${locale}`;
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [adminReply, setAdminReply] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setMessages(JSON.parse(saved));
  }, [storageKey]);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages, storageKey]);

  const latestVisitor = useMemo(
    () => [...messages].reverse().find((item) => item.author === "visitor"),
    [messages]
  );

  function addMessage(author: ConversationMessage["author"], displayName: string, text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      {
        id: `${author}-${Date.now()}`,
        author,
        name: displayName.trim() || (author === "admin" ? t.adminName : "Guest"),
        message: trimmed,
        createdAt: new Date().toISOString()
      }
    ]);
  }

  function submitVisitor(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addMessage("visitor", name, message);
    setMessage("");
  }

  function submitAdmin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addMessage("admin", t.adminName, adminReply);
    setAdminReply("");
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
      <section className="border border-white/15 bg-charcoal p-6 md:p-8">
        <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{t.title}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-ink/62">{t.subtitle}</p>
        <form onSubmit={submitVisitor} className="mt-8 grid gap-4">
          <label className="grid gap-2 font-sans text-xs uppercase tracking-[0.12em] text-ink/58">
            {t.name}
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="border border-white/15 bg-black/20 px-4 py-3 font-serif text-base normal-case tracking-normal text-ink outline-none transition-colors focus:border-brass"
            />
          </label>
          <label className="grid gap-2 font-sans text-xs uppercase tracking-[0.12em] text-ink/58">
            {t.message}
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              className="resize-none border border-white/15 bg-black/20 px-4 py-3 font-serif text-base normal-case leading-7 tracking-normal text-ink outline-none transition-colors focus:border-brass"
            />
          </label>
          <button
            type="submit"
            className="w-fit border border-brass px-5 py-3 font-sans text-xs uppercase tracking-[0.14em] text-brass transition-colors hover:bg-brass hover:text-charcoal"
          >
            {t.send}
          </button>
        </form>
      </section>

      <section className="placeholder-field p-6 md:p-8">
        <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{t.adminMode}</p>
        <form onSubmit={submitAdmin} className="mt-6 grid gap-4">
          <textarea
            value={adminReply}
            onChange={(event) => setAdminReply(event.target.value)}
            rows={4}
            placeholder={latestVisitor ? `${t.reply}: ${latestVisitor.name}` : t.reply}
            className="resize-none border border-white/15 bg-black/20 px-4 py-3 text-base leading-7 text-ink outline-none transition-colors placeholder:text-ink/36 focus:border-brass"
          />
          <button
            type="submit"
            className="w-fit border border-white/20 px-5 py-3 font-sans text-xs uppercase tracking-[0.14em] text-ink/76 transition-colors hover:border-brass hover:text-brass"
          >
            {t.admin}
          </button>
        </form>
      </section>

      <section className="lg:col-span-2">
        <div className="grid gap-px bg-white/15">
          {messages.length ? (
            messages.map((item) => (
              <article
                key={item.id}
                className={item.author === "admin" ? "bg-moss/55 p-5" : "bg-charcoal p-5"}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-2xl">{item.name}</p>
                  <p className="font-sans text-[0.68rem] uppercase tracking-[0.12em] text-ink/45">
                    {t.timestamp}: {formatTime(item.createdAt, locale)}
                  </p>
                </div>
                <p className="mt-3 whitespace-pre-line leading-7 text-ink/72">{item.message}</p>
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
