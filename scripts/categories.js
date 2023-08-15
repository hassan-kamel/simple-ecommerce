var categoryOptions = document.getElementById('categoryOptions');

var categories = [];

if (localStorage.getItem('categories')) {
  categories = JSON.parse(localStorage.getItem('categories'));
  readCategories(categories);
} else getCategories();

function getCategories() {
  var xhr = new XMLHttpRequest();
  var url = 'https://dummyjson.com/products/categories';

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
      data = JSON.parse(xhr.response);
      categories = data;
      localStorage.setItem('categories', JSON.stringify(categories));

      readCategories(categories);
    } else {
      console.log('Request failed. Status: ' + xhr.status);
    }
  };
  xhr.onprogress = function () {
    // readCategories();
  };

  xhr.open('GET', url);
  xhr.send();
}

function readCategories(categories) {
  var totalString = '<option value="">Choose category</option>';
  for (var i = 0; i < 8; i++) {
    totalString +=
      '<option value="' + categories[i] + '">' + categories[i] + '</option>';
  }
  categoryOptions.innerHTML = totalString;
}

categoryOptions.addEventListener('change', function (event) {
  !!!event.target.value
    ? readProducts(products)
    : readProducts(filterProducts(event.target.value, products));
});
