import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";

const Navbar = () => {
  const {user , signOutUser} = useContext(AuthContext)
  const links = (
    <>
      <div className=" flex gap-4">
        <NavLink to={'/'}>
          <button>Home</button>
        </NavLink>
        <NavLink to={'/assignments'}>
          <button>Assignments </button>
        </NavLink>
        <NavLink to={'/pending'}>
          <button>Pending  Assignments</button>
        </NavLink>
      </div>
    </>
  );


  const handleSignOut = () =>{
    signOutUser().then(()=>{}).catch(err=>{console.log(err.message)})
  }

  return (
    <div className="navbar bg-base-100  px-8 font">
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
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
