import Link from 'next/link'
import MyHead from '../components/MyHead'
import { BASE_URL } from '../config'
import { SectionWrapper, Card, CardInfo, ButtonWrapper, Button } from '../shared/styles'
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

    </>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/api/benben`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}