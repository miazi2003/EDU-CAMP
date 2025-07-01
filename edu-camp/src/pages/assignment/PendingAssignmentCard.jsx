import React from 'react';
import { Link } from 'react-router';

const PendingAssignmentCard = ({ pending, handleMarkAssignment, handleSetDifficulty }) => {
  return (
    <div className="card bg-base-100 min-h-[28rem] shadow-sm flex flex-col">
      {/* Assignment Thumbnail */}
      <figure className="h-42 w-full">
        <img
          src={pending?.thumbnailImageURL}
          alt={pending?.title || "Assignment Thumbnail"}
          className="object-cover w-full h-full"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body flex flex-col justify-between">
        <div>
          {/* Title */}
          <h2 className="card-title">{pending?.title || "No Title Available"}</h2>

          {/* Difficulty Button */}
          <button
            onClick={() => handleSetDifficulty(pending)}
            className="btn btn-outline btn-success btn-sm my-2"
          >
            Set A Difficulty
          </button>

          {/* Marks */}
          <p>
            <span className="font-semibold">Marks :</span>{' '}
            {pending?.marks ?? 100}
          </p>

          {/* Status */}
          <p>
            <span className="font-semibold">Status :</span>{' '}
            <span className="text-red-500">pending</span>
          </p>

          {/* Submitter Info */}
          <p>
            <span className="font-semibold">Submitted By :</span><br />
            <span className="text-sm text-gray-400">{pending?.submittedBy}</span>
          </p>
        </div>

        {/* Give Marks Button */}
         <Link to={`/giveMarks/${pending._id}`}><button
          onClick={() => handleMarkAssignment(pending)}
          className="btn w-full bg-green-800 h-12 mt-4 text-white"
        >
          Give Marks
        </button>
         </Link>
      </div>
    </div>
  );
};

export default PendingAssignmentCard;
