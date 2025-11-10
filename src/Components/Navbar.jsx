import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Navbar.css";


const Navbar = () => {
  return (
    <>
      {/* 🔹 Top Bar Section */}
      <div className="top-bar">
        <div className="top-bar-left">
          <img src="/images/mail.png" alt="mail icon" className="flag-icon" />
          <span>contact@techbinary.com</span>
        </div>

        <div className="top-bar-center">
          <span>
            Custom Solutions, Endless Possibilities for Startups and Enterprises
          </span>
        </div>

        <div className="top-bar-right">
          <img src="/images/flag.png" alt="India Flag" className="flag-icon" />
          <span>(+91) 000 000 0000</span>
        </div>
      </div>

      {/* 🔹 Main Navigation Bar */}
      
      <header className="navbar">
        <div className="container">
          {/* Logo Section */}
          <div className="logo">
            <img src="/images/logo.png" alt="TechBinary Logo" className="logo-img" />
          </div>

          {/* Navigation Links */}
          <nav className="nav-menu">
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li className="dropdown"><a href="/Services">Services ▾</a></li>
              <li><a href="/Portfolio">Portfolio</a></li>
              <li><a href="/Career">Careers</a></li>
              <li><a href="/Blog">Blog</a></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <a href="/Get-In-Touch" className="btn-nav">
            Get In Touch
            <img src="/images/arrow2.png" alt="arrow" className="btn-navbar" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
