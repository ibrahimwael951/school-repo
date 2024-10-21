 import React  from "react";
 
import Header from "@/component/header";
import  Main  from "@/component/main";
import  Footer  from "@/component/footer";
import ScrollToTopButton from "@/component/scrollbutton";
 
export default function Home() {
  return (
     <>
      <Header/>
      <Main/>
   <Footer/>
   <ScrollToTopButton/>

   
     </>
  );
}
