import dynamic from 'next/dynamic'
import Link from 'next/link'
import MyHead from './MyHead'

import { SectionWrapper, HomepageTitle, HomepageTitleTyping, Card, CardInfo, ButtonWrapper, Button, AboutMe } from '../shared/styles'
import { BsTelephone, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const BackgroundEffect = dynamic(() => import('./BackgroundEffect'))

const content = {
  en: {
    resumeLink: '/resume/en',
    resumeBtn: '👉 Check my Resume',
    projectsBtn: '👉 Check my Projects',
    blogBtn: '👉 Check my Blog',
    qrCode: '/images/qr-code.png',
    aboutTitle: 'About me',
    hashtags: '#Front-End🧙🏼 #Vim⚡ #Reading📚',
    aboutParagraphs: [
      'A passionate, continuously learning Front-End developer who was born in 1995. I love sharing technology and appreciate open-source culture. I have hands-on experience with two Front-End frameworks (React/Vue). I look forward to developing awesome products.',
    ],
    goals: [
      'Short-term goal: Familiarize myself with the usage of Vim and increase my typing speed. These skills will follow me forever. If a worker wants to do a good job, he must first sharpen his tools. I currently use VS Code with the Vim plugin mainly for development tools.',
      'Medium-term goal: Be a senior Front-End developer. I already know that Front-End is easy to learn but hard to master. Still, I keep learning and am on the way to becoming a senior Front-End developer. (I consider myself at this stage)',
      'Long-term goal: Be a "unicorn" developer. Not just limited to Front-End but also includes Back-End, Design, etc.',
    ],
    closing:
      'There are so many front-end developers, but very few are outstanding. If you think I am the candidate you are looking for, feel free to contact me.',
    ps: 'ps. If you meet a developer with Vim, consider hire this guy!',
  },
  tw: {
    resumeLink: '/resume/tw',
    resumeBtn: '👉 查看履歷',
    projectsBtn: '👉 查看作品集',
    blogBtn: '👉 查看部落格',
    qrCode: 'https://i.imgur.com/jYTOeTV.png',
    aboutTitle: 'About（關於我）',
    hashtags: '#前端🧙🏼 #Vim⚡ #閱讀📚',
    aboutParagraphs: [
      '1995 年生，是一位有熱情、不斷學習新技術、樂於分享的開發者，喜歡 Open source 文化，目前擁有前端框架（React/Vue）技術，期望能開發出讓人驚豔的作品。',
      '擁有 4+ 年的開發經驗，主要專注在前端的領域，但後端也會一些基本，並能善用 AI 提升產能，取得開發進度與品質的平衡。',
      '曾參與過大型 3D 專案開發、產品從 0 到 1 的實現、擔任過前端組長，解決特定的網頁效能問題，幫助網頁網入速度提了 300%。',
      <>
        <b>I use Vim, by the way.</b> 平時使用 vim 開發，是一種非常講求效率的工具，開發速度是其他開發者的 30% 以上。
      </>,
      '有良好的閱讀習慣，有自己維護一份閱讀清單，除了閱讀之外，也喜歡嘗試各種活動，比如：練習 Bass、去咖啡廳。',
    ],
    goals: [
      '短期目標：熱悉 Vim 與嘸蝦米的使用，這些都是能夠跟使用者一同成長的技能，工欲善其事，必先利其器，目前也是使用 VScode 搭配 Vim 插件做為開發主要工具。',
      '中長目標：在 2 ~ 3 年內達到資深前端工程師的程度，前端是易學難精的職業，但仍然繼續前進中，正在成為資深前端的路上。（目前自認為在這個階段中）',
      '期長目標：成為獨角獸（Unicorn）開發者，不只局限於資深前端工程師，包含後端、設計等等。',
    ],
    closing: '如果覺得我是您需要的人才，迎歡隨時與我聊聊。',
    ps: 'ps. 如果您遇到了 Vim 的使用者，快把他招入團隊吧！',
  },
}

function Homepage({ data, lang = 'en' }) {
  const t = content[lang]

  return (
    <>
      <BackgroundEffect />

      <MyHead title="Benben" />

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
            <Link href={t.resumeLink}>
              <span>{t.resumeBtn}</span>
            </Link>
          </Button>
          <Button className="btn">
            <Link href="/projects">
              <span>{t.projectsBtn}</span>
            </Link>
          </Button>
          <Button className="btn">
            <Link href="https://benben.me">
              <span>{t.blogBtn}</span>
            </Link>
          </Button>
        </ButtonWrapper>
      </SectionWrapper>

      <AboutMe>
        <img src={t.qrCode} width={150} alt="qrCode" />
        <h3>{t.aboutTitle}</h3>
        <h3>{t.hashtags}</h3>
        <br />
        {t.aboutParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <br />
        {t.goals.map((g, i) => (
          <p key={i}>{g}</p>
        ))}
        <br />
        <p>{t.closing}</p>
        <br />
        <p>{t.ps}</p>
      </AboutMe>
    </>
  )
}

export default Homepage
