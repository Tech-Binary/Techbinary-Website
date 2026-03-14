import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerAndroid = () => {
  const javaData = [
    {
      title: "Android Platforms Built for Real Business Use ",
      description:
        "Android applications today must support diverse devices, evolving OS versions, and high user expectations. Our development team builds Android platforms using Kotlin-based architecture, modular code structures, and secure API connectivity. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Consult Our Team",
      points: [
        {
          title: "Modern Android Architecture",
          desc: "Applications built using Kotlin & Jetpack libraries to maintain performance across Android versions.",
        },
        {
          title: "Device Compatibility Engineerin",
          desc: "Apps are optimized for multiple screen sizes, hardware capabilities, and Android OS updates.",
        },
        {
          title: "Backend & Cloud Connectivity",
          desc: "Secure integration with API and cloud infrastructure to support data-driven mobile applications.",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Key Benefits of Android Development  ",
    sectionDesc:
      "Android provides the technical capabilities to build scalable mobile applications for diverse devices. ",
    services: [
      {
        title: "Wide Device Ecosystem ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Android applications can run across a large range of devices including smartphones, tablets, and specialized handheld hardware. This helps businesses reach a wider audience without limiting accessibility. ",
      },
      {
        title: "Secure Data Handling ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "Security features such as encrypted communication, permission-based access, and secure authentication help protect sensitive user and business data within Android applications. ",
      },
      {
        title: "Scalable Mobile Platforms ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Android applications can be expanded with additional features, integrations, and system capabilities as business needs evolve and user demand increases. ",
      },
      {
        title: "Background Processing ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "Android supports background services that allow applications to handle tasks such as data synchronization, notifications, and updates without interrupting user activity. ",
      },
      {
        title: "Integration with GS ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Android applications can integrate easily with Google Maps, Firebase, authentication systems, and analytics tools. These integrations enhance application functionality and improve user experience. ",
      },
      {
        title: "Flexible Customization ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "Android allows developers to customize application features, user interfaces, etc., based on business requirements. This flexibility is suitable for building both consumer apps and internal business platforms. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Android Development Stack ",
    sectionDesc:
      "Modern Android frameworks and development tools to build high-performance mobile applications. ",
    frameworks: [
      { title: "Java", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Kotlin ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "Android Studio ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Firebase ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "Jatpack ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "Google Cloud ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "Our Android Engineering Process ",
    sectionDesc:
      "A structured development workflow focused on building performance-driven Android applications. ",
    steps: [
      {
        title: "Product Planning",
        desc: "Defining application objectives, feature requirements, and backend connectivity. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "Application Design",
        desc: "Designing app using Kotlin, Android Jetpack components to ensure maintainability. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Android Development",
        desc: "Developing app modules, integrating APIs, implementing, and optimizing performance. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Testing & Deployment",
        desc: "Testing the application across Android versions and devices before Google Play Store deployment.",
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
      <PageIntro 
      title={"Android"} 
      bgImage="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png" />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerAndroid;