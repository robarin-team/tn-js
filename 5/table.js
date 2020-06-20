let currentColor = "#000";

const pickColor = (e) => {
  if (!e.target.className.includes('color-block')) return;

  currentColor = `#${e.target.dataset.code}`;
  console.log('Current color:', currentColor);
};

const createTable = (size) => {
  const table = document.createElement("table");

  for (trIndex = 0; trIndex <= size; trIndex++) {
    const tr = document.createElement("tr");

    for (tdIndex = 0; tdIndex <= size; tdIndex++) {
      const td = document.createElement("td");
      tr.append(td);
    }

    table.append(tr);
  }

  return table;
};

const handleDraw = (e) => {
  if (event.target.tagName !== "TD") return;

  if (e.shiftKey) {
    console.log(currentColor)
    e.target.style.backgroundColor = currentColor;
  }
};

document.getElementById("container").prepend(createTable(30));

const table = document.getElementsByTagName('table')[0];
const colorsBlock = document.getElementById("color_picker");

table.addEventListener("mouseover", handleDraw);
colorsBlock.addEventListener('click', pickColor);
