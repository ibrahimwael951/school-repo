import React from "react";

//components
import Main from "@/components/HomePage";
import ScrollToTopButton from "@/components/scrollbutton";
import Hero from "@/components/Hero-Home-Page";

export default function Home() {
  return (
    <>
      <Hero/>
      <Main />
      <ScrollToTopButton />
    </>
  );
}
