import React from "react";
import Marquee from "react-fast-marquee";

const Projects = ()=>{
  return(
<div style={{backgroundImage: "url('https://wallpaperaccess.com/full/5651978.png') "  ,backgroundSize:"cover" ,backgroundAttachment:"fixed" }} className="font-serif text-[#113744]  space-y-4 ">
  <div className="p-2">
    <Marquee  speed={90}  behavior="alternate"  direction="right-left" ><p className="text-white">My New Projects 👉  </p> <a href="https://github.com/abhinay-kushwaha"><button className="bg-green-400 rounded-full w-fit px-1 font-semibold"> Click Here</button> </a>
     </Marquee>
  </div>
<div className="flex flex-wrap justify-evenly items-center ">
<div data-aos="fade-right" className=" flex flex-col justify-start items-center  gap-5 w-80 h-96 overflow-y-scroll   p-8 m-5 shadow-2xl ">
  <div className=""><img className="hover:scale-105 w-60 sm:w-96" src="https://images.ctfassets.net/pdf29us7flmy/7pn6wiySB3JP9qQzE8Ire/260146de3617e8b2917cce73264ca8ec/enterprise-resource-planning-system.png?w=720&q=100&fm=jpg"/></div>
  <div className="hover:scale-105 p-2 "><h1 className="font-bold text-2xl">ERP management system</h1><br/><p className="font-bold font-mono">Using React & Tailwind CSS</p> 
  <p>Enterprise resource planning (ERP) is a software system that helps you run your entire business, supporting automation and processes in finance, human resources, manufacturing, supply chain, services, procurement, and more.</p>
  </div>
</div>
<div data-aos="fade-left" className="flex flex-col  justify-start items-center    gap-10 w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-60 sm:w-96" src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/59/18/t-i-1639997686-gaming-themed-to-do-list_ver_1.jpeg"/></div>
   <div className="hover:scale-105 "><h1 className="font-bold text-2xl">Todo List</h1><br/><p>`A todo list is just a list of things you have todo. That means basically anything and everything can be on your todo list—but just because you've written your to-dos down doesn't mean your todo list is actually useful. Effectively tracking when your work is due can help you prioritize and get great work done.` </p></div>
</div>
<div data-aos="fade-right" className="flex flex-col  justify-start items-center    gap-10 w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-60 sm:w-96" src="https://st2.depositphotos.com/1001941/6155/v/950/depositphotos_61557439-stock-illustration-cricket-bat-ball-and-wicket.jpg"/></div>
   <div className="hover:scale-105 "><h1 className="font-bold text-2xl">Bat Ball Stump</h1><br/><p>Bat Ball Stump (it is just like Rock paper Scissors) is an intransitive hand game, usually played between two people, in which each player simultaneously forms one of three shapes . These shapes are "Bat" , "Ball" , and "Stump". </p></div>
</div>
<div data-aos="fade-left" className="flex flex-col  justify-start items-center    gap-10 w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-60 sm:w-96" src="https://miro.medium.com/v2/resize:fit:1400/1*hPhzeFD3htF7ly1AMmAVbw.png"/></div>
   <div className="hover:scale-105 "><h1 className="font-bold text-2xl">Rock paper scissors</h1><br/><p>Rock paper scissors (also known by several other names and word orders ) is an intransitive hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors". </p></div>
</div>
<div data-aos="fade-right" className="flex flex-col  justify-start items-center   gap-5  w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-52 sm:w-80 " src="https://qph.cf2.quoracdn.net/main-qimg-675be545fbe9f816fda885dbf03efb02"/></div>
   <div className="hover:scale-105 "><h1 className="font-bold text-2xl">Sarkari Result</h1><br/><p>Sarkariresult.com Sarkari Result is a platform where thousands of Sarkari Naukri online forms are available,</p></div>
</div>
<div data-aos="fade-left" className="flex flex-col  justify-start items-center    gap-5 w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-52 sm:w-80" src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-cartoon-calculator-image_1288760.jpg"/></div>
  <div className="hover:scale-105 "><h1 className="font-bold text-2xl">Calculator</h1><br/><p>This is a simple calculator with memory functions similar to a small handheld calculator. Use this basic calculator online for math with addition, subtraction, division and multiplication.</p></div>
</div>
<div data-aos="fade-right" className="flex flex-col  justify-start items-center    gap-10 w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-72 sm:w-96" src="https://thenfapost.com/wp-content/uploads/2021/03/netflix.jpg"/></div>
  <div className="hover:scale-105 "><h1 className="font-bold text-2xl">Netflix</h1><br/><p>Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.</p></div>
</div> 
<div data-aos="fade-left" className="flex flex-col  justify-start items-center   gap-5 w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-40 sm:w-60" src="https://4.imimg.com/data4/OB/QX/MY-24273335/all-product-cdr5-500x500.png"/></div>
   <div className="hover:scale-105 "><h1 className="font-bold text-2xl">Automation cooler</h1><br/><p>The Sensor sences the person coming into the bed and the 
cooler gets the command from the Arduino then the cooler starts.
</p></div>
</div>
<div data-aos="fade-right" className="flex flex-col  justify-start items-center    gap-5  w-80 h-96 overflow-y-scroll p-8 m-5 shadow-2xl ">
  <div><img className="hover:scale-105 w-60 sm:w-96" src="https://www.circuits-diy.com/wp-content/uploads/2022/05/rain-alarm-project.jpg"/></div>
  <div className="hover:scale-105"><h1 className="font-bold text-2xl">Rain Detector Alarm</h1><br/><p>The sensor senses the rain drop and gives this data to 
Arduino, then Arduino commands the buzzer and the buzzer makes a sound.
</p></div>
</div>
</div>
</div>
  )
}
export default Projects;
