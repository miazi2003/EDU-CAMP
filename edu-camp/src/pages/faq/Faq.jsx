import React from "react";

const Faq = () => {
  return (
    <div className="w-[90%] mx-auto">
         
         <h1 className="text-4xl text-center">FAQ</h1>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2"  />
        <div className="collapse-title font-semibold">
          What is the difference between frontend and backend in web development?
        </div>
        <div className="collapse-content text-sm text-gray-600">
         The frontend is what users see and interact with (like buttons, layouts, and forms). It’s built using HTML, CSS, and JavaScript.
The backend is the behind-the-scenes part — it handles databases, authentication, and server logic using technologies like Node.js, Express, and MongoDB.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          What is an API and why is it important?
        </div>
        <div className="collapse-content text-sm text-gray-600">
         An API (Application Programming Interface) allows the frontend and backend to communicate. For example, when a user submits a form, the frontend sends data to the backend API, which processes and stores it. APIs are essential for building dynamic, data-driven applications.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Why is authentication needed in a web application?
        </div>
        <div className="collapse-content text-sm text-gray-600">
         Authentication ensures that only the right users can access specific parts of your website. It protects user data and allows features like login, personalized dashboards, and secure operations like deleting or updating data.
        </div>
      </div>
    </div>
  );
};

export default Faq;
