//document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://academy.com";

//add an Element
//create a new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://goducks.com";
newAnchorElement.textContent = "this is a link to Oregon Ducks sports";
//get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");
//insert new element into the parent element content
firstParagraph.append(newAnchorElement);

//Remove Elements
//1.select the elements that need to be removed
let firstH1Element = document.querySelector("h1");
//2.remove it!
//firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element);

//MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

//InnerHtml

console.log(firstParagraph.innerHTML);