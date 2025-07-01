import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const DeadlineIssue = () => {
  const axiosSecure = useAxiosSecure();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/deadline")
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);

  console.log(assignments);

  return (
    <div className="w-full mx-auto  rounded-2xl p-1 mb-4 lg:px-0 px-4">
      <p className="text-xl text-center mt-2 text-gray-600 mb-4 textWhite">
        Long Deadline Assignment
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        {assignments.map((assignment) => (
          <>
            <div>
              <div className="card bg-base-100 md:h-112 shadow-lg  flex flex-wrap BGround">
                <figure className="h-42 w-full">
                  <img src={assignment.thumbnailImageURL} alt="Shoes" />
                </figure>
                <div className="flex BGround">
                  <div className="card-body w-[90%] h-full flex flex-col ">
                    <div className="flex items-center  justify-between ">
                      <div className=" px-2 bg-green-100 w-max rounded mb-4">
                        <p className="flex gap-2  text-gray-500">
                          {assignment.difficulty}{" "}
                        </p>
                        
                      </div>
                     <Link to={`/viewAssignments/${assignment._id}`}> <button className="flex items-center text-gray-500 gap-1 mb-2">See More <FaLongArrowAltRight /></button></Link>
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
                    <p className="flex gap-2 text-gray-500 ">
                      {" "}
                      <span className="text-black textWhite">
                        Deadline :
                      </span>{" "}
                      {assignment.dueDate}
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

export default DeadlineIssue;
