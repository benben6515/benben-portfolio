export const copyToBoard = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text)
  }

  // Fallback for older browsers or non-secure contexts
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.left = '-9999px'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  return new Promise((resolve, reject) => {
    const success = document.execCommand('copy')
    document.body.removeChild(textArea)
    if (success) {
      resolve()
    } else {
      reject(new Error('Copy failed'))
    }
  })
}
