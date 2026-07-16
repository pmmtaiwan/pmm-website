import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Paul Ching-Po Chiang",
  "Founder and Artistic Director of Philharmonia Moments Musicaux."
);

export default function PaulChiangPage() {
  return (
    <>
      <Section eyebrow="Founder / Artistic Director" title="Paul Ching-Po Chiang">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <figure className="overflow-hidden border border-white/15 bg-charcoal">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/paul-chiang-en.jpg"
                alt="Paul Ching-Po Chiang"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
          </figure>
          <article className="foundational-prose">
            <p>
              Maestro Chiang received his Master of Music in Orchestral Conducting from the
              University of Southern California, studying with Prof. Daniel Lewis. He was a
              Tanglewood Conducting Fellow in 1995, and is the Founder and Artistic Director of
              Philharmonia Moments Musicaux (PMM).
            </p>
            <p>
              In September 2002, he participated in the inaugural International Sir Georg Solti
              Competition for Conductors in Frankfurt, Germany and won Third Prize. Maestro Chiang
              was invited to open the prestigious Young Euro Classic Festival in Berlin with his own
              PMM in 2008.
            </p>
            <p>
              Major orchestras that Maestro Chiang has conducted include the Danish National Radio
              Symphony Orchestra, Frankfurt Opera and Museum Orchestra, Staatsphilharmonie
              Rheinland-Pfalz, Thessaloniki State Symphony Orchestra, the Israel Symphony Orchestra,
              the Arena di Verona Orchestra, the Teatro Verdi Trieste Orchestra, the Orquesta
              Sinfonica del Estado de Mexico, Staatskapelle Halle, Bogota Philharmonic of Colombia,
              National Symphony Orchestra of Taiwan, National Taiwan Symphony Orchestra, Kaohsiung
              City Symphony Orchestra, Taipei Symphony Orchestra, and National Chinese Orchestra
              Taiwan, among others.
            </p>
            <p>
              He was Principal Guest Conductor of Greece&apos;s leading orchestra, the Thessaloniki
              State Symphony Orchestra, from 2015 to 2017. From 2020 until 2024, Maestro Chiang
              served as Music Director of National Chinese Orchestra Taiwan. Maestro Chiang is also
              a dedicated pedagogue and a devoted classic car restorer.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
