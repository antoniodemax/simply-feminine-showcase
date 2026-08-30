import eventsBg from "@/assets/events-bg.jpg";
import { Eyebrow, Reveal } from "./Reveal";

const events = [
  {
    date: "TBC 2026",
    place: "Nairobi · KICC",
    title: "SFN Grand Ball",
    tag: "Invitation Only",
    exclusive: true,
    copy: "SFN's flagship charity ball at the Kenyatta International Convention Centre — a curated gathering of diplomats, corporate leaders, and changemakers.",
    cta: "Request Invitation",
  },
  {
    date: "TBC 2026",
    place: "Nairobi Serena",
    title: "Nairobi Charity Gala Night",
    tag: "Invitation Only",
    exclusive: true,
    copy: "An elegant evening of philanthropy and recognition supporting the IMARA HER Mobile Lab and girl-child empowerment initiatives across rural Kenya.",
    cta: "Register Interest",
  },
  {
    date: "TBC 2026",
    place: "Schlosshotel Berlin",
    title: "Empower HER Networking Dinner",
    tag: "International Summit",
    exclusive: false,
    copy: "A luxury women's networking and empowerment dinner in Berlin, convening African and European women leaders under H.E. Ambassador Stella Mokaya Orina.",
    cta: "Request Invitation",
  },
];

export function Events() {
  return (
    <section id="events" className="section-pad relative isolate overflow-hidden" style={{ backgroundColor: "var(--charcoal)" }}>
      <img
        src={eventsBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--charcoal) 0%, color-mix(in oklab, var(--charcoal) 78%, transparent) 45%, var(--charcoal) 100%)",
        }}
      />

      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow tone="rose">Calendar of Impact</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.4rem]">
              Signature <span className="italic-accent">Events</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/65">
              SFN's flagship charity balls are invitation-only and not sold to the public. Attendance
              is reserved for verified diplomats, corporate leaders, and strategic partners.
            </p>
          </div>
        </Reveal>

        <ul className="mt-16 space-y-px">
          {events.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 90}>
              <article
                className="group grid items-start gap-6 py-9 lg:grid-cols-12 lg:gap-10"
                style={{ borderTop: "1px solid color-mix(in oklab, var(--cream) 14%, transparent)" }}
              >
                <div className="lg:col-span-3">
                  <p className="font-display text-2xl font-semibold text-rose-light">{e.date}</p>
                  <p className="mt-1 text-[0.66rem] font-semibold tracking-[0.24em] text-cream/50 uppercase">
                    {e.place}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <span
                    className="inline-flex px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.24em] uppercase"
                    style={
                      e.exclusive
                        ? {
                            color: "var(--rose-light)",
                            border: "1px solid color-mix(in oklab, var(--rose-light) 40%, transparent)",
                            backgroundColor: "color-mix(in oklab, var(--rose-light) 12%, transparent)",
                          }
                        : {
                            color: "var(--gold)",
                            border: "1px solid color-mix(in oklab, var(--gold) 45%, transparent)",
                          }
                    }
                  >
                    {e.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-tight font-semibold text-cream lg:text-3xl">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{e.copy}</p>
                </div>
                <div className="lg:col-span-3 lg:flex lg:justify-end">
                  <a href="#contact" className="btn-base btn-outline">
                    {e.cta}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
