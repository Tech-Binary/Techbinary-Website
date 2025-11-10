import React from "react";
import "../Stylesheet/Development.css";

const Development = ({ data }) => {
  return (
    <section className="devprocess-section">
      {/* Dynamic Header */}
      <div className="devprocess-header">
        <h2>{data.sectionTitle}</h2>
        <p>{data.sectionDesc}</p>
      </div>

      {/* Dynamic Steps */}
      <div className="devprocess-steps">
        {data.steps.map((step, index) => (
          <div className="devprocess-step" key={index}>
            <div className="devprocess-icon">
              <img src={step.icon} alt={step.title} loading="lazy" />
            </div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Dynamic CTA */}
      <div className="devprocess-cta">
        <div className="devprocess-cta-text">
          <h3>{data.ctaTitle}</h3>
          {/* <p dangerouslySetInnerHTML={{ __html: data.ctaDesc }} /> */}
          <p>{data.ctaDesc}</p>
        </div>
        <button className="cta-btn">
          {data.ctaButtonText} <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default Development;
