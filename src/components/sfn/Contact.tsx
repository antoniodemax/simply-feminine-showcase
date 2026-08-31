import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";

const details = [
  { label: "Email", value: "hello@simplyfemininenetwork.org" },
  { label: "Phone", value: "+254 700 000 000" },
  { label: "Office", value: "Nairobi, Kenya" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.2rem]">
            Let&rsquo;s build
            <br />
            <span className="font-light italic" style={{ color: "var(--burgundy)" }}>
              something lasting
            </span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            Whether you are a corporate partner, a donor, or a woman ready to join the network, we
            would love to hear from you.
          </p>

          <ul className="mt-12">
            {details.map((d) => (
              <li key={d.label} className="hairline py-5">
                <span className="block text-[0.62rem] font-semibold tracking-[0.28em] uppercase" style={{ color: "var(--gold)" }}>
                  {d.label}
                </span>
                <span className="mt-2 block font-display text-lg text-charcoal">{d.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-8 lg:p-12"
            style={{ backgroundColor: "var(--warm-white)", boxShadow: "var(--shadow-soft)" }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Organisation" name="org" required={false} />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" required={false} />
            </div>

            <label className="mt-6 block">
              <span className="block text-[0.62rem] font-semibold tracking-[0.24em] uppercase" style={{ color: "var(--muted-foreground)" }}>
                How can we partner?
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-3 w-full resize-none border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
                style={{ borderColor: "var(--border)" }}
              />
            </label>

            <button type="submit" className="btn-base btn-primary mt-10">
              {sent ? "Message received — thank you" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[0.62rem] font-semibold tracking-[0.24em] uppercase" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
        style={{ borderColor: "var(--border)" }}
      />
    </label>
  );
}
