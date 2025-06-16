import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const {user , signOutUser} = useContext(AuthContext)
  const links = (
    <>
      <div className=" flex gap-4">
        <NavLink to={'/'}>
          <button className="flex items-center">Home<IoIosArrowForward /></button>
        </NavLink>
        <NavLink to={'/assignments'}>
          <button className="flex items-center">Assignments<IoIosArrowForward /></button>
        </NavLink>
        <NavLink to={'/pendingAssignment'}>
          <button className="flex items-center">Pending<IoIosArrowForward /></button>
        </NavLink>
      </div>
    </>
  );

    const linksTwo = (
    <>
      <div className=" flex flex-col gap-4">
        <NavLink to={'/'}>
          <button className="flex items-center">Home</button>
        </NavLink>
        <NavLink to={'/assignments'}>
          <button className="flex items-center">Assignments</button>
        </NavLink>
        <NavLink to={'/pendingAssignment'}>
          <button className="flex items-center">Pending</button>
        </NavLink>
      </div>
    </>
  );


  const handleSignOut = () =>{
    signOutUser().then(()=>{}).catch(err=>{console.log(err.message)})
  }

  return (
    <div className="navbar bg-base-100  px-8 font">
          <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {linksTwo}
      </ul>
    </div>
      <div className="rounded-full flex-1">
        <img
          className="h-16 w-24 "
          src="https://i.ibb.co/Mkgps8nZ/Chat-GPT-Image-Jun-7-2025-01-01-57-AM.png"
          alt=""
        />
      </div>

      <div className="flex-1">{links}</div>

     {
      user ?  
      <div className="flex flex-1 gap-2 justify-between">


        <div></div>


       <div className="flex gap-2">


         <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto border-green-800"
        />



        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            title={user.displayName}
          >
            <div className="w-10 rounded-full">
              <img
                alt={user.displayName}
                src={user.photoURL} 
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-4"
          >
            <NavLink to={'/createAssignment'}><li>
              Create Assignment
            </li></NavLink>

            <NavLink to={'/attemptedAssignment'}><li>
              My Attempted  Assignment
            </li></NavLink>

          </ul>
        </div>


        <button onClick={()=>{handleSignOut()}}   className="btn  bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300">Log Out</button>

       </div>

      </div>
      
      
      :
      
      
      <><div className="flex-1 text-right"><Link to={'/signIn'}><button  className="btn  bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300">Log In</button></Link></div></>
     }
    </div>
  );
};

export default Navbar;
