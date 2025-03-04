import React from "react";
import Image from "next/image";
import Link from "next/link";

//data
import scienceBooks from "@/data/books.json";

function page() {
  return (
    <section className="w-full p-20 ">
      <h1 className="text-5xl  w-full text-center my-20"> Science</h1>

      {/* content */}
      <div className="flex-wrap h-fit flex justify-center items-center gap-y-28 gap-x-20  ">
        {scienceBooks.books
          .filter((book) => book.category === "science")
          .map((book, index) => (
            <Link
              href={`/books/science/${book.id}`}
              key={index}
              className="flex flex-col w-[280px] h-[400px] items-center justify-center cursor-pointer lg:hover:scale-95 duration-200"
            >
              <Image
                className="object-cover h-full w-full rounded-2xl hover:ring-purple-600 hover:ring-4 duration-200"
                src={book.src}
                alt={book.title}
                width={1000}
                height={1000}
              />
              <h1 className="text-2xl font-semibold text-center mt-2 w-[90%] break-words">
                {book.title}
              </h1>
              <p>{book.price} Egy</p>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default page;
