
const container = document.querySelector('.container')
const sizeInput = document.querySelector('.size-input')
const resetButton = document.querySelector('.reset')
const brushBox = document.querySelector('.brush-box')

let gridSize = 16;
let brushColor

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('row');
        container.appendChild(row);
        
        for (j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.addEventListener("mouseover", () => {
                gridBox.style.backgroundColor = "rgb(145, 148, 153)";
            })
            row.appendChild(gridBox); 
    }
}
} 

createGrid(gridSize);

sizeInput.addEventListener('click', () => {
    const getSize = prompt('Enter number between 1 & 100');
    if ( getSize <= 0 || getSize > 100) {
        alert('Something went wrong. Enter a number between 1 & 100');
    } else {
        const removal = document.getElementById('container');
        while (removal.firstChild) {
            removal.firstChild.remove();
        }
        createGrid(getSize);
    }
}) 

resetButton.addEventListener('click', () => {
    const resetGrid = document.querySelectorAll(".grid-box");
    const gridArray = [...resetGrid];
    gridArray.forEach((block) => {
        block.style.backgroundColor = "rgb(255, 255, 255)";
    })
})

brushBox.addEventListener("click", (e) => {
    if (e.target.type === "radio") {
        brushColor = e.target.value
        console.log(brushColor)
    }

    if (brushColor === 'black') {
        const blackBrush = document.querySelectorAll(".grid-box");
        const gridArray = [...blackBrush];
        gridArray.forEach((block) => {
            block.addEventListener("mouseover", () => {
                block.style.backgroundColor = "rgb(145, 148, 153)";
            });
        })
    }

    if (brushColor === 'randomcolor') {
        const randomBrush = document.querySelectorAll(".grid-box");
        const gridArray = [...randomBrush];
        gridArray.forEach((block) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16)
            block.addEventListener("mouseover", () => {
                block.style.backgroundColor = "#" + randomColor;
            });
        })
    }

}
)