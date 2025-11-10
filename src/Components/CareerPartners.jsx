import React from "react";
import "../Stylesheet/CareerPartners.css";

// import icon1 from "./images/XFAM.png";
// import icon2 from "./images/WWF.png";
// import icon3 from "./images/Lafarge.png";
// import icon4 from "./images/msc.png";
// import icon5 from "./images/cmmb.png";
// import icon6 from "./images/XFAM.png";
// import icon7 from "./images/msc.png";
// import icon8 from "./images/XFAM.png";
// import icon9 from "./images/XFAM.png";
// import icon10 from "./images/Lafarge.png";
// import icon11 from "./images/cmmb.png";


const CareerPartners = () => {
  const icons = [
    {
      img:  "/images/XFAM.png"
    },
    {
      img: "/images/WWF.png"
    },
    {
      img: "/images/Lafarge.png"
    },
    {
      img: "/images/msc.png"
    },
    {
      img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/icons/Frame%2019.png"
    },
    {
      img:  "/images/XFAM.png"
    },
    {
      img: "/images/WWF.png"
    },
    {
      img: "/images/Lafarge.png"
    },
    {
      img: "./images/msc.png"
    },
    {
      img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/icons/Frame%2019.png"
    },
    {
      img:  "/images/XFAM.png"
    },
    {
      img: "/images/WWF.png"
    },
    {
      img: "/images/Lafarge.png"
    },
    
  ];

  return (
    <section className="careerpartners-section">
      <h4 className="careerpartners-heading">
        At Techbinary, you can work on projects for the world's top brands
      </h4>

      <div className="careerpartners-grid">
        {icons.map((icon, index) => (
          <div className="careerpartners-item" key={index}>
            <img src={icon.img} alt={`brand-${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPartners;