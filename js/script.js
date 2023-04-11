// select all add-to-cart buttons on page
// add event listener on buttons to listen for a click, which will increase the number on the shopping cart, signifying how many items are currently in said cart
// select span element containing the number and store in a variable so that we can convert it into an integer and increase the value whenever user clicks on add-to-cart buttons

const addCartButtons = document.getElementsByClassName("btn-add");

for (const button of addCartButtons) {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const numInCart = document.querySelector(".cart-num");
    numInCart.textContent = parseInt(numInCart.textContent) + 1;
    confirm("Add to cart?");
  });
}
