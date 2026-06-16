const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid");

const gridValue = 64;
const numOfCells = gridValue * gridValue;

for(let i = 1; i <= numOfCells; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell")

    cell.style.width = `${900/ gridValue}px`;
    cell.style.height = `${900 / gridValue}px`;

    grid.appendChild(cell);
}
container.appendChild(grid);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    });
}); 


