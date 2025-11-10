import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/PortfolioDo.css";

const PortfolioDo = () => {
  return (
    <section className="portfolio-do">
      {/* Left Section */}
      <div className="portfolio-do-left">
        <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/What%20we%20do.png" alt="Portfolio Illustration" className="portfolio-do-img" />
      </div>

      {/* Right Section */}
      <div className="portfolio-do-right">
        <p className="portfolio-do-subtitle">
          <img src="/images/Frame.png" alt="line" className="portfolio-do-frame" />
          WHAT WE DO
        </p>

        <h2 className="portfolio-do-title">
          A Smarter Website Delivers a <br />
          <span>Seamless User Experience</span>
        </h2>

 <div className="portfolio-do-desc">
  <p>
    At TechBinary, we believe a powerful website is more than just pixels and code — 
    it’s an experience built around your users. Our team crafts seamless, 
    high-performing digital platforms that drive interaction, trust, and measurable results.
  </p>

  <p>
    A better website isn’t just about great design — it’s about creating intuitive, 
    engaging experiences that connect users with your brand effortlessly. 
    At TechBinary, we combine creativity and technology to craft websites 
    that are fast, responsive, and built to deliver measurable results.
  </p>

  <p>
    Great design meets great experience. We build websites that not only look exceptional 
    but also deliver smooth navigation, fast performance, and user journeys 
    that leave a lasting impression.
  </p>
</div>


       

        <a href="/Get-In-Touch" className="portfolio-do-btn">
          Get In Touch
          <img
            src="/images/arrow2.png"
            alt="arrow"
            className="portfolio-do-arrow"
          />
        </a>
      </div>
    </section>
  );
};

export default PortfolioDo;
