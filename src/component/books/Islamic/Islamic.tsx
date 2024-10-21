'use client';
import React , {useEffect} from 'react'

 
import Aos from 'aos'
import 'aos/dist/aos.css'
function Islamic() {
    useEffect(()=> {
        Aos.init();
      } , [])
    
  return (
    <section className='w-full p-20 '>
        <h1 className='text-5xl  w-full text-center my-20'> Islamic</h1>


        {/* content */}
    <div  className=' flex-wrap h-fit flex justify-center items-center gap-6'>
      

    <div data-aos="zoom-in-up" className='  flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105  '> 
<img className='w-72 rounded-2xl  ' src=" https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFqBs9SbAAAY-ADafm_1NH1lJFF3UJu6ND5M9eIEpalqeElnVSi7l5isxSg5BYytGF4SDN0rjMcgVivnfKNLxfGqT_lWDWlSrw1TTOKPZ1E0E9IP2q2XBkpSLtVtqmv_xpN-J92ukNsjY/s1600/PRO4fbfbe2757ae0.jpg" alt="" />
<h1 className='text-2xl'>   صحيح البخاري </h1>
<p className=''>100 pounds</p>
    </div>  



    <div data-aos="zoom-in-up" className='  flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105  '> 
<img className='w-72 rounded-2xl  ' src="https://www.noor-book.com/publice/covers_cache_webp/18/d/8/0/95042166abd80b51dc657e102c03de6b.jpg.webp" alt="" />
<h1 className='text-2xl'>   صحيح مسلم </h1>
<p className=''>100 pounds</p>
    </div>  




    <div data-aos="zoom-in-up" className='  flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105  '> 
<img className='w-72 rounded-2xl  ' src="https://www.noor-book.com/publice/covers_cache_webp/18/1/c/b/0651900f931cb44ce52f46f17a2b462a.jpg.webp" alt="" />
<h1 className='text-2xl'>      الشفا بتعريف حقوق مصطفي </h1>
<p className=''>100 pounds</p>
    </div>  



    <div data-aos="zoom-in-up" className='  flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105  '> 
<img className='w-72 rounded-2xl  ' src="https://www.noor-book.com/publice/covers_cache_webp/17/9/7/f/5f47cb183597f7bf7b240b4c60197c8e.jpg.webp" alt="" />
<h1 className='text-2xl'>   تفسير الطبري </h1>
<p className=''>100 pounds</p>
    </div>  


    <div data-aos="zoom-in-up" className='  flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105  '> 
<img className='w-72 rounded-2xl  ' src="https://www.noor-book.com/publice/covers_cache_webp/18/d/0/a/a49fe21a8bd0aead9e06e5ac96b533c7.jpg.webp" alt="" />
<h1 className='text-2xl'>   تفسير ابن كثير </h1>
<p className=''>100 pounds</p>
    </div>  



    <div data-aos="zoom-in-up" className='  flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105  '> 
<img className='w-72 rounded-2xl  ' src=" https://www.noor-book.com/publice/covers_cache_webp/19/f/f/b/ccc244ee61ffb9e5c16c3847a9fbcd75.jpeg.webp" alt="" />
<h1 className='text-2xl'>   تفسير السمرقندي </h1>
<p className=''>100 pounds</p>
    </div>  


  </div>




  </section>
  )
}

export default Islamic
