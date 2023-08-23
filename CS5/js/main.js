let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmPasswordInput = document.getElementById('confirmPassword');
let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');
let agreeCheckbox = document.getElementById('iAgree');
let signupButton = document.querySelector('.submit');
let maleRadio = document.getElementById('SexM');
let femaleRadio = document.getElementById('SexF');

signupButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the form from submitting

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

    if (confirmPasswordInput.value === '') {
        document.getElementById('confirmPassword_error').textContent = 'Please confirm your password.';
    } else {
        document.getElementById('confirmPassword_error').textContent = '';
    }

    if (firstNameInput.value === '') {
        document.getElementById('firstName_error').textContent = 'Please enter your first name.';
    } else {
        document.getElementById('firstName_error').textContent = '';
    }

    if (lastNameInput.value === '') {
        document.getElementById('lastName_error').textContent = 'Please enter your last name.';
    } else {
        document.getElementById('lastName_error').textContent = '';
    }

    if (!agreeCheckbox.checked) {
        document.getElementById('iAgree_error').textContent = 'Please agree to the terms and conditions.';
    } else {
        document.getElementById('iAgree_error').textContent = '';
    }

    if (!maleRadio.checked && !femaleRadio.checked) {
        document.getElementById('SexM_error').textContent = 'Please select your gender.';
        document.getElementById('SexF_error').textContent = 'Please select your gender.';
    } else {
        document.getElementById('SexM_error').textContent = '';
        document.getElementById('SexF_error').textContent = '';
    }

    if (emailInput.value !== '' && passwordInput.value !== '' && confirmPasswordInput.value !== '' && firstNameInput.value !== '' && lastNameInput.value !== '' && agreeCheckbox.checked && (maleRadio.checked || femaleRadio.checked)) {
        alert('Signup successful!');
    }
})