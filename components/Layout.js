import React from 'react'

import { Wrapper } from '../shared/styles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout({ children}) {
  return (
    <Wrapper>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
