import React from "react";
import "./BannerTwo.css"
import { Link } from "react-router";


const BannerTwo = () => {
  return (
    <section className="banner-two">
      <div className="text-area">
        <h2 className="head2">Empower Your Knowledge With Us</h2>
        <p className="para2 textWhite">
          Dive into unlimited courses designed to elevate your skills and future-proof your career. Learn from passionate instructors and a supportive community.
        </p>
       <Link to={"/assignments"}><button className="explore">Explore Courses</button></Link>
      </div>
      <div className="image-area">
        <div className="circle-bg"></div>
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dfd9b2b3-0feb-441d-9d5e-94f92cc32965.png"
          alt="Smiling young man holding a tablet and wearing a backpack against a soft round green background circle"
          className="main-img"
          onError={(e) => (e.target.style.display = 'none')}
        />
        <div className="badge">Join Today!</div>
      </div>
       </section> );
};

export default BannerTwo