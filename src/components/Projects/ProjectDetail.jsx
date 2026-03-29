import { useEffect, useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import Tag from "../ui/Tag";

function BulletPoint({ children }) {
  return (
    <li className="project-detail__bullet">
      <span className="project-detail__dot" aria-hidden="true">
        ▸
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function ProjectDetail({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [project]);

  if (!project) return null;

  return (
    <div className="project-detail" ref={ref}>
      <button
        className="project-detail__close"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
      <div className="project-detail__meta">
        <span className="project-card__index">
          {project.index} / {project.domain}
        </span>
        <SectionLabel>{project.role}</SectionLabel>
      </div>
      <h2 className="project-detail__title">{project.title}</h2>
      <div className="project-detail__tags">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <ul className="project-detail__bullets">
        {project.bullets.map((bullet, i) => (
          <BulletPoint key={i}>{bullet}</BulletPoint>
        ))}
      </ul>
    </div>
  );
}
