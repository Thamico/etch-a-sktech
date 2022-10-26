const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", function colorGrid() {
      cell.style.backgroundColor = "yellow";
    });
    container.appendChild(cell).className = "grid-item";
  }
}

function getGrid() {
  let grid = prompt("Please enter how many grids one site has");
  if (grid != null) {
    makeRows(grid, grid);
  }
}
