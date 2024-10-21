import React from 'react'

import Header from '@/component/header'
import Philosophy from '@/component/books/Philosophy/Philosophy'
import Footer from '@/component/footer'
import ScrollToTopButton from '@/component/scrollbutton'
function page() {
  return (
  <>
  <Header/>
  <Philosophy/>
  <Footer/>
  <ScrollToTopButton/>
  </>
  )
}

export default page
