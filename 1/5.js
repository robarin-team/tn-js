const vowel = ['a', 'e', 'i', 'o', 'u'];
const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

const input = prompt('Введите текст', '')
let vowelsCount = 0
let consonantsCount = 0

for (let i = 0; i < input.length; i++) {
  const letter = input[i].toLowerCase()

  if (vowel.includes(letter)) {
    vowelsCount++
  } else if (consonant.includes(letter)) {
    consonantsCount++
  }
}

const msg = `Гласных: ${vowelsCount}, согласных: ${consonantsCount}`
alert(msg)