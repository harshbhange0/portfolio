import React from "react";
import webIcon from "../assets/web_icon.jpg"

function Navbar() {
  return (
    <nav className="nav_bar shadow-sm sticky flex justify-center items-center top-0 z-[1] bg-white">
      <div className=" w-8 ms-2 my-1 rounded-full overflow-hidden">
      <img src={webIcon} className="p-1w-[100%] " alt="" />
      </div>
      <ul className="w-[100%] flex justify-between gap-2 px-2 py-2 sm:gap-10 sm:justify-end sm:pr-[3rem]">
        <li className="">
          <a href="#intro" className="text-sm sm:text-base ">
            Introduction
          </a>
        </li>
        
        <li className="">
          <a href="#about" className="text-sm sm:text-base ">
            About
          </a>
        </li>
        <li className="">
          <a href="#skills" className="text-sm sm:text-base ">
          Skills
          </a>
        </li>
        <li className="">
          <a href="#projects" className="text-sm sm:text-base ">
            Projects
          </a>
        </li>
        <li className="">
          <a href="#contact" className="text-sm sm:text-base ">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
