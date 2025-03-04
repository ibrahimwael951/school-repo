import Image from "next/image"

const bgAbout = () => {
  return (
    <div className=" relative overflow-hidden w-full  h-96  flex justify-center items-center  ">
        <Image
          className="object-cover w-full h-full absolute top-0 -z-10 "
          src="/BG/about.jpg"
          alt="img"
          width={3000}
          height={3000}
        />
        <h1 className="text-4xl text-white lg:text-8xl">Our Community </h1>
      </div>
  )
}

export default bgAbout
