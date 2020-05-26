/**
 * Отчет о рейсе на данный момент
 * 
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */

/**
* Функция генерации отчета по рейсу
* 
*  * проверка рейса
*  * подсчет
* 
* @param {string} flight номер рейса
* @param {number} nowTime текущее время
* @returns {Report} отчет
*/
function flightReport(flightId, nowTime) {
  const flight = flights[flightId];

  if (!flight)
    throw new Error('Flight not found');

  const registration = flight.registrationStarts <= nowTime && flight.registrationEnds > nowTime;
  const complete = flight.registrationEnds < nowTime;
  const countOfSeats = flight.seats;
  const reservedSeats = flight.tickets.length;
  const registeredSeats = flight.tickets.filter(t => t.registrationTime !== null).length;

  return {
    flight: flightId,
    registration,
    complete,
    countOfSeats,
    reservedSeats,
    registeredSeats
  }
}

const newTickets = [
  ['Petrov P. P.', makeTime(5, 11)],
  ['Sergeev S. S', makeTime(5, 12)],
  ['Alexandrov A. A.', makeTime(5, 13)]
].map(ticketData => {
  console.log(ticketData);
  return buyTicket('BH118', ticketData[1], ticketData[0]);
});

const firstTicket = newTickets[0];

eRegistration(firstTicket.id, firstTicket.fullName, new Date().getTime());

console.log(flightReport('BH118', new Date().getTime()));