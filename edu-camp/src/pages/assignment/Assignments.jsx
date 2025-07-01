import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import AssignmentCard from "./AssignmentCard";
import { AuthContext } from "../../Context/AuthContext";
import UseAxiosSecure from "../../hooks/useAxiosSecure";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

const Assignments = () => {
  const [search, setSearch] = useState("");
  const [assignments, setAssignments] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);
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
    if (!user) {
      return toast.error("Please Login First");
    }
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
    axios
      .get("https://a-11-server-five.vercel.app/searchAssignment")
      .then((res) => {
        setAssignments(res.data);
      });
  };

  const sortedAssignment = (order) => {
    const sorted = [...assignments].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return order === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
    setAssignments(sorted);
  };

  if (assignments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center space-y-6">
        {/* Heading */}
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-700 textWhite">
            All Assignments
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Choose Your Assignment And Grow Your Career Now
          </p>
        </div>

        {/* Search Bar */}
        <form
          className="relative w-full max-w-sm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(search);
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-11 pl-4 pr-10 border-2 rounded-2xl border-green-800 text-sm"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            type="submit"
          >
            <FaSearch />
          </button>
          <button
            title="Show All Data"
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-600"
            onClick={handleReset}
            type="button"
          >
            <RxCross2 />
          </button>
        </form>

        {/* No Data Message */}
        <p className="text-2xl md:text-3xl text-gray-400 font-medium mt-10">
          No Data Found
        </p>
      </div>
    );
  }

  return (
    <div className="assignment w-full">
      <div>
        <h1 className="text-4xl text-center mt-4 text-gray-700 textWhite">
          All Assignments
        </h1>
        <p className="lg:text-lg text-sm text-[#cccccc] mt-2 font text-center">
          Choose Your Assignment And Grow Your Career Now
        </p>
      </div>

      {/* Controls */}
      <div className="w-full flex items-center justify-center pt-2">
        <div className="w-max flex items-center text-center gap-2 flex-wrap justify-center">
          {/* Search */}
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
              className="lg:w-40 h-10 pl-4 md:w-auto w-42 border-2 rounded-2xl border-gray-500"
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

          {/* Filter */}
          <select
            className="h-10 pl-4 md:w-auto w-42 border-2 rounded-2xl text-gray-500 border-gray-500"
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(e.target.value);
            }}
          >
            <option value="" className="text-black">
              Filter by Difficulty
            </option>
            <option value="Easy" className="text-black">
              Easy
            </option>
            <option value="Medium" className="text-black">
              Medium
            </option>
            <option value="Hard" className="text-black">
              Hard
            </option>
          </select>

          {/* Sort */}
          <select
            className="h-10 px-4 border-2 rounded-2xl border-gray-500 text-gray-500  "
            onChange={(e) => sortedAssignment(e.target.value)}
          >
            <option value="" className="text-black">
              Sort by Title
            </option>
            <option value="asc" className="text-black">
              A - Z
            </option>
            <option value="desc" className="text-black">
              Z - A
            </option>
          </select>
        </div>
      </div>

      {/* Assignment Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 p-8 min-h-screen">
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
