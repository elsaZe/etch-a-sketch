
const slider = document.getElementById("gridSize");
const output = document.getElementById("demo1");
const output2 = document.getElementById("demo2");
output.innerHTML = slider.value;
output2.innerHTML = slider.value;

let apply = document.querySelector('#apply');

slider.addEventListener('change', function () {
    output.innerHTML = slider.value;
    output2.innerHTML = slider.value;
})

apply.addEventListener('click', () => {
        resetGrid();
        createGrid(slider.value); 
    });


const container = document.getElementById('container');

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid(width) {
    let size = 480/width
    for(let i = 0; i < width*width; i++) {
        let square = document.createElement('div');
        square.classList.add('box');
        square.style.height = size+'px';
        square.style.width = size+'px';
        square.style.display = "inline-block"
        container.appendChild(square);

    }
    let squares = container.querySelectorAll('div')
    squares.forEach(square => square.addEventListener('mouseover', chooseColor))
}

function clearGrid() {
    let squares = container.querySelectorAll('div')
    squares.forEach(square => square.style.backgroundColor = 'white')
    }




let currentColor = 'black';

const blackButton = document.getElementById('blackButton');
const purpleButton = document.getElementById('purpleButton');
const rainbowButton = document.getElementById('rainbowButton');
const eraser = document.getElementById('eraser')
const clear = document.getElementById('clear')

function clearButtons () {
    blackButton.style.backgroundColor = 'aliceblue';
    purpleButton.style.backgroundColor = 'aliceblue';
    rainbowButton.style.backgroundColor = 'aliceblue';
    eraser.style.backgroundColor = 'aliceblue';
}

blackButton.addEventListener('click', () => {
    clearButtons();
    event.target.style.backgroundColor = 'lightblue'
    currentColor = "black"})
purpleButton.addEventListener('click', () => {
    clearButtons();
    event.target.style.backgroundColor = 'lightblue'
    currentColor = "purple"})
rainbowButton.addEventListener('click', () => {
    clearButtons();
    event.target.style.backgroundColor = 'lightblue'
    currentColor = "rainbow"})
eraser.addEventListener('click', () => {
    clearButtons();
    event.target.style.backgroundColor = 'lightblue'
    currentColor = 'white'})
clear.addEventListener('click', clearGrid)


function chooseColor() {
    if (currentColor == 'black'){
        this.style.backgroundColor = 'black'
    } else if (currentColor == 'purple') {
        let opacity = Number(this.style.backgroundColor.slice(-4,-1))
        if (opacity < 1) {
            this.style.backgroundColor = `rgba(128,0,128, ${opacity+0.2})`
        } else {
            this.style.backgroundColor = 'purple'
        }
    } else if (currentColor == 'rainbow') {
        this.style.backgroundColor = "rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",0.6)"
    } else if (currentColor == 'white') {
        this.style.backgroundColor = 'white'
    }
}

createGrid(50)

