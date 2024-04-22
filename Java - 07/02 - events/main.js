const form = document.getElementById('form');

function checkEmail() {
  const email = document.getElementById('exampleInputEmail1').value.trim();
  const emailHelp = document.getElementById('emailHelp');
  if (!email) {
    emailHelp.textContent = 'Fusha e email eshte obligative.';
    return;
  } else {
    emailHelp.textContent = '';
  }
}

function checkPassword() {
  const password = document.getElementById('exampleInputPassword1').value.trim();
  const passwordHelp = document.getElementById('passwordHelp');
  if (!password || password.length < 6) {
    passwordHelp.textContent = 'Passwordi eshte obligativ, se paku 6 karaktere';
    return;
  } else {
    passwordHelp.textContent = '';
  }
}

form.addEventListener('submit', (e) => {
  // ndalon faqen me u bo refresh
  e.preventDefault();

  checkEmail();
  checkPassword();
});

const inpEmail = document.getElementById('exampleInputEmail1');
inpEmail.addEventListener('blur', () => {
  checkEmail();
});

const inpPassword = document.getElementById('exampleInputPassword1');
inpPassword.addEventListener('blur', () => {
  checkPassword();
});
