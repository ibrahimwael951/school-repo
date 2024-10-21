import React from 'react'

import About from '@/component/about'
import Header from '@/component/header'
import Footer from '@/component/footer'
import ScrollToTopButton from '@/component/scrollbutton';
function about() {
  return (
    <>
    <Header/>
    <About/>
    <Footer/>
    <ScrollToTopButton/>
    </>
  )
}

export default about
