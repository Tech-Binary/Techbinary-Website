import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Chooseus.css";

const Chooseus = () => {
  return (
    <section className="why-choose-us">
      {/* Left Section */}
      <div className="why-left">
        <img src="/images/chosseus.png" alt="Why Choose Us" className="main-img" />
      </div>

      {/* Right Section */}
      <div className="why-right">
        <p className="section-ustitle">
          <img src="/images/Frame.png" alt="line" className="frame-img" />
          WHY CHOOSE US
        </p>

        <h2 className="section-title">
          Driving Business Growth <br />
          <span>Through Next-Gen IT Solutions</span>
        </h2>

        <p className="section-desc">
          At <strong>Techbinary</strong>, we believe technology is more than just code —
          it’s the foundation of growth and innovation. We are a passionate team of
          developers, designers, and strategists dedicated to creating powerful websites,
          user-friendly apps, and custom IT solutions that transform businesses.
        </p>

        <div className="features">
          <ul>
            <li>Crafting Digital World</li>
            <li>Advancing Technology</li>
            <li>Technology That Power</li>
            <li>Digital Solution</li>
          </ul>
          <ul>
            <li>Innovative Minds</li>
            <li>Next-Level IT</li>
            <li>Art of Technology</li>
            <li>Accelerate with Cutting</li>
          </ul>
        </div>

        <a href="#" className="contact-btn">
          Get In Touch
          <img
            src="/images/Frame.png"
            alt="arrow"
            className="btn-arrow"
          />
        </a>
      </div>
    </section>
  );
};

export default Chooseus;
