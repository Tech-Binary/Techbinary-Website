import React from "react";
import "./Stylesheet/CareerJob.css";
import { CiLocationOn } from "react-icons/ci";
import { TbArrowUpRight} from "react-icons/tb";

// Import only job icons (your own images)
import wordpressIcon from "./images/j1.png";
import appleIcon from "./images/j2.png";
import slackIcon from "./images/j3.png";
import figmaIcon from "./images/j4.png";
import marketingIcon from "./images/j5.png";
import financeIcon from "./images/j6.png";

const jobs = [
  {
    icon: wordpressIcon,
    title: "Digital Marketer",
    type: "FULL TIME",
    salary: "₹20K–₹30K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: appleIcon,
    title: "Lead Product Designer",
    type: "FULL TIME",
    salary: "₹20K–₹30K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: slackIcon,
    title: "Full-Stack Developer",
    type: "FULL TIME",
    salary: "₹20K–₹30K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: figmaIcon,
    title: "UI/UX Designer",
    type: "FULL TIME",
    salary: "₹20K–₹30K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: marketingIcon,
    title: "Marketing & Communication",
    type: "FULL TIME",
    salary: "₹20K–₹30K",
    location: "Jaipur, Rajasthan, India",
  },
  {
    icon: financeIcon,
    title: "Finance Management",
    type: "FULL TIME",
    salary: "₹20K–₹30K",
    location: "Jaipur, Rajasthan, India",
  },
];

const CareerJob = () => {
  return (
    <section className="jobs-section">
      <h2 className="jobs-heading">Latest Jobs Post</h2>

      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-top">
              <div className="job-meta-box">
                <p className="job-meta">
                  APPLY BEFORE
                  <br /> <strong>8 NOV, 2025</strong>
                </p>
              </div>
              <div className="divider"></div>
              <div className="job-meta-box">
                <p className="job-meta">
                  JOB TYPE
                  <br /> <strong>{job.type}</strong>
                </p>
              </div>
              <div className="divider"></div>
              <div className="job-meta-box">
                <p className="job-meta">
                  SALARY
                  <br /> <strong>{job.salary}</strong>
                </p>
              </div>
            </div>

            <div className="job-body">
              <div className="job-title">
                <img src={job.icon} alt={job.title} className="job-icon" />
                <h3>{job.title}</h3>
              </div>
              <p className="job-desc">
                Lorem ipsum is a dummy or placeholder text commonly used in
                graphic design, publishing, and web development.
              </p>
            </div>

            <div className="job-footer">
              <p className="job-location">
                <CiLocationOn className="loc-icon" />
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
        <button>View More</button>
      </div>
    </section>
  );
};

export default CareerJob;
