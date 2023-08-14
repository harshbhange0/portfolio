import React from "react";

function WebDemoCard({ ImageUrl, gitLink, DemoLink,title }) {
  return (
    <div className="card_web border mx-auto min-w-[250px] w-[90%] sm:w-[400px]  rounded-md hover:shadow-lg ease-in duration-300 bg-slate-300/[.2]">
      <div className="p-2 overflow-hidden rounded-t-md bg-slate-300 ">
        <div className="nav_demo w-[100%] rounded-t-md  h-[10px] flex justify-between items-center bg-slate-400">
          <div className="flex px-1 gap-1">
            <div className="rounded-full w-2 h-2 bg-red-400"></div>
            <div className="rounded-full w-2 h-2 bg-yellow-400"></div>
            <div className="rounded-full w-2 h-2 bg-green-400"></div>
          </div>
        </div>
        <img src={ImageUrl} alt="" />
      </div>
      <div className="flex flex-row justify-start gap-4 px-4 py-2">
        <span className="py-1 px-2">{title}</span>
        <a
          className="bg-sky-500/75 py-1 px-2 text-white rounded-[.2rem] hover:bg-sky-500/90 ease-in duration-200"
          href={DemoLink} target="_blank" rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="bg-cyan-500/75 py-1 px-2 text-white rounded-[.2rem] hover:bg-cyan-500/90 ease-in duration-200"
          target="_blank"rel="noreferrer"
          href={gitLink}
        >
          gitHub
        </a>
      </div>
    </div>
  );
}

export default WebDemoCard;
