'use strict';

let btn = document.createElement('button');
btn.innerHTML = 'Featured Items';
btn.id  = 'featuredScroll';
btn.style.position = 'relative';
btn.style.marginTop = '10px';
btn.style.left = '50%';
btn.style.visibility = 'hidden'
btn.onclick= function () {
  window.scrollTo({ top: 50, left: 0, behavior: 'smooth' });
};
let main = document.getElementsByTagName('main');
main[0].appendChild(btn);


//have the button start visible if the page loaded with a store tap open
let tabs = document.getElementsByClassName('tabcontent');
for(let i = 0; i < tabs.length; i++){
  if(tabs[i].style.display == 'flex') {
    btn.style.visibility = 'visible';
  }
}

let tablinks = document.getElementsByClassName('tablinks');
for(let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener('click', revealFeaturedButton);
}

function revealFeaturedButton() {
  let btn = document.getElementById('featuredScroll');
  btn.style.visibility = 'visible';
}