import Link from "next/link";

type CardProps = {
  href?: string;
  eyebrow?: string;
  title: string;
  summary: string;
  meta?: string;
};

export function Card({ href, eyebrow, title, summary, meta }: CardProps) {
  const content = (
    <article className="h-full border border-white/15 bg-charcoal p-7 transition-colors hover:border-brass/70">
      {eyebrow ? (
        <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{eyebrow}</p>
      ) : null}
      <h3 className="mt-4 text-3xl font-normal leading-tight">{title}</h3>
      {meta ? (
        <p className="mt-3 font-sans text-xs uppercase tracking-[0.12em] text-ink/54">{meta}</p>
      ) : null}
      <p className="mt-5 text-base leading-7 text-ink/68">{summary}</p>
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
