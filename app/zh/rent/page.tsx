import type { Metadata } from "next";
import { PageScene } from "@/components/PageScene";
import { Section } from "@/components/Section";

const applicationHref = "/downloads/pmm-facility-rental-application.docx";

const venueRates = [
  {
    space: "表演廳",
    use: "排練、空間租用",
    setup: "基本照明、椅子",
    weekday: "1,500元／小時",
    weekdayExtra: "加收600元",
    holiday: "2,500元／小時",
    holidayExtra: "加收700元"
  },
  {
    space: "表演廳",
    use: "演出（包含觀眾等）",
    setup: "基本照明、椅子",
    weekday: "12,000元／4小時",
    weekdayExtra: "加收600元",
    holiday: "18,000元／4小時",
    holidayExtra: "加收700元"
  },
  {
    space: "琴房",
    use: "排練",
    setup: "直立式鋼琴、椅",
    weekday: "300元／小時",
    weekdayExtra: "依實際時段確認",
    holiday: "300元／小時",
    holidayExtra: "依實際時段確認"
  },
  {
    space: "琴房",
    use: "排練",
    setup: "直立式鋼琴、椅、爵士鼓",
    weekday: "600元／小時",
    weekdayExtra: "依實際時段確認",
    holiday: "600元／小時",
    holidayExtra: "依實際時段確認"
  }
];

const equipmentRates = [
  ["移動式投影幕", "1", "天", "800元", ""],
  ["手提音箱", "1", "天", "500元", "Roland CM-30"],
  ["爵士鼓", "1", "天", "1,000元／組", "Dixon Drum Set"],
  ["平台鋼琴", "1", "天", "2,500元／臺", "Petrof"],
  ["電子鋼琴", "1", "天", "2,000元／臺", "Roland FP-60X"],
  ["電子大鍵琴", "1", "天", "2,000元", "Roland C-30"],
  ["低音提琴", "4", "天", "1,500元／把", ""],
  ["定音鼓（23/26/29/32）", "4", "天", "2,000元／組", "Adams, Yamaha"],
  ["大鼓", "1", "天", "400元", "Ludwig"],
  ["黑色摺疊椅", "80", "次", "100元／張", "場內使用不計費"],
  ["各式造型高腳椅", "8", "次", "250元／張", "場內使用不計費"],
  ["大鑼", "1", "天", "600元", ""]
];

export const metadata: Metadata = {
  title: "設備租借 | 樂興之時",
  description: "樂興之時音樂理想國場地、排練空間與器材租借資訊。",
  alternates: {
    canonical: "/zh/rent",
    languages: {
      en: "/rent",
      "zh-Hant": "/zh/rent"
    }
  }
};

export default function ChineseRentPage() {
  return (
    <>
      <PageScene
        eyebrow="設備租借"
        title="為聲音預備的空間。"
        body="排練空間、設備與場地相關詢問。實際可租借時段、費率與申請方式，請與樂興之時聯絡協調。"
        image="/images/page-themes/rent-stands-room.jpg"
        imageAlt="開放排練空間中的譜架與座椅。"
        previewImage="/images/page-themes/facility-l.jpg"
        previewImageAlt="設備租借頁主視覺。"
        secondaryImage="/images/page-themes/facility-s.jpg"
        secondaryImageAlt="設備租借頁輔助視覺。"
        tone="quiet"
      />

      <Section eyebrow="申請" title="先確認時段，再讓聲音進場。">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="border border-white/15 bg-charcoal p-7">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">
              下載申請表
            </p>
            <h2 className="mt-4 text-3xl font-normal">場地暨器材租借申請表</h2>
            <p className="mt-4 leading-7 text-ink/70">
              請先來電確認可租用時段，再填寫申請表寄至 muse@mmmu.org。
              樂興之時收到申請後，將回覆實付總金額與後續付款方式。
            </p>
            <a
              className="mt-7 inline-flex border border-brass px-5 py-3 font-sans text-xs uppercase tracking-[0.16em] text-brass transition hover:bg-brass hover:text-charcoal"
              href={applicationHref}
            >
              下載 Word 申請表
            </a>
          </article>

          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            {[
              ["1", "電話詢問登記", "請先與音樂理想國承辦人員確認可租用時間，場地至多保留一週。"],
              [
                "2",
                "寄送申請書與預繳",
                "電話詢問後一週內寄送申請書；確認金額後預繳二分之一費用與押金3,000元。"
              ],
              ["3", "使用前繳清餘款", "活動當日使用場地前，應先將實付總金額之餘款繳清。"]
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

      <Section eyebrow="時段" title="音樂理想國可租借時段。">
        <div className="grid gap-px bg-white/15 md:grid-cols-3">
          {[
            ["週一至週五", "9:30 - 21:30"],
            ["週六", "09:30 - 18:30"],
            ["輔助時段", "12:00 - 13:00／17:00 - 18:00"]
          ].map(([label, time]) => (
            <article key={label} className="bg-charcoal p-7">
              <p className="font-sans text-xs uppercase tracking-[0.16em] text-brass">{label}</p>
              <h2 className="mt-4 text-4xl font-normal">{time}</h2>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl leading-7 text-ink/68">
          若需租借非上班時段或輔助時段，將依實際需求加收額外費用。非上班時段每時段須加收500元人事管銷費用。
        </p>
      </Section>

      <Section eyebrow="場地費用" title="表演廳與琴房。">
        <div className="overflow-x-auto border border-white/15">
          <table className="min-w-[980px] w-full border-collapse bg-charcoal text-left text-sm">
            <thead className="bg-paper/8 font-sans text-xs uppercase tracking-[0.14em] text-brass">
              <tr>
                {["場地", "用途", "設備", "平日一般時段", "平日輔助時段", "週末／假日一般時段", "週末／假日輔助時段"].map(
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

      <Section eyebrow="器材使用費" title="需要什麼，請先一起寫進申請表。">
        <div className="overflow-x-auto border border-white/15">
          <table className="min-w-[760px] w-full border-collapse bg-charcoal text-left text-sm">
            <thead className="bg-paper/8 font-sans text-xs uppercase tracking-[0.14em] text-brass">
              <tr>
                {["器材", "數量", "單位", "費用", "備註"].map((head) => (
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
          器材租借次數以租借的排練次數計算；器材租金不併入場地租借打折優惠計算。
        </p>
      </Section>

      <Section eyebrow="提醒" title="折扣、宣傳與費用計算。">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            [
              "樂興團員",
              "排練、演出租借費用為9折。若預定演出節目為樂興活動，請提交演出計劃書；審核通過後可享有一次免費排練。"
            ],
            [
              "一般租借",
              "排練租借費用自第二小時開始為9折。例如平日排練9:00-12:00，費用為1500+1350+1350=4200。"
            ],
            [
              "演出宣傳",
              "凡租借表演廳演出，可免費享有一次樂興之時粉專貼文宣傳，由申請人提供相關文字內容。"
            ],
            [
              "設備另計",
              "除表單上列基本設備外，平台鋼琴、視聽器材等設備使用費另計；輔助時段加收費用也不併入折扣。"
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
