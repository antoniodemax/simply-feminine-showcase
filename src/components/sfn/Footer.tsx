import logo from "@/assets/sfn-logo.png";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Pillars", href: "#pillars" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Events", href: "#events" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--charcoal)" }}>
      <div className="shell py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <img src={logo} alt="Simply Feminine Network" width={56} height={56} className="h-12 w-12 rounded-full object-cover" />
              <span>
                <span className="block font-display text-sm font-semibold tracking-[0.18em] text-cream uppercase">
                  Simply Feminine
                </span>
                <span className="mt-1 block text-[0.6rem] font-medium tracking-[0.42em] text-gold uppercase">Network</span>
              </span>
            </a>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-cream/60">
              A movement of women restoring dignity, building leadership, and creating lasting
              impact across Kenya and beyond.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">{c.title}</h3>
              <ul className="mt-6 space-y-3">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">Partner With Us</h3>
            <p className="mt-6 text-sm leading-relaxed text-cream/60">
              hello@simplyfemininenetwork.org
              <br />
              Nairobi, Kenya
            </p>
            <a href="#contact" className="btn-base btn-outline mt-7">
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="hairline-light mt-16 flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.7rem] tracking-[0.14em] text-cream/45 uppercase">
            &copy; {new Date().getFullYear()} Simply Feminine Network
          </p>
          <p className="text-[0.7rem] tracking-[0.14em] text-cream/45 uppercase">Dignity · Leadership · Legacy</p>
        </div>
      </div>
    </footer>
  );
}
