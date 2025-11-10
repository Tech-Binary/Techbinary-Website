import React from "react";
import "../Stylesheet/CareerIntro.css";

const GetInTouchIntro = () => {
  return (
    <section
      className="career-banner"
      style={{
        backgroundImage: `url("https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Blog/banner.png")`,
      }}
    >
      <div className="career-banner-content">
        <h1>Blog</h1>
      </div>
    </section>
  );
};

export default GetInTouchIntro;
