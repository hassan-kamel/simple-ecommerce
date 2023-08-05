var profileName = document.getElementById('loggedUser');
var profileNameEl = document.getElementById('loggedUserEl');
var logButton = document.getElementById('logButton');
var logOut = document.getElementById('logout');

profileNameEl.innerHTML = getCookie('username');

if (isLogged()) logButton.style.display = 'none';
else profileName.style.display = 'none';

logOut.addEventListener('click', function () {
  deleteCookie('username');
  deleteCookie('age');
  deleteCookie('visited');
  window.open('./register.html', '_self');
});
