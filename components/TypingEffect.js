import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const TypingText = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  white-space: nowrap;
  border-right: 3px solid #fff;
  animation: ${blink} 0.7s step-end infinite;
  @media screen and (min-width: 750px) {
    font-size: 2rem;
  }
`

const roles = ['> Sr. Front-end', '> Jr. Back-end', '> Jr. Full-stack']

function TypingEffect() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (text.length > 1) {
          setText(text.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return <TypingText>{text}</TypingText>
}

export default TypingEffect
