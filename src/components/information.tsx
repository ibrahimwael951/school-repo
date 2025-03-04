import Image from 'next/image'
import React from 'react'

const information = () => {
    const stats = [
        {
            data: "35K",
            title: "Student"
        },
        {
            data: "10K+",
            title: "Downloads"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]
  return (
    <section className="py-20">
    <div className=" w-full mx-auto px-4 items-start gap-10 justify-evenly lg:flex ">
       
            <Image 
                src="/Images/Team.avif" 
                className="rounded-lg hidden lg:block lg:max-w-[600px]" 
                alt="Image" 
                width={1000}
                height={1000}
            />
        
        <div className="mt-6 sm:mt-0 text-center lg:text-left lg:block">
            <div className="max-w-2xl   m-auto">
                <h3 className=" text-3xl sm:text-4xl font-bold">
                    We do our best to make Student and Teachers always happy
                </h3>
                <p className="mt-3 max-w-xl m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                </p>
            </div>
            <div className="flex justify-center lg:justify-normal mt-6 ">
                <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="">
                                <h4 className="text-4xl text-purple-400 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default information
