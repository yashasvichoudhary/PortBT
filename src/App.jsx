import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import PortfolioFront from "./components/Layout";
import About from "./components/About";
import Contect from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
 
function App() {
  return (
    <>
 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<PortfolioFront/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contect/>}/>
          <Route path="/projects" element={<ProjectCard/>}/>
        </Routes>
      </Router>
   </>
 
  );
}
 
export default App;
 