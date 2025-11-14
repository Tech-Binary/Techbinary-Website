import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Stylesheet/global.css";
import "../Stylesheet/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <img
              src="/images/logo.png"
              alt="TechBinary Logo"
              className="logo-img"
            />
          </div>

          {/* 🔹 Hamburger Icon */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Links */}
          <nav className="nav-menu">
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/about-us"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  About Us
                </NavLink>
              </li>

              <li className="dropdown">
                <NavLink
                  to="/Services"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Portfolio"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Career"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Careers
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Blog"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <NavLink
            to="/Get-In-Touch"
            className={({ isActive }) =>
              isActive ? "btn-nav active-link" : "btn-nav"
            }
          >
            Get In Touch
            <img src="/images/arrow2.png" alt="arrow" className="btn-navbar" />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
