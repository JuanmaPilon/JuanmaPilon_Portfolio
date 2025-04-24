import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Projects from "./components/Project-Cards/Projects";

function App() {
  return (
    <>
    <NavBar/>
     <Header/>
     <About/>
     <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
