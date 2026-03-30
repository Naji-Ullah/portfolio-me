import { useState, useEffect, useRef } from "react";
import SectionLabel from "./ui/SectionLabel";
import Tag from "./ui/Tag";
import { SKILLS } from "../data/portfolio";

function SkillGroup({ label, items, index }) {
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
    <div 
      ref={ref}
      className={`skills__group${isVisible ? " skills__group--visible" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skills__group-header">
        <span className="skills__group-number">0{index + 1}</span>
        <h3 className="skills__group-label">{label}</h3>
      </div>
      <div className="skills__tags">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section section--dark" id="skills">
      <div className="section__header">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="section__title">
          Technical
          <br />
          Arsenal
        </h2>
      </div>
      <div className="skills__grid">
        {SKILLS.map((group, index) => (
          <SkillGroup 
            key={group.label} 
            label={group.label} 
            items={group.items}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
