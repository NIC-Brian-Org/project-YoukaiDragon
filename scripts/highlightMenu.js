'use strict';

let menu = document.getElementById("menu")
menu.addEventListener("mouseover", highlight)
menu.addEventListener("mouseout", endHighlight)


function highlight(e){
  if(e.target.nodeName == "TD"){
    e.target.parentNode.style.backgroundColor = "black"
  }
}

function endHighlight(e){
  if(e.target.nodeName == "TD"){
    e.target.parentNode.style.backgroundColor = ""
  }
}