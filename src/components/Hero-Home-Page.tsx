import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const HeroHomePage = () => {
  return (
  
    <section id='home' className="bg-white dark:bg-black py-20 select-none">
    <div className="flex justify-between flex-col items-center md:flex-row lg:justify-evenly max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">School Community</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Our school community is a place where students, teachers, and parents come together to learn, grow
            </p>
            <Link href="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                
            </Link>
            <Link href="/#books" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Our Books
            </Link> 
        </div>
         
            <Image 
              className='w-[90%]   md:w-2/5 lg:w-2/4 max-w-[500px]  '
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
