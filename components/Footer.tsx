"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationByEdition } from "@/content/navigation";

const crossEditionRoutes: Record<string, string> = {
  "/": "/zh/",
  "/archive": "/zh/archive",
  "/contact": "/zh/contact",
  "/convictions": "/zh/convictions",
  "/experiences": "/zh/experiences",
  "/journal": "/zh/journal",
  "/manifesto": "/zh/manifesto",
  "/our-story": "/zh/our-story",
  "/people": "/zh/people",
  "/rent": "/zh/rent"
};

function languageHref(pathname: string, edition: "en" | "zh") {
  if (edition === "en") return crossEditionRoutes[pathname] ?? "/zh/";
  const englishPath = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  return (
    Object.entries(crossEditionRoutes).find(([, zhPath]) => zhPath === pathname)?.[0] ?? englishPath
  );
}

export function Footer() {
  const pathname = usePathname();
  const edition = pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
  const navigation = navigationByEdition[edition];
  const items = [...navigation.foundational, ...navigation.primary, ...navigation.secondary];
  const languageItem = {
    label: edition === "en" ? "繁體中文" : "English",
    href: languageHref(pathname, edition)
  };

  return (
    <footer className="border-t border-white/15 px-5 py-10 font-sans text-xs text-ink/60 md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-site gap-8 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="uppercase tracking-[0.14em] text-brass">
            {edition === "zh" ? "就是要好音樂！" : "Good Music. Period."}
          </p>
          <p className="mt-3">
            {edition === "zh" ? "【樂興之時】" : "Philharmonia Moments Musicaux / 樂興之時"}
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase tracking-[0.14em] hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={languageItem.href}
            hrefLang={edition === "en" ? "zh-Hant" : "en"}
            className="uppercase tracking-[0.14em] text-brass hover:text-ink"
          >
            {languageItem.label}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
