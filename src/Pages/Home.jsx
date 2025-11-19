import React from "react";

import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Solutions from "../Components/Solutions";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Testimonal from "../Components/Testimonal";
import Design from "../Components/Design";
import { BiColor } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      {/* <Services /> */}

      <div className="solutions-wrapper">
        <Services />
        <Solutions />
      </div>

      <Banner />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "75px 0 0 0",
        }}
      >
        <img
          src="/images/Line.png"
          alt="section divider"
          className="divider-img"
          style={{
            width: "100%", // Automatically adjusts
            maxWidth: "1161px", // Original size limit
            height: "auto",
            display: "block", // Removes bottom extra space
            margin: "0 auto",
          }}
        />
      </div>
      <Blog />
      <Testimonal />
      <Design />
    </>
  );
};

export default Home;
