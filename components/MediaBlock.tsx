type MediaBlockProps = {
  type: string;
  title: string;
  href?: string;
  description?: string;
};

export function MediaBlock({
  type,
  title,
  href,
  description = "Watch on YouTube ↗"
}: MediaBlockProps) {
  const content = (
    <>
      <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{type}</p>
      <h3 className="mt-4 text-3xl font-normal">{title}</h3>
      <p className="mt-4 text-ink/68">{description}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="placeholder-field block min-h-64 p-7 transition-colors hover:bg-moss/60"
        aria-label={`${title} — ${description}`}
      >
        {content}
      </a>
    );
  }

  return <div className="placeholder-field min-h-64 p-7">{content}</div>;
}
