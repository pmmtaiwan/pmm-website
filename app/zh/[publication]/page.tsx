import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FoundationalPublicationView } from "@/components/FoundationPublication";
import {
  foundationalPublications,
  getFoundationalPublication,
  isPublicationSlug,
  publicationSlugs
} from "@/lib/foundational";

type PublicationPageParams = {
  params: Promise<{
    publication: string;
  }>;
};

export function generateStaticParams() {
  return publicationSlugs.map((publication) => ({ publication }));
}

export async function generateMetadata({ params }: PublicationPageParams): Promise<Metadata> {
  const { publication } = await params;
  if (!isPublicationSlug(publication)) return {};

  const meta = foundationalPublications[publication];

  return {
    title: {
      absolute: meta.seoTitle.zh
    },
    description: meta.description.zh,
    alternates: {
      canonical: meta.routes.zh,
      languages: {
        en: meta.routes.en,
        "zh-Hant": meta.routes.zh
      }
    },
    openGraph: {
      title: meta.openGraph.title.zh,
      description: meta.openGraph.description.zh,
      images: ["/images/philharmonia-hero.png"],
      locale: "zh_TW",
      alternateLocale: ["en_US"],
      type: "article"
    }
  };
}

export default async function ChineseFoundationalPublicationPage({
  params
}: PublicationPageParams) {
  const { publication } = await params;
  if (!isPublicationSlug(publication)) notFound();

  const foundationalPublication = getFoundationalPublication("zh", publication);

  return <FoundationalPublicationView publication={foundationalPublication} />;
}
