const makeTime = (hours, minutes) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
}

const flightInfo = {
  name: 'BH118',
  seats: 28,
  businessSeats: 4,
  registrationStarts: makeTime(10, 0),
  registartionEnds: makeTime(15, 0),
  tickets: [
    {
      id: 'BH118-B50',
      flight: 'BH118',
      fullName: 'Ivanov I. I.',
      type: 0,
      seat: 18,
      buyTime: makeTime(2, 0),
      registrationTime: null,
    },
    {
      id: 'BH118-B51',
      flight: 'BH118',
      fullName: 'Petrov I. I.',
      type: 1,
      seat: 25,
      buyTime: makeTime(2, 0),
      registrationTime: null,
    }
  ],
}

const reportMapping = {
  name: 'Flight name',
  seats: 'Seats',
  businessSeats: 'Business Seats',
  registrationStarts: 'Check-in starts at',
  registartionEnds: 'Check-in ends at'
}

const ticketMapping = {
  id: 'ID',
  flight: 'Flight number',
  fullName: 'Full name',
  type: 'Type',
  seat: 'Seat',
  buyTime: 'Purchased at',
  registrationTime: 'Checked-in at',
}

const container = document.getElementById('flight-details');

const flightDetails = flight => {
  const flightReport = document.createElement('ul');
  
  for (let [title, value] of Object.entries(flight)) {
    if (title !== 'tickets') {
      const reportItem  = document.createElement('li');
      const reportTitle = document.createElement('span');
      let reportValue   = value;

      reportTitle.innerText = reportMapping[title];
      reportTitle.style.fontWeight = 'bold';

      if (['registrationStarts', 'registartionEnds'].includes(title)) {
        reportValue = new Date(value);
      }

      reportItem.append(reportTitle);
      reportItem.append(`: ${reportValue}`);

      flightReport.append(reportItem);
    }
  }

  container.append(flightReport);
}

const ticketsDetails = (tickets) => {
  const ticketDetailsTable = document.createElement('table');
  const ticketDetailsHead = document.createElement('thead');
  const ticketDetailsBody = document.createElement('tbody');
  const titlesRow = document.createElement('tr');

  for (let title of Object.values(ticketMapping)) {
    const titleCell = document.createElement('th');

    titleCell.innerText = title;
    titlesRow.append(titleCell);
  }

  ticketDetailsHead.append(titlesRow);
  ticketDetailsTable.append(ticketDetailsHead);
  ticketDetailsTable.append(ticketDetailsBody);

  for (let ticket of tickets) {
    ticketDetailsBody.append(ticketInfo(ticket));
  }

  container.append(ticketDetailsTable);
}

const ticketInfo = ticket => {
  const ticketRow = document.createElement('tr');

  for (let [title, value] of Object.entries(ticket)) {
    const ticketCell = document.createElement('td');
    let ticketValue = value;

    if (['buyTime', 'registrationTime'].includes(title)) {
      if (value) {
        ticketValue = new Date(value);
      }
    }

    ticketCell.innerText = ticketValue;
    ticketRow.append(ticketCell);
  }

  return ticketRow;
}

flightDetails(flightInfo);
ticketsDetails(flightInfo.tickets);