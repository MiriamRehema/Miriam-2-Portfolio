import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contactme/>
   <Footer/>
   
   </>
  );
}
export default App;