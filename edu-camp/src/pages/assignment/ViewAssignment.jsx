
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import moment from 'moment';
import UseAxiosSecure from "../../hooks/useAxiosSecure";
const ViewAssignment = () => {
  const axiosSecure = UseAxiosSecure();
  const [viewData, setViewData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axiosSecure
      .get(`http://localhost:3000/viewAssignment/${id}`)
      .then((res) => {
        console.log(res.data);
        setViewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id , axiosSecure]);




  console.log(viewData);

  const {description, difficulty, dueDate, marks, thumbnailImageURL, title, _id } =
    viewData;




const date = moment(dueDate , "YYYY-MM-DD")
const today = moment()
const daysLeft = date.diff(today , "days" )

console.log(daysLeft , "days")







  return (
    <div className="flex">
      <div className="w-[50%]   mx-auto">
        <div className="p-4 bg-white shadow-lg rounded-r-xl  ">
          <img className="h-[400px] w-full cover" src={thumbnailImageURL} alt="" />
        </div>
        <div className="text-center py-8 text-3xl fontSec">{title}</div>
      </div>

      <div className="w-[50%] pl-12 py-4 ">

            <div className="font flex flex-col gap-4 lg:pr-28">
                <h1 className="text-4xl">{title }</h1>
                <p className="text-gray-400 text-sm">5 ratings | 100+ Students Viewed | 15+ submit</p>
                <p className="text-xl">Assignment Marks : <span className="text-green-800">{marks === 100 ? marks : 100}</span></p>
                <p className="text-red-800">Deadline : {dueDate} , <span className="text-gray-600">( {daysLeft} days left )</span> </p>
                <p>Difficulty : <span className="text-gray-800 " >{difficulty} Task</span></p>
                <p className="w-2/3 text-lg font-bold">Description : <br /> 
                <span className="text-gray-600 w-1/2 text-sm">{description}</span>
                </p>

            <Link to={`/submitAssignment/${id}`}>
            <div className="w-full">
                    <button className="btn w-full bg-green-800 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 duration-300 ">Take Assignment</button>
                </div></Link>
            </div>
      </div>
    </div>
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
