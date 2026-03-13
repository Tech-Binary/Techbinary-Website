

import React from "react";
import PageIntro from "../Components/PageIntro";
import JavaServices from "../Components/JavaServices";
import ServiceBenefit from "../Components/ServiceBenefit";
import Frameworks from "../Components/FrameWork";
import Development from "../Components/Development";
const ServiceInnerData = () => {
   const javaData = [
    {
      title: "Data Analytics That Supports Daily Decisions ",
      description:
        "Many organizations already collect large amounts of data across CRMs, operational systems, spreadsheets, and cloud platforms, but that information often remains scattered and difficult to interpret. How we differ: ",
      image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Why%20Choose%20Our%20Java%20Development%20Services_.png",
      buttonText: "Get Consultation",
      points: [
        {
          title: "Structured Data Processing",
          desc: "Organizing raw datasets into structured formats that can be analyzed effectively.",
        },
        {
          title: "Insight-Focused Analytics",
          desc: "Developing dashboards and reports that highlight patterns, trends, and key metrics.",
        },
        {
          title: "Business-Oriented Data Models",
          desc: "Designing analytics solutions aligned with operational goals and decision-making needs.",
        },
      ],
    },
  ];

  const serviceData = {
    sectionTitle: "Business Value of Data Analytics ",
    sectionDesc:
      "Helps organizations identify patterns, measure performance, and make more informed decisions. ",
    services: [
      {
        title: "Improved Visibility ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/High%20Performance.png",
        desc: "Businesses gain a clearer understanding of internal processes by analyzing operational data. Patterns in production, logistics, or service delivery can highlight inefficiencies and improvement opportunities. ",
      },
      {
        title: "Centralized Data Reporting ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Secure%20&%20Reliable.png",
        desc: "Analytics systems consolidate information from multiple data sources into unified dashboards, making reporting easier and more accessible for decision-makers. ",
      },
      {
        title: "Predictive Planning ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Highly%20Scalable.png",
        desc: "Using historical data and predictive models, organizations can forecast demand, identify future trends, and prepare strategies based on expected outcomes. ",
      },
      {
        title: "Better Decision Support ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Fast%20Delivery.png",
        desc: "Analytics dashboards provide real-time insights into performance indicators such as sales trends, operational metrics, and customer activity. This allows managers to base decisions on measurable data rather than assumptions. ",
      },
      {
        title: "Customer Behaviour Insights ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Expert%20Team.png",
        desc: "Analyzing customer interactions and transaction data helps businesses understand purchasing behavior, engagement patterns, and service usage trends. ",
      },
      {
        title: "Performance Monitoring ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/7%20Support.png",
        desc: "Analytics platforms allow teams to track KPIs and monitor performance across departments, helping businesses stay aligned with operational targets. ",
      },
    ],
  };

  const frameworkData = {
    sectionTitle: "Analytics Tools & Platforms ",
    sectionDesc:
      "Modern analytics platforms and data processing tools to organize, analyze, and visualize business data. ",
    frameworks: [
      { title: "Power BI ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Java.png" },
      { title: "Tableau ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Spring%20Boot.png" },
      { title: "Python ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/AWS.png" },
      { title: "SQL ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Azure.png" },
      { title: "Spark ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Docker.png" },
      { title: "BigQuery ", icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/PostgreSQL.png" },
    ],
  };

  const devData = {
    sectionTitle: "Our Data Analytics Approach ",
    sectionDesc:
      "A structured workflow to organize business data, generate insights, and build reliable analytics systems. ",
    steps: [
      {
        title: "Data Assessment",
        desc: "Understanding data sources such as databases, CRM systems, operational tools, and spreadsheets.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Discovery%20&%20Planning.png",
      },
      {
        title: "Data Preparation & Structuring",
        desc: "Cleaning, transforming, and organizing raw datasets into structured formats for analysis and reporting.",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/UX%20Design.png",
      },
      {
        title: "Dashboard Development",
        desc: "Building analytical models and dashboards that highlight trends and operational insights. ",
        icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/icons/Development%20&%20Testing.png",
      },
      {
        title: "Reporting & Delivery",
        desc: "Providing accessible dashboards and reports that allow teams to track performance metrics.",
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
      <PageIntro title={"Data Analytics"} bgImage={"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/services/Banner%20Description.png"} />
      <JavaServices data={javaData} />
      <ServiceBenefit data={serviceData} />
      <Frameworks data={frameworkData} />
      <Development data={devData} />
    </>
  );
};

export default ServiceInnerData;