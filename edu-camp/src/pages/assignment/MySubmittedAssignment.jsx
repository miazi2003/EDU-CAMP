import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
const MySubmittedAssignment = () => {

    
    const [submit , setSubmit] = useState([])
    const {user} = useContext(AuthContext)

    const email = user?.email ;







    useEffect(()=>{
        axios.get(`http://localhost:3000/submittedAssignment?email=${email}` , { withCredentials : true }).then(res=>{
            console.log(res.data)
            setSubmit(res.data)

        }).catch(err=>{console.log(err.message)})
    } , [email])


    console.log(submit[0])

    return (
        <div className='px-8'>
             <h1 className="text-4xl text-center mt-4 text-gray-700 ">
          My Submitted Assignment
        </h1>
            <div className='grid grid-cols-4 gap-4 mt-2'>
                {
        submit.map(sub=><><div className="card bg-base-100   shadow-sm flex flex-wrap">
        <figure className="h-42 w-full">
          <img src={sub.thumbnailImageURL} alt="Shoes" />
        </figure>
        <div className="flex">
          <div className="card-body w-[90%] h-full flex flex-col ">
            <div className=" px-2 bg-red-100 w-max rounded">
              <p className="flex gap-2  text-gray-500">
               
                {sub.difficulty}{" "}
              </p>
            </div>
            <h2 className="fontSec flex  gap-2 text-lg font-bold  text-green-800">
               {sub.title}
            </h2>
            <p className="text-gray-500 font text-xs flex gap-2 ">
              {sub.description}
            </p>
            <p className="flex gap-2 text-gray-500 ">
              {" "}
              <span className="text-black">Marks :</span> {sub.marks === 100 ? sub.marks : 100}
            </p>
           
             <div className="">
              <p className="flex gap-2  text-gray-500">
                <span className="text-black">Status :</span>
                {sub.status}{" "}
              </p>
            </div>
             

             {
                sub.status !== 'pending' ? <>
                <p> FeedBack : {sub.feedback}</p>
                <p>Given mark : {sub.resultMark}</p>
                </> : ''
             }

            
          </div>

        </div>
      </div></>)
                }
            </div>
        </div>
    );
};

export default MySubmittedAssignment;