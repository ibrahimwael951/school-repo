import React from "react";
import Link from "next/link";
import Image from "next/image";

// data
import booksData from "@/data/books.json";

const Page = ({ params }: { params: { category: string } }) => {
  const filteredBooks = booksData.books.filter(
    (book) => book.category === params.category
  );

  return (
    <section className="w-full ">
      {filteredBooks.length === 0 ? (
        <div className="h-screen  w-full flex flex-col gap-5 justify-center items-center">
        <h1 className="text-purple-500 dark:text-purple-500 text-6xl">404</h1>
        <p className="text-5xl">
        we didn't find any books in this category
        </p>
        <Link
          href={`/#books`}
          className="my-10 text-white bg-purple-600 hover:bg-purple-500 rounded-xl py-2 px-4 duration-200"
        >
          Go Back
        </Link>
      </div>
      ) : (
        <div className="p-20">
    <h1 className="text-5xl w-full text-center my-20">{params.category}</h1>
        <div className="flex-wrap h-fit flex justify-center items-center gap-y-28 gap-x-20">
          {filteredBooks.map((book) => (
            <Link
              key={book.id}
              href={`/books/${params.category}/${book.id}`}
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
        </div>
      )}
    </section>
  );
};

export default Page;
