import type { Metadata } from "next";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

const applicationHref = "/downloads/pmm-facility-rental-application.docx";

const venueRates = [
  {
    space: "Performance Hall",
    use: "Rehearsal / space rental",
    setup: "Basic lighting, chairs",
    weekday: "NT$1,500 / hour",
    weekdayExtra: "+ NT$600",
    holiday: "NT$2,500 / hour",
    holidayExtra: "+ NT$700"
  },
  {
    space: "Performance Hall",
    use: "Performance with audience",
    setup: "Basic lighting, chairs",
    weekday: "NT$12,000 / 4 hours",
    weekdayExtra: "+ NT$600",
    holiday: "NT$18,000 / 4 hours",
    holidayExtra: "+ NT$700"
  },
  {
    space: "Practice Room",
    use: "Rehearsal",
    setup: "Upright piano, chairs",
    weekday: "NT$300 / hour",
    weekdayExtra: "Confirm with PMM",
    holiday: "NT$300 / hour",
    holidayExtra: "Confirm with PMM"
  },
  {
    space: "Practice Room",
    use: "Rehearsal",
    setup: "Upright piano, chairs, drum set",
    weekday: "NT$600 / hour",
    weekdayExtra: "Confirm with PMM",
    holiday: "NT$600 / hour",
    holidayExtra: "Confirm with PMM"
  }
];

const equipmentRates = [
  ["Mobile projection screen", "1", "day", "NT$800", ""],
  ["Portable speaker", "1", "day", "NT$500", "Roland CM-30"],
  ["Drum set", "1", "day", "NT$1,000 / set", "Dixon Drum Set"],
  ["Grand piano", "1", "day", "NT$2,500 / piano", "Petrof"],
  ["Digital piano", "1", "day", "NT$2,000 / piano", "Roland FP-60X"],
  ["Digital harpsichord", "1", "day", "NT$2,000", "Roland C-30"],
  ["Double bass", "4", "day", "NT$1,500 / instrument", ""],
  ["Timpani (23/26/29/32)", "4", "day", "NT$2,000 / set", "Adams, Yamaha"],
  ["Bass drum", "1", "day", "NT$400", "Ludwig"],
  ["Black folding chair", "80", "use", "NT$100 / chair", "No charge for in-house use"],
  ["Assorted high chairs", "8", "use", "NT$250 / chair", "No charge for in-house use"],
  ["Tam-tam", "1", "day", "NT$600", ""]
];

export const metadata: Metadata = pageMetadata(
  "Venue & Facilities Rental",
  "Rental information for PMM rehearsal spaces, instruments, equipment, and practice rooms."
);

