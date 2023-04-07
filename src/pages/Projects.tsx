import "./styles/projects.css";

import { projectList as data } from "../helpers/dataProjects";
import { ProjectModal } from "../components";

export const Projects = () => {
  return (
    <section className="section__projects">
      <div className="projects-container">
        {data.map((project) => (
          <ProjectModal project={project}>
            <h2>Hello world</h2>
          </ProjectModal>
        ))}
      </div>
    </section>
  );
};
