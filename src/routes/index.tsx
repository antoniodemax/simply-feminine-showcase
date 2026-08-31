import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/sfn/Nav";
import { Hero } from "@/components/sfn/Hero";
import { Story } from "@/components/sfn/Story";
import { Pillars } from "@/components/sfn/Pillars";
import { Projects } from "@/components/sfn/Projects";
import { Events } from "@/components/sfn/Events";
import { Testimonials } from "@/components/sfn/Testimonials";
import { Partners } from "@/components/sfn/Partners";
import { Sponsorship } from "@/components/sfn/Sponsorship";
import { Contact } from "@/components/sfn/Contact";
import { Footer } from "@/components/sfn/Footer";

const title = "Simply Feminine Network — Dignity, Leadership & Legacy for Women";
const description =
  "Simply Feminine Network empowers women across Kenya through dignity programmes, mentorship, leadership development and community partnerships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Pillars />
        <Projects />
        <Events />
        <Testimonials />
        <Partners />
        <Sponsorship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
