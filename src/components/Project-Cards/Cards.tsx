import { Project } from "../../data/projects";
import "./Cards.css";

const  Cards = (props: Project) => {
    return (
        <div className="card">
            <h2 className="card-title">{props.nombre}</h2>
            <img className="card-image" src={props.imagen} alt={props.nombre} />
            <p className="card-description">{props.descripcion}</p>
        </div>
        );
}

export default Cards;