import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/SiteLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pmmtaiwan.org"),
  title: {
    default: "Philharmonia Moments Musicaux / 樂興之時管絃樂團",
    template: "%s | Philharmonia Moments Musicaux"
  },
  description:
    "The official website of Philharmonia Moments Musicaux (樂興之時管絃樂團), a Taiwan-based orchestra creating distinctive concerts and musical experiences.",
  keywords: [
    "樂興之時",
    "樂興之時管絃樂團",
    "Philharmonia Moments Musicaux",
    "PMM",
    "Taiwan orchestra",
    "台灣管絃樂團"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Philharmonia Moments Musicaux / 樂興之時管絃樂團",
    description: "Good Music. Period. For those who are still curious.",
    url: "/",
    siteName: "Philharmonia Moments Musicaux",
    images: ["/images/philharmonia-hero-pmm-generated-natural-wall-bright.png"],
    locale: "en_US",
    alternateLocale: ["zh_TW"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Philharmonia Moments Musicaux / 樂興之時管絃樂團",
    description: "Good Music. Period. For those who are still curious.",
    images: ["/images/philharmonia-hero-pmm-generated-natural-wall-bright.png"]
  }
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "MusicGroup"],
      "@id": "https://www.pmmtaiwan.org/#organization",
      name: "Philharmonia Moments Musicaux",
      alternateName: ["樂興之時管絃樂團", "PMM Taiwan"],
      url: "https://www.pmmtaiwan.org/",
      image:
        "https://www.pmmtaiwan.org/images/philharmonia-hero-pmm-generated-natural-wall-bright.png",
      sameAs: ["https://www.youtube.com/@pmmtaiwan"],
      areaServed: {
        "@type": "Country",
        name: "Taiwan"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.pmmtaiwan.org/#website",
      url: "https://www.pmmtaiwan.org/",
      name: "Philharmonia Moments Musicaux",
      alternateName: "樂興之時管絃樂團",
      publisher: {
        "@id": "https://www.pmmtaiwan.org/#organization"
      },
      inLanguage: ["en", "zh-Hant"]
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
