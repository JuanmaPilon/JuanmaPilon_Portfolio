import { projectInfo } from "../../data/projects";
import Cards from "./Cards";

const Projects = () => {
    return (
        <section id="projects" className="section-projects px-6 py-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-[source_code_pro]">My projects:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projectInfo.map((proyecto, index) => (
            <Cards key={index} {...proyecto} />
          ))}
        </div>
      </section>
    );
}

export default Projects;