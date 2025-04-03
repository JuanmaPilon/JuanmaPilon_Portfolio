import { projectInfo } from "./components/data/Projects";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Cards from "./components/Project-Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <NavBar/>
     <Header/>
      <Cards
      nombre={projectInfo[0].nombre}
      imagen={projectInfo[0].imagen}
      descripcion={projectInfo[0].descripcion}
      />
      <Footer/>
    </>
  );
}

export default App;
