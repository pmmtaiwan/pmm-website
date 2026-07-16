export type Experience = {
  slug: string;
  title: string;
  subtitle?: string;
  date?: string;
  venue?: string;
  status: "upcoming" | "past" | "archive";
  heroImage?: string;
  summary: string;
  program?: string[];
  artists?: string[];
  body?: string;
  relatedIdeas?: string[];
};

export const experiences: Experience[] = [
  {
    slug: "post-apocalypse-bliss",
    title: "Post-Apocalypse Bliss",
    subtitle: "A late Friday night musical experience.",
    date: "2026-09-11",
    venue: "Taipei Bioinnovation Park",
    status: "upcoming",
    heroImage: "/images/philharmonia-hero.png",
    summary:
      "A late-night concert built around the strange calm after the city quiets, presented first as a pure musical experience.",
    program: [
      "Opening soundscape and chamber textures",
      "Works for strings, winds, and piano to be announced",
      "A closing sequence shaped for midnight listening"
    ],
    artists: ["Philharmonia Moments Musicaux", "Guest artists and collaborators to be announced"],
    body: "Post-Apocalypse Bliss begins with a simple audience journey: arrive from LaLaport, CityLink, or Nangang Station, step into Taipei Bioinnovation Park, and let Friday night become unusually still. This first presentation keeps the focus on music itself. Literary, visual, poetic, and multimedia dimensions can expand in future versions without crowding the original encounter.",
    relatedIdeas: ["music-after-the-city-thins"]
  }
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
