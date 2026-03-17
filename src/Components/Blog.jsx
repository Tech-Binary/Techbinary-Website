import React from "react";
import Slider from "react-slick";

// import line from "./images/Frame.png"; 
import "../Stylesheet/global.css";
import "../Stylesheet/Blog.css";

const BlogSection = () => {
  const blogs = [
    {
      img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Blogs%201.png",
      tag: "Why UI/UX Matters ",
      date: "19 October 2023",
      desc: "A closer look at how thoughtful design improves usability, engagement, and overall user experience. ",
    },
    {
      img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Blogs%202.png",
      tag: "DevOps Delivery ",
      date: "19 October 2023",
      desc: "How modern development workflows help teams build, test, and deploy applications more efficiently. ",
    },
    {
      img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Blogs%203.png",
      tag: "Workflow Automation",
      date: "19 October 2023",
      desc: "How automation tools are simplifying business processes and improving operational efficiency. ",
    },
    // {
    //   img: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Home%20Page/Blogs%202.png",
    //   tag: "INSIGHTS",
    //   date: "22 October 2023",
    //   desc: "Latest updates and analysis of enterprise trends in software and tech.",
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
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
    <section className="blog-section section-padding">
      {/* === Blog Header === */}
      <div className="blog-header">
     
        <div className="blog-header-left">
         
          <h5>
            <img src="/images/Frame.png" alt="line" className="line2-img" />
            TECH INSIGHTS 
            </h5>
          <h2>
           Latest Articles & <span className="highlight">Industry</span> <br />
            <span className="highlight">Perspectives</span>
          </h2>
        </div>

        {/* 🟦 Right Side (Subtext paragraph) */}
        <div className="blog-header-right">
          <p>
          Explore articles covering product development, emerging technologies, and digital strategies that influence how businesses build and scale today. 
          </p>
        </div>
      </div>

      {/* === Blog Slider === */}
      <Slider {...settings} className="blog-slider">
        {blogs.map((blog, index) => (
          <div className="blog-card2" key={index}>
            {/* Blog Image */}
            <img src={blog.img} alt={blog.tag} />

            {/* Blog Content */}
            <div className="blog-content2">
              <span className="meta">
            <img src="/images/black-devider.svg" alt="line" style={{width:'22px', height:'2px'}} /><strong>{blog.tag}</strong> <span style={{fontWeight:'400', fontSize:'12px'}}>{blog.date}</span>
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
