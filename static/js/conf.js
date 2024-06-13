document.addEventListener('DOMContentLoaded', () => {
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
