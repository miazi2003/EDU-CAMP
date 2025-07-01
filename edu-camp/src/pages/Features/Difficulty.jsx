import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";

const Difficulty = () => {
  const axiosSecure = useAxiosSecure();

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/createAssignmentAll")
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);

  const handleSearch = (value) => {
    axiosSecure
      .get(`/searchAssignment?search=${value}`)
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(assignments);

  return (
    <div className="w-full mx-auto lg:px-0 px-4">
      <p className="text-xl text-center mt-2 text-gray-600 mb-4 textWhite ">
        Search Our Assignment By Your Preferred Difficulty
      </p>
      <div className="w-full text-center mt-4 mb-4">
        <select
          className="border border-gray-300 p-1 text-gray-500 assignment textWhite"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        >
          <option value="">Filter by Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {assignments.map((assignment) => (
          <>
            <div>
              <div className="card bg-base-100 md:h-112  shadow-lg  flex flex-wrap BGround">
                <figure className="h-42 w-full">
                  <img src={assignment.thumbnailImageURL} alt="Shoes" />
                </figure>
                <div className="flex BGround">
                  <div className="card-body w-[90%] h-full flex flex-col ">
                    <div className="flex items-center justify-between">
                      <div className=" px-2 bg-green-100 w-max rounded">
                        <p className="flex gap-2  text-gray-500">
                          {assignment.difficulty}{" "}
                        </p>
                      </div>
                      <Link to={`/viewAssignments/${assignment._id}`}>
                        {" "}
                        <button className="flex items-center text-gray-500 gap-1 mb-2">
                          See More <FaLongArrowAltRight />
                        </button>
                      </Link>
                    </div>
                    <h2 className="fontSec flex  gap-2 text-lg font-bold">
                      {assignment.title}
                    </h2>
                    <div className="break-all w-full max-w-sm">
                      <p className="text-gray-500 font text-xs flex gap-2 ">
                        {assignment.description}
                      </p>
                    </div>
                    <p className="flex gap-2 text-gray-500 ">
                      {" "}
                      <span className="text-black textWhite">Marks :</span>{" "}
                      {assignment.marks === 100 ? assignment.marks : 100}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
