import React from "react";
import { MdOutlineSubtitles } from "react-icons/md";

import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const AssignmentCard = ({ assignment }) => {
  console.log(assignment);

  const { title, description, marks, difficulty , thumbnailImageURL } = assignment;

  return (
    <div>
      <div className="card bg-base-100 h-100  shadow-sm flex flex-wrap">
        <figure className="h-42 w-full">
          <img
            src={thumbnailImageURL}
            alt="Shoes"
          />
        </figure>
        <div className="flex">
            <div className="card-body w-[90%] flex flex-col">
          <h2 className="fontSec flex  gap-2 text-lg font-bold">
            <MdOutlineSubtitles /> {title}
          </h2>
          <p className="text-gray-500 font text-xs flex gap-2 ">
              {description}

          </p>
          <p className="flex gap-2 text-gray-500 ">
            {" "}
            <span className="text-black">Marks :</span> {marks}
          </p>
          <div className="">
            <p className="flex gap-2  text-gray-500">
              <span className="text-black">Difficulty :</span>
              {difficulty}{" "}
            </p>
          </div>
          {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div> */}
        </div>

        <div className="flex flex-col items-center gap-3 justify-center w-[10%] lg:pr-2  text-right">
            <button title="Delete" className="text-red-600"><MdDelete /></button>
            <button title="Edit" className="text-blue-800"><CiEdit /></button>
            <button title="View Assignment Details" className="text-green-800"><MdOutlineRemoveRedEye /></button>
        </div>


        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
