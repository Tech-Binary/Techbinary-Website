import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
     
      <div
        className="overlay"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            linear-gradient(270deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.66) 74.72%, #000000 100%),
            url("https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Desktop%20Banner.gif")`
        }}
      ></div>

      {/* ✅ Watermark text */}
      <div className="watermark">TECHBINARY</div>

      {/* Main hero content */}
      <div className="hero-content">
        <div className="tagline-box">
          <span className="white-text">WELCOME TO </span>
          <span className="blue-text">TECHBINARY</span>
        </div>

        <h1>
          Software Engineering <br />
          And <span className="highlight">IT Consulting</span>
        </h1>

        <p className="subtext">
          With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.
        </p>

        <a href="#" className="btn-hero">
          Discover More
           <img
            src="/images/arrow.png"
            alt="arrow"
            className="btn-arow"
          /> <span style={{ fontSize: "1.2rem" }}></span>
        </a>
      </div>

      {/* Floating logo image */}
      <img src="/images/circlelogo.png" alt="TechBinary Logo" className="hero-logo" />
       <img src="/images/hh.png" alt="TechBinary Logo" className="hero-hh" />
    </section>
  );
};

export default Hero;
