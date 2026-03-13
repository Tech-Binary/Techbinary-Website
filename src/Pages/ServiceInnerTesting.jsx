import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerTesting = () => {
   const javaData = [
    {
      title: "Quality Assurance for Modern Software Systems ",
      description:
        "Software applications must operate reliably across different environments, devices, and user scenarios. Our testing services focus on identifying defects, validating application behavior, and ensuring system stability before releases. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Start QA Consultation",
      points: [
        {
          title: "Structured QA Processes",
          desc: "Defined testing workflows that ensure consistent validation across application modules. ",
        },
        {
          title: "Automation Testing Capability",
          desc: "Automated test scripts reduce repetitive testing efforts and improve release speed. ",
        },
        {
          title: "Multi-Environment Testing",
          desc: "Applications tested across browsers, devices, and operating environments to ensure compatibility.",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Quality Assurance Advantages ",
    sectionDesc:
      "Software testing helps organizations detect defects early and deliver reliable digital products. ",
    services: [
      {
        title: "Performance Validation ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Load and stress tests simulate real-world usage by generating concurrent user traffic. This helps identify bottlenecks in servers, APIs, or databases before the application is exposed to actual users. ",
      },
      {
        title: "Readiness Verification ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "Before deployment, regression testing and validation checks confirm that new updates have not affected previously working features. This step helps development teams release updates with greater confidence. ",
      },
      {
        title: "Early Defect Identification ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Identifying defects at this stage prevents issues from reaching staging or production environments, where fixes become more complex and time-consuming. ",
      },
      {
        title: "User Flow & Testing ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "QA teams validate critical user journeys such as login, transactions, and form submissions. This ensures users can complete tasks smoothly without encountering UI errors or unexpected system responses. ",
      },
      {
        title: "Device Compatibility ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Applications are tested across different browsers, operating systems to verify consistent functionality. This ensures the platform performs reliably regardless of the user's environment. ",
      },
      {
        title: "Application Stability ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "Testing verifies that application features behave consistently across different user scenarios. This ensures updates or new features do not break existing functionality within the application. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Automation & Testing Platforms ",
    sectionDesc:
      "Industry-standard tools used to perform automated, functional, and performance testing. ",
    frameworks: [
      { title: "Selenium ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Cypress ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "JUnit ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Postman ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "JMeter ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "TestNG ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "Quality Assurance Workflow ",
    sectionDesc:
      "A structured testing process designed to validate functionality, performance, and system reliability. ",
    steps: [
      {
        title: "Test Planning",
        desc: "Analyzing application features, user workflows, and technical specifications to define testing objectives. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "Test Case Development",
        desc: "Creating structured test cases and automation scripts that validate application functionality.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Performance Testing",
        desc: "Executing manual and automated tests to detect defects and evaluate application performance.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Reporting & Release Validation",
        desc: "Documenting testing results, identifying issues, and confirming application readiness before production deployment.",
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
      <PageIntro title={"Software Testing"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerTesting;