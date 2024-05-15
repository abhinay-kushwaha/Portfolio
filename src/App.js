import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './portComponent/navbar'
import Home from './portComponent/home'
import About from './portComponent/about'
import Skills from './portComponent/skills'
import Contact from './portComponent/contact'
import Projects from './portComponent/projects'
import Footer from './portComponent/footer'
import Main from './portComponent/Main'
import Layout from './portComponent/Layout'

function App() {
  return (
   <>
   <div>
    {/* <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/> */}
   </div>
  
   <BrowserRouter>
   <Navbar />
   <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/skills' element={<Skills />}></Route>
              <Route path='/projects' element={<Projects/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
