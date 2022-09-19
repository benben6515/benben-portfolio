import dynamic from 'next/dynamic'
import Link from 'next/link'
import MyHead from '../components/MyHead'
// import BackgroundEffect from '../components/BackgroundEffect'

// import { BASE_URL } from '../config'
import { SectionWrapper, HomepageTitle, HomepageTitleTyping, Card, CardInfo, ButtonWrapper, Button, AboutMe } from '../shared/styles'
import { BsTelephone, BsGithub }  from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const BackgroundEffect = dynamic(() => import('../components/BackgroundEffect'))

export default function Home({ data }) {
  return (
    <>
      <MyHead title="Benben" />

      <BackgroundEffect />

      <SectionWrapper>
        <HomepageTitle>Hi, I'm Benben.</HomepageTitle>
        <HomepageTitleTyping>A Front-End developer.</HomepageTitleTyping>
        <Card>
          <img className="img" src={data.avatar} />
          <CardInfo>
            <h3>{data.englishName}<span>（{data.name}）</span></h3>
            <p><BsTelephone /> {data.phone}</p>
            <a href="mailto:z2266109@gmail.com"><AiOutlineMail /> {data.email}</a>
            <a href={data.github} target="_blank"><p><BsGithub /> {data.github.slice(-10)}</p></a>
          </CardInfo>
        </Card>
        <ButtonWrapper>
          <Button className="btn"><Link href="/projects"><span>&rarr; 點我看作品集</span></Link></Button>
          <Button className="btn"><Link href="/resume/tw"><span>&rarr; 點我前往履歷</span></Link></Button>
        </ButtonWrapper>
      </SectionWrapper>
      <AboutMe>
        <img src="https://i.imgur.com/jYTOeTV.png" width={150} alt="qrCode" />
        <h3>About（關於我）</h3>
        <p>84 年生，是一位有熱情、不斷學習新技術、樂於分享的開發者，喜歡 Open source 文化，並且繼續在 CS50、MIT 上學習，目前擁有前端雙框架（React/Vue）技術，期望能持續開發出讓人驚豔的作品。</p>
        <br />
        <p>短期目標：熱悉 Vim 與嘸蝦米的使用，這些都是能夠跟使用者一同成長的技能，工欲善其事，必先利其器，目前也是使用 VScode 搭配 Vim 插件做為開發主要工具。</p>
        <p>中長目標：在 1 ~ 2 年內達到資深前端工程師的程度，前端是易學難精的職業，但仍然繼續前進中，正在成為資深前端的路上。</p>
        <p>期長目標：成為獨角獸（unicorn）開發者，不只局限於資深前端工程師，包含後端、設計等。</p>
        <br />
        <p>前端人多，真的能用的人少，如果覺得我是您需要的人才，迎歡隨時與我聊聊。</p>
        <br />
        <p>ps. 如果您遇到了 Vim 的使用者（不一定要是我），快把他招入團隊吧！</p>
      </AboutMe>

    </>
  )
}


import { benben } from '../data/benben.en'
export const getStaticProps = async () => {
  // const res = await fetch(`${BASE_URL}/api/benben`)
  // const data = await res.json()

  return {
    props: {
      data: benben
    }
  }
}