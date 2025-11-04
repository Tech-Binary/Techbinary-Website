import React from "react";
import "../Stylesheet/BlogCard.css";






const blogPosts = [
  {
    image: "/images/B1.png",
    title: "Digital Transformation in Accounting",
    description:
      "Discover how AI and automation are reshaping accounting workflows, reducing human error, and enabling smarter business decisions.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image:"/images/B2.png",
    title: "The Future of Export Trade",
    description:
      "Learn how data-driven traceability and sustainable sourcing are redefining the global spice export market.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image:"/images/B3.png",
    title: "Building Trust with Financial Transparency",
    description:
      "Explore how clear documentation and audit readiness can strengthen client confidence and business credibility.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "/images/B4.png",
    title: "Why UI Design Matters for Your Brand",
    description:
      "Great design isn’t just aesthetics—it drives engagement, builds trust, and turns visitors into loyal customers.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "/images/B5.png",
    title: "How Digital Strategy Drives Business Growth",
    description:
      "Understand how integrating data analytics, automation, and digital tools can accelerate your company’s performance and profitability.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image:"/images/B6.png",
    title: "The Power of Minimalist UI Design",
    description:
      "Learn why simplicity in design improves usability, enhances focus, and creates a timeless digital experience for your audience.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },

  {
    image: "/images/B7.png",
    title: "The Power of Minimalist UI Design",
    description:
      "Learn why simplicity in design improves usability, enhances focus, and creates a timeless digital experience for your audience.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image:"/images/B8.png",
    title: "The Power of Minimalist UI Design",
    description:
      "Learn why simplicity in design improves usability, enhances focus, and creates a timeless digital experience for your audience.",
    author: "Joanna Wellick",
    date: "June 28, 2025",
  },
  {
    image: "/images/B9.png",
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
