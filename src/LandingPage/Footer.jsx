import React from "react";
import "./Stylesheet/global.css";
import "./Stylesheet/Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCaretRight } from "react-icons/fa";
import footer from "./images/footer.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo Section */}
      <div className="footer-logo-section">
        <hr className="footer-line" />
        <img src={footer} alt="TechBinary Logo" className="footer-logo" />
        <hr className="footer-line" />
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        {/* Development Services */}
        <div className="footer-column">
          <h3>Development Services</h3>
          <ul>
            <li><FaCaretRight /> Product Design</li>
            <li><FaCaretRight /> MVP Development</li>
            <li><FaCaretRight /> Devops Solutions</li>
            <li><FaCaretRight /> Enterprise Web Development</li>
            <li><FaCaretRight /> Voice/Alexa App Development</li>
            <li><FaCaretRight /> Blockchain App Development</li>
            <li><FaCaretRight /> AI BOT Development</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><FaCaretRight /> Our Approach</li>
            <li><FaCaretRight /> About Us</li>
            <li><FaCaretRight /> Meet the Team</li>
            <li><FaCaretRight /> Careers</li>
            <li><FaCaretRight /> News</li>
            <li><FaCaretRight /> Contact Us</li>
            <li><FaCaretRight /> Privacy Policy</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="footer-column">
          <h3>Enterprise</h3>
          <ul>
            <li><FaCaretRight /> On Demand App Development</li>
            <li><FaCaretRight /> Hipaa Compliances</li>
            <li><FaCaretRight /> Software Testing Services</li>
            <li><FaCaretRight /> Enterprise App Integration</li>
            <li><FaCaretRight /> Business Intelligence</li>
            <li><FaCaretRight /> Staff Augmentation Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 96 Hearsall Lane, Coventry CV5 6HH</p>
          <p><FaPhoneAlt /> 024 7767 3030</p>
          <p><FaEnvelope /> Contact@Company.Com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <span><p>techbinary Group © 2025 | All Rights Reserved</p> </span>
        <span><p>USA | UK | Canada | Australia | Norway | Germany | France | Sweden | Poland</p></span>
      </div>
    </footer>
  );
};

export default Footer;
