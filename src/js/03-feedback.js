import throttle from 'lodash.throttle';

const userForm = document.querySelector('.feedback-form');

userForm.addEventListener('input', () => {
  saveFormData();
});

const saveFormData = throttle(() => {
  const email = userForm.elements.email.value;
  const message = userForm.elements.message.value;

  const userData = { email, message };

  const userDataJSON = JSON.stringify(userData);
  localStorage.setItem('feedback-form-state', userDataJSON);
}, 500);

function updateUserForm() {
  const userDataJSON = localStorage.getItem('feedback-form-state');
  if (userDataJSON) {
    const userData = JSON.parse(userDataJSON);
    userForm.elements.email.value = userData.email || '';
    userForm.elements.message.value = userData.message || '';
  }
}

window.addEventListener('load', updateUserForm);

userForm.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = userForm.elements;

  const userData = {
    email: email.value,
    message: message.value,
  };

  console.log(userData);
  userForm.reset();
  localStorage.removeItem('feedback-form-state');
});
