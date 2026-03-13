import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerUI = () => {
  const javaData = [
    {
      title: "Designing Meaningful Digital Experiences ",
      description:
        "A well-designed interface directly influences how users interact with digital products. Our UI/UX design process understands user behavior, maps product journeys, and creates intuitive interfaces that simplify complex workflows. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Discuss Your Design",
      points: [
        {
          title: "User Research & Journey Mapping ",
          desc: "Understanding how users interact with a product to design intuitive workflows and interactions.",
        },
        {
          title: "Structured Design Systems",
          desc: "Creating UI components, layouts, and interaction patterns to maintain visual and functional consistency.",
        },
        {
          title: "Usability-Focused Interfaces",
          desc: "Design decisions based on accessibility, navigation clarity, and real user behavior. ",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Benefits of User-Centered Design ",
    sectionDesc:
      "Well-designed interfaces improve usability and create digital experiences that are easy to navigate. ",
    services: [
      {
        title: "Higher User Engagement ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Interactive elements, intuitive design patterns, and well-placed visual hierarchy help keep users engaged and encourage longer interaction with the product. ",
      },
      {
        title: "Improved User Navigation ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "Interactive elements, intuitive design patterns, and well-placed visual hierarchy help keep users engaged and encourage longer interaction with the product. ",
      },
      {
        title: "Improved User Navigation ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Clear layouts, logical content structure, and well-planned user flows help users navigate applications and websites without confusion. This reduces friction in completing tasks such as registrations or purchases. ",
      },
      {
        title: "Better Product Usability ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "UI/UX design focuses on simplifying complex features into easy-to-understand actions, making applications more accessible to both new and experienced users. ",
      },
      {
        title: "Consistent Interface Systems ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Design systems maintain consistency in typography, color usage, buttons, and layout components. This ensures users experience a familiar interface while interacting with different sections of platform. ",
      },
      {
        title: "Better Product Usability ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "UI/UX design focuses on simplifying complex features into easy-to-understand actions, making applications more accessible to both new and experienced users. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Our UI/UX Design Toolkit ",
    sectionDesc:
      "Professional design and prototyping tools used to create intuitive interfaces and design systems. ",
    frameworks: [
      { title: "Figma ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Adobe XD ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "Sketch ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "InVision ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "Zeplin ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "Miro ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "UI/UX Design Methodology ",
    sectionDesc:
      "A structured design workflow focused on understanding users and creating intuitive digital interfaces. ",
    steps: [
      {
        title: "User Research",
        desc: "Studying the product goals and existing challenges to understand how people interact with the platform.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "Wireframing & User Flow",
        desc: "Creating wireframes and user journey maps to structure page layouts before moving to visual design.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Design System Creation",
        desc: "Designing high-fidelity UI screens, defining typography, color systems, and reusable components.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Prototyping",
        desc: "Developing interactive prototypes and testing user interactions to validate navigation clarity.",
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
      <PageIntro title={"UI/UX"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerUI;