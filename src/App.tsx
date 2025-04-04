import { projectInfo } from "./data/projects";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Cards from "./components/Project-Cards/Cards";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <>
    <NavBar/>
     <Header/>
     <About/>
     <section id="projects" className="section-projects">
     <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
     {projectInfo.map((proyecto, index) => (
    <Cards
    key={index}
    nombre={proyecto.nombre}
    imagen={proyecto.imagen}
    descripcion={proyecto.descripcion}
    />
     ))}
     </div>
     </section>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
