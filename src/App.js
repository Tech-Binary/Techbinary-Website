import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Career from "./Pages/Career";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Blog" element={<Blog />} />
         <Route path="/Services" element={<Services />} />

 

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
