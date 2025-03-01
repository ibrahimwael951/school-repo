"use client";
import React, { useState } from "react";
import Links from "next/link";
import Image from "next/image";

//react-icons
import { CiMenuFries } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

//component 
import { ModeToggle } from "@/components/theme-toggle"

//data
import NavLinks from "@/data/Links.json";
const header = () => {
  // for side bar visible
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // for setting visible
  const [isSettingVisible, setIsSettingVisible] = useState(false);
  const toggleSetting = () => {
    setIsSettingVisible(!isSettingVisible);
  };

  // for Appearance Visible
  const [isAppearanceVisible, sitAppearanceVisible] = useState(false);
  const toggleAppearance = () => {
    sitAppearanceVisible(!isAppearanceVisible);
  };

  // for Appearance Visible
  const [isLanguageVisible, sitLanguageVisible] = useState(false);
  const toggleLanguage = () => {
    sitLanguageVisible(!isLanguageVisible);
  };

  return (
    <section className=" select-none dark:bg-black bg-white fixed w-full z-30  ">
      <header className=" overflow-hidden   flex justify-between m-auto   p-2  max-w-6xl">
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
        {NavLinks.navbar.pc.map((link , index) => (
          <Links
            key={index}
            className="hover text-xl m-2  rounded-2xl ml-2 cursor-pointer "
            href={link.href}
          >
            {link.title}
          </Links>

        ))}

          <ModeToggle/>
        </div>

        {/* ---------toggle Sidebar----------- */}
        <div className="  relative right-0 flex  items-center lg:absolute lg:-right-80">
          <button
           className="font-extrabold"
           onClick={toggleSidebar}
          >
            <CiMenuFries size={35}  />
          </button>
        </div>

        {/* ------------ side bar ----------- */}
        <div
          className={`flex flex-col   fixed top-0 right-0 h-full w-72  bg-white  transform ${
            isSidebarVisible ? "translate-x-0" : "translate-x-full"
          }  lg:translate-x-full  text-xl  transition-transform duration-300`}
        >
          <button 
            className="font-extrabold"
            onClick={toggleSidebar}>
           
            <IoExitOutline size={35}/>
          </button>

          {/* --------- profile section --------- */}
          <div className="flex items-center gap-5  bg-orange-600  p-5 ">
             
            <CgProfile  size={60}/>

            <div className="flex flex-col">
              <h1> </h1>
              <Links
                className="text-2xl"
                onClick={toggleSidebar}
                href="/contact"
              >
              
                Login
              </Links>
            </div>
          </div>

          {/* --------- sidebar links --------- */}
          <div>
            <ul>
              <Links onClick={toggleSidebar} href="/about">
                <li className=" text-xl p-2 hover:bg-gray-500 hover:text-white cursor-pointer">
                  About
                </li>
              </Links>
              <Links onClick={toggleSidebar} href="/contact">
                <li className=" text-xl p-2 hover:bg-gray-500 hover:text-white cursor-pointer">
                  Contact
                </li>
              </Links>
              {/* button setting */}
              <li
                onClick={toggleSetting}
                className={` flex  justify-between text-xl p-2 hover:bg-gray-500 hover:text-white cursor-pointer ${
                  isSettingVisible ? "text-purple-400 " : " text-black "
                } `}
              >
                Setting
                <span
                  className={` text-2xl duration-200  rotate-90  ${
                    isSettingVisible ? "-rotate-90" : "rotate-90"
                  }`}
                >
                  &gt;
                </span>
              </li>
            </ul>

            {/* setting side */}

            <ul
              className={` flex flex-col h-0  ${
                isSettingVisible ? "block" : "hidden"
              }    `}
            >
              <li
                onClick={toggleAppearance}
                className=" flex justify-between text-lg px-6 py-1 hover:bg-gray-500 hover:text-white cursor-pointer"
              >
                Appearance
                <span
                  className={` text-2xl duration-200  rotate-90  ${
                    isAppearanceVisible ? "-rotate-90" : "rotate-90"
                  }`}
                >
                  &gt;
                </span>
              </li>

              {/* appearance side  */}
              <div
                className={` text-base  ${
                  isAppearanceVisible ? "block" : "hidden"
                }  `}
              >
                <label className="block pl-6 ">
                  <input type="radio" name="options" value="value1" /> Dark Mode
                </label>

                <label className="block pl-6 ">
                  <input type="radio" name="options" value="value2" /> Light
                  Mode
                </label>

                <label className="block pl-6 ">
                  <input type="radio" name="options" value="value3" /> Default
                  System
                </label>
              </div>

              {/* button language  */}
              <li
                onClick={toggleLanguage}
                className="flex justify-between  text-lg px-6 py-1 hover:bg-gray-500 hover:text-white cursor-pointer"
              >
                Language
                <span
                  className={` text-2xl duration-200  rotate-90  ${
                    isLanguageVisible ? "-rotate-90" : "rotate-90"
                  }`}
                >
                  &gt;
                </span>
              </li>

              {/* language side */}
              <div
                className={` text-base  ${
                  isLanguageVisible ? "block" : "hidden"
                }  `}
              >
                <label className="block pl-6 ">
                  <input type="radio" name="options" value="value1" /> Arabic
                </label>

                <label className="block pl-6 ">
                  <input type="radio" name="options" value="value2" />
                  English
                </label>
              </div>
            </ul>
          </div>
        </div>
        {/* ----------end of sidebar----------- */}
      </header>
    </section>
  );
};

export default header;
