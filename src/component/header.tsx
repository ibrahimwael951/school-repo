"use client";

import React, { useState } from 'react';
 
 
import Links from 'next/link'

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };


  // const [isLoginVisible, setIsLoginVisible] = useState(false);
  // const toggleLogin = () => {
  //   setIsLoginVisible(!isLoginVisible);
  // };


  // const [isLoginOrSign, setIsLoginOrSign] = useState(false);
  // const toggleLoginOrSign = () => {
  //   setIsLoginOrSign(!isLoginOrSign);
  // };


  return (
    
    <div className='   bg-white fixed w-full z-30  '>
          
      <header className=' overflow-hidden   flex justify-between m-auto   p-2  max-w-6xl'>
        <div className="  flex  items-center ">
          <img src="https://cdn-icons-png.flaticon.com/128/4207/4207247.png" className='w-10 mr-1  '       alt="" />
         <Links className='text-2xl font-serif' href='/'>school </Links>
          {/* <h1 className='text-2xl'>shop </h1> */}
        </div>
         
         {/* buttons for windows */}

         <div className='    absolute -right-80     flex  items-center md:relative md:right-0'>
        
         {/* <Links   className='hover text-xl m-2  rounded-2xl ml-2  cursor-pointer   ' href='/Sustainability'>Sustainability</Links> */}
         <Links   className='hover text-xl m-2  rounded-2xl ml-2  cursor-pointer   ' href='/about'>about</Links>
         <Links   className='hover text-xl m-2  rounded-2xl ml-2  cursor-pointer' href='/contact'>Login</Links>
         {/* <Links   className='hover text-2xl m-2  rounded-2xl ml-2  cursor-pointer flex ' href='/shop'><img src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png"className='w-10'  alt="" />(0)</Links> */}
        
         {/* <button   onClick={toggleSidebar}><img src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" className='w-10' alt="" /> </button> */}
         </div>
     
          <div className='  relative right-0 flex  items-center md:absolute md:-right-80'>
          {/* <Links   className='  text-2xl m-2  rounded-2xl ml-2  cursor-pointer flex ' href='/shop'><img src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png"className='w-10'  alt="" />(0)</Links> */}
        
          <button  onClick={toggleSidebar} ><img src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" className='w-10' alt="" />  </button>
         </div>  

 
 
 

     {/* buttons for mobile */}
     {/* <div className='  relative right-0 flex  items-center lg:absolute lg:-right-80'>
          <button  onClick={toggleSidebar} ><img src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" className='w-10' alt="" /> </button>
         </div> */}


         <div className={`flex flex-col justify-between fixed top-0 right-0 h-full w-36  bg-white  transform ${isSidebarVisible ? 'translate-x-0' : 'translate-x-full'}   text-xl  transition-transform duration-300`}>
         <div>
         <button  onClick={toggleSidebar} ><img src="https://cdn-icons-png.flaticon.com/128/271/271226.png" className='w-10' alt="" /> </button>
        <ul>
        
 
        <Links onClick={toggleSidebar}    href='/about'><li className=" text-1xl p-2 hover:bg-gray-500 hover:text-white cursor-pointer">about</li></Links>
         <Links  onClick={toggleSidebar}   href='/contact'><li className=" text-1xl p-2 hover:bg-gray-500 hover:text-white cursor-pointer">contact</li></Links>
 
        
        {/* <Link onClick={toggleSidebar} to="login"  spy={true} smooth={true}     duration={600}    ><li className=" text-xl p-4 hover:bg-gray-700 cursor-pointer"> Login</li></Link>
           <Link onClick={toggleSidebar} to="home" spy={true} smooth={true}  offset={-50} duration={600} activeClass='active'   ><li className=" text-xl p-4 hover:bg-gray-700 cursor-pointer">home</li></Link>
          <Link onClick={toggleSidebar} to="about"  spy={true} smooth={true}     duration={600}    ><li className=" text-xl p-4 hover:bg-gray-700 cursor-pointer"> about</li></Link>
           */}
          {/* <li className=" text-xl p-4 hover:bg-gray-700 cursor-pointer" onClick={() => { toggleLogin();    toggleSidebar();}}>login</li> */}
        </ul>
        </div>



        <div>

        <button> <img src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png" className='w-10 hover:rotate-45' alt="" /> </button>
        </div>

      </div>

    

         </header>
         </div>


// {/* login page */}
// {/* 
//    <div className={` z-10 overflow-hidden   fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  flex justify-center    p-10 bg-emerald-200  rounded-lg  ${isLoginVisible ? 'scale-100  opacity-100' : 'scale-0 opacity-0'} `}>
//    <button onClick={toggleLogin} className=' absolute top-1 right-1' ><img src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png" className='w-4' alt="" /></button>
 
//  <div className={` absolute -left-70 flex flex-col ${isLoginOrSign ?  'translate-x-96' :  'translate-x-0'}  `} >
//  <h1 className='text-3xl m-2 '>login page</h1>
//  <input placeholder='name' type="text" />
//  <input placeholder='email' type="email" />
//  <input placeholder='password' type="password" />
//  <button onClick={toggleLoginOrSign}>sign</button>
//  </div>

  
//  <div className={`  flex flex-col ${isLoginOrSign ?  'translate-x-0' : '-translate-x-96'} `} >
//  <h1 className='text-3xl m-2 '>sign in page</h1>
//  <input placeholder='name' type="text" />
//  <input placeholder='email' type="email" />
//  <input placeholder='password' type="password" />
//  <input placeholder='Repeat password' type="password" />
//  <button onClick={toggleLoginOrSign}>login</button>
//  </div>
//      </div>
//  */}


  )
}

export default Header
