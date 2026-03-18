import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Services.css";
import Slider from "react-slick";

const Services = () => {
  const array = [
    {
      link: "/service-inner-java",
      title: "Java Development ",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194.png",
      desc: "Java remains one of the most reliable technologies for building scalable and secure enterprise applications. Our team works with modern Java frameworks for scalable backend systems, secure APIs, and high-traffic platforms to support complex business operations. Java solutions are particularly effective for financial systems, enterprise portals, and large-scale platforms that require strong stability and long-term maintainability. " },
    {
      link: "/service-inner-cloud",
      title: "Cloud Solutions ",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194-1.png",
      desc: "Cloud technology allows businesses to operate faster while reducing infrastructure costs. Tech Binary helps organizations migrate applications, databases, and workflows to secure cloud environments. The focus is on building scalable cloud architectures, improving system availability, and ensuring businesses can handle increasing user demand without performance limitations. "  },
    {
      link: "/Service-inner-dotnet",
      title: ".NET Development ",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194-2.png",
      desc: "Tech Binary builds robust applications using the .NET ecosystem for businesses that require secure, high-performance enterprise platforms. The team develops web applications, internal business systems, and enterprise portals that integrate smoothly with existing tools and databases. Moreover, .NET solutions are particularly effective for companies that rely on Microsoft technologies and require dependable, scalable software. " },
    {
      link: "/Service-inner-android",
      title: "Android App Development ",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Group%201261154194-3.png",
      desc:"Android apps developed by Tech Binary focus on practical usability and device compatibility. The team builds applications that work smoothly across different screen sizes and Android versions, ensuring businesses can reach a wide mobile audience. These apps help companies deliver services, communicate with customers, and extend their digital platforms to mobile users. " },

    {
      link: "/Service-inner-ios",
      title: "iOS App Development ",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2033-1.png",
      desc: "iOS users expect fast, stable, and well-designed mobile as well as tablet applications. Tech Binary even develops iPhone and iPad apps that follow Apple’s design and performance standards. The goal is to create applications that feel seamless to use while maintaining strong security and reliability for business operations. "  },
    {
      link: "Service-inner-web",
      title: "Web Development",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2033.png",
      desc: "A business website often becomes the central point for customer interaction, information, and service delivery. Tech Binary develops websites that load quickly, function smoothly, and remain easy to manage over time. The team focuses on building structured, scalable websites that can grow as business requirements expand. "},
    {
      link: "Service-inner-ui",
      title: "UI/UX Design",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2032.png",
      desc: "Good design is not only about appearance but also about how easily users can complete tasks. Tech Binary works on layouts, navigation structures, and user flows that make digital platforms simpler to understand. Meanwhile, clear design reduces confusion for users and improves how people interact with websites and applications. "  },
    {
      link: "Service-inner-dev",
      title: "DevOps ",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2032-1.png",
      desc: "Software development often slows down when deployment and operations are handled separately. Tech Binary implements DevOps practices that connect these processes, allowing development teams to release updates faster and manage systems more efficiently. This approach helps businesses maintain stable platforms while improving development speed. " },
    {
      link: "Service-inner-data",
      title: "Data Analytics",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2032-2.png",
      desc: "Businesses generate large amounts of data but often struggle to interpret it effectively. Tech Binary helps businesses organize data from multiple platforms and convert it into clear reports and dashboards using modern analytics tools. This enables teams to track operational performance, understand customer activity, and identify patterns for better planning and decision-making. "},
    {
      link: "Service-inner-testing",
      title: "Software Testing",
      color: "#E1F1EC",
      icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/image%2033-1.png",
      desc: "Before launching any digital platform, thorough testing is essential. Tech Binary conducts structured testing to check functionality, usability, and system performance. Identifying issues early helps businesses avoid system failures, protect user data, and ensure their digital products perform reliably in real-world environments. " },
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
        breakpoint: 1500, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 800, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 700, 
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="services-section">
      <div className="services-banner section-padding">
          <div className="services-header ">
            <div>
              <h5 className="sect-tag">
                <img src="/images/serviceL.png" alt="line" className="li-img" />
                OUR EXPERTISE 
              </h5>
              {/* <h2>Solutions Designed for Digital Age </h2> */}
              <h2>Our Offered Services</h2>
            </div>
            <p className="services-subtext">
             Through development, design, and digital strategy, Tech Binary delivers solutions that improve performance, enhance engagement, and unlock new opportunities. 
            </p>
            <a href="/Services" className="btn-outline">
              Explore Solutions 
              <img
                src="/images/arrow.png"
                alt="arrow"
                className="btn-arow"
              />{" "}
              <span style={{ fontSize: "1.2rem" }}></span>
            </a>
          </div>
        <h1 className="services-watermark">OUR SERVICES</h1>
      </div>

      {/* Cards Wrapper */}
      <div className="services-cards container"></div>
      <Slider {...settings} className="services-cards-slider section-padding">
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
            <a href={service.link} className="card-arrow">
              <img
                style={{ width: "43px", height: "43px" }}
                src="/images/cardArrow.png"
                alt="arrow"
              />
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Services;
