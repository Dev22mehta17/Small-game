
// basic game Start

const p1button =document.querySelector('#p1button');
const p2button =document.querySelector('#p2button');
const resetButton =document.querySelector('#reset');
const p1display =document.querySelector('#p1display');
const p2display =document.querySelector('#p2display');
const winningscoreselect = document.querySelector('#playto')

let p1score =0;
let winningscore=5;
let isgameover=false;

p1button.addEventListener('click',function() {
    if(!isgameover){
        p1score+=1;
        if(p1score===winningscore){
            isgameover=true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            p1button.disabled=true;
            p2button.disabled=true;
        }
    p1display.textContent=p1score;}
})
let p2score =0;
p2button.addEventListener('click',function() {
    if(!isgameover){
        p2score+=1;
        if(p2score===winningscore){
            isgameover=true;
            p1display.classList.add('loser');
            p2display.classList.add('winner');
            p1button.disabled=true;
            p2button.disabled=true;
        }
    p2display.textContent=p2score;}
})
winningscoreselect.addEventListener('change', function() {
    winningscore=parseInt(this.value);
    reset();
})
resetButton.addEventListener('click',reset);
function reset() {
    isgameover=false;
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('winner','loser');
    p1button.disabled=false;
    p2button.disabled=false;
}

// game ends
