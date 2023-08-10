var cart = [];
var products = [];
if (localStorage.getItem('cart'))
  cart = JSON.parse(localStorage.getItem('cart'));
if (localStorage.getItem('products'))
  products = JSON.parse(localStorage.getItem('products'));

var mySet = new Set(cart);

function addToCart(event, productID) {
  event.stopPropagation();
  var products = JSON.parse(localStorage.getItem('products'));
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === productID) {
      mySet.add(productID);
      if (mySet.size > cart.length) {
        cart.push(products[i]);
        cart[cart.findIndex((item) => item.id === productID)].quantity = 1;
      } else {
        cart[cart.findIndex((item) => item.id === productID)].quantity++;
      }
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));

  displayCart();
}

//
/**
 *
 */
function displayCart() {
  // console.log('cart: ', cart);
  var cartItems = '';
  for (var i = 0; i < cart.length; i++) {
    cartItems +=
      '<div class="cart__item"><img src="' +
      cart[i].images[0] +
      '" alt=""><h3>' +
      cart[i].title +
      '</h3><p>' +
      cart[i].quantity +
      '</p><button onClick="addQuantity(' +
      cart[i].id +
      ')"> + </button><button onClick="minusQuantity(' +
      cart[i].id +
      ')"> - </button><button onClick="removeItem(' +
      cart[i].id +
      ')"> x </button></div>';
  }
  document.getElementById('cartContainer').innerHTML = cartItems;
}
displayCart();

function addQuantity(id) {
  var myIndex = cart.findIndex((item) => item.id === id);
  cart[myIndex].quantity++;
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}
function minusQuantity(id) {
  var myIndex = cart.findIndex((item) => item.id === id);
  cart[myIndex].quantity--;
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}
function removeItem(id) {
  var myIndex = cart.findIndex((item) => item.id === id);
  cart.splice(myIndex, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

document.getElementById('cartButton').addEventListener('click', function () {
  document.getElementById('cartContainer').classList.toggle('hidden');
});
