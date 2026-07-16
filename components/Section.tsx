type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section
      className={`border-b border-white/15 px-5 py-20 md:px-10 md:py-28 lg:px-14 ${className}`}
    >
      <div className="mx-auto max-w-site">
        {title || eyebrow ? (
          <div className="mb-12 grid gap-6 md:grid-cols-[190px_1fr]">
            {eyebrow ? (
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass">{eyebrow}</p>
            ) : (
              <span />
            )}
            {title ? (
              <h2 className="max-w-4xl text-4xl font-normal leading-none md:text-6xl lg:text-7xl">
                {title}
              </h2>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
