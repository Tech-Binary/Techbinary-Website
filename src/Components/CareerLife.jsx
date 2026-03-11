import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/CareerLife.css";

const CareerLife = () => {
  return (
    <section className="careerlife-section">
      {/* Left Section */}
      <div className="careerlife-left">
        <img
          src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Life%20at%20Techbinary.png"
          alt="Career Life Illustration"
          className="careerlife-img"
        />
      </div>

      {/* Right Section */}
      <div className="careerlife-right">
        <p className="careerlife-subtitle">
          <img
            src="/images/Frame.png"
            alt="line"
            className="careerlife-frame"
          />
          Life at Techbinary{" "}
        </p>

        <h2 className="careerlife-title">
          Work Culture at <span> Tech Binary</span>
        </h2>

        <div className="careerlife-desc">
          <p>
            At Tech Binary, work goes beyond writing code or delivering projects. Teams collaborate to solve real business challenges, experiment with new technologies, and build digital platforms that make a difference for businesses. 
          </p>

          <p>
            The culture encourages curiosity and continuous learning. Engineers explore modern frameworks, designers refine user experiences, and marketers test new digital strategies.  
          </p>

          <p>
           Alongside project work, informal discussions, shared learning, and occasional team activities create a balanced environment where people stay focused on delivering quality work while enjoying the process of building something meaningful together. 
          </p>
        </div>

    
      </div>
    </section>
  );
};

export default CareerLife;
