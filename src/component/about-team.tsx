'use client';
import React , {useEffect} from 'react'

 
import Aos from 'aos'
import 'aos/dist/aos.css'
function about() {

  useEffect(()=> {
    Aos.init();
  } , [])

  
  return (
   <section id='about' className=' text-center h-fit    ' >


{/* ------------------img-start----------------- */}
  
<div className='bg-about-team w-full  h-96  flex justify-center items-center  '>
<h1 className='text-4xl text-white lg:text-8xl'>Our Team  </h1>
</div>   

 
 {/* ----------content sction one------------ */}
<div className='max-w-2xl m-auto text-center text-6xl px-5 flex justify-center items-center  my-20   font-medium'> Team Members </div>
 
 {/* ----------------- member taem ------------ */}
 
              <div className=" min-h-20 h-fit w-full flex  flex-wrap justify-center items-center gap-20 my-0 mx-auto ">



      <div data-aos="fade-up" >  
      <div className="  min-h-20 rounded-2xl shadow-2xl lg:shadow-none lg:hover:shadow-2xl p-6    ">
        <div className="flex flex-col gap-3">

          {/*------------- img---------------- */}
      
           
            <img className="team-img rounded-full w-60 m-auto" src="https://i.ibb.co/NsMnWPd/ibr.jpg" alt='' />
         
          </div>
          {/* ----------- text ------ */}
          <p className="m-0 text-3xl   text-purple-600">
            Ibrahim Wael   
          </p>
          <p className=" m-0 text-xl position">
            Front-End Development
          </p>
          <div className="flex  justify-center gap-1 ">
              {/* <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg " alt=''/>
            </a> */}
            <a href="https://www.facebook.com/ibrahum.weal/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt=''/>
            </a>
            <a href="https://www.instagram.com/ibrahimwael409/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt=''/>
            </a>
            <a href=" https://ibrlolportfoli.vercel.app/ " target="_blank">
              <img className='w-5' src=" https://cdn-icons-png.flaticon.com/128/1324/1324825.png" alt=''/>
            </a>  
          </div>
        </div>

      </div> 





<div data-aos="fade-up">
      <div   className="  min-h-20 rounded-2xl shadow-2xl lg:shadow-none lg:hover:shadow-2xl p-6   ">

<div className="flex flex-col gap-3">
 
    <img className="team-img rounded-full w-60 m-auto" src="https://i.ibb.co/QQfwWDS/ahmad.jpg" alt='' />
 
  </div>
  <p className="m-0 text-3xl   text-purple-600">
      Ahmad Kotp 
  </p>
  <p className=" m-0 text-xl position">
    Writer And Researcher
  </p>
  <div className="flex  justify-center gap-1 ">
      {/* <a href="http://www.twitter.com/" target="_blank">
      <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg " alt=''/>
    </a> */}
    <a href="https://www.facebook.com/ahmed.kotp.902266" target="_blank">
      <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt=''/>
    </a>
    <a href="https://www.instagram.com/ahmed.kotp.902266/" target="_blank">
      <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt=''/>
    </a>
    {/* <a href="http://www.gmail.com/" target="_blank">
      <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt=''/>
    </a>   */}
  </div>
 

</div> 
</div>

      </div>








 

   </section>
  )
}

export default about
