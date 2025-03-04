import Image from "next/image";
import Link from "next/link";
import booksData from "@/data/books.json";

export default function BookDetails({
  params,
}: {
  params: { id: string; category: string };
}) {
  const book = booksData.books.find((b) => b.id.toString() === params.id);

  if (!book)
    return (
      <div className="h-screen w-full flex flex-col gap-5 justify-center items-center">
        <h1 className="text-purple-500 dark:text-purple-500 text-6xl">404</h1>
        <p className="text-5xl">Book not found!</p>
        <Link
          href={`/${params.category}`}
          className="my-10 text-white bg-purple-600 hover:bg-purple-500 rounded-xl py-2 px-4 duration-200"
        >
          goo back
        </Link>
      </div>
    );

  // Get books from the same category (excluding the current book)
  const suggestedBooks = booksData.books
    .filter(
      (b) => b.category === book.category && b.id.toString() !== params.id
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className="w-full py-20 px-10">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-evenly items-center text-center">
        <Image
          className="object-cover w-[300px] h-[450px] rounded-lg border-2 border-purple-600 hover:ring-purple-600 hover:ring-4 duration-200 "
          src={book.src}
          alt={book.title}
          width={1000}
          height={1000}
        />
        <div className="md:w-2/4">
          <h1 className="text-4xl font-bold mt-4">{book.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{book.description}</p>
          <p className="text-xl font-semibold mt-4">{book.price} Egy</p>
          <div className="flex gap-10 justify-center items-center ">
            <button className="select-none my-10 text-white bg-purple-600 hover:bg-purple-500  py-2 px-4 duration-200">
              add to card
            </button>
            <button className="select-none my-10 text-white bg-neutral-600 hover:bg-neutral-500 py-2 px-4 duration-200">
              add to whishList
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Books Section */}
      {suggestedBooks.length > 0 && (
        <div className="mt-10 w-full mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            You May Also Like
          </h2>
          <div className=" mt-32 flex-wrap h-fit flex justify-center items-center gap-y-28 gap-x-20  ">
            {suggestedBooks.map((suggestedBook) => (
              <Link
                key={suggestedBook.id}
                href={`/${suggestedBook.category}/${suggestedBook.id}`}
                className="flex flex-col w-[280px] h-[400px] items-center justify-center cursor-pointer lg:hover:scale-105 duration-200"
              >
                <Image
                  className="object-cover h-full w-full rounded-2xl duration-200 border-2 border-purple-600 hover:ring-purple-600 hover:ring-4"
                  src={suggestedBook.src}
                  alt={suggestedBook.title}
                  width={1000}
                  height={1000}
                />
                <h3 className="text-2xl font-semibold text-center mt-2 w-[90%] break-words">
                  {suggestedBook.title}
                </h3>
                <p className="text-lg text-gray-700">
                  {suggestedBook.price} Egy
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
