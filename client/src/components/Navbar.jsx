import React, { useState } from "react";
import webIcon from "../assets/web_icon.jpg";
import { BsMoonFill, BsSunFill, BsJustify } from "react-icons/bs";

function Navbar({ setTheme }) {
  const [thames, setThames] = useState(false);
  const [collapse, setCollapse] = useState(false);
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
      className={`sticky top-0 z-10 flex flex-col  justify-center px-4 py-2 transition-all duration-500 ease-in sm:flex-row sm:justify-between ${
        thames ? "text-b bg-white shadow-sm" : "bg-[#00005C]"
      }`}
    >
      <div>
        <button
          className="block sm:hidden"
          onClick={() => {
            const toggleCollapse = !collapse;
            setCollapse(toggleCollapse);
          }}
        >
          <BsJustify className="text-2xl" />
        </button>
      </div>

      <ul
        class={` flex  flex-col justify-center gap-6 py-4 sm:flex-row sm:items-center sm:py-0 ${
          collapse ? "top-0 " : "absolute top-[-400px] sm:relative sm:top-0"
        }`}
      >
        <li class=" me-auto">
          <a
            href="#intro"
            class={th}
            onClick={() => {
              const toggleCollapse = !collapse;
              setCollapse(toggleCollapse);
            }}
          >
            Home
          </a>
        </li>
        <li class=" me-auto">
          <a
            href="#about"
            class={th}
            onClick={() => {
              const toggleCollapse = !collapse;
              setCollapse(toggleCollapse);
            }}
          >
            About
          </a>
        </li>
        <li class=" me-auto">
          <a
            href="#skills"
            class={th}
            onClick={() => {
              const toggleCollapse = !collapse;
              setCollapse(toggleCollapse);
            }}
          >
            Skills
          </a>
        </li>
        <li class=" me-auto">
          <a
            href="#projects"
            class={th}
            onClick={() => {
              const toggleCollapse = !collapse;
              setCollapse(toggleCollapse);
            }}
          >
            Projects
          </a>
        </li>
        <li class=" me-auto">
          <a
            href="#contact"
            class={th}
            onClick={() => {
              const toggleCollapse = !collapse;
              setCollapse(toggleCollapse);
            }}
          >
            Contact
          </a>
        </li>
        <li className=" flex w-[100%] justify-between sm:gap-4">
          <button
            onClick={() => {
              setThames((prevThames) => !prevThames);
              toggleThemes();
            }}
          >
            {thames ? (
              <BsSunFill className={`${th} text-xl`} />
            ) : (
              <BsMoonFill className={`${th} text-xl`} />
            )}
          </button>{" "}
          <div className=" overflow-hidden rounded-full">
            <img className="w-[25px]" src={webIcon} alt="" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
