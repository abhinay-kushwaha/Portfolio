import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import ak from "../assets/aklogo1.jpg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky top-0 z-10 ${isScrolled ? 'bg-gray-500' : 'bg-slate-300'}`}>
      <div className="w-full h-10 sm:h-16 flex justify-between items-center p-4 shadow-2xl">
        <div className="hover:scale-150 hover:pl-5 hover:pt-5">
          <img src={ak} alt="Logo" className="w-16 rounded-full p-2" />
        </div>
        <div>
          <div className="hidden sm:block">
            <ul className="flex flex-row justify-center text-xl sm:text-xl gap-5 font-bold">
              <Link to='/home'><li className="p-1  hover:border-b-2 hover:border-slate-500">Home</li></Link>
              <Link to='/about'><li className="p-1  hover:border-b-2 hover:border-slate-500">About</li></Link>
              <Link to='/skills'><li className="p-1  hover:border-b-2 hover:border-slate-500">Skills</li></Link>
              <Link to='/projects'><li className="p-1  hover:border-b-2 hover:border-slate-500">Projects</li></Link>
              <Link to='/contact'><li className="p-1  hover:border-b-2 hover:border-slate-500">Contact</li></Link>
            </ul>
          </div>
          <button onClick={toggleMenu} className="sm:hidden">
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>
      <div className={`flex justify-end w-auto relative top-0 font-bold font-serif ${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white text-black p-5 rounded`}>
        <ul className="flex flex-col gap-1 w-fit">
          <Link onClick={closeMenu} to='/home'><li className="p-1 bg-white rounded-md hover:bg-slate-400">Home</li></Link>
          <Link onClick={closeMenu} to='/about'><li className="p-1 bg-white rounded-md hover:bg-slate-400">About</li></Link>
          <Link onClick={closeMenu} to='/skills'><li className="p-1 bg-white rounded-md hover:bg-slate-400">Skills</li></Link>
          <Link onClick={closeMenu} to='/projects'><li className="p-1 bg-white rounded-md hover:bg-slate-400">Projects</li></Link>
          <Link onClick={closeMenu} to='/contact'><li className="p-1 bg-white rounded-md hover:bg-slate-400">Contact</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
