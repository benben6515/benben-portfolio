import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVim,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiGraphql,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'

const skills = [
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiVuedotjs, name: 'Vue', color: '#4FC08D' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#fff' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: '#fff' },
  { icon: SiVim, name: 'Vim', color: '#019733' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
]

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const Container = styled.section`
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem 0;
  margin: 2rem 0;
`

const Track = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 25s linear infinite;
  ${Container}:hover & {
    animation-play-state: paused;
  }
`

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  color: #666;
  transition: 0.3s;
  cursor: default;

  svg {
    font-size: 2.5rem;
    transition: 0.3s;
  }

  span {
    font-size: 0.85rem;
    opacity: 0.7;
    transition: 0.3s;
  }

  &:hover {
    color: ${(props) => props.hoverColor || '#fff'};
    svg {
      color: ${(props) => props.hoverColor || '#fff'};
      filter: drop-shadow(0 0 10px ${(props) => props.hoverColor || '#fff'});
    }
    span {
      opacity: 1;
    }
  }
`

const SkillTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  text-shadow: #fff 1px 0 10px;
`

function SkillWall() {
  const duplicatedSkills = [...skills, ...skills]

  return (
    <Container>
      <SkillTitle>My skills :</SkillTitle>
      <Track>
        {duplicatedSkills.map((skill, index) => (
          <SkillItem key={index} hoverColor={skill.color}>
            <skill.icon />
            <span>{skill.name}</span>
          </SkillItem>
        ))}
      </Track>
    </Container>
  )
}

export default SkillWall
