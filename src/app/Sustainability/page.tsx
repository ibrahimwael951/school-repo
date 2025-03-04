import React from "react";

import Sustainability from "@/components/Sustainability-content";
import ScrollToTopButton from "@/components/scrollbutton";
import Bg from "@/components/bgSustainability";

function page() {
  return (
    <>
      <Bg />
      <Sustainability />
      <ScrollToTopButton />
    </>
  );
}

export default page;
