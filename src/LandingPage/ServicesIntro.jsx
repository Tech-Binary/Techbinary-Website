import React from "react";
import "./Stylesheet/CareerIntro.css";
import Services from "./images/Services.png";

const ServicesIntro = () => {
  return (
    <section
      className="career-banner"
      style={{ backgroundImage: `url(${Services})` }}
    >
      <div className="career-banner-content">
        <h1>Our Services</h1>
      </div>
    </section>
  );
};

export default ServicesIntro;
