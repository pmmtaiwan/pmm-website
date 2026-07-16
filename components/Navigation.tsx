"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationByEdition, type Edition } from "@/content/navigation";

const crossEditionRoutes: Record<string, string> = {
  "/": "/zh/",
  "/about": "/zh/about",
  "/archive": "/zh/archive",
  "/contact": "/zh/contact",
  "/convictions": "/zh/convictions",
  "/experiences": "/zh/experiences",
  "/ideas": "/zh/ideas",
  "/journal": "/zh/journal",
  "/listen": "/zh/listen",
  "/manifesto": "/zh/manifesto",
  "/our-story": "/zh/our-story",
  "/people": "/zh/people",
  "/philosophy": "/zh/convictions",
  "/rent": "/zh/rent",
  "/support": "/zh/support"
};

function currentEdition(pathname: string): Edition {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

function languageHref(pathname: string, edition: Edition) {
  if (edition === "en") return crossEditionRoutes[pathname] ?? "/zh/";
  const englishPath = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  return (
    Object.entries(crossEditionRoutes).find(([, zhPath]) => zhPath === pathname)?.[0] ?? englishPath
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const edition = currentEdition(pathname);
  const navigation = navigationByEdition[edition];
  const items = [...navigation.foundational, ...navigation.primary, ...navigation.secondary];
  const languageItem = {
    label: edition === "en" ? "繁體中文" : "English",
    href: languageHref(pathname, edition)
  };

  return (
    <div className="font-sans">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center border border-white/20 bg-charcoal/60 md:hidden"
        aria-controls="site-navigation"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="block h-px w-5 bg-ink before:relative before:-top-2 before:block before:h-px before:bg-ink after:relative after:top-2 after:block after:h-px after:bg-ink" />
      </button>
      <nav
        id="site-navigation"
        aria-label="Main navigation"
        className={`${open ? "grid" : "hidden"} absolute left-0 right-0 top-full border-b border-white/15 bg-charcoal/95 p-5 md:static md:flex md:border-0 md:bg-transparent md:p-0`}
      >
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:items-center md:justify-end md:gap-x-5 md:gap-y-2">
          {items.map((item) => {
            const active = pathname === item.href;
            const secondary = navigation.secondary.some((link) => link.href === item.href);
            const foundational = navigation.foundational.some((link) => link.href === item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`text-xs uppercase tracking-[0.14em] transition-colors hover:text-ink ${
                  active
                    ? "text-ink"
                    : secondary
                      ? "text-ink/50"
                      : foundational
                        ? "text-brass"
                        : "text-ink/76"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={languageItem.href}
            hrefLang={edition === "en" ? "zh-Hant" : "en"}
            onClick={() => setOpen(false)}
            className="text-xs uppercase tracking-[0.14em] text-brass transition-colors hover:text-ink"
          >
            {languageItem.label}
          </Link>
        </div>
      </nav>
    </div>
  );
}
