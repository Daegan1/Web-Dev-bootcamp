let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowChars = productNameInputElement.maxLength;

//console.dir(productNameInputElement)

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remaingCharacters = maxAllowChars - enteredTextLength;

  remainingCharsElement.textContent = remaingCharacters;

  if (remaingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remaingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  } else {
    remainingCharsElement.classList.remove("error", "warning");
    productNameInputElement.classList.remove("error","warning");

  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
