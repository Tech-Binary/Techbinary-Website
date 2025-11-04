// src/LandingPage/Services.jsx
import React from "react";
import "./Stylesheet/global.css";
import "./Stylesheet/ServicesCard.css";
import javaImg from "./images/java.png";
import cloudImg from "./images/cloud.png";
import dotnet from "./images/dotnet.png";
import androidImg from "./images/android.png";
import S1 from "./images/S1.png";
import S2 from "./images/S2.png";
import S3 from "./images/S3.png";
import S4 from "./images/S4.png";
import S5 from "./images/S5.png";

const ServicesCard = () => {
  const array = [
    {
      title: "Java",
      color: "#E1F1EC",
      icon: javaImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Cloud",
      color: "#E1F1EC",
      icon: cloudImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Dot Net",
      color: "#E1F1EC",
      icon: dotnet,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Android",
      color: "#E1F1EC",
      icon: androidImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },

    {
      title: "iOS Development",
      color: "#E1F1EC",
      icon: S1,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Web Development",
      color: "#E1F1EC",
      icon: S2,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "UI/UX Design",
      color: "#E1F1EC",
      icon: S3,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "DevOps",
      color: "#E1F1EC",
      icon: S4,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Data Analytics",
      color: "#E1F1EC",
      icon: S5,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Software Testing",
      color: "#E1F1EC",
      icon: cloudImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
  ];

  return (
    <section className="servicescard-section">
      <div className="servicescard-header">
        <p>
          Empowering Businesses with Next-Gen <br /> Software Solutions
        </p>
      </div>

      {/* Cards */}
       <div className="servicescard-footer">
              <img
                src={require("./images/servicebg.png")}
                alt="arrow"
                className="servicescard-arrow"
              />
            </div>
      <div className="servicescard-wrapper container">
        {array.map((service, index) => (
          <div className="servicescard-item" key={index}>
            <div
              className="servicescard-iconcircle"
              style={{ backgroundColor: service.color }}
            >
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="servicescard-footer">
              <img
                src={require("./images/cardArrow.png")}
                alt="arrow"
                className="servicescard-arrow"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
