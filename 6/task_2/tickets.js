const buyTicketform = document.getElementById("buy_ticket");

buyTicketform.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const userName = ["firstName", "lastName", "middleName"]
    .map((field) => {
      if (form.elements[field]) {
        return form.elements[field].value;
      }
    })
    .join(" ");

  const ticketData = {
    flightName: form.elements["flightName"].value,
    type: form.elements["type"].value,
  };

  ticketData.fullName = userName;
  ticketData.buyTime = new Date().getTime();

  try {
    const { flightName, buyTime, fullName, type } = ticketData;

    const result = buyTicket(flightName, buyTime, fullName, parseInt(type));
    const { seat, id } = result;

    alert(`Your seat: ${seat}, ticket number: ${id}`);
    form.reset();
  } catch (e) {
    alert(e.message);
  }
});
