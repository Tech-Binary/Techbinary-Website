import React from "react";
import "./Stylesheet/AboutBanner.css";
import bannerBg from "./images/aboutbanner.png";

const AboutBanner = () => {
  return (
    <section
      className="about-banner"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="about-banner-overlay"></div>

      <div className="about-banner-content">
        <h1>
          Better IT Solutions & Services at <br /> your Fingertips
        </h1>

        <a href="#" className="about-banner-btn">
          Get In Touch
          <img
            src={require("./images/arrow.png")}
            alt="arrow"
            className="btn-arrow"
          />
        </a>
      </div>
    </section>
  );
};

export default AboutBanner;
