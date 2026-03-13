import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerDev = () => {
  const javaData = [
    {
      title: "DevOps Engineering for Modern Software Delivery ",
      description:
        "Modern applications require faster releases, stable infrastructure, and reliable deployment pipelines. DevOps practices help development and operations teams work within a unified workflow supported by automation and continuous delivery tools. ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: " Talk to Experts",
      points: [
        {
          title: "CI/CD Pipeline Implementation",
          desc: "Setting up automated build, testing, and deployment pipelines to simplify software delivery.",
        },
        {
          title: "Infrastructure Automation",
          desc: "Using infrastructure-as-code tools to manage servers, environments, and cloud infrastructure efficiently.",
        },
        {
          title: "Continuous Monitoring Systems",
          desc: "Implementing monitoring and logging tools to track system performance and application health.",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Operational Benefits of DevOps ",
    sectionDesc:
      "DevOps practices improve software delivery speed and infrastructure stability. ",
    services: [
      {
        title: "Improved System Reliability",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "DevOps introduces monitoring, automated testing, and controlled deployment processes that reduce the chances of system failures during releases.",
      },
      {
        title: "Infrastructure Consistency",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "Using infrastructure-as-code tools ensures servers and environments are configured consistently across development, testing, and production systems. ",
      },
      {
        title: "Scalable Cloud Infrastructure",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "DevOps practices support scalable infrastructure management across cloud environments, allowing applications to handle growth in users or workloads.",
      },
      {
        title: "Faster Software Releases",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "Automated CI/CD pipelines allow development teams to push updates, features, and fixes more frequently without manual deployment processes. This helps businesses deliver improvements to users faster.",
      },
      {
        title: "Better Collaboration",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "DevOps encourages shared workflows between development, operations, and QA teams, helping organizations reduce communication gaps and streamline software delivery.",
      },
      {
        title: "Performance Monitoring",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "Monitoring tools provide real-time insights into application performance, system health, and infrastructure usage, enabling teams to quickly detect and resolve issues. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "DevOps Technology Stack ",
    sectionDesc:
      "Industry-standard tools to automate deployments, manage infrastructure, and monitor application performance. ",
    frameworks: [
      { title: "Kubernetes ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Jenkins ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "Terrafrom ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "Jenkins  ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "Docker", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "Prometheus ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
      { tile: "Grafana ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },

    ],
  };

  const devData = {
    sectionTitle: "Our DevOps Implementation Process ",
    sectionDesc:
      "A structured approach to streamline deployments and maintain reliable infrastructure operations. ",
    steps: [
      {
        title: "Infrastructure & Assessment",
        desc: "Evaluating existing development workflows, deployment processes, and infrastructure setup.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "CI/CD Pipeline Setup",
        desc: "Designing automated pipelines for code integration, testing, and deployment to reduce manual effort.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Infrastructure Automation",
        desc: "Implementing infrastructure practices to automate cloud resource management and configuration.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Monitoring & Optimization",
        desc: "Setting up monitoring tools and dashboards to track system performance and detect issues early. ",
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
      <PageIntro title={"DevOps "} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerDev;
