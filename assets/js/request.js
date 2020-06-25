const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const btnRequest = document.querySelector('.btn-request');
const modalRequest = document.querySelector('.modal-request');
const modalClose = document.querySelector('.modal-close');
const infoName = document.querySelector('.info-name');
const infoEmail = document.querySelector('.info-email');
const infoNumber = document.querySelector('.info-number');

btnRequest.addEventListener('click', clickRequest);

function clickRequest() {
  if (name.value == '' || email.value == '' || number == '') {
    name.style.border = '2px solid red';
    email.style.border = '2px solid red';
    number.style.border = '2px solid red';
  }
  else {
    name.style.border = '';
    email.style.border = '';
    number.style.border = '';
    modalRequest.style.display = 'block';
    infoName.innerHTML = name.value;
    infoEmail.innerHTML = email.value;
    infoNumber.innerHTML = number.value;
  }
}


modalClose.addEventListener('click', () => {
  modalRequest.style.display = 'none';
})

