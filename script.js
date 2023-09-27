const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const password = document.querySelector('#f-password');
const passwordConf = document.querySelector('#c-password');
const errorFirstName = document.querySelector('#first-error');
const errorLastName = document.querySelector('#last-error');
const errorEmail = document.querySelector('#email-error');
const errorPhone = document.querySelector('#phone-error');
const errorPassword = document.querySelector('#f-password-error');
const errorPasswordConf = document.querySelector('#c-password-error');

firstName.addEventListener('input', checkFirstName);
lastName.addEventListener('input', checkLastName);
email.addEventListener('input', checkEmail);
phoneNumber.addEventListener('input', checkPhone);
password.addEventListener('input', checkFirstPassword);
passwordConf.addEventListener('input', confirmPassword);

function checkFirstName() {
  if (firstName.value === '') {
    errorFirstName.textContent = 'Type your first name.';
  } else {
    errorFirstName.textContent = '';
  }
};

function checkLastName() {
  if (lastName.value === '') {
    errorLastName.textContent = 'Type your last name.';
  } else {
    errorLastName.textContent = '';
  }
};

function checkEmail() {
  if (email.validity.valid) {
    errorEmail.textContent = '';
  } else {
    errorEmail.textContent = 'Enter in a valid Email. \nex(hedgieHog@email.com)';
  }
};

function checkPhone() {
  if (phoneNumber.validity.valid) {
    errorPhone.textContent = '';
  } else {
    errorPhone.textContent = 'Enter a 10 digit phone number';
  }
};

function checkFirstPassword() {
  if (password.validity.valid) {
    errorPassword.textContent = '';
  } else {
    errorPassword.textContent = 'Password must be at least 8 digits, one capital letter, and one special character.';
  }
  if (password.value === passwordConf.value) {
    errorPasswordConf.textContent = '';
  } 
};

function confirmPassword() {
  if (password.value === passwordConf.value) {
    errorPasswordConf.textContent = '';
  } else {
    errorPasswordConf.textContent = 'Passwords do not match.';
  }
};