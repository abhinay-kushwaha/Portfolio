import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact = ()=>{
  useEffect(() => {
    AOS.init();
}, []);
  return(
    <>
   <div style={{backgroundImage: "url('https://wallpaperaccess.com/full/5651978.png') "  ,backgroundSize:"cover" ,backgroundAttachment:"fixed" }} >
   <div  className="text-4xl font-bold font-serif text-center p-5 ">Get In Touch</div><hr/>
    <div className=" flex flex-col sm:flex-row justify-evenly items-center p-2 gap-4  shadow-2xl font-serif"  >
       
       <div data-aos="zoom-in-up" className="hover:scale-125 flex flex-col items-center font-mono font-bold text-xl  shadow-2xl m-2 p-10 sm:p-16">
       <IoCallSharp className=" animate-bounce "/><br/>
       +91 958 498 7950 <br/><br/>
       <MdEmail className=" animate-ping "/><br/>
       abhinayarkbi@gmail.com
       </div>
    </div>
   </div>
    </>
  )
}
export default Contact;