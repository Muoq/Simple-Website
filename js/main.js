var usernameInput = $('#username-input');
var passwordInput = $('#password-input');
var DOMPasswordInput = document.getElementById('password-input');

function initiateInputFields() {
  usernameInput.val('Username' + String.fromCharCode(173));
  usernameInput.addClass('inactive-text-field');
  DOMPasswordInput.type = 'text';
  passwordInput.val('Password' + String.fromCharCode(173));
  passwordInput.addClass('inactive-text-field');
}

function usernameOnFocus() {
  if (usernameInput.val() === 'Username' + String.fromCharCode(173)) {
    usernameInput.val('');
    usernameInput.removeClass('inactive-text-field');
  }
}

function usernameOnBlur() {
  if (usernameInput.val() === '') {
    usernameInput.val('Username' + String.fromCharCode(173));
    usernameInput.addClass('inactive-text-field');
  }
}

function passwordInputOnFocus() {
  if (passwordInput.val() === 'Password' + String.fromCharCode(173)) {
    passwordInput.val('');
    passwordInput.removeClass('inactive-text-field');
    DOMPasswordInput.type = 'password';
  }
}

function passwordInputOnBlur() {
  if (passwordInput.val() === '') {
    passwordInput.val('Password' + String.fromCharCode(173));
    passwordInput.addClass('inactive-text-field');
    DOMPasswordInput.type = 'text';
  }
}

function signInButtonOnClick() {
  if (usernameInput.val() === 'Username' + String.fromCharCode(173) || usernameInput.val() === '') {
    alert('Please enter a username.');
    return;
  } else if (passwordInput.val() === 'Password' + String.fromCharCode(173) || passwordInput.val() === '') {
    alert('Please enter a password.');
    return;
  }
  alert(usernameInput.val() + '\n' + passwordInput.val());
}

function main() {
  initiateInputFields();

  usernameInput.on('focus', usernameOnFocus);
  usernameInput.on('blur', usernameOnBlur);

  passwordInput.on('focus', passwordInputOnFocus);
  passwordInput.on('blur', passwordInputOnBlur);

  var signInButton = $('#sign-in-btn');
  signInButton.on('click', signInButtonOnClick);

  $(document).on('keypress', function(e) {
    if (e.which === 13) {
      signInButtonOnClick();
    }
  });
}

$(document).ready(main);
