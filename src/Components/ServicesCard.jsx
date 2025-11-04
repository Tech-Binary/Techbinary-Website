// src/LandingPage/Services.jsx
import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/ServicesCard.css";


const ServicesCard = () => {
  const array = [
    {
      title: "Java",
      color: "#E1F1EC",
      icon: "/images/java.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Cloud",
      color: "#E1F1EC",
      icon: "/images/cloud.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Dot Net",
      color: "#E1F1EC",
      icon: "./images/dotnet.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Android",
      color: "#E1F1EC",
      icon: "/images/android.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },

    {
      title: "iOS Development",
      color: "#E1F1EC",
      icon: "/images/S1.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Web Development",
      color: "#E1F1EC",
      icon: "/images/S2.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "UI/UX Design",
      color: "#E1F1EC",
      icon: "/images/S3.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "DevOps",
      color: "#E1F1EC",
      icon: "/images/S4.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Data Analytics",
      color: "#E1F1EC",
      icon: "/images/S5.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      title: "Software Testing",
      color: "#E1F1EC",
      icon: "/images/S1.png",
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
                src="/images/servicebg.png"
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
                src="/images/cardArrow.png"
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
