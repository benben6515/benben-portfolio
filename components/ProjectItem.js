import React from 'react'
import Link from 'next/link'
import { StyledProjectItem } from '../shared/styles'

function ProjectItem({ project }) {
  return (
    <Link href="/projects/[id]" as={`/projects/${project.id}`}>
      <StyledProjectItem>
        <h3>{project.title} &rarr;</h3>
        <p>{project.description}</p>
        <img src={project.image} />
      </StyledProjectItem>
    </Link>
  )
}

export default ProjectItem
