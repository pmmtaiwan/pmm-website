import type { LatestNewsFeature as LatestNewsFeatureContent } from "@/content/latestNews";

export function LatestNewsFeature({ feature }: { feature: LatestNewsFeatureContent }) {
  return (
    <article className="grid gap-px bg-white/15 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="bg-charcoal p-7 md:p-10">
        <dl className="grid gap-5 text-ink/76">
          <div>
            <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink/45">
              {feature.timeLabel}
            </dt>
            <dd className="mt-2 text-2xl">{feature.time}</dd>
          </div>
          <div>
            <dt className="font-sans text-xs uppercase tracking-[0.14em] text-ink/45">
              {feature.placeLabel}
            </dt>
            <dd className="mt-2 text-2xl">{feature.place}</dd>
          </div>
        </dl>
        <a
          href={feature.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex border border-brass px-5 py-3 font-sans text-xs uppercase tracking-[0.14em] text-brass transition-colors hover:bg-brass hover:text-charcoal"
        >
          {feature.videoLabel}
        </a>
      </div>
      <div className="placeholder-field p-7 md:p-10">
        <section>
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
            {feature.programLabel}
          </p>
          <ul className="mt-5 grid gap-4 text-2xl leading-snug text-ink/82">
            {feature.program.map((item) => (
              <li key={item} className="border-b border-white/12 pb-4 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-10">
          <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
            {feature.performersLabel}
          </p>
          <ul className="mt-5 grid gap-3 text-lg leading-7 text-ink/72">
            {feature.performers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
