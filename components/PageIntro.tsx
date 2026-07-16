type PageIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function PageIntro({
  eyebrow,
  title,
  body = "More details will be shared as the project develops."
}: PageIntroProps) {
  return (
    <header className="border-b border-white/15 px-5 pb-16 pt-36 md:px-10 md:pb-24 lg:px-14">
      <div className="mx-auto max-w-site">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-brass">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-normal leading-none md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-ink/72 md:text-2xl">{body}</p>
      </div>
    </header>
  );
}
