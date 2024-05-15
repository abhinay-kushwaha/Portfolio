import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
const Skills =()=>{
  return(
<>
<section style={{backgroundImage: "url('https://wallpaperaccess.com/full/5651978.png') "  ,backgroundSize:"cover" ,backgroundAttachment:"fixed", height:"100vh" }} className="flex  flex-wrap justify-evenly items-center  p-5   sm:p-10   shadow-2xl ">
  <div className="flex flex-col items-center gap-3 text-2xl font-memo font-bold"><IoLogoHtml5 className="w-20 h-20 sm:w-40 sm:h-40 hover:scale-110 shadow-2xl "/>HTML</div>
  <div className="flex flex-col items-center gap-3 text-2xl font-memo font-bold"><FaCss3Alt className="w-20 h-20 sm:w-40 sm:h-40 hover:scale-110 shadow-2xl "/>CSS</div>
  <div className="flex flex-col items-center gap-3 text-2xl font-memo font-bold"><TbBrandJavascript className="w-20 h-20 sm:w-40 sm:h-40 hover:scale-110 shadow-2xl "/>JavaScript</div>
  <div className="flex flex-col items-center gap-3 text-2xl font-memo font-bold "><RiReactjsLine className="w-20 h-20 sm:w-40 sm:h-40 hover:scale-110  animate-spin duration-300 ease-linear infinite "/>React js</div>
</section>
</>
  )
}
export default Skills;