import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
   <Link to={"/"}>
    <div className="flex items-center space-x-2">
      <div className="bg-green-500 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12l8-8m-8 8l-8 8m8-8h6m-6 0v6m0-6H6"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 textWhite">EduCamp</h1>
    </div></Link>
  );
};

export default Logo;
