var cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  var item = { prod_name: name, prod_price: price };
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  var cartCount = document.getElementById("cart-count");
  cartCount.innerText = cart.length;
  alert(name + " added to cart!");
}

var cartCount = document.getElementById("cart-count");
cartCount.innerText = cart.length;