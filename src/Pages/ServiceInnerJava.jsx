import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerJava = () => {
  const javaData = [
    {
      title: "Why Do Businesses Choose Java for Enterprise Applications? ",
      description:
        "Java is widely used for enterprise platforms because of its stability, security, and ability to support complex systems. At Tech Binary, we develop Java applications using frameworks like Spring Boot and Hibernate to build structured backend services and scalable APIs. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Get In Touch",
      points: [
        {
          title: "Microservices Architecture ",
          desc: "Applications are structured into independent services using Spring Boot. ",
        },
        {
          title: "API & System Integrations ",
          desc: "RESTful APIs enabling smooth integration with business platforms and third-party services.",
        },
        {
          title: "Performance Optimization",
          desc: "Efficient database structuring and backend optimization for handling large volumes of data.",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Core Advantages of Java Development ",
    sectionDesc:
      "Java provides the stability and performance to build enterprise systems to handle complex operations. ",
    services: [
      {
        title: "High Performance Systems ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Java applications are designed to manage heavy workloads and large numbers of users simultaneously. With optimized memory management and efficient processing, they perform reliably even in data-heavy environments. ",
      },
      {
        title: "Enterprise-Level Security ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "IJava provides strong security mechanisms such as authentication frameworks, secure APIs, and built-in protection features. These capabilities help safeguard applications that handle sensitive business or user data. ",
      },
      {
        title: "Platform Independence ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Java’s “write once, run anywhere” approach allows applications to operate across different operating systems. This flexibility makes it easier to deploy systems across diverse environments without major redevelopment. ",
      },
      {
        title: "Scalable Architecture ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "Java supports modular development and microservices architecture, making it suitable for applications that need to grow over time. Systems can be expanded by adding new services without disrupting existing functionality. ",
      },
      {
        title: "Robust Framework Ecosystem ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Popular frameworks such as Spring Boot and Hibernate accelerate development and simplify backend architecture. These tools help developers build maintainable applications with well-structured code. ",
      },
      {
        title: "Strong Community Support ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "Java has one of the largest developer communities in the world. Continuous updates, extensive documentation, and community-driven improvements help maintain its reliability and long-term relevance. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Java Frameworks We Use ",
    sectionDesc:
      "We use proven Java frameworks to build structured, secure, and scalable backend applications. ",
    frameworks: [
      { title: "Hibernate ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Spring Boot", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "JSF ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Apache Maven ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "Gradle ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "JUnit ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "How We Build Java Applications ",
    sectionDesc:
      "A structured approach to design, develop, and deliver reliable Java applications. ",
    steps: [
      {
        title: "Requirement Analysis",
        desc: "Understanding business workflows, technical requirements, and system integrations needed for the application.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "System Architecture",
        desc: "Designing application architecture, database structure, and selecting the right Java frameworks.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Development & Integration",
        desc: "Building backend services, APIs, and business logic while integrating required third-party systems.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Testing & Deployment",
        desc: "Conducting performance testing, security checks, and deploying the application in a stable environment. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Deployment%20&%20Support.png",
      },
    ],
    ctaTitle: "Have a Software Project in Mind? ",
    ctaDesc:
      "Our engineers work with businesses to design and build applications that handle real workflows and growing user demands. Let’s discuss the system you’re planning to build. ",
    ctaButtonText: " Start Your Project",
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

export default ServiceInnerJava;