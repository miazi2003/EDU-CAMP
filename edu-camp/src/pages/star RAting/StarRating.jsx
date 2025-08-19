import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rate, setRate] = useState(0);

  const handleRating = (rate) => {
    setRate(rate);
  };

  return (
    <>
      <div className="w-full p-6 border rounded">
        <div className="flex items-center gap-2">
          <h1>Rating :</h1>
          <div>
            {[...Array(5)].map((_, index) => {
              return (
                <button onClick={() => handleRating(index + 1)}>
                  <FaStar color={index + 1 <= rate ? "red" : "green"} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StarRating;
