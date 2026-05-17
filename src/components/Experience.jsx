import useReveal from "../hooks/useReveal";
import { EXPERIENCE, EDUCATION } from "../data/portfolio";

function Para({ children }) {
  const [ref, shown] = useReveal();
  return (
    <p ref={ref} className={`served__para${shown ? " is-in" : ""}`}>
      {children}
    </p>
  );
}

export default function Experience() {
  return (
    <section className="section" id="time">
      <header className="section__head">
        <span className="kicker">Where the hours went</span>
        <h2 className="section__title">Time Served</h2>
      </header>

      <div className="served">
        <div className="served__head">
          <div>
            <h3 className="served__company">{EXPERIENCE.company}</h3>
            <p className="served__role">{EXPERIENCE.role}</p>
          </div>
          <span className="served__period">{EXPERIENCE.period}</span>
        </div>

        <div className="served__body">
          {EXPERIENCE.log.map((p, i) => (
            <Para key={i}>{p}</Para>
          ))}
        </div>

        <p className="served__footnote">
          <span className="kicker">Education</span>
          {EDUCATION.degree}, {EDUCATION.school}. {EDUCATION.aside}{" "}
          <span className="served__years">{EDUCATION.period}</span>
        </p>
      </div>
    </section>
  );
}
