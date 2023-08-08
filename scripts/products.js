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
  var url = 'https://dummyjson.com/products?limit=100';

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
      data = JSON.parse(xhr.response);
      products = data.products;
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
  for (var i = 0; i < products.length; i++) {
    totalString +=
      '<div class="shopping__product" onClick="getDetails(' +
      products[i].id +
      ')" ><div class="brand"><span>' +
      products[i].brand +
      '</span></div><div class="image"><img src="' +
      products[i].images[0] +
      '" alt=""></div><div class="title"><h2>' +
      products[i].title +
      '</h2></div><div class="price"><span>' +
      products[i].price +
      '</span></div><div class="rating"><span>' +
      products[i].rating +
      '</span></div><div class="action"><button onClick="addToCart(event,' +
      products[i].id +
      ')">add</button></div></div>';
  }
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
  localStorage.getItem('current', productID);
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
