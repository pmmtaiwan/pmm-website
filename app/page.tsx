import { CTA } from "@/components/CTA";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Hero } from "@/components/Hero";
import { IdeaCard } from "@/components/IdeaCard";
import { MediaBlock } from "@/components/MediaBlock";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Section } from "@/components/Section";
import { experiences } from "@/content/experiences";
import { ideas } from "@/content/ideas";

export default function HomePage() {
  const featuredExperience = experiences[0];
  const featuredIdea = ideas[0];

  return (
    <>
      <Hero
        eyebrow="Philharmonia Moments Musicaux / 樂興之時管絃樂團"
        title="Good Music. Period."
        subtitle="For those who are still curious."
        image="/images/philharmonia-hero-pmm-generated-natural-wall-bright.png"
        luminous
        cta={{ href: "/experiences/post-apocalypse-bliss", label: "Enter the next experience" }}
      />
      <Section>
        <QuoteBlock quote="Philharmonia Moments Musicaux exists for music that still asks to be heard." />
      </Section>
      <Section eyebrow="Featured Experience" title="A production as an artistic world.">
        <ExperienceCard experience={featuredExperience} />
      </Section>
      <Section eyebrow="Featured Idea" title="The thinking behind the music.">
        <IdeaCard idea={featuredIdea} />
      </Section>
      <Section eyebrow="Listen" title="Experience some of our soundprints.">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          <MediaBlock
            type="Video"
            title="Rehearsal fragment"
            href="https://youtu.be/rsg49m1GYLA?si=LPSlFVVPfWhiaGb3"
          />
          <MediaBlock
            type="Recording"
            title="Archive selection"
            href="https://youtu.be/kLaRlJkIXxM?si=SqsB9MMR9SDpL0gW"
          />
          <MediaBlock
            type="Excerpt"
            title="Listening room"
            href="https://youtu.be/lmy2MGcTc6c?si=aeaGHJtXVGWenJ9P"
          />
        </div>
      </Section>
      <Section eyebrow="Support" title="Become part of the journey.">
        <CTA
          title="Make room for difficult listening."
          body="PMM invites patrons, partners, and friends who believe that serious listening still needs a room, a rehearsal, and a public life."
          href="/support"
          label="Support"
        />
      </Section>
    </>
  );
}
