import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerCloud = () => {
   const javaData = [
    {
      title: "How Can Cloud Solutions Improve Your Operations? ",
      description:
        "Cloud solutions today go beyond simple storage or hosting. Businesses need infrastructure that supports application performance, secure data access, and scalable operations. Our team helps design and implement cloud environments that handle workloads efficiently. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Plan Your Setup ",
      points: [
        {
          title: "Strategic Cloud Planning",
          desc: "Designing cloud architecture based on workloads, traffic patterns, and business requirements.",
        },
        {
          title: "Secure Infrastructure Setup",
          desc: "Implementing security policies, access control, and data protection across cloud environments.",
        },
        {
          title: "Scalable System Deployment",
          desc: "Building infrastructure that supports application growth without performance disruptions. ",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Advantages of Cloud Infrastructure ",
    sectionDesc:
      "Cloud platforms help businesses manage applications, data, and systems with greater operational control. ",
    services: [
      {
        title: "Scalable Infrastructure",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Cloud environments allow businesses to expand computing resources whenever application traffic or workloads increase. This flexibility helps companies handle growth without investing in additional physical infrastructure.",
      },
      {
        title: "Secure Data Management",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "Modern cloud platforms offer multiple layers of security including encryption, identity management, and access control. These measures help protect sensitive business data from unauthorized access.",
      },
      {
        title: "High Availability",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Cloud systems operate on distributed networks that reduce the chances of downtime. Applications remain accessible even during system maintenance or unexpected technical issues.",
      },
      {
        title: "Cost Optimization",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "Cloud services operate on a pay-as-you-use model, helping businesses avoid large upfront investments in servers and hardware. Organizations can manage costs more efficiently by allocating resources only where needed. ",
      },
      {
        title: "Faster Deployment",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Development teams can launch applications and services quickly using pre-configured cloud environments. This reduces infrastructure setup time and allows businesses to move faster with product development.",
      },
      {
        title: "Remote Accessibility",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "Cloud infrastructure enables secure access to applications and data from different locations. Teams can collaborate, monitor systems, and manage operations without being limited to a single office network.",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Cloud Platforms & Technologies ",
    sectionDesc:
      "Cloud tools and platforms we use to build, manage, and scale modern infrastructure. ",
    frameworks: [
      { title: "Java", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "GCP ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "AWS", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Azure", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "Docker", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "Terraform", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "Our Cloud Development Workflow ",
    sectionDesc:
      "A structured process to design, deploy, and manage secure and scalable cloud environments. ",
    steps: [
      {
        title: "Infrastructure Assessment",
        desc: "Evaluating existing systems and workloads to determine the right cloud architecture. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "Cloud Architecture Design",
        desc: "Planning infrastructure, storage, networking, and security policies to support application performance.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Deployment & Integration",
        desc: "Setting up cloud environments, configuring services, databases, and third-party systems. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Monitoring & Optimization",
        desc: "Tracking system performance, managing resources, and optimizing infrastructure for efficiency and stability.",
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
      <PageIntro title={"Cloud"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerCloud;