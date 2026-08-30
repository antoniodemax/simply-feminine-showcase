import storyImg from "@/assets/story-main.jpg";
import { Eyebrow, Reveal } from "./Reveal";

const values = [
  { title: "Purpose", copy: "Every initiative is anchored in a clear, measurable impact for women and girls." },
  { title: "Grace", copy: "We serve with dignity, warmth, and the quiet power of a united sisterhood." },
  { title: "Action", copy: "From mobile labs to global summits — we don't just advocate. We do." },
];

export function Story() {
  return (
    <section id="story" className="section-pad bg-cream">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute -top-5 -left-5 hidden h-full w-full lg:block"
              style={{ border: "1px solid color-mix(in oklab, var(--gold) 55%, transparent)" }}
            />
            <img
              src={storyImg}
              alt="Tabitha Mwelu John, founder of Simply Feminine Network"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full object-cover"
              style={{ aspectRatio: "4 / 5", boxShadow: "var(--shadow-lift)" }}
            />
            <div
              className="absolute right-0 -bottom-8 hidden w-56 p-6 lg:block"
              style={{ backgroundColor: "var(--charcoal)" }}
            >
              <p className="text-[0.6rem] font-semibold tracking-[0.3em] text-gold uppercase">Accolade</p>
              <p className="mt-2 font-display text-lg leading-snug font-semibold text-cream">
                NGO of the Year 2025
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]">
              Built by Women,
              <br />
              <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
                for Women.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <p
              className="mt-7 border-l-2 pl-5 font-display text-xl leading-snug italic lg:text-2xl"
              style={{ borderColor: "var(--gold)", color: "var(--burgundy)" }}
            >
              “Women of Purpose — Giving Back with Grace.”
            </p>
            <p className="mt-3 pl-5 text-[0.6rem] font-semibold tracking-[0.32em] text-gold uppercase">
              SFN Motto
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 space-y-5 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              <p>
                Simply Feminine Network is a women-led NGO founded by Tabitha Mwelu John with a
                singular, unwavering purpose: to serve, uplift, and celebrate women at every stage of
                their journey.
              </p>
              <p>
                From rural Kenya to the corridors of Schlosshotel Berlin, SFN operates at the
                intersection of health advocacy, economic empowerment, and community dignity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <dl className="hairline mt-12 grid gap-px sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="py-7 sm:pr-8">
                  <dt className="font-display text-lg font-semibold" style={{ color: "var(--burgundy)" }}>
                    {v.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {v.copy}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
