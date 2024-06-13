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

// document.getElementsByClassName('close')[0].addEventListener('click', () => {
//   modal.style.display = 'none';
// });

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

// //переход в личный кабинет
// const signInForm = document.querySelector('.sign-in');
// signInForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = document.querySelector('.sign-name');
//   const password = document.querySelector('.sign-password');

//   if (name.value === 'admin' && password.value === '12345') {
//     window.location.href = 'account.html';
//   } else {
//     alert('Неверный логин или пароль, попробуйте еще раз.');
//   }
// });

document.getElementById('registration_Form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone_number = document.getElementById('phone_number').value;
    const password = document.getElementById('password').value;

    
    const data = { name, surname, email, phone_number, password };
    
    try {
        const response = await fetch('https://evtoday.ru/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        console.log('server response', result);
        
        if (response.ok) {
            document.getElementById('result').innerText = result.message;
            window.location.href = '/account.html';
        } else {
            document.getElementById('result').innerText = 'Error: ${result.detail}';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
    }
}); 

document.getElementById('login_form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const email_login = document.getElementById('email_login').value;
  const password_login = document.getElementById('password_login').value;
  
  const data = {
    email_login: email_login,
    password_login: password_login
  };
  
  console.log('Login data:', data.toString());
  
  try {
    const response = await fetch('https://evtoday.ru/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
      
      const result = await response.json();
      
      console.log('Login response:', result);
      
      if (response.ok) {
          localStorage.setItem('token', result.access_token);
          document.getElementById('loginResult').innerText = "Login successful";
          console.log('Redirecting to /account.html');
          window.location.href = 'account.html';
      } else {
          document.getElementById('loginResult').innerText = 'Error: ${result.detail}';
      }
  } catch (error) {
      console.error('Error:', error);
      document.getElementById('loginResult').innerText = 'An error occurred. Please try again.';
  }
});

async function checkSession() {
  const token = localStorage.getItem('token');
  if (!token) {
      document.getElementById('navbar').innerHTML = '<a href="/registration.html"></a>';
      return;
  }
  
  try {
      const response = await fetch('https://evtoday.ru/session', {
          headers: {
              'Authorization': 'Bearer ' + token
          }
      });
      if (response.ok) {
          const data = await response.json();
      } 
  } catch (error) {
      console.error('Error:', error);
  }
}

checkSession();
   