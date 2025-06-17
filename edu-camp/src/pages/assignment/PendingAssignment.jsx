
import React, { useEffect, useState } from "react";
import PendingAssignmentCard from "./PendingAssignmentCard";
import UseAxiosSecure from "../../hooks/useAxiosSecure";

const PendingAssignment = () => {

  const axiosSecure = UseAxiosSecure();
  const [pendingData, setPendingData] = useState([]);

  const status = "pending";

  useEffect(() => {
    axiosSecure
      .get(`https://a-11-server-five.vercel.app/pendingAssignment?status=${status}`)
      .then((res) => {
        console.log(res.data);
        setPendingData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure]);


  console.log(pendingData)


  return (
    <div className="assignment " >
    <div className="px-2 ">
        <h1 className="md:text-4xl text-3xl text-center  text-gray-700 textWhite pt-4">
        Pending Assignments
      </h1>
      <p className="text-lg text-gray-500 mt-2 font text-center">
        See All Pending Assignment Here , And Mark It As You Wish
      </p>
    </div>

      <div className="grid lg:grid-cols-4 gap-4 mt-4 px-4">
        {pendingData.map(pending=><PendingAssignmentCard key={pending._id} pending={pending}></PendingAssignmentCard>)}
      </div>
    </div>
  );
};

export default PendingAssignment;
