import React from "react";
import Slider from "react-slick";
import "./Stylesheet/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stylesheet/TrustedPartners.css";
import cmmb from "./images/cmmb.png";
import oxfam from "./images/XFAM.png";
import Lafarge from "./images/Lafarge.png";
import WWF from "./images/WWF.png";
import msc from "./images/msc.png";


const TrustedPartners = () => {
  const partners = [
    { id: 1, img: cmmb, alt: "CMMB" },
    { id: 2, img: oxfam, alt: "OXFAM" },
    { id: 3, img: WWF , alt: "WWF" },
    { id: 4, img: Lafarge, alt: "LAFARGE" },
    { id: 5, img: msc , alt: "MSC" },
    { id: 6, img: cmmb, alt: "CMMB" },
    { id: 7, img: oxfam, alt: "OXFAM" },
    { id: 8, img: WWF, alt: "WWF" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1600,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="trusted-partners">
      <h2 className="trusted-title">Our Trusted Partner</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="partner-slide">
              <img
                src={partner.img}
                alt={partner.alt}
                className="partner-logo"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedPartners;
