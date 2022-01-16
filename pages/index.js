import Link from 'next/link'
import MyHead from '../components/MyHead'
import { BASE_URL } from '../config'
import { SectionWrapper, Card, CardInfo, ButtonWrapper, Button, AboutMe } from '../shared/styles'
import { BsTelephone, BsGithub }  from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Home({ data }) {
  return (
    <>
      <MyHead title="Benben" />

      <SectionWrapper>
        <Card>
          <img className="img" src={data.avatar} />
          <CardInfo>
            <h3>{data.englishName}<span>（{data.name}）</span></h3>
            <p><AiOutlineMail /> {data.email}</p>
            <p><BsTelephone /> {data.phone}</p>
            <a href={data.github} target="_blank"><p><BsGithub /> {data.github.slice(-10)}</p></a>
          </CardInfo>
        </Card>
        <ButtonWrapper>
          <Button className="btn"><Link href="/projects"><span>&rarr; 點我看作品集</span></Link></Button>
          <Button className="btn"><Link href="/resume"><span>&rarr; 點我前往履歷</span></Link></Button>
        </ButtonWrapper>
      </SectionWrapper>
      <AboutMe>
        <img src="https://i.imgur.com/jYTOeTV.png" width={150} alt="qrCode" />
        <h3>About（關於我）</h3>
        <p>84 年生，是一位有熱情、不斷學習新技術、樂於分享的開發者，喜歡 Open source 文化，擁有前端雙框架（React/Vue）技術實力，期望能持續開發出讓人驚豔的作品。</p>
        <br />
        <p>短期目標：熱悉 Vim 與嘸蝦米的使用，這些都是能夠跟使用者一同成長的技能，工欲善其事，必先利其器，目前也是使用 VScode 搭配 Vim 插件做為開發主要工具。</p>
        <p>中長目標：在 1 ~ 2 年內達到資深前端工程師的程度，前端是易學難精的職業，但仍然繼續前進中，正在成為資深前端的路上。</p>
        <p>期長目標：成為獨角獸（unicorn）開發者，不只局限於資深前端工程師，包含設計、後端。</p>
        <br />
        <p>前端人多，真的能用的人少，如果覺得我是您需要的人才，迎歡隨時與我聊聊，如果遇到使用 Vim 的開發者，不一定是我，快雇用他吧！</p>
        <p>If you meet a developer with Vim, Just hire this guy!</p>
      </AboutMe>

    </>
  )
}


import { benben } from '../benben'
export const getStaticProps = async () => {
  // const res = await fetch(`${BASE_URL}/api/benben`)
  // const data = await res.json()

  return {
    props: {
      data: benben
    }
  }
}