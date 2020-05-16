const date = prompt('Введите дату', '')
const [month, day, year] = date.split('/').map(v => parseInt(v))

const isMonthValid = month >= 1 && month <= 12
const isDayValid = day >= 1 && day <= 31
const isYearValid = year > 0

const dayStr = day.toString().padStart(2, 0)
const monthStr = month.toString().padStart(2, 0)

if (isDayValid && isMonthValid && isYearValid) {
  alert(`${dayStr}.${monthStr}.${year}`)
} else {
  alert(`Введите валидную дату`)
}