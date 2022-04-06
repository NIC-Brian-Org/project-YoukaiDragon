'use strict';

let btn = document.createElement('button');
btn.innerHTML = 'Featured Items';
btn.style.position='relative';
btn.style.marginTop='10px';
btn.style.left='50%';
btn.onclick= function () {
  window.scrollTo({ top: 50, left: 0, behavior: 'smooth' });
};
let main = document.getElementsByTagName('main');
main[0].appendChild(btn);
