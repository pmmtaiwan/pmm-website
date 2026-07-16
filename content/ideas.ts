export type Idea = {
  slug: string;
  title: string;
  subtitle?: string;
  date?: string;
  author?: string;
  summary: string;
  body: string;
  relatedExperiences?: string[];
};

export const ideas: Idea[] = [
  {
    slug: "music-after-the-city-thins",
    title: "Music After the City Thins",
    subtitle: "A research note toward late-night listening.",
    date: "2026-07-08",
    author: "Philharmonia Moments Musicaux",
    summary:
      "A note on why late-night listening changes the scale of sound, attention, and expectation.",
    body: "The city does not become silent at night. It becomes selective. Machinery hums, crossings empty, trains become distant punctuation, and a listener begins to hear proportion differently. Post-Apocalypse Bliss is imagined from that condition: not as spectacle, but as a room where the audience can notice how little music needs in order to become vivid.",
    relatedExperiences: ["post-apocalypse-bliss"]
  }
];

export function getIdea(slug: string) {
  return ideas.find((idea) => idea.slug === slug);
}
