const input = prompt('Введите текст', '')
const words = input.split(' ').filter(word => word)
alert(words.join(' '))