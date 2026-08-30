import { useEffect, useState } from "react";
import logo from "@/assets/sfn-logo.png";

const links = [
  { label: "Our Story", href: "#story" },
  { label: "Pillars", href: "#pillars" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled || open ? "color-mix(in oklab, var(--charcoal) 92%, transparent)" : "transparent",
        backdropFilter: scrolled || open ? "blur(14px)" : "none",
        borderBottom: scrolled || open ? "1px solid color-mix(in oklab, var(--cream) 12%, transparent)" : "1px solid transparent",
      }}
    >
      <nav className="shell flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Simply Feminine Network"
            width={56}
            height={56}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="hidden sm:block">
            <span className="block font-display text-[0.95rem] font-semibold leading-none tracking-[0.18em] text-cream uppercase">
              Simply Feminine
            </span>
            <span className="mt-1 block text-[0.6rem] font-medium leading-none tracking-[0.42em] text-gold uppercase">
              Network
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[0.72rem] font-medium tracking-[0.2em] text-cream/80 uppercase transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-base btn-primary hidden lg:inline-flex">
          Partner With Us
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className="block h-px w-6 bg-cream transition-transform duration-300"
            style={open ? { transform: "translateY(6px) rotate(45deg)" } : undefined}
          />
          <span className="block h-px w-6 bg-cream transition-opacity duration-300" style={open ? { opacity: 0 } : undefined} />
          <span
            className="block h-px w-6 bg-cream transition-transform duration-300"
            style={open ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined}
          />
        </button>
      </nav>

      <div
        className="overflow-hidden transition-[max-height] duration-500 lg:hidden"
        style={{ maxHeight: open ? "26rem" : 0 }}
      >
        <ul className="shell flex flex-col gap-1 pb-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-cream/10 py-3.5 text-[0.78rem] font-medium tracking-[0.2em] text-cream/85 uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-base btn-primary">
              Partner With Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
