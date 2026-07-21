import type { Metadata } from "next";
import Image from "next/image";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { SocialIconLinks } from "@/components/SocialIconLinks";

export const metadata: Metadata = {
  title: "聆賞 | 樂興之時",
  description: "樂興之時的錄音、影像與社群頻道。",
  alternates: {
    canonical: "/zh/experiences",
    languages: {
      en: "/experiences",
      "zh-Hant": "/zh/experiences"
    }
  }
};

const videos = [
  {
    label: "排練",
    href: "https://youtu.be/rsg49m1GYLA?si=O3tOJBUttbEpgJDy",
    image: "/images/page-themes/experience-projection-hall.jpg"
  },
  {
    label: "演出剪影",
    href: "https://youtu.be/lmy2MGcTc6c?si=njRYJSG1kW3eSJ3f",
    image: "/images/page-themes/experience-quartet-light.jpg"
  }
];

const socialChannels = [
  { label: "Facebook", kind: "facebook" as const, href: "https://www.facebook.com/momentmusical/" },
  {
    label: "Instagram",
    kind: "instagram" as const,
    href: "https://www.instagram.com/philharmonia_moments_musicaux/"
  },
  { label: "LINE", kind: "line" as const, href: "https://line.me/R/ti/p/%40ayj4735a" },
  { label: "YouTube", kind: "youtube" as const, href: "https://www.youtube.com/@PMM1998" }
];

export default function ChineseExperiencesPage() {
  return (
    <>
      <PageScene
        eyebrow="聆賞"
        title="進到我們的現場!"
        body="錄音、影像與社群頻道，讓你從不同入口進入樂興之時的現場。"
        image="/images/page-themes/experience-projection-hall.jpg"
        imageAlt="投影與燈光中的演出現場"
        secondaryImage="/images/page-themes/experience-quartet-light.jpg"
        secondaryImageAlt="弦樂四重奏演出現場"
        caption="聽見現場，也看見現場。"
        tone="immersive"
      />

      <Section eyebrow="聆賞" title="聽聽我們 看看我們">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="border border-white/15 bg-charcoal p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">Recording</p>
            <h2 className="mt-4 text-4xl font-normal">聽見樂興</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {[
                { label: "Spotify", src: "/images/listening-spotify-qr.png" },
                { label: "Apple Music", src: "/images/listening-apple-qr.png" }
              ].map((item) => (
                <figure key={item.label} className="bg-paper p-4 text-charcoal">
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={`${item.label} QR Code`}
                      fill
                      className="object-contain"
                      sizes="220px"
                    />
                  </div>
                  <figcaption className="mt-3 text-center font-sans text-xs uppercase tracking-[0.14em]">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>

          <article className="placeholder-field p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">Video</p>
            <h2 className="mt-4 text-4xl font-normal">看見現場</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {videos.map((video) => (
                <a
                  key={video.href}
                  href={video.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden border border-white/15 bg-charcoal"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={video.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <span className="absolute left-4 top-4 border border-brass bg-charcoal/70 px-3 py-2 font-sans text-xs uppercase tracking-[0.14em] text-brass">
                      YouTube
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-3xl font-normal">{video.label}</h3>
                  </div>
                </a>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section eyebrow="社群頻道">
        <article className="flex min-h-40 items-center justify-center border border-white/15 bg-charcoal p-7">
          <SocialIconLinks channels={socialChannels} />
        </article>
      </Section>
    </>
  );
}
