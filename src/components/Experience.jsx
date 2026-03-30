import { useState, useEffect, useRef } from "react";
import SectionLabel from "./ui/SectionLabel";
import { EXPERIENCE, EDUCATION } from "../data/portfolio";

function BulletPoint({ children, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <li 
      ref={ref}
      className={`exp__bullet${isVisible ? " exp__bullet--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <span className="exp__bullet-dot">•</span>
      <span>{children}</span>
    </li>
  );
}

function Timeline({ company, role, period, bullets }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`exp__timeline${isVisible ? " exp__timeline--visible" : ""}`}>
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
            <BulletPoint key={i} index={i}>{bullet}</BulletPoint>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Education({ degree, school }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`exp__education${isVisible ? " exp__education--visible" : ""}`}>
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
