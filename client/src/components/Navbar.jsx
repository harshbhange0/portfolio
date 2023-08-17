import React, { useState } from "react";
import webIcon from "../assets/web_icon.jpg";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function Navbar({ setTheme }) {
  const [thames, setThames] = useState(true);
  const th = `text-sm sm:text-base ${
    thames
      ? "text-black ease-in duration-200 hover:text-stone-500"
      : "text-stone-50 hover:text-stone-300 ease-in duration-200 "
  }`;

  const toggleThemes = () => {
    const newThames = !thames;
    setThames(newThames);
    setTheme(newThames);
  };

  return (
    <nav
      className={`nav_bar sticky top-0 z-[1] flex items-center justify-between px-2 shadow-sm ${
        thames ? "bg-white" : "bg-[#00005C]  shadow-lg    shadow-[#9AC5F4]"
      } `}
    >
      <div className={` w-8  overflow-hidden  `}>
        <img
          src={webIcon}
          className={`rounded-full p-[0.1rem] ${
            thames ? "drop-shadow-dark_Shadow " : " drop-shadow-light_Shadow "
          }`}
          alt=""
        />
      </div>
      <ul className="flex w-[100%] justify-around gap-[4%] px-2  py-2 sm:justify-end sm:gap-[3%] sm:pr-[3rem]">
        <li className="">
          <a href="#intro" className={th}>
            Home
          </a>
        </li>

        <li className="">
          <a href="#about" className={th}>
            About
          </a>
        </li>
        <li className="">
          <a href="#skills" className={th}>
            Skills
          </a>
        </li>
        <li className="">
          <a href="#projects" className={th}>
            Projects
          </a>
        </li>
        <li className="">
          <a href="#contact" className={th}>
            Contact
          </a>
        </li>
      </ul>
      <div>
        <button
          onClick={() => {
            setThames((prevThames) => !prevThames);
            toggleThemes();
          }}
        >
          {thames ? (
            <BsSunFill className={th} />
          ) : (
            <BsMoonFill className={th} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
