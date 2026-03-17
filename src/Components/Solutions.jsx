import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/Solutions.css";
import Slider from "react-slick";

const Solutions = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // number of visible cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="solutions-container section-padding">
      {/* Header Section */}
      <div className="Solution-header">
        <div className="solution-header-top">
          <div>
            <h5>
              <img src="/images/Frame.png" alt="line" className="line1-img" />
              SOLUTIONS FOR GROWTH
            </h5>
            <h2>
              Smart Solutions That Simplify <br />
              <span className="highlight">Complex Operations</span>
            </h2>
          </div>

          {/* 🔹 Button on Right Side */}
          <div className="solutions-btn-wrapper">
            <a href="/Services" className="solution-btn-outline">
              There’s More
              <img
                src="/images/arrow.png"
                alt="arrow"
                className="solution-btn-arow"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Cards Row */}
      {/* <div className="solutions-cards">
        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/e-HR%20(HRMS).png"
            alt="Solution 1"
          />
          <h3>HRMS/CRM Platform </h3>
          <p>
            Manage employees and customer relationships through one unified platform. Track attendance, payroll, leave, and more with organized dashboards and real-time data. 
          </p>
        </div>

        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/e-MAPS%20(ERP).png"
            alt="Solution 2"
          />
          <h3>Transportation Application </h3>
          <p>
         A smart system to manage fleet operations, driver assignments, and trip tracking. Businesses gain better control over scheduling, routes, and daily transport activities. 
          </p>
        </div>

        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/edusys.png"
            alt="Solution 3"
          />
          <h3>Car Rental System </h3>
          <p>
           Handle vehicle inventory, reservations, and customer bookings from a single platform. Simplifies rental operations while keeping vehicle availability and payments organized. 
          </p>
        </div>

        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Banking%20Products%20And%20Services.png"
            alt="Solution 4"
          />
          <h3>E-SIM Portal </h3>
          <p>
           A centralized portal for managing digital SIM plans, activations, and customer access. Helps telecom and travel businesses distribute eSIM services quickly and efficiently. 
          </p>
        </div>

         <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Banking%20Products%20And%20Services.png"
            alt="Solution 4"
          />
          <h3>Traveler App </h3>
          <p>
        A mobile platform that keeps travelers connected with their trips. Users can access itineraries, booking details, updates, and support directly from their phones. 
           </p>
        </div>
      </div> */}



      <Slider {...settings} className="solutions-cards mt-3">
        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/e-HR%20(HRMS).png"
            alt="Solution 1"
          />
          <h3>HRMS/CRM Platform </h3>
          <p>
            Manage employees and customer relationships through one unified platform. Track attendance, payroll, leave, and more with organized dashboards and real-time data.
          </p>
        </div>

        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/e-MAPS%20(ERP).png"
            alt="Solution 2"
          />
          <h3>Transportation Application </h3>
          <p>
            A smart system to manage fleet operations, driver assignments, and trip tracking. Businesses gain better control over scheduling, routes, and daily transport activities.
          </p>
        </div>

        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/edusys.png"
            alt="Solution 3"
          />
          <h3>Car Rental System </h3>
          <p>
            Handle vehicle inventory, reservations, and customer bookings from a single platform. Simplifies rental operations while keeping vehicle availability and payments organized.
          </p>
        </div>

        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Banking%20Products%20And%20Services.png"
            alt="Solution 4"
          />
          <h3>E-SIM Portal </h3>
          <p>
            A centralized portal for managing digital SIM plans, activations, and customer access. Helps telecom and travel businesses distribute eSIM services quickly and efficiently.
          </p>
        </div>

        <div className="solution-card">
          <img
            src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Banking%20Products%20And%20Services.png"
            alt="Solution 4"
          />
          <h3>Traveler App </h3>
          <p>
            A mobile platform that keeps travelers connected with their trips. Users can access itineraries, booking details, updates, and support directly from their phones.
          </p>
        </div>
      </Slider>


    </div>
  );
};

export default Solutions;
