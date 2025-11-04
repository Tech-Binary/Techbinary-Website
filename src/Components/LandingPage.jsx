// src/LandingPage/LandingPage.jsx
import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Solutions from "./Solutions";
import Banner from "./Banner";
import Blog from "./Blog"
import Carousel3D from "./Testimonal";
import Design from "./Design";
import Footer from "./Footer";
import "./Style.css";

const LandingPage = () => {
  return (
    <div>
      <TopBar/>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Solutions/>
      <Banner/>
      <Blog/>
      <Carousel3D/>
      <Design/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
