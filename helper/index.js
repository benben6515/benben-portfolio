export const copyToBoard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => alert('複製成功！'),
    () => alert('複製失敗 QQ')
  )
}
