import React from "react";
import "./Stylesheet/CareerPartners.css";

import icon1 from "./images/XFAM.png";
import icon2 from "./images/WWF.png";
import icon3 from "./images/Lafarge.png";
import icon4 from "./images/msc.png";
import icon5 from "./images/cmmb.png";
import icon6 from "./images/XFAM.png";
import icon7 from "./images/msc.png";
import icon8 from "./images/XFAM.png";
import icon9 from "./images/XFAM.png";
import icon10 from "./images/Lafarge.png";
import icon11 from "./images/cmmb.png";
import icon12 from "./images/WWF.png";

const CareerPartners = () => {
  const icons = [
    icon1, icon2, icon3, icon4, icon5, icon6,
    icon7, icon8, icon9, icon10, icon11, icon12,
  ];

  return (
    <section className="careerpartners-section">
      <h4 className="careerpartners-heading">
        At Techbinary, you can work on projects for the world's top brands
      </h4>

      <div className="careerpartners-grid">
        {icons.map((icon, index) => (
          <div className="careerpartners-item" key={index}>
            <img src={icon} alt={`brand-${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPartners;