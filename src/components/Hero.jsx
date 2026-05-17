import { PERSON } from "../data/portfolio";
import HeroFlower from "./HeroFlower";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroFlower />
      <div className="hero__meta">
        <span>The Logbook</span>
        <span className="hero__rule" aria-hidden="true" />
        <span>{PERSON.location}</span>
        <span className="hero__rule" aria-hidden="true" />
        <span>MMXXVI</span>
      </div>

      <h1 className="display">{PERSON.name}</h1>

      <p className="hero__role">{PERSON.role}</p>

      <p className="hero__lede">
        <span className="dropcap">T</span>his is the working logbook of a
        full-stack engineer in Lahore; React and Next.js where people can see
        it, Django and Firebase where they can&rsquo;t. Aws and Azure are the
        clouds I fly in, 
        I keep notes because
        memory is a liar and a good commit message ages better than I do. The
        entries are below.
      </p>

      <div className="hero__actions">
        <a href="#logbook" className="link-underline">
          Read the logbook
        </a>
        <a href="#contact" className="link-underline">
          Send word
        </a>
      </div>

      <a href="#logbook" className="hero__scroll" aria-hidden="true">
        Pls Scroll
      </a>
    </section>
  );
}
