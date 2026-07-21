type MediaBlockProps = {
  type: string;
  title: string;
  href?: string;
  description?: string;
};

function getYouTubeThumbnail(href?: string) {
  if (!href) return undefined;

  const shortUrlMatch = href.match(/youtu\.be\/([^?&/]+)/);
  const standardUrlMatch = href.match(/[?&]v=([^?&/]+)/);
  const videoId = shortUrlMatch?.[1] ?? standardUrlMatch?.[1];

  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined;
}

export function MediaBlock({
  type,
  title,
  href,
  description = "Watch on YouTube ↗"
}: MediaBlockProps) {
  const thumbnail = getYouTubeThumbnail(href);
  const backgroundImage = thumbnail
    ? `linear-gradient(to top, rgba(8, 10, 8, 0.96) 0%, rgba(8, 10, 8, 0.5) 58%, rgba(8, 10, 8, 0.16) 100%), url("${thumbnail}")`
    : undefined;

  const content = (
    <div>
      <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{type}</p>
      <h3 className="mt-3 text-3xl font-normal text-ink">{title}</h3>
      <p className="mt-3 text-ink/75">{description}</p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="placeholder-field group relative isolate flex min-h-64 items-end overflow-hidden bg-cover bg-center [background-clip:padding-box] p-7 transition-colors duration-300"
        style={{ backgroundImage }}
        aria-label={`${title} — ${description}`}
      >
        <span className="sr-only">YouTube: </span>
        {content}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-0.5 bg-charcoal"
        />
      </a>
    );
  }

  return <div className="placeholder-field flex min-h-64 items-end p-7">{content}</div>;
}
