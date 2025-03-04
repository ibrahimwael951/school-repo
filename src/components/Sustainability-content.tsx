import React from "react";
import Image from "next/image";

const Sustainability = () => {
  return (
    <div>
      <section id="about" className=" text-center h-fit    ">
      

        <p className="max-w-2xl m-auto text-center text-2xl px-5 flex justify-center items-center  my-10   font-medium">
          We are working to make the site an educational platform from the
          school and a bookstore
        </p>

        <div className="img-apear h-fit  p-10  mb-20 flex flex-col-reverse items-center  justify-center gap-20 md:flex-row ">
          <div className="max-w-lg text-start">
            <h1 className="text-2xl md:text-3xl lg:text-5xl ">Our Process</h1>
            <p className=" my-7 lg:text-xl font-extralight">
              We are still developing a database to make the site an educational
              platform that is under the supervision of the school, and teachers
              can download an explanation on the platform, challenges and
              competitions, and make the site a social communication between
              students and teachers and make many activities on the site
            </p>
          </div>

          <Image
            className="rounded-xl w-full md:w-2/5"
            src="/Images/girl-with-laptop.webp"
            alt="girl with laptop"
            width={3000}
            height={3000}
          />
        </div>

        <div className="h-fit  p-10 flex flex-col-reverse items-center justify-center gap-20 md:flex-row-reverse ">
          <div className=" img-apear max-w-lg text-start ">
            <h1 className="text-2xl md:text-3xl lg:text-5xl ">Process</h1>
            <p className="my-7 lg:text-xl font-extralight">
              We want to develop the site so that it is simplified and easy to
              use for each user, and add many features to the site, and we
              aspire to make the site fast in loading and in a simplified and
              modern way so that it affects the student positively
            </p>
          </div>

          <video
            className=" rounded-xl w-full md:w-2/5 bg-black"
            src="/Images/team.mp4"
            muted
            loop
            autoPlay
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
