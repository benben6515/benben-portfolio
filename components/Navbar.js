import React from 'react'
import Link from 'next/link'

import benben from '../public/benben.svg'
import { StyledNavbar } from '../shared/styles'

function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">
        <img src={benben.src} width="30px"/>
      </Link>
      <div className="buttons">
        <Link href="/">Home page</Link>
        <Link href="/tw">中文版首頁</Link>
        <Link href="/projects">Portfolio</Link>
        <a href="/resume/en" target="_blank">Resume</a>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
