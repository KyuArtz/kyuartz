document.addEventListener("DOMContentLoaded", function() {
  if (!getCookie("popupShown")) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');

    overlay.style.display = 'block';
    popup.style.display = 'block';
    setCookie("popupShown", true, 365); // Cookie expires in 365 days
  }
});

function closePopup() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  overlay.style.display = 'none';
  popup.style.display = 'none';
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}