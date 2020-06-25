const calcHouse = document.getElementById("calcHouse");
const rangeCub = document.getElementById("rangeCub");
const medium = document.getElementById("medium");
const mediumObj = document.getElementById("mediumObj");
const btnLight = document.getElementById("btnLight");
const btnMedium = document.getElementById("btnMedium");
const btnFull = document.getElementById("btnFull");

btnLight.addEventListener('click', () => {
  if (true) {
    calcHouse.addEventListener('input', addPrice);
    function addPrice() {
      rangeCub.innerHTML = this.value;
      medium.innerHTML = Math.round(this.value * 42.5);
      mediumObj.innerHTML = Math.round(this.value * 425);
    }
  }
  medium.innerHTML = '0'
  mediumObj.innerHTML = '0'
});

btnMedium.addEventListener('click', () => {
  if (true) {
    calcHouse.addEventListener('input', addPrice);
    function addPrice() {
      rangeCub.innerHTML = this.value;
      medium.innerHTML = Math.round(this.value * 4.5);
      mediumObj.innerHTML = Math.round(this.value * 450);
    }
  }
  medium.innerHTML = '0'
  mediumObj.innerHTML = '0'
});
btnFull.addEventListener('click', () => {
  if (true) {
    calcHouse.addEventListener('input', addPrice);
    function addPrice() {
      rangeCub.innerHTML = this.value;
      medium.innerHTML = Math.round(this.value * 5);
      mediumObj.innerHTML = Math.round(this.value * 500);
    }
  }
  medium.innerHTML = '0'
  mediumObj.innerHTML = '0'
});