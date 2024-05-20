import React from "react";
import ak from "../assets/ak.jpeg"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const About = () =>{
  useEffect(() => {
    AOS.init();
}, []);
  return(
<>
<div style={{backgroundImage: "url('https://wallpaperaccess.com/full/5651978.png') "  ,backgroundSize:"cover" ,backgroundAttachment:"fixed" }}>
  
<section className=" font-serif text-[#113744]   "style={{backgroundImage: "url('') "  , }}>
  <div className="  p-10   flex flex-col sm:flex-row justify-evenly items-center  ">
  <div data-aos="zoom-in" className="  rounded flex justify-center items-center m-2  p-2  w-[50%] ">
    <img src={ak} alt="img" className="w-48 rounded-md  " />
  </div>
  <div data-aos="zoom-out" className="sm:w-[50%] w-full h-full scale" >
    <div className=" rounded shadow-2xl  p-2 h-full">
    "I completed my engineering diploma from a Government Polytechnic college Rewa, and I'm currently in my second year of engineering studies from JNCT Rewa. I'm passionate about delving into the intricacies of technology and problem-solving, and I'm excited about the opportunities that lie ahead in my engineering journey. My time in college has been rewarding, and I'm eager to continue learning and growing in my field. I'm particularly interested in Web developer.  I look forward to discussing how my skills and experience can contribute to your team's success. "
    </div>
  </div>
  </div>
</section>
<section style={{backgroundImage: "url('') "  , }} className="  flex flex-col sm:flex-row justify-evenly font-mono text-white items-center  shadow-2xl  p-10 ">
  <div className="text-[#113744] p-2 sm:w-[50%] ">
  <div data-aos="fade-down-right" className=" shadow-2xl  rounded   p-2 h-full">
  During my internship at Shanti Infosoft, I had the opportunity to work with the MERN stack, which includes MongoDB, Express.js, React, and Node.js. My main responsibilities involved developing and maintaining web applications, implementing new features, and troubleshooting issues.
  </div>
  </div>
  <div className="sm:w-[50%] sm:h-full p-2">
  <div data-aos="fade-down-left" className="shadow-2xl p-2 w-full h-auto  rounded ">
<img src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" className="rounded" />
  </div>
  </div>
</section>
</div>
</>
  )
}
export default About;