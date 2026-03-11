import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerDotnet = () => {
   const javaData = [
    {
      title: "Looking for a Reliable .NET Development Team? ",
      description:
        ".NET is widely used to build secure, scalable enterprise applications. Our team develops web platforms, internal systems, and APIs using modern .NET frameworks designed for performance and long-term maintainability. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Talk to Experts",
      points: [
        {
          title: "Enterprise Application Expertise",
          desc: "Experience in building business applications, management systems, and enterprise software.",
        },
        {
          title: "Structured Development Approach",
          desc: "Clean architecture and modular coding practices for scalable applications.",
        },
        {
          title: "Integration Ready Systems",
          desc: "Applications built to integrate smoothly with APIs, databases, and external systems. ",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Advantages of .NET Development ",
    sectionDesc:
      ".NET enables businesses to build secure, high-performance applications for web, enterprise systems, and APIs. ",
    services: [
      {
        title: ".NET Core Performance",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Applications built using ASP.NET Core are optimized for high-speed request processing and efficient server performance. The lightweight framework handles high user traffic while maintaining consistent response times.",
      },
      {
        title: "Integrated Security Framework",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: ".NET provides built-in authentication, authorization, and identity management through tools like ASP.NET Identity. This makes it easier to implement secure login systems, role management, and data protection.",
      },
      {
        title: "Strong Microsoft Ecosystem",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: ".NET applications integrate easily with Microsoft technologies such as Azure, SQL Server, and Active Directory. This ecosystem support helps businesses build stable enterprise-grade systems.",
      },
      {
        title: "API & Microservices Support",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: ".NET is widely used to build REST APIs and microservices using ASP.NET Core. These services allow different applications and platforms to communicate efficiently within complex systems. ",
      },
      {
        title: "Efficient Database Management",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Using Entity Framework, developers can manage databases with structured models and simplified queries. This improves data handling, reduces development complexity, and keeps systems easier to maintain. ",
      },
      {
        title: "Enterprise Application Stability",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: ".NET has long been used for large-scale enterprise platforms such as ERP systems, internal management tools, and business portals. The framework supports structured architecture and long-term system reliability.",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: ".NET Technologies We Use ",
    sectionDesc:
      "Modern frameworks and tools used to build scalable, secure, and high-performance .NET applications. ",
    frameworks: [
      { title: "ASP.NET Core ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: ".NET 8 ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "Blazer ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "DevOps ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "SQL Server ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "SignalR ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "How We Build .NET Applications ",
    sectionDesc:
      "A structured development approach to build stable and scalable .NET systems. ",
    steps: [
      {
        title: "Requirement & Mapping",
        desc: "Understanding business workflows to define the right application architecture for a .NET platform.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: ".NET Frameworks Design",
        desc: "Designing backend architecture using ASP.NET Core, planning database models with Entity Framework.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Application Development",
        desc: "Building application modules, APIs, and business logic using C#, .NET Core, and third-party systems.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Testing & Azure Deployment",
        desc: "Performing application testing and deploying the platform securely on cloud such as Microsoft Azure.",
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
      <PageIntro title={"DotNet"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerDotnet;