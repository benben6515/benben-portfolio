import React from 'react'
import ProjectItem from './ProjectItem'
import { StyledProjectList } from '../shared/styles'

function ProjectList({ projects }) {
  return (
    <StyledProjectList>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id}/>
      ))}
    </StyledProjectList>
  )
}

export default ProjectList
