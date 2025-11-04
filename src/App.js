import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./LandingPage/Pages/Home";
import About from "./LandingPage/Pages/About";
import Portfolio from "./LandingPage/Pages/Portfolio";
import Career from "./LandingPage/Pages/Career";
import Blog from "./LandingPage/Pages/Blog";
import Services from "./LandingPage/Pages/Services";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";

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
