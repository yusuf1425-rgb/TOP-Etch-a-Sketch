const container = document.querySelector("#container");
const grid = document.createElement("div");
grid.classList.add("grid");
const gridValue = 64;
const numOfCells = gridValue * gridValue;
for(let i = 1; i <= numOfCells; i++){
    const cells = document.createElement("div");
    cells.classList.add("cells")
    cells.style.width = `${900/ gridValue}px`;
    cells.style.height = `${900 / gridValue}px`;
    grid.appendChild(cells);
}

container.appendChild(grid);
