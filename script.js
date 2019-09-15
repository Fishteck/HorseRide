let field = document.querySelector('.field');


let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
    let m = 0,
        out ='';

    for (let i = 0;i < chess.length;i++) {
        let arr = chess[i];
        for (let j = 0;j < arr.length;j++) {
            if (m % 2 == 0) {
               out += `<div class="chess_block" data-y="${i}" data-x="${j}"></div>`;
            } else {
                out += `<div class="chess_block bg_black" data-y="${i}" data-x="${j}"></div>`;
            }
            m++;
        }
        m++;
    }
    field.innerHTML = out;
    document.querySelectorAll('.chess_block').forEach(function(elem) {
        elem.addEventListener('click', horseMove);
        elem.style.cursor = 'pointer';
    });
}

draw();

function horseMove() {
    document.querySelectorAll('.chess_block').forEach(function(elem) {
        elem.classList.remove('green');
        elem.classList.remove('active');
    });
    let x = this.dataset.x,
        y = this.dataset.y;
    
    this.classList.add('green');
    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector(`.chess_block[data-x='${+x + 2}'][data-y='${+y + 1}']`).classList.add('active');
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector(`.chess_block[data-x='${+x + 2}'][data-y='${+y - 1}']`).classList.add('active');
    }
    if (+x - 2 >= 0 && +y + 1 < 8) {
        document.querySelector(`.chess_block[data-x='${+x - 2}'][data-y='${+y + 1}']`).classList.add('active');
    }
    if (+x - 2 >= 0 && +y - 1 >= 0) {
        document.querySelector(`.chess_block[data-x='${+x - 2}'][data-y='${+y - 1}']`).classList.add('active');
    }
    if (+x + 1 < 8 && +y - 2 >= 0) {
        document.querySelector(`.chess_block[data-x='${+x + 1}'][data-y='${+y - 2}']`).classList.add('active');
    }
    if (+x - 1 >= 0 && +y - 2 >= 0) {
        document.querySelector(`.chess_block[data-x='${+x - 1}'][data-y='${+y - 2}']`).classList.add('active');
    }
    if (+x + 1 < 8 && +y + 2 < 8) {
        document.querySelector(`.chess_block[data-x='${+x + 1}'][data-y='${+y + 2}']`).classList.add('active');
    }
    if (+x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector(`.chess_block[data-x='${+x - 1}'][data-y='${+y + 2}']`).classList.add('active');
    }
    
}




