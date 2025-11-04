import React from "react";
import "../Stylesheet/PortfolioIntro.css";

const PortfolioIntro = () => {
  return (
    <section
      className="portfoliointro-banner"
      style={{ backgroundImage: `url(/images/portfoliointro.png)` }}
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
