import React, { use, useEffect, useState } from "react";

import axios from "axios";
import AssignmentCard from "./AssignmentCard";
import { AuthContext } from "../../Context/AuthContext";

const Assignments = () => {

  const [assignments, setAssignments] = useState([]);

const {user} = use(AuthContext)

const email = user?.email

  useEffect(() => {
    axios
      .get("http://localhost:3000/createAssignment")
      .then((res) => {
        console.log("create assignment page", res.data);
        setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


   const handleDelete = (id) => {
      axios
        .post(`http://localhost:3000/deleteAssignment/${id}` ,{email} )
        .then((res) => {
          console.log(res.data);
          if(res.data.deletedCount > 0){
            console.log('deleted')
            const remainingAssignment = assignments.filter(assignment=>assignment._id !== id)
            setAssignments(remainingAssignment)
            
          }
        })
        .catch((err) => {
          err;
        });
    };

  return <>

  <div >
     <h1 className="text-5xl text-center mt-4 text-gray-700 ">
          All Assignments
        </h1>
           <p className="text-lg text-gray-500 mt-2 font text-center">
          Choose Your Assignment And Grow Your Career Now
        </p>
    <div className="grid grid-cols-4 gap-8 p-8">
        {
            assignments.map(assignment=><AssignmentCard assignment={assignment} key={assignment.id} handleDelete={handleDelete}></AssignmentCard>)
        }
    </div>
  </div>
  </> ;
}
export default Assignments;
