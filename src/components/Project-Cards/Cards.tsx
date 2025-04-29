import { Project } from "../../data/projects";
import "./Cards.css";
import { useState } from "react";

const  Cards = (props: Project) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card bg-gradient-to-br bg-red-900 to-blue-900 rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:scale-115 hover:shadow-lg trasition-transform duration-300 ease-in-out border-black/60 border-2" onClick={() => setIsExpanded(!isExpanded)}>
            <h2 className="card-title text-xl text-white font-bold font semibold mb-2">{props.nombre}</h2>
            <img className="card-image w-full h-50 object-cover rounded-md mb-3" src={props.imagen} alt={props.nombre} />
            <p className="card-description text-white text-sm">{props.descripcion}</p>
        </div>
        );
}

export default Cards;