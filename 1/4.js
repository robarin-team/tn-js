let numbersCount = 0
let sum = 0

while (true) {
  const input = prompt('Введите число', '')
  const num = parseInt(input)

  if (input !== '') {
    sum += num
    numbersCount++

    console.log('Среднее: ', sum / numbersCount)
  } else {
    break
  }
}

const avg = sum / numbersCount
const message = `Сумма: ${sum}, чисел: ${numbersCount}, среднее: ${isNaN(avg) ? 0 : avg}`
alert(message)