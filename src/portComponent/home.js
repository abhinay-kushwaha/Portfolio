import React from "react";
import ak from "../assets/ak.jpeg"
import TextAppear from './textAppear.js';
const Home =() => {
  return(
<>
     <div style={{backgroundImage: "url('https://wallpaperaccess.com/full/5651978.png') "  ,backgroundSize:"cover" ,backgroundAttachment:"fixed" }}>
     <section >
      <div className="p-5 sm:p-10  bg-cover bg-center " >
       <div className="h-full flex flex-col justify-evenly     sm:gap-6   sm:flex sm:flex-row sm:justify-evenly sm:items-center  p-5 sm:p-10  font-serif  shadow-2xl">
        <div className=" p-4 rounded-md"  >
          <p className="font-bold text-2xl sm:text-6xl  w-fit p-2 rounded-md text-[#121231]">Hello, </p> <br/>
          <p className="font-bold sm:text-2xl">My name is Abhinay Kushwaha</p> <br/>
       <TextAppear text=" Frontend developer  " /> <br/>
       <p className="font-bold sm:text-2xl">"Mastering the Art of Building the Digital World: The Journey of a Full-Stack Developer"</p>
        </div>
        <div className=" flex justify-end sm:flex-none">
          <img src={ak}className="w-60 h-60 rounded-full    "  />
        </div>
       </div>
    </div>
      </section>
      <section style={{backgroundImage: "url('') "  , }} className=" w-  h-full p-3">
       <div className=" sm:m-4 flex flex-col sm:flex-row justify-between items-center  rounded  p-2 ">
       <div className="shadow-2xl w-[50%] flex justify-center items-center m-5">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/freelancer-working-on-website-development-4637846-3864092.png" className="rounded w-80" />
        </div>
        <div className="p-5  m-5 shadow-2xl  font-bold font-serif sm:text-2xl rounded hover:scale-105   ">
         <p className=""> Passion is not about doing something big.<br/> Passion is doing small things with 100%. </p>
        </div>
       </div>
      </section>
     </div>
     
</>
  );
}
export default Home;