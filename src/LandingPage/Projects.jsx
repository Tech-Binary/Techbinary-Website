import React from "react";
import "./Stylesheet/global.css";
import "./Stylesheet/Projects.css";
import Frame from "./images/Frame.png";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import arrow from "./images/arrow2.png";

const Projects = () => {
  return (
    <section className="projects-section">
      <p className="section-subtitle">
        <img src={Frame} alt="line" className="frame-img" />
        OUR PROJECTS
        </p>

      <h2 className="section-ptitle">
        Our Latest Works For Your <br />
        <span>Web Business</span>
      </h2>

      <div className="projects-grid">
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <div className="overlayer">
            <p>Project Name</p>
          </div>
        </div>

        <div className="project-card">
          <img src={project2} alt="Project 2" />
          <div className="overlayer">
            <p>Project Name</p>
          </div>
        </div>

        <div className="project-card">
          <img src={project3} alt="Project 3" />
          <div className="overlayer">
            <p>Project Name</p>
          </div>
        </div>
      </div>

      <a href="#" className="view-more-btn">
        View More <img src={arrow} alt="arrow" className="arrow-icon" />
      </a>
    </section>
  );
};

export default Projects;
