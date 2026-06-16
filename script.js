const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid");

const gridSizeButton = document.querySelector("#grid-size");

function changeGridSize(){
    gridSizeButton.addEventListener("click", () => {
        const gridSize = prompt("Enter new size:");
        if (gridSize < 16 || gridSize > 100){
            alert("Please enter a value between 16 and 100")
        } else {
        grid.innerHTML = "";
        playEtchASketch(gridSize)
        }
    });
}

function playEtchASketch(gridSize = 16){
    createGrid(gridSize);
    container.appendChild(grid);
    changeCellColor();
}

function createGrid(gridSize){
        const numOfCells = gridSize * gridSize;
        for(let i = 1; i <= numOfCells; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell")

        cell.style.width = `${800/ gridSize}px`;
        cell.style.height = `${800 / gridSize}px`;

        grid.appendChild(cell);
    }
}

function changeCellColor(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor();
        });
    }); 
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

playEtchASketch();
changeGridSize();