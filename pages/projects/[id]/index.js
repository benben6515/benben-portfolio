import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MyHead from '../../../components/MyHead'
import { SiGithub } from 'react-icons/si'
import { MdWebAsset } from 'react-icons/md'
import { SingleProjectWrapper, LinksWrapper, StackWrapper  } from '../../../shared/styles'
import { BASE_URL } from '../../../config'

const project = ({ project }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <MyHead title={`Benben's Project ${project.id}`} />

      <SingleProjectWrapper>
        <h2>{project.title}</h2>
        <img src={project.image} />
        <LinksWrapper>
          <a href={project.demo} target="_blank"><p><MdWebAsset /> Demo</p></a>
          <a href={project.repo} target="_blank"><p><SiGithub /> GitHub</p></a>
        </LinksWrapper>
        <h3>使用技術：</h3>
        <StackWrapper>
          {project.stack.map(e => (
            <p key={e.name}>{e.name}</p>
          ))}
        </StackWrapper>
        <h3>簡單說明：</h3>
        <p>{project.description}</p>
        <h3>詳細描述：</h3>
        <p>{project.detail}</p>
        <p><Link href='/projects'>&larr; Go back</Link></p>
      </SingleProjectWrapper>
    </>
  )
}

import { projects } from '../../../data/data.tw'

export const getStaticProps = async (context) => {
  // const res = await fetch(`${BASE_URL}/api/projects/${context.params.id}`)
  // const project = await res.json()
  const project = projects[context.params.id - 1]
  return {
    props: {
      project
    }
  }
}

export const getStaticPaths = async () => {
  // const res = await fetch(`${BASE_URL}/api/projects`)
  // const project = await res.json()

  const ids = projects.map(project => project.id)
  const paths = ids.map(id => ({
    params: {id: id.toString()}
  }))

  return {
    paths,
    fallback: false,
  }
}

export default project
