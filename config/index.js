const dev = process.env.NODE_ENV !== 'production'

export const BASE_URL = dev ? 'http://localhost:3000' : ''
export const CHAT_API_URL = process.env.CHAT_API_URL
export const CHAT_API_KEY = process.env.CHAT_API_KEY
export const CHAT_MODEL = process.env.CHAT_MODEL || 'GLM-4.7'
