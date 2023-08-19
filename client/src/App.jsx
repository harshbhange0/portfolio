import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Svg1 from "./assets/Firmware-cuate.svg";



import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  const [theme, setTheme] = useState(false);
  const newTheme = (toggle) => {
    setTheme(toggle);
  };
  return (
    <div className={`${theme ? "bg-white" : "bg-[#03001C] text-white"} `}>
      <Navbar setTheme={setTheme&&newTheme} />
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
 <About theme={theme}/>
<Skills theme={theme}/>
     <Project theme={theme}/>
        <Contact theme={theme} />
      </div>
    </div>
  );
}

export default App;
