import React from 'react'


import Header from '@/component/header'
import History from '@/component/books/History/History'
import Footer from '@/component/footer'
import ScrollToTopButton from '@/component/scrollbutton'
function page() {
  return (
  <>
  <Header/>
  <History/>
  <Footer/>
  <ScrollToTopButton/>
  </>
  )
}

export default page
