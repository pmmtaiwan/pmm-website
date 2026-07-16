"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/Navigation";

export function Header() {
  const pathname = usePathname();
  const isChinese = pathname === "/zh" || pathname.startsWith("/zh/");

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 border-b border-white/10 bg-charcoal/82 px-5 py-4 backdrop-blur-xl md:px-10 lg:px-14">
      <Link href={isChinese ? "/zh/" : "/"} className="flex min-w-0 items-center" aria-label="Home">
        <span className="relative block h-16 w-24 shrink-0 md:h-20 md:w-28">
          <Image
            src="/images/pmm-logo-full-transparent.png"
            alt=""
            fill
            className="object-contain"
            sizes="112px"
          />
        </span>
      </Link>
      <Navigation />
    </header>
  );
}
