import React from 'react'

import Header from '@/component/header'
import Science from '@/component/books/science/science'
import Footer from '@/component/footer'
import ScrollToTopButton from '@/component/scrollbutton'
function page() {
  return (
  <>
  <Header/>
  <Science/>
  <Footer/>
  <ScrollToTopButton/>
  </>
  )
}

export default page
