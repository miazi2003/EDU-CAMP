import React from "react";
import { FcIdea } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { TbBrandFigma } from "react-icons/tb";


const Banner = () => {
  return (
    <div className="hero min-h-screen  ">



      <div className="hero-content flex-col lg:flex-row-reverse justify-around relative">
       
       
       
        <div className="clip h-112 w-112 primary overflow-clip relative ">
          <div className="absolute bottom-12 left-14 top-22">
            <FcIdea size={50} />
          </div>
        </div>



    <div className="absolute right-122 bg-white p-2 shadow rounded-2xl">
<FaReact size={50} />
    </div>
    <div className="absolute right-8 bottom-48 bg-white p-2 shadow rounded-2xl">
<TbBrandFigma size={50} />
    </div>


    <div className=" h-24 w-42 bannerBg shadow rounded-2xl absolute right-3 top-12 flex items-center text-center justify-center p-4 ">
    <p className="text-sm text-white font-bold">Welcome To Our Study Website</p>
    </div>



        <div className="absolute h-118 w-102 right-12 bottom-4">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/cn8GqL7/07.png"
            alt=""
          />
        </div>







        <div className=" w-1/2">
          <h1 className="text-5xl font-bold">
Endless learning at your fingertips !!!</h1>
          <p className="py-6 font">
           Online learning and teaching marketplace with unlimited assignment tasks , infinite students & supportive tutors . Taught by experts to help you acquire new skills.
          </p>
          <button className="btn bg-green-800 text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 duration-300">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
