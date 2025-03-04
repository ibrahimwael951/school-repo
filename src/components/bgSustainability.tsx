import Image from "next/image";

const bgSustainability = () => {
  return (
    <section className=" relative overflow-hidden  w-full  h-96  flex justify-center items-center  ">
      <Image
        className="object-cover w-full h-full absolute top-0 -z-10 "
        src="/BG/Sustainability.jpg"
        alt="img"
        width={3000}
        height={3000}
      />
      <h1 className="text-4xl  text-white lg:text-8xl ">Updates Coming Soon</h1>
    </section>
  );
};

export default bgSustainability;
