import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: {
    default: "Philharmonia Moments Musicaux / 樂興之時",
    template: "%s | Philharmonia Moments Musicaux"
  },
  description: "The digital home of Philharmonia Moments Musicaux / 樂興之時. Good Music. Period.",
  openGraph: {
    title: "Philharmonia Moments Musicaux / 樂興之時",
    description: "Good Music. Period. For those who are still curious.",
    siteName: "Philharmonia Moments Musicaux",
    images: ["/images/philharmonia-hero.png"],
    locale: "en",
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
