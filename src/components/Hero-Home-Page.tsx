import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const HeroHomePage = () => {
  return (
  
    <section id='home' className="  md:py-20 ">
    <div className="flex justify-between gap-10 flex-col-reverse items-center md:flex-row lg:justify-evenly max-w-screen-xl px-4 mx-auto ">
        <div className="mr-auto text-center 2xl:text-left">
            <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl ">School Community</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
                Our school community is a place where students, teachers, and parents come together to learn, grow
            </p>
            <Link href="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                
            </Link>
            <Link href="/#books" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white  dark:border-neutral-700 duration-200 dark:ring-neutral-700">
                Our Books
            </Link> 
        </div>
         
            <Image 
              className=' w-96 sm:w-[60%] md:w-2/5 lg:w-2/4 max-w-[500px] select-none '
              src="/Images/girl with cute smile.png" 
              alt="mockup"
              width={1000}
              height={1000}
              />
                       
    </div>
</section>
 
  )
}

export default HeroHomePage
