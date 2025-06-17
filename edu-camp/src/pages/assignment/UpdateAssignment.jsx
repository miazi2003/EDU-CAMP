import React, {  useEffect, useState } from "react";
import Lottie from "lottie-react";
import formLottie from "../../assets/lottie/forms.json"


import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateAssignment = () => {
const axiosSecure = UseAxiosSecure();
const [viewData , setViewData] = useState(null);

const navigate = useNavigate()

const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axiosSecure
      .get(`https://a-11-server-five.vercel.app/updateAllAssignment/${id}`)
      .then((res) => {
        console.log(res.data);
        setViewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id , axiosSecure]);

if (!viewData) return <p>Loading...</p>;
console.log(viewData)
  const { title, description, marks, difficulty, thumbnailImageURL, dueDate } = viewData ;
  
  console.log(title)


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedAssignment = Object.fromEntries(formData.entries());
  
  
    //post data to the server

    axiosSecure
      .put(`/updateAssignment/${id}` , updatedAssignment)
      .then((res) => {
        console.log("post assignment", res.data);
        toast.success("Successfully Updated")
        navigate('/assignments')
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message)
      });
  };
  return (
    <div>
      <div className="flex ">
        <div className="font px-12 p-4 h-full w-[50%] bg-white  mt-2 ml-8 rounded-2xl ">
          <h1 className="text-3xl text-center text-gray-500 ">
            Assignment Update Form
          </h1>
          <form className="flex  p-4 gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-14 w-max ">
              <div className="flex gap-2">
                <label className="text-gray-500">Title :</label>
              </div>
              <div className="flex gap-2">
                <label className="text-gray-500">Marks :</label>
              </div>
              <div className="flex gap-2">
                <label className="text-gray-500">Thumbnail :</label>
              </div>
              <div className="flex gap-2">
                <label className="text-gray-500">Description:</label>
              </div>
              <div className="flex gap-2">
                <label className="text-gray-500">Deadline :</label>
              </div>
              <div className="flex gap-2">
                <label className="text-gray-500">Difficulty :</label>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="border border-green-800 p-2  rounded-xl"
                defaultValue={title}
              />
              <input
                type="number"
                name="marks"
                placeholder="Marks 1-100"
                className="border p-2 border-green-800 rounded-xl"
                defaultValue={marks}
              />{" "}
              <input
                type="url"
                name="thumbnailImageURL"
                placeholder="Thumbnail"
                className="border p-2 border-green-800  rounded-xl"
                defaultValue={thumbnailImageURL}
              />{" "}
              <textarea
                type="text"
                name="description"
                className="border p-2 border-green-800 rounded-xl"
                defaultValue={description}
              />{" "}
              <input
                type="date"
                name="dueDate"
                className="border p-2 border-green-800 rounded-xl"
                defaultValue={dueDate}
              />{" "}
              <div className="flex justify-between items-center">
                <select
                  name="difficulty"
                  id=""
                  className="border border-green-800 mt-2 w-max h-8"
                  defaultValue={difficulty}
                >
                  <option disabled value="Set A Difficulty">
                    Set A Difficulty
                  </option>
                  <option value="Easy">Easy</option>
                  <option value="Normal">Normal</option>
                  <option value="Hard">Hard</option>
                </select>
                <div className="w-full flex items-center justify-center">
                  <button
                    type="submit"
                    className="btn h-10 bg-green-800 hover:bg-white hover:text-green-800 hover:border-green-800  text-white duration-300"
                  >
                    Update Assignment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="lottie flex flex-col  items-center justify-center w-[50%]">
          <h1 className="text-5xl text-green-800 ">
            EduCamp <span className="text-gray-500">Web</span>
          </h1>
          <p className="text-lg text-gray-500 mt-2 font">
            Create Your Assignment Here
          </p>
          <Lottie
            style={{ width: "400px" }}
            animationData={formLottie}
          ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;
