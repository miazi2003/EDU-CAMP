import React from "react";
import "./BannerOne.css";
import { Link } from "react-router";
const BannerOne = () => {
  return (
    <section className="banner-one lg:pt-0 ">
      <div className="content ">
        <h1 className="head">Explore. Learn. Grow.</h1>
        <p className="para textWhite">
          Transform your skills with engaging lessons, limitless assignments,
          and guidance from experienced educators. Education designed for your
          success.
        </p>
       <Link to={"/assignments"}> <button className="get">Begin Your Journey</button></Link>
      </div>
      <div className="image-area ">
        <div className="background-shape "></div>
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af063799-0f61-47bb-ae33-5b2474996394.png"
          alt="Young male student smiling, holding books and wearing glasses and backpack, casual attire"
          className="main-img "
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
    </section>
  );
};

export default BannerOne;
