import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
const Navbar =() => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  
  return(
<>
<div className="bg-transparent backdrop-blur-sm w-full h-10 sm:h-16 flex justify-between items-center  p-4  drop-shadow-2xl sticky top-0 shadow-2xl">
<div className="font-bold font-serif text-2xl sm:text-4xl animate-pulse hover:scale-150 hover:pl-5  ">Abhinay</div>
    <div>
  <div  className="     hidden sm:block" >
        <ul className="  flex flex-row justify-center text-xl sm:text-xl   gap-5 font-bold ">
           <Link to='/home' ><li className="p-1   rounded-md hover:bg-slate-400 " href="#">Home</li></Link>
           <Link to='/about' ><li className="p-1   rounded-md hover:bg-slate-400 " href="#">About</li></Link>
           <Link to='/skills' ><li className="p-1   rounded-md hover:bg-slate-400 " href="#">Skills</li></Link>
           <Link to='/projects' ><li className="p-1   rounded-md hover:bg-slate-400 " href="#">Projects</li></Link>
           {/* <Link to='/projects' ><li className="p-1   rounded-md hover:bg-slate-400 " href="#"> Experience</li></Link> */}
           {/* <Link to='/projects' ><li className="p-1   rounded-md hover:bg-slate-400 " href="#">  Resume</li></Link> */}
           <Link to='/contact' ><li className="p-1   rounded-md hover:bg-slate-400 " href="#">Contact</li></Link>
        </ul>
      </div>
      <button  onClick={toggleMenu} className="sm:hidden "><FiMenu className=" text-2xl"/></button>
    </div>
</div>
      <div className=" flex justify-end w-full  static font-bold font-serif ">
      <div id="menu-dropdown" style={{ display: isMenuOpen ? 'block' : 'none' }} className="bg-white text-black     p-5  rounded " >
        <ul className="  flex flex-col   gap-1 w-fit ">
           <Link to='/home' ><li className="p-1  bg-white rounded-md hover:bg-slate-400 " href="#">Home</li></Link>
           <Link to='/about' ><li className="p-1 bg-white  rounded-md hover:bg-slate-400 " href="#">About</li></Link>
           <Link to='/skills' ><li className="p-1 bg-white  rounded-md hover:bg-slate-400 " href="#">Skills</li></Link>
           <Link to='/projects' ><li className="p-1 bg-white  rounded-md hover:bg-slate-400 " href="#">Projects</li></Link>
           {/* <Link to='/projects' ><li className="p-1 bg-white  rounded-md hover:bg-slate-400 " href="#"> Experience</li></Link> */}
           {/* <Link to='/projects' ><li className="p-1 bg-white  rounded-md hover:bg-slate-400 " href="#">  Resume</li></Link> */}
           <Link to='/contact' ><li className="p-1 bg-white  rounded-md hover:bg-slate-400 " href="#">Contact</li></Link>
        </ul>
      </div>
      </div>
</>
  );
}
export default Navbar;