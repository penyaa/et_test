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

//select-dropdown
function showDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}

// Добавление обработчика событий на клик по родительскому элементу
document
  .querySelector('.select-dropdown1')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    const dropdownContent = document.getElementById('selectDropdown1');
    showDropdown('selectDropdown1');
  });

document
  .querySelector('.select-dropdown2')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    const dropdownContent = document.getElementById('selectDropdown2');
    showDropdown('selectDropdown2');
  });

document
  .querySelector('.select-dropdown3')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    const dropdownContent = document.getElementById('selectDropdown3');
    showDropdown('selectDropdown3');
  });

document
  .querySelector('.select-dropdown4')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    const dropdownContent = document.getElementById('selectDropdown4');
    showDropdown('selectDropdown4');
  });
