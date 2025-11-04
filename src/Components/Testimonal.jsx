import React from "react";
import Slider from "react-slick";
import "../Stylesheet/global.css";
import "../Stylesheet/Testimonal.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      img: "/images/test.png",
      name: "John Doe",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: "/images/test.png",
      name: "Jane Smith",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
    },
    {
      img: "/images/test.png",
      name: "Michael Lee",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: "/images/test.png",
      name: "Sara White",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: "/images/test.png",
      name: "Tom Hanks",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <div className="testimonial-label">
          <img src="/images/Frame.png" alt="line" className="line-img" />
          <h5>TESTIMONIAL</h5>
        </div>
        <h2>
          Client <span className="highlight">Success Stories</span>
        </h2>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-box">
                <div className="testimonial-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <p>{item.desc}</p>
                <h4>{item.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
