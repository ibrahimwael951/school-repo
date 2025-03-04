import React from "react";
import Image from "next/image";

//data
import TeamMeber from "@/data/Team.json";

//react-icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const aboutTeam = () => {
  return (
    <section id="about" className=" text-center h-fit ">
      <div className="max-w-2xl m-auto text-center text-6xl px-5 flex justify-center items-center  my-20   font-medium">
        Team Members
      </div>

      <div className=" min-h-20 h-fit w-full flex  flex-wrap justify-center items-center gap-20 my-0 mx-auto ">
        {TeamMeber.map((member, index) => (
          <div
            key={index}
            className="min-h-20 rounded-2xl  flex flex-col gap-3 shadow-2xl lg:shadow-none lg:hover:shadow-2xl p-6"
          >
            <Image
              className="rounded-full w-60 m-auto"
              src={member.src}
              alt={member.Name}
              width={500}
              height={500}
            />
            <p className="m-0 text-3xl text-purple-600">{member.Name}</p>
            <p className="m-0 text-xl">{member.job}</p>
            <div className="flex  justify-center gap-4  ">
              {member.FaceBook && (
                <a target="_blank" href={member.FaceBook}>
                  <FaFacebook />
                </a>
              )}
              {member.Instagram && (
                <a target="_blank" href={member.Instagram}>
                  <FaInstagram />
                </a>
              )}
              {member.Portfolio && (
                <a target="_blank" href={member.Portfolio}>
                  <CgWebsite />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default aboutTeam;
