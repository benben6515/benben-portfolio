import { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'
import { BsTerminal, BsX, BsDash } from 'react-icons/bs'
import { copyToBoard } from '../helper'
import { BASE_URL } from '../config'
import { benben as benbenEn } from '../data/benben.en'
import { benben as benbenTw } from '../data/benben.tw'

const slideUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`

// Terminal container - centered at bottom, low-profile
export const TerminalContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  background: rgba(34, 34, 34, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 1px 1px 2px rgba(255, 255, 255, 0.1),
    inset -1px -1px 3px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'FiraCode Nerd Font', 'Consolas', 'Monaco', monospace;
  z-index: 100;
  animation: ${slideUp} 0.3s ease-out;
  overflow: hidden;

  @media (max-width: 768px) {
    bottom: 1rem;
    width: 95%;
    max-width: none;
  }
`

// Terminal header - subtle
export const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    font-weight: 500;

    svg {
      width: 0.9rem;
      height: 0.9rem;
      opacity: 0.8;
    }
  }

  .controls {
    display: flex;
    gap: 0.4rem;

    button {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      width: 1.3rem;
      height: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      transition: all 0.2s;

      &:hover {
        background: rgba(74, 204, 204, 0.3);
        border-color: rgba(74, 204, 204, 0.5);
        color: #eee;
      }

      svg {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
`

// Terminal history area
export const TerminalHistory = styled.div`
  max-height: 280px;
  overflow-y: auto;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.82rem;
  line-height: 1.6;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(74, 204, 204, 0.3);
    border-radius: 3px;

    &:hover {
      background: rgba(74, 204, 204, 0.5);
    }
  }

  ${(props) =>
    props.isCollapsed &&
    `
    display: none;
  `}
`

// Terminal message line - subtle styling
export const TerminalMessage = styled.div`
  margin-bottom: 0.7rem;
  white-space: pre-wrap;
  word-break: break-word;
  opacity: 0;
  animation: ${slideUp} 0.2s ease-out forwards;

  &.user {
    color: #aef;
  }

  &.user::before {
    content: '$ ';
    color: #4ac;
    opacity: 0.7;
  }

  &.assistant {
    color: rgba(255, 255, 255, 0.9);
  }

  &.assistant::before {
    content: '> ';
    color: #56f;
    opacity: 0.7;
  }

  &.system {
    color: rgba(255, 255, 255, 0.7);
  }

  &.system::before {
    content: '[system] ';
    color: #4ac;
    opacity: 0.6;
  }

  &.error {
    color: #f77;
  }

  &.error::before {
    content: '[error] ';
    color: #f55;
  }

  &.success {
    color: #7d7;
  }

  &.success::before {
    content: '[success] ';
    color: #5d5;
  }
`

// Typing indicator - subtle
export const TerminalTyping = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.4rem 0;
  color: rgba(255, 255, 255, 0.6);

  &::before {
    content: '> ';
    color: #56f;
    opacity: 0.7;
  }

  span {
    width: 0.4rem;
    height: 0.8rem;
    background: rgba(74, 204, 204, 0.6);
    border-radius: 2px;
    animation: ${blink} 1s infinite;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

// Terminal input area
export const TerminalInputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem;
  background: rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .prompt {
    color: #4ac;
    font-weight: 500;
    margin-right: 0.5rem;
    opacity: 0.8;
    user-select: none;
  }
`

export const TerminalInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'FiraCode Nerd Font', 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
  }
`

// Floating toggle button - subtle
export const TerminalToggleButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: rgba(34, 34, 34, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 1px 1px 2px rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  font-family: 'FiraCode Nerd Font', 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s;

  &:hover {
    background: rgba(74, 204, 204, 0.2);
    border-color: rgba(74, 204, 204, 0.4);
    color: #eee;
    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.3),
      0 0 15px rgba(74, 204, 204, 0.3);
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`

// Translations
const translations = {
  en: {
    welcome: "Welcome to Benben's terminal. Type /ls for commands.",
    placeholder: 'Type a command or message...',
    copied: 'URL copied to clipboard!',
    resumeOpened: 'Opening resume page...',
    projectOpened: 'Opening projects page...',
    commands: {
      clear: 'Clear chat history',
      ls: 'List all available commands',
      copy: 'Copy current URL to clipboard',
      skill: 'Show all skills',
      resume: 'Open resume page',
      project: 'Open projects page',
      help: 'Show this help message',
    },
    commandList: 'Available Commands:',
    categoryNames: {
      HTMLandCSS: 'HTML & CSS',
      JavaScript: 'JavaScript',
      Framework: 'Frameworks',
      BackEnd: 'Back-End',
      Database: 'Database',
      other: 'Other Skills',
    },
    unknownCommand: 'Unknown command. Type /ls or /help for available commands.',
    error: 'An error occurred. Please try again.',
  },
  tw: {
    welcome: '歡迎來到 Benben 的終端機。輸入 /ls 查看可用指令。',
    placeholder: '輸入指令或訊息...',
    copied: 'URL 已複製到剪貼簿！',
    resumeOpened: '正在開啟履歷頁面...',
    projectOpened: '正在開啟專案頁面...',
    commands: {
      clear: '清除聊天記錄',
      ls: '列出所有可用指令',
      copy: '複製目前 URL 到剪貼簿',
      skill: '顯示所有技能',
      resume: '開啟履歷頁面',
      project: '開啟專案頁面',
      help: '顯示說明訊息',
    },
    commandList: '可用指令：',
    categoryNames: {
      HTMLandCSS: 'HTML & CSS',
      JavaScript: 'JavaScript',
      Framework: '框架',
      BackEnd: '後端',
      Database: '資料庫',
      other: '其他技能',
    },
    unknownCommand: '未知指令。輸入 /ls 或 /help 查看可用指令。',
    error: '發生錯誤，請稍後再試。',
  },
}

// Command handlers
const useCommandHandlers = (lang, t, setMessages, setConversationHistory) => {
  const handleClear = () => {
    setMessages([])
    setConversationHistory([])
    return { type: 'success', text: lang === 'en' ? 'Chat history cleared.' : '聊天記錄已清除。' }
  }

  const handleLs = () => {
    let output = `${t.commandList}\n\n`
    Object.entries(t.commands).forEach(([cmd, desc]) => {
      output += `  /${cmd.padEnd(10)} - ${desc}\n`
    })
    return { type: 'system', text: output.trim() }
  }

  const handleCopy = async () => {
    try {
      await copyToBoard(BASE_URL || window.location.href)
      return { type: 'success', text: t.copied }
    } catch (err) {
      return { type: 'error', text: lang === 'en' ? 'Failed to copy URL.' : '複製 URL 失敗。' }
    }
  }

  const handleSkill = () => {
    const benbenData = lang === 'en' ? benbenEn : benbenTw
    let output = ''

    Object.entries(benbenData.skills).forEach(([category, skills]) => {
      const categoryName = t.categoryNames[category] || category
      output += `\n## ${categoryName}\n`
      skills.forEach((skill) => {
        output += `- ${skill.name}: ${skill.description}\n`
      })
      output += '\n'
    })

    return { type: 'system', text: output.trim() }
  }

  const handleResume = () => {
    window.open(`/resume/${lang}`, '_blank')
    return { type: 'system', text: t.resumeOpened }
  }

  const handleProject = () => {
    window.open('/projects', '_blank')
    return { type: 'system', text: t.projectOpened }
  }

  const handleHelp = () => handleLs()

  return {
    clear: handleClear,
    ls: handleLs,
    copy: handleCopy,
    skill: handleSkill,
    resume: handleResume,
    project: handleProject,
    help: handleHelp,
  }
}

function Chatbot({ lang = 'en' }) {
  const [isOpen, setIsOpen] = useState(true)
  const [isHistoryOpen, setIsHistoryOpen] = useState(true)
  const [messages, setMessages] = useState([])
  const [conversationHistory, setConversationHistory] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const messagesContainerRef = useRef(null)

  const t = translations[lang]
  const commandHandlers = useCommandHandlers(lang, t, setMessages, setConversationHistory)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current && isHistoryOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isLoading, isHistoryOpen])

  // Add welcome message on first render
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ text: t.welcome, type: 'system' }])
    }
  }, [])

  const handleCommand = (command) => {
    const handler = commandHandlers[command]
    if (handler) {
      return handler()
    }
    return { type: 'error', text: t.unknownCommand }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = inputValue.trim()
    setInputValue('')

    // Check if it's a slash command
    if (userMessage.startsWith('/')) {
      const command = userMessage.slice(1).toLowerCase().split(' ')[0]
      const result = handleCommand(command)
      setMessages((prev) => [...prev, { text: userMessage, type: 'user' }, { text: result.text, type: result.type }])
      return
    }

    // Regular chat message
    setMessages((prev) => [...prev, { text: userMessage, type: 'user' }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          lang: lang,
          history: conversationHistory,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage = data.response

      setMessages((prev) => [...prev, { text: assistantMessage, type: 'assistant' }])

      setConversationHistory((prev) => [...prev, { role: 'user', content: userMessage }, { role: 'assistant', content: assistantMessage }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [...prev, { text: t.error, type: 'error' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleTerminal = () => setIsOpen((prev) => !prev)

  const toggleHistory = () => setIsHistoryOpen((prev) => !prev)

  const closeTerminal = () => setIsOpen(false)

  if (!isOpen) {
    return (
      <TerminalToggleButton onClick={toggleTerminal} aria-label="Open terminal">
        <BsTerminal />
        {lang === 'en' ? 'Terminal' : '終端機'}
      </TerminalToggleButton>
    )
  }

  return (
    <TerminalContainer>
      <TerminalHeader>
        <div className="title">
          <BsTerminal />
          <span>benben@portfolio:~</span>
        </div>
        <div className="controls">
          <button onClick={toggleHistory} aria-label={isHistoryOpen ? 'Minimize' : 'Maximize'}>
            <BsDash />
          </button>
          <button onClick={closeTerminal} aria-label="Close">
            <BsX />
          </button>
        </div>
      </TerminalHeader>

      <TerminalHistory ref={messagesContainerRef} isCollapsed={!isHistoryOpen}>
        {messages.map((msg, index) => (
          <TerminalMessage key={index} className={msg.type}>
            {msg.text}
          </TerminalMessage>
        ))}
        {isLoading && (
          <TerminalTyping>
            <span></span>
            <span></span>
            <span></span>
          </TerminalTyping>
        )}
        <div ref={messagesEndRef} />
      </TerminalHistory>

      <TerminalInputArea>
        <span className="prompt">$</span>
        <TerminalInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.placeholder}
          disabled={isLoading}
          autoFocus
        />
      </TerminalInputArea>
    </TerminalContainer>
  )
}

export default Chatbot
