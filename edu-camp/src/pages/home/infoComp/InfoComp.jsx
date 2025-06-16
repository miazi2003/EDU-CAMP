import React from "react";
import { FaTv } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { GiConfirmed } from "react-icons/gi";

const InfoComp = () => {
  return (
    <div className="bGround text">
      <div className="grid grid-cols-4 w-[90%] mx-auto gap-16 py-2 pb-4">
        <div className="h-24 flex justify-between  rounded-2xl px-2  bg-yellow-100">
          <div className="flex-1 w-1/2 h-full flex items-center justify-center">
            <FaTv size={40} />
          </div>
          <div className="flex-1 w-1/2 h-full flex  justify-center  flex-col "><p className="font-bold text-lg font">10k</p>  <p className="text-sm">Online Course</p></div>
        </div>
        <div className="h-24 flex justify-between  rounded-2xl px-2  bg-blue-100">
          <div className="flex-1 w-1/2 h-full flex items-center justify-center">
            <GrUserManager size={40} />
          </div>
          <div className="flex-1 w-1/2 h-full flex  justify-center  flex-col "><p className="font-bold text-lg font">200+</p>  <p className="text-sm">Expert Tutors</p></div>
        </div>
        <div className="h-24 flex justify-between  rounded-2xl px-2  bg-purple-100">
          <div className="flex-1 w-1/2 h-full flex items-center justify-center">
            <PiStudentBold size={40} />
          </div>
          <div className="flex-1 w-1/2 h-full flex  justify-center  flex-col "><p className="font-bold text-lg font">60k</p>  <p className="text-sm">Online Students</p></div>
        </div>
        <div className="h-24 flex justify-between  rounded-2xl px-2  bg-violet-100">
          <div className="flex-1 w-1/2 h-full flex items-center justify-center">
            <GiConfirmed size={40} />
          </div>
          <div className="flex-1 w-1/2 h-full flex justify-center  flex-col "><p className="font-bold text-lg font">6k</p> <p  className="text-sm"> Certified Courses</p></div>
        </div>
      </div>
    </div>
  );
};

export default InfoComp;
