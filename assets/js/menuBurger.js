let menu = document.querySelector('.menu-burger');
let menuText = document.querySelector('.menu-text');

let hidden = document.querySelector('.hidden');
let phone = document.querySelector('.phone');
console.log(phone)


menu.addEventListener('click', toggle);
menuText.addEventListener('click', toggle);

function toggle() {
  hidden.classList.toggle('hidden');
  phone.style.display = 'none'
}