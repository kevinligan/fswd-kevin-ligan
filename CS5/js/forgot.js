let emailInput = document.getElementById('email');
let emailError = document.getElementById('email_error');

let validateEmail = () => {
    let email = emailInput.value.trim();
    let validationResponse = { code: 200, message: "Forgot Password link sent" };

    if (email.length === 0) {
        validationResponse = { code: 400, message: "Please enter an email address" };
    } else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
        validationResponse = { code: 400, message: "Invalid email format" };
    }

    emailError.textContent = validationResponse.message;
    return validationResponse;
};

let resetPasswordButton = document.querySelector('.rp1 a');
resetPasswordButton.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail();
});

// Additional code for handling form submission, AJAX requests, etc. can be added here