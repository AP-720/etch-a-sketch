
const container = document.querySelector('.container')


let gridSize = 7;

function createGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('row');
        container.appendChild(row);
        
        for (j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
    }
    
}
} 

createGrid(gridSize);