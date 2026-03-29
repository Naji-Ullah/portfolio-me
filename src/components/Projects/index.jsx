import { useState, useEffect, useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { PROJECTS } from "../../data/portfolio";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowScrollButton(scrollLeft + clientWidth < scrollWidth - 50);
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => scrollEl?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelect = (project) => {
    setActiveProject(project);
  };

  const handleClose = () => setActiveProject(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="section" id="projects">
      <div className="section__header">
        <SectionLabel>Curated Systems [0{PROJECTS.length}]</SectionLabel>
        <h2 className="section__title">
          Selected
          <br />
          Works
        </h2>
      </div>
      <div className="projects__scroll-container">
        <div className="projects__scroll" ref={scrollRef}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleSelect(project)}
            />
          ))}
        </div>
        {showScrollButton && (
          <button
            className="projects__scroll-btn"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            →
          </button>
        )}
      </div>
      {activeProject && (
        <ProjectDetailModal project={activeProject} onClose={handleClose} />
      )}
    </section>
  );
}
