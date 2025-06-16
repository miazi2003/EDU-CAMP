import React from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const PendingAssignmentCard = ({ pending }) => {

  const email = pending?.email ;
  console.log(email)
  return (
    <div className="">
      <div className="card bg-base-100   shadow-sm flex flex-wrap">
        <figure className="h-42 w-full">
          <img src={pending.thumbnailImageURL} alt="Shoes" />
        </figure>
        <div className="">
          <div className="card-body  h-full flex flex-col">
            <h2 className="fontSec flex  gap-2 text-lg font-bold">
              {pending.title}
            </h2>

            <p className="flex gap-2 text-gray-500 ">
              {" "}
              <span className="text-black">Marks :</span>{" "}
              {pending.marks === 100 ? pending.marks : 100}
            </p>
            <div className="">
              <p className="flex gap-2  text-gray-500">
                <span className="text-black">Difficulty :</span>
                {pending.difficulty}{" "}
              </p>
            </div>
            <p>
              Status : <span className="text-red-400">{pending.status}</span>
            </p>
            <p>
              Submitted By : <span className="text-gray-500">{email}</span>
            </p>

            <Link to={`/giveMarks/${pending._id}`}>
              <div className="w-full text-center">
                <button className="btn  bg-green-800 mt-4 text-white hover:bg-white hover:text-green-800 hover:border-green-800 ">
                  {" "}
                  Give Marks
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignmentCard;

// assignmentId
// :
// "6848601876428980cf8de58a"
// difficulty
// :
// "hard"
// doc
// :
// "https://docs.google.com/document/d/1rZTzqLoPYEPfiRB9YMiA4-yc_KpkFsms1OsZdSg0_o8/edit?tab=t.0"
// email
// :
// "yeasinmiazi1997@gmail.com"
// feedback
// :
// "not given"
// marks
// :
// 80
// note
// :
// "ml  k"
// resultMark
// :
// "not given"
// status
// :
// "pending"
// thumbnailImageURL
// :
// "https://i.ibb.co/KjDHDz4k/maxresdefault.jpg"
// title
// :
// "Geographic Information System"
// _id
// :
// "684aa2f00c7f413b55108cb4"
