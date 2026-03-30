import SectionLabel from "./ui/SectionLabel";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg-word" aria-hidden="true">
        PRECISION
      </div>
      <div className="hero__content">
        <SectionLabel>Full Stack Developer · Lahore, PK</SectionLabel>
        <h1 className="hero__headline">
          Architecting
          <br />
          Digital Systems.
        </h1>
        <p className="hero__sub">
          Building robust, scalable web applications with React, Next.js, Django
          and Firebase. Obsessed with clean architecture, measurable performance
          and real world delivery.
        </p>
        <div className="hero__cta-row">
          <Button href="#projects" className="btn--view-work">
            View Work
          </Button>
          <Button href="#contact" variant="ghost">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
