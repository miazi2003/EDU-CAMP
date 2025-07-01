import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { IoIosArrowForward } from "react-icons/io";
import ToggleTheme from "../../../Theme Toggle/ThemeToggle";
import Logo from "../../../brandLogo/Logo";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = user ? (
    <div className="flex gap-4">
      <NavLink to={"/"}><button className="flex items-center">Home<IoIosArrowForward /></button></NavLink>
      <NavLink to={"/assignments"}><button className="flex items-center">Assignments<IoIosArrowForward /></button></NavLink>
      <NavLink to={"/pendingAssignment"}><button className="flex items-center">Pending<IoIosArrowForward /></button></NavLink>
      <a href="#ourSuccess"><button className="flex items-center">Success<IoIosArrowForward /></button></a>
      <a href="#FAQ"><button className="flex items-center">FAQ<IoIosArrowForward /></button></a>
    </div>
  ) : (
    <div className="flex gap-4">
      <NavLink to={"/"}><button className="flex items-center">Home<IoIosArrowForward /></button></NavLink>
      <NavLink to={"/assignments"}><button className="flex items-center">Assignments<IoIosArrowForward /></button></NavLink>
      <a href="#ourSuccess"><button className="flex items-center">Our Success<IoIosArrowForward /></button></a>
      <a href="#FAQ"><button className="flex items-center">FAQ<IoIosArrowForward /></button></a>
    </div>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="navbar sticky z-50 top-0 bg-base-100 lg:px-8 font">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow assignment">
          {links}
        </ul>
      </div>

      <div className="rounded-full flex-1 hidden md:flex">
        <Logo />
      </div>

      <div className="flex-1 lg:flex hidden">{links}</div>

      {user ? (
        <div className="flex flex-1 gap-2 justify-between">
          <div></div>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" title={user.displayName}>
                <div className="w-10 rounded-full">
                  <img alt={user.displayName} src={user.photoURL} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col gap-4 assignment">
                <NavLink to={"/createAssignment"}><li>Create Assignment</li></NavLink>
                <NavLink to={"/attemptedAssignment"}><li>My Attempted Assignment</li></NavLink>
                <ToggleTheme />
              </ul>
            </div>
            <button
              onClick={handleSignOut}
              className="btn bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 text-right">
            <Link to={"/signIn"}>
              <button className="btn bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300">
                Log In
              </button>
            </Link>
            <Link to={"/signUp"}>
              <button className="btn ml-2 bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </>
      )}

      <div className="ml-2">
        {!user && <ToggleTheme />}
      </div>
    </div>
  );
};

export default Navbar;
