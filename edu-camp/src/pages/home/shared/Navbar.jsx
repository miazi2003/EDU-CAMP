import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { IoIosArrowForward } from "react-icons/io";
import ToggleTheme from "../../../Theme Toggle/ThemeToggle";
import Logo from "../../../brandLogo/Logo";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center gap-1 ">
          Home <IoIosArrowForward />
        </NavLink>
      </li>
      <li>
        <NavLink to="/assignments" className="flex items-center gap-1  ">
          Assignments <IoIosArrowForward />
        </NavLink>
      </li>
      <li>
        <NavLink to="/pendingAssignment" className="flex items-center gap-1  ">
          Pending <IoIosArrowForward />
        </NavLink>
      </li>
      <li>
        <a href="#ourSuccess" className="flex items-center gap-1  ">
          Success <IoIosArrowForward />
        </a>
      </li>
      <li>
        <a href="#FAQ" className="flex items-center gap-1  ">
          FAQ <IoIosArrowForward />
        </a>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 lg:px-8 font">

      {/* MOBILE DROPDOWN */}
      <div className="dropdown lg:hidden ">
        <div tabIndex={0} role="button" className="btn btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow list-none assignment textWhite"
        >
          {links}
          {!user && (
            <>
              <li>
                <Link to="/signIn" className="textWhite">Log In</Link>
              </li>
              <li>
                <Link to="/signUp" className="textWhite">Sign Up</Link>
              </li>
              <li>
                <ToggleTheme />
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink to="/createAssignment">Create Assignment</NavLink>
              </li>
              <li>
                <NavLink to="/attemptedAssignment">
                  My Attempted Assignment
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300 w-full"
                >
                  Log Out
                </button>
              </li>
              <li>
                <ToggleTheme />
              </li>
            </>
          )}
        </ul>
      </div>

      {/* DESKTOP NAV */}
      <div className="flex w-full justify-between items-center">
        {/* LEFT: Logo */}
     
         <Logo />
    

        {/* CENTER: Links */}
        <ul className="lg:flex hidden gap-4 list-none">
          {links}
        </ul>

        {/* RIGHT: Auth buttons / Avatar */}
        <div className="lg:flex hidden items-center gap-4">
          {user ? (
            <>
              {/* Avatar dropdown */}
              <div className=" dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                  title={user.displayName}
                >
                  <div className="w-10 rounded-full ">
                    <img alt={user.displayName} src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow list-none flex flex-col gap-2 assignment"
                >
                  <li>
                    <NavLink to="/createAssignment">Create Assignment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/attemptedAssignment">
                      My Attempted Assignment
                    </NavLink>
                  </li>
                  <li>
                    <ToggleTheme />
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300 w-full"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/signIn">
                <button className="btn border bg-transparent border-green-800 textWhite">
                  Log In
                </button>
              </Link>
              <Link to="/signUp">
                <button className="btn bg-green-800 hover:bg-white text-white hover:text-green-800 hover:border-green-800 duration-300">
                  Sign Up
                </button>
              </Link>
              <ToggleTheme />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
