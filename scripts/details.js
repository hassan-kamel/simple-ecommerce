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

productDetails.style.backgroundImage = `url(${currentProduct.thumbnail})`;
productDetails.innerHTML = `
<div class="container">
            <div class="product__wrapper">
                <div class="product__img-container">
                    <img src="${currentProduct.images[0]}" alt="">
                </div>
                <div class="product__info">
                    <h5>${currentProduct.category}</h5>
                    <h2>${currentProduct.title}</h2>
                    <h6>${currentProduct.brand}</h6>
                    <p>${currentProduct.description}</p>
                    <h3>${currentProduct.price}</h3>
                    <button onclick="addToCart(event,${currentProduct.id})">Add To Cart</button>
                </div>
            </div>
        </div>
`;
