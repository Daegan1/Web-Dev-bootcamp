const button = document.querySelector('button');
const reset = document.querySelector('button:nth-child(2)');
let box = document.querySelector('.box');
let count = 0;

function handleClick() {
    count = count + 1;
    box.innerHTML = count;
}

function handleReset() {
    box.innerHTML = 0;
}

button.addEventListener('click', handleClick);
reset.addEventListener('click', handleReset);