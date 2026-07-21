"use client";

import Image from "next/image";
import { useState } from "react";
import type { LatestNewsVideoConfig } from "@/content/latestNewsVideo";

type LatestNewsVideoFloatProps = {
  config: LatestNewsVideoConfig;
  locale: "en" | "zh";
};

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
    </svg>
  );
}

export function LatestNewsVideoFloat({ config, locale }: LatestNewsVideoFloatProps) {
  const [open, setOpen] = useState(true);

  if (!config.enabled || !config.youtubeUrl || !open) return null;

  const labels =
    locale === "zh"
      ? {
          close: "關閉影片視窗",
          open: "在 YouTube 開啟",
          image: "最新消息焦點影片海報"
        }
      : {
          close: "Close video window",
          open: "Open on YouTube",
          image: "Latest News featured video poster"
        };

  return (
    <aside className="fixed bottom-4 right-4 z-40 w-[calc(100vw-2rem)] max-w-[420px] overflow-hidden border border-white/20 bg-charcoal/94 shadow-2xl shadow-black/45 backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4 border-b border-white/15 px-4 py-3">
        <div>
          <p className="font-sans text-[0.68rem] uppercase tracking-[0.16em] text-brass">
            {config.title}
          </p>
          {config.caption ? (
            <p className="mt-1 text-sm leading-5 text-ink/68">{config.caption}</p>
          ) : null}
        </div>
        <button
          type="button"
          aria-label={labels.close}
          className="grid h-9 w-9 shrink-0 place-items-center border border-white/15 text-ink/70 transition-colors hover:border-brass hover:text-ink"
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <a
        href={config.youtubeUrl}
        target="_blank"
        rel="noreferrer"
        className="group block"
        aria-label={labels.open}
      >
        <div className="relative aspect-video bg-black">
          <Image
            src={config.posterImage}
            alt={labels.image}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="420px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-black/45 text-brass backdrop-blur-sm transition-colors group-hover:bg-brass group-hover:text-charcoal">
              <PlayIcon />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <p className="font-sans text-[0.68rem] uppercase tracking-[0.14em] text-ink/50">
            YouTube
          </p>
          <span className="inline-flex items-center gap-2 border border-brass px-3 py-2 font-sans text-[0.68rem] uppercase tracking-[0.12em] text-brass transition-colors group-hover:bg-brass group-hover:text-charcoal">
            <PlayIcon />
            {labels.open}
          </span>
        </div>
      </a>
    </aside>
  );
}
