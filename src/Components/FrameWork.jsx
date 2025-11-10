import React from "react";
import "../Stylesheet/FrameWork.css";

const FrameWork = ({data}) => {
  

  return (
    <section className="frameworks-section">
      {/* Dynamic Header */}
      <div className="frameworks-header">
        <h2>{data.sectionTitle}</h2>
        <p>{data.sectionDesc}</p>
      </div>

      {/* Dynamic Cards */}
      <div className="frameworks-wrapper">
        {data.frameworks.map((item, index) => (
          <div className="frameworks-card" key={index}>
            <div className="frameworks-icon">
              <img src={item.icon} alt={item.title} loading="lazy" />
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrameWork;