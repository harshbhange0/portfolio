import React from "react";
import { BsLink45Deg } from "react-icons/bs";

function About({ theme }) {
  return (
    <section id="about" className=" flex flex-col gap-[1rem] pt-[40px]">
      <div className="flex h-[100%] flex-col-reverse sm:flex-row sm:py-[4rem]">
        <div className="flex  basis-[100]  flex-col  items-center   justify-center sm:basis-[80%] ">
          <div
            className={`flex h-[100%] w-[100%] items-center justify-center text-center  transition-all  duration-300 ease-in sm:h-[400px] sm:w-[70%] sm:rounded-custom  ${
              theme
                ? " border shadow-none sm:shadow-md sm:hover:shadow-xl"
                : "from-cyan-500/10 to-blue-500/10 sm:bg-gradient-to-b  "
            } `}
          >
            <p
              className={`m-4 p-4 leading-8 ${
                theme
                  ? '"'
                  : "from-blue-500/10  to-cyan-500/10 sm:rounded-custom2 sm:bg-gradient-to-t"
              } `}
            >
              <span className="text-2xl">
                Passionate web developer <br />{" "}
                <br className="block sm:hidden" />
              </span>
              <span className="text-lg">
                skilled in HTML, CSS, JS, React.js, MongoDB, and more.{" "}
              </span>
              <br className="block" />
              <span className="text-sm">
                Seeking remote internship opportunities to contribute and learn{" "}
                <br className="hidden sm:block" />
                while building on technical experience.
              </span>
              <br className="block sm:block" />
              <span className=" flex items-center justify-center gap-1">
                Currently working on an exciting project.
                <BsLink45Deg className="cursor-pointer hover:text-blue-700" />
              </span>
              <br className="block" />
              <span className="text-lg">Let's innovate together!</span>
            </p>
          </div>
        </div>
        <div className="flex basis-[100%] items-center justify-center overflow-hidden  py-[3rem] sm:basis-[30%] sm:py-[0]">
          <div
            className={`overflow-hidden rounded-full  border border-current shadow-lg duration-300 ease-in  sm:rounded-custom2 sm:hover:rounded-custom3 ${
              theme ? "border-neutral-200 " : "border-[#8CABFF] bg-[#e3f6ff9b]"
            }`}
          >
            <img
              className={` w-[200px] duration-300 ease-in  ${
                theme ? " " : " hover:bg-[#e3f6ff9b] sm:hover:rounded-custom2 "
              } `}
              src="https://github.com/harshbhange0.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
