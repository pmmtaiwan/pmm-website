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
      absolute: meta.seoTitle.en
    },
    description: meta.description.en,
    alternates: {
      canonical: meta.routes.en,
      languages: {
        en: meta.routes.en,
        "zh-Hant": meta.routes.zh
      }
    },
    openGraph: {
      title: meta.openGraph.title.en,
      description: meta.openGraph.description.en,
      images: ["/images/philharmonia-hero.png"],
      locale: "en_US",
      alternateLocale: ["zh_TW"],
      type: "article"
    }
  };
}

export default async function EnglishFoundationalPublicationPage({
  params
}: PublicationPageParams) {
  const { publication } = await params;
  if (!isPublicationSlug(publication)) notFound();

  const foundationalPublication = getFoundationalPublication("en", publication);

  return <FoundationalPublicationView publication={foundationalPublication} />;
}
