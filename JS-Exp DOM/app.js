let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retreiveUserInput(event) {
  //let enteredText = inputElement.value;
  let enteredText = event.target.value;
  console.log(enteredText);
  //console.log(event);
}

inputElement.addEventListener("input", retreiveUserInput);
