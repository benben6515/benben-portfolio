import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styled from '@emotion/styled'
import MyHead from './MyHead'

import { SectionWrapper, HomepageTitle, Card, CardInfo, ButtonWrapper, Button, AboutMe } from '../shared/styles'
import TypingEffect from './TypingEffect'
import SkillWall from './SkillWall'
import Testimonials from './Testimonials'
import { BsTelephone, BsGithub } from 'react-icons/bs'
import Chatbot from './Chatbot'
import { AiOutlineMail, AiOutlineCopy } from 'react-icons/ai'
import { copyToBoard } from '../helper'
import { BASE_URL } from '../config'

const BackgroundEffect = dynamic(() => import('./BackgroundEffect'))

const QrSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`

const QrInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  h4 {
    color: #7d7;
    font-size: 1.1rem;
  }
`

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #7d7;
  color: #7d7;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    background: #7d7;
    color: #fff;
  }
`

const content = {
  en: {
    resumeLink: '/resume/en',
    resumeBtn: '👉 Check my Resume',
    projectsBtn: '👉 Check my Projects',
    blogBtn: '👉 Check my Blog',
    qrCode: '/images/qr-code.png',
    aboutTitle: 'About me',
    hashtags: '#Front-End🧙🏼 #Vim💫 #Reading📚',
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
    qrTip: 'Scan QR code to view on mobile',
    copyLink: 'Copy link',
    copied: 'Copied!',
  },
  tw: {
    resumeLink: '/resume/tw',
    resumeBtn: '👉 查看履歷',
    projectsBtn: '👉 查看作品集',
    blogBtn: '👉 查看部落格',
    qrCode: 'https://i.imgur.com/jYTOeTV.png',
    aboutTitle: 'About（關於我）',
    hashtags: '#前端🧙🏼 #Vim💫 #閱讀📚',
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
      '長期目標：成為獨角獸（Unicorn）開發者，不只局限於資深前端工程師，包含後端、設計等等。',
    ],
    closing: '如果覺得我是您需要的人才，迎歡隨時與我聊聊。',
    ps: 'ps. 如果您遇到了 Vim 的使用者，快把他招入團隊吧！',
    qrTip: '掃瞄 QRcode 在手機上查看',
    copyLink: '複製連結',
    copied: '已複製！',
  },
}

function Homepage({ data, lang = 'en' }) {
  const t = content[lang]
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    copyToBoard(BASE_URL)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
      })
  }

  return (
    <>
      <BackgroundEffect />

      <MyHead title="Benben" />

      <SectionWrapper>
        <HomepageTitle>
          Hi, I'm <span>Benben.</span>
        </HomepageTitle>
        <TypingEffect />
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

        <Chatbot lang={lang} />
      </SectionWrapper>

      <AboutMe>
        <QrSection>
          <img src={t.qrCode} width={150} alt="qrCode" />
          <QrInfo>
            <h4>{t.qrTip}</h4>
            <CopyButton onClick={handleCopy}>
              <AiOutlineCopy />
              {copied ? t.copied : t.copyLink}
            </CopyButton>
          </QrInfo>
        </QrSection>
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

      <Testimonials lang={lang} />

      <SkillWall />
    </>
  )
}

export default Homepage
