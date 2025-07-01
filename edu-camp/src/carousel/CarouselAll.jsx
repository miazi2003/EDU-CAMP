import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "../pages/home/banner/Banner";
import BannerOne from "../new BAnner/BannerOne";
import BannerTwo from "../new BAnner/BannerTwo";
const CarouselAll = () => {
  return (
    <div className="my-carousel-wrapper">
        <Carousel showStatus={false} infiniteLoop={true}>
      <div>
        <BannerOne></BannerOne>
      </div>
      <div>
        <BannerTwo></BannerTwo>
      </div>
      <div>
        <Banner></Banner>
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselAll;
