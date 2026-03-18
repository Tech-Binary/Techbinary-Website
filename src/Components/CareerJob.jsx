import React, { useState } from "react";
import "../Stylesheet/CareerJob.css";
import { CiLocationOn } from "react-icons/ci";
import { TbArrowUpRight } from "react-icons/tb";

const jobs = [
  {
    icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Wordpress.png",
    date: "10 MARCH, 2026 ",
    desc: "Plan and execute digital campaigns across SEO, social media, and email channels to improve brand visibility and generate quality leads. ",
    title: "Digital Marketer",
    type: "FULL TIME",
    salary: " ₹25K–₹35K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon:"https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/App%20store.png",
    title: "Lead Product Designer ",
    date: "11 MARCH, 2026 ",
    desc: "Lead product design initiatives by creating intuitive user experiences, wireframes, and visual interfaces for web and mobile applications. ",
    type: "FULL TIME",
    salary: "₹45K–₹65K ",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Slack.png",
    title: "Full-Stack Developer",
    date: "8 MARCH, 2026  ",
    desc: "Develop and maintain scalable web applications by working on both front-end interfaces and back-end system architecture. ",
    type: "FULL TIME",
    salary: "₹50K–₹70K ",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon:  "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Figma.png",
    title: "UI/UX Designer",
    date: "11 MARCH, 2026 ",
    desc: "Design engaging user interfaces and improve digital experiences through user research, wireframing, prototyping, and usability testing. ",
    type: "FULL TIME",
    salary: "₹30K–₹45K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Marketing%20&%20Communication.png",
    title: "Marketing & Communication Executive ",
    date: "11 MARCH, 2026 ",
    desc: "Develop marketing strategies, manage brand communication, and coordinate campaigns across digital platforms and marketing channels. ",
    type: "FULL TIME",
    salary: " ₹28K–₹40K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Finance%20Management.png",
    title: "Finance Management Executive ",
    date: "13 MARCH, 2026 ",
    desc: "Handle financial records, budgeting processes, and reporting while supporting overall financial operations and compliance. ",
    type: "FULL TIME",
    salary: " ₹35K–₹50K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Slack.png",
    title: "Senior Full-Stack Developer ",
    date: "8 MARCH, 2026 ",
    desc: "Work on building scalable applications using modern frameworks, APIs, and database technologies for high-performance systems. ",
    type: "FULL TIME",
    salary: " ₹55K–₹75K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon:  "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/careers/Figma.png",
    title: "Senior UI/UX Designer ",
    date: "12 MARCH, 2026 ",
    desc: "Create user-centered designs, interactive prototypes, and visually consistent interfaces for complex digital products. ",
    type: "FULL TIME",
    salary: " ₹40K–₹55K",
    location: "Jaipur, Rajasthan, India",
  },
  
];

const CareerJob = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prevCount) =>
      prevCount === 6 ? jobs.length : 6
    );
  };

  return (
    <section className="jobs-section">
      <h2 className="jobs-heading">Current Openings </h2>

      <div className="jobs-grid">
        {jobs.slice(0, visibleCount).map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-top">
              <div className="job-meta-box">
                 <p className="job-meta2">
                  APPLY BEFORE
                </p>
                <p className="job-meta">
                 <strong>{job.date}</strong>
                </p>
              </div>
              <div className="divider"></div>
              <div className="job-meta-box">
                 <p className="job-meta2">
                  JOB TYPE
                </p>
                <p className="job-meta">
                 <strong>{job.type}</strong>
                </p>
              </div>
              <div className="divider"></div>
              <div className="job-meta-box">
                 <p className="job-meta2">
                  SALARY
                </p>
                <p className="job-meta">
                 <strong>{job.salary}</strong>
                </p>
              </div>
            </div>

            <div className="job-body">
              <div className="job-title">
                <img src={job.icon} alt={job.title} className="job-icon" />
                <h3>{job.title}</h3>
              </div>
              <p className="job-desc">
              {job.desc}
              </p>
            </div>

            <div className="job-footer">
              <p className="job-location">
                <img src="/images/location-icon.svg" alt="img" style={{marginRight:'5px', width:'18px', height:'auto'}}/>
                {job.location}
              </p>
              <a href="#" className="job-link">
                More Details <TbArrowUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more">
        <button onClick={handleViewMore}>
          {visibleCount === 6 ? "View More" : "View Less"}
        </button>
      </div>
    </section>
  );
};

export default CareerJob;