import React from "react";
import "./Stylesheet/PortfolioIntro.css";
import portfolio from "./images/portfoliointro.png";

const PortfolioIntro = () => {
  return (
    <section
      className="portfoliointro-banner"
      style={{ backgroundImage: `url(${portfolio})` }}
    >
      <div className="portfoliointro-banner-content">
        <h1>
          Our Projects
        </h1>

       
      </div>
    </section>
  );
};

export default PortfolioIntro;
