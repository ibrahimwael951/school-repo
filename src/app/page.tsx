import React from "react";

//components
import Main from "@/components/Home-content";
import Information from "@/components/information";
import Hero from "@/components/Hero-Home-Page";

export default function Home() {
  return (
    <>
      <Hero/>
      <Information/>
      <Main />
    </>
  );
}
