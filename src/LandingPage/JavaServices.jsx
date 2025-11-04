import React from "react";
import "./Stylesheet/JavaServices.css";
import { Check } from "lucide-react";

import javaGroup from "./images/Javapage.png"; // your one combined image

const JavaServices = () => {
  return (
    <section className="java-services">
      {/* Left Content Section */}
      <div className="java-services-left">
        <h2>Why Choose Our Java Development Services?</h2>
        <p>
          With over 10 years of experience in the Java ecosystem, we deliver
          enterprise-grade solutions that scale with your business. Our team
          specializes in modern Java frameworks and cloud-native architectures.
        </p>

        <div className="java-points">
          <div className="java-point">
            <Check className="check-icon" />
            <div>
              <h4>Enterprise-Grade Security</h4>
              <p>
                Implement robust security measures and best practices for your
                applications.
              </p>
            </div>
          </div>

          <div className="java-point">
            <Check className="check-icon" />
            <div>
              <h4>Scalable Architecture</h4>
              <p>
                Design systems that grow with your business needs and handle
                increasing loads.
              </p>
            </div>
          </div>

          <div className="java-point">
            <Check className="check-icon" />
            <div>
              <h4>24/7 Support &amp; Maintenance</h4>
              <p>
                Continuous monitoring and support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>

        <button className="java-btn">
          Get In Touch <span className="arrow">→</span>
        </button>
      </div>

      {/* Right Side - One Grouped Image */}
      <div className="java-services-right">
        <img
          src={javaGroup}
          alt="Java Development Team"
          className="java-group-img"
        />
      </div>
    </section>
  );
};

export default JavaServices;
