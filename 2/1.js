const side = parseInt(prompt('Введите длину стороны', '0'))
const result = isNaN(side) ? 'Введите число' : side ** 2 * Math.sqrt(3) / 4
alert(result)