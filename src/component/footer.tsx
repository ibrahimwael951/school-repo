import React from 'react'

function footer() {
  return (  
    
    <div>
      <div className="border-black border-b-2 w-2/3 m-auto my-20"></div>

    <section id='footer' className='mb-20 h-72 flex flex-col gap-20  items-center w-full   md:px-32 md:flex-row md:justify-between'>
     
      <div className='flex flex-col  '>
        <h1 className='nice-apear text-4xl mb-10 '>shop </h1>
<div className="flex w-52 justify-between   ">
<a href=" "><img className= ' nice-apear w-10  lg:hover:scale-125 ' src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" alt="" /> </a>
    <a href=""> <img className= ' nice-apear w-10  lg:hover:scale-125' src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt="" /></a>
      <a href="">   <img className=' nice-apear w-10 lg:hover:scale-125 ' src="https://cdn-icons-png.flaticon.com/128/2111/2111774.png" alt="" /></a>
    
</div>
</div>


<div className=' flex flex-col gap-4 text-1xl   '>

<a href="/contact"  className='nice-apear hover:text-purple-400  duration-150'>Contact</a>
<a href=""  className='nice-apear hover:text-purple-400  duration-150'>Returns</a>
<a href=""  className='nice-apear hover:text-purple-400  duration-150'>Payment & Delivery</a>


</div>
    
    </section >
    </div>
  )
}

export default footer
