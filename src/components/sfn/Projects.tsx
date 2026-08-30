import dignity from "@/assets/program-dignity.jpg";
import berlin from "@/assets/program-berlin.jpg";
import mentorship from "@/assets/program-mentorship.jpg";
import { Eyebrow, Reveal } from "./Reveal";

const projects = [
  {
    num: "01",
    img: dignity,
    alt: "Dignity kits with sanitary products prepared for distribution in rural Kenya",
    tag: "Flagship Initiative",
    title: "IMARA HER Project & Mobile Lab",
    copy: "SFN's cornerstone community project. Vocational training, sanitary dignity products, and reproductive health services delivered to girls and women in rural Kenya — with a dedicated mobile clinic travelling to the most underserved interior communities.",
  },
  {
    num: "02",
    img: berlin,
    alt: "African diaspora women and European leaders in conversation at a summit",
    tag: "International Relations",
    title: "Empower HER Berlin Chapter",
    copy: "SFN's international wing in Germany. Convening African diaspora women and European leaders under the theme 'Leadership, Empowerment, Healing and Global Collaboration' — a reciprocal flow of talent, capital, and mentorship.",
  },
  {
    num: "03",
    img: mentorship,
    alt: "Young women in a leadership and mentorship workshop",
    tag: "Professional Growth",
    title: "SFN Leadership Academy",
    copy: "A transformative programme equipping women with executive presence, strategic thinking, and the tools to lead — unapologetically and on their own terms.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-cream">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Active Initiatives</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]">
              Projects &<br />
              <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
                Programmes
              </span>
            </h2>
            <p className="mt-7 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Three flagship programmes carrying SFN's work from the interior of rural Kenya to the
              diplomatic halls of Berlin — each one measurable, each one women-led.
            </p>
            <a href="#contact" className="btn-base btn-outline-dark mt-10">
              Get Involved
            </a>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="space-y-px">
              {projects.map((p, i) => (
                <Reveal as="li" key={p.num} delay={i * 90}>
                  <article className="hairline group grid gap-6 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
                    <div className="overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.alt}
                        width={1200}
                        height={1504}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ aspectRatio: "4 / 5" }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="font-display text-sm font-semibold tracking-[0.2em] text-gold/60">
                          {p.num}
                        </span>
                        <span className="text-[0.62rem] font-semibold tracking-[0.26em] uppercase" style={{ color: "var(--rose)" }}>
                          {p.tag}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl leading-tight font-semibold text-charcoal lg:text-[1.75rem]">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {p.copy}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
