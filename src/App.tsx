import { projectInfo } from "./data/projects";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Cards from "./components/Project-Cards/Cards";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
    <NavBar/>
     <Header/>
     {projectInfo.map((proyecto, index) => (
    <Cards
    key={index}
    nombre={proyecto.nombre}
    imagen={proyecto.imagen}
    descripcion={proyecto.descripcion}
    />
     ))}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
