import React, { useContext, useEffect, useState } from "react";
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
  const [assignments, setAssignments] = useState([0]);

  const { user } = useContext(AuthContext); // ✅ Fixed here
  const email = user?.email;

  useEffect(() => {
    axiosSecure
      .get("/createAssignment")
      .then((res) => {
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
        axiosSecure
          .post(`/deleteAssignment/${id}`, { email })
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = assignments.filter((a) => a._id !== id);
              setAssignments(remaining);
            } else {
              Swal.fire(
                "Can't Delete",
                "You are not the creator of this assignment",
                "error"
              );
            }
          })
          .catch((err) => {
            console.error(err);
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
    e?.preventDefault();
    setSearch("");
    axios.get("https://a-11-server-five.vercel.app/searchAssignment").then((res) => {
      setAssignments(res.data);
    });
  };

  if (assignments.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center gap-4 min-h-screen px-2">
          <div></div>
          <div>
            <h1 className="text-4xl text-center mt-4 text-gray-700 textWhite">
              All Assignments
            </h1>
            <p className="text-lg text-gray-500 mt-2 font text-center">
              Choose Your Assignment And Grow Your Career Now
            </p>
          </div>
          <div className="max-w-max ">
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
              className="lg:w-20 w-42 h-10 pl-4 md:w-auto border-2 rounded-2xl border-green-800"
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
              onClick={handleReset}
            >
              <RxCross2 />
            </button>
          </form>
          </div>
          <p className="text-center text-4xl mt-24">No Data Found</p>
        </div>
        
      </>
    );
  }

  return (
    <div className="assignment w-full ">
      <div className="lg:flex lg:flex-row flex-col justify-around items-center BGround md:px-2 px-6">
        <div></div>
        <div>
          <h1 className="text-4xl text-center mt-4 text-gray-700 textWhite">
            All Assignments
          </h1>
          <p className="text-lg text-gray-500 mt-2 font text-center">
            Choose Your Assignment And Grow Your Career Now
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 justify-center">
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
              className="lg:w-40 h-10 pl-4 md:w-auto w-42   border-2 rounded-2xl border-green-800"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
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
              onClick={handleReset}
              type="button"
            >
              <RxCross2 />
            </button>
          </form>

          <div className="w-full text-center mt-4">
            <select
              className="border border-gray-300 p-1 text-gray-500 assignment textWhite"
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
              }}
            >
              <option value="">Filter by Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 p-8 min-h-screen">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
