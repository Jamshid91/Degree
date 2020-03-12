let btnOne = document.querySelector('.btn-one');
let textOne = document.querySelector('.textOne');

btnOne.addEventListener('mouseenter', toggleOne);
btnOne.addEventListener('mouseout', outBlockOne)

function toggleOne() {
  textOne.style.display = 'block'
}

function outBlockOne() {
  textOne.style.display = 'none'
}


let btnTwo = document.querySelector('.btn-two');
let textTwo = document.querySelector('.textTwo');


btnTwo.addEventListener('mouseenter', toggleTwo);
btnTwo.addEventListener('mouseout', outBlockTwo)

function toggleTwo() {
  textTwo.style.display = 'block'
}

function outBlockTwo() {
  textTwo.style.display = 'none'
}


let btnThree = document.querySelector('.btn-three');
let textThree = document.querySelector('.textThree');

btnThree.addEventListener('mouseenter', toggleThree);
btnThree.addEventListener('mouseout', outBlockThree)

function toggleThree() {
  textThree.style.display = 'block'
}

function outBlockThree() {
  textThree.style.display = 'none'
}