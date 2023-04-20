import { injectGlobal, keyframes } from '@emotion/css'
import styled from '@emotion/styled'

const font = 'https://fonts.gstatic.com/s/reeniebeanie/v16/z7NSdR76eDkaJKZJFkkjuvWxXPq1q6Gjb_0.woff2'

injectGlobal`
  @font-face {
    font-family: 'Reenie Beanie';
    src: url(${font}) format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: '微軟正黑體';
    background: url('https://images.unsplash.com/photo-1626958390898-162d3577f293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #56f;
    position: relative;
    transition: .3s;
  }
  a::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #4ac, #4fc);
    transition: .4s;
  }
  a:hover::after {
    left: 0;
    width: 100%;
    height: 1px;
  }
  a:visited {
    color: #56f;
  }
`

// keyframes --------------------------
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const typing = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 22rem;
  }
  100% {
    width: 22rem;
  }
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const glow = keyframes`
from {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e620e3, 0 0 40px #e620e3, 0 0 50px #e620e3, 0 0 60px #e620e3, 0 0 70px #e620e3;
}
to {
  text-shadow: 0 0 20px #fff, 0 0 30px #ff6df6, 0 0 40px #ff6df6, 0 0 50px #ff6df6, 0 0 60px #ff6df6, 0 0 70px #ff6df6, 0 0 80px #ff6df6;
}
`

// styled components ------------------------------

// navbar
export const StyledNavbar = styled.nav`
  width: 100%;
  min-height: 2.5rem;
  display: grid;
  grid-template-columns: 6rem auto;
  place-items: center center;
  position: fixed;
  top: 0;
  left: 0;
  background: #222;
  z-index: 5;
  overflow: hidden;
  img {
    cursor: pointer;
  }
  .buttons a {
    padding: 1rem 0.5rem;
    height: 2.5rem;
    color: #eee;
    transition: 0.4s ease;
    &:hover {
      background: #eee;
      color: #333;
    }
  }
  h2 {
    color: #fff;
  }
`

// footer
export const FooterWrapper = styled.footer`
  position: relative;
  bottom: 0;
  color: #eee;
`

// index
export const Wrapper = styled.div`
  margin-top: 2.5rem;
  min-height: calc(100vh - 2.5rem);
  display: grid;
  place-items: center center;
  & > h2,
  & > p {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 0.25rem 0.5rem;
  }
`

export const SectionWrapper = styled.div`
  display: grid;
  place-items: center center;
  min-height: calc(100vh - 2rem);
  gap: 1rem;
  margin-top: 1rem;
  br {
    margin: 2rem 0;
  }
  & > h2,
  & > p {
    background: rgba(255, 255, 255, 0.3);
    padding: 0.25rem 0.5rem;
    transition: 0.3s 0.15s;
    font-weight: bold;
  }
  &:hover .btn {
    &::before {
      content: '';
      position: absolute;
      width: 30px;
      height: 500%;
      background: #4ac;
      animation: ${rotate} 2s linear infinite;
      animation-delay: ${({ animationDelay }) => animationDelay};
    }
  }
  .btn:hover::before {
    width: 120%;
  }
`

export const HomepageTitle = styled.h1`
  color: #fff;
  font-size: 4.25rem;
  font-family: 'Reenie Beanie', sans-serif;
  span {
    color: #fff;
    background: linear(#fff, #333);
    text-align: center;
    animation: ${glow} 1s ease-in-out infinite alternate;
  }
`

export const HomepageTitleTyping = styled.h1`
  color: #fff;
  width: 0;
  animation: ${typing} 4s steps(25) infinite, ${blink} 0.5s step-end infinite alternate;
  animation-delay: 1s;
  border-right: 3px solid;
  white-space: nowrap;
  overflow: hidden;
`

export const Card = styled.div`
  height: 250px;
  width: 320px;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.3), inset 1px 1px 2px rgba(255, 255, 255, 0.2), inset -1px -1px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 0 0 1rem;
  transform: scale(0.9) perspective(600px) rotateX(15deg);
  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.05) perspective(600px) rotateX(0deg);
  }
  .img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    overflow: hidden;
    background: linear-gradient(-45deg, #fff, #688);
    border-radius: 50%;
    box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.3), 0 0 10px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 750px) {
    width: 500px;
    height: 300px;
    gap: 3rem;
    .img {
      width: 150px;
      height: 150px;
    }
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  h3 {
    font-size: 1.5rem;
    border-bottom: 1px solid #333;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
  h3 > span {
    font-size: 1rem;
    font-weight: 500;
  }
  p {
    display: inline-block;
    display: flex;
    place-items: center start;
    gap: 0.25rem;
  }
  @media screen and (min-width: 750px) {
    p {
      gap: 0.5rem;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 568px) {
    flex-direction: column;
    gap: 0rem;
  }
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.7rem 1rem;
  margin: 4rem auto 3rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  -webkit-box-reflect: below 3px linear-gradient(transparent 30%, #000 100%);
  @media screen and (max-width: 568px) {
    max-width: 8rem;
  }
  span {
    position: relative;
    color: rgba(255, 255, 255, 0.6);
    z-index: 2;
  }
  &:hover {
    box-shadow: 0 0 10px #4ac, 0 0 20px #4ac, 0 0 30px #4ac;
  }
  &::after {
    content: '';
    position: absolute;
    background: #222;
    inset: 3px;
    border-radius: 0.2rem;
    z-index: 1;
  }
  &:hover::after {
    background: #4ac;
  }
  &:hover span {
    color: #fff;
  }
`

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(300px, 80%, 500px);
  color: rgba(255, 255, 255, 0.8);
  margin: 2rem auto 3rem;
  gap: 1rem;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  background: linear-gradient(45deg, rgba(0, 0, 10, 0.8), rgba(0, 50, 50, 0.8));
  border-radius: 0.5rem;
  padding: 2rem;
`

// projects list page
export const StyledProjectItem = styled.a`
  width: 300px;
  margin: 1.5rem;
  border-radius: 0.8rem 0.8rem 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.2), inset 1px 1px 2px rgba(255, 255, 255, 0.2), inset -1px -1px 3px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  overflow: hidden;
  h3 {
    border-bottom: 1px solid #333;
    margin: 0.5rem;
  }
  p {
    position: absolute;
    letter-spacing: 1px;
    color: #fff;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
    transition: 0.3s 0.2s;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    transition: 0.4s;
    vertical-align: bottom;
  }
  &:hover img {
    filter: brightness(0.4) blur(6px);
  }
  &:hover p {
    opacity: 1;
  }
`

export const StyledProjectList = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 4rem;
`

// single project page
export const SingleProjectWrapper = styled.div`
  display: grid;
  place-items: center center;
  gap: 1rem;
  padding: 1rem 2rem 2rem;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.9);
  img {
    width: clamp(300px, 80%, 600px);
    object-fit: contain;
  }
  h3 {
    justify-self: flex-start;
  }
  p {
    justify-self: flex-start;
    white-space: pre-line;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0rem;
`

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  & p:before {
    content: '-';
  }
`
