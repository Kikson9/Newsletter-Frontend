'use strict';

const form = document.getElementById('form');
const email = document.getElementById('email-input');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const small = document.getElementById('small');
const formControl = document.getElementById('form-control');

form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue = email.value.trim();
  if (emailValue === '') {
    small.innerHTML = 'Email cannot be empty';
    small.style.display = 'block';
    email.classList.add('email-js');
  } else if (!isEmail(emailValue)) {
    small.innerHTML = 'Valid email required';
    small.style.display = 'block';
    formControl.classList.add('email-js');
  } else {
    small.style.display = 'none';
    formControl.classList.remove('email-js');
    formControl.classList.add('email-js-2');
    window.location.href = 'success.html';
  }
});

function isEmail(email) {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    email
  );
}
