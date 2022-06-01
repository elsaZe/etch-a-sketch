


function createGrid(width){
    let size = 480/width;
    for(let i = 0; i < width; i++) {
        const container = document.querySelector('#container')
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.height = size+"px";
        container.appendChild(row);
        for (let j = 0; j < width; j++) {
            let box = document.createElement('div');
            box.classList.add('box'); 
            box.style.width = size+"px";
            box.style.height = size+"px"; 
            box.addEventListener('mouseover', () => {
                let r = Math.floor(Math.random()*255);
                let g = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                box.style.backgroundColor = "rgb("+r+","+g+","+b+")";
            })          
            row.appendChild(box);  
        }
    }
}



var slider = document.getElementById("gridSize");
var output = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
output.innerHTML = slider.value;
output2.innerHTML = slider.value;

var apply = document.querySelector('#apply');

slider.addEventListener('change', function () {
    output.innerHTML = slider.value;
    output2.innerHTML = slider.value;
})


apply.addEventListener('click', function () {
        createGrid(slider.value); 
        console.log(slider.value) 
    });


