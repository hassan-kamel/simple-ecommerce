/**===========Form Validation */
const nameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit');

const validateArray = [0, 0, 0];
// Full Name VAlidation
nameInput.addEventListener('keyup', (event) => {
  nameInput.classList.remove('green-border');
  validateArray[0] = 0;

  if (event.target.value.length > 3) {
    validateArray[0] = 1;
    nameInput.classList.add('green-border');
  }
  submitBtnValidation();
});

// Email Validation
emailInput.addEventListener('keyup', (event) => {
  emailInput.classList.remove('green-border');
  validateArray[1] = 0;

  const regex = /[a-zA-z0-9-]+@[a-zA-z]+\.[a-zA-z]{2,}$/gm;

  if (regex.test(emailInput.value)) {
    validateArray[1] = 1;
    emailInput.classList.add('green-border');
  }
  submitBtnValidation();
});

// Message Validation
messageInput.addEventListener('keyup', (event) => {
  nameInput.classList.remove('green-border');
  validateArray[2] = 0;

  if (event.target.value.length >= 100) {
    validateArray[2] = 1;

    messageInput.classList.add('green-border');
  }
  submitBtnValidation();
});

console.log(validateArray);

function submitBtnValidation() {
  console.log(validateArray);

  if (validateArray.includes(0)) {
    console.log('error');
    console.log('submitBtn: ', submitBtn);
    submitBtn.setAttribute('disabled', '1');
  } else {
    console.log('success');
    console.log('submitBtn: ', submitBtn);

    submitBtn.removeAttribute('disabled');
  }
}
