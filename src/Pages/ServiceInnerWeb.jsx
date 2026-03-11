import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerWeb = () => {
   const javaData = [
    {
      title: "Powering Digital Experiences Through Web Engineering ",
      description:
        "Web applications today support everything from customer portals to enterprise dashboards. Our development team builds custom web systems using frontend frameworks, backend technologies, and structured database systems. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: " Discuss Your Project",
      points: [
        {
          title: "Full-Stack Engineering Expertise",
          desc: "Development across frontend frameworks, backend services, and database architecture. ",
        },
        {
          title: "Integration-Ready Platforms",
          desc: "Web systems connect with APIs, third-party tools, payment gateways, and enterprise software.",
        },
        {
          title: "Performance-Driven Development",
          desc: "Applications optimized for fast load times, efficient queries, and reliable system performance.",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Business Value of Web Applications ",
    sectionDesc:
      "Well-structured web applications support business operations, user engagement, and system integrations. ",
    services: [
      {
        title: "High Performance",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
      },
      {
        title: "Secure & Reliable",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
      },
      {
        title: "Highly Scalable",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
      },
      {
        title: "Fast Delivery",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
      },
      {
        title: "Expert Team",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
      },
      {
        title: "24/7 Support",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Frameworks We Use",
    sectionDesc:
      "We leverage cutting-edge Java technologies and frameworks to build modern, efficient applications.",
    frameworks: [
      { title: "Java", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Spring Boot", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "AWS", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Azure", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "Docker", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "PostgreSQL", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "Our Development Process",
    sectionDesc:
      "A proven methodology that ensures successful project delivery from concept to deployment.",
    steps: [
      {
        title: "Discovery & Planning",
        desc: "Analyze requirements, define scope, and create detailed project roadmap.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "UI/UX Design",
        desc: "Design scalable system architecture and choose optimal technology stack.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Development & Testing",
        desc: "Agile development with continuous integration and comprehensive testing.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Deployment & Support",
        desc: "Smooth deployment to production with ongoing maintenance and support.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Deployment%20&%20Support.png",
      },
    ],
    ctaTitle: "Ready to Start Your Java Project?",
    ctaDesc:
      "Let's discuss your requirements and build something amazing together. Our expert team is ready to turn your ideas into reality.",
    ctaButtonText: "Get In Touch",
  };

  return (
    <>
      <PageIntro title={"Java"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerWeb;