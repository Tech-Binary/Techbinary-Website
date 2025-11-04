import React from "react";
import "../Stylesheet/AboutBanner.css";

const AboutBanner = () => {
  return (
    <section
      className="about-banner"
      style={{ backgroundImage: `url(/images/aboutbanner.png)` }}
    >
      <div className="about-banner-overlay"></div>

      <div className="about-banner-content">
        <h1>
          Better IT Solutions & Services at <br /> your Fingertips
        </h1>

        <a href="#" className="about-banner-btn">
          Get In Touch
          <img src="/images/arrow.png" alt="arrow" className="btn-arrow" />
        </a>
      </div>
    </section>
  );
};

export default AboutBanner;
