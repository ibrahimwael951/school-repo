import React from "react";
import Link from "next/link";
//react-icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const footer = () => {
  return (
    <div>
      <div className="border-black border-b-2 w-2/3 m-auto my-20"></div>

      <section
        id="footer"
        className="mb-20 h-72 flex flex-col gap-20  items-center w-full   md:px-32 md:flex-row md:justify-between 2xl:justify-evenly"
      >
        <div className="flex flex-col  ">
          <h1 className="  text-4xl mb-10 ">shop </h1>
          <div className="flex w-52 justify-between   ">
            <a href=" ">
              <FaFacebook size={40} className=" w-10 lg:hover:scale-125 " />
            </a>
            <a href="">
              <FaInstagram size={40} className=" w-10 lg:hover:scale-125 " />
            </a>
            <a href="">
              <FaWhatsapp size={40} className=" w-10 lg:hover:scale-125 " />
            </a>
          </div>
        </div>

        <div className=" flex flex-col gap-4 text-1xl   ">
          <Link
            href="/contact"
            className="  hover:text-purple-400  duration-150"
          >
            Contact
          </Link>
          <Link href="/" className="  hover:text-purple-400  duration-150">
            Returns
          </Link>
          <Link href="/" className="  hover:text-purple-400  duration-150">
            Payment & Delivery
          </Link>
        </div>
      </section>
    </div>
  );
};

export default footer;
