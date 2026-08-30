import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "./Reveal";

const stats = [
  { value: "2+", label: "Active Global Chapters" },
  { value: "4+", label: "Core Advocacy Pillars" },
  { value: "1K+", label: "Paediatric Ward Supported" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroBg}
        alt="Women seated together at a café table, warm brick interior wall"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--charcoal) 78%, transparent) 0%, color-mix(in oklab, var(--charcoal) 40%, transparent) 38%, color-mix(in oklab, var(--charcoal) 88%, transparent) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in oklab, var(--burgundy) 62%, transparent) 0%, transparent 62%)",
        }}
      />

      <div className="shell w-full pt-36 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-2 text-[0.6rem] font-semibold tracking-[0.3em] uppercase"
              style={{ backgroundColor: "var(--gold)", color: "var(--charcoal)" }}
            >
              Pride of Kenya Awards 2025 — NGO of the Year
            </span>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-7 text-[0.68rem] font-semibold tracking-[0.32em] text-gold uppercase">
              — Founded by Tabitha Mwelu John —
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="mt-5 font-display text-[2.7rem] leading-[1.03] font-semibold text-cream sm:text-6xl lg:text-[4.6rem]">
              Women of Purpose.
              <br />
              <span className="italic-accent">Giving Back</span> with Grace.
            </h1>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/80 lg:text-lg">
              Simply Feminine Network is an award-winning women-led NGO committed to women's health,
              ending gender-based violence, mentorship, and community empowerment — in Kenya and
              across the world.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-base btn-primary">
                Explore Our Work
              </a>
              <a href="#partners" className="btn-base btn-outline">
                Partner With SFN
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={380}>
          <dl className="hairline-light mt-16 grid grid-cols-1 gap-px sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="py-7 sm:pr-10">
                <dt className="font-display text-4xl font-semibold text-rose-light lg:text-5xl">{s.value}</dt>
                <dd className="mt-2 text-[0.66rem] font-semibold tracking-[0.26em] text-cream/60 uppercase">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
