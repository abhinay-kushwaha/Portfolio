import React from 'react';

const Index = ()=> {
  return(
 <>
<div>
<header className='bg-[#f3f4f5] text-white h-16 w-full flex justify-between'>
  <div className=' ml-5 flex justify-center items-center '>
    <img src='https://m.media-amazon.com/images/I/51MEYqxLGvL._AC_UF894,1000_QL80_.jpg' alt='logo' className=' w-12 rounded-full border-2 border-black' />
    <p className='text-black font-bold text-3xl'>Portfolio</p>
  </div>
  <div className='flex justify-center items-center'>
    <ul className='flex justify-center items-center text-black space-x-10 font-bold font-serif mr-10'>
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Portfolio</li>
      <li>Page</li>
      <li>Contact</li>
    </ul>

  </div>
  </header>
 


</div>
 </>
  );
}
export default Index;