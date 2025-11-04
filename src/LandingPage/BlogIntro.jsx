import React from "react";
import "./Stylesheet/CareerIntro.css";
import careerIntro from "./images/career.png";

const BlogIntro = () => {
  return (
    <section
      className="career-banner"
      style={{ backgroundImage: `url(${careerIntro})` }}
    >
      <div className="career-banner-content">
        <h1>Blog</h1>
      </div>
    </section>
  );
};

export default BlogIntro;
