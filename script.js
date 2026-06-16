const container = document.querySelector("#container");
const grid = document.createElement("div");
grid.classList.add("grid");

for(let i = 1; i <= 16; i++){
    const cells = document.createElement("div");
    cells.classList.add("cells")
    grid.appendChild(cells);
}

container.appendChild(grid);
