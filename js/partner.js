//open sponsor description in partner.html

document.addEventListener('DOMContentLoaded', function () {
  const openButtons = document.querySelectorAll('.open');
  const closeButtons = document.querySelectorAll('.close');
  const descriptions = document.querySelectorAll('.container-text');

  openButtons.forEach((openButton, index) => {
    openButton.addEventListener('click', () => {
      descriptions.forEach((description) => {
        description.classList.remove('active');
      });
      descriptions[index].classList.add('active');
      openButtons.forEach((button) => (button.style.display = 'none'));
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      descriptions.forEach((description) => {
        description.classList.remove('active');
      });
      openButtons.forEach((button) => (button.style.display = 'block'));
    });
  });

  //валидация первой формы partner.html
  document.querySelector('.partner-btn-1').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('.partner-email-1');
    const name = document.querySelector('.partner-name-1');
    const tel = document.querySelector('.partner-tel-1');
    const company = document.querySelector('.partner-company-1');

    const errorName = document.querySelector('.partner-name-error-1');
    const errorEmail = document.querySelector('.partner-email-error-1');
    const errorTel = document.querySelector('.partner-tel-error-1');
    const companyError = document.querySelector('.partner-company-error-1');

    const nameReg = /^(?=.{2,30}$)+[A-Za-zА-Яа-я]+$/;
    const telReg = /^[8|+7]+[0-9]{7,12}$/;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;

    const validateName = (value) => nameReg.test(value);
    const validateEmail = (value) => emailReg.test(value);
    const validateTel = (value) => telReg.test(value);

    if (
      !validateName(name.value) ||
      !validateEmail(email.value) ||
      !validateTel(tel.value) ||
      (!name.value && !email.value && !tel.value && !company.value)
    ) {
      errorName.textContent =
        'Введите имя содержащее буквы русского или англиского алфавита';
      errorEmail.textContent = 'Введите email в формате : example@ex.com';
      errorTel.textContent = 'Введите номер телефона в формате 81234567890';
      companyError.textContent = 'Введите название вашей компании';
    } else {
      document.querySelector('.partner__form-1-container-data').innerHTML =
        'Ваша форма успешно отправлена';
    }
  });

  //валидация второй формы partner.html
  document.querySelector('.partner-btn-2').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('.partner-email-2');
    const name = document.querySelector('.partner-name-2');
    const tel = document.querySelector('.partner-tel-2');
    const company = document.querySelector('.partner-company-2');
    const eventForm = document.querySelector('.partner-event-2');

    const errorName = document.querySelector('.partner-name-error-2');
    const errorEmail = document.querySelector('.partner-email-error-2');
    const errorTel = document.querySelector('.partner-tel-error-2');
    const companyError = document.querySelector('.partner-company-error-2');
    const eventError = document.querySelector('.partner-event-error-2');

    const nameReg = /^(?=.{2,30}$)+[A-Za-zА-Яа-я]+$/;
    const telReg = /^[8|+7]+[0-9]{7,12}$/;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;

    const validateName = (value) => nameReg.test(value);
    const validateEmail = (value) => emailReg.test(value);
    const validateTel = (value) => telReg.test(value);

    if (
      !validateName(name.value) ||
      !validateEmail(email.value) ||
      !validateTel(tel.value) ||
      (!name.value &&
        !email.value &&
        !tel.value &&
        !companyError.value &&
        !eventForm.value)
    ) {
      errorName.textContent =
        'Введите имя содержащее буквы русского или англиского алфавита';
      errorEmail.textContent = 'Введите email в формате : example@ex.com';
      errorTel.textContent = 'Введите номер телефона в формате 81234567890';
      companyError.textContent = 'Введите название вашей компании';
      eventError.textContent = 'Введите название мероприятия';
    } else {
      document.querySelector('.partner__form-2-container-data').innerHTML =
        'Ваша форма успешно отправлена';
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
