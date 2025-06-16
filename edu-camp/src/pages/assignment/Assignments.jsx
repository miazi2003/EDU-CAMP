import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import AssignmentCard from "./AssignmentCard";
import { AuthContext } from "../../Context/AuthContext";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Assignments = () => {
  const [search, setSearch] = useState("");
  const axiosSecure = UseAxiosSecure();
  const [assignments, setAssignments] = useState([]);

  const { user } = use(AuthContext);

  const email = user?.email;

  useEffect(() => {
    axiosSecure
      .get("/createAssignment")
      .then((res) => {
        console.log("create assignment page", res.data);
        setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`http://localhost:3000/deleteAssignment/${id}`, { email })
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              console.log("deleted");
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingAssignment = assignments.filter(
                (assignment) => assignment._id !== id
              );
              setAssignments(remainingAssignment);
            } else {
              Swal.fire({
                title: "Cant Delete",
                text: "You Are Not The Creator Of This Assignment",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            err;
          });
      }
    });
  };

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

  const handleReset = (e) => {
    setSearch("");
    axios.get("http://localhost:3000/searchAssignment").then((res) => {
      setAssignments(res.data);
    });
    e.target.reset();
  };

  console.log(search);
  if (assignments.length === 0) {
    return (
      <>
        <div className=" flex justify-around items-center">
          <div></div>
          <div>
            <h1 className="text-4xl text-center mt-4 text-gray-700 ">
              All Assignments
            </h1>
            <p className="text-lg text-gray-500 mt-2 font text-center">
              Choose Your Assignment And Grow Your Career Now
            </p>
          </div>

          <form action="" className="relative" onSubmit={(e) => {
                e.preventDefault();
                handleSearch(search);
              }}>
            <input
              type="text"
              placeholder="Search"
              className=" w-20 h-10 pl-4 md:w-auto border-2 rounded-2xl border-green-800 "
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              className="absolute right-2 top-3 text-gray-600"
              type="submit"
            >
              <FaSearch />
            </button>
            <button
              title="Show All Data"
              className="absolute right-8 top-3 text-gray-600"
              onClick={() => {
                handleReset();
              }}
            >
              <RxCross2 />
            </button>
          </form>
        </div>
        <p className="text-center text-4xl mt-24">No Data Found</p>
      </>
    );
  }

  console.log(search);

  return (
    <>
      <div>
        <div className=" flex justify-around items-center">
          <div></div>
          <div>
            <h1 className="text-4xl text-center mt-4 text-gray-700 ">
              All Assignments
            </h1>
            <p className="text-lg text-gray-500 mt-2 font text-center">
              Choose Your Assignment And Grow Your Career Now
            </p>
          </div>

          <div className="flex items-center gap-2 justify-center">
            <form
             
              className="relative"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(search);
              }}
            >
              <input
                type="text"
                placeholder="Search"
                className=" w-20 h-10 pl-4 md:w-auto border-2 rounded-2xl border-green-800 "
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                className="absolute right-2 top-3 text-gray-600"
                type="submit"
              >
                <FaSearch />
              </button>
              <button
                title="Show All Data"
                className="absolute right-8 top-3 text-gray-600"
                onClick={() => {
                  handleReset();
                }}
              >
                <RxCross2 />
              </button>
            </form>

            <div className="w-full text-center mt-4">
              <select
                name=""
                id=""
                className="border border-gray-300 p-1 text-gray-500"
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleSearch(e.target.value);
                }}
              >
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 p-8">
          {assignments.map((assignment) => (
            <AssignmentCard
              assignment={assignment}
              key={assignment.id}
              handleDelete={handleDelete}
            ></AssignmentCard>
          ))}
        </div>
      </div>
    </>
  );
};
export default Assignments;
