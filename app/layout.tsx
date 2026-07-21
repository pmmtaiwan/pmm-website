import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/SiteLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://pmmtaiwan.org"),
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
  openGraph: {
    title: "Philharmonia Moments Musicaux / 樂興之時管絃樂團",
    description: "Good Music. Period. For those who are still curious.",
    url: "/",
    siteName: "Philharmonia Moments Musicaux",
    images: ["/images/philharmonia-hero.png"],
    locale: "en",
    alternateLocale: ["zh_TW"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
