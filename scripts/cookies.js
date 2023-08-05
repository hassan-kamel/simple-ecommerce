function setCookie(name, value, monthsToLive) {
  var date = new Date();
  console.log('date: ', date);
  date.setMonth(date.getMonth() + monthsToLive);
  console.log('date: ', date);
  document.cookie = `${name}=${value};expires=${date};`;
}
function deleteCookie(name) {
  setCookie(name, null, -10);
}

function getCookies() {
  var cArray = document.cookie.split('; ');
  var result = {};
  for (var i = 0; i < cArray.length; i++) {
    var cookie = cArray[i].split('=');
    result[cookie[0]] = cookie[1];
  }
  return result;
}
function getCookie(name) {
  return getCookies()[name];
}
function hasCookie(name) {
  return getCookies()[name] ? true : false;
}
