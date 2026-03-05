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
          <span className="white-text">BUILDING DIGITAL   </span>
          <span className="blue-text">FUTURES</span>
        </div>

        <h1>
          Smart Technology Built   <br />
          for <span className="highlight">Ambitious Brands </span>
        </h1>

        <p className="subtext">
      Tech Binary brings together elite developers, UI/UX thinkers, and digital strategists to build intelligent platforms, powerful brands, and future-ready digital ecosystems. 
        </p>

        <a href="#" className="btn-hero">
         Discover Our Capabilities
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
