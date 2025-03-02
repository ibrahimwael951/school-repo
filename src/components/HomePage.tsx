import React from "react";
import Image from "next/image";
import Links from "next/link";

//data
import Books from "../data/books.json";


const main = () => {
  return (
    <section className="bg-white dark:bg-black">
      {/* ----------------- start page--------------- */}
      {/* <div id="home ">
        <div className="  flex flex-col justify-center items-center h-screen w-full max-w-6xl  m-auto ">
          <h1 className="text-5xl lg:text-8xl mb-10 text-center w-full ">
            School Community
          </h1>
          <p className="flex justify-center lg:text-2xl ">
            Make your study easy
          </p>
          <button className=' bg-white text-3xl mt-10 py-2  px-10 lg:hover:scale-110 active:scale-75 duration-150'>Shop</button>
        </div>
        <Image
          className="object-cover absolute -z-20 top-0 left-0 w-full h-screen bg-img select-none"
          src="/BG/home.webp"
          alt="homepage"
          width={3000}
          height={3000}
        />
      </div> */}

      {/* ------------------product show -------------------- */}
      <div
        id="books"
        className="h-fit  flex  flex-col items-center p-10 justify-between  "
      >
        <h1 className="text-5xl my-10  "> Books </h1>

        <div className="  flex flex-col flex-wrap gap-10 justify-center items-center w-full p-10 md:flex-row   ">
          {Books.homepage.map((book, index) => (
            <Links key={index} href={book.Link}>
              <div className="  flex flex-col items-center justify-center cursor-pointer lg:hover:scale-95 group">
                <Image
                  className="w-72 h-[450px] object-cover rounded-2xl select-none shadow-2xl group-hover:shadow-none"
                  src={book.src}
                  alt={book.title}
                  width={3000}
                  height={3000}
                />
                <h1 className="text-2xl">{book.title}</h1>
              </div>
            </Links>
          ))}
        </div>
      </div>

      {/* --------------------------- join our comunity ----------------- */}

      <div className="flex flex-col lg:flex-row-reverse gap-10 items-center justify-center lg:justify-evenly h-screen w-full my-20">
        <Image
          className="object-cover w-5/6 lg:w-2/4 max-w-2xl rounded-xl select-none "
          src="/BG/join_our_comunity.webp"
          alt="join our comunity"
          width={3000}
          height={3000}
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="  text-3xl lg:text-6xl mb-10 px-6">
            Join our community
          </h1>
          <p className="  lg:text-1xl">for more details and updates </p>
          <a href="https://www.instagram.com/">
            <button className="  lg:text-3xl text-white bg-purple-600 text-3xl mt-10 py-2  px-10 lg:hover:scale-110 active:scale-90 duration-150">
              follow
            </button>
          </a>
        </div>
      </div>

      {/* ------------------------ about us --------------------- */}

      <div className="flex justify-center flex-col md:flex-row items-center gap-10 ">
        <div className="p-10 w-full md:w-96 lg:w-5/12 max-w-2xl">
          <Image
            className="object-cover w-full rounded-2xl -z-10 select-none"
            src="/BG/about-web.webp"
            alt="about-us"
            width={3000}
            height={3000}
          />
          <h1 className="text-2xl">About our website </h1>
          <p className="mb-5">We make the website simple for all people</p>

          <Links
            href="/about"
            className="border-2 border-purple-500 rounded-lg p-2 hover:bg-purple-500 hover:text-white active:scale-90  duration-0  lg:duration-100"
          >
            Learn More
          </Links>
        </div>

        <div className="  p-10 w-full  md:w-96 lg:w-5/12 max-w-2xl ">
          <Image
            className="w-full rounded-2xl select-none"
            src="/BG/about-us.jpeg"
            alt="about-us"
            width={3000}
            height={3000}
          />
          <h1 className="text-2xl">The Team </h1>
          <p className="mb-5"> About our team and we work as impossible </p>

          <Links
            href="/about-team"
            className="border-2 border-purple-500 rounded-lg p-2 hover:bg-purple-500 hover:text-white active:scale-90  duration-0  lg:duration-100"
          >
            Learn More
          </Links>
        </div>
      </div>

      {/* ----------------------- coming soon ------------------- */}

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center lg:justify-evenly h-screen w-full my-20">
        <Image
          className="object-cover w-5/6 lg:w-2/4 max-w-2xl rounded-xl select-none"
          src="/BG/soon.jpg"
          alt="soon"
          width={3000}
          height={3000}
        />
        <div className=" flex flex-col justify-center items-center     ">
          <h1 className="   text-5xl lg:text-6xl mb-10">Whats Next ?</h1>
          <p className="   lg:text-1xl">
            We will make an educational platform for school
          </p>

          <Links
            className="   rounded-xl bg-purple-600 text-white p-2  lg:text-3xl  mt-10 py-2  px-10 lg:hover:scale-110 active:scale-75 duration-150"
            href="/Sustainability"
          >
            more details
          </Links>
        </div>
      </div>
    </section>
  )
}

export default main

 