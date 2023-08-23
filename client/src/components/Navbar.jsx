import React, { useState } from "react";

import { BsMoonFill, BsSunFill, BsJustify } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

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

  let links = [
    {
      title: "Home",
      url: "#intro",
    },
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Projects",
      url: "#projects",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-10 flex justify-between  sm:flex-row sm:justify-end ${
        thames ? "bg-white" : "bg-[#00005C]"
      }`}
    >
      <div className="relative z-10 w-[100%]">
        <div
          className={`sticky top-0 z-10 flex h-[100%] w-[100%] justify-between py-2 text-2xl sm:static sm:h-auto sm:py-0 ${
            thames ? "bg-white" : "bg-[#00005C]"
          }`}
        >
          <div className="flex items-center ps-4 sm:hidden">
            <button
              className={`flex items-center ${
                thames ? "bg-white" : "bg-[#00005C]"
              }`}
              onClick={() => {
                let toggleCollapse = !collapse;
                setCollapse(toggleCollapse);
              }}
            >
              {collapse ? <AiOutlineClose /> : <BsJustify />}
            </button>
          </div>
          <div className="flex items-center pe-4 sm:hidden">
            {" "}
            <button
              className="flex items-center"
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
            </button>
          </div>
        </div>

        <ul
          className={` -z-30 flex w-[100%] flex-col justify-end gap-4 px-4 py-2 transition-all duration-500 ease-in sm:flex-row sm:items-center ${
            collapse
              ? "absolute top-[100%] sm:static"
              : "absolute top-[-500px] sm:static"
          }
          ${thames ? "bg-white" : "bg-[#00005C]"}`}
        >
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a
                  className={th}
                  href={link.url}
                  onClick={() => {
                    let toggleCollapse = !collapse;
                    setCollapse(toggleCollapse);
                  }}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
          <li className="hidden sm:block">
            {" "}
            <button
              className="flex items-center"
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
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
