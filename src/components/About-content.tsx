import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <section id="about" className=" text-center h-fit    ">
      <p className="max-w-2xl m-auto text-center text-2xl px-5 flex justify-center items-center  py-10   font-medium">
        This project aims to meet the needs of the reader and learner by
        combining diverse books and accurate sources to combine ease and
        education.
      </p>

      <div className="  h-fit  p-10  mb-20 flex flex-col-reverse items-center  justify-center gap-20 md:flex-row ">
        <div className="max-w-lg text-start">
          <h1 className="text-2xl md:text-3xl lg:text-5xl ">
            Our commitment to innovation and excellence.
          </h1>
          <p className=" my-7 lg:text-xl">
            In this project, we devote ourselves to helping everyone who wants
            to learn and explore new fields، Every piece of information is
            carefully reviewed ensuring unique and distinctive information، We
            strive to provide our customers with books and information that they
            can feel satisfied when reading.
          </p>
        </div>

        <Image
          className="rounded-xl w-full md:w-2/5"
          src="/Images/love-book.webp"
          alt="img"
          width={3000}
          height={3000}
        />
      </div>

      <div className="h-fit  p-10 flex flex-col-reverse items-center justify-center gap-20 md:flex-row-reverse ">
        <div className="max-w-lg text-start ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl ">Sustainability</h1>
          <p className="my-7 lg:text-xl">
            We are committed to providing a collection of books that combine
            high quality with distinctive cultural and cognitive content. We
            always strive to provide books that are worth reading and add value
            to your personal libraries, while ensuring an enjoyable and
            inspiring experience for every reader.
          </p>
        </div>
        <Image
          className="rounded-xl w-full md:w-2/5"
          src="/Images/hand-with-book.jpeg"
          alt="img"
          width={3000}
          height={3000}
        />
      </div>
    </section>
  );
};

export default about;
