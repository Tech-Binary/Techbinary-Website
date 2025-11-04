import React from "react";
import "../Stylesheet/CareerIntro.css";

const ServicesIntro = () => {
  return (
    <section
      className="career-banner"
      style={{ backgroundImage: `url(/images/Services.png)` }}
    >
      <div className="career-banner-content">
        <h1>Our Services</h1>
      </div>
    </section>
  );
};

export default ServicesIntro;
