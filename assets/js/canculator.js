let calc = document.querySelector(".calc-house");

calc.addEventListener("input", calcCost);

function calcCost() {
  let rangeCub = document.querySelector(".range-cub");
  let medium = document.querySelector(".medium");
  let mediumObj = document.getElementById("obj");

  rangeCub.innerHTML = this.value++;
  medium.innerHTML = Math.round(this.value * 4.85);
  mediumObj.innerHTML = Math.round(this.value * 48.5);
  console.log(mediumObj);
}
