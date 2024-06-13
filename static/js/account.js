const btnTicket = document.querySelector('.profile-ticket');
const btnEvent = document.querySelector('.profile-event');
const btnFAQ = document.querySelector('.profile-FAQ');

const title = document.querySelector('.profile-title');

const profileTicket = document.querySelector('.profile__options-ticket');
const profileEvent = document.querySelector('.profile__options-event');
const profileFAQ = document.querySelector('.profile__options-FAQ');

btnEvent.addEventListener('click', () => {
  profileTicket.style.display = 'none';
  profileFAQ.style.display = 'none';
  profileEvent.style.display = 'block';
  title.innerText = 'Мои мероприятия';
});

btnTicket.addEventListener('click', () => {
  profileTicket.style.display = 'block';
  profileEvent.style.display = 'none';
  profileFAQ.style.display = 'none';
  title.innerText = 'Мой профиль';
});

btnFAQ.addEventListener('click', () => {
  profileTicket.style.display = 'none';
  profileEvent.style.display = 'none';
  profileFAQ.style.display = 'block';
  title.innerText = 'Вопросы и ответы';
});

const reviewBtn = document.querySelector('.review-modal-btn');
const reviewModal = document.querySelector('.review__modal');

reviewBtn.addEventListener('click', () => {
  reviewModal.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target == reviewModal) {
    reviewModal.style.display = 'none';
  }
});

document
  .getElementsByClassName('review__modal-container-close')[0]
  .addEventListener('click', () => {
    reviewModal.style.display = 'none';
  });

//окно отзыва
const reviewFormBtn = document.querySelector('.review-btn');
reviewFormBtn.addEventListener('click', () => {
  document.querySelector(
    '.review__modal-container-content-form',
  ).style.display = 'none';
  document.querySelector('.review-title').innerText =
    'Ваш отзыв успешно отправлен!';
});
