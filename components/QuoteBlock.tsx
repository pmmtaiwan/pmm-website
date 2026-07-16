type QuoteBlockProps = {
  quote: string;
  cite?: string;
};

export function QuoteBlock({ quote, cite }: QuoteBlockProps) {
  return (
    <figure className="border-l border-brass pl-7">
      <blockquote className="text-3xl leading-tight text-paper md:text-5xl">{quote}</blockquote>
      {cite ? (
        <figcaption className="mt-5 font-sans text-xs uppercase tracking-[0.16em] text-ink/56">
          {cite}
        </figcaption>
      ) : null}
    </figure>
  );
}
