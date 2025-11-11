import React from "react";
import "../Stylesheet/JavaServices.css";
import { Check } from "lucide-react";

const JavaServices = ({ data }) => {
  if (!data || data.length === 0) return null; // Safety check

  const { title, description, image, buttonText, points } = data[0];

  return (
    <section className="java-services">
      {/* Left Content Section */}
      <div className="java-services-left">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="java-points">
          {points.map((point, index) => (
            <div className="java-point" key={index}>
              <Check className="check-icon" />
              <div>
                <h4>{point.title}</h4>
                <p>{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
           

            <a href="/Get-In-Touch" className="portfolio-do-btn">
          Get In Touch
          <img
            src="/images/arrow2.png"
            alt="arrow"
            className="portfolio-do-arrow"
          />
        </a>
        {/* <button className="java-btn">
          {buttonText} <span className="arrow"></span>
        </button> */}
      </div>

      {/* Right Side - Image Section */}
      <div className="java-services-right">
        <img
          src={image}
          alt={title}
          className="java-group-img"
        />
      </div>
    </section>
  );
};

export default JavaServices;
