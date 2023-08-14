import React from "react";
import Navbar from "./components/Navbar";
import Svg1 from "./assets/Firmware-cuate.svg";
import Svg2 from "./assets/profile.png";
import { BsLink45Deg } from "react-icons/bs";
import htmlLogo from "./assets/html.png"
import cssLogo from "./assets//css-3.png"
import jsLogo from "./assets/js.png"
import cLogo from "./assets/icons8-c-programming-480.png"
import bsLogo from "./assets/bootstrap.png"
import tailLogo from "./assets/tailwindcss.svg"
import reacLogo from "./assets/react-2.svg"
import mgbdLogo from "./assets/MongoDB.svg"

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className=" flex flex-col justify-center  gap-y-[2rem] gap-x-[2%] p-[3%]  md:px-[10%] md:py-[5%]">
        <section
          id="intro"
          className="h-[100%] flex flex-col gap-y-5 sm:flex-row sm:gap-x-2 pt-[40px]"
        >
          <div className="sm:basis-[65%] m-10 sm:m-auto">
            <img src={Svg1} alt="" className="" />
          </div>
          <div className="sm:basis-full  flex justify-center items-center">
            <div class="typing-container">
              <div class="typing-text text-[26px] sm:text-4xl text-center">
                Hello, I'am Harsh{"  "}
              </div>
            </div>
          </div>
        </section>
        <section id="about" className=" flex flex-col gap-[1rem] pt-[40px]">
          <div className="h-[100%] flex flex-col-reverse sm:flex-row sm:py-[4rem]">
            <div className="flexflex-col justify-center  items-center  sm:basis-[80%]   basis-[100] ">
              <div className="w-[100%] sm:w-[70%] h-[100%] sm:h-[400px] text-center sm:shadow-xl sm:hover:shadow-2xl ease-in duration-300 shadow-gray-500 flex justify-center items-center  sm:rounded-custom">
                <p className="p-4 m-4 leading-8">
                  Passionate web developer <br /> <br className="sm:hidden" />
                  skilled in HTML, CSS, JS, React.js, MongoDB, and more.{" "}
                  <br className="block" />
                  Seeking remote internship opportunities to contribute and
                  learn <br className="hidden sm:block" />
                  while building on technical experience.{" "}
                  <br className="block sm:block" />
                  <span className=" flex justify-center items-center gap-1">
                    Currently working on an exciting project.
                    <BsLink45Deg className="hover:text-blue-700 cursor-pointer" />
                  </span>
                  <br className="block" /> <br className="block" />
                  Let's innovate together!
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center py-[3rem] sm:py-[0]  sm:basis-[30%] overflow-hidden basis-[100%]">
              <div className="rounded-full  sm:rounded-custom2 sm:hover:rounded-custom3 ease-in duration-300 border border-current border-neutral-200 shadow-lg p-2">
                <img className="w-[200px] " src={Svg2} alt="" />
              </div>
            </div>
          </div>{" "}
          <section className="flex justify-center  flex-col  gap-8 h-[100%] w-[100%]">
            <h1 className="text-center text-5xl">Skills</h1>
              <h1 className="w-[100%] text-3xl text-center">Languages</h1>
            <div className="flex w-[100%] justify-center flex-row flex-wrap py-[2rem] gap-[.5rem] sm:gap-[1.5rem]">
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:w-[150px] p-2 sm:p-[1rem]">
                <img className="p-2 sm:p-4 m-1" src={htmlLogo} alt="Html" />
              </div>
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:w-[150px] p-2 sm:p-[1rem]">
                <img className="p-2 sm:p-4 m-1" src={cssLogo} alt="CSS" />
              </div>
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:w-[150px] p-2 sm:p-[1rem]">
                <img className="p-2 sm:p-4 m-1" src={jsLogo} alt="JavaScript" />
              </div>
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:w-[150px] p-2 sm:p-[1rem]">
                <img className="p-2 sm:p-4 m-1" src={cLogo} alt="C Programming Language" />
              </div>
            </div>
            <div className="flex w-[100%] justify-center flex-wrap py-[2rem] gap-[.5rem] sm:gap-[1.5rem] ">
              <h1 className="w-[100%] text-3xl text-center">Frameworks</h1>
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:w-[150px] p-2 sm:p-[1rem]">
                <img className="p-2 sm:p-4 m-1" src={reacLogo} alt="React" />
              </div>
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:w-[150px] p-2 sm:p-[1rem]">
                <img className="p-2 sm:p-4 m-1" src={bsLogo} alt="Bootstrap" />
              </div>
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:w-[150px] p-2 sm:p-[1rem] flex justify-center items-center">
                <img className="p-2 sm:p-4 m-1 " src={tailLogo} alt="Tailwind" />
              </div>
            </div>
            <div className="flex w-[100%] justify-center flex-wrap py-[2rem] gap-[.5rem] sm:gap-[1.5rem] ">
              <h1 className="w-[100%] text-3xl text-center">Database</h1>
              <div className="border min-w-[100px] max-w-[20%] rounded-custom4 hover:rounded-custom5 hover:shadow-lg ease-in duration-300 shadow-sm sm:h-[220px] sm:w-[150px] p-2 sm:p-[1rem] flex justify-center flex-col">
                <img
                  className=" h-[100%] w-[100%] p-2 sm:p-4 m-1"
                  src={mgbdLogo}
                  alt="MongoDD"
                />
              </div>
            </div>
          </section>
        </section>
        <section id="projects" className="h-[100vh] flex  flex-col gap-[1.5rem] pt-[40px]"  >
          <h1 className="text-center text-5xl">Projects</h1>
          <div className="flex flex-col sm:flex-row ">

          </div>
        </section>
        <section id="contact" className="h-[100vh] flex " />
      </div>
    </div>
  );
}

export default App;