let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let rememberMeCheckbox = document.getElementById('rememberme');
let loginButton = document.querySelector('.login');

loginButton.addEventListener('click', function() {
    if (emailInput.value === '') {
        document.getElementById('email_error').textContent = 'Please enter your email.';
    } else {
        document.getElementById('email_error').textContent = '';
    }
    
    if (passwordInput.value === '') {
        document.getElementById('password_error').textContent = 'Please enter your password.';
    } else {
        document.getElementById('password_error').textContent = '';
    }
    
    if (emailInput.value !== '' && passwordInput.value !== '') {
        alert('Login successful!');
    }
})