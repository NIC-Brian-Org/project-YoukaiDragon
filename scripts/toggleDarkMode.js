'use strict';

let el = document.getElementById("darkModeToggle");
el.addEventListener("click", toggleDarkMode);
el.addEventListener("mouseenter", highlightToggle);
el.addEventListener("mouseout", stopHighlight);

let darkMode = getCookie("darkMode");
if(darkMode == "true") {
  darkModeOn(el);
  console.log("Dark Mode");
} else {
  darkModeOff(el);
  console.log("Light Mode");
}

function toggleDarkMode() {
  //create expiry date approx. 6 months from now
  let expires = 60 * 60 * 24 * 30 * 6;

  if(el.textContent == "Light Mode"){
    darkModeOff(el, expires);
  } else {
    darkModeOn(el, expires);
  }
}

function darkModeOn(toggle, expires) {
  document.body.id = "darkMode";
  toggle.textContent = "Light Mode";
  document.cookie = `darkMode=true; max-age=${expires}; path=/; secure`;
}

function darkModeOff(toggle, expires) {
  document.body.id = "lightMode";
  toggle.textContent = "Dark Mode";
  document.cookie = `darkMode=false; expires=${expires}; path=/; secure`;
}

function highlightToggle() {
  el.style.color = "orange";
  el.style.cursor = "pointer";
}

function stopHighlight() {
  el.style.color = "black";
}

function getCookie(name) {
  let nameEquals = name + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(';');
  for(let cookie of cookies) {
    cookie = cookie.trim();
    if(cookie.indexOf(nameEquals) == 0) {
      return cookie.substring(nameEquals.length, cookie.length);
    }
  }
  return null;
}
