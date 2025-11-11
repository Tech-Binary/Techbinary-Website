import React from "react";
import "../Stylesheet/GetIn.css";

const GetInTouch = () => {
  return (
    <section className="getintouch-section">
      {/* === Left Form === */}
      <div className="form-container">
        <h2>Book Your Free Consultation</h2>
        <p>Fill out the form below and we'll get back to you within 24 hours.</p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address*" required />
            <input type="tel" placeholder="Phone Number*" required />
          </div>

          <textarea placeholder="Additional Message" rows="4"></textarea>

          <div className="form-check">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">
              You agree to our friendly privacy policy.
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Read More <span className="arrow">→</span>
          </button>
        </form>
      </div>

      {/* === Right Info === */}
      <div className="info-container">
        <h3>Contact Information</h3>

        <div className="info-grid">
          <div className="info-card">
            <img src="/images/T1.png" alt="location" />
            <div>
              <h4>Company Address</h4>
              <p>
                Building Name, Street Name, Area Name,<br />
                City, PIN Code, Country
              </p>
            </div>
          </div>

          <div className="info-card">
            <img src="/images/T2.png" alt="email" />
            <div>
              <h4>Email</h4>
              <p>Contact@Company.Com</p>
            </div>
          </div>

          <div className="info-card">
            <img src="/images/T3.png" alt="phone" />
            <div>
              <h4>Call Us</h4>
              <p>(+91) 000 000 0000</p>
            </div>
          </div>

          <div className="info-card">
            <img src="/images/T4.png" alt="hours" />
            <div>
              <h4>Office Hours</h4>
              <p>
                Mon – Sat | 10:00 AM – 7:00 PM <br />
                <span className="note">(Alternate Saturdays Closed)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="followus">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>

        <div className="map">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0067076848154!2d75.76093827522287!3d26.87152797667177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db559a3fb433f%3A0x48c05229cdb243fd!2sTechbinary!5e0!3m2!1sen!2sin!4v1762841870939!5m2!1sen!2sin"
           allowFullScreen=""
            loading="lazy"
          ></iframe>
         
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
