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
        title: "Cross-Platform Accessibility ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Web applications run directly in browsers, making them accessible across desktops, tablets, and mobile devices without requiring separate installations or platform-specific development. ",
      },
      {
        title: "Secure Web Infrastructure ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "Web applications run directly in browsers, making them accessible across desktops, tablets, and mobile devices without requiring separate installations or platform-specific development. ",
      },
      {
        title: "Scalable Application Architecture ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Modern web platforms are built using scalable backend frameworks and optimized databases, allowing the system to support growing traffic, user activity, and operational data without affecting performance. ",
      },
      {
        title: "API-Driven System Integration ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "Modern web platforms are built using scalable backend frameworks and optimized databases, allowing the system to support growing traffic, user activity, and operational data without affecting performance. ",
      },
      {
        title: "Centralized Data Management ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Web platforms can integrate with external services such as payment gateways, CRM systems, ERP platforms, and analytics tools through secure APIs, allowing seamless data exchange across systems. ",
      },
      {
        title: "Flexible Feature Expansion ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "Custom web applications can be continuously expanded with new modules, integrations, and automation features as business needs evolve over time. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Our Web Engineering Stack ",
    sectionDesc:
      "Modern frameworks and development technologies for secure and high-performance web applications. ",
    frameworks: [
      { title: "React.js ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Node.js ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "Laravel ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Next.js ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "MySQL ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "Docker ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "Our Approach to Web Development ",
    sectionDesc:
      "Modern frameworks and development technologies used to build high-performance web applications. ",
    steps: [
      {
        title: "Requirement Analysis & Planning",
        desc: "Understanding business workflows, user roles, and platform objectives",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "Frontend Development ",
        desc: "Building responsive UI using modern frameworks for smooth navigation across browsers and devices.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Backend & Database Development",
        desc: "Developing application logic, APIs, and database systems that handle data processing efficiently.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Testing & Deployment",
        desc: "Conducting functional testing, performance checks, and security validation before deploying the platform.",
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
      <PageIntro title={"Web Development"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerWeb;