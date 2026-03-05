import { CHAT_API_URL, CHAT_API_KEY, CHAT_MODEL } from '../../config'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, lang = 'en', history = [] } = req.body

  // Validate request
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' })
  }

  // Check if API is configured
  if (!CHAT_API_URL || !CHAT_API_KEY) {
    return res.status(500).json({ error: 'Chat service not configured' })
  }

  try {
    // Build system prompt based on language
    const systemPrompt =
      lang === 'tw'
        ? `你是 Benben 的 AI 助手。
請以友善、專業的語氣回答問題。
請使用繁體中文回答問題。`
        : `You are Benben's AI assistant.
Answer in a friendly, professional tone.
Please use English to answer questions.`

    // Build messages array with history
    const messages = [{ role: 'system', content: systemPrompt }, ...history, { role: 'user', content: message }]

    // Call GLM API
    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CHAT_API_KEY}`,
      },
      body: JSON.stringify({
        model: CHAT_MODEL,
        messages,
        stream: false,
      }),
      signal: AbortSignal.timeout(180000), // 180 second timeout
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('GLM API error:', response.status, errorText)
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // Extract response from GLM API format
    const assistantMessage = data.choices?.[0]?.message?.content || data.response || 'Sorry, I could not generate a response.'

    return res.status(200).json({
      response: assistantMessage,
      usage: data.usage,
    })
  } catch (error) {
    console.error('Chat API error:', error)

    // Return appropriate error message
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: 'Request timeout' })
    }

    return res.status(500).json({ error: 'Failed to process chat request' })
  }
}
