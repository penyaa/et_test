const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

document.getElementsByClassName('close')[0].addEventListener('click', () => {
  modal.style.display = 'none';
});

//sign in form
const linkEnter = document.querySelector('.registration__form-signin-btn');
linkEnter.addEventListener('click', () => {
  document.querySelector('.registration').style.display = 'none';
  document.querySelector('.signin').style.display = 'block';
});

const linkReg = document.querySelector('.signin__form-reg-btn');
linkReg.addEventListener('click', () => {
  document.querySelector('.signin').style.display = 'none';
  document.querySelector('.registration').style.display = 'block';
});

//переход в личный кабинет
const signInForm = document.querySelector('.sign-in');
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.sign-name');
  const password = document.querySelector('.sign-password');

  if (name.value === 'admin' && password.value === '12345') {
    window.location.href = 'account.html';
  } else {
    alert('Неверный логин или пароль, попробуйте еще раз.');
  }
});
