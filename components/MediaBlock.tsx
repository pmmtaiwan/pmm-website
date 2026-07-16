type MediaBlockProps = {
  type: string;
  title: string;
  description?: string;
};

export function MediaBlock({
  type,
  title,
  description = "Media will be added as recordings, video, and archive material become available."
}: MediaBlockProps) {
  return (
    <div className="placeholder-field min-h-64 p-7">
      <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{type}</p>
      <h3 className="mt-4 text-3xl font-normal">{title}</h3>
      <p className="mt-4 text-ink/68">{description}</p>
    </div>
  );
}
