import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/SiteLayout";

const siteUrl = "https://www.pmmtaiwan.org";
const siteImage = `${siteUrl}/images/philharmonia-hero-pmm-generated-natural-wall-bright.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
      "@id": `${siteUrl}/#organization`,
      name: [
        { "@value": "Philharmonia Moments Musicaux", "@language": "en" },
        { "@value": "樂興之時管絃樂團", "@language": "zh-Hant" }
      ],
      alternateName: "PMM",
      url: `${siteUrl}/`,
      image: {
        "@type": "ImageObject",
        url: siteImage
      },
      description: [
        {
          "@value":
            "A Taiwan-based orchestra creating distinctive concerts and musical experiences.",
          "@language": "en"
        },
        {
          "@value": "來自台灣、持續創造獨特音樂會與音樂體驗的管絃樂團。",
          "@language": "zh-Hant"
        }
      ],
      sameAs: ["https://www.youtube.com/@pmmtaiwan"],
      contactPoint: {
        "@type": "ContactPoint",
        url: `${siteUrl}/contact`,
        contactType: "general inquiries",
        availableLanguage: ["en", "zh-Hant"]
      },
      areaServed: {
        "@type": "Country",
        name: "Taiwan"
      },
      location: {
        "@type": "Country",
        name: "Taiwan"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: [
        { "@value": "Philharmonia Moments Musicaux", "@language": "en" },
        { "@value": "樂興之時管絃樂團", "@language": "zh-Hant" }
      ],
      alternateName: "PMM",
      publisher: {
        "@id": `${siteUrl}/#organization`
      },
      inLanguage: ["en", "zh-Hant"]
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#english-homepage`,
      url: `${siteUrl}/`,
      name: "Philharmonia Moments Musicaux",
      inLanguage: "en",
      isPartOf: {
        "@id": `${siteUrl}/#website`
      },
      about: {
        "@id": `${siteUrl}/#organization`
      },
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/zh/#chinese-homepage`,
      url: `${siteUrl}/zh/`,
      name: "樂興之時管絃樂團",
      inLanguage: "zh-Hant",
      isPartOf: {
        "@id": `${siteUrl}/#website`
      },
      about: {
        "@id": `${siteUrl}/#organization`
      },
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
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
