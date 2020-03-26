let menu = document.querySelector('.menu-burger');
let sub = document.querySelector('.sub-menu');

menu.addEventListener('click', toggle)
function toggle() {
  sub.classList.toggle('hidden')
}