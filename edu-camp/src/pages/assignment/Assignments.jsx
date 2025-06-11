import React, { useEffect, useState } from "react";

import axios from "axios";
import AssignmentCard from "./AssignmentCard";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

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

  return <>

  <div>
    <div className="grid grid-cols-4 gap-8 p-8">
        {
            assignments.map(assignment=><AssignmentCard assignment={assignment} key={assignment.id}></AssignmentCard>)
        }
    </div>
  </div>
  </> ;
}
export default Assignments;
