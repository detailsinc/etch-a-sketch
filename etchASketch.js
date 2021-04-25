//global references
const section = document.querySelector('section');
const button = document.querySelector('#title');


//Generate grid
function generateGrid() {
    clearGrid();
    let div;
    let numInput = getNumInput();
    let gridSize = numInput * numInput;
    section.style.cssText = `grid-template-columns: repeat(${numInput}, 1fr); grid-template-rows: repeat(${numInput}, 1fr)`;

    //Loop creating divs
    for (let i = 0; i < gridSize; i++) {
        div = document.createElement('div');
        div.classList.add('tile');
        section.appendChild(div);  
    }
    
}

//Function to clear Grid
function clearGrid() {
    const oldArray = Array.from(section.childNodes);
    oldArray.forEach((div) => {
        section.removeChild(div);
    })

}

//Function to get userInput
function getNumInput() {
    let userNumInput = prompt('Enter a number between 1-64');
    let num = Number.parseInt(userNumInput);
    if (isNaN(num) || num < 1 || num > 64) {
        alert('Error: Please enter a number between 1-64'); 
    } else {
        return(num);
    } 
}

//Random Color Function
function getRandomColors(e) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

//Button to change grid size 1-64
button.addEventListener('click', () => {
    generateGrid();
}) 

//On mouse over event
section.addEventListener('mouseover', getRandomColors);