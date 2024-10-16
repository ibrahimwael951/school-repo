import React from 'react'

import Links from 'next/link'
function about() {
  return (
   <section id='about' className=' text-center h-fit    ' >


{/* ------------------img-start----------------- */}
  
<div className='bg-about w-full  h-96  flex justify-center items-center  '>
<h1 className='text-4xl text-white lg:text-8xl'>Our Community  </h1>
</div>   


 {/* ----------content sction one------------ */}
<div className='max-w-2xl m-auto text-center text-2xl px-5 flex justify-center items-center  my-10   font-medium'>This project aims to meet the needs of the reader and learner by combining diverse books and accurate sources to combine ease and education.</div>
 
    <div className='img-apear h-fit  p-10  mb-20 flex flex-col-reverse items-center  justify-center gap-20 md:flex-row '>  
            <div className='max-w-lg text-start'>
                  <h1 className='text-2xl md:text-3xl lg:text-5xl '>Our commitment to innovation and excellence.</h1>
                    <p className=' my-7 lg:text-xl font-extralight'> In this project, we devote ourselves to helping everyone who wants to learn and explore new fields، Every piece of information is carefully reviewed ensuring unique and distinctive information، We strive to provide our customers with books and information that they can feel satisfied when reading.</p>
            </div>
            
            {/* ----------img------------ */}
              <img className=' img-apear w-full md:w-2/5' src="https://images.pexels.com/photos/1083633/pexels-photo-1083633.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />


    </div>

{/* --------------content section two----------------- */}
  
    <div className='h-fit  p-10 flex flex-col-reverse items-center justify-center gap-20 md:flex-row-reverse '>  
            <div className=' img-apear max-w-lg text-start '>
                  <h1 className='text-2xl md:text-3xl lg:text-5xl '>Sustainability</h1>
                    <p className='my-7 lg:text-xl font-extralight'>We are committed to providing a collection of books that combine high quality with distinctive cultural and cognitive content. We always strive to provide books that are worth reading and add value to your personal libraries, while ensuring an enjoyable and inspiring experience for every reader.</p>
                    {/* <Links className='rounded-lg  text-purple-500 border-purple-500 border-2 text-2xl  p-2 w-fit hover:bg-purple-500 hover:text-white hover:scale-110    active:scale-95' href='/Sustainability' > Learn  </Links>  */}
            </div>
            
            {/* ----------img------------ */}
              <img className=' img-apear w-full md:w-2/5' src="https://images.pexels.com/photos/1808200/pexels-photo-1808200.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            

    </div>


 


   </section>
  )
}

export default about
