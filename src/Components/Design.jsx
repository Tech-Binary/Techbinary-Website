import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Design.css";

const Design = () => {
  const topCards = [
    {
      icon:  "/images/P1.png",
      title: <>
         Requirement <span className="break-line">Discovery</span>
          </>,
      desc: "Every project begins with a detailed understanding of business objectives and user expectations. Our team works closely with stakeholders to establish a clear project scope that aligns technology with real business goals. ",
      num: "01",
    },
    {
      icon: "/images/P3.png",
      title: <>
         Solution <span className="break-line">Architecture</span>
          </>,
      desc: "After defining requirements, our engineers design the technical architecture of the platform. This includes selecting suitable frameworks, defining system structure, planning database architecture. ",
      num: "03",
    },
    {
      icon: "/images/P5.png", 
       title: <>
         UI/UX <span className="break-line">Structuring</span>
          </>,
      desc: "Our designers develop wireframes, interaction flows, and interface layouts that focus on usability, intuitive navigation, and a consistent visual experience across web and mobile platforms. ",
      num: "05",
    },
  ];

  const bottomCards = [
    {
      icon: "/images/P2.png",
       title: <>
        Application <span className="break-line">Development</span>
          </>,
      desc: "Front-end and back-end components are developed simultaneously, integrating APIs, databases, and third-party systems to create a fully functional and secure digital product. ",
      num: "02",
    },
    {
      icon: "/images/P4.png",
       title: <>
        QA & <span className="break-line">Testing</span>
          </>,
      desc: "Before deployment, our QA teams perform functional testing, performance checks, and security validation to identify issues early and ensure the system operates smoothly in real-world environments. ",
      num: "04",
    },
    {
      icon: "/images/P6.png",
      title: "Deployment ",
      desc: "After successful testing, the application is deployed to the production environment with proper configuration. Post-launch support allows our team to track performance and resolve potential issues. ",
      num: "06",
    },
  ];

  return (
    <section className="phase-section">
      <h2 className="phase-title">
       From Idea to <span> Implementation</span>
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