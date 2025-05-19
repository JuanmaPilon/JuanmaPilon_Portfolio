import { projectInfo } from "../../data/projects";
import Cards from "./Cards";
import { useState } from "react";

const Projects = () => {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index : number) => {
    console.log(index)
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

    return (
        <section id="projects" className="section-projects px-6 py-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-[source_code_pro]">My projects:</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
          {projectInfo.map((proyecto, index) => (
          <Cards
            key={index}
            {...proyecto}
            isExpanded={expandedIndex === index}
            onClick={() => handleCardClick(index)}
          />
          ))}
        </div>
      </section>
    );
}

export default Projects;