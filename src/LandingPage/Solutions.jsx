import React from "react";
import "./Stylesheet/global.css";
import "./Stylesheet/Solutions.css";
import sol1Img from "./images/sol1.png";
import sol2Img from "./images/sol2.png";
import sol3Img from "./images/sol3.png";
import sol4Img from "./images/sol4.png";
import line from "./images/Frame.png";

const Solutions = () => {
  return (
    <div className="solutions-container">
      <div className="Solution-header">
        <h5>
          <img src={line} alt="line" className="line1-img" />
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
          <img src={sol1Img} alt="Solution 1" />
          <h3>e-HR(HRMS)</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document
          </p>
        </div>

        {/* Card 2 */}
        <div className="solution-card">
          <img src={sol2Img} alt="Solution 2" />
          <h3>e-MAPS(ERP)</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
        </div>

        {/* Card 3 */}

        <div className="solution-card">
          <img src={sol3Img} alt="Solution 3" />
          <h3>Edusys</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
        </div>

        {/* Card 4 */}
        <div className="solution-card">
          <img src={sol4Img} alt="Solution 4" />
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
