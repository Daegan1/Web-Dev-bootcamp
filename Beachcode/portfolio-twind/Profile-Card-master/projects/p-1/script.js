const button = document.querySelector('button');
const reset = document.querySelector('button:nth-child(2)')
const box = document.querySelector('.box')

function handleClick() {
	let num = +box.textContent
	num += 1
	box.innerHTML = num
}

function handleReset(){
	box.textContent = '0'
}

button.addEventListener('click', handleClick);
reset.addEventListener('click', handleReset)
