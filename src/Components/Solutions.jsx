import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Solutions.css";

const Solutions = () => {
  return (
    <div className="solutions-container">
      <div className="Solution-header">
        <h5>
          <img src="/images/Frame.png" alt="line" className="line1-img" />
          SOLUTIONS
        </h5>
        <h2>
          Innovative Solutions for <br />
          <span className="highlight"> Tomorrow's Challenges</span>
        </h2>
      </div>
      {/* Cards Row */}
      <div className="solutions-cards">
        {/* Card 1 */}
        <div className="solution-card">
          <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/e-HR%20(HRMS).png" alt="Solution 1" />
          <h3>e-HR(HRMS)</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document
          </p>
        </div>

        {/* Card 2 */}
        <div className="solution-card">
          <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/e-MAPS%20(ERP).png" alt="Solution 2" />
          <h3>e-MAPS(ERP)</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
        </div>

        {/* Card 3 */}

        <div className="solution-card">
          <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/edusys.png" alt="Solution 3" />
          <h3>Edusys</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
        </div>

        {/* Card 4 */}
        <div className="solution-card">
          <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Banking%20Products%20And%20Services.png" alt="Solution 4" />
          <h3>Banking Product And Services</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
