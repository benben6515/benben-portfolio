import React from 'react'
import MyHead from '../components/MyHead'
import ProjectList from '../components/ProjectList'
import { Wrapper } from '../shared/styles'

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
  return {
    props: {
      data
    }
  }
}