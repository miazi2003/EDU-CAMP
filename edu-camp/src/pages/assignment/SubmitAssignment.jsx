import React from "react";
import { useParams } from "react-router";

const SubmitAssignment = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1 className="text-3xl text-center mt-4 text-gray-700 ">
        Submit Assignment
      </h1>

      <div>
        <form >
            
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignment;
