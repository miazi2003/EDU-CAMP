import React from "react";
import { FcIdea } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { TbBrandFigma } from "react-icons/tb";
import { motion } from "motion/react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero  lg:p-2 md:p-4 p-6 rounded-3xl mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse justify-around relative ">
        <div className="clip h-102 w-102 primary overflow-clip relative lg:flex hidden">
          <motion.div animate={{scale:[1 , 1.01 , 1]  , transition : {duration : 3 , repeat : Infinity}}  } className="absolute bottom-12 left-14 top-22 ">
            <FcIdea size={50} />
          </motion.div>
        </div>

        <motion.div animate={{y:[0,1,0] , transition : {duration : 2 , repeat : Infinity}}  } className="absolute right-122 bg-white p-2 shadow shadow-blue-400 rounded-2xl text lg:flex hidden">
          <FaReact size={50} />
        </motion.div>
        <motion.div animate={{x:[0,1,0] , transition : {duration : 2 , repeat : Infinity}}  } className="absolute right-8 bottom-48 bg-white p-2 shadow shadow-blue-400 rounded-2xl text lg:flex hidden">
          <TbBrandFigma size={50} />
        </motion.div>

        <div className=" h-24 w-42 bannerBg shadow shadow-green-300 rounded-2xl absolute right-3 top-12  items-center text-center justify-center p-4 lg:flex hidden">
          <p className="text-sm text-white font-bold ">
            Welcome To Our Study Website
          </p>
        </div>

        <div className="absolute h-108 w-98 right-12 bottom-4 md:flex hidden">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/cn8GqL7/07.png"
            alt=""
          />
        </div>

        <div className=" lg:w-1/2 px-4 flex flex-col gap-4">
       <div>
           <h1 className="md:text-5xl text-3xl font-bold">
            Endless learning at your fingertips !!!
          </h1>
          <p className="py-6 font lg:text-lg text-sm text-gray-700 font-medium textWhite">
            Online learning and teaching marketplace with unlimited assignment
            tasks , infinite students & supportive tutors . Taught by experts to
            help you acquire new skills.
          </p>
            <Link to={"/assignments"}><button className="btn bg-green-800 text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 duration-300">
            Get Started
          </button></Link>
       </div>

       <div className="md:hidden   bg-green-100 rounded-lg w-full">
        <img src="https://i.ibb.co/cn8GqL7/07.png" alt="" />
       </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
