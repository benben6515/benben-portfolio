import { CHAT_API_URL, CHAT_API_KEY, CHAT_MODEL } from '../../config'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, lang = 'en', history = [], stream = false } = req.body

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

    // Handle streaming mode
    if (stream) {
      // Set SSE headers
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Cache-Control', 'no-cache, no-transform')
      res.setHeader('Connection', 'keep-alive')
      res.setHeader('X-Accel-Buffering', 'no') // Disable Nginx buffering

      // Call GLM API with streaming
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CHAT_API_KEY}`,
        },
        body: JSON.stringify({
          model: CHAT_MODEL,
          messages,
          stream: true,
        }),
        signal: AbortSignal.timeout(180000), // 180 second timeout
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('GLM API error:', response.status, errorText)
        res.write(`data: ${JSON.stringify({ error: `API responded with status: ${response.status}` })}\n\n`)
        res.write('data: [DONE]\n\n')
        res.end()
        return
      }

      try {
        // Stream response from GLM API
        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || '' // Keep incomplete line in buffer

          for (const line of lines) {
            const trimmedLine = line.trim()
            if (!trimmedLine || !trimmedLine.startsWith('data: ')) continue

            const dataStr = trimmedLine.slice(6) // Remove 'data: ' prefix

            // Check for [DONE] signal
            if (dataStr === '[DONE]') {
              res.write('data: [DONE]\n\n')
              continue
            }

            try {
              const data = JSON.parse(dataStr)
              const content = data.choices?.[0]?.delta?.content

              if (content) {
                // Forward the content chunk to client
                res.write(`data: ${JSON.stringify({ content })}\n\n`)
              }
            } catch (parseError) {
              console.error('Error parsing SSE data:', parseError, dataStr)
            }
          }
        }

        // Send final done signal
        res.write('data: [DONE]\n\n')
      } catch (streamError) {
        console.error('Stream processing error:', streamError)
        res.write(`data: ${JSON.stringify({ error: 'Stream interrupted' })}\n\n`)
        res.write('data: [DONE]\n\n')
      } finally {
        res.end()
      }

      return
    }

    // Non-streaming mode (original behavior)
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
      // throw new Error(`API responded with status: ${response.status}`)
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
