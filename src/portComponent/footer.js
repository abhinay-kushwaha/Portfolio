import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Footer = () => {
  useEffect(() => {
    AOS.init();
}, []);
    return (
              <>
      <footer className='drop-shadow-2xl bg-[#cccfca] border-[#ecebeb] border-t-4' >
              <div className=' p-2 flex flex-col sm:flex-row justify-evenly items-center '>
              <div  data-aos="flip-up" className='font-serif p-2'>
                <h1 className='font-bold sm:text-4xl text-2xl  text-[#2d4750]'>Get in touch</h1>
                <p className='text-[#2d4750]'>“Great web design without functionality <br/> is like a sports car with no engine.”</p>
              </div>
                <div   className='flex gap-5 m-3 '>
                 <a href='https://www.youtube.com/@abhi_coding_' className=''><FaYoutube  className='text-4xl hover:animate-ping '/></a>
                 <a href='https://www.instagram.com/abhi_coding_?igsh=NDdsMGdncm1kdnEz'> <FaSquareInstagram   className='text-4xl hover:animate-ping'/></a>
                 <a href='https://www.linkedin.com/in/abhinay-kushwaha-78b767285'><FaXTwitter  className='text-4xl hover:animate-ping'/></a>
                 <a href='https://github.com/abhinay-kushwaha'> <FaGithub  className='text-4xl scale w- hover:animate-ping'/></a>
                 <a href='https://www.linkedin.com/in/abhinay-kushwaha-78b767285'> <FaLinkedin  className='text-4xl hover:animate-ping' /></a>
                </div>
              {/* <div className='flex flex-col sm:flex-row  justify-between gap-3 p-4 text-[#2d4750] font-mono'>
              <div className='bg-[#cddfe6] w-52 sm:w-auto p-5 sm:h-32 flex justify-center items-center rounded-md shadow-2xl animate-pulse'>
              Abhinay
                </div>
                <div className='bg-[#cddfe6] w-52  sm:w-auto sm:h-32 p-5 flex justify-center items-center rounded-md shadow-2xl animate-pulse '>
              <a href=''>abhiarkiti@gmail.com</a>
              </div>
              </div> */}
              </div><hr/>
              <div className='text-center bg-[#cccfca] p-4 flex justify-center'>
                All <div className='px-2 flex justify-center items-center'><FaRegCopyright/></div> copyright claim 2024.
              </div>
            </footer>
        </>
    );
};
export default Footer;