import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerIos = () => {
   const javaData = [
    {
      title: "Enterprise iOS Applications Development ",
      description:
        "iOS applications must adhere to Apple’s design standards and comply with security requirements. Our development team builds iPhone and iPad applications using Swift-based architecture and Apple’s native frameworks. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Get In Touch",
      points: [
        {
          title: "Native iOS Development Expertise",
          desc: "Applications built using Swift and modern iOS frameworks for high performance and reliability.",
        },
        {
          title: "Apple Ecosystem Integration",
          desc: "Smooth connectivity with iCloud, Apple Pay, location services, and push notifications. ",
        },
        {
          title: "Performance & UI Standards",
          desc: "Apps developed following Apple Human Interface Guidelines to ensure smooth navigation.",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Business Value of iOS Platforms ",
    sectionDesc:
      "iOS applications provide secure, high-performance mobile platforms designed for premium user experiences. ",
    services: [
      {
        title: "Optimized Performance ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Apple controls both hardware and software, which allows iOS applications to run consistently across iPhone and iPad. Developers can optimize apps more precisely due to minimal device fragmentation. ",
      },
      {
        title: "High Security Standards ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "iOS provides built-in security layers such as keychain storage, app sandboxing, and biometric authentication through Face ID or Touch ID. These features protect sensitive user data and prevent unauthorized access. ",
      },
      {
        title: "Long-Term Stability ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Apple regularly releases OS updates that support multiple device generations. Applications built with modern frameworks can continue running smoothly across newer iOS versions with minimal adjustments. ",
      },
      {
        title: "Reliable App Ecosystem ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "Apple’s App Store review system ensures applications meet performance, security, and usability standards. This process helps maintain a high-quality ecosystem where applications are more stable and trusted by users. ",
      },
      {
        title: "Efficient Frameworks ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Frameworks like SwiftUI, UIKit, and Combine help developers build responsive interfaces and maintain clean code architecture. These tools allow faster feature development and easier application maintenance. ",
      },
      {
        title: "Advanced Device Feature ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "iOS apps can leverage built-in device capabilities including ARKit for augmented reality, Core Location for geolocation services, Apple Pay for payments, and HealthKit for health data integrations. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "iOS Development Frameworks ",
    sectionDesc:
      "Native frameworks and development tools used to build high-performance and scalable iOS applications. ",
    frameworks: [
      { title: "Swift ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "UIKit ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "SwiftUI ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Core Data ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "ARKit ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "TestFlight ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "Our iOS Development Workflow ",
    sectionDesc:
      "A structured workflow focused on building stable, secure, and App Store–compliant iOS applications. ",
    steps: [
      {
        title: "Product Requirements",
        desc: "Understanding the app’s functionality, user flows, backend integrations, and Apple ecosystem.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "Application Architecture",
        desc: "Designing the app structure using Swift with UI layouts aligned with Apple’s Human Interface Guidelines.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Native iOS Development",
        desc: "Developing app modules using Swift, integrating APIs, Face ID, location services, or push notifications.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "App Store Deployment ",
        desc: "Conducting device compatibility testing, performance checks, and beta testing through TestFlight.",
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
      <PageIntro title={"iOS"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerIos;
