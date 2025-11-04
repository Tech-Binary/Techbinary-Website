import React from "react";
import Slider from "react-slick";
import Blog1Img from "./images/Blog1.png";
import Blog2Img from "./images/blog2.png";
import Blog3Img from "./images/Blog3.png";
import line from "./images/Frame.png"; 
import "./Stylesheet/global.css";
import "./Stylesheet/Blog.css";

const BlogSection = () => {
  const blogs = [
    {
      img: Blog1Img,
      tag: "EVENTS",
      date: "19 October 2023",
      desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design.",
    },
    {
      img: Blog2Img,
      tag: "PRODUCT UPDATES",
      date: "19 October 2023",
      desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design.",
    },
    {
      img: Blog3Img,
      tag: "INDUSTRY NEWS",
      date: "19 October 2023",
      desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design.",
    },
    {
      img: Blog2Img,
      tag: "INSIGHTS",
      date: "22 October 2023",
      desc: "Latest updates and analysis of enterprise trends in software and tech.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="blog-section">
      {/* === Blog Header === */}
      <div className="blog-header">
        {/* 🟩 Left Side (Heading + Line image) */}
        <div className="blog-header-left">
          {/* Decorative line image */}
          
          {/* Heading section */}
          <h5>
            <img src={line} alt="line" className="line2-img" />
            BLOGS
            </h5>
          <h2>
            Latest Insights & <span className="highlight">Industry</span> <br />
            <span className="highlight">Trends</span>
          </h2>
        </div>

        {/* 🟦 Right Side (Subtext paragraph) */}
        <div className="blog-header-right">
          <p>
            Lorem ipsum dolor sit amet. Qui corrupti officia sed labore veritatis
            aut obcaecati porro aut consequatur sint in explicabo rerum quo
            corporis eveniet. Vel tempora nihil est minus nisi ab laboriosam ipsa.
          </p>
        </div>
      </div>

      {/* === Blog Slider === */}
      <Slider {...settings} className="blog-slider">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            {/* Blog Image */}
            <img src={blog.img} alt={blog.tag} />

            {/* Blog Content */}
            <div className="blog-content">
              <span className="meta">
                <strong>{blog.tag}</strong> <span>{blog.date}</span>
              </span>
              <p>{blog.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BlogSection;
