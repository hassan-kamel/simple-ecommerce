var current = 1;
var products = [];
if (localStorage.getItem('current')) current = localStorage.getItem('current');
if (localStorage.getItem('products'))
  products = JSON.parse(localStorage.getItem('products'));

var currentProduct = {};

for (var i = 0; i < products.length; i++) {
  if (products[i].id === Number(current)) currentProduct = products[i];
}
console.log('currentProduct: ', currentProduct);

var productDetails = document.getElementById('productDetails');

// productDetails.style.backgroundImage = `url(${currentProduct.thumbnail})`;
productDetails.innerHTML = `
<div class="container">
        <div class="detailed__wrapper">
          <div class="detailed__img-container">
            <img src="${currentProduct.images[0]}" alt="" />
          </div>
          <div class="detailed__info">
            <h5>${currentProduct.category}</h5>
            <h2>${currentProduct.title}</h2>
            <div class="detailed__brand-rate">
              <h6>${currentProduct.brand}</h6>
              <h3 class="detailed__rate">${currentProduct.rating}</h3>
            </div>
            <p>
              ${currentProduct.description}
            </p>
            <h3 class="detailed__price">$${currentProduct.price}</h3>

            <button onclick="addToCart(event,${currentProduct.id})">
              <span>Add To Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm9.804-16.5l-3.431 12h-2.102l2.542-9h-5.993c.113.482.18.983.18 1.5 0 3.59-2.91 6.5-6.5 6.5-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.196zm-6.304 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-4.5-10.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
`;
