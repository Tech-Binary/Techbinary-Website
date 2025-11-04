// src/LandingPage/Services.jsx
import React from "react";
import "./Stylesheet/global.css";
import "./Stylesheet/Services.css";
import javaImg from "./images/java.png";
import cloudImg from "./images/cloud.png";
import dotnet from "./images/dotnet.png";
import androidImg from "./images/android.png";
import line from "./images/serviceL.png";
import Slider from "react-slick";

const Services = () => {
  const array = [
    {
      title: "Java",
      color: "#E1F1EC",
      icon: javaImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth..",
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
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth..",
    },
    {
      title: "Android",
      color: "#E1F1EC",
      icon: androidImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth..",
    },
    {
      title: "Android",
      color: "#E1F1EC",
      icon: androidImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.UX.",
    },
    {
      title: "Android",
      color: "#E1F1EC",
      icon: androidImg,
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // number of visible cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="services-section">
      <div className="services-banner">
        <div className="container">
          <div className="services-header ">
            <div>
              <h5 className="sect-tag">
               <img src={line} alt="line" className="li-img" />
                OUR SERVICES
                </h5>
              <h2>Services We Offer</h2>
            </div>
            <p className="services-subtext">
              There are many variations of passages of Lorem Ipsum available,
              but the majority simply free text now have suffered alteration.
            </p>
            <a href="#" className="btn-outline">
              Discover More
              <img
                src={require("./images/arrow.png")}
                alt="arrow"
                className="btn-arow"
              />{" "}
              <span style={{ fontSize: "1.2rem" }}></span>
            </a>
          </div>
        </div>
        <h1 className="services-watermark">OUR SERVICES</h1>
      </div>

      {/* Cards Wrapper */}
      <div className="services-cards container"></div>
      <Slider {...settings} className="services-cards-slider w-100">
        {array.map((service, index) => (
          <div className="service-card" key={index} data-color={service.color}>
            <div
              className="icon-circle"
              style={{ backgroundColor: service.color }}
            >
              <img src={service.icon} alt={`${service.title} Icon`} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <img
              src={require("./images/cardArrow.png")}
              alt="arrow"
              className="card-arrow"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;
