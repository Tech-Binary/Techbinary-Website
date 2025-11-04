import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Projects.css";


const Projects = () => {
  return (
    <section className="projects-section">
      <p className="section-subtitle">
        <img src="/images/Frame.png" alt="line" className="frame-img" />
        OUR PROJECTS
        </p>

      <h2 className="section-ptitle">
        Our Latest Works For Your <br />
        <span>Web Business</span>
      </h2>

      <div className="projects-grid">
        <div className="project-card">
          <img src="/images/project1.png" alt="Project 1" />
          <div className="overlayer">
            <p>Project Name</p>
          </div>
        </div>

        <div className="project-card">
          <img src="/images/project2.png" alt="Project 2" />
          <div className="overlayer">
            <p>Project Name</p>
          </div>
        </div>

        <div className="project-card">
          <img src="/images/project3.png" alt="Project 3" />
          <div className="overlayer">
            <p>Project Name</p>
          </div>
        </div>
      </div>

      <a href="#" className="view-more-btn">
        View More <img src="/images/arrow2.png" alt="arrow" className="arrow-icon" />
      </a>
    </section>
  );
};

export default Projects;
