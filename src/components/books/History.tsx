import React from "react";
import Image from "next/image";
//data
import HistoryBooks from "@/data/books.json";
const History = () => {
  return (
    <section className="w-full p-20 ">
      <h1 className="text-5xl  w-full text-center my-20"> History</h1>

      {/* content */}
      <div className="flex-wrap h-fit flex justify-center items-center gap-6">
  {HistoryBooks.books
    .filter((book) => book.category === "History")  
    .map((book, index) => (
      <div 
        key={index}
        className="flex flex-col items-center justify-center cursor-pointer lg:hover:scale-105 duration-200"
      >
        <Image 
          className="object-cover w-[280px] h-[400px] rounded-2xl duration-200"
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

export default History;
