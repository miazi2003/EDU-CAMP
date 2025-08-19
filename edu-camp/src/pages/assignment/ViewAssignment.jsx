import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import moment from "moment";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import { IoMdStar } from "react-icons/io";

const ViewAssignment = () => {
  const axiosSecure = UseAxiosSecure();
  const [viewData, setViewData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axiosSecure
      .get(`/viewAssignment/${id}`)
      .then((res) => {
        console.log(res.data);
        setViewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, axiosSecure]);

  console.log(viewData);



  const {
    description,
    difficulty,
    dueDate,
    marks,
    thumbnailImageURL,
    title,
    _id,
  } = viewData;

  const date = moment(dueDate, "YYYY-MM-DD");
  const today = moment();
  const daysLeft = date.diff(today, "days");

  console.log(daysLeft, "days");

 

  return (
    <>
      <div className=" min-h-screen max-w-7xl mx-auto md:flex flex-col lg:flex-row    justify-between">
        <div className=" h-[500px] md:w-[40%] w-full  rounded-lg flex flex-col items-center justify-center">
          <img
            className="h-[70%] md:w-[70%] md:p-0 p-8  bg-cover rounded-2xl "
            src={thumbnailImageURL}
            alt=""
          />
          <h1 className="mt-4 text-2xl lg:flex hidden"> {title}</h1>
        </div>

        <div className="details md:w-[60%] flex flex-col items-center  min-h-screen py-14">
         <div className="flex flex-col gap-4 items-start lg:pl-0 pl-8">
           <h1 className="text-black text-xl textWhite"> <span className="Font-bold text-xl text-gray-500 ">Title :</span> {title}</h1>
          <h1>  <span className="Font-bold text-xl text-gray-500 ">Difficulty :</span> {difficulty}</h1>
          <h1> <span className="Font-bold text-xl text-gray-500 ">Marks :</span> {marks}</h1>
          <h1> <span className="Font-bold text-xl text-gray-500 ">Assignment Id  :</span> {_id}</h1>
          <h1 className="break-words md:w-2/3"> <span className="Font-bold text-xl text-gray-500 ">Description :</span> <br /> {description}</h1>
          <div className="flex gap-2 items-center border border-gray-500 max-w-max px-4 py-4 rounded-2xl">
            <p>Ratings : </p>
            <div className="flex gap-4 text-yellow-600">
              <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
            </div>
           
          </div>
          <Link to={`/submitAssignment/${_id}`}> <div className="w-full">
              <button className="btn  bg-green-800 text-white textWhite">Take Assignment</button>
            </div></Link>
         </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default ViewAssignment;

// description
// :
// "Draw reaction mechanisms for 5 nucleophilic substitutions with stereochemistry analysis."
// difficulty
// :
// "hard"
// dueDate
// :
// "2025-08-12"
// id
// :
// "9"
// marks
// :
// 90
// thumbnailImageURL
// :
// "https://i.ibb.co/KjDHDz4k/maxresdefault.jpg"
// title
// :
// "Organic Chemistry Mechanisms"
// _id
// :
// "6848601876428980cf8de589"
