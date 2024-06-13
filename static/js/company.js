document.addEventListener('DOMContentLoaded', () => {
  //валидация для формы о компании
  document.querySelector('.company-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('.company-email');
    const name = document.querySelector('.company-name');
    const tel = document.querySelector('.company-tel');

    const errorName = document.querySelector('.company-name-error');
    const errorEmail = document.querySelector('.company-email-error');
    const errorTel = document.querySelector('.company-tel-error');

    const nameReg = /^(?=.{2,30}$)+[A-Za-zА-Яа-я]+$/;
    const telReg = /^[8|+7]+[0-9]{7,12}$/;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;

    const validateName = (value) => nameReg.test(value);
    const validateEmail = (value) => emailReg.test(value);
    const validateTel = (value) => telReg.test(value);

    if (
      (!validateName(name.value) &&
        !validateEmail(email.value) &&
        !validateTel(tel.value)) ||
      (!name.value && !email.value && !tel.value)
    ) {
      errorName.textContent =
        'Введите имя содержащее буквы русского или англиского алфавита';
      errorEmail.textContent = 'Введите email в формате : example@ex.com';
      errorTel.textContent = 'Введите номер телефона в формате 81234567890';
    } else {
      document.querySelector('.company-title').innerText =
        'Спасибо за Вашу заявку! Наш менеджер свяжится с Вами в ближайшее время.';
      name.value = '';
      email.value = '';
      tel.value = '';
    }
  });

  //MODAL
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
});
