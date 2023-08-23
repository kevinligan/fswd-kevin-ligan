console.log(register);
var email = "required, correct email format",
password = "minimum of 6 characters",
confirmPassword = "minimum of 6 characters",
firstName = "required",
lastName = "required",
Sex = "required"
iAgree = "required";

function register() {
    var validationResponse = { code: 200, message: "Sign up successfully" }; 
    if (email.length = 0) {
        validationResponse = { code: 400, message: "Please enter email address" };
    }
    else if (!email.match(Symbol)) {
        validationResponse = { code: 400, message: "Email format is not valid"};
    }
    return validationResponse
}