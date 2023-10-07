document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = parseFloat(product.querySelector("p").textContent.replace("$", ""));
            total += productPrice;
            cartTotal.textContent = total.toFixed(2);

            const cartItem = document.createElement("li");
            cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItemsList.appendChild(cartItem);
        });
    });
});
