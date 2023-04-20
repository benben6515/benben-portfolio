import dynamic from 'next/dynamic'
import Link from 'next/link'
import MyHead from '../components/MyHead'

import { SectionWrapper, HomepageTitle, HomepageTitleTyping, Card, CardInfo, ButtonWrapper, Button, AboutMe } from '../shared/styles'
import { BsTelephone, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const BackgroundEffect = dynamic(() => import('../components/BackgroundEffect'))

export default function Home({ data }) {
  return (
    <>
      <MyHead title="Benben" />

      <BackgroundEffect />

      <SectionWrapper>
        <HomepageTitle>
          Hi, I'm <span>Benben.</span>
        </HomepageTitle>
        <HomepageTitleTyping>A Front-End developer.</HomepageTitleTyping>
        <Card>
          <img className="img" src={data.avatar} />
          <CardInfo>
            <h3>
              {data.englishName}
              <span>（{data.name}）</span>
            </h3>
            <p>
              <BsTelephone /> {data.phone}
            </p>
            <a href="mailto:z2266109@gmail.com">
              <AiOutlineMail /> {data.email}
            </a>
            <a href={data.github} target="_blank">
              <p>
                <BsGithub /> {data.github.slice(-10)}
              </p>
            </a>
          </CardInfo>
        </Card>

        <ButtonWrapper>
          <Button className="btn">
            <Link href="/resume/en">
              <span>👉 Check my Resume</span>
            </Link>
          </Button>
          <Button className="btn">
            <Link href="/projects">
              <span>👉 Check my Projects</span>
            </Link>
          </Button>
          <Button className="btn">
            <Link href="https://benben.me">
              <span>👉 Check my Blog</span>
            </Link>
          </Button>
        </ButtonWrapper>
      </SectionWrapper>

      <AboutMe>
        <img src="https://i.imgur.com/jYTOeTV.png" width={150} alt="qrCode" />
        <h3>About me</h3>
        <p>
          A passion, keeping learning Front-End developer who was born in 1995. Love sharing technology and like open source culture. I like learning on CS50,
          MIT open class. With hands-on two Front-end framework (React/Vue) skills. Look forward to develop a awesome products.
        </p>
        <br />
        <p>
          Short term goal: Familiar the usage of Vim and raise the speed of typing. Those skill will follow you forever. If a worker wants to do a good job, he
          must first sharpen his tools. I currently use VScode with Vim plugin for mainly develop tools.
        </p>
        <p>
          Medium term goal: Be a senior Front-End developer. I already known about Front-End is easy to learn but hard to master. Still, I keep learning and on
          the way to be a senior Front-End developer.
        </p>
        <p>Long term goal: Be a "unicorn" developer. Not just limited to Front-End but includes Back-End, Design .etc.</p>
        <br />
        <p>
          There are so many Front-End developers, but rarely few are outstanding. If you think I am the candidate you are looking for, feel comfortable to
          contact with me.
        </p>
        <br />
        <p>ps. If you meet a developer with Vim (not necessarily me), Just hire this guy!</p>
      </AboutMe>
    </>
  )
}

import { benben } from '../data/benben.en'

export const getStaticProps = async () => {
  return {
    props: {
      data: benben,
    },
  }
}
