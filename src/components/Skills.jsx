import SectionLabel from "./ui/SectionLabel";
import Tag from "./ui/Tag";
import { SKILLS } from "../data/portfolio";

function SkillGroup({ label, items }) {
  return (
    <div className="skills__group">
      <h3 className="skills__group-label">{label}</h3>
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
        {SKILLS.map((group) => (
          <SkillGroup key={group.label} label={group.label} items={group.items} />
        ))}
      </div>
    </section>
  );
}
