export const projects = [
  {
    id: '1',
    title: 'React/Redux Blog',
    image:
      'https://camo.githubusercontent.com/e209a9701bc0c6654eaf90e8a30d4e55658e5144016299f81b3ee090267cbe07/68747470733a2f2f692e696d6775722e636f6d2f7334335153736f2e676966',
    demo: 'https://benben6515.github.io/redux-blog/',
    repo: 'https://github.com/benben6515/redux-blog',
    description: '使用 Redux toolkit 做的 Blog，可以新增、修改、刪除文章，並有會員系統可以註冊、登入。',
    detail:
      ' 登入頁面：輸入帳號密碼後可以登入\n 註冊頁面：可以開放使用者註冊\n About 頁面：簡單關於部落格的話\n 文章列表頁面：可以看到所有文章，一頁只會顯示 5 筆，需要支援分頁功能，可以換頁\n 單篇文章頁面：點進去文章以後可以看到文章完整內容\n 發表文章頁面：可以輸入標題跟內文發文\n 刪除文章：只有同一個使用者才可以刪除文章\n 編輯文章：只有同一個使用者才可以編輯文章，編輯完跳回單一文章頁面\n 單一使用者的所有文章頁面：查看某一個使用者的所有文章 \n\n 小彩蛋：Loading & 404 頁面都是手刻的。',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'Redux toolkit',
      },
      {
        name: '@emotion',
      },
      {
        name: 'JWT 驗証',
      },
    ],
  },
  {
    id: '2',
    title: 'React/Redux Todo List',
    image:
      'https://camo.githubusercontent.com/534b2380369d002b4300c6ed3d680723a2351f43ae127e37678afad96a1e8403/68747470733a2f2f692e696d6775722e636f6d2f6b3541657050372e676966',
    demo: 'https://benben6515.github.io/redux-todo/',
    repo: 'https://github.com/benben6515/redux-todo',
    description: '這是一個使用 Redux toolkit 做的 Todo List，可以新增、修改、刪除。',
    detail:
      '雖然是個簡單的 todo list ，但其實背後用了很多新的技術，\n 也是 Lidemy 第五期的最後一個 todo list ，使用了 Redux toolkit 的 Slice 把東西整合在一起\n 除了完成需求，畫面都是手刻的，也嘗試了許多特效\n 我個人是蠻喜歡這個簡單的小做品的。\n\n 小彩蛋：header hover 時會加速、todo hover 時會浮起創造視覺上的 3D 效果。',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'Redux toolkit',
      },
      {
        name: 'styled-component',
      },
    ],
  },
  {
    id: '3',
    title: 'React Gobang',
    image: 'https://i.imgur.com/IjGmwPc.gif',
    demo: 'https://benben6515.github.io/react-gobang/',
    repo: 'https://github.com/benben6515/react-gobang',
    description: 'React 五子棋，會隨著當前玩家變色，也可以反回步數，跟重播下棋過程。',
    detail:
      '這是改編自 React 官網教學的圈圈叉叉，也自己加入了許多特效，\n 樣式也全部也是手刻的，棋盤使用了 grid 排版避免跑版問題，\n 棋盤周圍的燈光效果會隨著當前玩家變色，\n 並且可以時光倒流，返回之前的某一步， \n 最後勝利時，可以重播整個對奕過程！ \n\n 小彩蛋：最後的勝利者，棋盤背景會有微微的呼吸燈效果。',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'styled-component',
      },
      {
        name: '原生 CSS 特效',
      },
    ],
  },
  {
    id: '4',
    title: 'Express/Sequelize Lottery',
    image: 'https://i.imgur.com/Tx09nZK.gif',
    demo: 'https://limitless-reef-07762.herokuapp.com/',
    repo: 'https://limitless-reef-07762.herokuapp.com/',
    description: '使用 Express 跟 Sequelize 做的抽獎器，可以抽獎並設定獎品名稱跟中獎機率。',
    detail:
      '需要登入才可以設定獎品名稱跟中獎機率，並新增圖片網址，\n使用 Express 為後端的開發，前端上使用 ejs 做為顯示頁面（View）\n 首次嘗試了 MVP 架構來達成前後端分離，\n 資料庫則是採用 Sequelize ORM 去操控資料庫，\n 最後部署在 Heroku 平台上。 \n\n 小彩蛋：因為是部署在 Heroku 上所以會有冷起動問題（這不是彩蛋吧！）',
    stack: [
      {
        name: 'Express',
      },
      {
        name: 'Sequelize',
      },
      {
        name: 'Heroku',
      },
    ],
  },
  {
    id: '5',
    title: 'Bootstrap/Slide effects',
    image: 'https://i.imgur.com/exyXFUI.gif',
    demo: 'https://benben-bootstrap-skroller.netlify.app/',
    repo: 'https://github.com/benben6515/bootstrap-skroller',
    description: '用 Bootstrap 結合 skroller.js 捲動效果的網頁。',
    detail:
      '原本是在 codepen 平台開發，後來移植到 Netlify，\n 使用了 Pug （HTML 預處理器）/ SCSS（CSS 預處理器）開發，\n 並搭配了 Bootstrap ，體驗到了快速開發的感覺，\n 少少的 code 就能達到想要的畫面， \n 加上 skroller.js 打造出一個滑動效果的網頁。\n\n 小彩蛋：其他 codepen 小作品 https://codepen.io/collection/nZwLNw ',
    stack: [
      {
        name: 'Pug/SCSS',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'skroller.js',
      },
    ],
  },
  {
    id: '6',
    title: 'Live Chat',
    image: 'https://i.imgur.com/gsPDyE8.gif',
    demo: 'http://live-chat.ben6515.tw/',
    repo: 'https://github.com/benben6515/live-chat',
    description: '使用 React, Socket.io 跟 Tailwind 打造的即時聊天應用程式。',
    detail:
      '這是一個即時聊天室，也可以跟自己聊天（淡淡的衰傷）\n 下方會顯示當前使用者的狀態，如：進入哪個房間、離開等， \n 使用 React 搭配 tailwind ，減少了許多的 CSS 樣式表，\n 雖然是使用大量的 className ，但可以完成大部分的畫面，\n 最後加上 Socket.io 串起來達到即時聊天的功能。  \n\n 小彩蛋：可以自行輸入房間 ID （如：123），會對其他人顯示「祕密房間」',
    stack: [
      {
        name: 'React',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'Socket.io',
      },
      {
        name: 'AWS EC2',
      },
    ],
  },
]
