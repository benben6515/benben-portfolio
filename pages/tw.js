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
            <Link href="/resume/tw">
              <span>👉 查看履歷</span>
            </Link>
          </Button>
          <Button className="btn">
            <Link href="/projects">
              <span>👉 查看作品集</span>
            </Link>
          </Button>
          <Button className="btn">
            <Link href="https://benben.me">
              <span>👉 查看部落格</span>
            </Link>
          </Button>
        </ButtonWrapper>
      </SectionWrapper>
      <AboutMe>
        <img src="https://i.imgur.com/jYTOeTV.png" width={150} alt="qrCode" />
        <h3>About（關於我）</h3>
        <h3>#前端🧙🏼 #Vim⚡ #閱讀📚</h3>
        <br />
        <p>1995 年生，是一位有熱情、不斷學習新技術、樂於分享的開發者，喜歡 Open source 文化，目前擁有前端框架（React/Vue）技術，期望能開發出讓人驚豔的作品。</p>
        <p>擁有 4+ 年的開發經驗，主要專注在前端的領域，但後端也會一些基本，並能善用 AI 提升產能，取得開發進度與品質的平衡。</p>
        <p>曾參與過大型 3D 專案開發、產品從 0 到 1 的實現、擔任過前端組長，解決特定的網頁效能問題，幫助網頁網入速度提了 300%。</p>
        <p>
          <b>I use Vim, by the way.</b> 平時使用 vim 開發，是一種非常講求效率的工具，開發速度是其他開發者的 30% 以上。
        </p>
        <p>有良好的閱讀習慣，有自己維護一份閱讀清單，除了閱讀之外，也喜歡嘗試各種活動，比如：練習 Bass、去咖啡廳。</p>
        <br />
        <p>
          短期目標：熱悉 Vim 與嘸蝦米的使用，這些都是能夠跟使用者一同成長的技能，工欲善其事，必先利其器，目前也是使用 VScode 搭配 Vim 插件做為開發主要工具。
        </p>
        <p>中長目標：在 2 ~ 3 年內達到資深前端工程師的程度，前端是易學難精的職業，但仍然繼續前進中，正在成為資深前端的路上。（目前自認為在這個階段中）</p>
        <p>期長目標：成為獨角獸（Unicorn）開發者，不只局限於資深前端工程師，包含後端、設計等等。</p>
        <br />
        <p>如果覺得我是您需要的人才，迎歡隨時與我聊聊。</p>
        <br />
        <p>ps. 如果您遇到了 Vim 的使用者，快把他招入團隊吧！</p>
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
