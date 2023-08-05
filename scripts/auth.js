if (isLogged()) window.open('./index.html', '_self');
console.log('isLogged(): ', isLogged());

var form = document.getElementsByTagName('form')[0];

var logIn = function (e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  var user = {
    name: formData.get('username'),
    age: formData.get('age'),
  };

  setCookie('username', user.name, 1);
  setCookie('age', user.age, 1);
  setCookie('visited', 0, 1);
  window.open('./index.html', '_self');
};
