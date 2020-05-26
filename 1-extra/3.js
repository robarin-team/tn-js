const text = 'Не следует, однако забывать, что рамки и место обучения кадров позволяет оценить значение существенных финансовых и административных условий. Таким образом постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений.'
const words = text.split(' ')

let newString = words[0]
const rows = []

for (let index = 1; index < words.length; index++) {
  if ((newString + ' ' + words[index]).length < 80) {
    newString += ' ' + words[index]

    if (index === words.length -1) { rows.push(newString) }
  } else {
    rows.push(newString)
    newString = words[index]
  }
}

console.log(rows.join('\n'))