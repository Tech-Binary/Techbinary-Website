import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/PortfolioDo.css";

const PortfolioDo = () => {
  return (
    <section className="portfolio-do">
      {/* Left Section */}
      <div className="portfolio-do-left">
        <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Portfolio/What%20we%20do.png" alt="Portfolio Illustration" className="portfolio-do-img" />
      </div>

      {/* Right Section */}
      <div className="portfolio-do-right">
        <p className="portfolio-do-subtitle">
          <img src="/images/Frame.png" alt="line" className="portfolio-do-frame" />
         OUR CAPABILITIES 
        </p>

        <h2 className="portfolio-do-title">
          Building Technology Systems for 
          <span> Real Business Operations</span>
        </h2>

 <div className="portfolio-do-desc">
  <p>
Businesses today rely on technology to manage data, streamline operations, and deliver better user experiences. Tech Binary works with organizations to design and develop digital platforms that simplify complex processes and support everyday business activities. 
  </p>

  <p>
   Our teams build web & mobile applications, and enterprise systems using modern development frameworks, cloud infrastructure, and API-driven architecture. Each platform is designed to handle growing data volumes, integrate with existing tools, and maintain consistent performance as usage increases. 
  </p>

  <p>
  Beyond development, we believe in building reliable systems that businesses can operate and scale with confidence. Careful planning, structured development practices, and continuous optimization ensure every solution remains secure and relevant as business evolves. 
  </p>
</div>


       

        <a href="/Get-In-Touch" className="portfolio-do-btn">
          Get In Touch
          <img
            src="/images/arrow2.png"
            alt="arrow"
            className="portfolio-do-arrow"
          />
        </a>
      </div>
    </section>
  );
};

export default PortfolioDo;
