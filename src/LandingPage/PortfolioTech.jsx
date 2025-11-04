import React from "react";
import "./Stylesheet/PortfolioTech.css";
import line from "./images/Frame.png"; 
import reactLogo from "./images/T1.png";
import nodeLogo from "./images/T2.png";
import pythonLogo from "./images/T3.png";
import awsLogo from "./images/T4.png";
import mongoLogo from "./images/T5.png";
import blockchainLogo from "./images/T6.png";

import healthcareLogo from "./images/T7.png";
import educationLogo from "./images/T8.png";
import fintechLogo from "./images/T9.png";
import retailLogo from "./images/T10.png";
import logisticsLogo from "./images/T11.png";
import smartcityLogo from "./images/T12.png";

const PortfolioTech = () => {
  return (
    <section className="portfolio-tech-section">
      <div>
                <img src={line} alt="line" className="linetech-img" />
      
      <h4 className="portfolio-tech-subtitle">Technologies & Industries</h4>
      <h2 className="portfolio-tech-title">Technologies & Industries</h2>
</div>
      <div className="portfolio-tech-wrapper">
        {/* Technologies Card */}
        <div className="portfolio-tech-card">
          <h3>Technologies</h3>
          <div className="portfolio-tech-grid">
            <div className="portfolio-tech-item">
              <img src={reactLogo} alt="React" />
              <p>React</p>
            </div>
            <div className="portfolio-tech__divider"></div>
            <div className="portfolio-tech-item">
              <img src={nodeLogo} alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src={pythonLogo} alt="Python" />
              <p>Python</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src={awsLogo} alt="AWS" />
              <p>AWS</p>
            </div>
            <div className="portfolio-tech-item">
              <img src={mongoLogo} alt="MongoDB" />
              <p>MongoDB</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src={blockchainLogo} alt="Blockchain" />
              <p>Blockchain</p>
            </div>
          </div>
        </div>

        {/* Industries Card */}
        <div className="portfolio-tech-card">
          <h3>Industries</h3>
          <div className="portfolio-tech-grid">
            <div className="portfolio-tech-item">
              <img src={healthcareLogo} alt="Healthcare" />
              <p>Healthcare</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src={educationLogo} alt="Education" />
              <p>Education</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src={fintechLogo} alt="FinTech" />
              <p>FinTech</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src={retailLogo} alt="Retail" />
              <p>Retail</p>
            </div>

            <div className="portfolio-tech-item">
              <img src={logisticsLogo} alt="Logistics" />
              <p>Logistics</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src={smartcityLogo} alt="Smart Cities" />
              <p>Smart Cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTech;
