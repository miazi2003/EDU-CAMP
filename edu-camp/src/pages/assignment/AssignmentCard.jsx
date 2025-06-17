import React from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";

const AssignmentCard = ({ assignment, handleDelete }) => {


  const { title, description, marks, difficulty, thumbnailImageURL, _id } =
    assignment;

  return (
    <div>
      <div className="card bg-base-100 md:h-100  shadow-sm shadow-white flex flex-wrap BGround">
        <figure className="h-42 w-full">
          <img src={thumbnailImageURL} alt="Shoes" />
        </figure>
        <div className="flex BGround">
          <div className="card-body w-[90%] h-full flex flex-col ">
            <div className=" px-2 bg-green-100 w-max rounded">
              <p className="flex gap-2  text-gray-500">
                
                {difficulty}{" "}
              </p>
            </div>
            <h2 className="fontSec flex  gap-2 text-lg font-bold">
               {title}
            </h2>
         <div  className="break-all w-full max-w-sm">
             <p className="text-gray-500 font text-xs flex gap-2 ">
              {description}
            </p>
         </div>
            <p className="flex gap-2 text-gray-500 ">
              {" "}
              <span className="text-black textWhite">Marks :</span> {marks === 100 ? marks : 100}
            </p>
            
          </div>

          <div className="flex flex-col items-center gap-3 justify-center h-full w-[10%] lg:pr-2 lg:mt-0 mt-8  text-right">
            <button
              title="Delete"
              className="text-red-600"
              onClick={() => {
                handleDelete(_id);
              }}
            >
              <MdDelete />
            </button>

           <Link to={`/updateAssignment/${_id}`}>
                      <button title="Edit" className="text-blue-800">
                        <CiEdit />
                      </button></Link>
            <Link to={`/viewAssignments/${_id}`}>
              <button
                title="View Assignment Details"
                className="text-green-800"
              >
                <MdOutlineRemoveRedEye />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
