import { Project } from "../../data/projects";
import "./Cards.css";

const  Cards = (props: Project) => {
    return (
        <div className="card bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-115 hover:shadow-lg trasition-transform duration-300 ease-in-out">
            <h2 className="card-title text-xl font semibold mb-2">{props.nombre}</h2>
            <img className="card-image w-full h-50 object-cover rounded-md mb-3" src={props.imagen} alt={props.nombre} />
            <p className="card-description text-gray-600 text-sm">{props.descripcion}</p>
        </div>
        );
}

export default Cards;