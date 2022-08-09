const email = document.querySelector('.email');
const password = document.querySelector('.password');
const labelEmail = document.querySelector('.labelEmail');
const labelPass = document.querySelector('.labelPass');
const loginDiv = document.querySelector('.loginDiv');

forEmail();
function forEmail() {
  if (email.addEventListener('click', () => {
    labelEmail.classList.add('label-active');
    labelPass.classList.remove('label-active');
  }));
}

forPass();
function forPass() {
  if (password.addEventListener('click', () => {
    labelPass.classList.add('label-active');
    labelEmail.classList.remove('label-active');
  }));
};