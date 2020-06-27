let currentColor = "#000";

const pickColor = (e) => {
  if (!e.target.classList.contains('color-block')) return;

  currentColor = `#${e.target.dataset.code}`;
  console.log('Current color:', currentColor);
};

const createTable = (size) => {
  const table = document.createElement("table");

  for (let trIndex = 0; trIndex < size; trIndex++) {
    const tr = document.createElement("tr");

    for (let tdIndex = 0; tdIndex < size; tdIndex++) {
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
    e.target.style.backgroundColor = currentColor;
  }

  if (e.ctrlKey) {
    e.target.style.backgroundColor = 'transparent';
  }
};


const table = createTable(30);
const colorsBlock = document.getElementById("color_picker");

document.getElementById("container").prepend(table);

table.addEventListener("mouseover", handleDraw);
colorsBlock.addEventListener('click', pickColor);
