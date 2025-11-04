import React from "react";
import "./Stylesheet/BlogCard.css";

// Import your images from local files
import img1 from "./images/B1.png";
import img2 from "./images/B2.png";
import img3 from "./images/B3.png";
import img4 from "./images/B4.png";
import img5 from "./images/B5.png";
import img6 from "./images/B6.png";
import img7 from "./images/B7.png";
import img8 from "./images/B8.png";
import img9 from "./images/card1.png";




const blogPosts = [
  {
    image: img1,
    title: "Digital Transformation in Accounting",
    description:
      "Discover how AI and automation are reshaping accounting workflows, reducing human error, and enabling smarter business decisions.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: img2,
    title: "The Future of Export Trade",
    description:
      "Learn how data-driven traceability and sustainable sourcing are redefining the global spice export market.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: img3,
    title: "Building Trust with Financial Transparency",
    description:
      "Explore how clear documentation and audit readiness can strengthen client confidence and business credibility.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: img4,
    title: "Why UI Design Matters for Your Brand",
    description:
      "Great design isn’t just aesthetics—it drives engagement, builds trust, and turns visitors into loyal customers.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: img5,
    title: "How Digital Strategy Drives Business Growth",
    description:
      "Understand how integrating data analytics, automation, and digital tools can accelerate your company’s performance and profitability.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: img6,
    title: "The Power of Minimalist UI Design",
    description:
      "Learn why simplicity in design improves usability, enhances focus, and creates a timeless digital experience for your audience.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },

  {
    image: img7,
    title: "The Power of Minimalist UI Design",
    description:
      "Learn why simplicity in design improves usability, enhances focus, and creates a timeless digital experience for your audience.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: img8,
    title: "The Power of Minimalist UI Design",
    description:
      "Learn why simplicity in design improves usability, enhances focus, and creates a timeless digital experience for your audience.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: img9,
    title: "The Power of Minimalist UI Design",
    description:
      "Learn why simplicity in design improves usability, enhances focus, and creates a timeless digital experience for your audience.",
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
