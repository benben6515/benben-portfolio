import React from 'react'
import { useState, useEffect } from 'react'
import { BackgroundContainer, Bubbles, Bubble } from '../shared/backgroundStyles'

const RandomBubbles = () => {
  const [ randomArray, setRandomArray ] = useState([])

  useEffect(() => {
    setRandomArray(Array(40).fill(null))
  }, [])

  return randomArray.map((e, i) => {
    const rate = Math.random() * 0.5 + 0.5
    const animationDuration = `${10 / rate}s`
    const animationDelay = `-${rate * 3}s`

    return <Bubble
      key={i}
      animationDuration={animationDuration}
      animationDelay={animationDelay}
    ></Bubble>
  })
}

const BackgroundEffect = () => {
  return (
    <BackgroundContainer>
      <Bubbles>
        <RandomBubbles />
        <RandomBubbles />
      </Bubbles>
    </BackgroundContainer>
  )
}

export default BackgroundEffect
