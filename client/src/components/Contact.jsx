import React from "react";
import { SiGmail } from "react-icons/si";
import { BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

function Contact({ theme }) {
  let url = "https://github.com/harshbhange0.png";


  return (
    <section id="contact" className="h-[100%] py-16 ">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <h1 className="text-center text-5xl"> Connect with me </h1>
        <div
          className={`mx-auto mt-12 flex flex-col items-center justify-center rounded-b-sm  rounded-t-full  px-4  pt-2 sm:rounded-sm${
            theme
              ? "border"
              : "border-[#6628f7ac] bg-[#1d1b30fc]  shadow-md  shadow-[#6628f7ac] transition-all duration-300 ease-in hover:shadow-lg hover:shadow-[#6628f7ac] "
          } `}
        >
          <div className=" w-[200px] overflow-hidden rounded-full">
            <img src={url} alt="" />
          </div>
          <h1 className="py-2 text-2xl">Harsh Bhange</h1>
          <div className="flex w-[100%] justify-evenly py-5 ">
            <a
              href="mailto:harshbhange123@gmail.com "
              title="Mail To harshbhange123@gmail.com"
            >
              <SiGmail className="text-[25px] text-red-500 duration-100 ease-in hover:text-red-400" />
            </a>
            <a className="" href="https://www.instagram.com/harshbhange0/">
              <BsInstagram className="text-[25px] text-[#c6085d] duration-100 ease-in hover:text-[#c6085d99]" />
            </a>
            <a className="" href="https://www.linkedin.com/in/harshbhange0/">
              <BsLinkedin className="text-[25px] text-[#28a5ff] duration-100 ease-in hover:text-[#28a5ff99]" />
            </a>
            <a className="" href="https://github.com/harshbhange0">
              <BsGithub className="text-[25px] text-[#287aff] duration-100 ease-in hover:text-[#287aff99]" />
            </a>
            <a className="" href="https://wa.me/7721916040">
              <BsWhatsapp className="text-[25px] text-[#25D366] duration-100 ease-in hover:text-[#25d36599]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
