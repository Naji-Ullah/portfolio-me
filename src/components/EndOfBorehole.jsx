import { PERSON } from "../data/portfolio";
import { BOREHOLE } from "../data/strata";

export default function EndOfBorehole() {
  return (
    <section id="contact" className="eob" aria-labelledby="contact-title">
      <p className="eob__seal mono" aria-hidden="true">
        ■ ■ ■
      </p>
      <p className="eob__line mono">
        END OF BOREHOLE — TOTAL DEPTH {BOREHOLE.totalDepth.toFixed(1)} m
      </p>
      <p className="eob__line mono">WATER TABLE: REACHED · REFUSAL: NONE</p>

      <h2 id="contact-title" className="eob__title">
        Contact the driller
      </h2>
      <p className="eob__copy">
        Available for interesting work. Email is the fastest route to the rig;
        the other two also reach it.
      </p>

      <p className="eob__markers">
        <a className="marker" href={`mailto:${PERSON.email}`}>
          {PERSON.email}
        </a>
        <a
          className="marker marker--ghost"
          href={PERSON.github}
          target="_blank"
          rel="me noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="marker marker--ghost"
          href={PERSON.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </p>

      <p className="eob__stamp mono" aria-hidden="true">
        LOGGED BY N. ULLAH
        <br />
        {BOREHOLE.site}
      </p>

      <footer className="eob__footer mono">
        <span>
          {BOREHOLE.coords} · GROUND ELEV. {BOREHOLE.elevation}
        </span>
        <span>HAND-BUILT · REACT + VITE · ONE FONT · NO TRACKERS</span>
        <span>© MMXXVI {PERSON.name.toUpperCase()}</span>
      </footer>
    </section>
  );
}
