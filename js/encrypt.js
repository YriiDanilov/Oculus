export default (text) => {
  let textResult = '';
  for (let i = 0; i < text.length; i += 2) {
    if (text.length % 2 !== 0) {
      textResult += `${text[i + 1] || ''}${text[i]}`;
    } else {
      textResult += `${text[i + 1]}${text[i]}`;
    }
  }
  return textResult;
}
