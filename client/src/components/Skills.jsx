import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets//css-3.png";
import jsLogo from "../assets/js.png";
import cLogo from "../assets/icons8-c-programming-480.png";
import bsLogo from "../assets/bootstrap.png";
import tailLogo from "../assets/tailwindcss.svg";
import reacLogo from "../assets/react-2.svg";
import mgbdLogo from "../assets/MongoDB.svg";
// import { icons } from "react-icons/lib";
function Skills({ theme }) {
  return (
    <section
      id="skills"
      className="flex h-[100%]  w-[100%]  flex-col justify-center gap-8 pt-[40px]"
    >
      <h1 className="text-center text-5xl">Skills</h1>
      <h1 className="w-[100%] text-center text-3xl">Languages</h1>
      <div className="flex w-[100%] flex-row flex-wrap justify-center gap-[.5rem] py-[2rem] sm:gap-[1.5rem]">
        {[
          { icon: htmlLogo },
          { icon: cssLogo },
          { icon: jsLogo },
          { icon: cLogo },
        ].map((icons, i) => {
          return (
            <div
              key={i}
              className={`min-w-[100px] max-w-[20%] rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem] ${
                theme ? "" : "border border-[#6528F7] p-[.1rem]"
              }`}
            >
              <img className="m-1 p-2 sm:p-4" src={icons.icon} alt="Html" />
            </div>
          );
        })}
      </div>

      <div className="flex w-[100%] flex-wrap justify-center gap-[.5rem] py-[2rem] sm:gap-[1.5rem] ">
        <h1 className="w-[100%] text-center text-3xl">Frameworks</h1>
        {[{ icon: reacLogo }, { icon: bsLogo }, { icon: tailLogo }].map(
          (icons, i) => {
            return (
              <div
                key={i + 1}
                className={`flex min-w-[100px] max-w-[20%] items-center rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem] ${
                  theme ? "" : "border border-[#6528F7] p-[.1rem]"
                }`}
              >
                <img className="m-1 p-2 sm:p-4" src={icons.icon} alt="React" />
              </div>
            );
          },
        )}
      </div>
      <div className="flex w-[100%] flex-wrap justify-center gap-[.5rem] py-[2rem] sm:gap-[1.5rem] ">
        <h1 className="w-[100%] text-center text-3xl">Database</h1>
        <div
          className={`flex min-w-[100px] max-w-[20%] flex-col justify-center rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:h-[220px] sm:w-[150px] sm:p-[1rem] ${
            theme ? "" : "border border-[#6528F7] p-[.1rem]"
          }`}
        >
          <img
            className=" m-1 h-[100%] w-[100%] p-2 sm:p-4"
            src={mgbdLogo}
            alt="MongoDD"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
