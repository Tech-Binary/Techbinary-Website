import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/ServiceBenefit.css";

const ServiceBenefit = ({data}) => {
  
const serviceData = data
  return (
    <section className="servicebenefit-section">
      {/* Dynamic Header */}
      <div className="servicebenefit-header">
        <h5>{serviceData.sectionTitle}</h5>
        <p>{serviceData.sectionDesc}</p>
      </div>

      {/* Dynamic Services */}
      <div className="servicebenefit-wrapper">
        {serviceData.services.map((service, index) => (
          <div className="servicebenefit-card" key={index}>
            <div className="servicebenefit-icon">
              <img src={service.icon} alt={service.title} loading="lazy" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceBenefit;
