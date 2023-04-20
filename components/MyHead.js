import React from 'react'
import Head from 'next/head'

function MyHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/benben.svg" />
      <meta name="keywords" content="web development, front end, programing" />
    </Head>
  )
}

export default MyHead
