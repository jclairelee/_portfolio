import React from "react";

export default function Nav() {
  return (
    <nav className="flex items-center justify-center mx-auto md:px-20 lg:px-40 w-screen pt-3.5 pb-3.5">
      <div className="pr-20">
        <img className="w-16 cursor-pointer" src="#" alt="logo" />
      </div>
      <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a href="#" className="hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Games
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center pl-20">
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Resume
        </button>
      </div>
    </nav>
  );
}
