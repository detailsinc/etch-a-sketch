//global references
const section = document.querySelector('section');
const button = document.querySelector('#title');


//Generate 16x16 grid
function generateGrid() {
    let div;
    for (let i = 0; i < 256; i++) {
        div = document.createElement('div');
        div.classList.add('tile');
        section.appendChild(div);  
    }    
}

//Delete and Replace element
function swapButtonToText() {
    button.remove();
    let title = document.createElement('h1');
    let body = document.querySelector('body'); 
    title.textContent = "Etch A Sketch";
    body.insertBefore(title, section);
}

//Button to begin etch a sketch
button.addEventListener('click', () => {
    generateGrid();
    swapButtonToText()
}) 
