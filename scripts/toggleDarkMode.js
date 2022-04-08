'use strict';
 
//create the light/dark mode toggle
let toggle = document.createElement("p");
toggle.innerHTML = "Light Mode";
toggle.id = "darkModeToggle";

let header = document.getElementsByTagName("header");
header[0].appendChild(toggle);

toggle.addEventListener("click", toggleDarkMode);
toggle.addEventListener("mouseenter", highlightToggle);
toggle.addEventListener("mouseout", stopHighlight);

//set initial mode based on cookie
let darkMode = getCookie("darkMode");
if(darkMode == "true") {
  darkModeOn(toggle);
  console.log("Dark Mode");
} else {
  darkModeOff(toggle);
  console.log("Light Mode");
}

function toggleDarkMode() {
  //create expiry date approx. 6 months from now
  let expires = 60 * 60 * 24 * 30 * 6;

  if(toggle.textContent == "Light Mode"){
    darkModeOff(toggle, expires);
  } else {
    darkModeOn(toggle, expires);
  }
}

/*
These two functions take as input a pointer to the light/dark mode toggle element
and an expiry time in seconds
*/
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
  this.style.color = "orange";
  this.style.cursor = "pointer";
}

function stopHighlight() {
  this.style.color = "black";
}

//This function takes the name of a cookie as input and returns the value of that cookie as a string
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