function addToCart(event, productID) {
  event.stopPropagation();
  var products = JSON.parse(localStorage.getItem('products'));
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === productID) {
      mySet.add(productID);
      console.log('mySet: ', mySet);
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
  displayQuantity();
}

function displayCart() {
  // console.log('cart: ', cart);
  var cartItems = '';
  for (var i = 0; i < cart.length; i++) {
    cartItems += `
    <div class="cart__item">
      <div class="item-header">
        <h3>${cart[i].title}</h3>
        <h3>$${cart[i].price}</h3>
      </div>
      <div class="item-info">
        <div class="item-img">  
          <img src="${cart[i].images[0]}" alt="">
        </div>
        <div class="item-action">
          <button onClick="minusQuantity(${cart[i].id})"> 
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 20.011h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.469 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-12.25 6.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75z" fill-rule="nonzero"/></svg>
          </button>
          <p>${cart[i].quantity}</p>
          <button onClick="addQuantity(${cart[i].id})">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-9.25 6.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3h3c.414 0 .75.336.75.75s-.336.75-.75.75h-3v3c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75z" fill-rule="nonzero"/></svg>
          </button>
        </div> 
      </div>
      <div class="item-remove">
          <button onClick="removeItem(${cart[i].id})">
            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>
            <span>Remove</span>
            </button>
      </div> 
    </div>`;
  }
  document.getElementById('cartItems').innerHTML = cartItems;
  displayQuantity();
  displayTotal();
}

function addQuantity(id) {
  var myIndex = cart.findIndex((item) => item.id === id);
  cart[myIndex].quantity++;
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function minusQuantity(id) {
  var myIndex = cart.findIndex((item) => item.id === id);
  cart[myIndex].quantity--;
  if (cart[myIndex].quantity <= 0) removeItem(id);
  else localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function removeItem(id) {
  mySet.delete(id);
  console.log('mySet: ', mySet);

  var myIndex = cart.findIndex((item) => item.id === id);
  cart.splice(myIndex, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function displayQuantity() {
  if (cart.length !== 0) {
    document.getElementById('cartQuantity').style.display = 'flex';
    document.getElementById('cartQuantity').innerHTML = cart.length;
  } else document.getElementById('cartQuantity').style.display = 'none';
}

function displayTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity * item.price;
  });
  document.getElementById('cartTotalPrice').innerHTML = `$${total}`;
}

var cart = [];
var products = [];
if (localStorage.getItem('cart'))
  cart = JSON.parse(localStorage.getItem('cart'));
if (localStorage.getItem('products'))
  products = JSON.parse(localStorage.getItem('products'));

var mySet = new Set(cart);

displayCart();
document.getElementById('cartButton').addEventListener('click', function () {
  document.getElementById('cartContainer').classList.toggle('cart-toggle');
});
document.getElementById('cartClose').addEventListener('click', function () {
  document.getElementById('cartContainer').classList.remove('cart-toggle');
});
