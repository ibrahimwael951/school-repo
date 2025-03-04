"use client";
import React, { useState } from "react";
import Links from "next/link";
import Image from "next/image";

//react-icons
import { CiMenuFries } from "react-icons/ci";
import { IoExitOutline, IoPersonOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GiAstronautHelmet } from "react-icons/gi";

//component
import { ModeToggle } from "@/components/theme-toggle";

//data
import NavLinks from "@/data/Links.json";
const header = () => {
  // for side bar visible
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const sideBar = [
    {
      title: "Home",
      href: "/#home",
      icon: IoHomeOutline,
    },
    {
      title: "Books",
      href: "/#books",
      icon: PiBooks,
    },
    {
      title: "About",
      href: "/about",
      icon: IoIosInformationCircleOutline,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: IoPersonOutline ,
    },
    {
      title: "Login",
      href: "/login",
      icon: GiAstronautHelmet ,
    },
  ];
  return (
    <section className="select-none fixed w-full z-30 bg-gray-100 dark:bg-neutral-900  duration-100 ">
      <div className=" overflow-hidden   flex justify-between m-auto   p-2  max-w-6xl">
        {/* -------Logo----------- */}
        <div className="  flex  items-center ">
          <Image
            className="w-10 mr-1"
            src="/Logo.png"
            alt="logo"
            width={500}
            height={500}
          />
          <Links className="text-2xl font-serif" href="/">
            school
          </Links>
        </div>

        {/* buttons for windows */}
        <div className="absolute -right-80 flex items-center lg:relative lg:right-0">
          {NavLinks.navbar.pc.map((link, index) => (
            <Links
              key={index}
              className="hover text-xl m-2  rounded-2xl ml-2 cursor-pointer "
              href={link.href}
            >
              {link.title}
            </Links>
          ))}

          <ModeToggle />
        </div>

        {/* ---------toggle Sidebar----------- */}
        <div className="  relative right-0 flex  items-center lg:absolute lg:-right-80">
          <button className="font-extrabold" onClick={toggleSidebar}>
            <CiMenuFries size={35} />
          </button>
        </div>

        {/* ------------ side bar ----------- */}
        <div
          className={`fixed top-0 left-0 w-full h-screen z-0  lg:translate-x-full bg-black bg-opacity-65 duration-0
          ${isSidebarVisible ? "inline" : " hidden"}
          `}
          onClick={toggleSidebar}
        />
        <div
          className={`flex flex-col   fixed top-0 right-0 h-full w-72  bg-gray-100 dark:bg-neutral-900  transform ${
            isSidebarVisible ? "translate-x-0" : "translate-x-full"
          }  lg:translate-x-full  text-xl  transition-transform duration-300`}
        >
          <div className="flex justify-between items-center">
            <button className="font-extrabold" onClick={toggleSidebar}>
              <IoExitOutline size={35} />
            </button>
            <ModeToggle />
          </div>

          <div className="flex justify-center items-center gap-5 bg-gray-400 dark:bg-neutral-700  p-5 ">
            <Image
              className="w-10"
              src="/Logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h1 className="text-white">School</h1>
          </div>
          <div className="   flex flex-col gap-5 pt-5 px-5 ">
            {sideBar.map((link, index) => (
              <Links
                key={index}
                className="text-2xl m-2 w-full hover:pl-4 cursor-pointer text-black dark:text-white duration-200 flex items-center gap-4 hover:text-purple-500 dark:hover:text-purple-500 group"
                href={link.href}
                onClick={toggleSidebar}
              >
                {React.createElement(link.icon, {
                  size: 50,
                  className: "group-hover:text-purple-500 text-black dark:text-white w-8",
                })}
                
                {link.title}
              </Links>
            ))}
          </div>

          {/* --------- sidebar links --------- */}
          <div></div>
        </div>
        {/* ----------end of sidebar----------- */}
      </div>
    </section>
  );
};

export default header;
