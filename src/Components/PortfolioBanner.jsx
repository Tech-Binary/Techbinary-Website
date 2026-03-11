import React from "react";
import "../Stylesheet/PortfolioBanner.css";

const PortfolioBanner = () => {
  return (
    <section
      className="portfolio-banner"
      style={{ backgroundImage: `url(https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/Ready%20to%20make%20your%20brand%20legendary_.png)` }}
    >
      <div
  className="portfolio-banner"
 
>
  <div className="portfolio-banner-content">
    <h1>
    Planning a New  <span>Digital Product</span> <br />
        or Platform?    </h1>
    <p>
  Share your requirements with our engineers and discover how structured development and modern tools can bring your platform to life. 
    </p>

    <a href="/Get-In-Touch" className="portfolio-banner-btn">
     Start Your Project
      <img
        src="/images/arrow.png"
        alt="arrow"
        className="btn-arrow"
      />
    </a>
  </div>
</div>

       
    </section>
  );
};

export default PortfolioBanner;
