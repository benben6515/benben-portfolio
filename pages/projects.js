import React from 'react'
import MyHead from '../components/MyHead'
import ProjectList from '../components/ProjectList'
import { Wrapper } from '../shared/styles'
import { BASE_URL } from '../config'

function projects({ data }) {
  return (
    <Wrapper>
      <MyHead title="Benben's Portfolio" />
      <h2>這邊是我的作品集</h2>
      <p>{`here are my projects :)`}</p>
      <ProjectList projects={data} />
    </Wrapper>
  )
}

export default projects


import { projects as data } from '../data/data.tw'
export const getStaticProps = async () => {
  // const res = await fetch(`${BASE_URL}/api/projects`)
  // const data = await res.json()

  return {
    props: {
      data
    }
  }
}