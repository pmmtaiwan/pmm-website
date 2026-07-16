export type Edition = "en" | "zh";

export type NavigationItem = {
  label: string;
  href: string;
};

export const englishFoundationalNavigation: NavigationItem[] = [];

export const englishPrimaryNavigation: NavigationItem[] = [
  { label: "Latest News", href: "/journal" },
  { label: "Our Convictions", href: "/convictions" },
  { label: "Our Story", href: "/our-story" },
  { label: "People", href: "/people" },
  { label: "Experience Us", href: "/experiences" },
  { label: "Archive", href: "/archive" },
  { label: "Venue & Facilities Rental", href: "/rent" },
  { label: "Chat with Us", href: "/contact" }
];

export const englishSecondaryNavigation: NavigationItem[] = [];

export const chineseFoundationalNavigation: NavigationItem[] = [];

export const chinesePrimaryNavigation: NavigationItem[] = [
  { label: "最新消息", href: "/zh/journal" },
  { label: "我們的信念", href: "/zh/convictions" },
  { label: "我們的故事", href: "/zh/our-story" },
  { label: "這裡的人", href: "/zh/people" },
  { label: "聆賞", href: "/zh/experiences" },
  { label: "歷年活動", href: "/zh/archive" },
  { label: "設備租借", href: "/zh/rent" },
  { label: "和我們對話", href: "/zh/contact" }
];

export const chineseSecondaryNavigation: NavigationItem[] = [];

export const navigationByEdition = {
  en: {
    foundational: englishFoundationalNavigation,
    primary: englishPrimaryNavigation,
    secondary: englishSecondaryNavigation
  },
  zh: {
    foundational: chineseFoundationalNavigation,
    primary: chinesePrimaryNavigation,
    secondary: chineseSecondaryNavigation
  }
} satisfies Record<
  Edition,
  {
    foundational: NavigationItem[];
    primary: NavigationItem[];
    secondary: NavigationItem[];
  }
>;

export const foundationalNavigation = englishFoundationalNavigation;
export const primaryNavigation = englishPrimaryNavigation;
export const secondaryNavigation = englishSecondaryNavigation;
