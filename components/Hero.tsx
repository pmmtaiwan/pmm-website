import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  cta?: { label: string; href: string };
  compact?: boolean;
  luminous?: boolean;
};

export function Hero({
  title,
  subtitle,
  eyebrow,
  image,
  cta,
  compact = false,
  luminous = false
}: HeroProps) {
  return (
    <section
      className={`relative isolate grid overflow-hidden border-b border-white/15 ${
        compact ? "min-h-[58vh] pt-28" : "min-h-[94vh] pt-28"
      }`}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority={!compact}
          sizes="100vw"
          className={`absolute inset-0 -z-20 object-cover saturate-[0.92] contrast-105 ${
            luminous ? "brightness-[1.08]" : ""
          }`}
        />
      ) : (
        <div className="absolute inset-0 -z-20 placeholder-field" />
      )}
      <div
        className={`absolute inset-0 -z-10 ${
          luminous
            ? "bg-[linear-gradient(90deg,rgba(16,16,14,.68),rgba(16,16,14,.28)_48%,rgba(16,16,14,.08)),linear-gradient(0deg,rgba(16,16,14,.66),rgba(16,16,14,.02)_52%,rgba(16,16,14,.34))]"
            : "bg-[linear-gradient(90deg,rgba(16,16,14,.86),rgba(16,16,14,.44)_48%,rgba(16,16,14,.16)),linear-gradient(0deg,rgba(16,16,14,.9),rgba(16,16,14,.06)_52%,rgba(16,16,14,.56))]"
        }`}
      />
      <div className="mx-auto grid w-full max-w-site content-center px-5 py-16 md:px-10 lg:px-14">
        {eyebrow ? (
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass">{eyebrow}</p>
        ) : null}
        <h1
          className={`mt-5 max-w-5xl font-serif font-normal leading-[0.9] tracking-normal ${
            compact ? "text-5xl md:text-7xl" : "text-[4.8rem] md:text-[9rem] lg:text-[11rem]"
          }`}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-2xl leading-tight text-ink/82 md:text-4xl">
            {subtitle}
          </p>
        ) : null}
        {cta ? (
          <Link
            href={cta.href}
            className="mt-10 w-fit border-b border-brass pb-1 font-sans text-xs uppercase tracking-[0.14em]"
          >
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
