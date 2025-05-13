import { Project } from "../../data/projects";
import "./Cards.css";
import { useState } from "react";

const  Cards = (props: Project) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }
return (
  <div
    className={`card cursor-pointer bg-gradient-to-br from-red-900 to-blue-900 rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out border-black/60 border-2 ${
      isExpanded ? "scale-105" : ""
    }`}
    onClick={handleClick}
  >
    <h2 className="text-xl text-white font-bold mb-2">{props.nombre}</h2>
    <img
      className="w-full h-48 object-cover rounded-md mb-3"
      src={props.imagen}
      alt={props.nombre}
    />
    <p className="text-white text-sm">{props.descripcion}</p>

    {isExpanded && (
      <div className="mt-4 text-white text-sm space-y-2">
        {props.descripcion && <p>{props.descripcion}</p>}
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Ver proyecto
          </a>
        )}
      </div>
    )}
  </div>
);



}

export default Cards;