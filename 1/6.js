function reverse(word) {
  let i = word.length - 1
  let reversed = ''

  while (i >= 0) {
    reversed += word[i]
    i--
  }

  return reversed;
}

const word = prompt('Введите слово', '')
alert(reverse(word))