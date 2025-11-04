import React from "react";
import "./Stylesheet/CareerIntro.css";
import Page from "./images/Page.png";

const PageIntro = () => {
  return (
    <section
      className="career-banner"
      style={{ backgroundImage: `url(${Page})` }}
    >
      <div className="career-banner-content">
        <h1>Java Development</h1>
      </div>
    </section>
  );
};

export default PageIntro;
