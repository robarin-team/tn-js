HOUR_MAP = {
  am: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 0,
  },
  pm: {
    1: 13,
    2: 14,
    3: 15,
    4: 16,
    5: 17,
    6: 18,
    7: 19,
    8: 20,
    9: 21,
    10: 22,
    11: 23,
    12: 12,
  }
}

function normalizeDate(input) {
  const timeOfDay = input.substring(input.length - 2).toLowerCase()
  const timeOfDayExist = /\bam\b|\bpm\b/.test(timeOfDay)

  if (!timeOfDayExist) return 'Ошибка';
  
  input = input.replace(timeOfDay, '').trim()

  const [hours, mins] = input.split(/[:.-]/).map(e => parseInt(e))

  const hoursIsValid = hours >= 1 && hours <= 12
  const minsIsValid = mins >= 0 && mins <= 59
  const timeIsValid = hoursIsValid && minsIsValid

  if (!timeIsValid) return ' Ошибка';

  const formattedHours = HOUR_MAP[timeOfDay][hours].toString().padStart(2, '0')
  const formattedMins = mins.toString().padStart(2, '0')

  return `${formattedHours}:${formattedMins}`
}

const input = prompt('Введите американское время', '')
alert(normalizeDate(input))