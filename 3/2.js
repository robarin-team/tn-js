const parseWords = text => {
  if (!text || text === '') return false;

  const result = text.split(' ').map(word => {
    let sum = 0;
    for (let i in word) { sum += word.charCodeAt(i) }

    return {
      word,
      sum
    }
  })

  return result;
}

console.log(parseWords('Lorem ipsum dolor sit amet.'));