export const benben = {
  name: '翁士育',
  englishName: 'Benben',
  avatar: '/images/avatar.png',
  phone: '0903106743',
  email: 'z2266109',
  github: 'https://github.com/benben6515',
  blog: 'https://benben6515.github.io/blog/',
  about:
    '你好！我是一個前端開發者，喜歡研究各種 Web 技術，目前沉浸在 Vue, React 的生態圈，有點小學習狂、工作狂，平時喜歡閱讀書藉、寫寫部落格，當然還有寫寫 code。',
  experience: [
    {
      name: 'Classcipe - Front-end team Lead',
      time: '2023.02 ~ current',
      description: `
- 帶領 2 ~ 3 位前端工程師
- 從 0 到 1 打造產品
- 統一前端專案的 coding style
- 與後端規畫 Api, model
- 重構專案 Vue 2 到 Vue 3
- 優化使用大量元素的頁面，載入速度提升 300%
`,
    },
    {
      name: 'RE 紅包 - 前端工程師',
      time: '2022.02 ~ 2023.02',
      description: `
- 負責所有前端事務
- 主動分享技術，如： TypeScript, Vim
- 統一所有前端專案的 coding style
- 重構部分專案 Vue 2 到 Vue 3
- 與 CTO 討論新 features
`,
    },
    {
      name: '王一設計 - 前端工程師',
      time: '2021.11 ~ 2022.02',
      description: `
- 使用 Vue 重 0 到 1 完成新專案
- 獨立完成前端專案，為公司帶來超過百萬的收入（提升 10% 年營業額）
- 快速解理專案，並加入支援
- 導入 Tailwind CSS 快速開發前端
- 維護數個 React, Vue 專案
`,
    },
  ],
  education: [
    {
      name: 'Lidemy 程式導師計畫 - 第五期',
      time: '2021.04 ~ 2021.10',
      description: `
- 跟前端大師學習，半年時間全職衝刺
- 完整前、後端學習計劃
- 唯一 180 天無間斷繳交學習進度
- 深度學習同時廣度學習，期間還持繼自學，如：CS50、Udemy
`,
    },
    {
      name: '中原大學 - 應用數學系',
      time: '2013.09 ~ 2018.06',
      description: `
- 大一獲得「新生教育獎」數學滿級分
- 大二開始半工半讀人生
- 大三擔任熱音社 - 攝影長
`,
    },
  ],
  skills: {
    HTMLandCSS: [
      {
        name: 'CSS 選取器',
        description: '熟悉 HTML 建置與 CSS 選取器，並了解 BEM 命名法',
      },
      {
        name: 'CSS 排版',
        description: '理解排版流程 Float, Flex, Grid',
      },
      {
        name: 'SCSS/SASS',
        description: '使用 SCSS/SASS 預處理器加速開發流程',
      },
      {
        name: 'UI library',
        description: '理解 Bootstrap, tailwind 等 Library 的原理',
      },
      {
        name: 'CSS in JavaScript',
        description: '熟悉 styled-components, @emotion 的應用',
      },
    ],
    JavaScript: [
      {
        name: 'TypeScript',
        description: '使用 TypeScript 開發經驗',
      },
      {
        name: 'ES6',
        description: '熟悉原生 ES6 的 JavaScript 語法',
      },
      {
        name: 'API 串接',
        description: '使用 Fetch, async/await, axios 等技術，與 Web 後端溝通',
      },
      {
        name: '基礎演算法、資料結構',
        description: '理解基礎的演算法與資料結構',
      },
      {
        name: 'JavaScript 觀念',
        description: '了解基礎觀念，如：this, closure, scope, prototype 等',
      },
    ],
    Framework: [
      {
        name: 'React',
        description: '熟悉 React library 與 React 生態系的常用工具',
      },
      {
        name: 'Vue',
        description: '熟悉 Vue, Vue3 composition API 帶來的優勢',
      },
      {
        name: 'Redux/Vuex',
        description: '使用 Redux/Vuex 來管理 react/vue 中的狀態，並利用 Redux toolkit 來優化 Redux 專案',
      },
    ],
    BackEnd: [
      {
        name: '後端 Framework',
        description: '能夠使用 Node.js, Express 建立 Restful API server',
      },
      {
        name: 'Deploy 部署',
        description: '在 AWS EC2, Netify, Heroku 等平台部署網站讓使用者看見',
      },
      {
        name: 'Nginx, PM2',
        description: '利用 Nginx, PM2 工具來達成反向代理與管理網站',
      },
    ],

    Database: [
      {
        name: 'MySQL',
        description: '使用 MySQL 來儲存資料，並理解 SQL 與 noSQL 的差異',
      },
      {
        name: '基礎 SQL query',
        description: '了解基本 CRUD 的 SQL query 語法',
      },
      {
        name: 'SQL injection / XSS',
        description: '理解常見資安相關議題，並懂得如何在實作上防範',
      },
      {
        name: 'Sequelize ORM',
        description: '利用 Sequelize ORM 的模型去操作資料庫',
      },
    ],

    other: [
      {
        name: 'Git',
        description: '熟悉基礎用法，以及 rebase, cherry-pick 等',
      },
      {
        name: 'IDE',
        description: '日常開發環境為 VScode 並搭配 Vim 插件，加速編寫效率',
      },
      {
        name: '套件管理工具',
        description: '利用 npm, yarn, pnpm 來管理 libraries',
      },
      {
        name: 'Bundler',
        description: '使用 webpack, vite 打包工具，提升開發速度',
      },
    ],
  },
  projects: [
    {
      name: 'Z-axis',
      demo: 'https://zaxis.netlify.app/#/',
      repo: 'https://github.com/angelina524/final-project-Z-axis-frontend/tree/dev',
      image: '/images/projects/large-project-1.gif',
      youtube: 'https://youtu.be/-sDzeKgKeGw',
      record: 'https://hackmd.io/@benben6515/H1-rEQb8_',
      details: [
        {
          name: '專案簡介',
          description: '在 Lidemy 學習時的多人協作 Final Project，我主要負責了首頁視覺元素切板、前後端 Socket.io 整合、後端 AWS EC2 部署。',
        },
        {
          name: '前端開發',
          description: '採用 React、Socket.IO 開發，並部署在 Netlify。',
        },
        {
          name: '後端開發',
          description: '採用 Express、Sequelize、Socket.IO 開發，部署在 AWS EC2 平台，並使用 AWS RDS - MySQL 資料庫。',
        },
      ],
    },
    // {
    //   "name": "Benben-portfolio",
    //   "demo": "https://benben-portfolio.vercel.app/",
    //   "repo": "https://github.com/benben6515/benben-portfolio",
    //   "youtube": "",
    //   "image": "https://i.imgur.com/qqQWjxZ.gif",
    //   "record": "",
    //   "details": [
    //     {
    //       "name": "專案說明",
    //       "description": "為了記錄個人的作品集，所以自己嘗試了刻一個酷炫的作品集網站，之後作品集也會隨著我一同成長。因為想跟別人不一樣，也順便自己刻一個履歷表，雖是參考 CakeResume 的，但細節上就可以更客製化。"
    //     },
    //     {
    //       "name": "使用技術",
    //       "description": "採用 Next.js, React, @emotion 開發，使用了 SSR 技術，全部的頁面都支援 RWD，也加上了列印功能，履歷內容有調整過，應該沒有被截斷的地方，最後部署在 Vercel 上，也可以打 API 拿到履歷跟作品資料。"
    //     },
    //     {
    //       "name": "開發過程",
    //       "description": "從 Lidemy 畢業了，也培養了自學的能力，所以整個專案都是自己去學習並且完成的，體驗到了全部自己來的感覺，真的不容易，感謝 Lidemy 的這段旅程 、感謝 Huli 大大。"
    //     }
    //   ]
    // },
    {
      name: 'Gigabyte-industry',
      demo: 'https://industry.gigabyte.com',
      repo: '',
      youtube: 'https://www.youtube.com/channel/UCM_VXTttz39aJwPM2oBrIzQ',
      image: '/images/projects/large-project-2.gif',
      record: '',
      details: [
        {
          name: '專案說明',
          description: '為客戶數位行銷所進行的專案，充滿互動效果，有大量的 3D 模組互動，並擁有中、英雙語系的切換，我負責了整個前端部分。',
        },
        {
          name: '使用技術',
          description: '前端的部分採用 Vue, Pug/Sass, Babylon.js（3D framework） 開發，後端則是使用 Laravel ，由後端所建立。',
        },
        {
          name: '開發過程',
          description:
            '在王一設計互動任職前端工程師時的專案作品，負責全部的前端開發，期間於 PM、設計師、後端，甚至客戶進行溝通，並解決了新的問題，開發時程約一個月，並進行之後的維護。',
        },
      ],
    },
    {
      name: 'APEC 2021 Event',
      demo: 'https://apec2021-rec-renewable-energy.com/event',
      repo: '',
      youtube: 'https://www.youtube.com/watch?v=u6AwnvPZ_6s',
      image: '/images/projects/large-project-3.gif',
      record: '',
      details: [
        {
          name: '專案說明',
          description: '為客戶活動所進行的專案，有 3D 的視覺效果，我負責了整個前端的整合，並加入新技術。',
        },
        {
          name: '使用技術',
          description: '前端的部分採用 Vue, Pug/Sass ， 後端則是使用 Laravel ，由後端所建立。',
        },
        {
          name: '開發過程',
          description: '這是一個重構的專案，並在舊的專案加入新的功能。我負責了整個任務，前端的整合加入新技術，同時維護舊有的功能。',
        },
      ],
    },
  ],
}
