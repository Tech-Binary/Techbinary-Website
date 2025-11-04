import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/CareerLife.css";

const CareerLife = () => {
  return (
    <section className="careerlife-section">
      {/* Left Section */}
      <div className="careerlife-left">
        <img
          src="/images/careerlife.png"
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
          Explore Life at <br />
          <span>Techbinary</span>
        </h2>

        <div className="careerlife-desc">
          <p>
            At Techbinary, innovation meets passion. We’re a dynamic team of
            developers, designers, and strategists committed to crafting digital
            experiences that make a difference. Our mission goes beyond building
            code — we create solutions that help businesses grow, connect, and
            thrive in the digital era.
          </p>

          <p>
            From startups taking their first step online to global enterprises
            expanding their reach, we bring creativity, precision, and
            technology together to deliver results. We believe in collaboration,
            continuous learning, and pushing boundaries to transform ideas into
            impactful realities.
          </p>

          <p>
            Join us as we shape the future of technology — one project, one
            innovation, and one success story at a time.
          </p>
        </div>

        <a href="#" className="careerlife-btn">
          View More Gallery
          <img
            src="/images/Frame.png"
            alt="arrow"
            className="careerlife-arrow"
          />
        </a>
      </div>
    </section>
  );
};

export default CareerLife;
