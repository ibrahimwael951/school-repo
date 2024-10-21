import React from 'react'


import Header from '@/component/header'
import Islamic from '@/component/books/Islamic/Islamic'
import Footer from '@/component/footer'
import ScrollToTopButton from '@/component/scrollbutton'
function page() {
  return (
  <>
  <Header/>
  <Islamic/>
  <Footer/>
  <ScrollToTopButton/>
  </>
  )
}

export default page
