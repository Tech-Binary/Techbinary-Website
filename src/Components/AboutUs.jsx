import React from "react";
import "../Stylesheet/AboutUs.css";
import "../Stylesheet/global.css";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/about.png" alt="img" />
        </div>

        {/* Right Side - Content */}
        <div className="about-content">
          {/* Small blue tag (above watermark) */}
          <img src="/images/Frame.png" alt="line" className="line-img" />

          <h5 className="about-tag"> ABOUT US</h5>

          <h2>
            Empowering Your Digital <br />
            <span className="highlight">Transformation Journey</span>
          </h2>

          <p>
            At Techninary, we believe technology is more than just code—it’s the
            foundation of growth and innovation. We are a passionate team of
            developers, designers, and strategists dedicated to creating
            powerful websites, user-friendly apps, and custom IT solutions that
            transform businesses. From startups to enterprises, we’ve helped
            brands build their digital identity, streamline operations, and
            reach new customers. With a strong focus on quality, creativity, and
            reliability, we partner with you to turn your ideas into impactful
            digital experiences.
          </p>

          <a href="#" className="btn-out">
            Read More
            <img src="/images/arrow2.png" alt="arrow" className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
