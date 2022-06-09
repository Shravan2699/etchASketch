const container = document.querySelector('.container');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');



//You can reduce the color 10% every time it passes through the same cell.255-10%
//Every time the color function runs,the rgb value is reduced by 10% for that ce,untill it becomes 0,0,0(black);

//31-05
//The color show reset to rgb(255,255,255),when moving out of the one div and then change b

let r = 255;
let g = 255;
let b = 255;

function changeColor(){
    r = r - 10/100*r;
    g = g - 10/100*g;
    b = b - 10/100*b;
    return `rgb(${r},${g},${b})`;
}

function reset(){
    r = 255;
    g = 255;
    b = 255;
    return `rgb(${r},${g},${b})`
}


let input;
button.addEventListener('click',function(){
    input = parseInt(prompt('Please enter the number of sides per squares per side per grid(Maximum = 100)'))
    console.log(input);

    let rowTot = input;
    let cellTot = rowTot * rowTot;
    container.style.display = 'grid';
    container.style.display = 'flex auto';
    container.style.gridTemplateRows = `repeat(${rowTot},1fr)`;
    container.style.gridTemplateRows = `repeat(${rowTot},1fr)`;

    let row = 1;
    let column = 1;
    for (let i = 0;i <= cellTot;i++){
        let cell = document.createElement('div');
        cell.classList.add = 'smallCell';
        // cell.style.border = `1px solid black`;
        cell.style.gridRow = row;
        cell.style.gridColumn = column;
        // cell.textContent = i;
        column += 1;
        if (column === rowTot + 1){
            row +=1;
            column = 1;
        };
        container.appendChild(cell);
        cell.addEventListener('mouseenter',function(){
        console.log(changeColor());
        cell.style.backgroundColor = 'black';
        })
    }
    //Instead of changing color for every cell,only change the color of the cell which is being clicked on
    
})




