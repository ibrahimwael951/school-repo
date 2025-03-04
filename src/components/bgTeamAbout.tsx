import Image from "next/image";

const bgTeamAbout = () => {
  return (
    <div className="relative overflow-hidden w-full  h-[70vh]  flex justify-center items-center  ">
      <Image
        className="object-cover object-top w-full h-full absolute top-0 z-10 "
        src="/BG/team.jpg"
        alt="img"
        width={3000}
        height={3000}
      />
      <h1 className="text-4xl text-white lg:text-8xl z-10">Our Team </h1>
    </div>
  );
};

export default bgTeamAbout;
