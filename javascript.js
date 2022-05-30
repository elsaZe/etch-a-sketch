function createGrid(width){
    let size = 960/width;
    console.log(size)
    for(let i = 0; i < width; i++) {
        const container = document.querySelector('#container')
        console.log(container)
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.height = size+"px";
        container.appendChild(row);
        for (let j = 0; j < width; j++) {
            console.log("hello")
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
createGrid(150);
