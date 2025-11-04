import React from "react";
import "./Stylesheet/PortfolioBanner.css";
import portfolioBanner from "./images/portfoliobanner.png";

const PortfolioBanner = () => {
  return (
    <section
      className="portfolio-banner"
      style={{ backgroundImage: `url(${portfolioBanner})` }}
    >
      <div
  className="portfolio-banner"
 
>
  <div className="portfolio-banner-content">
    <h1>
      Ready To Make  <span>Your Brand</span> <br />
        Legendary?    </h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown <br/>printer took a galley of type and scrambled it to make a type specimen book.
    </p>

    <a href="#" className="portfolio-banner-btn">
      Let's Talk
      <img
        src={require("./images/arrow.png")}
        alt="arrow"
        className="btn-arrow"
      />
    </a>
  </div>
</div>

       
    </section>
  );
};

export default PortfolioBanner;
