import React from "react";

import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Solutions from "../Components/Solutions";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Testimonal from "../Components/Testimonal";
import Design from "../Components/Design";

const Home = () => {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <Services/>
 

{/* <div
  style={{
    backgroundImage: 'url("/images/solutionbg.png")',
    backgroundSize: "cover",
     bbackgroundPosition: "right 30px",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "80px",   // change height as needed
  }}
></div> */}

  <Solutions />
     <Banner />
    <Blog/>
    <Testimonal/>
    <Design/>
    </>
  )
};

export default Home;
