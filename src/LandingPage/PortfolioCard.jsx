import React from "react";
import "./Stylesheet/PortfolioCard.css";

const portfolioItems = [
  {
    title: "Education LMS",
    description:
      "Empowering universities with an interactive learning management system that simplifies teaching and boosts student engagement.",
    image: require("./images/card1.png"),
    tags: ["Angular", ".NET", "Azure"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable and intelligent retail solution that enhances shopping experiences through data-driven insights and automation.",
    image: require("./images/card2.png"),
    tags: ["Angular", ".NET", "Azure"],
  },
  {
    title: "FinTech Mobile App",
    description:
      "Transforming digital banking with AI-powered analytics for smarter financial decisions and personalized customer experiences.",
    image: require("./images/card3.png"),
    tags: ["Angular", ".NET", "Azure"],
  },
  {
    title: "IoT Smart Platform",
    description:
      "Empowering enterprises with smart monitoring systems that simplify operations and boost performance efficiency.",
    image: require("./images/card4.png"),
    tags: ["Go", "Docker", "Flutter"],
  },
  {
    title: "AI Analytics Suite",
    description:
      "A scalable and intelligent analytics suite that enhances insights through data visualization and AI automation.",
    image: require("./images/card5.png"),
    tags: ["React", "TensorFlow", "GCP"],
  },
  {
    title: "Blockchain Exchange",
    description:
      "Transforming digital trading with AI-powered analytics for smarter financial decisions and personalized customer experiences.",
    image: require("./images/card6.png"),
    tags: ["Solidity", "Web3", "Ethereum"],
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
        Explore The Range Of <span>Completed Projects</span>
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
