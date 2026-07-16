import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Chun-Chieh Yang",
  "Conductor and violinist Chun-Chieh Yang of Philharmonia Moments Musicaux."
);

export default function ChunChiehYangPage() {
  return (
    <Section eyebrow="Concertmaster / Assistant Conductor" title="Chun-Chieh Yang">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <figure className="overflow-hidden border border-white/15 bg-charcoal">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/chun-chieh-yang-en.jpg"
              alt="Chun-Chieh Yang"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </figure>
        <article className="foundational-prose">
          <p>
            Chun-Chieh Yang is the Concertmaster and Assistant Conductor of Philharmonia Moments
            Musicaux. He has previously served as the conductor and instructor of the
            orchestra&apos;s youth ensemble. He holds a Master&apos;s degree in Conducting from the
            Taipei National University of the Arts, where he originally majored in violin during his
            undergraduate years. Chun-Chieh Yang has participated in numerous masterclasses and
            chamber music workshops at the Taipei National University of the Arts and received
            recognition for his performances at the Shuan Yin Arts Festival Carnival.
          </p>
          <p>
            He has been fortunate to receive guidance from internationally renowned masters such as
            Keng-Yuen Tseng, Dmitri Berlinsky, the Great Wall String Quartet, American String
            Quartet, Quatuor Diotima, and the Szymanowski Quartet.
          </p>
          <p>
            After graduating, he actively engaged in orchestra performances, holding positions such
            as Concertmaster of the Yu-Yun Chamber Orchestra, Concertmaster of the 3E Youth
            Philharmonic Orchestra, violinist of Dream Lotus Symphony Orchestra, Vice-Principal of
            Feng Yuan Philharmonic String Chamber Orchestra, and guest musician with Evergreen
            Symphony Orchestra.
          </p>
          <p>
            Passionate about chamber music, in July 2023, he participated in the 1st OneSong
            International Chamber Music Competition and achieved second place. He also took part in
            the Musikalischer Sommer in Ostfriesland in Germany and had the opportunity to perform
            as a soloist and chamber musician during the closing concert.
          </p>
          <p>
            Currently, Chun-Chieh Yang is a violinist with the Basin String Quartet and serves as
            the conductor for the String Orchestra of Dong-Hu Elementary School and String Orchestra
            of Yong-He Elementary School. He is also a violin and viola teacher. He is frequently
            invited to perform with major symphony orchestras and is dedicated to promoting chamber
            music concerts throughout Taiwan.
          </p>
        </article>
      </div>
    </Section>
  );
}
