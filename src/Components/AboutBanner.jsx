import React from "react";
import "../Stylesheet/AboutBanner.css";

const AboutBanner = () => {
  return (
    <section
      className="about-banner"
      style={{ backgroundImage: `url(https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/About%20US/Better%20IT%20Solutions%20&%20Services%20at%20your%20Fingertips.png)` }}
    >
      <div className="about-banner-overlay"></div>

      <div className="about-banner-content">
        <h1>
          Better IT Solutions & Services at <br /> your Fingertips
        </h1>

        <a href="/Get-In-Touch" className="about-banner-btn">
          Get In Touch
          <img src="/images/arrow.png" alt="arrow" className="btn-arrow" />
        </a>
      </div>
    </section>
  );
};

export default AboutBanner;
