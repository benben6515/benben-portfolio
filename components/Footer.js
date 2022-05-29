import React from 'react'
import { FooterWrapper } from '../shared/styles'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <FooterWrapper>
      <div>made by <a href="https://github.com/benben6515">benben</a> &copy; {year}, background/Unsplash</div>
    </FooterWrapper>
  )
}

export default Footer