export default function RentPage() {
  return (
    <>
      <PageScene
        eyebrow="Venue & Facilities Rental"
        title="Rooms prepared for sound."
        body="For rehearsal spaces, equipment, and venue-related inquiries, please contact PMM so details, availability, rates, and application procedures can be coordinated directly."
        image="/images/page-themes/rent-stands-room.jpg"
        imageAlt="Music stands and chairs in an open rehearsal room."
        previewImage="/images/page-themes/facility-l.jpg"
        previewImageAlt="The main visual selected for venue and facilities rental."
        secondaryImage="/images/page-themes/facility-s.jpg"
        secondaryImageAlt="A supporting visual selected for venue and facilities rental."
        tone="quiet"
      />

      <Section eyebrow="Application" title="Confirm the time, then bring the sound in.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="border border-white/15 bg-charcoal p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
              Download Form
            </p>
            <h2 className="mt-4 text-3xl font-normal">Venue and equipment rental request</h2>
            <p className="mt-4 leading-7 text-ink/70">
              Please call first to confirm availability, then complete the form and send it to
              muse@mmmu.org. PMM will reply with the confirmed total and payment instructions.
            </p>
            <a
              className="mt-7 inline-flex border border-brass px-5 py-3 font-sans text-xs uppercase tracking-[0.16em] text-brass transition hover:bg-brass hover:text-charcoal"
              href={applicationHref}
            >
              Download Word Form
            </a>
          </article>

          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            {[
              ["1", "Call to Confirm", "Confirm available time with PMM. A tentative hold may be kept for up to one week."],
              [
                "2",
                "Submit and Deposit",
                "Send the form within one week. After confirmation, pay 50% of the total and a NT$3,000 deposit."
              ],
              ["3", "Settle Before Use", "The remaining balance should be paid before using the venue on the event day."]
            ].map(([step, title, body]) => (
              <article key={step} className="bg-charcoal p-7">
                <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
                  Step {step}
                </p>
                <h2 className="mt-4 text-2xl font-normal">{title}</h2>
                <p className="mt-4 leading-7 text-ink/66">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Hours" title="Available rental hours.">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {[
            ["Monday to Friday", "9:30 - 21:30"],
            ["Saturday", "09:30 - 18:30"],
            ["Supplementary hours", "12:00 - 13:00 / 17:00 - 18:00"]
          ].map(([label, time]) => (
            <article key={label} className="bg-charcoal p-7">
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{label}</p>
              <h2 className="mt-4 text-4xl font-normal">{time}</h2>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl leading-7 text-ink/68">
          Rental requests outside regular hours or during supplementary hours may require additional
          fees. Out-of-hours use is subject to an additional NT$500 administration fee per time block.
        </p>
      </Section>

      <Section eyebrow="Venue Rates" title="Performance hall and practice room.">
        <div className="overflow-x-auto border border-white/15">
          <table className="min-w-[980px] w-full border-collapse bg-charcoal text-left text-sm">
            <thead className="bg-paper/8 font-sans text-xs uppercase tracking-[0.14em] text-brass">
              <tr>
                {["Space", "Use", "Included Setup", "Weekday", "Weekday Extra", "Weekend / Holiday", "Weekend Extra"].map(
                  (head) => (
                    <th key={head} className="border-b border-white/15 px-4 py-3 font-normal">
                      {head}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {venueRates.map((rate) => (
                <tr key={`${rate.space}-${rate.use}-${rate.setup}`} className="border-b border-white/10">
                  <td className="px-4 py-4 text-brass">{rate.space}</td>
                  <td className="px-4 py-4">{rate.use}</td>
                  <td className="px-4 py-4 text-ink/68">{rate.setup}</td>
                  <td className="px-4 py-4">{rate.weekday}</td>
                  <td className="px-4 py-4 text-ink/68">{rate.weekdayExtra}</td>
                  <td className="px-4 py-4">{rate.holiday}</td>
                  <td className="px-4 py-4 text-ink/68">{rate.holidayExtra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Equipment Rates" title="Please include equipment needs in the request form.">
        <div className="overflow-x-auto border border-white/15">
          <table className="min-w-[760px] w-full border-collapse bg-charcoal text-left text-sm">
            <thead className="bg-paper/8 font-sans text-xs uppercase tracking-[0.14em] text-brass">
              <tr>
                {["Item", "Qty.", "Unit", "Fee", "Note"].map((head) => (
                  <th key={head} className="border-b border-white/15 px-4 py-3 font-normal">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {equipmentRates.map(([item, quantity, unit, fee, note]) => (
                <tr key={item} className="border-b border-white/10">
                  <td className="px-4 py-4 text-brass">{item}</td>
                  <td className="px-4 py-4">{quantity}</td>
                  <td className="px-4 py-4">{unit}</td>
                  <td className="px-4 py-4">{fee}</td>
                  <td className="px-4 py-4 text-ink/68">{note || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-4xl leading-7 text-ink/68">
          Equipment fees are calculated separately from venue discounts and are counted according to
          the number of rehearsal uses.
        </p>
      </Section>

      <Section eyebrow="Notes" title="Discounts, promotion, and fee calculation.">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            [
              "PMM Members",
              "Rehearsal and performance rental fees are offered at 10% off. For PMM-related programs, a proposal may be reviewed for one complimentary rehearsal."
            ],
            [
              "General Rentals",
              "For rehearsal rentals, the second hour onward is offered at 10% off. Example: weekday rehearsal 9:00-12:00 = 1500+1350+1350=4200."
            ],
            [
              "Performance Promotion",
              "Performance hall rentals include one complimentary PMM Facebook post, with text supplied by the applicant."
            ],
            [
              "Equipment Separate",
              "Grand piano, AV equipment, and other items not listed as basic setup are charged separately. Supplementary-hour fees are also excluded from discounts."
            ]
          ].map(([title, body]) => (
            <article key={title} className="border border-white/15 bg-charcoal p-7">
              <h2 className="text-3xl font-normal text-brass">{title}</h2>
              <p className="mt-4 leading-7 text-ink/68">{body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
