import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/ServicesCard.css";

const ServicesCard = () => {
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
              <a href={service.link}>
                <img
                  src="/images/cardArrow.png"
                  alt="arrow"
                  className="servicescard-arrow"
                  href
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
