//timer for buytickets.html
document.addEventListener('DOMContentLoaded', function () {
  const month = 4;
  const day = 1;

  const deadline = new Date(2024, month, day);

  let timerId = null;

  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }

  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, [
      'минута',
      'минуты',
      'минут',
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      'секунда',
      'секунды',
      'секунд',
    ]);
  }
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');

  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);

  //работа окна по прибавлению количества человек для покупки билета на форсайт-сессию
  const plus = document.querySelector('.plusPerson');
  const minus = document.querySelector('.minusPerson');
  const persons = document.querySelector('.persons');

  const incraseValue = () => {
    const currentValue = parseInt(persons.value, 10);
    persons.value = isNaN(currentValue) ? 0 : currentValue + 1;
  };

  const decreaseValue = () => {
    const currentValue = parseInt(persons.value, 10);
    persons.value = Math.max(0, currentValue - 1);
  };

  plus.addEventListener('click', incraseValue);
  minus.addEventListener('click', decreaseValue);

  //валидация формы форсайт-сессия
  document.querySelector('.fors_sess-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const formDiv = document.querySelector('.buy__tickets-form');
    const fio = document.getElementById('fio');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');

    const errorFio = document.querySelector('.fio_error');
    const errorEmail = document.querySelector('.email_error');
    const errorTel = document.querySelector('.tel_error');

    const fioReg = /^(?=.{2,30}$)+[A-Za-zА-Яа-я]+$/;
    const telReg = /^[8|+7]+[0-9]{7,12}$/;
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;

    const validateFio = (value) => fioReg.test(value);
    const validateEmail = (value) => emailReg.test(value);
    const validateTel = (value) => telReg.test(value);

    if (
      (!validateFio(fio.value) &&
        !validateEmail(email.value) &&
        !validateTel(tel.value)) ||
      (fio.value === '' && email.value === '' && tel.value === '')
    ) {
      errorFio.textContent =
        'Введите имя содержащее буквы русского или англиского алфавита';
      errorEmail.textContent = 'Введите email в формате : example@ex.com';
      errorTel.textContent = 'Введите номер телефона в формате 81234567890';
    } else {
      formDiv.innerHTML = 'Форма успешно отправлена!';
      formDiv.style.fontSize = '2em';
      formDiv.style.fontWeight = '600';
      formDiv.style.padding = '50px';
    }
  });

  //валидация для формы варианты партнерского участия
  document.querySelector('.data_btn').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('.data_email');
    const name = document.querySelector('.data_name');
    const tel = document.querySelector('.data_tel');

    const errorName = document.querySelector('.data_name-error');
    const errorEmail = document.querySelector('.data_email-error');
    const errorTel = document.querySelector('.data_tel-error');

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
      document.querySelector('.data-title').innerText =
        'Варианты партнерского участия будут отправлены Вам в течении часа.';
      name.value = '';
      email.value = '';
      tel.value = '';
    }
  });

  document.querySelector('.programm-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('.programm-email');
    const error = document.querySelector('.programm-error');
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/;

    const validateEmail = (value) => emailReg.test(value);

    if (!validateEmail(email.value)) {
      error.textContent = 'Введите email в формате : example@ex.com';
    } else {
      document.querySelector('.programm-title').innerText =
        'Вы получите програму на почту в течении часа.';
      email.value = '';
      error.textContent = '';
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
