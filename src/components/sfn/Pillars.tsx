import { Eyebrow, Reveal } from "./Reveal";

const pillars = [
  {
    num: "01",
    icon: "♥",
    title: "Women's Health",
    sub: "Endometriosis Awareness",
    copy: "Education, advocacy, and amplifying voices around Endometriosis — a condition affecting 1 in 10 women globally that remains critically under-discussed across Africa.",
  },
  {
    num: "02",
    icon: "◈",
    title: "Ending GBV",
    sub: "Awareness, Support & Policy",
    copy: "Fighting Gender-Based Violence through awareness campaigns, survivor support, and policy-level advocacy that demands accountability and lasting systemic change.",
  },
  {
    num: "03",
    icon: "◆",
    title: "Mentorship",
    sub: "Leadership Development",
    copy: "Structured mentorship programmes and capacity-building initiatives that equip girls and women entrepreneurs with the skills, confidence, and networks to lead.",
  },
  {
    num: "04",
    icon: "◇",
    title: "Community",
    sub: "Social Empowerment",
    copy: "Restoring the dignity of the girl-child through targeted social support, sanitary dignity programmes, and community-led grassroots interventions.",
  },
];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--burgundy) 0%, color-mix(in oklab, var(--burgundy) 82%, var(--charcoal)) 55%, var(--charcoal) 100%)",
      }}
    >
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow tone="rose">Core Framework 2025</Eyebrow>
              <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.4rem]">
                Advocacy <span className="italic-accent">Pillars</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-cream/65">
              Four commitments that shape every programme, partnership, and pound we deploy — from
              rural clinics in Kenya to policy rooms in Europe.
            </p>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.num} delay={i * 90}>
              <div
                className="group h-full p-8 transition-colors duration-500 lg:p-9"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--cream) 5%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--cream) 10%, transparent)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-gold">{p.icon}</span>
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-gold">{p.num}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-cream">{p.title}</h3>
                <p className="mt-2 text-[0.68rem] font-semibold tracking-[0.22em] text-rose-light uppercase">
                  {p.sub}
                </p>
                <span
                  className="mt-6 block h-px w-10 transition-all duration-500 group-hover:w-20"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <p className="mt-6 text-sm leading-relaxed text-cream/65">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
