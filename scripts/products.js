// get dom elements
var productsContainer = document.getElementById('productsContainer');
var products = [];
var currentProducts = [];

if (localStorage.getItem('products')) {
  products = JSON.parse(localStorage.getItem('products'));
  currentProducts = products;
  readProducts(products);
} else getProducts();

function getProducts() {
  var xhr = new XMLHttpRequest();
  var url = 'https://dummyjson.com/products?limit=40';

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
      data = JSON.parse(xhr.response);
      products = data.products;
      products = products.map((product, idx) => {
        return { ...product, ...arrrr[idx] };
      });
      localStorage.setItem('products', JSON.stringify(products));
      currentProducts = products;
      readProducts(products);
    } else {
      console.log('Request failed. Status: ' + xhr.status);
    }
  };
  xhr.onprogress = function () {
    readProducts();
  };

  xhr.open('GET', url);
  xhr.send();
}

function htmlProducts(products) {
  var totalString = '';
  var arr = [];

  for (var i = 0; i < products.length; i++) {
    // if (i > 5) break;
    arr.push(products[i].title);
    totalString +=
      '<div class="shopping__product" onClick="getDetails(' +
      products[i].id +
      ')" ><div class="image"><img src="' +
      products[i].images[0] +
      '" alt=""></div><div class="price"><span>$' +
      products[i].price +
      '</span></div><div class="rating"><span>' +
      products[i].rating +
      '</span></div><div class="product-info"><div class="title"><h2>' +
      products[i].title +
      '</h2></div><div class="description"><span>' +
      products[i].description +
      '</span></div><div class="action"><button onClick="addToCart(event,' +
      products[i].id +
      ')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm9.804-16.5l-3.431 12h-2.102l2.542-9h-5.993c.113.482.18.983.18 1.5 0 3.59-2.91 6.5-6.5 6.5-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.196zm-6.304 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-4.5-10.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/></svg></button></div></div></div>';
  }
  console.log('arr: ', arr);
  return totalString;
}

function readProducts(products) {
  if (!products)
    productsContainer.innerHTML = '<p style="font-size :50px">Loading</p>';
  else {
    currentProducts = products;
    productsContainer.innerHTML = htmlProducts(products);
  }
}

function filterProducts(category, products) {
  var newProducts = [];

  for (var i = 0; i < products.length; i++) {
    if (products[i].category === category) newProducts.push(products[i]);
  }

  currentProducts = newProducts;
  return newProducts;
}

function sortAscBy(sorter, products) {
  return products.sort(function (a, b) {
    return a[sorter] - b[sorter];
  });
}

function sortDescBy(sorter, products) {
  return products.sort(function (a, b) {
    return b[sorter] - a[sorter];
  });
}

function searchBy(query, products) {
  var newProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].title.toLowerCase().includes(query.toLowerCase()))
      newProducts.push(products[i]);
  }
  return newProducts;
}

function getDetails(productID) {
  localStorage.setItem('current', productID);
  window.open('./details.html', '_self');
}

document.getElementById('sortOptions').addEventListener('change', function (e) {
  var value = e.target.value.split(';')[0];
  var desc = e.target.value.split(';')[1];
  desc
    ? readProducts(sortDescBy(value, currentProducts))
    : readProducts(sortAscBy(value, currentProducts));
});

document.getElementById('mySearch').addEventListener('keyup', function (e) {
  var value = e.target.value;
  readProducts(searchBy(value, products));
});
