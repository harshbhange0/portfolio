import React from "react";

import petopia from "../assets/petopia.png";
import QuizMaster from "../assets/QuizMaster.png";
import gf from "../assets/gf.png";
import WebDemoCard from "./WebDemoCard";
import weatherApp from "../assets/weatherApp.png";
import mernApp from "../assets/mern-todo.png"

function Project({ theme }) {
  return (
    <>
      <section
        id="projects"
        className="flex h-[100%]  flex-col gap-y-[2rem] pt-[40px]"
      >
        <h1 className="text-center text-5xl">Projects</h1>
        <div className="flex flex-col flex-wrap justify-around gap-x-4 gap-y-[3rem]  sm:flex-row">
          {[
            {
              title: "Glorious Gifts",
              image: gf,
              link: "https://glourios-gifts.netlify.app/",
              github: "https://github.com/harshbhange0/Glourios-gifts",
            },
            {
              title: "Petopia",
              image: petopia,
              link: "https://petopia.netlify.app/",
              github: "https://github.com/harshbhange0/petopiya",
            },
            {
              title: "Quiz Master",
              image: QuizMaster,
              link: "https://quiz-master-rtc.netlify.app/",
              github: "https://github.com/harshbhange0/quizmaster",
            },
            {
              title: "Weather App",
              image: weatherApp,
              link: "https://weather-app-github-harshbhange0.netlify.app/",
              github: "https://github.com/harshbhange0/weather_app_react",
            },
            {
              title: "Mern TODO app",
              image: "",
              link: "#projects",
              github: "#projects",
            },
        {
              title: "work in progress",
              image: mernApp,
              link: "https://mern-stack-todo.netlify.app/",
              github: "https://github.com/harshbhange0/crud-to-do-app",
            },
          ].map((card, i) => {
            return (
              <>
                <WebDemoCard
                  key={i}
                  theme={theme}
                  title={card.title}
                  ImageUrl={card.image}
                  DemoLink={card.title}
                  gitLink={card.github}
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Project;
