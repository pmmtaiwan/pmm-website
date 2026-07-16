import Link from "next/link";

type CTAProps = {
  title: string;
  body?: string;
  href: string;
  label: string;
};

export function CTA({
  title,
  body = "More details will be shared as they are confirmed.",
  href,
  label
}: CTAProps) {
  return (
    <div className="grid gap-8 border-y border-white/15 py-10 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <h2 className="text-4xl font-normal leading-tight md:text-6xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-ink/70">{body}</p>
      </div>
      <Link
        href={href}
        className="w-fit border-b border-brass pb-1 font-sans text-xs uppercase tracking-[0.14em]"
      >
        {label}
      </Link>
    </div>
  );
}
