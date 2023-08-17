import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Svg1 from "./assets/Firmware-cuate.svg";
import Svg2 from "./assets/profile.png";
import { BsLink45Deg } from "react-icons/bs";
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets//css-3.png";
import jsLogo from "./assets/js.png";
import cLogo from "./assets/icons8-c-programming-480.png";
import bsLogo from "./assets/bootstrap.png";
import tailLogo from "./assets/tailwindcss.svg";
import reacLogo from "./assets/react-2.svg";
import mgbdLogo from "./assets/MongoDB.svg";
import petopia from "./assets/petopia.png";
import QuizMaster from "./assets/QuizMaster.png";
import gf from "./assets/gf.png";
import WebDemoCard from "./components/WebDemoCard";
import weatherApp from "./assets/weatherApp.png";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(true);
  const newTheme = (toggle) => {
    setTheme(toggle);
  };
  return (
    <div className={`${theme ? "bg-white" : "bg-[#03001C] text-white"} `}>
      <Navbar setTheme={setTheme} />
      <div className="flex flex-col justify-center  gap-x-[2%] gap-y-[2rem] p-[3%]  md:px-[10%] md:py-[5%]">
        <section
          id="intro"
          className="flex h-[100%] flex-col gap-y-5 pt-[40px] sm:flex-row sm:gap-x-2"
        >
          <div className="m-10 sm:m-auto sm:basis-[65%]">
            <img
              src={Svg1}
              alt=""
              className={`${
                theme
                  ? "drop-shadow-dark_Shadow_sm "
                  : " drop-shadow-light_Shadow_sm "
              }`}
            />
          </div>
          <div className="flex  items-center justify-center sm:basis-full">
            <div className="typing-container">
              <div className="typing-text text-center text-[26px] sm:text-4xl">
                Hello, I'am Harsh{"  "}
              </div>
            </div>
          </div>
        </section>
        <section id="about" className=" flex flex-col gap-[1rem] pt-[40px]">
          <div className="flex h-[100%] flex-col-reverse sm:flex-row sm:py-[4rem]">
            <div className="flex  basis-[100]  flex-col  items-center   justify-center sm:basis-[80%] ">
              <div
                className={`flex h-[100%] w-[100%] items-center justify-center text-center  sm:h-[400px]  sm:w-[70%] sm:rounded-custom  ${
                  theme
                    ? " shadow-xl shadow-gray-200 sm:hover:shadow-2xl"
                    : "sm:bg-gradient-to-b from-cyan-500/10 to-blue-500/10  "
                } `}
              >
                <p
                  className={`m-4 p-4 leading-8 ${
                    theme
                      ? " "
                      : "sm:bg-gradient-to-t  from-blue-500/10 to-cyan-500/10 sm:rounded-custom2"
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
                    Seeking remote internship opportunities to contribute and
                    learn <br className="hidden sm:block" />
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
                  theme
                    ? "border-neutral-200 "
                    : "border-[#8CABFF] bg-[#e3f6ff9b]"
                }`}
              >
                <img
                  className={` w-[200px] duration-300 ease-in  ${
                    theme
                      ? " "
                      : " hover:bg-[#e3f6ff9b] sm:hover:rounded-custom2 "
                  } `}
                  src="https://github.com/harshbhange0.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="flex h-[100%]  w-[100%]  flex-col justify-center gap-8 pt-[40px]"
        >
          <h1 className="text-center text-5xl">Skills</h1>
          <h1 className="w-[100%] text-center text-3xl">Languages</h1>
          <div className="flex w-[100%] flex-row flex-wrap justify-center gap-[.5rem] py-[2rem] sm:gap-[1.5rem]">
            <div className="min-w-[100px] max-w-[20%] rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem]">
              <img className="m-1 p-2 sm:p-4" src={htmlLogo} alt="Html" />
            </div>
            <div className="min-w-[100px] max-w-[20%] rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem]">
              <img className="m-1 p-2 sm:p-4" src={cssLogo} alt="CSS" />
            </div>
            <div className="min-w-[100px] max-w-[20%] rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem]">
              <img className="m-1 p-2 sm:p-4" src={jsLogo} alt="JavaScript" />
            </div>
            <div className="min-w-[100px] max-w-[20%] rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem]">
              <img
                className="m-1 p-2 sm:p-4"
                src={cLogo}
                alt="C Programming Language"
              />
            </div>
          </div>
          <div className="flex w-[100%] flex-wrap justify-center gap-[.5rem] py-[2rem] sm:gap-[1.5rem] ">
            <h1 className="w-[100%] text-center text-3xl">Frameworks</h1>
            <div className="min-w-[100px] max-w-[20%] rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem]">
              <img className="m-1 p-2 sm:p-4" src={reacLogo} alt="React" />
            </div>
            <div className="min-w-[100px] max-w-[20%] rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem]">
              <img className="m-1 p-2 sm:p-4" src={bsLogo} alt="Bootstrap" />
            </div>
            <div className="flex min-w-[100px] max-w-[20%] items-center justify-center rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:w-[150px] sm:p-[1rem]">
              <img className="m-1 p-2 sm:p-4 " src={tailLogo} alt="Tailwind" />
            </div>
          </div>
          <div className="flex w-[100%] flex-wrap justify-center gap-[.5rem] py-[2rem] sm:gap-[1.5rem] ">
            <h1 className="w-[100%] text-center text-3xl">Database</h1>
            <div className="flex min-w-[100px] max-w-[20%] flex-col justify-center rounded-custom4 border p-2 shadow-sm duration-300 ease-in hover:rounded-custom5 hover:shadow-lg sm:h-[220px] sm:w-[150px] sm:p-[1rem]">
              <img
                className=" m-1 h-[100%] w-[100%] p-2 sm:p-4"
                src={mgbdLogo}
                alt="MongoDD"
              />
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="flex h-[100%]  flex-col gap-y-[2rem] pt-[40px]"
        >
          <h1 className="text-center text-5xl">Projects</h1>
          <div className="flex flex-col flex-wrap justify-between   gap-[3rem] sm:flex-row">
            <WebDemoCard
              ImageUrl={gf}
              title="Glorious Gifts"
              DemoLink="https://glourios-gifts.netlify.app/"
              gitLink="https://github.com/harshbhange0/Glourios-gifts"
            />
            <WebDemoCard
              ImageUrl={petopia}
              title="Petopia"
              DemoLink="https://petopia.netlify.app/"
              gitLink="https://github.com/harshbhange0/petopiya"
            />
            <WebDemoCard
              ImageUrl={QuizMaster}
              title="Quiz Master"
              DemoLink="https://quiz-master-rtc.netlify.app/"
              gitLink="https://github.com/harshbhange0/quizmaster"
            />
            <WebDemoCard
              ImageUrl={weatherApp}
              title="Weather App"
              DemoLink="https://weather-app-github-harshbhange0.netlify.app/"
              gitLink="https://github.com/harshbhange0/weather_app_react"
            />
            <WebDemoCard
              ImageUrl=""
              title="work in progress"
              DemoLink="#projects"
              gitLink="#projects"
            />
          </div>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default App;
