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
        <p>84 年生，是一位有熱情、不斷學習新技術的開發者，以前的同事大都說我很好相處，有的到現在也都還有聯繫的朋友，期望能持續開發出讓人驚豔的作品。</p>
        <p>短期目標：熱悉 Vim 與嘸蝦米的使用，目前已經會基本用法了，這些都是能夠跟使用者一同成長的技能，工欲善其事，必先利其器。</p>
        <p>中長目標：在 3 ~ 5 年內達到資深前端工程師的程度，知道前端是易學難精的職業，但仍然繼續前進。</p>
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