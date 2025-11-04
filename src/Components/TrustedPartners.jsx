import React from "react";
import Slider from "react-slick";
import "../Stylesheet/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Stylesheet/TrustedPartners.css";


const TrustedPartners = () => {
  const partners = [
    { id: 1, img: "/images/cmmb.png", alt: "CMMB" },
    { id: 2, img: "/images/XFAM.png", alt: "OXFAM" },
    { id: 3, img:"/images/WWF.png" , alt: "WWF" },
    { id: 4, img: "/images/Lafarge.png", alt: "LAFARGE" },
    { id: 5, img: "/images/msc.png" , alt: "MSC" },
    { id: 6, img: "/images/cmmb.png", alt: "CMMB" },
    { id: 7, img: "/images/XFAM.png", alt: "OXFAM" },
    { id: 8, img: "/images/WWF.png", alt: "WWF" },
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
