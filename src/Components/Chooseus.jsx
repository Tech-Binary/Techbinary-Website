import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Chooseus.css";

const Chooseus = () => {
  return (
    <section className="why-choose-us">
      {/* Left Section */}
      <div className="why-left">
        <div className="image-wrapper">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/About%20US/Why%20Choose%20Us.png"
            alt="Why Choose Us"
            className="main-img"
          />

          {/* Overlay Object */}
          <div className="image-overlay">
            <img
              src="/images/clients-icon.png"
              alt="clients"
              className="overlay-icon"
            />
            <div className="overlay-text">
              <h4>2,000+</h4>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="why-right">
        <p className="section-ustitle">
          <img src="/images/Frame.png" alt="line" className="frame-img" />
          WHY CHOOSE US
        </p>

        <h2 className="section-title">
        Tech Expertise That <br />
          <span>Turns Ideas into Reliable Digital Systems</span>
        </h2>

        <p className="section-desc">
           <strong>Tech Binary </strong> uses structured development practices, cloud infrastructure, modern frameworks, and data-driven insights for reliable, scalable, and easy-to-manage applications. Each project is supported with proper documentation, testing environments, and deployment strategies to ensure the solution performs efficiently even as business demands grow.
        </p>

        <div className="features">
          <ul>
            <li>Agile Development </li>
            <li>Cloud Infrastructure </li>
            <li>API Integrations </li>
            <li>Data Structuring </li>
          </ul>
          <ul>
            <li>Secure Frameworks </li>
            <li>Performance Testing </li>
            <li>CI/CD Deployment </li>
            <li>System Monitoring </li>
          </ul>
        </div>

        <a href="/Get-In-Touch" className="contact-btn">
         Discuss Your Project
          <img src="/images/Arrow2.png" alt="arrow" className="btn-arrow" />
        </a>
      </div>
    </section>
  );
};

export default Chooseus;
