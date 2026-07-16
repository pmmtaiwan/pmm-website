import type { Metadata } from "next";
import { MediaBlock } from "@/components/MediaBlock";
import { PageIntro } from "@/components/PageIntro";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Listen",
  "Videos, recordings, excerpts, and selected media."
);

export default function ListenPage() {
  return (
    <>
      <PageIntro
        eyebrow="Listen"
        title="Selected media."
        body="A listening room for recordings, videos, rehearsal fragments, and archival material as each project becomes available."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <MediaBlock
            type="Video"
            title="Video archive"
            description="Performance films, rehearsal captures, and short visual records will be collected here."
          />
          <MediaBlock
            type="Recording"
            title="Recording archive"
            description="Audio from concerts and selected sessions will be organized for careful listening."
          />
          <MediaBlock
            type="Excerpt"
            title="Selected excerpts"
            description="Short passages, themes, and study clips will support audiences before and after performances."
          />
        </div>
      </Section>
    </>
  );
}
