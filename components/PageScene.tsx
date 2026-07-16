import Image from "next/image";

type PageSceneProps = {
  eyebrow: string;
  title: string;
  body?: string;
  image: string;
  imageAlt: string;
  previewImage?: string;
  previewImageAlt?: string;
  caption?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  tone?: "public" | "quiet" | "immersive";
};

const toneStyles = {
  public: {
    shell: "from-teal/80 via-charcoal/88 to-wine/62",
    accent: "bg-brass",
    text: "text-brass"
  },
  quiet: {
    shell: "from-charcoal/95 via-moss/75 to-charcoal/86",
    accent: "bg-paper",
    text: "text-paper"
  },
  immersive: {
    shell: "from-charcoal/92 via-wine/72 to-teal/80",
    accent: "bg-brass",
    text: "text-brass"
  }
} as const;

export function PageScene({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  previewImage,
  previewImageAlt,
  caption,
  secondaryImage,
  secondaryImageAlt = "",
  tone = "quiet"
}: PageSceneProps) {
  const style = toneStyles[tone];
  const figureImage = previewImage ?? image;
  const figureAlt = previewImageAlt ?? imageAlt;

  return (
    <header className="relative overflow-hidden border-b border-white/15 px-5 pb-16 pt-32 md:px-10 md:pb-24 lg:px-14">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority className="object-cover opacity-42" sizes="100vw" />
        <div className={`absolute inset-0 bg-gradient-to-br ${style.shell}`} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-site gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.7fr)] lg:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className={`h-px w-10 ${style.accent}`} />
            <p className={`font-sans text-xs uppercase tracking-[0.18em] ${style.text}`}>
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-6 max-w-5xl text-5xl font-normal leading-none md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {body ? (
            <p className="mt-8 max-w-3xl text-xl leading-8 text-ink/78 md:text-2xl">{body}</p>
          ) : null}
        </div>

        <div className="grid gap-4">
          <figure className="overflow-hidden border border-white/18 bg-charcoal/45 shadow-2xl shadow-black/35 backdrop-blur-sm">
            <div className="relative aspect-[5/3]">
              <Image
                src={figureImage}
                alt={figureAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 100vw"
              />
            </div>
            {caption ? (
              <figcaption className="border-t border-white/12 px-4 py-3 font-sans text-xs uppercase tracking-[0.14em] text-ink/55">
                {caption}
              </figcaption>
            ) : null}
          </figure>
          {secondaryImage ? (
            <div className="relative ml-auto hidden aspect-[7/3] w-3/4 border border-white/18 opacity-86 shadow-xl shadow-black/30 md:block">
              <Image
                src={secondaryImage}
                alt={secondaryImageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 315px, 75vw"
              />
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
