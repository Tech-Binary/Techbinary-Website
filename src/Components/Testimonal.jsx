import React from "react";
import Slider from "react-slick";
import "../Stylesheet/global.css";
import "../Stylesheet/Testimonal.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      img: "/images/test.png",
      name: "Arjun Mehta – Operations Manager",
      desc:"Tech Binary helped us build a system that streamlined several of our internal processes. The team was responsive, understood our requirements clearly, and delivered a solution that has improved our daily operations." },
    {
      img: "/images/test.png",
      name: "Sara Khan – Product Lead",
      desc: "Our experience working with Tech Binary was very positive. The developers and designers collaborated closely with our team to create a platform that is both functional and easy to use." },
    {
      img: "/images/test.png",
      name: "Rohit Sharma – Business Director",
      desc: "The team demonstrated strong technical expertise throughout the project. They delivered a reliable platform that performs well and supports our growing business requirements."  },
    {
      img: "/images/test.png",
      name: "Aisha Rahman – Marketing Manager",
      desc: "What stood out was their attention to detail and commitment to delivering quality work. The final product matched our expectations and has helped improve how our customers interact with our services."},
    {
      img: "/images/test.png",
      name: "Daniel Thomas – Founder",
      desc: "Tech Binary approached our project with a clear understanding of the business challenges we were facing. Their structured development process and ongoing support made the entire experience smooth." },
  ];

  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    // speed: 800,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // cssEase: "ease-in-out",
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      // { breakpoint: 1023, settings: { slidesToShow: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <div className="testimonial-label">
          <img src="/images/Frame.png" alt="line" className="line-img" />
          <h5>CLIENT VOICES </h5>
        </div>
        <h2>
          Trusted by <span className="highlight"> Our Clients</span>
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
