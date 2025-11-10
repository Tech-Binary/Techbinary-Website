import React from "react";
import "../Stylesheet/Banner.css";
import "../Stylesheet/global.css";


const Banner = () => {
  return (
    <div className="banner">
      {/* Background Image */}
      <img src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/You%C2%A0share%20your%20idea%E2%80%A8We%20get%20it%20done.png" alt="Banner" className="banner-img" />

      <div className="banner-content">
        {/* Left Side Text */}
        <div className="banner-text">
          <h2>
            You share your idea  <br />
            <span className="highlight">We get it done</span>
          </h2>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Right Side Numbers */}
        <div className="banner-numbers">
          <div className="number-box"><h2>50+</h2>
          <p>Happy Clients</p> </div>
          <div className="number-box"><h2>500+</h2><p>Enterprise Projects</p></div>
          <div className="number-box"><h2>100</h2><p>Specialists</p></div>
          <div className="number-box"><h2>80+</h2><p>Our Team</p></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
