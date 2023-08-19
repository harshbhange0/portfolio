import React from "react";

function WebDemoCard({ ImageUrl, gitLink, DemoLink, title, theme }) {
  return (
    <div
      className={`flex h-[100%] sm:w-[45%]  flex-col  rounded-sm p-2  transition-all duration-300 ease-in  ${
        theme
          ? "hover:shadow-[#d2d2d2] hover:shadow-custom bg-[#faf7f3]"
          : " bg-[#1d1b30fc] shadow-md shadow-[#6628f7ac] hover:shadow-lg hover:shadow-[#6628f7ac] "
      }`}
    >
      <div
        className={`flex h-[100%]  w-[100%] flex-col overflow-hidden rounded-t-md ${
          theme ? "" : " border border-[#6528F7] p-[.1rem]"
        }`}
      >
        <div
          className={` h-20-px flex w-[100%] gap-2 rounded-t-md bg-gray-900 px-2 py-[.1rem]`}
        >
          <div className="block h-[10px] w-[10px] rounded-full bg-red-400"></div>
          <div className="block h-[10px] w-[10px] rounded-full bg-yellow-400"></div>
          <div className="block h-[10px] w-[10px] rounded-full bg-green-400"></div>
        </div>{" "}
        <div className="flex flex-col">
          <img src={ImageUrl} alt="" />
          <div className="flex justify-between px-4 py-2">
            <span className="4 m-1 rounded-md px-2 py-2 text-center">
              {title}
            </span>
            <a
              className={`m-1 rounded-md  px-2  py-2 text-center  transition-all duration-300 ease-in ${
                theme
                  ? "bg-[#fff1ec] hover:bg-[#b5b1af]"
                  : "hover:shadow-custom bg-[#060047]  transition-all duration-300 ease-in hover:bg-[#06004794] hover:shadow-[#ffffffac]"
              } `}
              href={gitLink}
            >
              Source Code
            </a>
            <a
              className={`m-1 rounded-md  px-2  py-2 text-center transition-all duration-300 ease-in ${
                theme
                  ? "bg-[#fff1ec] hover:bg-[#b5b1af]"
                  : "hover:shadow-[#ffffffac]hover:shadow-custom bg-[#060047]   hover:bg-[#06004794] "
              } `}
              href={DemoLink}
            >
              Demo{" "}
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default WebDemoCard;
