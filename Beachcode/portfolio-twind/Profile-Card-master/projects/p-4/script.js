squares = document.querySelectorAll('.parent div');
const randomColor = (id) => {
	let num = (n) => Math.round(Math.random() * n);
	switch (id) {
		case 0:
			return `rgb(${num(255)}, ${0}, ${num(255)})`;
		case 1:
			return `rgb(${num(255)}, ${0}, ${num(255)})`;
		case 2:
			return `rgb(${0}, ${num(255)}, ${num(255)})`;
		case 3:
			return `rgb(${num(255)}, ${num(255)}, ${num(255)})`;
		default:
			return `rgb(${num(255)}, ${num(255)}, ${num(255)})`;
	}
};

squares.forEach((sqr, idx) => {
	let isClearInterval = true;
	let interval;
	console.log(idx);
	sqr.children[0].addEventListener('click', (e) => {
		let t = e.target.parentElement;
		t.className = t.className === 'active' ? 'inactive' : 'active';
		let color = randomColor(idx);
		console.log(color);
		if (t.className === 'inactive') {
			clearInterval(interval);
		} else {
			interval = setInterval(() => {
				color = randomColor(idx);
				t.style.backgroundColor = color;
			}, 500);
		}
		isClearInterval = !isClearInterval;
	});

  squares.forEach((sqr, idx) =>{
    sqr.children[0].addEventListener('click', (e) => {
      let t = e.target.parentElement
      t.style.backgroundColor = 'transparent'
    })
  })
  
});

