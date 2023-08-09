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
      mySet.size > cart.length && cart.push(products[i].id);
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
  var cartProducts = [];
  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < products.length; j++) {
      if (cart[i] === products[j].id) {
        cartProducts.push(products[j]);
        break;
      }
    }
  }

  var cartItems = '';
  for (var i = 0; i < cartProducts.length; i++) {
    cartItems +=
      '<div class="cart__item"><img src="' +
      cartProducts[i].images[0] +
      '" alt=""><h3>' +
      cartProducts[i].title +
      '</h3><p>0</p><button> + </button><button> - </button><button> x </button></div>';
  }
  document.getElementById('cartContainer').innerHTML = cartItems;
}
displayCart();

function showCart() {}
document.getElementById('cartButton').addEventListener('click', function () {
  document.getElementById('cartContainer').classList.toggle('hidden');
});
