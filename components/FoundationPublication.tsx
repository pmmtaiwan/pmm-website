import Link from "next/link";
import { PageScene } from "@/components/PageScene";
import {
  foundationalPublications,
  getPublicationNeighbors,
  localeHtmlLang,
  localeLabels,
  type FoundationalPublication,
  type Locale
} from "@/lib/foundational";

type ComponentBlockName =
  | "CanonicalSlogan"
  | "InstitutionalIdentity"
  | "EditorialQuestion"
  | "EditorialPause"
  | "Signature";

type MdxBlock =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "component"; name: ComponentBlockName; text: string };

type PageSceneData = {
  eyebrow: string;
  title: string;
  body: string;
  caption?: string;
  image: string;
  imageAlt: string;
  previewImage?: string;
  previewImageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
};

const blockTags = [
  "CanonicalSlogan",
  "InstitutionalIdentity",
  "EditorialQuestion",
  "EditorialPause",
  "Signature"
] as const;

function parsePublicationBody(body: string): MdxBlock[] {
  const lines = body.split(/\r?\n/);
  const blocks: MdxBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const tagName = blockTags.find((tag) => line.trim() === `<${tag}>`);
    if (tagName) {
      const closeTag = `</${tagName}>`;
      const content: string[] = [];
      index += 1;

      while (index < lines.length && lines[index].trim() !== closeTag) {
        content.push(lines[index]);
        index += 1;
      }

      blocks.push({ type: "component", name: tagName, text: content.join("\n").trim() });
      index += 1;
      continue;
    }

    const inlineTag = blockTags.find(
      (tag) => line.trim().startsWith(`<${tag}>`) && line.trim().endsWith(`</${tag}>`)
    );
    if (inlineTag) {
      blocks.push({
        type: "component",
        name: inlineTag,
        text: line.trim().replace(`<${inlineTag}>`, "").replace(`</${inlineTag}>`, "")
      });
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", text: line.replace("# ", "") });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.replace("## ", "") });
      index += 1;
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim()) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraph.join("\n") });
  }

  return blocks;
}

