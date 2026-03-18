import React from "react";
import "../Stylesheet/Banner.css";
import "../Stylesheet/global.css";

const Banner = () => {
  return (
    <div className="banner">
      {/* Background Image */}
      <img
        src="/images/blue-bg.png"
        alt="Banner"
        className="banner-img"
      />

      <div className="banner-content">
        {/* Left Side Text */}
        <div className="banner-text">
          <h2 style={{lineHeight:'55px'}}>
           You Bring the Idea. <br />
            <span className="highlight">We Build the Technology.</span>
          </h2>
          <p>
           Every successful digital product starts with a clear understanding of the problem to solve it immediately. At Tech Binary, ideas move through a structured process that includes discovery, design, development, and testing. This approach allows businesses to transform concepts into reliable digital platforms while ensuring performance, scalability, and long-term usability. 
          </p>
        </div>

        {/* Right Side Numbers */}
        <div className="banner-numbers">
          <div
            className="number-box"
            style={{ backgroundColor: "White", color: "#263238" }}
          >
            <h2>50+</h2>
            <p style={{ color: "#263238" }}>Happy Clients</p>
          </div>

          <div
            className="number-box"
            style={{
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <h2>500+</h2>
            <p style={{ color: "white" }}>Projects Delivered </p>
          </div>

          <div
            className="number-box"
            style={{
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <h2>100+</h2>
            <p style={{ color: "white" }}>Technology Specialists </p>
          </div>

          <div
            className="number-box"
            style={{ backgroundColor: "white", color: "#263238" }}
          >
            <h2>80+</h2>
            <p style={{ color: "#263238" }}>Team Members </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
