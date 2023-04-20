import { keyframes } from '@emotion/css'
import styled from '@emotion/styled'

const bubbleColor1 = '#4fc3dc'
const bubbleColor1Shadow = '#4fc3dc44'
const bubbleColor2 = '#40fca3'
const bubbleColor2Shadow = '#40fca344'

const float = keyframes`
  0% {
    transform: translateY(100vh) translateX(6px) scale(0.1);
    opacity: 1;
  }
  20% {
    transform: translateY(80vh) translateX(-6px) scale(0.2);
    opacity: .8;
  }
  40% {
    transform: translateY(60vh) translateX(-6px) scale(0.4);
    opacity: 1;
  }
  60% {
    transform: translateY(40vh) translateX(6px) scale(0.6);
    opacity: .8;
  }
  80% {
    transform: translateY(20vh) translateX(-6px) scale(.75);
    opacity: 1;
  }
  100% {
    transform: translateY(0vh) scale(0.8);
    opacity: 0;
  }
`

export const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`

export const Bubbles = styled.div`
  position: relative;
  display: flex;
`

export const Bubble = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  margin: 0 4px;
  background: ${bubbleColor1};
  box-shadow: 0 0 0 6px ${bubbleColor1Shadow}, 0 0 50px ${bubbleColor1}, 0 0 100px ${bubbleColor1};
  animation: ${float} 15s linear infinite;
  animation-duration: ${(props) => props.animationDuration};
  animation-delay: ${(props) => props.animationDelay};

  &:nth-of-type(even) {
    background: ${bubbleColor2};
    box-shadow: 0 0 0 6px ${bubbleColor2Shadow}, 0 0 50px ${bubbleColor2}, 0 0 100px ${bubbleColor2};
  }
`
