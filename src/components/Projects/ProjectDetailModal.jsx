import { useEffect, useRef } from "react";

export default function ProjectDetailModal({ project, onClose }) {
  const backRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    backRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="reader" onClick={onClose} role="presentation">
      <article
        className="reader__panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="reader__bar">
          <button
            ref={backRef}
            className="reader__back"
            onClick={onClose}
            aria-label="Close and go back"
          >
            ← Back
          </button>
          <span className="reader__bar-title">{project.no}</span>
        </div>

        <div className="reader__scroll">
          <div className="reader__meta">
            <span>{project.domain}</span>
            <span className="reader__sep" aria-hidden="true">
              /
            </span>
            <span>{project.role}</span>
          </div>

          <h2 className="reader__title">{project.title}</h2>
          <p className="reader__standfirst">{project.standfirst}</p>
          <p className="reader__log">{project.log}</p>

          <p className="reader__notes-label">From the notes</p>
          <ul className="reader__notes">
            {project.notes.map((n, i) => (
              <li key={i} className="reader__note">
                <span className="reader__tick" aria-hidden="true">
                  ›
                </span>
                <span>{n}</span>
              </li>
            ))}
          </ul>

          <p className="reader__tags">
            {project.tags.map((t, i) => (
              <span key={t}>
                {t}
                {i < project.tags.length - 1 && (
                  <span aria-hidden="true">&nbsp;·&nbsp;</span>
                )}
              </span>
            ))}
          </p>

          <button className="reader__done" onClick={onClose}>
            ← Back to the logbook
          </button>
        </div>
      </article>
    </div>
  );
}
