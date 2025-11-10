import React from "react";
import "../Stylesheet/global.css";
import "../Stylesheet/intro.css";

const Intro = () => {
  return (
    <section className="intro-section">
      <h2 className="intro-watermark">ABOUT US</h2>

      <div className="intro-content">
        <h1 className="intro-title">
          We are a <span className="highlight">IT service Company</span> working
          with <br /> talents on delivering unique ideas
        </h1>
        <p className="intro-text">
          At <strong>TechBinary</strong>, we combine creativity and technology to deliver powerful digital solutions. From web development to mobile apps, we help businesses embrace innovation and stay ahead in a fast-changing digital world. We are more than just an IT company—we are your growth partner. With a focus on quality, transparency, and innovation, TechBinary creates websites, apps, and IT solutions that empower businesses to achieve measurable success.
        </p>
      </div>

      <div className="intro-banner">
        <img
          src="https://blueberrydatastorage.blob.core.windows.net/websitesdata/TechBinary/About%20US/Banner.gif"
          alt="Intro animation"
          className="intro-banner__gif"
        />
      </div>

      <a href="#" className="btn-intro">
        Get In Touch{" "}
        <img
          src="/images/arrow2.png"
          alt="arrow"
          className="btn-navbar"
        />
      </a>
    </section>
  );
};

export default Intro;



//Video code 
// import React, { useRef, useState } from "react";
// import "../Stylesheet/global.css";
// import "../Stylesheet/intro.css";

// const Intro = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (isPlaying) {
//       video.pause();
//     } else {
//       video.play().catch(err => console.log("Play error:", err));
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <section className="intro-section">
//       <h2 className="intro-watermark">ABOUT US</h2>

//       <div className="intro-content">
//         <h1 className="intro-title">
//           We are a <span className="highlight">IT service Company</span> working
//           with <br /> talents on delivering unique ideas
//         </h1>
//         <p className="intro-text">
//          At <strong>TechBinary</strong>, we combine creativity and technology to deliver powerful digital solutions. From web development to mobile apps, we help businesses embrace innovation and stay ahead in a fast-changing digital world. We are more than just an IT company—we are your growth partner. With a focus on quality, transparency, and innovation, TechBinary creates websites, apps, and IT solutions that empower businesses to achieve measurable success.
//         </p>
//       </div>

//       <div className="intro-banner">
//         <video
//           ref={videoRef}
//           src="/images/intro.mp4"
//           className="intro-banner__video"
//           loop
//           muted
//           playsInline
//         />
//       </div>

//       <button className="play-btn" onClick={handlePlayPause}>
//         {isPlaying ? "❚❚" : "▶"}
//       </button>

//       <a href="#" className="btn-intro">
//         Get In Touch{" "}
//         <img
//           src="/images/arrow2.png"
//           alt="arrow"
//           className="btn-navbar"
//         />
//       </a>
//     </section>
//   );
// };

// export default Intro;
