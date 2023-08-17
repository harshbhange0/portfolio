import React from "react";
import { SiGmail } from "react-icons/si";
import { BsInstagram,BsLinkedin ,BsGithub,BsWhatsapp} from "react-icons/bs";

function Contact() {
  return (
    <section
      id="contact"
      className="h-[100%] sm:h-[100vh] pt-[40px] pb-[2rem] flex justify-between items-center flex-col gap-y-[3rem] "
    >

      <h1 className="text-center text-5xl">Connect With Me</h1>
      <div className="mx-auto ease-in duration-100 flex p-4 card flex-col sm:flex-row gap-8 justify-center items-center rounded-t-full  rounder-b-sm shadow-xl  relative sm:shadow-lg border sm:rounded-t-none sm:rounded-sm">

        <img src="https://github.com/harshbhange0.png" className=" sm:shadow-lg rounded-full w-[200px] sm:absolute sm:top-[-300%]     m-1" alt="" />
        <h1 className="text-[26px]">Harsh Bhange</h1>
        <div className="flex flex-wrap gap-x-3  ">
          <a className="" href="mailto:harshbhange123@gmail.com ">
            <SiGmail className="text-[25px] text-red-400" />
          </a>
          <a className="" href="https://www.instagram.com/harshbhange0/">
            <BsInstagram className="text-[25px] text-[#c6085d]" />
          </a>
          <a className="" href="https://www.linkedin.com/in/harshbhange0/">
            <BsLinkedin className="text-[25px] text-[#28a5ff]" />
          </a>
          <a className="" href="https://github.com/harshbhange0">
            <BsGithub className="text-[25px] text-[#287aff]" />
          </a>
          <a className="" href="https://wa.me/7721916040">
            <BsWhatsapp className="text-[25px] text-[#25D366]" />
          </a>
        </div>
  
      </div>
      
    </section>
  );
}

export default Contact;
