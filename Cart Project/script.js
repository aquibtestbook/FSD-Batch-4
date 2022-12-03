// 1. Show Products on the screen
// - Create product array
// - Use forEach method
// 2. Add buttons to each product
// 3. Calculate total amount
// 4. Show Cart
let cart = [];

let products = [
    {
        productId: 1,
        productName: "Shampoo",
        productPrice: 700.00,
        productImage: "https://plus.unsplash.com/premium_photo-1669833450675-e7cd7666e377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        productId: 2,
        productName: "Perfume",
        productPrice: 500.00,
        productImage: "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        productId: 3,
        productName: "Gel",
        productPrice: 1000.00,
        productImage: "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
];

function addToCart(id) {
    cart.push(products[id - 1]);
    clearCart();
    cart.forEach((product) => {
        let cartDisplay = document.getElementById("cart");
        let productHeading = document.createElement("h1");
        let cartPriceDisplay = document.createElement("h1");
        let cartPrice = 0;
        cartPrice += product.productPrice;
        cartPriceDisplay.innerHTML = cartPrice;
        productHeading.innerHTML = product.productName;
        cartDisplay.appendChild(productHeading);
        cartDisplay.appendChild(cartPriceDisplay);
    });
}

function clearCart() {
    document.getElementById("cart").innerHTML = "";
};

products.forEach((product) => {
    let productDiv = document.createElement("div");
    let productButton = document.createElement("button");
    productButton.innerHTML = "Add to cart";
    productButton.setAttribute("id", product.productId);
    productButton.addEventListener("click", () => {
        addToCart(productButton.getAttribute("id"));
    });
    let productName = document.createElement("h2");
    productName.innerHTML = product.productName;
    let productPrice = document.createElement("h3");
    productPrice.innerHTML = product.productPrice;
    let productImage = document.createElement("img");
    productImage.setAttribute("src", product.productImage);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productButton);
    let productSection = document.getElementById("products");
    productSection.appendChild(productDiv);
});