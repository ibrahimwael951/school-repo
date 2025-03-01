import React from "react";
import Image from "next/image";
//data
import islamicBooks from "@/data/books.json";

const Islamic = () => {
  return (
    <section className="w-full p-20 ">
      <h1 className="text-5xl  w-full text-center my-20"> Islamic</h1>

      {/* content */}
      <div className="flex-wrap h-fit flex justify-center items-center gap-6">
  {islamicBooks.books
    .filter((book) => book.category === "Islamic")  
    .map((book, index) => (
      <div 
        key={index}
        className="flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105"
      >
        <Image 
          className="object-cover w-[280px] h-[400px] rounded-2xl"
          src={book.src} 
          alt={book.title} 
          width={1000}
          height={1000}
        />
        <h1 className="text-2xl"> 
          {book.title}  
        </h1>
        <p>{book.price}</p>
      </div>
    ))}
</div>
    </section>
  );
};

export default Islamic;
