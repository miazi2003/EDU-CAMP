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
        axios.get(`http://localhost:3000/submittedAssignment?email=${email}`).then(res=>{
            console.log(res.data)
            setSubmit(res.data)

        }).catch(err=>{console.log(err.message)})
    } , [email])


    console.log(submit[0])


const handleDelete = (id) => {
      axios
        .post(`http://localhost:3000/deleteAssignment/${id}` ,{email} )
        .then((res) => {
          console.log(res.data);
          if(res.data.deletedCount > 0){

            console.log('deleted')

            const remainingAssignment = submit.filter(sub=>sub._id !== id)

            setSubmit(remainingAssignment)
            
          }
        })
        .catch((err) => {
          err;
        });
    };











    return (
        <div className='px-8'>
            <h1>My submitted assignment</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
        submit.map(sub=><><div className="card bg-base-100   shadow-sm flex flex-wrap">
        <figure className="h-42 w-full">
          <img src={sub.thumbnailImageURL} alt="Shoes" />
        </figure>
        <div className="flex">
          <div className="card-body w-[90%] h-full flex flex-col">
            <h2 className="fontSec flex  gap-2 text-lg font-bold">
               {sub.title}
            </h2>
            <p className="text-gray-500 font text-xs flex gap-2 ">
              {sub.description}
            </p>
            <p className="flex gap-2 text-gray-500 ">
              {" "}
              <span className="text-black">Marks :</span> {sub.marks}
            </p>
            <div className="">
              <p className="flex gap-2  text-gray-500">
                <span className="text-black">Difficulty :</span>
                {sub.difficulty}{" "}
              </p>
            </div>
             <div className="">
              <p className="flex gap-2  text-gray-500">
                <span className="text-black">Status :</span>
                {sub.status}{" "}
              </p>
            </div>
             

             {
                sub.status !== 'pending' ? <>
                <p>{sub.feedback}</p>
                <p>{sub.resultMark}</p>
                </> : ''
             }

            
          </div>

          <div className="flex flex-col items-center gap-3 justify-center h-full w-[10%] lg:pr-2  text-right">
            <button
              title="Delete"
              className="text-red-600"
              onClick={() => {
                handleDelete(sub._id);
              }}
            >
              <MdDelete />
            </button>

          
          </div>
        </div>
      </div></>)
                }
            </div>
        </div>
    );
};

export default MySubmittedAssignment;