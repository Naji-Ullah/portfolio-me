import SectionLabel from "./ui/SectionLabel";
import { EXPERIENCE, EDUCATION } from "../data/portfolio";

function BulletPoint({ children }) {
  return (
    <li className="exp__bullet">
      <span className="exp__bullet-dot">•</span>
      <span>{children}</span>
    </li>
  );
}

function Timeline({ company, role, period, bullets }) {
  return (
    <div className="exp__timeline">
      <div className="exp__dot" aria-hidden="true" />
      <div className="exp__item">
        <div className="exp__item-head">
          <div>
            <h3 className="exp__company">{company}</h3>
            <p className="exp__role">{role}</p>
          </div>
          <span className="exp__period">{period}</span>
        </div>
        <ul className="exp__bullets">
          {bullets.map((bullet, i) => (
            <BulletPoint key={i}>{bullet}</BulletPoint>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Education({ degree, school }) {
  return (
    <div className="exp__education">
      <SectionLabel>Education</SectionLabel>
      <p className="exp__degree">{degree}</p>
      <p className="exp__school">{school}</p>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section section--dark" id="experience">
      <div className="section__header">
        <SectionLabel>Work History</SectionLabel>
        <h2 className="section__title">
          Career
          <br />
          Path
        </h2>
      </div>
      <Timeline {...EXPERIENCE} />
      <Education {...EDUCATION} />
    </section>
  );
}
