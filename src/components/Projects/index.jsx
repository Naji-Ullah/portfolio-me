import { useState } from "react";
import useReveal from "../../hooks/useReveal";
import ProjectDetailModal from "./ProjectDetailModal";
import { PROJECTS } from "../../data/portfolio";

function Entry({ project, onOpen }) {
  const [ref, shown] = useReveal();
  return (
    <li ref={ref} className={`entry${shown ? " is-in" : ""}`}>
      <button
        type="button"
        className="entry__btn"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title}`}
      >
        <span className="entry__no">{project.no}</span>
        <span className="entry__body">
          <span className="entry__title">{project.title}</span>
          <span className="entry__standfirst">{project.standfirst}</span>
        </span>
        <span className="entry__meta">
          <span className="entry__role">{project.role}</span>
          <span className="entry__domain">{project.domain}</span>
        </span>
        <span className="entry__open" aria-hidden="true">
          Open entry →
        </span>
      </button>
    </li>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="logbook">
      <header className="section__head">
        <span className="kicker">
          {PROJECTS.length} entries — newest first
        </span>
        <h2 className="section__title">The Logbook</h2>
        <p className="section__intro">
          A running record of things I&rsquo;ve shipped. Each one is a short
          entry; open it for the full note.
        </p>
      </header>

      <ol className="entries">
        {PROJECTS.map((project) => (
          <Entry key={project.id} project={project} onOpen={setActive} />
        ))}
      </ol>

      {active && (
        <ProjectDetailModal project={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
