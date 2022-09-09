//const { application } = require("express");//why is this here?

const cartItemUpdateFormElements = document.querySelectorAll(
  ".cart-item-management"
);
const cartTotalPriceElement = document.getElementById("cart-total-price");

const cartBadgeElements = document.querySelectorAll(".nav-items .badge");

async function updateCartItem(event) {
  event.preventDefault();

  const form = event.target;

  const productId = from.dataset.productid;
  const csrfToken = form.dataset.csrf;
  const quantity = form.firstElementChild.value;

  let response;
  try {
    response = await fetch("/cart/items", {
      method: "PATCH",
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
        _csrf: csrfToken,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    alert("something went wronnng");
    return;
  }
  if (!response.ok) {
    alert("something went wronnng");
    return;
  }
  const responseData = await response.json();

  if (responseData.updatedCartData.updatedItemPrice === 0) {
    from.parentElement.parentElement.remove();
  } else {
    const cartItemTotalPriceELement =
      form.parentELement.querySelector(".cart-item-price");
    cartItemTotalPriceELement.textContent =
      responseData.updatedCartItem.updatedItemPrice.toFixed(2);
  }

  cartTotalPriceElement.textContent =
    responseData.updatedCartItem.newTotalPrice.toFixed(2);

  for (const cartBadgeElement of cartItemUpdateFormElements) {
    cartBadge.textContent = responseData.updatedCartItem.newTotalQuantity;
  }
}

for (const formElement of cartItemUpdateFormElements) {
  formElement.addEventListener("submit", updateCartItem);
}
