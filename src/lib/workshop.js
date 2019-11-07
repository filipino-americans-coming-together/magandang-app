const START = '<p>'
const END = '</p>'

export const parseParagraphsIntoArray = (text) => {
  const paragraphArray = []
  let textLeft = text
  do {
    let startIndex = textLeft.indexOf(START)
    let endIndex = textLeft.indexOf(END)
    if (startIndex === -1) break
    const nextParagraph = textLeft.slice(startIndex + START.length, endIndex)
    paragraphArray.push(nextParagraph)
    textLeft = textLeft.substr(endIndex + END.length)
  } while (textLeft.length > 0)
  return paragraphArray
}