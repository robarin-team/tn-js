const timestamp = parseInt(prompt('Введите временную метку', 534338229)).toString(16)
const claster = parseInt(prompt('Введите кластер', 58)).toString(16)
const type = parseInt(prompt('Введите тип', 10)).toString(16)
const userId = parseInt(prompt('Введите идентификатор пользователя', 139771391)).toString(16)

alert(`${timestamp}${claster}${type}${userId}`)