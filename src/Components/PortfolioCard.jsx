import React from "react";
import "../Stylesheet/PortfolioCard.css";

const portfolioItems = [
  {
    title: "HRMS/CRM Platform ",
    description:
      "Enterprise platform to manage employees, client relationships, workflows, and operational data from a unified system. ",
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/Education%20LMS.png",
    tags: ["Angular", ".NET", "Azure"],
  },
  {
    title: "Transportation Management System ",
    description:
      "Smart platform for transport quotations, vendor selection, route management, and operational reporting. ",
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/E-Commerce%20Platform.png",
    tags: ["React ", "Node.js ", "MongoDB "],
  },
  {
    title: "Travel CRM System ",
    description:
      "Centralized CRM platform helping travel teams manage leads, bookings, follow-ups, and customer interactions. ",
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/FinTech%20Mobile%20App.png",
    tags: ["Angular", "Spring Boot ", "MySQL "],
  },
  {
    title: "HRMS Mobile App ",
    description:
      "Employee mobile app for attendance tracking, leave management, payroll access, and company communication. ",
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/IoT%20Smart%20Platform.png",
    tags: [" React Native", " .NET API", " Azure"],
  },
  {
    title: "eSIM Portal ",
    description:
      "Digital platform enabling users to purchase, activate, and manage global eSIM connectivity instantly. ",
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/AI%20Analytics%20Suite.png",
    tags: ["React", " Node.js", "AWS"],
  },
  {
    title: "Room Design Tool ",
    description:
      "Interactive 3D platform allowing users to design rooms using customizable blocks and layout configurations. ",
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/Blockchain%20Exchange.png",
    tags: ["Three.js", "React", "WebGL"],
  },
];

// color palette for tags
const tagColors = [
  "#DBEAFE", 
  "#DCFCE7", 
  "#F3E8FF", 
  "#FFEDD5", 
  "#FEF9C3", 
 
];

// helper function to darken color
const darkenColor = (hex, percent) => {
  let num = parseInt(hex.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) - amt,
    G = ((num >> 8) & 0x00ff) - amt,
    B = (num & 0x0000ff) - amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

const PortfolioCard = () => {
  return (
    <section className="portfolio-section">
      <h2>
        Digital Products We’ve <span>Designed & Built</span>
      </h2>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img src={item.image} alt={item.title} className="portfolio-img" />

            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="portfolio-tags">
                {item.tags.map((tag, i) => {
                  const bg = tagColors[(index + i) % tagColors.length];
                  const text = darkenColor(bg, 40); // darker text color
                  return (
                    <span
                      key={i}
                      className="portfolio-tag"
                      style={{
                        backgroundColor: bg,
                        color: text,
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCard;
