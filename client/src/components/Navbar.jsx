import React from "react";

function Navbar() {
  return (
    <nav className="nav_bar shadow-sm sticky top-0 z-[1] bg-white">
      <ul className=" flex justify-center gap-2  py-2 sm:gap-10 sm:justify-end sm:pr-[3rem]">
        <li className="">
          <a href="#intro" className="text-sm sm:text-base ">
            Introduction
          </a>
        </li>
        <li className="">
          <a href="#about" className="text-sm sm:text-base ">
            About
          </a>
        </li>{" "}
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
