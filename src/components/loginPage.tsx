import React from "react";
import Image from "next/image";

const login = () => {
  return (
    <section id="login" className="">
      <div className="relative overflow-hidden w-full   h-[50vh]  flex justify-center items-center">
        <Image 
          className="object-cover absolute top-0  h-full w-full -z-10"
          src="/BG/contact-imgs.jpg"
          alt="image"
          width={1000}
          height={1000}
        />

        
          <h1 className="text-4xl text-white lg:text-8xl">Get in Touch</h1>
      
      </div>

      <div className="flex flex-col   items-center h-fit py-20 md:mb-0 md:py-0  md:h-screen md:justify-between md:flex-row-reverse ">
        {/* login form */}

        <form className="w-full px-6   flex flex-col   justify-center  lg:w-2/4 lg:h-full lg:pr-20  ">
          <label htmlFor="" className="text-2xl">
            Name
          </label>
          <input placeholder="type your name" type="text" required />

          <label htmlFor="" className="text-2xl">
            Email
          </label>
          <input placeholder="type your email" type="email" required />

          <label htmlFor="" className="text-2xl">
            password
          </label>
          <input placeholder=" type your password" type="password" required />

          <label htmlFor="" className="text-2xl">
            Repeat
          </label>
          <input placeholder="Repeat password" type="password" required />

          <button
            className=" text-purple-500 border-purple-500 border-2 text-2xl  p-2 w-fit hover:bg-purple-500 hover:text-white hover:scale-110    active:scale-95"
            type="submit"
          >
            submit
          </button>
        </form>

        {/* information side */}
        <div className="flex flex-col items-center justify-center px-10 lg:w-2/5  lg:h-full ">
          {/* <img  className='h-2/3  max-w-xs mt-20 md:mt-0 ' src=" https://images.pexels.com/photos/8389719/pexels-photo-8389719.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
          <video
            className="h-2/3  max-w-xs mt-20 md:mt-0 rounded-xl "
            src="/Images/contant-vdio.mp4"
            muted
            loop
            autoPlay
          ></video>
          <h1 className="lg:text-xl ">we want u happy</h1>
        </div>
      </div>
    </section>
  );
};

export default login;
