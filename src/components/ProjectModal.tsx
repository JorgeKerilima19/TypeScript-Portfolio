import { useState } from "react";

interface PropsVerification {
  project: Project;
}
interface Project {
  projectName: string;
  projectImage: React.ReactElement;
  projectDescription: string;
  projectSs?: string;
  projectLink?: string;
}

export const ProjectModal = ({ project }: PropsVerification) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="project-card">
        <>{project.projectImage}</>
        <h3 className="project-card__title">{project.projectName}</h3>
        <p className="project-card__description">
          {project.projectDescription}
        </p>
        <button className="project-card__button" onClick={() => setOpen(!open)}>
          more
        </button>
      </article>
      <div className={`card-modal ${open ? "open" : ""}`}>
        <section className="card-modal__container">
          <h3 className="project-card__title">{project.projectName}</h3>
          <button onClick={() => setOpen(!open)}>Close</button>
        </section>
      </div>
    </>
  );
};
