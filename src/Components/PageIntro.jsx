import React from "react";
import "../Stylesheet/CareerIntro.css";

const PageIntro = () => {
  return (
    <section
      className="career-banner"
      style={{ backgroundImage: `url("/images/Page.png")` }}
    >
      <div className="career-banner-content">
        <h1>Java Development</h1>
      </div>
    </section>
  );
};

export default PageIntro;
