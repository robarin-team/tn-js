/**
 * Функция пробует произвести электронную регистрацию пассажира
 * 
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 * 
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticketId, fullName, nowTime) {
  try {
    if (!ticketId)
      throw new Error('Ticket id is required');

    const flight = flights[ticketId.split('-')[0]]

    if (!flight)
      throw new Error('Flight not found');

    if (nowTime < flight.registrationStarts)
      throw new Error('Check-in has not started yet');

    if (nowTime >= flight.registartionEnds)
      throw new Error('Check-in is over');

    const ticket = flight.tickets.find(ticket => ticket.id === ticketId);

    if (!ticket)
      throw new Error('Invalid ticket id');

    if (ticket.fullName !== fullName)
      throw new Error('Invalid name');

    ticket.registrationTime = nowTime;

    return true;
  } catch (e) {
    console.log(e.message)
  }
}

ticket = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');

console.log(eRegistration(ticket.id, ticket.fullName, new Date().getTime()));
console.log(eRegistration('BH118-123', ticket.fullName, new Date().getTime()));
console.log(eRegistration(ticket.id, '', new Date().getTime()));