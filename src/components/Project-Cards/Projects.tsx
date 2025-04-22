import { projectInfo } from "../../data/projects";
import Cards from "./Cards";

const Projects = () => {
    return (
        <section id="projects" className="section-projects px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Mis Proyectos:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectInfo.map((proyecto, index) => (
            <Cards key={index} {...proyecto} />
          ))}
        </div>
      </section>
    );
}

export default Projects;