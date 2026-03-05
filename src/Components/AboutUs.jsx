import React from "react";
import "../Stylesheet/AboutUs.css";
import "../Stylesheet/global.css";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/About%20Us.png" alt="img" />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          {/* Small blue tag (above watermark) */}
          <img src="/images/Frame.png" alt="line" className="line-img" />

          <h5 className="about-tag"> ABOUT US</h5>

          <h2>
           The Minds Behind Modern <br />
            <span className="highlight">Digital Experiences </span>
          </h2>

          <p>
           Great digital products rarely happen by chance. Tech Binary brings together front-end developers, back-end engineers, UI/UX designers, branding experts, and digital marketing specialists who collaborate to build powerful digital ecosystems. Every project moves through an amazing process shaped by creativity, technical precision, and strategic thinking, ensuring businesses receive solutions that not just function seamlessly but also drive engagement, efficiency, and measurable growth. 
          </p>

          <a href="/about-us" className="btn-out">
            Know More
            <img src="/images/arrow2.png" alt="arrow" className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
