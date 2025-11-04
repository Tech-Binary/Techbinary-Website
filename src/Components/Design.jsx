import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Design.css";


const Design = () => {
  const topCards = [
    {
      icon:  "/images/P1.png",
      title: "Documentation",
      desc: "All aspects of the software’s functionality and design are recorded and organized into comprehensive documents for future development and maintenance.",
      num: "01",
    },
    {
      icon: "/images/P3.png",
      title: (
        <>
          High-Level Plan Or  <span className="break-line">Outlinet</span>
        </>
      ),
      desc: "Identifying and eliminating defects in the software, ensuring it functions as intended and meets requirements.",
      num: "03",
    },
    {
      icon: "/images/P5.png",
      title: "Testing",
      desc: "Creating a detailed plan for the software system, identifying requirements, defining architecture, and preparing the design document.",
      num: "05",
    },
  ];

  const bottomCards = [
    {
      icon: "/images/P2.png",
      title: "Analysing",
      desc: "Implementing the plan according to requirements, including architecture design, module development, testing, and code integration.",
      num: "02",
    },
    {
      icon: "/images/P4.png",
      title: (
        <>
          Designing And <span className="break-line">Development</span>
        </>
      ),
      desc: "Identifying and eliminating defects in the software, ensuring it functions as intended and meets requirements.",
      num: "04",
    },
    {
      icon: "/images/P6.png",
      title: "Deployment",
      desc: "Making the software operational for end-users — configuring environment, testing, and rolling out to production.",
      num: "06",
    },
  ];

  return (
    <section className="phase-section">
      <h2 className="phase-title">
        Design & Implementation <span>Phase</span>
      </h2>

      <div className="phase-container">
        {/* Top Row */}
        <div className="phase-row top-row">
          {topCards.map((card, index) => (
            <div key={index} className="phase-card">
              <div className="phase-card-header">
                <img src={card.icon} alt="icon" className="icon" />
                <h3>{card.title}</h3>
              </div>
              <p>{card.desc}</p>
              <span className="step-number">{card.num}</span>
              <div className="vertical-line down">
                <span></span>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal connector line */}
        <div className="connector-line"></div>

        {/* Bottom Row */}
        <div className="phase-row bottom-row">
          {bottomCards.map((card, index) => (
            <div key={index} className="phase-card">
              <div className="phase-card-header">
                <img src={card.icon} alt="icon" className="icon" />
                <h3>{card.title}</h3>
              </div>
              <p>{card.desc}</p>
              <span className="step-number">{card.num}</span>
              <div className="vertical-line up">
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;
