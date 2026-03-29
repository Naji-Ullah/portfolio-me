import Tag from "../ui/Tag";

export default function ProjectCard({ project, onClick }) {
  return (
    <button className="project-card" onClick={onClick}>
      <div className="project-card__header">
        <span className="project-card__domain">{project.domain}</span>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__role">{project.role}</p>
      <p className="project-card__short">{project.short}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="project-card__footer">
        <span className="project-card__cta">View Details</span>
        <span className="project-card__arrow">→</span>
      </div>
    </button>
  );
}
