import React from "react";
import "../Stylesheet/BlogCard.css";

const blogPosts = [
  {
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Blog/Rectangle%2022781.png",
    title: "Future of Cloud Business Applications",
    description:
      "Cloud platforms continue to transform how companies build and scale digital systems. A closer look at how cloud infrastructure supports long-term growth. ",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Blog/Rectangle%2022781-1.png",
    title: "Building Scalable Web Platforms",
    description:
      "Scalable web applications allow businesses to grow without system limitations. Learn how structured development and architecture support great performance.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Blog/Rectangle%2022781-2.png",
    title: "DevOps in Modern Development ",
    description:
      "Modern development relies heavily on automation between development and operations teams. DevOps releases software faster while maintaining stability. ",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Blog/Rectangle%2022781-3.png",
    title: "Importance of API Integration",
    description:
      "Modern software systems rely on APIs to connect multiple platforms. Integration allows data and services to work together seamlessly. ",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Blog/Rectangle%2022781-4.png",
    title: "Cybersecurity in Digital Systems",
    description:
      "As businesses rely more on tech, protecting data becomes essential. Strong cybersecurity practices help prevent risks and maintain trust.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/Blog/Rectangle%2022781-5.png",
    title: "Mobile Apps for Businesses",
    description:
      "Mobile applications help companies stay connected with users anytime. Well-built apps improve accessibility, engagement, and customer experience.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
];

const BlogCard = () => {
  return (
    <section className="blog-grid-section">
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-meta">
                <span className="blog-author">{post.author}</span>
                <span className="blog-date">— {post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;