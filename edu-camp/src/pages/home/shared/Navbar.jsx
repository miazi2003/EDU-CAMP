import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <div className=" flex gap-4">
        <NavLink>
          <button>Home</button>
        </NavLink>
        <NavLink>
          <button>Assignments </button>
        </NavLink>
        <NavLink>
          <button>Pending  Assignments</button>
        </NavLink>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100  flex justify-around px-8 font">
      <div className="rounded-full flex-1">
        <img
          className="h-16 w-24 "
          src="https://i.ibb.co/Mkgps8nZ/Chat-GPT-Image-Jun-7-2025-01-01-57-AM.png"
          alt=""
        />
      </div>

      <div className="flex-1">{links}</div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
