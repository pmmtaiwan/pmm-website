import type { LatestNewsFeature as LatestNewsFeatureContent } from "@/content/latestNews";

export function LatestNewsFeature({ feature }: { feature: LatestNewsFeatureContent }) {
  return (
    <article className="grid gap-px bg-white/15 lg:grid-cols-[0.78fr_1.22fr]">
      <div className="bg-charcoal p-7 md:p-10">
        <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
          {feature.scheduleLabel}
        </p>
        <ol className="mt-6 grid gap-7">
          {feature.events.map((event) => (
            <li
              key={`${event.date}-${event.time}`}
              className="border-b border-white/12 pb-7 last:border-b-0 last:pb-0"
            >
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink/48">
                {event.date}
              </p>
              <p className="mt-2 text-3xl text-brass">{event.time}</p>
              <p className="mt-2 text-xl leading-snug text-ink/78">{event.place}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="placeholder-field p-7 md:p-10">
        <div className="editorial-prose">
          {feature.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
