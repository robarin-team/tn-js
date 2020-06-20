const buyTicketform = document.getElementById("buy_ticket");

buyTicketform.addEventListener('submit', (e) => {
  e.preventDefault();

  const form = e.target;
  const flightFields = ['flightName', 'type'];
  const userFields = ['firstName', 'lastName', 'middleName'];

  const userName = userFields.map(field => {
    if (form.elements[field]) {
      return form.elements[field].value;
    }
  }).join(' ');

  const ticketData = flightFields.reduce((data, fieldName) => {
    data[fieldName] = form.elements[fieldName].value;
    return data;
  }, {});

  ticketData.fullName = userName;
  ticketData.buyTime = new Date().getTime();

  try {
    const { flightName, buyTime, fullName, type } = ticketData;

    const result = buyTicket(flightName, buyTime, fullName, parseInt(type));
    const { seat, id } = result;

    alert(`Your seat: ${seat}, ticket number: ${id}`);
    form.reset();
  } catch(e) {
    alert(e.message);
  }
});
