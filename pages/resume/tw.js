import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import MyHead from '../../components/MyHead'
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiVuedotjs,
  SiRedux,
  SiNodedotjs,
  SiNetlify,
  SiMysql,
  SiSequelize,
  SiVim,
  SiGit,
} from 'react-icons/si'
import { BsTelephone, BsGithub } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineRollback, AiOutlineCopy, AiOutlinePrinter } from 'react-icons/ai'
import { IoLanguageOutline } from 'react-icons/io5'

import { BASE_URL } from '../../config'
import { copyToBoard } from '../../helper'

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #eee;
  z-index: 10;
  svg {
    color: #333;
  }
`

const ProfileWrapper = styled.main`
  gap: 2rem;
  background: #fff;
  width: clamp(300px, 70%, 960px);
  margin: 1rem auto 5rem;
  border-radius: 0.2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  @media screen and (min-width: 750px) {
    padding: 3rem;
  }
  @media print {
    padding: 0 1rem;
    width: 100%;
    box-shadow: none;
  }
`

const IconWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  width: clamp(300px, 70%, 960px);
  margin: 5rem auto 2rem;
  gap: 2rem;
  @media print {
    display: none;
  }
`

const IconItem = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center center;
  text-align: center;
  border-radius: 50%;
  background: #fafafa;
  box-shadow:
    1px 1px 5px rgba(0, 0, 0, 0.2),
    inset 2px 2px 5px rgba(255, 255, 255, 1),
    inset -2px -2px 5px rgba(255, 255, 255, 0.8);
  filter: brightness(1);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
`

const Title = styled.h2`
  display: inline-block;
  color: #48c;
  font-size: 1.6rem;
  border-bottom: 1px solid #48c;
  margin: 2rem 0 1.2rem;
  span {
    font-size: 1rem;
  }
`

const SubTitle = styled.h3`
  color: #357;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 2rem;
`

const SectionItem = styled.div`
  width: 236px;
  margin-left: 1rem;
  @media print {
    margin-left: 0rem;
  }
`

const SectionWideItem = styled.div`
  width: 440px;
  margin-left: 1rem;
  @media print {
    margin-left: 0rem;
  }
`

const InformationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: flex-start;
  img {
    min-width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    background: linear-gradient(180deg, #eee, #fff);
  }
`