function PublicationBlock({ block }: { block: MdxBlock }) {
  if (block.type === "h1") return null;

  if (block.type === "h2") {
    return <h2 className="mt-16 text-3xl font-normal leading-tight md:text-5xl">{block.text}</h2>;
  }

  if (block.type === "component") {
    if (block.name === "CanonicalSlogan") {
      return (
        <p className="my-12 max-w-4xl text-6xl font-normal leading-none text-brass md:text-8xl lg:text-9xl">
          {block.text}
        </p>
      );
    }

    if (block.name === "InstitutionalIdentity") {
      return (
        <div className="my-12 border-y border-white/15 py-8 font-sans text-sm uppercase leading-8 tracking-[0.14em] text-ink/72">
          {block.text.split("\n").map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      );
    }

    if (block.name === "EditorialQuestion") {
      return (
        <blockquote className="my-12 border-l border-brass pl-6 text-3xl leading-tight text-ink md:text-5xl">
          {block.text}
        </blockquote>
      );
    }

    if (block.name === "EditorialPause") {
      return (
        <div className="my-16 max-w-xl text-4xl leading-tight text-brass md:text-6xl">
          {block.text.split("\n").map((line) => (
            <p key={line} className="mt-5 first:mt-0">
              {line}
            </p>
          ))}
        </div>
      );
    }

    return (
      <div className="my-16 border-t border-brass pt-8 text-4xl leading-tight text-brass md:text-6xl lg:text-7xl">
        {block.text.split("\n").map((line) => (
          <p key={line} className="mt-3 first:mt-0">
            {line}
          </p>
        ))}
      </div>
    );
  }

  return <p className="whitespace-pre-line">{block.text}</p>;
}

function languageLabel(locale: Locale) {
  return locale === "en" ? "Read in 繁體中文" : "Read in English";
}

function publicationScene(locale: Locale, slug: string): PageSceneData | null {
  if (slug === "convictions") {
    return locale === "zh"
      ? {
          eyebrow: "我們的信念",
          title: "我們的信念",
          body: "就是要好音樂！",
          image: "/images/page-themes/convictions-score-hand.jpg",
          imageAlt: "手指翻動樂譜的近距離照片。",
          secondaryImage: "/images/page-themes/convictions-bw-strings.jpg",
          secondaryImageAlt: "黑白影像中的弦樂演奏者。"
        }
      : {
          eyebrow: "Our Convictions",
          title: "Our Convictions",
          body: "Good Music. Period.",
          caption: "Hands, pages, light, attention",
          image: "/images/page-themes/convictions-score-hand.jpg",
          imageAlt: "A close view of a hand turning a score.",
          secondaryImage: "/images/page-themes/convictions-bw-strings.jpg",
          secondaryImageAlt: "Black and white image of string players in performance."
        };
  }

  if (slug === "our-story") {
    return locale === "zh"
      ? {
          eyebrow: "我們的故事",
          title: "從一個信念，走向百工眾生",
          body: "樂興之時的故事不只在年表裡，更在觀眾澿淚、樂手相視而笑、樂曲結束但指揮的手尚未放下時，翻騰發生。",
          caption: "時間、觀眾、舞台記憶",
          image: "/images/page-themes/our-story-background.jpg",
          imageAlt: "我們的故事頁背景影像。",
          previewImage: "/images/page-themes/our-story-l.jpg",
          previewImageAlt: "我們的故事頁主視覺。",
          secondaryImage: "/images/page-themes/our-story-s.jpg",
          secondaryImageAlt: "我們的故事頁輔助視覺。"
        }
      : {
          eyebrow: "Our Story",
          title: "From one conviction toward many lives and crafts.",
          body: "The story of PMM lives not only in dates, but in the audience's tears, musicians' shared smiles, and the moment when the music has ended but the conductor's hand has not yet fallen.",
          caption: "Time, audience, stage memory",
          image: "/images/page-themes/our-story-background.jpg",
          imageAlt: "A background image selected for the PMM story page.",
          previewImage: "/images/page-themes/our-story-l.jpg",
          previewImageAlt: "The main visual selected for the PMM story page.",
          secondaryImage: "/images/page-themes/our-story-s.jpg",
          secondaryImageAlt: "A supporting visual selected for the PMM story page."
        };
  }

  return null;
}

export function FoundationalPublicationView({
  publication
}: {
  publication: FoundationalPublication;
}) {
  const { locale, meta, body } = publication;
  const otherLocale: Locale = locale === "en" ? "zh" : "en";
  const neighbors = getPublicationNeighbors(meta.slug);
  const blocks = parsePublicationBody(body);
  const scene = publicationScene(locale, meta.slug);

  return (
    <article lang={localeHtmlLang[locale]}>
      {scene ? (
        <PageScene
          eyebrow={scene.eyebrow}
          title={scene.title}
          body={scene.body}
          image={scene.image}
          imageAlt={scene.imageAlt}
          previewImage={scene.previewImage}
          previewImageAlt={scene.previewImageAlt}
          secondaryImage={scene.secondaryImage}
          secondaryImageAlt={scene.secondaryImageAlt}
          caption={scene.caption}
          tone="quiet"
        />
      ) : (
        <header className="border-b border-white/15 px-5 pb-16 pt-36 md:px-10 md:pb-24 lg:px-14">
          <div className="mx-auto max-w-site">
            <div className="flex flex-wrap items-center justify-between gap-5 font-sans text-xs uppercase tracking-[0.16em] text-brass">
              <p>Foundational Publication / v{meta.publicationVersion}</p>
              <Link href={meta.routes[otherLocale]} hrefLang={localeHtmlLang[otherLocale]}>
                {languageLabel(locale)}
              </Link>
            </div>
            <h1 className="mt-8 max-w-5xl text-5xl font-normal leading-none md:text-7xl lg:text-8xl">
              {meta.title[locale]}
            </h1>
            {meta.description[locale] ? (
              <p className="mt-8 max-w-3xl text-xl leading-8 text-ink/72 md:text-2xl">
                {meta.description[locale]}
              </p>
            ) : null}
          </div>
        </header>
      )}

      <section className="border-b border-white/15 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-[190px_minmax(0,760px)]">
          <aside className="font-sans text-xs uppercase tracking-[0.16em] text-ink/52">
            <p>{localeLabels[locale]}</p>
            <nav aria-label="Foundational publications" className="mt-8 grid gap-4">
              {Object.values(foundationalPublications)
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={item.routes[locale]}
                    className={item.slug === meta.slug ? "text-brass" : "hover:text-ink"}
                  >
                    {item.navigationTitle[locale]}
                  </Link>
                ))}
            </nav>
          </aside>
          <div className="foundational-prose">
            {blocks.map((block, index) => (
              <PublicationBlock key={`${block.type}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </section>

      <nav
        aria-label="Adjacent foundational publications"
        className="grid gap-px bg-white/15 md:grid-cols-2"
      >
        {neighbors.previous ? (
          <Link
            href={neighbors.previous.routes[locale]}
            className="bg-charcoal px-5 py-10 transition-colors hover:bg-moss/60 md:px-10 lg:px-14"
          >
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">Previous</p>
            <p className="mt-3 text-3xl">{neighbors.previous.title[locale]}</p>
          </Link>
        ) : (
          <span className="hidden bg-charcoal md:block" />
        )}
        {neighbors.next ? (
          <Link
            href={neighbors.next.routes[locale]}
            className="bg-charcoal px-5 py-10 transition-colors hover:bg-moss/60 md:px-10 lg:px-14"
          >
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">Next</p>
            <p className="mt-3 text-3xl">{neighbors.next.title[locale]}</p>
          </Link>
        ) : (
          <span className="hidden bg-charcoal md:block" />
        )}
      </nav>
    </article>
  );
}
