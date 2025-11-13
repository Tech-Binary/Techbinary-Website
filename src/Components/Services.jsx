import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Services.css";
import Slider from "react-slick";

const Services = () => {
  const array = [
    {
      link:'service-inner-java',
      title: "Java",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
       link:'service-inner-cloud',
      title: "Cloud",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194-1.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      link: 'Service-inner-dotnet',
      title: "Dot Net",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194-2.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      link: 'Service-inner-android',
      title: "Android",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194-3.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },

    {
      link: 'Service-inner-ios',
      title: "iOS Development",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2033-1.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      link: 'Service-inner-web',
      title: "Web Development",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2033.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      link: 'Service-inner-ui',
      title: "UI/UX Design",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2032.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      link: 'Service-inner-dev',
      title: "DevOps",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2032-1.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      link: 'Service-inner-data',
      title: "Data Analytics",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2032-2.png",
      desc: "Unlock the full potential of Java with our comprehensive range of development services. From expert consulting and architecture to mobile and cloud-based solutions, we deliver custom Java development services that cater to your unique business needs and drive growth.",
    },
    {
      link: 'Service-inner-testing',
      title: "Software Testing",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2033-1.png",
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
        settings: { slidesToShow: 3 },
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
               <img src="/images/serviceL.png" alt="line" className="li-img" />
                OUR SERVICES
                </h5>
              <h2>Services We Offer</h2>
            </div>
            <p className="services-subtext">
              There are many variations of passages of Lorem Ipsum available,
              but the majority simply free text now have suffered alteration.
            </p>
            <a href="/Services" className="btn-outline">
              Discover More
              <img
                src="/images/arrow.png"
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
      <Slider {...settings} className="services-cards-slider">
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
              src="/images/cardArrow.png"
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