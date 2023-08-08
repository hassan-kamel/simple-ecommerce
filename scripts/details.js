var current = 1;
var products = [];
if (localStorage.getItem('current')) current = localStorage.getItem('current');
if (localStorage.getItem('products'))
  products = JSON.parse(localStorage.getItem('products'));
