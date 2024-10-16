"use client";

import React, { useState , useRef } from 'react';
import Links from 'next/link'
import {motion, useScroll} from 'framer-motion'
function main() {

//     const [isLoginVisible, setIsLoginVisible] = useState(false);
//     const ref = useRef<HTMLElement>(null);
//     const {scrollYProgress} =useScroll( {
//       target: ref,
//       offset:[" 1", "1.33 1"],

//     });
  return (<>

  {/* ----------------- start page--------------- */}
    <section id='home '   >
    <div className="  flex flex-col justify-center items-center h-screen w-full max-w-6xl  m-auto ">
    <h1 className='text-5xl lg:text-8xl mb-10'>  School Community</h1>
    <p className='flex justify-center lg:text-2xl '> Make your study easy</p>
    {/* <button className=' bg-white text-3xl mt-10 py-2  px-10 lg:hover:scale-110 active:scale-75 duration-150'>Shop</button> */}
   </div>
   <div  className=' absolute -z-20 top-0 left-0 w-full h-screen bg-img' />
   </section>
   
  
{/* ------------------product show -------------------- */}

   <section    id='product' className='h-fit  flex  flex-col items-center p-10 justify-between  '  >
    <h1 className='text-5xl mb-10 nice-apear'> Books  </h1>

    <div className='  flex flex-col flex-wrap gap-10 justify-center items-center w-full p-10 md:flex-row   '>


    <Links  href='/books/Philosophy'>   <div className='nice-apear flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105 lg:hover:mx-10'> 
<img className='w-72 rounded-2xl  ' src=" https://assets.asfar.io/uploads/2021/01/%D8%A7%D9%84%D9%82%D9%88%D8%A7%D9%86%D9%8A%D9%86-scaled.jpg" alt="" />
<h1 className='text-2xl'>   Philosophy </h1>
{/* <p className=''>100 pounds</p> */}
      </div>   </Links>

      <Links  href='/books/History'>
      <div className='nice-apear flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105 lg:hover:mx-10'> 
<img className='w-72 rounded-2xl  ' src="https://th.bing.com/th/id/OIP.ThB_tf8gPCOmXxPWxu_xRAHaKf?rs=1&pid=ImgDetMain" alt="" />
<h1 className='text-2xl'>History </h1>
{/* <p className=''>100 pounds</p> */}
      </div> </Links>


      <Links  href='/books/Science'>
      <div className='nice-apear flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105 lg:hover:mx-10'> 
<img className='w-72 rounded-2xl  ' src="https://th.bing.com/th/id/OIP.LTgCOzsAGPhgV_7pmOgNxAAAAA?rs=1&pid=ImgDetMain" alt="" />
<h1 className='text-2xl'>Science </h1>
{/* <p className=''>100 pounds</p> */}
      </div> </Links>

      <Links  href='/books/Islamic'>
      <div className='nice-apear flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105 lg:hover:mx-10'> 
<img className='w-72 rounded-2xl  border-2 border-black ' src="https://th.bing.com/th/id/OIP.UGDnUVO4hzUeta5s2tAt3AHaLb?rs=1&pid=ImgDetMain" alt="" />
<h1 className='text-2xl'>Islamic Religion </h1>
{/* <p className=''>100 pounds</p> */}
      </div> </Links>

    </div>
   </section>

{/* --------------------------- some thing like start page ----------------- */}

   <section id='  ' className='bg-img2 img-apear h-screen w-full my-20'>
    <div className="    flex flex-col justify-center items-center h-screen w-full max-w-6xl  m-auto   ">
    <h1 className='nice-apear text-4xl lg:text-8xl mb-10 px-6'>Join our community</h1>
    <p className='nice-apear lg:text-2xl'>for more details and updates </p>
   <a href="https://www.instagram.com/"> <button className='nice-apear lg:text-3xl bg-white text-3xl mt-10 py-2  px-10 lg:hover:scale-110 active:scale-75 duration-150'>follow</button> </a>
   </div>
   {/* <div  className=' absolute -z-20 top-0 left-0 w-full h-screen bg-img2' /> */}
   </section>


{/* ------------------------ about us --------------------- */}

   <section className='flex justify-center flex-col md:flex-row items-center gap-10 ' >

 
    <div className=' nice-apear p-10 w-full  md:w-96 lg:w-5/12 '> 
<img className='w-full rounded-2xl ' src="https://images.pexels.com/photos/8465500/pexels-photo-8465500.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
<h1 className='text-2xl'>About our website </h1>
<p className='mb-5'>We make the website simple for all people</p>
<Links className='border-2 border-purple-500 rounded-lg p-2   hover:bg-purple-500 hover:text-white ' href='/about'>Learn More  </Links>
    </div>



    <div className='nice-apear p-10 w-full  md:w-96 lg:w-5/12 max-w-2xl '> 
<img className='w-full rounded-2xl' src=" https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
<h1 className='text-2xl'>The Team </h1>
<p className='mb-5'> About our team and we work as impossible </p>
<Links className='border-2 border-purple-500 rounded-lg p-2   hover:bg-purple-500 hover:text-white ' href='/about-team'>learn  </Links>
    </div>
   </section>
    


    {/* ----------------------- coming soon ------------------- */}
   
    <section id='  ' className='bg-coming-soon img-apear   h-screen w-full my-20'>
    <div className="    flex flex-col justify-center items-center h-screen w-full max-w-6xl  m-auto   ">
    <h1 className=' nice-apear text-5xl lg:text-8xl mb-10'>Whats Next ?</h1>
    <p className=' nice-apear lg:text-2xl'>We will make an educational platform from the school  </p>
   {/* <a href="https://www.instagram.com/"> <button className=' bg-white  lg:hover:scale-110 active:scale-75 duration-150'>follow</button> </a> */}
   <Links className=' nice-apear rounded-xl bg-white p-2  lg:text-3xl  mt-10 py-2  px-10 px-10 lg:hover:scale-110 active:scale-75 duration-150' href='/Sustainability'>more details  </Links>
   </div>
   {/* <div  className=' absolute -z-20 top-0 left-0 w-full h-screen bg-img2' /> */}
   </section>
    
   </>
  )
}

export default main