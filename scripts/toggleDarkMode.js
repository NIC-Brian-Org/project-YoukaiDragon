'use strict';

let el = document.getElementById("darkModeToggle");
el.addEventListener("click",toggleDarkMode);
el.addEventListener("mouseenter", highlightToggle);
el.addEventListener("mouseout", stopHighlight);

function toggleDarkMode() {
  if(el.textContent == "Dark Mode"){
    //switch to light mode
    document.body.id = "lightMode";
    el.textContent = "Light Mode";
  } else {
    //switch to dark mode
    document.body.id = "darkMode";
    el.textContent = "Dark Mode";
  }
}

function highlightToggle() {
  el.style.color = "orange";
  el.style.cursor = "pointer";
}

function stopHighlight() {
  el.style.color = "black";
}