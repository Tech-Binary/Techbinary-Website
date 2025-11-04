import React from "react";
import "../Stylesheet/PortfolioTech.css";

const PortfolioTech = () => {
  return (
    <section className="portfolio-tech-section">
      <div>
        <img src="/images/Frame.png" alt="line" className="linetech-img" />

        <h4 className="portfolio-tech-subtitle">Technologies & Industries</h4>
        <h2 className="portfolio-tech-title">Technologies & Industries</h2>
      </div>
      <div className="portfolio-tech-wrapper">
        {/* Technologies Card */}
        <div className="portfolio-tech-card">
          <h3>Technologies</h3>
          <div className="portfolio-tech-grid">
            <div className="portfolio-tech-item">
              <img src="/images/T1.png" alt="React" />
              <p>React</p>
            </div>
            <div className="portfolio-tech__divider"></div>
            <div className="portfolio-tech-item">
              <img src="/images/T2.png" alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src="/images/T3.png" alt="Python" />
              <p>Python</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src="/images/T4.png" alt="AWS" />
              <p>AWS</p>
            </div>
            <div className="portfolio-tech-item">
              <img src="/images/T5.png" alt="MongoDB" />
              <p>MongoDB</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src="/images/T6.png" alt="Blockchain" />
              <p>Blockchain</p>
            </div>
          </div>
        </div>

        {/* Industries Card */}
        <div className="portfolio-tech-card">
          <h3>Industries</h3>
          <div className="portfolio-tech-grid">
            <div className="portfolio-tech-item">
              <img src="/images/T7.png" alt="Healthcare" />
              <p>Healthcare</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src="/images/T8.png" alt="Education" />
              <p>Education</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src="/images/T9.png" alt="FinTech" />
              <p>FinTech</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src="/images/T10.png" alt="Retail" />
              <p>Retail</p>
            </div>

            <div className="portfolio-tech-item">
              <img src="/images/T11.png" alt="Logistics" />
              <p>Logistics</p>
            </div>
            <div className="portfolio-tech__divider"></div>

            <div className="portfolio-tech-item">
              <img src="/images/T12.png" alt="Smart Cities" />
              <p>Smart Cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTech;
