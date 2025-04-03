import { Project } from "../data/Projects";

const  Cards = (props: Project) => {
    return (
        <div className="navbar">
            <h2 className="proyecto">{props.nombre}</h2>
            <img src="" alt="" />
            <p>{props.descripcion}</p>
        </div>
        );
}

export default Cards;