import { useEffect } from "react";
import SectionLabel from "../ui/SectionLabel";
import Tag from "../ui/Tag";

function BulletPoint({ children }) {
  return (
    <li className="modal__bullet">
      <span className="modal__bullet-dot">▸</span>
      <span>{children}</span>
    </li>
  );
}

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        
        <div className="modal__header">
          <div className="modal__meta">
            <span className="modal__index">{project.index}</span>
            <span className="modal__domain">{project.domain}</span>
          </div>
          <h2 className="modal__title">{project.title}</h2>
          <SectionLabel>{project.role}</SectionLabel>
        </div>

        <div className="modal__tags">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="modal__content">
          <p className="modal__description">{project.short}</p>
          <ul className="modal__bullets">
            {project.bullets.map((bullet, i) => (
              <BulletPoint key={i}>{bullet}</BulletPoint>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
