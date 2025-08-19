import React from "react";

const Faq = () => {
  return (
    <div className="w-full mx-auto mt-4 assignment textWhite lg:px-0 px-4" id="FAQ">
         
         <h1 className="text-4xl text-center mb-4">FAQ</h1>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 assignment">
        <input type="radio" name="my-accordion-2"  />
        <div className="collapse-title font-semibold assignment textWhite">
          What is the difference between frontend and backend in web development?
        </div>
        <div className="collapse-content text-sm text-gray-600 textWhite">
         The frontend is what users see and interact with (like buttons, layouts, and forms). It’s built using HTML, CSS, and JavaScript.
The backend is the behind-the-scenes part — it handles databases, and server logic using technologies like Node.js, Express, and MongoDB.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 assignment">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold assignment textWhite">
          What is an API and why is it important?
        </div>
        <div className="collapse-content text-sm text-gray-600 textWhite">
         An API (Application Programming Interface) allows the frontend and backend to communicate. For example, when a user submits a form, the frontend sends data to the backend API, which processes and stores it. APIs are essential for building dynamic, data-driven applications.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 assignment textWhite">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold assignment textWhite">
          Why is authentication needed in a web application?
        </div>
        <div className="collapse-content text-sm text-gray-600 textWhite">
         Authentication ensures that only the right users can access specific parts of your website. It protects user data and allows features like login, personalized dashboards, and secure operations like deleting or updating data.
        </div>
      </div>
    </div>
  );
};

export default Faq;
