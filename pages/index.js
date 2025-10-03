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
        <img src="/images/qr-code.png" width={150} alt="qrCode" />
        <h3>About me</h3>
        <p>
          A passionate, continuously learning Front-End developer who was born in 1995. I love sharing technology and appreciate open-source culture. I enjoy
          learning online course like CS50, MIT OpenCourse. I have hands-on experience with two Front-End frameworks (React/Vue). I look forward to developing
          awesome products.
        </p>
        <br />
        <p>
          Short-term goal: Familiarize myself with the usage of Vim and increase my typing speed. These skills will follow me forever. If a worker wants to do a
          good job, he must first sharpen his tools. I currently use VS Code with the Vim plugin mainly for development tools.
        </p>
        <p>
          Medium-term goal: Be a senior Front-End developer. I already know that Front-End is easy to learn but hard to master. Still, I keep learning and am on
          the way to becoming a senior Front-End developer. (I consider myself at this stage)
        </p>
        <p>Long-term goal: Be a "unicorn" developer. Not just limited to Front-End but also includes Back-End, Design, etc.</p>
        <br />
        <p>
          There are so many front-end developers, but very few are outstanding. If you think I am the candidate you are looking for, feel free to contact me.
        </p>
        <br />
        <p>ps. If you meet a developer with Vim (not necessarily me), just hire this guy!</p>
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