const Information = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  flex: 360px;
  max-width: 500px;
  gap: 1rem;
  h2 {
    margin: 1rem 0 0;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const ItemWrapper = styled.div``

const ItemName = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  &::before {
    content: '• ';
  }
`

const ItemDescription = styled.p`
  font-size: 0.75rem;
  white-space: pre-line;
  color: #444;
`

const ExperienceDescription = styled.p`
  font-size: 0.85rem;
  white-space: pre-line;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  color: #222;
`

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  img {
    width: clamp(300px, 70%, 500px);
    object-fit: contain;
  }
`

const ProjectItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 360px;
  max-width: 500px;
  margin-left: 1rem;
  @media print {
    margin-left: 0rem;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const Profile = ({ data }) => {
  const { skills, projects } = data

  return (
    <PageWrapper>
      <MyHead title="Benben's Resume" />

      <IconWrapper>
        <Link href="/">
          <IconItem>
            <span>
              <AiOutlineRollback />
            </span>
          </IconItem>
        </Link>
        <IconItem>
          <Link href="/resume/en">
            <span>
              <IoLanguageOutline />
            </span>
          </Link>
        </IconItem>
        <IconItem>
          <a onClick={() => copyToBoard(`${BASE_URL}/resume`)}>
            <AiOutlineCopy />
          </a>
        </IconItem>
        <IconItem>
          <a onClick={() => print()}>
            <AiOutlinePrinter />
          </a>
        </IconItem>
      </IconWrapper>

      <ProfileWrapper>
        <InformationWrapper>
          <img src={data.avatar} />
          <Information>
            <Title>
              {data.englishName}
              <span> （{data.name}） </span>
            </Title>
            <p>{data.about}</p>
            <p>
              <BsTelephone />
              {data.phone}
            </p>
            <a href="mailto:z2266109@gmail.com">
              <AiOutlineMail /> {data.email}
            </a>
            <a href={data.github} target="_blank">
              <p>
                <BsGithub value={{ color: '#333', size: '1.25rem' }} /> {data.github.slice(-10)}
              </p>
            </a>
          </Information>
        </InformationWrapper>

        <Title>
          Skills<span>（技能）</span>
        </Title>

        <Section>
          <SectionItem>
            <SubTitle>
              HTML/CSS
              <SiCss3 />
              <SiHtml5 />
            </SubTitle>
            {skills.HTMLandCSS.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.description}</ItemDescription>
              </ItemWrapper>
            ))}
          </SectionItem>

          <SectionItem>
            <SubTitle>
              JavaScript
              <SiJavascript />
              <SiTypescript />
            </SubTitle>
            {skills.JavaScript.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.description}</ItemDescription>
              </ItemWrapper>
            ))}
          </SectionItem>

          <SectionItem>
            <SubTitle>
              Framework
              <SiReact />
              <SiVuedotjs />
              {/* <SiRedux /> */}
            </SubTitle>
            {skills.Framework.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.description}</ItemDescription>
              </ItemWrapper>
            ))}
          </SectionItem>

          <SectionItem>
            <SubTitle>
              BackEnd
              <SiNodedotjs />
              <SiNetlify />
            </SubTitle>
            {skills.BackEnd.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.description}</ItemDescription>
              </ItemWrapper>
            ))}
          </SectionItem>

          <SectionItem>
            <SubTitle>
              Database
              <SiMysql />
              <SiSequelize />
            </SubTitle>
            {skills.Database.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.description}</ItemDescription>
              </ItemWrapper>
            ))}
          </SectionItem>

          <SectionItem>
            <SubTitle>
              IDE/Tools
              <SiGit />
              <SiVim />
            </SubTitle>
            {skills.other.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.description}</ItemDescription>
              </ItemWrapper>
            ))}
          </SectionItem>
        </Section>

        <Title>
          Projects<span>（專案）</span>
        </Title>

        <Section>
          {projects.map((project, idx) => (
            <ProjectWrapper key={project.name}>
              <ProjectItem>
                <SubTitle>
                  {idx + 1}. {project.name}
                </SubTitle>
                <ItemWrapper>
                  <ProjectLinks>
                    {project.demo ? (
                      <a href={project.demo}>
                        <ItemName>Demo</ItemName>
                      </a>
                    ) : null}
                    {project.repo ? (
                      <a href={project.repo}>
                        <ItemName>Github</ItemName>
                      </a>
                    ) : null}
                    {project.youtube ? (
                      <a href={project.youtube}>
                        <ItemName>Youtube</ItemName>
                      </a>
                    ) : null}
                  </ProjectLinks>
                </ItemWrapper>

                {project.details.map((e) => (
                  <ItemWrapper key={e.name}>
                    <ItemName>{e.name}</ItemName>
                    <ItemDescription>{e.description}</ItemDescription>
                  </ItemWrapper>
                ))}
              </ProjectItem>
              <img src={project.image} />
            </ProjectWrapper>
          ))}
        </Section>

        <Title>
          Education/Experience<span>（學經歷）</span>
        </Title>

        <Section>
          <SectionWideItem>
            <SubTitle>Experience</SubTitle>
            {data.experience.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.time}</ItemDescription>
                <ExperienceDescription>{e.description}</ExperienceDescription>
              </ItemWrapper>
            ))}
          </SectionWideItem>
          <SectionWideItem>
            <SubTitle>Education</SubTitle>
            {data.education.map((e) => (
              <ItemWrapper key={e.name}>
                <ItemName>{e.name}</ItemName>
                <ItemDescription>{e.time}</ItemDescription>
                <ExperienceDescription>{e.description}</ExperienceDescription>
              </ItemWrapper>
            ))}
          </SectionWideItem>
        </Section>

        <Title>
          References<span>（其他參考）</span>
        </Title>
        <Section>
          <SectionItem>
            <SubTitle>部落格</SubTitle>
            <ItemWrapper>
              <ItemName>
                <a href="https://benben.me" target="_blank">
                  個人部落格
                </a>
              </ItemName>
              <ItemDescription>記錄一些程式筆記、讀書心得的地方。</ItemDescription>
            </ItemWrapper>
            <ItemWrapper>
              <ItemName>
                <a href="https://blog.errorbaker.tw/" target="_blank">
                  共筆技術部落格
                </a>
              </ItemName>
              <ItemDescription>跟 Lidemy 學長姐們一起寫的共筆部落格。</ItemDescription>
            </ItemWrapper>
          </SectionItem>
        </Section>
      </ProfileWrapper>
    </PageWrapper>
  )
}

export default Profile

import { benben as benbenTw } from '../../data/benben.tw'

export const getStaticProps = async () => {
  return {
    props: {
      data: benbenTw,
    },
  }
}
