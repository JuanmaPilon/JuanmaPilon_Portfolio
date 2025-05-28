import { Project } from "../../data/projects";
import "./Cards.css";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps extends Project {
  isExpanded: boolean;
  onClick: () => void;
}

const Cards = (props: CardProps) => {
  return (
    <div
      className={`card cursor-pointer bg-black/40 rounded-xl shadow-md p-8 flex flex-col items-center text-center font-[source_code_pro] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out border-black/60 border-2 ${
        props.isExpanded ? "scale-105" : ""
      }`}
      onClick={props.onClick}
    >
      <h2 className="text-xl text-white font-bold mb-2">{props.nombre}</h2>
      <img
        className="w-full h-48 object-cover object-center rounded-md mb-3"
        src={props.imagen}
        alt={props.nombre}
      />
      <p className="text-white text-sm">{props.shortDescription}</p>

      <AnimatePresence>
        {props.isExpanded && (
          <motion.div
            className="mt-4 text-white text-sm space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {props.descripcion && <p>{props.descripcion}</p>}
            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
              >
                See Project
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
